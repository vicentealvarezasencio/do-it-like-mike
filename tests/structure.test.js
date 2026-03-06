import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgRoot = path.join(__dirname, '..');

describe('Package structure', () => {
  it('has a valid package.json', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(pkgRoot, 'package.json'), 'utf8'));
    assert.equal(pkg.name, 'do-it-like-mike');
    assert.equal(pkg.type, 'module');
    assert.ok(pkg.version);
    assert.ok(pkg.bin['do-it-like-mike']);
  });

  it('has the installer entry point', () => {
    assert.ok(fs.existsSync(path.join(pkgRoot, 'bin', 'install.js')));
  });

  it('has the validation script', () => {
    assert.ok(fs.existsSync(path.join(pkgRoot, 'bin', 'validate.js')));
  });

  it('has LICENSE file', () => {
    assert.ok(fs.existsSync(path.join(pkgRoot, 'LICENSE')));
  });
});

describe('Commands', () => {
  const commandsDir = path.join(pkgRoot, 'commands', 'mike');

  it('has commands/mike/ directory', () => {
    assert.ok(fs.existsSync(commandsDir));
  });

  it('has at least the Phase 1 commands', () => {
    const required = ['init.md', 'progress.md', 'help.md', 'settings.md'];
    const files = fs.readdirSync(commandsDir);
    for (const cmd of required) {
      assert.ok(files.includes(cmd), `Missing command: ${cmd}`);
    }
  });

  it('all commands have valid YAML frontmatter', () => {
    const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const content = fs.readFileSync(path.join(commandsDir, file), 'utf8');
      assert.ok(content.startsWith('---'), `${file}: Missing YAML frontmatter`);

      const frontmatter = content.split('---')[1];
      assert.ok(frontmatter.includes('name:'), `${file}: Missing name in frontmatter`);
      assert.ok(frontmatter.includes('description:'), `${file}: Missing description in frontmatter`);
      assert.match(frontmatter, /name:\s*mike:/, `${file}: Name must include mike: prefix`);
    }
  });

  it('all commands have an objective section', () => {
    const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const content = fs.readFileSync(path.join(commandsDir, file), 'utf8');
      assert.ok(content.includes('<objective>'), `${file}: Missing <objective> section`);
    }
  });

  it('all commands have a process section', () => {
    const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const content = fs.readFileSync(path.join(commandsDir, file), 'utf8');
      assert.ok(content.includes('<process>'), `${file}: Missing <process> section`);
    }
  });
});

describe('Templates', () => {
  const templatesDir = path.join(pkgRoot, 'templates');

  it('has templates/ directory', () => {
    assert.ok(fs.existsSync(templatesDir));
  });

  it('has all Phase 1 templates', () => {
    const required = ['config.json', 'state.json', 'STATE.md', 'PROJECT.md', 'ROADMAP.md', 'ISSUES.md'];
    const files = fs.readdirSync(templatesDir);
    for (const tmpl of required) {
      assert.ok(files.includes(tmpl), `Missing template: ${tmpl}`);
    }
  });

  it('config.json template is valid JSON', () => {
    const content = fs.readFileSync(path.join(templatesDir, 'config.json'), 'utf8');
    assert.doesNotThrow(() => JSON.parse(content));
  });

  it('state.json template is valid JSON', () => {
    const content = fs.readFileSync(path.join(templatesDir, 'state.json'), 'utf8');
    assert.doesNotThrow(() => JSON.parse(content));
  });

  it('config.json has all required sections', () => {
    const config = JSON.parse(fs.readFileSync(path.join(templatesDir, 'config.json'), 'utf8'));
    const requiredKeys = ['mike_version', 'profile', 'planning', 'architecture', 'sharding',
      'execution', 'verification', 'git', 'context', 'rules_engine', 'design', 'metrics'];
    for (const key of requiredKeys) {
      assert.ok(key in config, `config.json missing key: ${key}`);
    }
  });

  it('state.json has all required sections', () => {
    const state = JSON.parse(fs.readFileSync(path.join(templatesDir, 'state.json'), 'utf8'));
    const requiredKeys = ['project', 'version', 'profile', 'current_milestone',
      'current_phase', 'session', 'decisions', 'blockers'];
    for (const key of requiredKeys) {
      assert.ok(key in state, `state.json missing key: ${key}`);
    }
  });
});

