# MIKE Implementation Specification

> "Don't half ass it. Do it like Mike."
>
> Technical specification for building the MIKE framework as an npm-installable package for Claude Code.
>
> Date: 2026-03-06

---

## 1. Identity

| Field | Value |
|-------|-------|
| **Name** | MIKE |
| **Full name** | Multi-profile Intelligent Kode Engine |
| **Tagline** | "Don't half ass it. Do it like Mike." |
| **npm package** | `do-it-like-mike` |
| **Command prefix** | `/mike:` |
| **State directory** | `.mike/` (per-project) |
| **Install directory** | `~/.claude/` (global) or `./.claude/` (local) |
| **Runtime** | Claude Code only (v1) |
| **Language** | JavaScript ESM (`.js` files, `"type": "module"` in package.json) |
| **License** | MIT |
| **Node requirement** | >= 18.0.0 |

---

## 2. Package File Tree

```
do-it-like-mike/
|-- package.json
|-- LICENSE
|-- README.md
|-- bin/
|   |-- install.js              # Installer (npx entry point)
|   |-- validate.js             # Pre-publish validation
|-- commands/
|   |-- mike/
|       |-- init.md             # /mike:init
|       |-- discover.md         # /mike:discover
|       |-- research.md         # /mike:research
|       |-- architect.md        # /mike:architect
|       |-- design.md           # /mike:design
|       |-- shard.md            # /mike:shard
|       |-- execute.md          # /mike:execute
|       |-- verify.md           # /mike:verify
|       |-- unify.md            # /mike:unify
|       |-- transition.md       # /mike:transition
|       |-- complete.md         # /mike:complete
|       |-- progress.md         # /mike:progress
|       |-- resume.md           # /mike:resume
|       |-- pause.md            # /mike:pause
|       |-- discuss.md          # /mike:discuss
|       |-- plan.md             # /mike:plan
|       |-- debug.md            # /mike:debug
|       |-- issues.md           # /mike:issues
|       |-- map.md              # /mike:map
|       |-- quick.md            # /mike:quick
|       |-- help.md             # /mike:help
|       |-- settings.md         # /mike:settings
|       |-- update.md           # /mike:update
|       |-- add-phase.md        # /mike:add-phase
|       |-- insert-phase.md     # /mike:insert-phase
|       |-- remove-phase.md     # /mike:remove-phase
|-- agents/
|   |-- mike-executor.md        # Execution agent (wave-parallel)
|   |-- mike-researcher.md      # Research agent (parallel discovery)
|   |-- mike-synthesizer.md     # Research synthesis agent
|   |-- mike-planner.md         # Plan creation agent
|   |-- mike-plan-checker.md    # Plan validation agent
|   |-- mike-verifier.md        # Independent QA agent
|   |-- mike-codebase-mapper.md # Codebase analysis agent (Explore)
|   |-- mike-debugger.md        # Persistent debug agent
|   |-- mike-sharder.md         # Document sharding agent
|   |-- mike-designer.md        # Design system generation agent
|-- workflows/
|   |-- init-project.md         # Full init workflow
|   |-- discover.md             # Discovery workflow
|   |-- research.md             # Research workflow (1 or 2 waves)
|   |-- architect.md            # Architecture + gate workflow
|   |-- design.md               # Design system generation workflow
|   |-- shard.md                # Sharding algorithm workflow
|   |-- execute-phase.md        # Execution orchestration
|   |-- verify-phase.md         # Verification workflow
|   |-- unify.md                # Mandatory UNIFY workflow
|   |-- transition-phase.md     # Phase transition workflow
|   |-- complete-milestone.md   # Milestone completion workflow
|   |-- debug.md                # Persistent debug workflow
|   |-- ralph-loop.md           # Ralph Loop (stuck-task recovery)
|   |-- profile-resolution.md   # Profile -> behavior mapping
|   |-- scale-detection.md      # Auto scale level detection
|   |-- rules-engine.md         # Dynamic rules engine spec
|-- templates/
|   |-- STATE.md                # State summary template
|   |-- PROJECT.md              # Project brief template
|   |-- ROADMAP.md              # Roadmap template
|   |-- PLAN.md                 # Phase plan template
|   |-- SUMMARY.md              # UNIFY closure template
|   |-- SHARD.md                # Atomic shard (task file) template
|   |-- DISCOVERY.md            # Discovery document template
|   |-- RESEARCH.md             # Research findings template
|   |-- HANDOFF.md              # Session handoff template
|   |-- ISSUES.md               # Deferred issues template
|   |-- VERIFICATION.md         # Verification report template
|   |-- DESIGN.md               # Design system template
|   |-- config.json             # Default configuration template
|   |-- state.json              # Default state template
|-- references/
|   |-- rules.md                # All 12+ dynamic rules
|   |-- context-brackets.md     # Context bracket strategies
|   |-- deviation-rules.md      # 4-level deviation priority
|   |-- sharding-algorithm.md   # Document sharding specification
|   |-- commit-conventions.md   # Git commit format reference
|   |-- profile-matrix.md       # Full profile x step behavior matrix
|   |-- acceptance-criteria.md  # BDD format reference
|   |-- design/                 # Design knowledge base (from UI/UX Pro Max)
|       |-- styles.md           # 67 UI styles catalog (structured tables)
|       |-- color-palettes.md   # 96 industry-specific color palettes
|       |-- typography.md       # 57 font pairings with Google Fonts URLs
|       |-- industry-rules.md   # 100 industry → design mapping rules
|       |-- landing-patterns.md # 8 landing page archetypes
|       |-- dashboard-patterns.md # 10 dashboard archetypes
|       |-- anti-patterns.md    # Per-industry design anti-patterns
|       |-- design-checklist.md # Pre-delivery design verification items
|       |-- stacks/
|           |-- html-tailwind.md   # Tailwind CSS implementation details
|           |-- react-shadcn.md    # shadcn/ui component specifics
|           |-- nextjs.md          # Next.js design patterns
|           |-- swiftui.md         # SwiftUI design patterns
|           |-- flutter.md         # Flutter/Material design patterns
|           |-- react-native.md    # React Native specifics
|           |-- vue-nuxt.md        # Vue/Nuxt UI specifics
|-- hooks/
|   |-- mike-context-monitor.js # PostToolUse: context bracket monitoring
|   |-- mike-statusline.js      # Statusline: progress display
```

---

## 3. Command Map

### 3.1 All Commands (26 total)

| Command | Pipeline Step | Description | Profiles |
|---------|-------------|-------------|----------|
| `/mike:init` | 1. INITIALIZE | Initialize project, select profile, capture goal, set up `.mike/` | All |
| `/mike:discover` | 2. DISCOVER | Requirements gathering, PRD, completeness gate | SPRINT+ |
| `/mike:research` | 3. RESEARCH | 1-2 wave research with parallel agents | SPRINT+ |
| `/mike:architect` | 4. ARCHITECT | Architecture design, solutioning gate, party mode | FORGE+ |
| `/mike:design` | 5. DESIGN | UI design system — style, palette, typography, tokens, anti-patterns | SPRINT+ (auto-skip for non-UI) |
| `/mike:shard` | 6. SHARD | Document sharding — decompose plan into atomic task files | FORGE+ |
| `/mike:execute` | 7. EXECUTE | Execute tasks — in-session or wave-parallel | All |
| `/mike:verify` | 8. VERIFY | QA — independent verification, regression testing, design compliance | SPRINT+ |
| `/mike:unify` | 9. UNIFY | Mandatory closure — SUMMARY.md reconciliation | All |
| `/mike:transition` | 10. TRANSITION | Phase/milestone boundary — state consistency check | All |
| `/mike:complete` | 11. COMPLETE | Milestone archive, retrospective, git tag | All |
| `/mike:progress` | Navigation | Status dashboard + single next action routing | All |
| `/mike:resume` | Session | Resume from HANDOFF — reads STATE.md, suggests ONE action | All |
| `/mike:pause` | Session | Create HANDOFF-{date}.md, optional WIP commit | All |
| `/mike:discuss` | Planning | Gather phase context via adaptive questioning | SPRINT+ |
| `/mike:plan` | Planning | Create PLAN.md for a phase (planner + checker loop) | SPRINT+ |
| `/mike:debug` | Error | Persistent debug session (survives context resets) | All |
| `/mike:issues` | Error | View/triage deferred issues from ISSUES.md | All |
| `/mike:map` | Codebase | 7-doc codebase analysis with 4 parallel Explore agents | SCOUT, GOLD L2+ |
| `/mike:quick` | Shortcut | BLITZ-mode quick task (auto-selects BLITZ profile for one-off work) | All |
| `/mike:help` | Utility | Command reference with profile-aware filtering | All |
| `/mike:settings` | Utility | View/edit configuration, change profile, toggle features | All |
| `/mike:update` | Utility | Self-update with changelog display | All |
| `/mike:add-phase` | Roadmap | Append a phase to the roadmap | All |
| `/mike:insert-phase` | Roadmap | Insert decimal phase (e.g., 3.1) without renumbering | All |
| `/mike:remove-phase` | Roadmap | Remove a future phase | All |

