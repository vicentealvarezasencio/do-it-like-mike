#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import os from 'os';
import crypto from 'crypto';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors
const cyan = '\x1b[36m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const red = '\x1b[31m';
const dim = '\x1b[2m';
const bold = '\x1b[1m';
const reset = '\x1b[0m';

// Get version from package.json
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));

// Parse args
const args = process.argv.slice(2);
const hasLocal = args.includes('--local') || args.includes('-l');
const hasUninstall = args.includes('--uninstall') || args.includes('-u');
const hasDryRun = args.includes('--dry-run');
const hasForce = args.includes('--force') || args.includes('-f');

const banner = '\n' +
  cyan + ' ███╗   ███╗██╗██╗  ██╗███████╗\n' +
  ' ████╗ ████║██║██║ ██╔╝██╔════╝\n' +
  ' ██╔████╔██║██║█████╔╝ █████╗\n' +
  ' ██║╚██╔╝██║██║██╔═██╗ ██╔══╝\n' +
  ' ██║ ╚═╝ ██║██║██║  ██╗███████╗\n' +
  ' ╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚══════╝' + reset + '\n' +
  '\n' +
  `  ${bold}Don't half ass it. Do it like Mike.${reset}  ${dim}v${pkg.version}${reset}\n`;

console.log(banner);

// Determine install directory
const installBase = hasLocal
  ? path.join(process.cwd(), '.claude')
  : path.join(os.homedir(), '.claude');

const pkgRoot = path.join(__dirname, '..');

// Framework directory inside the install base
const frameworkDir = 'do-it-like-mike';

// File mappings: source (relative to pkgRoot) → destination (relative to installBase)
function getFileMappings() {
  const mappings = [];

  // Commands → commands/mike/
  const commandsDir = path.join(pkgRoot, 'commands', 'mike');
  if (fs.existsSync(commandsDir)) {
    for (const file of fs.readdirSync(commandsDir)) {
      if (file.endsWith('.md')) {
        mappings.push({
          src: path.join('commands', 'mike', file),
          dest: path.join('commands', 'mike', file),
          type: 'command',
        });
      }
    }
  }

  // Agents → agents/ (all prefixed with mike-)
  const agentsDir = path.join(pkgRoot, 'agents');
  if (fs.existsSync(agentsDir)) {
    for (const file of fs.readdirSync(agentsDir)) {
      if (file.endsWith('.md') && file.startsWith('mike-')) {
        mappings.push({
          src: path.join('agents', file),
          dest: path.join('agents', file),
          type: 'agent',
        });
      }
    }
  }

  // Workflows → do-it-like-mike/workflows/
  addDirRecursive(mappings, 'workflows', path.join(frameworkDir, 'workflows'), 'workflow');

  // Templates → do-it-like-mike/templates/
  addDirRecursive(mappings, 'templates', path.join(frameworkDir, 'templates'), 'template');

  // References → do-it-like-mike/references/
  addDirRecursive(mappings, 'references', path.join(frameworkDir, 'references'), 'reference');

  // Hooks → hooks/ (all prefixed with mike-)
  const hooksDir = path.join(pkgRoot, 'hooks');
  if (fs.existsSync(hooksDir)) {
    for (const file of fs.readdirSync(hooksDir)) {
      if (file.startsWith('mike-')) {
        mappings.push({
          src: path.join('hooks', file),
          dest: path.join('hooks', file),
          type: 'hook',
        });
      }
    }
  }

  return mappings;
}

function addDirRecursive(mappings, srcRel, destRel, type) {
  const srcFull = path.join(pkgRoot, srcRel);
  if (!fs.existsSync(srcFull)) return;

  for (const entry of fs.readdirSync(srcFull, { withFileTypes: true })) {
    const entrySrcRel = path.join(srcRel, entry.name);
    const entryDestRel = path.join(destRel, entry.name);

    if (entry.isDirectory()) {
      addDirRecursive(mappings, entrySrcRel, entryDestRel, type);
    } else {
      mappings.push({ src: entrySrcRel, dest: entryDestRel, type });
    }
  }
}

// SHA-256 hash of a file
function hashFile(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
}