describe('References', () => {
  const refsDir = path.join(pkgRoot, 'references');

  it('has references/ directory', () => {
    assert.ok(fs.existsSync(refsDir));
  });

  it('has all Phase 1 references', () => {
    const required = ['rules.md', 'context-brackets.md', 'deviation-rules.md'];
    const files = fs.readdirSync(refsDir);
    for (const ref of required) {
      assert.ok(files.includes(ref), `Missing reference: ${ref}`);
    }
  });

  it('rules.md defines all 12 rules', () => {
    const content = fs.readFileSync(path.join(refsDir, 'rules.md'), 'utf8');
    for (let i = 1; i <= 12; i++) {
      assert.ok(content.includes(`## R${i}`), `rules.md missing R${i}`);
    }
  });

  it('context-brackets.md defines all 4 brackets', () => {
    const content = fs.readFileSync(path.join(refsDir, 'context-brackets.md'), 'utf8');
    for (const bracket of ['FRESH', 'MODERATE', 'DEEP', 'CRITICAL']) {
      assert.ok(content.includes(`## ${bracket}`), `context-brackets.md missing ${bracket}`);
    }
  });

  it('deviation-rules.md defines all 4 levels', () => {
    const content = fs.readFileSync(path.join(refsDir, 'deviation-rules.md'), 'utf8');
    for (const level of ['Level 1', 'Level 2', 'Level 3', 'Level 4']) {
      assert.ok(content.includes(level), `deviation-rules.md missing ${level}`);
    }
  });
});

describe('Workflows', () => {
  const workflowsDir = path.join(pkgRoot, 'workflows');

  it('has workflows/ directory', () => {
    assert.ok(fs.existsSync(workflowsDir));
  });

  it('has all Phase 1 workflows', () => {
    const required = ['profile-resolution.md', 'scale-detection.md', 'rules-engine.md'];
    const files = fs.readdirSync(workflowsDir);
    for (const wf of required) {
      assert.ok(files.includes(wf), `Missing workflow: ${wf}`);
    }
  });
});

describe('Installer', () => {
  it('installer is valid ESM', async () => {
    // Just verify it parses without syntax errors
    const content = fs.readFileSync(path.join(pkgRoot, 'bin', 'install.js'), 'utf8');
    assert.ok(content.includes('import fs from'));
    assert.ok(content.includes('import path from'));
  });

  it('installer has install and uninstall functions', () => {
    const content = fs.readFileSync(path.join(pkgRoot, 'bin', 'install.js'), 'utf8');
    assert.ok(content.includes('async function install()'));
    assert.ok(content.includes('async function uninstall()'));
  });

  it('installer has file manifest support', () => {
    const content = fs.readFileSync(path.join(pkgRoot, 'bin', 'install.js'), 'utf8');
    assert.ok(content.includes('mike-file-manifest.json'));
    assert.ok(content.includes('sha256'));
  });

  it('installer has path replacement', () => {
    const content = fs.readFileSync(path.join(pkgRoot, 'bin', 'install.js'), 'utf8');
    assert.ok(content.includes('replacePaths'));
    assert.ok(content.includes('do-it-like-mike'));
  });

  it('installer supports --local, --uninstall, --dry-run, --force flags', () => {
    const content = fs.readFileSync(path.join(pkgRoot, 'bin', 'install.js'), 'utf8');
    assert.ok(content.includes('--local'));
    assert.ok(content.includes('--uninstall'));
    assert.ok(content.includes('--dry-run'));
    assert.ok(content.includes('--force'));
  });
});
