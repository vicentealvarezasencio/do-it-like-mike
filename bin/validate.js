#!/usr/bin/env node

/**
 * Pre-publish validation for the do-it-like-mike package.
 * Runs as prepublishOnly to catch issues before npm publish.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgRoot = path.join(__dirname, '..');

const red = '\x1b[31m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const dim = '\x1b[2m';
const bold = '\x1b[1m';
const reset = '\x1b[0m';

let errors = 0;
let warnings = 0;

function error(msg) {
  console.error(`  ${red}ERROR:${reset} ${msg}`);
  errors++;
}

function warn(msg) {
  console.warn(`  ${yellow}WARN:${reset} ${msg}`);
  warnings++;
}

function ok(msg) {
  console.log(`  ${green}OK:${reset} ${msg}`);
}

console.log(`\n${bold}MIKE Pre-Publish Validation${reset}\n`);

// 1. Check package.json
const pkg = JSON.parse(fs.readFileSync(path.join(pkgRoot, 'package.json'), 'utf8'));
if (pkg.name !== 'do-it-like-mike') {
  error('package.json name must be "do-it-like-mike"');
} else {
  ok('package.json name correct');
}

if (!pkg.version) {
  error('package.json missing version');
} else {
  ok(`version: ${pkg.version}`);
}

if (pkg.type !== 'module') {
  error('package.json type must be "module"');
} else {
  ok('ESM module type');
}

// 2. Check required files exist
const requiredFiles = [
  'bin/install.js',
  'LICENSE',
  'README.md',
];

for (const file of requiredFiles) {
  if (fs.existsSync(path.join(pkgRoot, file))) {
    ok(`${file} exists`);
  } else {
    error(`Missing required file: ${file}`);
  }
}

// 3. Check commands directory
const commandsDir = path.join(pkgRoot, 'commands', 'mike');
if (!fs.existsSync(commandsDir)) {
  error('Missing commands/mike/ directory');
} else {
  const commands = fs.readdirSync(commandsDir).filter(f => f.endsWith('.md'));
  if (commands.length === 0) {
    error('No command files found in commands/mike/');
  } else {
    ok(`${commands.length} command(s) found`);

    // Validate command frontmatter
    for (const cmd of commands) {
      const content = fs.readFileSync(path.join(commandsDir, cmd), 'utf8');
      if (!content.startsWith('---')) {
        error(`${cmd}: Missing YAML frontmatter`);
      } else {
        const frontmatter = content.split('---')[1];
        if (!frontmatter.includes('name:')) {
          error(`${cmd}: Missing 'name' in frontmatter`);
        }
        if (!frontmatter.includes('description:')) {
          error(`${cmd}: Missing 'description' in frontmatter`);
        }
        if (!frontmatter.includes('mike:')) {
          error(`${cmd}: Command name must include 'mike:' prefix`);
        }
      }
    }
  }
}

// 4. Check templates directory
const templatesDir = path.join(pkgRoot, 'templates');
if (!fs.existsSync(templatesDir)) {
  error('Missing templates/ directory');
} else {
  const templates = fs.readdirSync(templatesDir);
  const requiredTemplates = ['config.json', 'state.json', 'STATE.md', 'PROJECT.md', 'ROADMAP.md'];
  for (const tmpl of requiredTemplates) {
    if (templates.includes(tmpl)) {
      ok(`Template: ${tmpl}`);
    } else {
      error(`Missing template: ${tmpl}`);
    }
  }

  // Validate config.json template is valid JSON
  try {
    JSON.parse(fs.readFileSync(path.join(templatesDir, 'config.json'), 'utf8'));
    ok('config.json template is valid JSON');
  } catch (e) {
    error(`config.json template is invalid JSON: ${e.message}`);
  }

  // Validate state.json template is valid JSON
  try {
    JSON.parse(fs.readFileSync(path.join(templatesDir, 'state.json'), 'utf8'));
    ok('state.json template is valid JSON');
  } catch (e) {
    error(`state.json template is invalid JSON: ${e.message}`);
  }
}

// 5. Check references directory
const refsDir = path.join(pkgRoot, 'references');
if (!fs.existsSync(refsDir)) {
  error('Missing references/ directory');
} else {
  const requiredRefs = ['rules.md', 'context-brackets.md', 'deviation-rules.md'];
  const refs = fs.readdirSync(refsDir);
  for (const ref of requiredRefs) {
    if (refs.includes(ref)) {
      ok(`Reference: ${ref}`);
    } else {
      error(`Missing reference: ${ref}`);
    }
  }
}

// 6. Check workflows directory
const workflowsDir = path.join(pkgRoot, 'workflows');
if (!fs.existsSync(workflowsDir)) {
  error('Missing workflows/ directory');
} else {
  const workflows = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.md'));
  ok(`${workflows.length} workflow(s) found`);
}

// 7. Check agents directory (may be empty in early phases)
const agentsDir = path.join(pkgRoot, 'agents');
if (!fs.existsSync(agentsDir)) {
  warn('No agents/ directory (expected in Phase 3+)');
} else {
  const agents = fs.readdirSync(agentsDir).filter(f => f.endsWith('.md'));
  if (agents.length === 0) {
    warn('No agent files found (expected in Phase 3+)');
  } else {
    ok(`${agents.length} agent(s) found`);
    // Verify all agents have mike- prefix
    for (const agent of agents) {
      if (!agent.startsWith('mike-')) {
        error(`Agent file must have mike- prefix: ${agent}`);
      }
    }
  }
}

// 8. Check hooks (may not exist yet)
const hooksDir = path.join(pkgRoot, 'hooks');
if (fs.existsSync(hooksDir)) {
  const hooks = fs.readdirSync(hooksDir).filter(f => f.startsWith('mike-'));
  if (hooks.length > 0) {
    ok(`${hooks.length} hook(s) found`);
    for (const hook of hooks) {
      if (!hook.startsWith('mike-')) {
        error(`Hook file must have mike- prefix: ${hook}`);
      }
    }
  }
}

// 9. Cross-reference: commands reference existing workflows
if (fs.existsSync(commandsDir)) {
  const commands = fs.readdirSync(commandsDir).filter(f => f.endsWith('.md'));
  for (const cmd of commands) {
    const content = fs.readFileSync(path.join(commandsDir, cmd), 'utf8');
    const workflowRefs = content.match(/@~\/\.claude\/do-it-like-mike\/workflows\/[\w-]+\.md/g) || [];
    for (const ref of workflowRefs) {
      const workflowName = ref.split('/').pop();
      const workflowPath = path.join(pkgRoot, 'workflows', workflowName);
      if (!fs.existsSync(workflowPath)) {
        warn(`${cmd} references missing workflow: ${workflowName}`);
      }
    }
  }
}

// Summary
console.log(`\n${bold}Results:${reset}`);
console.log(`  ${errors > 0 ? red : green}Errors: ${errors}${reset}`);
console.log(`  ${warnings > 0 ? yellow : green}Warnings: ${warnings}${reset}`);
console.log('');

if (errors > 0) {
  console.log(`${red}Validation failed. Fix errors before publishing.${reset}\n`);
  process.exit(1);
} else if (warnings > 0) {
  console.log(`${yellow}Validation passed with warnings.${reset}\n`);
} else {
  console.log(`${green}Validation passed.${reset}\n`);
}