// Replace path placeholders in markdown content
function replacePaths(content, installBasePath) {
  // Replace ~/.claude/ references with actual install path
  const homePrefix = installBasePath.replace(os.homedir(), '~');
  return content
    .replace(/~\/\.claude\/do-it-like-mike\//g, `${homePrefix}/${frameworkDir}/`)
    .replace(/@~\/\.claude\/do-it-like-mike\//g, `@${homePrefix}/${frameworkDir}/`);
}

// Manifest management
const manifestPath = path.join(installBase, frameworkDir, 'mike-file-manifest.json');

function loadManifest() {
  if (fs.existsSync(manifestPath)) {
    return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  }
  return { version: null, files: {} };
}

function saveManifest(manifest) {
  const dir = path.dirname(manifestPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
}

// Check for local modifications
function checkLocalModifications(mappings, manifest) {
  const modified = [];
  for (const mapping of mappings) {
    const destFull = path.join(installBase, mapping.dest);
    if (fs.existsSync(destFull)) {
      const currentHash = hashFile(destFull);
      const knownHash = manifest.files[mapping.dest];
      if (knownHash && currentHash !== knownHash) {
        modified.push({ ...mapping, currentHash, knownHash });
      }
    }
  }
  return modified;
}

// Backup locally modified files
function backupModified(modified) {
  if (modified.length === 0) return;

  const backupDir = path.join(installBase, frameworkDir, 'mike-local-patches');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(backupDir, timestamp);
  fs.mkdirSync(backupPath, { recursive: true });

  console.log(`\n  ${yellow}Backing up ${modified.length} locally modified file(s):${reset}`);
  for (const mod of modified) {
    const destFull = path.join(installBase, mod.dest);
    const backupFile = path.join(backupPath, mod.dest);
    fs.mkdirSync(path.dirname(backupFile), { recursive: true });
    fs.copyFileSync(destFull, backupFile);
    console.log(`    ${dim}${mod.dest}${reset}`);
  }
  console.log(`  ${dim}Backed up to: ${backupPath}${reset}\n`);
}

// Install flow
async function install() {
  const mappings = getFileMappings();
  const manifest = loadManifest();

  console.log(`  ${bold}Installing to:${reset} ${installBase}`);
  console.log(`  ${bold}Files:${reset} ${mappings.length}`);
  console.log('');

  if (hasDryRun) {
    console.log(`  ${yellow}DRY RUN — no files will be written${reset}\n`);
    const byType = {};
    for (const m of mappings) {
      byType[m.type] = (byType[m.type] || 0) + 1;
    }
    for (const [type, count] of Object.entries(byType)) {
      console.log(`    ${type}: ${count} files`);
    }
    console.log('');
    for (const m of mappings) {
      console.log(`    ${dim}${m.dest}${reset}`);
    }
    return;
  }

  // Check for local modifications
  const modified = checkLocalModifications(mappings, manifest);
  if (modified.length > 0) {
    backupModified(modified);
  }

  // Confirmation prompt (unless --force)
  if (!hasForce) {
    const confirmed = await confirm(`  Install ${mappings.length} files to ${installBase}?`);
    if (!confirmed) {
      console.log(`\n  ${yellow}Installation cancelled.${reset}`);
      process.exit(0);
    }
  }

  // Install files
  const newManifest = { version: pkg.version, files: {} };
  let installed = 0;
  let skipped = 0;

  for (const mapping of mappings) {
    const srcFull = path.join(pkgRoot, mapping.src);
    const destFull = path.join(installBase, mapping.dest);

    // Create destination directory
    fs.mkdirSync(path.dirname(destFull), { recursive: true });

    // Read source content
    let content = fs.readFileSync(srcFull);

    // Path replacement for markdown files
    if (mapping.src.endsWith('.md')) {
      let textContent = content.toString('utf8');
      textContent = replacePaths(textContent, installBase);
      content = Buffer.from(textContent, 'utf8');
    }

    // Write file
    fs.writeFileSync(destFull, content);

    // Record hash in manifest
    newManifest.files[mapping.dest] = hashFile(destFull);
    installed++;
  }

  // Write VERSION file
  const versionPath = path.join(installBase, frameworkDir, 'VERSION');
  fs.mkdirSync(path.dirname(versionPath), { recursive: true });
  fs.writeFileSync(versionPath, pkg.version);

  // Save manifest
  saveManifest(newManifest);

  console.log('');
  console.log(`  ${green}Installed ${installed} files successfully.${reset}`);
  if (skipped > 0) {
    console.log(`  ${dim}Skipped ${skipped} unchanged files.${reset}`);
  }
  console.log('');
  console.log(`  ${bold}Next steps:${reset}`);
  console.log(`    1. Open Claude Code in your project`);
  console.log(`    2. Run ${cyan}/mike:init${reset} to get started`);
  console.log(`    3. Run ${cyan}/mike:help${reset} for command reference`);
  console.log('');
}

// Uninstall flow
async function uninstall() {
  console.log(`  ${bold}Uninstalling MIKE from:${reset} ${installBase}\n`);

  const manifest = loadManifest();
  const removed = [];
  const notFound = [];

  // Remove files from manifest
  if (manifest.files && Object.keys(manifest.files).length > 0) {
    for (const relPath of Object.keys(manifest.files)) {
      const fullPath = path.join(installBase, relPath);
      if (fs.existsSync(fullPath)) {
        removed.push(relPath);
      } else {
        notFound.push(relPath);
      }
    }
  } else {
    // No manifest — remove known MIKE paths
    const knownPaths = [
      path.join('commands', 'mike'),
      path.join(frameworkDir),
    ];

    // Find mike-* files in agents/ and hooks/
    for (const dir of ['agents', 'hooks']) {
      const dirPath = path.join(installBase, dir);
      if (fs.existsSync(dirPath)) {
        for (const file of fs.readdirSync(dirPath)) {
          if (file.startsWith('mike-')) {
            removed.push(path.join(dir, file));
          }
        }
      }
    }

    // Find commands/mike/
    const cmdDir = path.join(installBase, 'commands', 'mike');
    if (fs.existsSync(cmdDir)) {
      for (const file of fs.readdirSync(cmdDir)) {
        removed.push(path.join('commands', 'mike', file));
      }
    }

    // Framework dir
    const fwDir = path.join(installBase, frameworkDir);
    if (fs.existsSync(fwDir)) {
      addAllFiles(removed, fwDir, frameworkDir);
    }
  }

  if (removed.length === 0) {
    console.log(`  ${yellow}No MIKE files found to remove.${reset}`);
    return;
  }

  console.log(`  Found ${removed.length} MIKE files to remove.`);

  if (!hasForce) {
    const confirmed = await confirm(`  Remove ${removed.length} files?`);
    if (!confirmed) {
      console.log(`\n  ${yellow}Uninstall cancelled.${reset}`);
      process.exit(0);
    }
  }

  // Remove files
  for (const relPath of removed) {
    const fullPath = path.join(installBase, relPath);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }

  // Clean up empty directories
  cleanEmptyDirs(path.join(installBase, 'commands', 'mike'));
  cleanEmptyDirs(path.join(installBase, frameworkDir));

  console.log(`\n  ${green}Removed ${removed.length} MIKE files.${reset}`);
  console.log(`  ${dim}Other frameworks' files were preserved.${reset}\n`);
}

function addAllFiles(list, dirPath, relBase) {
  if (!fs.existsSync(dirPath)) return;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const rel = path.join(relBase, entry.name);
    if (entry.isDirectory()) {
      addAllFiles(list, path.join(dirPath, entry.name), rel);
    } else {
      list.push(rel);
    }
  }
}

function cleanEmptyDirs(dirPath) {
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) return;

  const entries = fs.readdirSync(dirPath);
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      cleanEmptyDirs(fullPath);
    }
  }

  // Re-check after cleaning subdirs
  if (fs.readdirSync(dirPath).length === 0) {
    fs.rmdirSync(dirPath);
  }
}

// Confirmation prompt
function confirm(message) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(`${message} ${dim}(y/N)${reset} `, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
    });
  });
}

// Main
if (hasUninstall) {
  uninstall().catch((err) => {
    console.error(`\n  ${red}Uninstall failed:${reset} ${err.message}`);
    process.exit(1);
  });
} else {
  install().catch((err) => {
    console.error(`\n  ${red}Install failed:${reset} ${err.message}`);
    process.exit(1);
  });
}