### 3.2 Profile-Aware Command Behavior

Commands adapt their behavior based on the active profile. When a command is invoked in a profile that doesn't use it at full depth, the command either:
- **Skips** (returns immediately with a note)
- **Simplifies** (runs a lighter version)
- **Runs full** (complete behavior)

| Command | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|---------|-------|--------|-------|---------|-------|------|
| `init` | Minimal (1-3 sentences) | Standard (5-10 Q) | Deep (adaptive) | Full (brain dump) | Codebase-first | Scale-adaptive |
| `discover` | Skip (inline in init) | Standard PRD | PRD + completeness gate | PRD + DISCOVERY.md | PRP + codebase intel | Scale-adaptive |
| `research` | Skip | 1 wave quick | 2 waves + skills | 2 waves + deep + skills | 3 depths | Scale-adaptive |
| `architect` | Skip | Skip | Solutioning gate >=90% | Gate + party mode | Review-only | Scale-adaptive |
| `design` | Skip | Lightweight (auto) | Standard (full system) | Full (per-page + approval) | Extract (reverse-engineer) | Scale-adaptive |
| `shard` | Skip (single task list) | Skip (per-phase plans) | Full atomic sharding + design context | Full + synergy + design context | Skip (feature plans) | Scale-adaptive |
| `execute` | In-session sequential | Wave-parallel (2-3) | Wave-parallel sharded (3-5) | Wave-parallel sharded (5+) | In-session sequential | Scale-adaptive |
| `verify` | Lint+test only | Verifier agent | Independent QA + design compliance | 6-layer verification | Self + existing tests | Scale-adaptive |
| `unify` | Lightweight (<30 lines) | Standard | Full (AC table, 3-loc decisions) | Full + synergy + false positive | Full + codebase delta | Always full L2+ |

### 3.3 Command Flow: Which Commands Run for Each Profile

**BLITZ (minimal touch):**
```
/mike:init (captures goal, creates PROJECT.md + 1-phase ROADMAP, sets profile=blitz)
  -> /mike:execute (in-session, sequential, from inline task list)
  -> /mike:unify (lightweight SUMMARY.md)
  -> Done
```

**SPRINT (per-phase):**
```
/mike:init -> /mike:progress (routes to next action)
Per phase:
  /mike:discuss -> /mike:research -> /mike:plan -> /mike:execute -> /mike:verify -> /mike:unify -> /mike:transition
Final: /mike:complete
```

**FORGE (front-loaded planning, parallel sharded execution):**
```
/mike:init -> /mike:discover -> /mike:research (2 waves) -> /mike:architect (gate) -> /mike:design (standard) -> /mike:progress
Per phase:
  /mike:plan -> /mike:shard (includes design context) -> /mike:execute (wave-parallel sharded) -> /mike:verify (independent QA + design compliance) -> /mike:unify -> /mike:transition
Final: /mike:complete
```

**CITADEL (maximum rigor):**
```
/mike:init -> /mike:discover (+ DISCOVERY.md) -> /mike:research (2 waves + skills) -> /mike:architect (gate + party mode) -> /mike:design (full + per-page + approval) -> /mike:progress
Per phase:
  /mike:discuss -> /mike:plan -> /mike:shard (+ synergy + design) -> /mike:execute (5+ parallel) -> /mike:verify (6-layer) -> /mike:unify (full + synergy + design) -> /mike:transition (3-file check)
Final: /mike:complete (retrospective + codebase re-analysis)
```

**SCOUT (codebase-first):**
```
/mike:map -> /mike:init (with codebase context) -> /mike:discover (feature-scoped) -> /mike:design (extract existing) -> /mike:progress
Per phase:
  /mike:discuss -> /mike:plan (with boundaries + design tokens) -> /mike:execute (in-session) -> /mike:verify (+ existing tests) -> /mike:unify (+ codebase delta) -> /mike:transition
Final: /mike:complete (codebase 7-doc refresh)
```

**GOLD (adaptive — auto-selects depth per step based on scale level):**
```
/mike:init (auto-detect scale L0-L4, select behaviors per step)
  -> Routes to appropriate depth for each subsequent command
  -> /mike:progress always available to route to the next action
```

---

## 4. State Directory Structure (`.mike/`)

Created per-project when `/mike:init` runs.

```
.mike/
|-- config.json                 # Project configuration + profile
|-- state.json                  # Machine-readable state
|-- STATE.md                    # Human-readable state summary (heartbeat)
|-- PROJECT.md                  # Project brief (what, why, requirements, decisions)
|-- ROADMAP.md                  # Phase structure with milestone groupings
|-- ISSUES.md                   # Deferred enhancements (ISS-001, ISS-002...)
|-- REQUIREMENTS.md             # Formal requirements (REQ-IDs, traceability)
|-- RESEARCH.md                 # Synthesized research findings
|-- DISCOVERY.md                # Authority document (CITADEL only)
|-- DESIGN.md                   # Design system (style, palette, typography, tokens)
|-- design-tokens.json          # Machine-readable design tokens (FORGE+)
|-- HANDOFF-{date}.md           # Session handoff files
|-- phases/
|   |-- 1-{name}/
|   |   |-- PLAN.md             # Phase execution plan
|   |   |-- CONTEXT.md          # Locked user decisions
|   |   |-- RESEARCH.md         # Phase-specific research (if any)
|   |   |-- SUMMARY.md          # UNIFY closure document
|   |   |-- VERIFICATION.md     # QA report
|   |   |-- shards/             # Atomic task files (FORGE/CITADEL/GOLD L2+)
|   |       |-- SHARD-01.md
|   |       |-- SHARD-02.md
|   |       |-- ...
|   |-- 2-{name}/
|   |-- ...
|-- codebase/                   # 7-doc codebase analysis (SCOUT/GOLD)
|   |-- STACK.md
|   |-- ARCHITECTURE.md
|   |-- STRUCTURE.md
|   |-- CONVENTIONS.md
|   |-- TESTING.md
|   |-- INTEGRATIONS.md
|   |-- CONCERNS.md
|-- debug/                      # Persistent debug sessions
|   |-- {issue-slug}.md
|   |-- resolved/               # Archived resolved debug sessions
|-- milestones/                 # Archived completed milestones
|   |-- v0.1.0/
```

---

## 5. Configuration

### 5.1 config.json (Default Template)

