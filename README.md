<div align="center">

# MIKE — Multi-profile Intelligent Kode Engine

**A profile-driven, spec-driven AI development framework for Claude Code that adapts its entire philosophy to match your project.**

**Combines the best innovations from GSD, M2C1, PRP, BMAD, and PAUL into one system.**

[![npm version](https://img.shields.io/npm/v/do-it-like-mike?style=for-the-badge&logo=npm&logoColor=white&color=CB3837)](https://www.npmjs.com/package/do-it-like-mike)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)

<br>

```bash
npx do-it-like-mike
```

**Works on Mac, Windows, and Linux.**

<br>

```
 ███╗   ███╗██╗██╗  ██╗███████╗
 ████╗ ████║██║██║ ██╔╝██╔════╝
 ██╔████╔██║██║█████╔╝ █████╗
 ██║╚██╔╝██║██║██╔═██╗ ██╔══╝
 ██║ ╚═╝ ██║██║██║  ██╗███████╗
 ╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚══════╝
  Don't half ass it. Do it like Mike.
```

<br>

[Why MIKE Exists](#why-mike-exists) · [How It Works](#how-it-works) · [Profiles](#the-profile-system) · [Commands](#commands) · [Why It Works](#why-it-works) · [Configuration](#configuration)

</div>

---

## Why MIKE Exists

Every AI development framework makes a fixed bet:

- **GSD** bets on fresh-context subagents — great parallelism, but heavyweight orchestration overhead per phase
- **M2C1** bets on exhaustive upfront planning — thorough, but 2-4 hours before the first line of code
- **PRP** bets on information density — efficient, but can't scale beyond single features
- **BMAD** bets on agile document sharding — huge token savings, but demands a rigid SDLC workflow
- **PAUL** bets on loop integrity — zero drift, but sacrifices parallelism and throughput

Each is optimal for *some* projects and suboptimal for others. A hackathon prototype and a production SaaS backend demand fundamentally different planning depth, execution models, verification rigor, and token investment.

**No single workflow is universally optimal.** So why pick one?

MIKE doesn't. It defines an 11-step pipeline where *every step* adapts through **profiles** — predetermined configurations that shift the entire philosophy, depth, and behavior of the system based on what you're actually building. One framework, six shapes. From hackathon to enterprise.

The best innovations from all five frameworks, applied at the right intensity for your project.

---

## Who This Is For

People building software with Claude Code who want the framework to match the project — not the other way around.

- **Prototyping?** MIKE runs lean. 3 steps, no subagents, ship in an hour.
- **Building a real product?** MIKE plans each phase, shards tasks for parallel execution, and verifies against goals.
- **Working on a production system?** MIKE debates architecture with multi-agent Party Mode, enforces 7-layer verification, and writes structured retrospectives.
- **Adding features to existing code?** MIKE analyzes the codebase first with 4 parallel mapping agents, then enforces boundaries so nothing breaks.
- **Not sure what you need?** MIKE detects your project's scale and adapts automatically.

---

## Getting Started

```bash
npx do-it-like-mike
```

The installer prompts you to choose:
1. **Location** — Global (all projects) or local (current project only)

Verify with:
```
/mike:help
```

### Quick Start

```
/mike:init       # Initialize project, select profile, capture goal
/mike:progress   # See what to do next — always one clear action
/mike:help       # Full command reference
```

### Install Options

```bash
npx do-it-like-mike              # Global install (default)
npx do-it-like-mike --local      # Project-local install
npx do-it-like-mike --dry-run    # Preview without installing
npx do-it-like-mike --uninstall  # Remove MIKE files
npx do-it-like-mike --force      # Skip confirmation
```

---

## The Profile System

MIKE's core idea: **one framework, six behaviors.** You pick a profile at init (or let MIKE pick for you), and every step of the pipeline adapts — planning depth, execution model, verification rigor, token budget, human touchpoints.

```
AUTONOMY        LOW ──────────────────────────────────────── HIGH
THOROUGHNESS    LOW ──────────────────────────────────────── HIGH
SPEED           HIGH ─────────────────────────────────────── LOW

BLITZ ──────── SPRINT ──────── FORGE ──────── CITADEL
                                  │
                               SCOUT (brownfield specialist)
                                  │
                                GOLD (adaptive default)
```

| Profile | Best For | Planning | Execution | Verification |
|---------|---------|----------|-----------|--------------|
| **BLITZ** | Hackathons, prototypes, quick fixes | Minimal — inline task list | In-session, sequential | Lint + test loop |
| **SPRINT** | Side projects, MVPs, small apps | Per-phase plans with AC | Wave-parallel (2-3 agents) | Verifier agent |
| **FORGE** | Production apps, client work, SaaS | Front-loaded + document sharding | Wave-parallel sharded (3-5 agents) | Independent QA |
| **CITADEL** | Mission-critical, regulated, enterprise | Exhaustive + Party Mode debates | Wave-parallel sharded (5+ agents) | 7-layer verification |
| **SCOUT** | Legacy code, existing codebases | Codebase-first analysis | In-session with boundary enforcement | Codebase delta analysis |
| **GOLD** | Any project — auto-adaptive | Scale-detected (L0-L4) | Scale-detected | Scale-detected |

### GOLD — The Adaptive Default

GOLD doesn't have a fixed configuration. It analyzes your project and selects the optimal approach for each step:

| Scale Level | Detected When | Behaves Like |
|-------------|---------------|--------------|
| **L0** | Bug fix, typo, config change | BLITZ |
| **L1** | Single feature, few files | BLITZ+ |
| **L2** | Multi-feature, multiple phases | SPRINT |
| **L3** | Complex project, architecture decisions | FORGE |
| **L4** | Enterprise, regulated, mission-critical | CITADEL |

The principle: apply maximum rigor *where it matters* and minimum overhead *where it doesn't*. A bug fix doesn't need 12-phase planning. An enterprise platform doesn't need BLITZ execution. GOLD adapts.

---

## How It Works

### The 11-Step Pipeline

Every MIKE project flows through the same pipeline. Profiles control the *depth and approach* of each step, never the structure.

```
INITIALIZE → DISCOVER → RESEARCH → ARCHITECT → DESIGN → SHARD
→ EXECUTE → VERIFY → UNIFY → TRANSITION → COMPLETE
```

BLITZ uses 3 of these steps. CITADEL uses all 11. But the pipeline is always there, so you can escalate a project's rigor without restructuring anything.

---

### 1. Initialize

```
/mike:init
```

Conversational setup. MIKE asks about your project (one question at a time), recommends a profile, and creates the `.mike/` state directory with PROJECT.md, ROADMAP.md, and all foundation files.

```
Based on what you've described, I'd recommend the FORGE profile:
- Front-loaded planning with architecture gate
- Document sharding for efficient parallel execution
- Independent QA verification
- Design system generation (since you have a UI)

Other options: SPRINT (lighter), CITADEL (heavier), GOLD (let MIKE adapt).
Which one feels right?
```

One question at a time. Infer what you can, confirm what you must.

**Creates:** `.mike/` directory, `PROJECT.md`, `ROADMAP.md`, `STATE.md`, `config.json`

---

### 2. Discover + Research + Architect

```
/mike:discover       # Requirements gathering with completeness gate
/mike:research       # Technology investigation with parallel agents
/mike:architect      # Architecture design with solutioning gate
```

**BLITZ** collapses these into a single inline document. **SPRINT** does per-phase planning. **FORGE** front-loads architecture with measurable gates. **CITADEL** adds Party Mode — 2-3 specialized agents (Architect, Security Analyst, Performance Engineer) debate trade-offs and synthesize consensus before a single line of code is written.

**Creates:** `REQUIREMENTS.md`, `RESEARCH.md`, `ARCHITECTURE.md`

---

### 3. Design (UI Projects)

```
/mike:design
```

Auto-skipped for APIs, CLIs, libraries, and backend services.

MIKE generates a project-specific design system using a knowledge base of 67 styles, 96 palettes, and 100 industry-specific design rules. It matches your industry to appropriate visual patterns, selects typography and color tokens, and documents anti-patterns to avoid.

The result is a `DESIGN.md` with CSS variables, Tailwind tokens, and component specs that get sharded into executor contexts — so each parallel agent builds with the same visual language.

**Creates:** `DESIGN.md`, `design-tokens.json`

---

### 4. Shard (FORGE+)

```
/mike:shard
```

This is BMAD's killer innovation and MIKE's biggest efficiency gain.

A full PLAN.md might be 32K tokens. An executor agent only needs the 8K tokens relevant to its specific task. Document sharding decomposes plans into atomic, self-contained SHARD files — each one a complete prompt with just enough context.

```
┌─────────────────────────────────────────────────┐
│  PLAN.md (32K tokens)                           │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│  │SHARD │ │SHARD │ │SHARD │ │SHARD │ │SHARD │ │
│  │  01  │ │  02  │ │  03  │ │  04  │ │  05  │ │
│  │ ~8K  │ │ ~8K  │ │ ~8K  │ │ ~8K  │ │ ~8K  │ │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ │
└─────────────────────────────────────────────────┘
         74-90% token reduction per executor
```

Each shard includes: task description, relevant context fragments, BDD acceptance criteria, boundary declarations (DO NOT CHANGE), file ownership, dependencies, error patterns with fix strategies, design tokens (if applicable), and a verify command.

An executor reading ONLY its shard has everything it needs. No guessing, no missing context, no wasted tokens.

**Creates:** `.mike/phases/{N}-{name}/shards/SHARD-01.md`, `SHARD-02.md`, ...

---

### 5. Execute

```
/mike:execute
```

The system builds your project. How it builds depends on profile:

**BLITZ / SCOUT:** In-session sequential. No subagents — keeps full context for existing codebases or simple tasks.

**SPRINT:** Wave-parallel with 2-3 executor agents. Fresh 200K context per executor. Independent plans run simultaneously, dependent plans wait.

**FORGE / CITADEL:** Wave-parallel with sharded contexts. 3-5+ concurrent executors, each receiving only its SHARD file. Independent QA agent per wave (CITADEL). Ralph Loop for stuck tasks — autonomous fresh-context retry using git as memory.

```
┌──────────────────────────────────────────────────────────────┐
│  PHASE EXECUTION                                             │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  WAVE 1 (parallel)       WAVE 2 (parallel)       WAVE 3     │
│  ┌────────┐ ┌────────┐   ┌────────┐ ┌────────┐   ┌────────┐│
│  │Shard 01│ │Shard 02│ → │Shard 03│ │Shard 04│ → │Shard 05││
│  │  Auth  │ │Products│   │ Orders │ │  Cart  │   │Checkout││
│  │  ~8K   │ │  ~8K   │   │  ~8K   │ │  ~8K   │   │  ~8K   ││
│  └────────┘ └────────┘   └────────┘ └────────┘   └────────┘│
│       │          │            ↑          ↑            ↑      │
│       └──────────┴────────────┴──────────┘            │      │
│                    Dependencies flow forward                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

Every task gets an atomic git commit. Walk away, come back to completed work with clean history.

**Creates:** `SUMMARY.md` per phase

---

### 6. Verify + Unify

```
/mike:verify       # Quality assurance
/mike:unify        # Mandatory closure — planned vs. actual reconciliation
```

**Verify** checks that what was built matches what was planned. CITADEL runs 7 layers: build, tests, goal-backward analysis, automated functional testing (Playwright for web, XcodeBuildMCP for iOS/macOS), design compliance, regression, and security.

**Unify** is the non-negotiable step. Every execution unit closes with a SUMMARY.md that reconciles planned vs. actual, reports acceptance criteria pass/fail, logs deviations, captures decisions, and defers out-of-scope issues. No orphaned work. No "I think that was done."

This is PAUL's most impactful innovation — mandatory closure eliminates the ambiguity that plagues AI-assisted projects.

**Creates:** `VERIFICATION.md`, `SUMMARY.md`

---

### 7. Transition + Complete

```
/mike:transition    # Phase boundary management
/mike:complete      # Milestone archive, retrospective, git tag
```

Loop the pipeline per phase until the milestone is done. Then archive, retrospect, tag, and start the next milestone — or ship.

---

### Quick Mode

```
/mike:quick
```

For tasks that don't need the full pipeline. Same BLITZ guarantees (atomic commits, state tracking) with zero overhead — no plans, no shards, no subagents. Just get it done.

```
/mike:quick fix the login button
```

---

## Why It Works

### Profile-Driven Adaptation

Other frameworks give you one workflow and hope it fits. MIKE gives you six, each optimized for a different class of project. The overhead is proportional to the stakes.

| | BLITZ | SPRINT | FORGE | CITADEL |
|---|---|---|---|---|
| Time to first code | < 5 min | 15-30 min | 30-60 min | 2-4 hours |
| Human touchpoints | 3-5 | 5-10 | 8-15 | 12-20 |
| Overhead ratio | 15% | 30% | 40% | 55% |

### Document Sharding (from BMAD)

The single biggest efficiency innovation across all frameworks. Instead of loading a 32K-token plan into every executor, each agent gets only the ~8K tokens it needs. 74-90% token reduction per executor. More agents running with less waste.

### Mandatory UNIFY (from PAUL)

Every other framework treats verification as optional or post-hoc. MIKE makes closure mandatory. Every execution unit produces a SUMMARY.md that reconciles what was planned vs. what was built. No drift, no orphaned work, complete audit trail.

### Wave-Parallel Execution (from GSD)

Independent tasks run simultaneously. Dependent tasks wait. Each executor gets fresh 200K context — no accumulated garbage, no quality degradation. Your main context window stays at 30-40% while thousands of lines get written in parallel.

### Context Protection (from PAUL)

MIKE monitors context usage and shifts strategy automatically:

| Bracket | Remaining | Strategy |
|---------|-----------|----------|
| FRESH | >70% | Lean loading, trust recent context |
| MODERATE | 40-70% | Reinforce key files, consider unit splits |
| DEEP | 20-40% | Read SUMMARY not PLAN, defer complex work |
| CRITICAL | <20% | Complete current task ONLY, prepare handoff |

Quality degrades at ~50% context usage. MIKE prevents that from happening silently.

### Dynamic Rules Engine (from PAUL)

12 rules loaded just-in-time based on context, not bloating every session with static prompts. Critical rules (no implementation without a plan, mandatory UNIFY, respect boundaries) are always active. Pattern rules inject only when relevant.

### Design System Generation

For UI projects: 67 styles, 96 palettes, 100 industry-specific rules. MIKE matches your industry to appropriate visual patterns and generates design tokens (CSS variables, Tailwind config) that get sharded into executor contexts. Every parallel agent builds with the same visual language.

### Automated Functional Testing

MIKE doesn't just check that code exists — it verifies that it *works*. When Playwright MCP or XcodeBuildMCP is available, Layer 4 (Functional Verification) maps your acceptance criteria to automated test scenarios:

- **Web apps:** Playwright opens a browser, navigates pages, fills forms, clicks buttons, and takes screenshots as evidence
- **iOS/macOS apps:** XcodeBuildMCP builds to a simulator, launches the app, taps through UI flows, inspects view hierarchy, and captures screenshots

Each AC produces a PASS/FAIL with a screenshot saved to `.mike/phases/{N}-{name}/screenshots/`. The verifier agent never saw the code being built — it tests independently against a running application.

### Ralph Loop (from PRP)

When an executor hits the same error 3+ times, the Ralph Loop activates: fresh context, git as memory, state file tracking what each iteration tried. Up to 10 iterations of autonomous retry before escalating. Stuck tasks get unstuck without human intervention.

---

## Commands

### Pipeline (run in order)

| Command | What it does |
|---------|--------------|
| `/mike:init` | Initialize project, select profile, capture goal |
| `/mike:discover` | Requirements gathering, PRD, completeness gate |
| `/mike:research` | Technology research with parallel agents |
| `/mike:architect` | Architecture design with solutioning gate |
| `/mike:design` | UI design system — style, palette, typography, tokens |
| `/mike:shard` | Document sharding into atomic task files |
| `/mike:execute` | Build, test, commit — in-session or wave-parallel |
| `/mike:verify` | Independent QA, regression testing, design compliance |
| `/mike:unify` | Mandatory closure — SUMMARY.md reconciliation |
| `/mike:transition` | Phase/milestone boundary management |
| `/mike:complete` | Milestone archive, retrospective, git tag |

### Navigation

| Command | What it does |
|---------|--------------|
| `/mike:progress` | Status dashboard + single next action routing |
| `/mike:resume` | Resume from previous session |
| `/mike:pause` | Create handoff, optional WIP commit |

### Planning

| Command | What it does |
|---------|--------------|
| `/mike:discuss` | Gather phase context via adaptive questioning |
| `/mike:plan` | Create PLAN.md for a phase |

### Error Handling

| Command | What it does |
|---------|--------------|
| `/mike:debug` | Persistent debug session (survives /clear) |
| `/mike:issues` | View/triage deferred issues |

### Codebase

| Command | What it does |
|---------|--------------|
| `/mike:map` | 7-doc codebase analysis with 4 parallel agents |

### Roadmap

| Command | What it does |
|---------|--------------|
| `/mike:add-phase` | Append phase to roadmap |
| `/mike:insert-phase` | Insert decimal phase (e.g., 3.1) without renumbering |
| `/mike:remove-phase` | Remove future phase, renumber |

### Utility

| Command | What it does |
|---------|--------------|
| `/mike:quick` | BLITZ-mode quick task |
| `/mike:help` | Command reference with profile-aware filtering |
| `/mike:settings` | View/edit configuration |
| `/mike:update` | Self-update with changelog |

---

## Configuration

MIKE stores project settings in `.mike/config.json`, created during `/mike:init`.

### Core Settings

| Setting | What it controls |
|---------|------------------|
| `profile` | Active profile (blitz, sprint, forge, citadel, scout, gold) |
| `project_name` | Project identifier |
| `design.enabled` | Design system generation (auto-detected from project type) |
| `execution.max_concurrency` | Maximum parallel executor agents |
| `execution.ralph_loop` | Enable autonomous retry for stuck tasks |

### Git Settings

| Setting | Default | What it controls |
|---------|---------|------------------|
| `git.commit_prefix` | `mike` | Commit message prefix |
| `git.branching` | `none` | Branch strategy: none, phase, milestone, feature |
| `git.commits` | `per-task` | Commit granularity |

### Commit Format

```
mike({scope}): {description}
```

Scopes: `phase-{N}`, `phase-{N}-shard-{NN}`, `ralph-{N}`, `roadmap`, `milestone`, `plan`, `debug`, `quick`

---

## How MIKE Compares

| Capability | GSD | BMAD | PAUL | M2C1 | PRP | **MIKE** |
|-----------|-----|------|------|------|-----|----------|
| Profile system | No | No | No | No | No | **6 profiles + GOLD adaptive** |
| Document sharding | No | Yes | No | No | No | **Yes (FORGE+)** |
| Mandatory closure | No | No | Yes | No | No | **Yes (all profiles)** |
| Wave-parallel execution | Yes | No | No | No | No | **Yes (SPRINT+)** |
| Automated UI testing | No | No | No | No | No | **Yes (Playwright + XcodeBuildMCP)** |
| Context monitoring | Yes | No | Yes | No | No | **Yes (all profiles)** |
| Design system generation | No | No | No | No | No | **Yes (67 styles, 96 palettes)** |
| Codebase analysis | Yes | No | No | No | No | **Yes (7-doc, 4 agents)** |
| Multi-agent debate | No | Yes | No | No | No | **Yes (CITADEL Party Mode)** |
| Fresh-context retry | No | No | No | No | Yes | **Yes (Ralph Loop)** |
| Persistent debug | No | No | Yes | No | No | **Yes (survives /clear)** |
| Boundary enforcement | No | No | Yes | No | No | **Yes (SCOUT/CITADEL)** |
| Decimal phase insertion | No | No | Yes | No | No | **Yes** |
| Auto-scale detection | No | Yes | No | No | No | **Yes (GOLD L0-L4)** |

MIKE doesn't replace these frameworks — it studies what each does best and applies those innovations at the right intensity for your project.

---

## Project Structure

```
~/.claude/do-it-like-mike/          # Framework files
├── commands/mike/                   # 26 slash commands
├── agents/                          # 10 specialized agents
├── workflows/                       # 14 workflow definitions
├── templates/                       # State file templates
├── references/                      # Rules, conventions, design knowledge base
└── hooks/                           # Context monitoring hooks

.mike/                               # Per-project state (created by /mike:init)
├── config.json                      # Profile + settings
├── state.json                       # Machine-readable state
├── STATE.md                         # Human-readable status
├── PROJECT.md                       # Project brief
├── ROADMAP.md                       # Phase structure
├── ISSUES.md                        # Deferred issues
├── phases/                          # Phase plans, shards, summaries
├── codebase/                        # 7-doc analysis (SCOUT/GOLD L2+)
├── debug/                           # Persistent debug sessions
└── milestones/                      # Archived milestone data
```

---

## Troubleshooting

**Commands not found after install?**
- Restart Claude Code to reload commands
- Verify files exist in `~/.claude/commands/mike/` (global) or `.claude/commands/mike/` (local)
- Re-run `npx do-it-like-mike` to reinstall

**Updating to the latest version?**
```bash
npx do-it-like-mike --force
```
Or from within a project: `/mike:update`

### Uninstalling

```bash
npx do-it-like-mike --uninstall
```

---

## Prerequisites

- [Claude Code](https://claude.ai/download) (CLI)
- Node.js >= 18

MIKE is a Claude Code extension. It installs as slash commands that run inside Claude Code sessions. It does not run standalone.

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

<div align="center">

**Every framework is optimal for some projects. MIKE is optimal for yours.**

</div>
