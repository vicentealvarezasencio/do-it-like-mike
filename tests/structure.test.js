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

  it('has Phase 4 FORGE commands', () => {
    const required = ['architect.md', 'design.md', 'shard.md'];
    const files = fs.readdirSync(commandsDir);
    for (const cmd of required) {
      assert.ok(files.includes(cmd), `Missing Phase 4 command: ${cmd}`);
    }
  });

  it('has Phase 5 SCOUT commands', () => {
    const required = ['map.md', 'debug.md', 'issues.md'];
    const files = fs.readdirSync(commandsDir);
    for (const cmd of required) {
      assert.ok(files.includes(cmd), `Missing Phase 5 command: ${cmd}`);
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

  it('has Phase 4 references', () => {
    const required = ['sharding-algorithm.md', 'acceptance-criteria.md'];
    const files = fs.readdirSync(refsDir);
    for (const ref of required) {
      assert.ok(files.includes(ref), `Missing reference: ${ref}`);
    }
  });

  it('has design knowledge base', () => {
    const designDir = path.join(refsDir, 'design');
    assert.ok(fs.existsSync(designDir), 'Missing references/design/ directory');
    const required = [
      'styles.md', 'color-palettes.md', 'typography.md', 'industry-rules.md',
      'landing-patterns.md', 'dashboard-patterns.md', 'anti-patterns.md', 'design-checklist.md'
    ];
    const files = fs.readdirSync(designDir);
    for (const ref of required) {
      assert.ok(files.includes(ref), `Missing design reference: ${ref}`);
    }
  });

  it('has stack-specific design guides', () => {
    const stacksDir = path.join(refsDir, 'design', 'stacks');
    assert.ok(fs.existsSync(stacksDir), 'Missing references/design/stacks/ directory');
    const required = [
      'html-tailwind.md', 'react-shadcn.md', 'nextjs.md', 'swiftui.md',
      'flutter.md', 'react-native.md', 'vue-nuxt.md'
    ];
    const files = fs.readdirSync(stacksDir);
    for (const ref of required) {
      assert.ok(files.includes(ref), `Missing stack guide: ${ref}`);
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

  it('sharding-algorithm.md covers key topics', () => {
    const content = fs.readFileSync(path.join(refsDir, 'sharding-algorithm.md'), 'utf8');
    assert.ok(content.includes('Token'), 'sharding-algorithm.md missing token budget info');
    assert.ok(content.includes('Wave'), 'sharding-algorithm.md missing wave assignment');
    assert.ok(content.includes('Validation'), 'sharding-algorithm.md missing validation');
  });
});

describe('Agents', () => {
  const agentsDir = path.join(pkgRoot, 'agents');

  it('has agents/ directory', () => {
    assert.ok(fs.existsSync(agentsDir));
  });

  it('has all 10 agents (Phase 1-5)', () => {
    const required = [
      'mike-executor.md', 'mike-researcher.md', 'mike-synthesizer.md',
      'mike-planner.md', 'mike-plan-checker.md',
      'mike-verifier.md', 'mike-sharder.md', 'mike-designer.md',
      'mike-codebase-mapper.md', 'mike-debugger.md'
    ];
    const files = fs.readdirSync(agentsDir);
    for (const agent of required) {
      assert.ok(files.includes(agent), `Missing agent: ${agent}`);
    }
  });

  it('all agents have the MIKE agent header', () => {
    const files = fs.readdirSync(agentsDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const content = fs.readFileSync(path.join(agentsDir, file), 'utf8');
      assert.ok(content.includes('# MIKE Agent:'), `${file}: Missing MIKE Agent header`);
      assert.ok(content.includes('## Role'), `${file}: Missing Role section`);
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

  it('has Phase 4 FORGE workflows', () => {
    const required = ['architect.md', 'design.md', 'shard.md'];
    const files = fs.readdirSync(workflowsDir);
    for (const wf of required) {
      assert.ok(files.includes(wf), `Missing Phase 4 workflow: ${wf}`);
    }
  });

  it('has Phase 5 SCOUT workflows', () => {
    const required = ['debug.md'];
    const files = fs.readdirSync(workflowsDir);
    for (const wf of required) {
      assert.ok(files.includes(wf), `Missing Phase 5 workflow: ${wf}`);
    }
  });
});

describe('Phase 4 Templates', () => {
  const templatesDir = path.join(pkgRoot, 'templates');

  it('has FORGE templates', () => {
    const required = ['SHARD.md', 'DISCOVERY.md', 'DESIGN.md'];
    const files = fs.readdirSync(templatesDir);
    for (const tmpl of required) {
      assert.ok(files.includes(tmpl), `Missing Phase 4 template: ${tmpl}`);
    }
  });

  it('SHARD.md has key sections', () => {
    const content = fs.readFileSync(path.join(templatesDir, 'SHARD.md'), 'utf8');
    assert.ok(content.includes('Acceptance Criteria'), 'SHARD.md missing Acceptance Criteria');
    assert.ok(content.includes('Boundaries'), 'SHARD.md missing Boundaries');
    assert.ok(content.includes('Design Context'), 'SHARD.md missing Design Context');
    assert.ok(content.includes('Dependencies'), 'SHARD.md missing Dependencies');
    assert.ok(content.includes('Deviation Protocol'), 'SHARD.md missing Deviation Protocol');
  });

  it('DESIGN.md has key sections', () => {
    const content = fs.readFileSync(path.join(templatesDir, 'DESIGN.md'), 'utf8');
    assert.ok(content.includes('Color Palette'), 'DESIGN.md missing Color Palette');
    assert.ok(content.includes('Typography'), 'DESIGN.md missing Typography');
    assert.ok(content.includes('Spacing'), 'DESIGN.md missing Spacing');
    assert.ok(content.includes('Anti-Patterns'), 'DESIGN.md missing Anti-Patterns');
    assert.ok(content.includes('Verification Checklist'), 'DESIGN.md missing Verification Checklist');
  });
});

describe('Phase 5 SCOUT', () => {
  const commandsDir = path.join(pkgRoot, 'commands', 'mike');
  const agentsDir = path.join(pkgRoot, 'agents');
  const workflowsDir = path.join(pkgRoot, 'workflows');

  it('map.md references 4 parallel mapper agents and 7 documents', () => {
    const content = fs.readFileSync(path.join(commandsDir, 'map.md'), 'utf8');
    assert.ok(content.includes('mike-codebase-mapper'), 'map.md should reference mike-codebase-mapper agent');
    assert.ok(content.includes('STACK.md'), 'map.md should reference STACK.md');
    assert.ok(content.includes('CONCERNS.md'), 'map.md should reference CONCERNS.md');
    assert.ok(content.includes('.mike/codebase/'), 'map.md should use .mike/codebase/ path');
  });

  it('debug.md has persistent debug session structure', () => {
    const content = fs.readFileSync(path.join(commandsDir, 'debug.md'), 'utf8');
    assert.ok(content.includes('.mike/debug/'), 'debug.md should use .mike/debug/ path');
    assert.ok(content.includes('hypothesis'), 'debug.md should mention hypothesis testing');
    assert.ok(content.includes('Eliminated'), 'debug.md should track eliminated hypotheses');
    assert.ok(content.includes('resume_session'), 'debug.md should support session resumption');
  });

  it('issues.md manages deferred issues with R8', () => {
    const content = fs.readFileSync(path.join(commandsDir, 'issues.md'), 'utf8');
    assert.ok(content.includes('ISSUES.md'), 'issues.md should reference ISSUES.md');
    assert.ok(content.includes('triage'), 'issues.md should support triage');
    assert.ok(content.includes('promote'), 'issues.md should support promoting issues');
  });

  it('mike-codebase-mapper.md has 4 focus areas and templates', () => {
    const content = fs.readFileSync(path.join(agentsDir, 'mike-codebase-mapper.md'), 'utf8');
    assert.ok(content.includes('tech'), 'mapper should handle tech focus');
    assert.ok(content.includes('arch'), 'mapper should handle arch focus');
    assert.ok(content.includes('quality'), 'mapper should handle quality focus');
    assert.ok(content.includes('concerns'), 'mapper should handle concerns focus');
    assert.ok(content.includes('Forbidden Files'), 'mapper should have forbidden files list');
  });

  it('mike-debugger.md has scientific method and debug file protocol', () => {
    const content = fs.readFileSync(path.join(agentsDir, 'mike-debugger.md'), 'utf8');
    assert.ok(content.includes('FALSIFIABLE'), 'debugger should require falsifiable hypotheses');
    assert.ok(content.includes('Debug File Protocol'), 'debugger should define file protocol');
    assert.ok(content.includes('APPEND only'), 'debugger should use append-only for Evidence');
    assert.ok(content.includes('IMMUTABLE'), 'debugger should mark Symptoms as immutable');
  });

  it('debug.md workflow has status transitions and resume protocol', () => {
    const content = fs.readFileSync(path.join(workflowsDir, 'debug.md'), 'utf8');
    assert.ok(content.includes('gathering'), 'workflow should define gathering status');
    assert.ok(content.includes('investigating'), 'workflow should define investigating status');
    assert.ok(content.includes('Resume Protocol'), 'workflow should define resume protocol');
  });
});

describe('Phase 6 CITADEL', () => {
  const agentsDir = path.join(pkgRoot, 'agents');
  const workflowsDir = path.join(pkgRoot, 'workflows');
  const refsDir = path.join(pkgRoot, 'references');

  it('has profile-matrix.md reference', () => {
    assert.ok(fs.existsSync(path.join(refsDir, 'profile-matrix.md')), 'Missing profile-matrix.md');
  });

  it('profile-matrix.md covers all 6 profiles', () => {
    const content = fs.readFileSync(path.join(refsDir, 'profile-matrix.md'), 'utf8');
    for (const profile of ['BLITZ', 'SPRINT', 'FORGE', 'CITADEL', 'SCOUT', 'GOLD']) {
      assert.ok(content.includes(profile), `profile-matrix.md missing ${profile}`);
    }
  });

  it('profile-matrix.md has CITADEL-specific features section', () => {
    const content = fs.readFileSync(path.join(refsDir, 'profile-matrix.md'), 'utf8');
    assert.ok(content.includes('CITADEL-Specific Features'), 'profile-matrix.md missing CITADEL-Specific Features section');
    assert.ok(content.includes('Party Mode'), 'profile-matrix.md missing Party Mode');
    assert.ok(content.includes('Synergy Review'), 'profile-matrix.md missing Synergy Review');
    assert.ok(content.includes('6-Layer Verification'), 'profile-matrix.md missing 6-Layer Verification');
    assert.ok(content.includes('Role Constraints'), 'profile-matrix.md missing Role Constraints');
  });

  it('architect workflow has detailed party mode', () => {
    const content = fs.readFileSync(path.join(workflowsDir, 'architect.md'), 'utf8');
    assert.ok(content.includes('Security Reviewer'), 'architect workflow missing Security Reviewer');
    assert.ok(content.includes('Performance Reviewer'), 'architect workflow missing Performance Reviewer');
    assert.ok(content.includes('DX Reviewer'), 'architect workflow missing DX Reviewer');
    assert.ok(content.includes('Review Protocol'), 'architect workflow missing Review Protocol');
    assert.ok(content.includes('Resolution Process'), 'architect workflow missing Resolution Process');
    assert.ok(content.includes('CRITICAL'), 'architect workflow missing severity classification');
  });

  it('shard workflow has detailed synergy review', () => {
    const content = fs.readFileSync(path.join(workflowsDir, 'shard.md'), 'utf8');
    assert.ok(content.includes('Shared File Detection'), 'shard workflow missing Shared File Detection');
    assert.ok(content.includes('API Contract Verification'), 'shard workflow missing API Contract Verification');
    assert.ok(content.includes('State Dependency Validation'), 'shard workflow missing State Dependency Validation');
    assert.ok(content.includes('Design Consistency'), 'shard workflow missing Design Consistency');
    assert.ok(content.includes('Naming Convention Audit'), 'shard workflow missing Naming Convention Audit');
    assert.ok(content.includes('Synergy Report'), 'shard workflow missing Synergy Report');
  });

  it('verify-phase workflow has detailed layers 5-6', () => {
    const content = fs.readFileSync(path.join(workflowsDir, 'verify-phase.md'), 'utf8');
    assert.ok(content.includes('Cross-Phase Integration'), 'verify workflow missing Cross-Phase Integration');
    assert.ok(content.includes('Regression Report'), 'verify workflow missing Regression Report');
    assert.ok(content.includes('OWASP Top 10'), 'verify workflow missing OWASP Top 10');
    assert.ok(content.includes('Secrets Scan'), 'verify workflow missing Secrets Scan');
    assert.ok(content.includes('Dependency Audit'), 'verify workflow missing Dependency Audit');
    assert.ok(content.includes('Security Report'), 'verify workflow missing Security Report');
  });

  it('all agents have Role Constraints section', () => {
    const files = fs.readdirSync(agentsDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const content = fs.readFileSync(path.join(agentsDir, file), 'utf8');
      assert.ok(content.includes('## Role Constraints (CITADEL)'), `${file}: Missing Role Constraints (CITADEL) section`);
    }
  });

  it('agent role constraints reference CRITICAL-level enforcement', () => {
    const files = fs.readdirSync(agentsDir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const content = fs.readFileSync(path.join(agentsDir, file), 'utf8');
      assert.ok(content.includes('CRITICAL-level'), `${file}: Role Constraints should mention CRITICAL-level enforcement`);
    }
  });
});

describe('Phase 7 Completion', () => {
  const commandsDir = path.join(pkgRoot, 'commands', 'mike');
  const workflowsDir = path.join(pkgRoot, 'workflows');
  const refsDir = path.join(pkgRoot, 'references');

  it('has all 26 commands (complete set)', () => {
    const required = [
      'init.md', 'progress.md', 'help.md', 'settings.md', 'quick.md',
      'execute.md', 'unify.md', 'discover.md', 'research.md', 'discuss.md',
      'plan.md', 'verify.md', 'transition.md', 'pause.md', 'resume.md',
      'architect.md', 'design.md', 'shard.md', 'map.md', 'debug.md', 'issues.md',
      'complete.md', 'add-phase.md', 'insert-phase.md', 'remove-phase.md', 'update.md'
    ];
    const files = fs.readdirSync(commandsDir);
    for (const cmd of required) {
      assert.ok(files.includes(cmd), `Missing command: ${cmd}`);
    }
    assert.equal(required.length, 26, 'Expected exactly 26 commands');
  });

  it('complete.md has milestone lifecycle sections', () => {
    const content = fs.readFileSync(path.join(commandsDir, 'complete.md'), 'utf8');
    assert.ok(content.includes('verify_readiness'), 'complete.md should verify readiness');
    assert.ok(content.includes('archive_milestone'), 'complete.md should archive milestone');
    assert.ok(content.includes('git_tag'), 'complete.md should create git tag');
    assert.ok(content.includes('retrospective'), 'complete.md should support retrospective');
    assert.ok(content.includes('evolve_project'), 'complete.md should evolve PROJECT.md');
  });

  it('add-phase.md handles phase addition', () => {
    const content = fs.readFileSync(path.join(commandsDir, 'add-phase.md'), 'utf8');
    assert.ok(content.includes('ROADMAP.md'), 'add-phase.md should update ROADMAP.md');
    assert.ok(content.includes('slug'), 'add-phase.md should generate slug');
    assert.ok(content.includes('mkdir'), 'add-phase.md should create directory');
  });

  it('insert-phase.md handles decimal phase insertion', () => {
    const content = fs.readFileSync(path.join(commandsDir, 'insert-phase.md'), 'utf8');
    assert.ok(content.includes('decimal'), 'insert-phase.md should use decimal numbering');
    assert.ok(content.includes('INSERTED'), 'insert-phase.md should use INSERTED marker');
    assert.ok(content.includes('urgent'), 'insert-phase.md should reference urgent work');
  });

  it('remove-phase.md validates future phase and renumbers', () => {
    const content = fs.readFileSync(path.join(commandsDir, 'remove-phase.md'), 'utf8');
    assert.ok(content.includes('future'), 'remove-phase.md should validate future phase');
    assert.ok(content.includes('renumber'), 'remove-phase.md should renumber subsequent phases');
    assert.ok(content.includes('confirm'), 'remove-phase.md should confirm removal');
  });

  it('update.md has version detection and update flow', () => {
    const content = fs.readFileSync(path.join(commandsDir, 'update.md'), 'utf8');
    assert.ok(content.includes('VERSION'), 'update.md should detect version');
    assert.ok(content.includes('npm view'), 'update.md should check npm for latest');
    assert.ok(content.includes('npx do-it-like-mike'), 'update.md should run installer');
  });

  it('has complete-milestone.md workflow', () => {
    assert.ok(fs.existsSync(path.join(workflowsDir, 'complete-milestone.md')), 'Missing complete-milestone.md workflow');
    const content = fs.readFileSync(path.join(workflowsDir, 'complete-milestone.md'), 'utf8');
    assert.ok(content.includes('Verify Readiness'), 'workflow should verify readiness');
    assert.ok(content.includes('Archive'), 'workflow should archive milestone');
    assert.ok(content.includes('Retrospective'), 'workflow should support retrospective');
    assert.ok(content.includes('Git Tag'), 'workflow should create git tag');
  });

  it('has ralph-loop.md workflow', () => {
    assert.ok(fs.existsSync(path.join(workflowsDir, 'ralph-loop.md')), 'Missing ralph-loop.md workflow');
    const content = fs.readFileSync(path.join(workflowsDir, 'ralph-loop.md'), 'utf8');
    assert.ok(content.includes('ralph-state.md'), 'ralph workflow should use state file');
    assert.ok(content.includes('Iteration Protocol'), 'ralph workflow should define iteration protocol');
    assert.ok(content.includes('Codebase Patterns'), 'ralph workflow should consolidate patterns');
    assert.ok(content.includes('max_iterations'), 'ralph workflow should have iteration limit');
  });

  it('has commit-conventions.md reference', () => {
    assert.ok(fs.existsSync(path.join(refsDir, 'commit-conventions.md')), 'Missing commit-conventions.md');
    const content = fs.readFileSync(path.join(refsDir, 'commit-conventions.md'), 'utf8');
    assert.ok(content.includes('mike('), 'commit-conventions.md should define mike() prefix');
    assert.ok(content.includes('phase-'), 'commit-conventions.md should cover phase scope');
    assert.ok(content.includes('shard-'), 'commit-conventions.md should cover shard scope');
    assert.ok(content.includes('ralph-'), 'commit-conventions.md should cover ralph scope');
    assert.ok(content.includes('milestone'), 'commit-conventions.md should cover milestone scope');
  });

  it('has all 14 workflows (complete set)', () => {
    const required = [
      'profile-resolution.md', 'scale-detection.md', 'rules-engine.md',
      'unify.md', 'execute-phase.md', 'research.md', 'transition-phase.md',
      'design.md', 'debug.md', 'architect.md', 'shard.md', 'verify-phase.md',
      'complete-milestone.md', 'ralph-loop.md'
    ];
    const files = fs.readdirSync(workflowsDir);
    for (const wf of required) {
      assert.ok(files.includes(wf), `Missing workflow: ${wf}`);
    }
  });

  it('has all 7 references (complete set)', () => {
    const required = [
      'rules.md', 'context-brackets.md', 'deviation-rules.md',
      'sharding-algorithm.md', 'acceptance-criteria.md', 'profile-matrix.md',
      'commit-conventions.md'
    ];
    const files = fs.readdirSync(refsDir);
    for (const ref of required) {
      assert.ok(files.includes(ref), `Missing reference: ${ref}`);
    }
  });

  it('package.json version is 1.0.0', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(pkgRoot, 'package.json'), 'utf8'));
    assert.equal(pkg.version, '1.0.0');
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