```json
{
  "mike_version": "1.0.0",
  "project_name": "{{PROJECT_NAME}}",
  "profile": "gold",
  "scale_level": null,
  "scale_mode": "auto",

  "planning": {
    "depth": "scale-adaptive",
    "research_waves": "scale-adaptive",
    "completeness_gate": true,
    "synergy_review": false
  },

  "architecture": {
    "gate": "scale-adaptive",
    "gate_threshold": 90,
    "party_mode": false,
    "role_constraints": false
  },

  "sharding": {
    "enabled": "scale-adaptive",
    "bdd_acceptance": true,
    "boundary_declarations": true,
    "error_patterns": false,
    "skills_bundled": false,
    "max_tasks_per_shard": 3,
    "target_context_budget": 50
  },

  "execution": {
    "model": "scale-adaptive",
    "max_concurrency": 3,
    "ralph_loop": false,
    "ralph_threshold": 3,
    "tdd_available": true,
    "persistent_debug": true
  },

  "verification": {
    "qa_independence": "scale-adaptive",
    "state_consistency": "blocking",
    "regression": true,
    "goal_backward": false,
    "uat": true,
    "pre_commit_hooks": []
  },

  "git": {
    "commit_prefix": "mike",
    "commit_per": "task",
    "branching": "scale-adaptive",
    "milestone_tags": true,
    "phase_commits": true
  },

  "context": {
    "monitoring": "scale-adaptive",
    "quality_threshold": 50,
    "hooks_enabled": true
  },

  "rules_engine": {
    "mode": "dynamic",
    "core_rules_count": 12
  },

  "phase_overrides": {},

  "design": {
    "enabled": true,
    "auto_skip_non_ui": true,
    "industry": null,
    "audience": null,
    "brand_colors": null,
    "brand_fonts": null,
    "style_override": null,
    "dark_mode": false
  },

  "metrics": {
    "execution_history": [],
    "total_tasks_completed": 0,
    "total_deviations": 0,
    "peak_team_size": 0,
    "total_debug_cycles": 0
  }
}
```

### 5.2 state.json (Default Template)

```json
{
  "project": "{{PROJECT_NAME}}",
  "version": "0.1.0",
  "profile": "gold",
  "scale_level": null,
  "current_milestone": 1,
  "current_phase": null,
  "phase_status": null,
  "loop_position": null,
  "active_team": null,
  "completed_phases": [],
  "decisions": [],
  "blockers": [],
  "deferred_issues": [],
  "session": {
    "started": "{{ISO_TIMESTAMP}}",
    "last_command": "/mike:init",
    "last_updated": "{{ISO_TIMESTAMP}}",
    "context_bracket": "FRESH"
  },
  "history": []
}
```

---

## 6. Template Specifications

### 6.1 STATE.md (Heartbeat)

Target: < 100 lines. A digest, not an archive.

```markdown
# MIKE State

## Project
| Field | Value |
|-------|-------|
| Name | {{PROJECT_NAME}} |
| Profile | {{PROFILE}} ({{SCALE_LEVEL}}) |
| Version | {{VERSION}} |

## Current Position
| Field | Value |
|-------|-------|
| Milestone | {{CURRENT_MILESTONE}} |
| Phase | {{CURRENT_PHASE}} — {{PHASE_NAME}} |
| Status | {{PHASE_STATUS}} |
| Loop | {{LOOP_POSITION}} |

## Decisions
| # | Decision | Phase | Date |
|---|----------|-------|------|
| D-1 | {{DECISION_TEXT}} | {{PHASE}} | {{DATE}} |

## Blockers
{{BLOCKERS_OR_NONE}}

## Next Action
--> {{SINGLE_NEXT_ACTION}}
```

### 6.2 PLAN.md (Phase Plan)

Adapted from GSD's PLAN.md template with PAUL's BDD acceptance criteria and boundary declarations.

```markdown
# Plan — Phase {{N}}: {{PHASE_NAME}}

## Metadata
| Field | Value |
|-------|-------|
| Phase | {{N}} |
| Profile | {{PROFILE}} |
| Type | execute / tdd / research |
| Autonomous | true / false |
| Wave | {{WAVE_NUMBER}} |
| Depends On | {{PHASE_DEPS}} |

## Objective
{{ONE_SENTENCE_OBJECTIVE}}

## Acceptance Criteria
<!-- BDD format: Given/When/Then. Defined BEFORE tasks. -->

- **AC-1:** Given {{precondition}}, when {{action}}, then {{expected_result}}
- **AC-2:** Given {{precondition}}, when {{action}}, then {{expected_result}}
- **AC-3:** Given {{precondition}}, when {{action}}, then {{expected_result}}

## Boundaries
<!-- Explicit scope protection. CARL Rule R3 enforces these. -->

### DO NOT CHANGE
- `{{file_path}}` — {{reason}}
- `{{file_path}}` — {{reason}}

### SCOPE LIMITS
- {{what_is_NOT_in_scope}}

## Tasks

### Task 1 — {{TASK_NAME}}
| Field | Value |
|-------|-------|
| Description | {{DESCRIPTION}} |
| Complexity | trivial / low / medium / high |
| Depends On | none |
| Files | `{{file1}}`, `{{file2}}` |
| AC Reference | AC-1, AC-2 |
| Verify | `{{specific_command_proving_completion}}` |
| Done | AC-1 passes, AC-2 passes |

### Task 2 — {{TASK_NAME}}
...

### Task 3 — {{TASK_NAME}}
...

## File Ownership
| File | Task(s) | Shared | Notes |
|------|---------|--------|-------|
| {{file}} | Task 1 | no | |

## Risk Assessment
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| {{risk}} | low/med/high | low/med/high | {{mitigation}} |

## Error Patterns
<!-- Known failure modes with fix strategies (from PRP). Only in FORGE+. -->
| Pattern | Symptom | Fix Strategy |
|---------|---------|-------------|
| {{pattern}} | {{symptom}} | {{fix}} |
```

### 6.3 SUMMARY.md (UNIFY Closure)

This is the mandatory output of every `/mike:unify`. Three variants by profile depth.

**Lightweight (BLITZ):** < 30 lines
```markdown
# Summary — Phase {{N}}: {{PHASE_NAME}}

## What Was Built
{{BRIEF_DESCRIPTION}}

## Acceptance Criteria
| AC | Result |
|----|--------|
| AC-1 | PASS / FAIL |
| AC-2 | PASS / FAIL |

## Issues Deferred
{{LIST_OR_NONE}}

## Next
--> {{NEXT_ACTION}}
```

**Standard (SPRINT):**
```markdown
# Summary — Phase {{N}}: {{PHASE_NAME}}

## What Was Planned
{{ORIGINAL_OBJECTIVE}}

## What Was Built
{{ACTUAL_OUTCOME}}

## Acceptance Criteria Results
| AC | Description | Result | Evidence |
|----|-------------|--------|----------|
| AC-1 | {{desc}} | PASS | {{evidence}} |
| AC-2 | {{desc}} | FAIL | {{why}} |

## Deviations
| # | What Changed | Why | Impact |
|---|-------------|-----|--------|
| DEV-1 | {{change}} | {{reason}} | {{impact}} |

## Decisions Made
| # | Decision | Context |
|---|----------|---------|
| D-{{N}} | {{decision}} | {{context}} |

## Issues Deferred
| ID | Description | Type | Impact | Suggested Phase |
|----|-------------|------|--------|-----------------|
| ISS-{{N}} | {{desc}} | enhancement / tech-debt / bug | low/med/high | {{phase}} |

## Metrics
| Metric | Value |
|--------|-------|
| Tasks Completed | {{N}}/{{TOTAL}} |
| Commits | {{N}} |
| Duration | {{DURATION}} |

## Next
--> {{SINGLE_NEXT_ACTION}}
```

**Full (FORGE/CITADEL):**
Same as Standard plus:
- Skill audit section (were required skills invoked?)
- State consistency check results
- Codebase delta summary (SCOUT)
- False positive notes (CITADEL)
- Cross-shard coherence assessment (CITADEL)

### 6.4 SHARD.md (Atomic Task File)

This is BMAD's document sharding innovation adapted for MIKE. Each shard is a **complete, self-contained prompt** for an execution agent. The executor receives ONLY this file — no additional context needed.

```markdown
# Shard {{SHARD_ID}} — {{TASK_NAME}}

## Context
- **Project:** {{PROJECT_NAME}}
- **Phase:** {{N}} — {{PHASE_NAME}}
- **Phase Goal:** {{PHASE_GOAL}}
- **Profile:** {{PROFILE}}

## Objective
{{ONE_CLEAR_SENTENCE}}

## Acceptance Criteria
<!-- Copied from PLAN.md. Only the AC relevant to THIS shard. -->
- **AC-{{N}}:** Given {{precondition}}, when {{action}}, then {{expected_result}}

## What to Do
1. {{STEP_1}}
2. {{STEP_2}}
3. {{STEP_3}}

## Files to Read Before Starting
- `{{path}}` — {{why}}

## Files to Create or Modify
- `{{path}}` — create / modify — {{what_changes}}

## Relevant Schema (if applicable)
<!-- Only the DB schema fragments relevant to this shard -->
```sql
{{RELEVANT_SCHEMA_FRAGMENT}}
```

## Relevant API Definitions (if applicable)
<!-- Only the API interface definitions relevant to this shard -->
```
{{RELEVANT_API_FRAGMENT}}
```

## User Decisions
<!-- Only the decisions from CONTEXT.md relevant to this shard -->
- D-{{N}}: {{decision}}

## Boundaries
### DO NOT CHANGE
- `{{file}}` — {{reason}}

## Error Patterns
<!-- Known failure modes for this type of work -->
| Pattern | Fix |
|---------|-----|
| {{pattern}} | {{fix}} |

## Dependencies
- Depends on: {{SHARD_IDS_OR_NONE}}
- Blocks: {{SHARD_IDS_OR_NONE}}

## Git Convention
- Format: `mike(phase-{{N}}): {{short_description}}`
- Stage ONLY files listed above

## Deviation Protocol
1. Auto-fix bugs (log in completion)
2. Auto-add critical deps (log in completion)
3. Auto-fix blockers (simplest approach)
4. ASK for architectural changes (never auto-decide)
```

### 6.5 HANDOFF-{date}.md (Session Handoff)

```markdown
# Handoff — {{DATE}}

## Loop Position
| Field | Value |
|-------|-------|
| Phase | {{N}} — {{NAME}} |
| Step | {{PIPELINE_STEP}} (e.g., "EXECUTE — 4/7 tasks done") |
| Profile | {{PROFILE}} ({{SCALE_LEVEL}}) |
| Context Bracket | {{BRACKET}} |

## Key Decisions This Session
1. {{DECISION}}
2. {{DECISION}}

## In-Progress Work
{{WHAT_WAS_BEING_WORKED_ON}}

## Prioritized Next Actions
1. **IMMEDIATE:** {{FIRST_ACTION}}
2. {{SECOND_ACTION}}
3. {{THIRD_ACTION}}

## State File Checksums
- STATE.md: {{HASH}}
- PROJECT.md: {{HASH}}
- ROADMAP.md: {{HASH}}
```

### 6.6 ISSUES.md (Deferred Issues)

```markdown
# Deferred Issues

| ID | Description | Type | Impact | Effort | Suggested Phase | Status |
|----|-------------|------|--------|--------|-----------------|--------|
| ISS-001 | {{desc}} | enhancement | medium | low | Phase 4 | open |
| ISS-002 | {{desc}} | tech-debt | high | medium | Phase 3 | open |
```

### 6.7 DESIGN.md (Design System)

Output of `/mike:design`. This is the **design authority document** for the project. Full template specified in MIKE-UI-DESIGN-PROPOSAL.md Section 6.

```markdown
# Design System — {{PROJECT_NAME}}

## Metadata
| Field | Value |
|-------|-------|
| Profile | {{PROFILE}} |
| Industry | {{INDUSTRY}} |
| Industry Rule | Rule {{N}}: {{RULE_NAME}} |
| Style | {{PRIMARY_STYLE}} + {{SECONDARY_STYLE}} |
| Pattern | {{PAGE_PATTERN}} |
| Tech Stack | {{STACK}} |

## Color Palette
| Role | Hex | CSS Variable | Tailwind |
|------|-----|-------------|----------|
| Primary | {{HEX}} | --color-primary | primary |
| Secondary | {{HEX}} | --color-secondary | secondary |
| CTA | {{HEX}} | --color-cta | cta |
| Background | {{HEX}} | --color-bg | bg |
| Surface | {{HEX}} | --color-surface | surface |
| Text | {{HEX}} | --color-text | foreground |
| Text Muted | {{HEX}} | --color-text-muted | muted-foreground |
| Border | {{HEX}} | --color-border | border |
| Success | {{HEX}} | --color-success | success |
| Warning | {{HEX}} | --color-warning | warning |
| Error | {{HEX}} | --color-error | error |

## Typography
| Role | Font | Weight | Size | Line Height | Google Fonts |
|------|------|--------|------|-------------|-------------|
| Heading 1 | {{FONT}} | {{WEIGHT}} | {{SIZE}} | {{LH}} | {{URL}} |
| Body | {{FONT}} | {{WEIGHT}} | {{SIZE}} | {{LH}} | {{URL}} |

## Spacing Scale
| Token | Value | CSS Variable |
|-------|-------|-------------|
| xs | 4px | --space-xs |
| sm | 8px | --space-sm |
| md | 16px | --space-md |
| lg | 24px | --space-lg |
| xl | 32px | --space-xl |
| 2xl | 48px | --space-2xl |
| 3xl | 64px | --space-3xl |

## Effects & Animation
| Effect | Implementation | Notes |
|--------|---------------|-------|
| {{EFFECT_NAME}} | {{CSS}} | {{NOTES}} |

## Component Specifications
### Buttons
| Variant | Background | Text | Border | Hover | Radius |
|---------|-----------|------|--------|-------|--------|

### Cards
| Property | Value |
|----------|-------|

### Inputs
| State | Border | Background | Text |
|-------|--------|-----------|------|

## Anti-Patterns
- DO NOT: {{ANTI_PATTERN_1}}
- DO NOT: {{ANTI_PATTERN_2}}

## Design Verification Checklist
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 text, 3:1 large)
- [ ] Touch targets >= 44x44px on mobile
- [ ] Font sizes >= 16px body on mobile
- [ ] Consistent spacing using token scale
- [ ] Responsive breakpoints tested
- [ ] Loading/empty/error states defined
```

---

## 7. Agent Definitions

MIKE defines 10 agent types. Each is a markdown file in `agents/` defining role, responsibilities, protocols.

### 7.1 Agent Registry

| Agent | File | Spawned By | Fresh Context | When Used |
|-------|------|-----------|---------------|-----------|
| `mike-executor` | `mike-executor.md` | `/mike:execute` | Yes | SPRINT+ (wave-parallel execution) |
| `mike-researcher` | `mike-researcher.md` | `/mike:research` | Yes | SPRINT+ (parallel discovery) |
| `mike-synthesizer` | `mike-synthesizer.md` | `/mike:research` | Yes | SPRINT+ (merge research findings) |
| `mike-planner` | `mike-planner.md` | `/mike:plan` | Yes | SPRINT+ (create PLAN.md) |
| `mike-plan-checker` | `mike-plan-checker.md` | `/mike:plan` | Yes | FORGE+ (validate plans) |
| `mike-verifier` | `mike-verifier.md` | `/mike:verify` | Yes | FORGE+ (independent QA) |
| `mike-codebase-mapper` | `mike-codebase-mapper.md` | `/mike:map` | Yes (Explore) | SCOUT, GOLD L2+ |
| `mike-debugger` | `mike-debugger.md` | `/mike:debug` | No (persists) | All profiles |
| `mike-sharder` | `mike-sharder.md` | `/mike:shard` | Yes | FORGE+ (document sharding) |
| `mike-designer` | `mike-designer.md` | `/mike:design` | Yes | SPRINT+ (design system generation) |

### 7.2 Agent Definition Format

Every agent markdown file follows this structure (adapted from GMSD's agent format):

```markdown
# MIKE Agent: {{ROLE_NAME}}

You are a **{{Role Name}}** in the MIKE framework ("Don't half ass it. Do it like Mike.").
{{One-sentence role description}}.

---

## Role
{{2-3 sentences defining what this agent does and how it fits in the system.}}

---

## Core Responsibilities
1. {{Responsibility 1}}
2. {{Responsibility 2}}
...

---

## Startup Sequence
{{Step-by-step what to do when spawned}}

---

## Execution Protocol
{{Step-by-step for the main work loop}}

---

## Communication Protocol
{{When and how to communicate with lead/peers}}

---

## Rules
<!-- Dynamic rules active for this agent type -->
- R1: No implementation without approved plan
- R3: Respect boundary declarations (DO NOT CHANGE)
- R4: Architectural decisions require user confirmation
...

---

## Quality Standards
{{Code quality, git hygiene, task discipline}}

---

## Anti-Patterns
{{Explicit list of what NOT to do}}
```

### 7.3 Key Agent: mike-designer (Design System Generation)

New agent implementing UI/UX Pro Max-inspired design intelligence:
- **Input**: PROJECT.md (industry, audience, tech stack) + ARCHITECT output (component list, page structure)
- **Process**: Read `references/design/industry-rules.md` → find matching rule → load relevant style, palette, typography from design knowledge base → generate DESIGN.md
- **Output**: `.mike/DESIGN.md` (design authority document) + optionally `.mike/design-tokens.json` (FORGE+)
- **SCOUT mode**: Instead of generating, the designer *extracts* existing design from codebase CSS/SCSS/Tailwind config/theme files and documents it in DESIGN.md
- **Startup Sequence**: (1) Read PROJECT.md for product type/industry/audience, (2) Read ARCHITECT output for component + page structure, (3) Read `references/design/industry-rules.md` and find matching rule(s), (4) Read relevant sections of styles.md, color-palettes.md, typography.md, (5) Read stack-specific reference (e.g., `stacks/html-tailwind.md`), (6) If SCOUT: read `.mike/codebase/CONVENTIONS.md` for existing design patterns
- **Rules active**: R1, R3, R4 (architectural decisions require user confirmation — design system IS an architectural decision at CITADEL level)

### 7.4 Key Agent: mike-executor

Adapted from GMSD's `gmsd-executor.md` with these additions:
- **Shard-aware**: When sharding is active (FORGE+), the executor receives a SHARD.md file instead of reading PLAN.md directly. The shard IS the complete context.
- **Boundary enforcement**: Checks DO NOT CHANGE declarations before modifying any file. Violations require lead confirmation (R3).
- **AC-driven completion**: Task is not done until all referenced AC are verified. Not "I think I did it" but "I can demonstrate AC-1: PASS."
- **Issue deferral**: If executor discovers an enhancement outside scope, logs it to ISSUES.md instead of implementing it (R8).
- **Micro-verification**: After each commit, run build check + test check + AC self-check (from GMSD).
- **Ralph Loop trigger**: If stuck >3 retries on same error, the lead can invoke Ralph Loop (fresh context retry with git as memory).

### 7.4 Key Agent: mike-verifier (Independent QA)

New agent adapted from BMAD's independent QA concept:
- **Not the developer**: This agent did NOT write the code. It verifies independently.
- **Goal-backward**: Starts from the phase goal, derives what must be true, checks if it is.
- **4-level hierarchy** (from GSD): exists -> substantive -> wired -> functional.
- **AC results table**: Produces explicit PASS/FAIL per acceptance criterion.
- **False positive awareness** (from BMAD): Documents when AI flags problems that don't exist.
- **Pre-commit hook verification**: Runs configured quality checks.

### 7.5 Key Agent: mike-sharder (Document Sharding)

New agent implementing BMAD's document sharding:
- **Input**: PLAN.md + PROJECT.md + REQUIREMENTS.md + CONTEXT.md + any architecture docs
- **Output**: Individual SHARD-{NN}.md files in `phases/{N}-{name}/shards/`
- **Algorithm**: See Section 8 (Sharding Algorithm)
- **Constraints**: Each shard must be self-contained (executor needs ONLY the shard). Target ~8K tokens per shard (vs ~32K without sharding). Include only relevant schema fragments, API definitions, design notes.

---

## 8. Document Sharding Algorithm

This is BMAD's killer innovation (74-90% token reduction), adapted for MIKE.

### 8.1 Sharding Process

```
Input:
  - PLAN.md (tasks, AC, file ownership, risk assessment)
  - PROJECT.md (requirements, constraints, decisions)
  - REQUIREMENTS.md (formal requirements with REQ-IDs)
  - CONTEXT.md (locked user decisions)
  - ARCHITECTURE.md / DB schema / API spec (if exist)
  - Error patterns (if documented)

Process:
  1. Parse PLAN.md into individual tasks
  2. For each task, extract:
     a. Task description, objective, steps
     b. Acceptance criteria (only AC referenced by this task)
     c. Files to create/modify
     d. Dependencies
     e. Boundary declarations (only boundaries relevant to this task's files)
  3. For each task, extract ONLY relevant context from other docs:
     a. From CONTEXT.md: only decisions that affect this task's files or domain
     b. From schema: only tables/columns this task touches
     c. From API spec: only endpoints this task implements or calls
     d. From REQUIREMENTS.md: only REQ-IDs this task satisfies
     e. From error patterns: only patterns for this task's technology/approach
     f. From DESIGN.md: only design tokens, component specs, and anti-patterns relevant to this shard's UI components
  4. Compose each shard from the SHARD.md template
  5. Validate: every shard must be executable without additional context
  6. Cross-reference: verify all tasks from PLAN.md are covered by exactly one shard

Output:
  - .mike/phases/{N}-{name}/shards/SHARD-01.md
  - .mike/phases/{N}-{name}/shards/SHARD-02.md
  - ...
  - Sharding report: total shards, avg token count per shard, coverage verification
```

### 8.2 Sharding Rules

1. **One task per shard** — Each shard maps to exactly one task from PLAN.md
2. **Self-contained** — The shard must contain ALL information the executor needs
3. **Minimal context** — Include ONLY relevant fragments, not entire documents
4. **Token budget** — Target ~8K tokens per shard (vs ~32K without sharding)
5. **BDD AC included** — Every shard includes the specific Given/When/Then criteria it must satisfy
6. **Boundaries included** — Every shard includes DO NOT CHANGE declarations for its file scope
7. **Error patterns included** — Known failure modes for the shard's technology/approach
8. **Dependencies declared** — Which shards this one depends on or blocks

### 8.3 When Sharding Is Active

| Profile | Sharding |
|---------|----------|
| BLITZ | Never (single task list, too lightweight) |
| SPRINT | Never (per-phase plans sufficient for 2-3 concurrent executors) |
| FORGE | Always (core to FORGE's token efficiency) |
| CITADEL | Always + synergy verification across shards |
| SCOUT | Never (in-session execution, full context needed) |
| GOLD | L0-L1: Never, L2+: Always |

---

## 9. Dynamic Rules Engine

Adapted from PAUL's CARL system. Rules are loaded just-in-time based on the current context instead of bloating every session with static prompts.

### 9.1 Rule Definitions

| # | Level | Rule | When Active |
|---|-------|------|-------------|
| R1 | CRITICAL | No implementation without an approved plan | Always |
| R2 | CRITICAL | Every execution unit followed by UNIFY (SUMMARY.md) | Always |
| R3 | CRITICAL | Respect boundary declarations (DO NOT CHANGE). Violations require explicit user confirmation. | Always |
| R4 | CRITICAL | Architectural decisions require user confirmation. Auto-fix bugs, auto-add deps, but ASK for architecture. | Always |
| R5 | CRITICAL | State consistency at transitions — STATE.md, PROJECT.md, ROADMAP.md must align. Misalignment is BLOCKING. | FORGE+ and GOLD L2+ |
| R6 | CRITICAL | Context bracket strategies are binding. At CRITICAL (<20%), complete current task only and prepare HANDOFF. | Always |
| R7 | QUALITY | Atomic commits per task with conventional format: `mike({phase}-{shard}): {description}` | Always |
| R8 | QUALITY | Deferred issues go to ISSUES.md, not into current scope. No scope creep during execution. | Always |
| R9 | QUALITY | Acceptance criteria defined before tasks. AC are first-class, testable, in BDD format. | Always |
| R10 | PATTERN | Summary-before-full: when resuming, read SUMMARY.md (digest) instead of PLAN.md (full spec) to preserve context. | Always |
| R11 | PATTERN | Single next action on resume: suggest ONE action, not a menu. Eliminate decision fatigue. | Always |
| R12 | PATTERN | Error patterns documented in planning artifacts for proactive error recovery. | FORGE+ |

### 9.2 Rule Loading

Rules are injected into agent prompts and workflow instructions based on context:

- **CRITICAL rules**: Always loaded into every agent and workflow
- **QUALITY rules**: Loaded during execution and UNIFY phases
- **PATTERN rules**: Loaded during session management (resume, pause, transition)
- **Profile-specific rules**: Additional rules loaded per profile (e.g., CITADEL adds party mode governance rules)

### 9.3 Rule Enforcement

- **CRITICAL**: MUST be followed. Violation blocks progress.
- **QUALITY**: SHOULD be followed. Violation logged in SUMMARY.md deviations.
- **PATTERN**: MAY be followed. Best practice, not enforced.

---

## 10. Scale Detection (GOLD Profile)

### 10.1 Auto-Detection Algorithm

When `profile: "gold"` and `scale_mode: "auto"`, MIKE auto-detects the scale level on init:

```
Input signals:
  1. User's project description (complexity, scope)
  2. Existing codebase size (if brownfield):
     - file_count = count of source files
     - dir_count = count of source directories
  3. Number of requirements stated
  4. Number of phases in roadmap

Detection logic:
  IF user says "quick fix" or "bug fix" or "config change"
    OR estimated_files <= 2:
    -> L0 (Atomic)

  ELSE IF estimated_files <= 10
    OR requirements <= 5
    OR phases <= 2:
    -> L1 (Minor)

  ELSE IF estimated_files <= 30
    OR requirements <= 15
    OR phases <= 5:
    -> L2 (Standard)

  ELSE IF estimated_files <= 100
    OR requirements <= 30
    OR phases <= 8:
    -> L3 (Major)

  ELSE:
    -> L4 (Enterprise)
```

### 10.2 User Override

User can always override: `/mike:settings --scale L3` or declare during init.

### 10.3 Scale -> Behavior Mapping

See `references/profile-matrix.md` for the full matrix. The GOLD profile maps each scale level to specific behaviors from the profile dimension table in APEX-FRAMEWORK.md Section 5.3.

---

## 11. Hook System

### 11.1 mike-context-monitor.js (PostToolUse)

Adapted from GSD's context monitoring hook. Monitors context usage and reports bracket transitions.

```javascript
// Triggers on every PostToolUse event
// Reads conversation context usage percentage
// Maps to bracket: FRESH (>70%), MODERATE (40-70%), DEEP (20-40%), CRITICAL (<20%)
// Displays warning when bracket changes
// At CRITICAL: blocks new work, forces HANDOFF preparation

// Output format:
// [MIKE] Context: 65% remaining (MODERATE) -- consider plan splits
// [MIKE] WARNING: Context CRITICAL (<20%) -- complete current task, prepare HANDOFF
```

### 11.2 mike-statusline.js (Statusline)

Progress display showing current state.

```
// Format:
// [MIKE] Phase 3/5 | EXECUTE | Shard 4/7 | FORGE | Context: FRESH
// [MIKE] Phase 1/3 | PLAN | BLITZ | L1 | Context: MODERATE
```

---

## 12. Installer (bin/install.js)

Adapted from GMSD's installer with these changes:

### 12.1 Installation Targets

```
~/.claude/
|-- commands/mike/          # Slash commands
|-- agents/mike-*.md        # Agent definitions (prefixed, don't clobber others)
|-- do-it-like-mike/        # Framework directory
|   |-- workflows/
|   |-- templates/
|   |-- references/
|   |-- VERSION
|   |-- mike-file-manifest.json
|-- hooks/mike-*.js         # Hooks (prefixed, don't clobber others)
```

### 12.2 Install Behavior

```
npx do-it-like-mike                  # Global install (default, to ~/.claude/)
npx do-it-like-mike --local          # Local install (to ./.claude/)
npx do-it-like-mike --dry-run        # Preview without installing
npx do-it-like-mike --uninstall      # Remove MIKE files (preserves non-MIKE files)
npx do-it-like-mike --force          # Skip confirmation prompts
```

### 12.3 Key Features (from GMSD)

- **Prefix isolation**: Only touches `mike-*` files in `agents/` and `hooks/` — preserves other frameworks' files
- **Path replacement**: Markdown files get `~/.claude` paths replaced with actual install path
- **File manifest**: SHA-256 hashes of all installed files for detecting local modifications
- **Patch backup**: Detects locally modified files before overwriting, backs them up to `mike-local-patches/`
- **Coexistence**: Can be installed alongside GSD, GMSD, PAUL, BMAD without conflict

### 12.4 Post-Install Output

```
 ███╗   ███╗██╗██╗  ██╗███████╗
 ████╗ ████║██║██║ ██╔╝██╔════╝
 ██╔████╔██║██║█████╔╝ █████╗
 ██║╚██╔╝██║██║██╔═██╗ ██╔══╝
 ██║ ╚═╝ ██║██║██║  ██╗███████╗
 ╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚══════╝
  Don't half ass it. Do it like Mike.  v1.0.0

Next steps:
  1. Open Claude Code in your project
  2. Run /mike:init to get started
  3. Run /mike:help for command reference
```

---

## 13. package.json

```json
{
  "name": "do-it-like-mike",
  "version": "1.0.0",
  "description": "Don't half ass it. Do it like Mike. A profile-driven AI development framework that combines the best of GSD, M2C1, PRP, BMAD, and PAUL.",
  "type": "module",
  "bin": {
    "do-it-like-mike": "bin/install.js"
  },
  "files": [
    "bin/",
    "commands/",
    "agents/",
    "workflows/",
    "templates/",
    "references/",
    "hooks/",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "test": "node --test tests/**/*.test.js",
    "prepublishOnly": "node bin/validate.js"
  },
  "keywords": [
    "claude",
    "claude-code",
    "anthropic",
    "ai",
    "development-workflow",
    "project-management",
    "orchestration",
    "document-sharding",
    "parallel-execution",
    "multi-agent",
    "planning",
    "verification",
    "profile-driven",
    "mike",
    "gsd",
    "bmad",
    "paul",
    "prp"
  ],
  "author": "Vicente Alvarez Asencio",
  "license": "MIT",
  "engines": {
    "node": ">=18.0.0"
  },
  "os": ["darwin", "linux", "win32"]
}
```

---

## 14. Build Order

Sequential build plan for implementing MIKE. Each phase produces a shippable increment.

### Phase 0: Bootstrap — Clone Reference Repos

**MANDATORY FIRST STEP.** Before any implementation, clone all source framework repos locally. This enables agents to `Read`/`Grep`/`Glob` source files directly instead of relying on `WebFetch` (which is slow, rate-limited, and lossy).

```bash
mkdir -p _references && cd _references
git clone --depth 1 https://github.com/gsd-build/get-shit-done.git gsd
git clone --depth 1 https://github.com/bmad-code-org/BMAD-METHOD.git bmad
git clone --depth 1 https://github.com/ChristopherKahler/paul.git paul
git clone --depth 1 https://github.com/grandamenium/m2c1.git m2c1
git clone --depth 1 https://github.com/Wirasm/PRPs-agentic-eng.git prp
git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git ui-ux-pro-max
cd ..
```

**Add to `.gitignore`:**
```
_references/
```

**What this gives you:**

| Local Path | What's Inside | Used For |
|-----------|--------------|----------|
| `_references/gsd/` | Agents, commands, workflows, templates, hooks, installer | Installer pattern, agent format, executor, verifier, state management, wave execution |
| `_references/bmad/` | Agent personas, tasks, document sharding, scale-adaptive | Sharding algorithm, independent QA, Party Mode, scale detection |
| `_references/paul/` | 26 commands, 21 workflows, 16 templates, 12 references | UNIFY, CARL rules, context brackets, boundaries, handoff, debug, plan format |
| `_references/m2c1/` | Single skill file | Completeness gate, 2-wave research, authority hierarchy, skill creation |
| `_references/prp/` | PRP templates | Ralph Loop, error patterns, info-dense keywords, feature-scoping |
| `_references/ui-ux-pro-max/` | CSV data files, Python scripts, templates | 67 styles, 96 palettes, 57 typography, 100 industry rules — convert to markdown |

**Key files to study per component:**

| MIKE Component | Read This Source File First |
|---------------|---------------------------|
| `bin/install.js` | `_references/gsd/bin/install.js` |
| Agent markdown format | `_references/gsd/agents/gsd-executor.md` |
| Command markdown format | `_references/gsd/commands/gsd/execute-phase.md` |
| UNIFY workflow | `_references/paul/workflows/unify.md` |
| CARL rules engine | `_references/paul/references/loop-phases.md` + `_references/paul/workflows/rules-engine.md` |
| Context brackets | `_references/paul/references/context-management.md` |
| Plan format + BDD AC | `_references/paul/references/plan-format.md` |
| Handoff format | `_references/paul/templates/HANDOFF.md` |
| Debug persistence | `_references/paul/workflows/debug.md` |
| Document sharding | `_references/bmad/bmad-core/tasks/` (story generation) |
| Scale detection | `_references/bmad/bmad-agent/` (scale-adaptive logic) |
| Independent QA | `_references/bmad/bmad-core/personas/qa.md` |
| Research workflow | `_references/gsd/workflows/research-phase.md` + `_references/m2c1/` (2-wave model) |
| Ralph Loop | `_references/prp/` (fresh-context retry spec) |
| Design data (styles) | `_references/ui-ux-pro-max/src/ui-ux-pro-max/data/styles.csv` |
| Design data (colors) | `_references/ui-ux-pro-max/src/ui-ux-pro-max/data/colors.csv` |
| Design data (typography) | `_references/ui-ux-pro-max/src/ui-ux-pro-max/data/typography.csv` |
| Design data (industry rules) | `_references/ui-ux-pro-max/src/ui-ux-pro-max/data/ui-reasoning.csv` |
| Design system generator | `_references/ui-ux-pro-max/src/ui-ux-pro-max/scripts/design_system.py` |

**After cloning, proceed to Phase 1.**

### Phase 1: Foundation (v0.1.0)
**What ships:** Installable package with init, progress, help, settings, and the GOLD profile at L0-L1 (simplest behavior).

Files to build:
- `package.json`
- `bin/install.js` (adapt from GMSD)
- `bin/validate.js`
- `commands/mike/init.md`
- `commands/mike/progress.md`
- `commands/mike/help.md`
- `commands/mike/settings.md`
- `templates/config.json`
- `templates/state.json`
- `templates/STATE.md`
- `templates/PROJECT.md`
- `templates/ROADMAP.md`
- `templates/ISSUES.md`
- `references/rules.md`
- `references/context-brackets.md`
- `references/deviation-rules.md`
- `workflows/profile-resolution.md`
- `workflows/scale-detection.md`
- `workflows/rules-engine.md`

### Phase 2: BLITZ Profile (v0.2.0)
**What ships:** Complete BLITZ workflow — init to done in one session.

Files to build:
- `commands/mike/quick.md`
- `commands/mike/execute.md` (in-session mode)
- `commands/mike/unify.md` (lightweight mode)
- `templates/SUMMARY.md` (lightweight variant)
- `workflows/unify.md`

### Phase 3: SPRINT Profile (v0.3.0)
**What ships:** Per-phase planning and wave-parallel execution.

Files to build:
- `commands/mike/discover.md`
- `commands/mike/research.md`
- `commands/mike/discuss.md`
- `commands/mike/plan.md`
- `commands/mike/verify.md`
- `commands/mike/transition.md`
- `commands/mike/pause.md`
- `commands/mike/resume.md`
- `agents/mike-executor.md`
- `agents/mike-researcher.md`
- `agents/mike-synthesizer.md`
- `agents/mike-planner.md`
- `agents/mike-plan-checker.md`
- `templates/PLAN.md`
- `templates/RESEARCH.md`
- `templates/HANDOFF.md`
- `templates/VERIFICATION.md`
- `templates/CONTEXT.md`
- `templates/SUMMARY.md` (standard variant)
- `workflows/execute-phase.md` (wave-parallel mode)
- `workflows/research.md`
- `workflows/verify-phase.md`
- `workflows/transition-phase.md`
- `hooks/mike-context-monitor.js`
- `hooks/mike-statusline.js`

### Phase 4: FORGE Profile (v0.4.0)
**What ships:** Document sharding, independent QA, front-loaded planning, **and design system generation**.

Files to build:
- `commands/mike/architect.md`
- `commands/mike/design.md`
- `commands/mike/shard.md`
- `agents/mike-verifier.md`
- `agents/mike-sharder.md`
- `agents/mike-designer.md`
- `templates/SHARD.md`
- `templates/DISCOVERY.md`
- `templates/DESIGN.md`
- `templates/SUMMARY.md` (full variant)
- `workflows/shard.md`
- `workflows/architect.md`
- `workflows/design.md`
- `references/sharding-algorithm.md`
- `references/acceptance-criteria.md`
- `references/design/styles.md` (67 UI styles — convert from UI/UX Pro Max styles.csv)
- `references/design/color-palettes.md` (96 palettes — convert from colors.csv)
- `references/design/typography.md` (57 pairings — convert from typography.csv)
- `references/design/industry-rules.md` (100 rules — convert from ui-reasoning.csv)
- `references/design/landing-patterns.md` (8 archetypes — convert from landing.csv)
- `references/design/dashboard-patterns.md` (10 archetypes — extract from styles.csv)
- `references/design/anti-patterns.md` (deduplicated from reasoning rules)
- `references/design/design-checklist.md` (pre-delivery verification)
- `references/design/stacks/html-tailwind.md`
- `references/design/stacks/react-shadcn.md`
- `references/design/stacks/nextjs.md`
- `references/design/stacks/swiftui.md`
- `references/design/stacks/flutter.md`
- `references/design/stacks/react-native.md`
- `references/design/stacks/vue-nuxt.md`

### Phase 5: SCOUT Profile (v0.5.0)
**What ships:** Codebase-first analysis, boundary enforcement, persistent debug.

Files to build:
- `commands/mike/map.md`
- `commands/mike/debug.md`
- `commands/mike/issues.md`
- `agents/mike-codebase-mapper.md`
- `agents/mike-debugger.md`
- `workflows/debug.md`

### Phase 6: CITADEL Profile (v0.6.0)
**What ships:** Party mode, synergy review, 5-layer verification.

Files to build:
- Party mode additions to `workflows/architect.md`
- Synergy review additions to `workflows/shard.md`
- 5-layer verification additions to `workflows/verify-phase.md`
- Role constraints additions to agent definitions
- `references/profile-matrix.md` (complete matrix)

### Phase 7: Completion + Polish (v1.0.0)
**What ships:** Milestone lifecycle, roadmap management, update system, full GOLD adaptive behavior.

Files to build:
- `commands/mike/complete.md`
- `commands/mike/add-phase.md`
- `commands/mike/insert-phase.md`
- `commands/mike/remove-phase.md`
- `commands/mike/update.md`
- `workflows/complete-milestone.md`
- `workflows/ralph-loop.md`
- `references/commit-conventions.md`
- Full GOLD scale-adaptive logic across all commands

---

## 15. Relationship to Source Frameworks

### 15.1 What to Read When Building Each Component

| MIKE Component | Primary Source to Read | Secondary Source |
|---------------|----------------------|-----------------|
| Installer | GMSD `bin/install.js` | PAUL `npx paul-framework` |
| Command format | GMSD `commands/gmsd/*.md` | PAUL command files |
| Agent definitions | GMSD `agents/gmsd-*.md` | BMAD agent-as-code |
| Executor agent | GMSD `agents/gmsd-executor.md` | PAUL in-session philosophy |
| Planning workflow | GMSD `workflows/plan-phase.md` | PAUL plan format |
| Execution workflow | GMSD `workflows/execute-phase.md` | BMAD shard-code-test loop |
| UNIFY workflow | PAUL `/paul:unify` workflow | (PAUL-unique innovation) |
| Sharding | BMAD Scrum Master stories | MIKE-adapted algorithm |
| Rules engine | PAUL CARL system | (PAUL-unique innovation) |
| Context brackets | PAUL `context-management.md` | GSD context hooks |
| Verification | GSD `agents/gmsd-verifier.md` | BMAD QA agent |
| Debug persistence | PAUL `/paul:debug` workflow | (PAUL-unique innovation) |
| Research | GMSD `commands/gmsd/research-phase.md` | M2C1 2-wave model |
| Issue deferral | PAUL `ISSUES.md` | (PAUL-unique innovation) |
| State management | GMSD `templates/STATE.md` + state.json | PAUL STATE.md |
| Handoff | PAUL `HANDOFF-{date}.md` | GSD `.continue-here` |
| Design system generation | UI/UX Pro Max `scripts/design_system.py` | MIKE-adapted (LLM reasoning over markdown, not BM25 over CSV) |
| Design knowledge base | UI/UX Pro Max `data/*.csv` (styles, colors, typography, reasoning, landing) | Converted to structured markdown in `references/design/` |
| Design verification | UI/UX Pro Max `skill-content.md` pre-delivery checklist | Integrated into mike-verifier agent |
| Scale detection | BMAD Scale-Domain-Adaptive Intelligence | (MIKE-adapted) |
| Ralph Loop | PRP Ralph Loop | (PRP-unique innovation) |
| Error patterns | PRP PRP document format | (PRP-unique innovation) |
| Party Mode | BMAD Party Mode | (BMAD-unique innovation) |

### 15.2 Key Agent: mike-designer — What to Read

| MIKE Component | Primary Source to Read | Secondary Source |
|---------------|----------------------|-----------------|
| Design recommendation engine | UI/UX Pro Max `src/ui-ux-pro-max/scripts/design_system.py` | `scripts/core.py` (BM25 logic — adapt to LLM reasoning) |
| Industry rules data | UI/UX Pro Max `src/ui-ux-pro-max/data/ui-reasoning.csv` | Convert 100 rules from CSV to structured markdown |
| Style catalog data | UI/UX Pro Max `src/ui-ux-pro-max/data/styles.csv` | 67 styles × 22 columns → markdown tables |
| Color palette data | UI/UX Pro Max `src/ui-ux-pro-max/data/colors.csv` | 96 palettes → expand with CSS variables |
| Typography data | UI/UX Pro Max `src/ui-ux-pro-max/data/typography.csv` | 57 pairings with Google Fonts URLs |
| Landing patterns | UI/UX Pro Max `src/ui-ux-pro-max/data/landing.csv` | 8 archetypes |
| Stack guidelines | UI/UX Pro Max `src/ui-ux-pro-max/data/stacks/*.csv` | 13 stacks (keep 7 most common) |
| Design system output | UI/UX Pro Max `scripts/design_system.py` `_generate_master()` | Adapt MASTER.md → DESIGN.md template |
| Design verification | UI/UX Pro Max skill-content.md pre-delivery checklist | Integrate into mike-verifier |

### 15.3 GitHub Repos to Reference

| Framework | Repository URL | Key Directories/Files to Fetch |
|-----------|---------------|-------------------------------|
| **GSD** | https://github.com/gsd-build/get-shit-done | `agents/`, `commands/`, `workflows/`, `templates/`, `hooks/`, `bin/install.js`, `references/` |
| **BMAD** | https://github.com/bmad-code-org/BMAD-METHOD | `bmad-agent/`, `bmad-core/personas/`, `bmad-core/tasks/`, document sharding logic, scale-adaptive intelligence |
| **PAUL** | https://github.com/ChristopherKahler/paul | `commands/`, `workflows/`, `templates/`, `references/` (12 docs), CARL rules engine |
| **M2C1** | https://github.com/grandamenium/m2c1 | Single skill file — complete discovery/execution pipeline in one markdown |
| **PRP** | https://github.com/Wirasm/PRPs-agentic-eng | PRP templates, Ralph Loop spec, error pattern format |
| **UI/UX Pro Max** | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | `src/ui-ux-pro-max/data/` (all CSV data files), `src/ui-ux-pro-max/scripts/` (recommendation engine), `src/ui-ux-pro-max/templates/base/skill-content.md` |

### 15.4 Data Migration: UI/UX Pro Max CSV → MIKE Markdown

When building the design knowledge base (`references/design/`), fetch and convert these source files:

| Source File (CSV) | Target File (MD) | Records | Conversion Notes |
|------------------|------------------|---------|-----------------|
| `data/styles.csv` | `styles.md` | 67 styles × 22 cols | Each style → markdown section with structured table |
| `data/colors.csv` | `color-palettes.md` | 96 palettes × 8 cols | Expand to 11 roles (add Success/Warning/Error/Surface/TextMuted) |
| `data/typography.csv` | `typography.md` | 57 pairings × 15 cols | Include Google Fonts URLs + Tailwind config snippets |
| `data/ui-reasoning.csv` | `industry-rules.md` | 100 rules × 10 cols | Each rule → markdown section with structured table |
| `data/landing.csv` | `landing-patterns.md` | 8 patterns × 8 cols | Add section order and component recommendations |
| `data/styles.csv` (dashboard subset) | `dashboard-patterns.md` | 10 styles | Extract dashboard styles, expand with layout guidance |
| Anti-patterns from `ui-reasoning.csv` | `anti-patterns.md` | ~100+ | Deduplicate, organize by industry category |
| `data/stacks/*.csv` (7 of 13) | `stacks/*.md` | Varies | Convert to implementation guides with code examples |

---

*This implementation spec, combined with APEX-FRAMEWORK.md (design/philosophy), MIKE-UI-DESIGN-PROPOSAL.md (design step details), and FRAMEWORK-COMPARISON.md (source analysis), provides complete context for building the MIKE framework from scratch.*
