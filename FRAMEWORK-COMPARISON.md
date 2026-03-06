# Framework Comparison: GSD vs M2C1 vs PRP vs BMAD vs PAUL

> Deep analysis of five AI-assisted development frameworks to inform the design of a next-generation autonomous development system.
>
> Date: 2026-02-28 (Updated: 2026-03-06 — added PAUL)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Framework Origins and Philosophy](#2-framework-origins-and-philosophy)
3. [Architecture Overview](#3-architecture-overview)
4. [The Planning Pipeline](#4-the-planning-pipeline)
5. [Execution Models](#5-execution-models)
6. [Agent Architecture](#6-agent-architecture)
7. [State Management](#7-state-management)
8. [Verification and Quality Assurance](#8-verification-and-quality-assurance)
9. [Context Window Management](#9-context-window-management)
10. [Error Handling and Recovery](#10-error-handling-and-recovery)
11. [Tool and Integration Ecosystem](#11-tool-and-integration-ecosystem)
12. [Session Continuity](#12-session-continuity)
13. [Configuration and Customization](#13-configuration-and-customization)
14. [Testing Philosophy](#14-testing-philosophy)
15. [UI and Design Capabilities](#15-ui-and-design-capabilities)
16. [Platform and Project Type Suitability](#16-platform-and-project-type-suitability)
17. [Autonomy Spectrum](#17-autonomy-spectrum)
18. [Speed and Overhead Analysis](#18-speed-and-overhead-analysis)
19. [Strengths and Weaknesses Matrix](#19-strengths-and-weaknesses-matrix)
20. [GMSD: Current State Assessment](#20-gmsd-current-state-assessment)
21. [Lessons for a Next-Generation System](#21-lessons-for-a-next-generation-system)
22. [Sources and References](#22-sources-and-references)

---

## 1. Executive Summary

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Creator** | TACHES | James Goldbach | Rasmus Widing | Brian (BMad Code, LLC) | Christopher Kahler (Chris AI Systems) |
| **Nature** | Node.js CLI + markdown workflows | Pure markdown (1,657 lines total) | Markdown templates + methodology | npm package + Skills + markdown agents | npm installer + markdown workflows + CARL rules |
| **Installation** | npm (`get-shit-done-cc`) | Copy to `~/.claude/skills/` | Copy templates to project | npm (`bmad-method`) | npx (`paul-framework`) |
| **Executable code** | ~3,500+ lines JS | Zero (instructions only) | Zero (templates only) | JS installer + YAML config + Skills | JS installer only (~200 LOC); rest is markdown |
| **Agent count** | 11 specialized types | 6 implicit types (orchestrator-spawned) | 1 execution agent (self-referential) | 9-19+ specialized agents | 1 primary (in-session) + research subagents |
| **Community** | Growing | 3 commits, new | 2k+ GitHub stars | 38k+ GitHub stars, 119 contributors | 194 stars, 22 forks |
| **Primary strength** | Context engineering, state persistence | Comprehensive upfront planning, autonomy | Context density, one-pass success | Document sharding, agile structure, scale-adaptive | Loop integrity, token-to-value efficiency, mandatory closure |
| **Primary weakness** | Heavyweight process, slow iteration | No execution tracking, no state recovery | Limited orchestration, no multi-agent | Prescriptive workflow, steep learning curve | Anti-parallelism limits throughput, single-runtime |
| **Autonomy level** | Medium (checkpoints, confirmations) | High (minimal human touchpoints) | Medium-High (validation loops) | Medium (quality gates, agent handoffs) | Medium (plan approval gates, checkpoint types) |
| **Maturity** | v1.22.0 | v0.0.1 | Established methodology | v6.0.3, 34+ workflows | v1.0.3 |
| **Target user** | Developers building with AI | Developers wanting end-to-end autonomy | Product managers turned developers | Teams wanting agile SDLC with AI | Solo developers shipping with Claude |
| **Runtimes** | Claude Code, OpenCode, Gemini, Codex | Claude Code only | Any LLM chat | Claude Code, Cursor, Windsurf, Codex | Claude Code only |
| **License** | MIT | MIT | Open | MIT | MIT |

### One-sentence summaries

- **GSD**: A spec-driven orchestration system that defeats context rot through fresh-context subagents, heavy verification, and persistent state — at the cost of process overhead.
- **M2C1**: A zero-code instruction set that front-loads all planning/research into 12 phases, then hands off to autonomous execution — prioritizing thoroughness over speed.
- **PRP**: A context engineering methodology that creates "minimum viable packets" of information for one-pass implementation success — prioritizing information density over process structure.
- **BMAD**: An agile AI-driven development framework with specialized agent roles (PM, Architect, Scrum Master, Developer, QA) and document sharding that reduces token consumption by 74-90% — prioritizing structured SDLC process and predictability.
- **PAUL**: A loop-disciplined framework that enforces mandatory Plan-Apply-Unify closure on every unit of work, keeps implementation in-session (no execution subagents), and optimizes for token-to-value efficiency over raw speed — prioritizing quality and traceability.

---

## 2. Framework Origins and Philosophy

### 2.1 GSD — "Claude plans the work, Claude does the work, Claude checks the work"

GSD was created by TACHES to solve a specific technical problem: **context rot**. As Claude's context window fills during a long coding session, output quality degrades. The solution: **meta-prompting** — each specialized subagent gets a fresh 200K token context window with only the relevant information it needs.

**Core beliefs:**
- Nothing gets built without a plan
- Nothing ships without verification
- The file system is the state store; the conversation is ephemeral
- Project initialization is "dream extraction, not requirements gathering"
- The user is a "founder with a vision," Claude is a "technical co-founder"

**Anti-patterns explicitly rejected:** checklist walking, canned questions, corporate speak, interrogation, rushing to code.

GSD treats development as an industrial process with quality gates at every stage. It's one of the most process-heavy frameworks — almost enterprise-grade in its verification layers.

### 2.2 M2C1 — "Convert brain dumps into fully built, tested, and deployed software — autonomously"

M2C1 was created by James Goldbach (co-authored with Claude Opus 4.6) in February 2026 — making it the newest of the five. Despite its name ("Meta Orchestration Framework"), M2C1 is not software. It is a pure-markdown instruction set installed as a Claude Code skill.

**Core beliefs (10 pillars):**
1. Every artifact has a template — agents read templates before creating anything
2. Parallel by default — subagents run in background wherever independent
3. Multi-angle testing at every level — task-local, phase regression, final comprehensive e2e
4. Human-emulating testing — agents test as users would via Playwright + simulated assets
5. Tool-aware — researches and configures MCP servers, CLIs, external services
6. Agent-autonomous — agents do "human steps" in browser, only truly manual steps require user
7. Generalizable — works for any software type (SaaS, API, CLI, mobile, etc.)
8. Discovery completeness — self-audits discovery questions before proceeding
9. Mandatory tool setup — agent autonomously configures all tools via Playwright + CLI
10. Mandatory skill creation — every tool, research domain, and testing strategy gets a dedicated skill file

M2C1 distinguishes itself through its extreme emphasis on **upfront completeness** — the DISCOVERY.md document must be so thorough that "an execution agent could implement everything without guessing."

### 2.3 PRP — "The minimum viable packet for one-pass implementation success"

PRP (Product Requirements Prompt) was created by Rasmus Widing, a product manager who learned to code with AI, starting in summer 2024. It evolved from traditional PRDs by adding AI-critical layers.

**Core formula:**
```
PRP = PRD + Curated Codebase Intelligence + Agent Runbook
```

**Core beliefs:**
- Context engineering is the discipline, not prompt engineering
- Over-specifying WHAT while under-specifying HOW is why AI coding stalls at 80%
- One-pass implementation success is possible with comprehensive context
- Bounded scope ensures single-iteration completability
- Separate clean instances for PRP creation vs. execution prevent hallucinations
- Designed for existing codebases first, not just greenfield

PRP is the lightest of the five — it's more a methodology than a system. It provides templates and principles, not orchestration infrastructure.

### 2.4 BMAD — "Breakthrough Method of Agile AI-Driven Development"

BMAD was created by **Brian (BMad)**, founder of BMad Code, LLC. Currently at v6.0.3 (February 2026) with 38,000+ GitHub stars and 119 active contributors, it is by far the most widely adopted framework in this comparison.

**Core beliefs (5 principles):**
1. **Rigorous problem definition** — problem statement, impact, value propositions, and explicit scope (in/out)
2. **Specialized agent teams** — multiple agents with "personified practice philosophies" instead of a monolithic AI
3. **Disciplined workflows** — structured, repeatable methodology analogous to the scientific method applied to software analysis
4. **Knowledge preservation** — systematic conversion of tacit knowledge into explicit, durable artifacts
5. **Architectural thinking** — users transition from "prompters" to system architects

**The problem BMAD attacks** is "vibe coding" — unpredictable AI sessions where every interaction produces different results, hallucinations are frequent, and decision traceability doesn't exist. BMAD imposes a **documentation-first paradigm** where specifications (PRD, architecture, user stories) become the source of truth, not the last chat message.

BMAD's killer innovation is **document sharding**: breaking complex project documentation into atomic, digestible pieces for the AI. Instead of feeding a 50-page PRD to every agent, the Scrum Master creates granular story files containing only the information relevant to that specific task — reducing token consumption by 74-90%.

**Agent-as-Code**: Each agent is defined as a Markdown file with expertise, responsibilities, constraints, and expected outputs. A System Architect cannot write tests; a Developer cannot redefine product objectives.

### 2.5 PAUL — "Plan-Apply-Unify Loop: Quality over speed-for-speed's-sake"

PAUL was created by **Christopher Kahler (Chris AI Systems)** and released in early 2026. At v1.0.3 with 194 GitHub stars and 22 forks, it is the most philosophically opinionated framework in this comparison — taking a deliberate stance *against* the subagent-heavy execution model used by GSD, M2C1, and BMAD.

**Core beliefs (3 principles):**
1. **Loop Integrity** — Every plan must close with a UNIFY phase that reconciles planned vs. actual work and updates project state. No orphan plans.
2. **In-Session Context** — Implementation stays within the main session, preserving full context quality. Subagents (~70% quality, 2,000-3,000 token launch overhead) are reserved exclusively for discovery and research.
3. **Acceptance-Driven Development (A.D.D.)** — Acceptance criteria are first-class citizens defined before tasks begin, using BDD format (Given/When/Then). "Done" is explicit and testable.

**The problem PAUL attacks** is token waste through subagent sprawl and context fragmentation. PAUL argues that AI is already the speed enhancement — optimizing speed further at the cost of quality produces "more garbage output faster." The framework optimizes for **token-to-value efficiency**: making every token count rather than maximizing throughput.

**PAUL's killer innovation** is the **mandatory UNIFY phase** — a reconciliation ritual that compares planned vs. actual outcomes, logs deviations, verifies acceptance criteria, and updates state before any new work begins. This creates an unbroken audit trail across sessions and prevents the "drift and forget" pattern common in long AI-assisted projects.

**CARL Integration**: PAUL uses a companion system called CARL (Context Augmentation & Reinforcement Layer) for dynamic rule injection — loading domain-specific rules just-in-time based on context rather than bloating every session with static prompts. PAUL defines 14 rules (6 CRITICAL, 3 QUALITY, 3 PATTERN-level) that govern loop behavior.

**Key philosophical contrast**: GSD asks *"How do I get Claude to execute a plan fast?"* — PAUL asks *"How do I get maximum value from every token spent?"*

---

## 3. Architecture Overview

### 3.1 GSD Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER (Claude Code CLI)                     │
├─────────────────────────────────────────────────────────────┤
│                  SLASH COMMANDS (~30)                         │
│  /gsd:new-project  /gsd:plan-phase  /gsd:execute-phase ...  │
├─────────────────────────────────────────────────────────────┤
│                WORKFLOW ENGINE (33 workflows)                 │
│  new-project.md  execute-phase.md  verify-work.md  ...       │
├─────────────────────────────────────────────────────────────┤
│                   CLI ROUTER (gsd-tools.cjs)                 │
│  state | config | phase | roadmap | verify | template | ...  │
├─────────────────────────────────────────────────────────────┤
│              LIBRARY MODULES (12 modules, ~3500 LOC)         │
│  state.cjs | config.cjs | phase.cjs | roadmap.cjs | ...     │
├─────────────────────────────────────────────────────────────┤
│                 AGENT DEFINITIONS (11 types)                  │
│  executor | planner | researcher | verifier | debugger | ... │
├─────────────────────────────────────────────────────────────┤
│                    HOOKS (3 scripts)                          │
│  context-monitor | statusline | update-check                 │
├─────────────────────────────────────────────────────────────┤
│              PERSISTENT STATE (.planning/)                    │
│  PROJECT.md | ROADMAP.md | STATE.md | config.json | phases/  │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 M2C1 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER (Claude Code CLI)                     │
├─────────────────────────────────────────────────────────────┤
│                    SKILL ENTRY POINT                          │
│  SKILL.md (auto-discovered via frontmatter)                  │
├─────────────────────────────────────────────────────────────┤
│             ORCHESTRATION WORKFLOW (1 file)                   │
│  orchestration-workflow.md (590 lines, 12 phases)            │
├─────────────────────────────────────────────────────────────┤
│               ARTIFACT TEMPLATES (8 files)                    │
│  prd.md | phases.md | progress.md | research-file.md | ...   │
├─────────────────────────────────────────────────────────────┤
│              GENERATED ARTIFACTS (per project)                │
│  .claude/orchestration-<slug>/                                │
│    PRD.md | DISCOVERY.md | PHASES.md | PROGRESS.md |         │
│    START.md | research/ | tasks/ | skills/ | reports/        │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 PRP Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER (Any LLM Chat)                        │
├─────────────────────────────────────────────────────────────┤
│                  SLASH COMMANDS (6)                           │
│  /prp-prd | /prp-plan | /prp-implement | /prp-ralph | ...   │
├─────────────────────────────────────────────────────────────┤
│                 PRP DOCUMENT (per feature)                    │
│  Context + Blueprint + Tasks + Validation + Error Patterns   │
├─────────────────────────────────────────────────────────────┤
│            EXECUTION ENGINE (single agent)                    │
│  Load → Plan → Execute → Validate → Complete                 │
├─────────────────────────────────────────────────────────────┤
│              RALPH LOOP (autonomous iteration)                │
│  Execute → Validate → Fix → Re-validate → (repeat)          │
├─────────────────────────────────────────────────────────────┤
│              FILE STORAGE (.claude/PRPs/)                     │
│  prds/ | plans/ | reports/ | issues/ | reviews/              │
└─────────────────────────────────────────────────────────────┘
```

### 3.4 BMAD Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                 USER (Claude Code / Cursor / Windsurf)        │
├─────────────────────────────────────────────────────────────┤
│                  SLASH COMMANDS (15)                          │
│  /workflow-init /prd /architecture /sprint-planning /dev ...  │
├─────────────────────────────────────────────────────────────┤
│             BMad MASTER (Orchestrator Agent)                  │
│  Routes workflows, manages state, coordinates handoffs       │
├─────────────────────────────────────────────────────────────┤
│              SPECIALIZED AGENTS (9-19+)                       │
│  Analyst | PM | UX Designer | Architect | Scrum Master |     │
│  Developer | QA | Builder | Creative Intelligence | ...      │
├─────────────────────────────────────────────────────────────┤
│           SCALE-DOMAIN-ADAPTIVE INTELLIGENCE                  │
│  Level 0 (Atomic) → Level 4 (Enterprise)                     │
├─────────────────────────────────────────────────────────────┤
│              DOCUMENT SHARDING ENGINE                         │
│  PRD → atomic stories with only relevant context             │
├─────────────────────────────────────────────────────────────┤
│              PERSISTENT ARTIFACTS                             │
│  product-brief.md | PRD.md | ARCHITECTURE.md |               │
│  db-schema.sql | api_spec.json | tech-stack.md |             │
│  stories/ | workflow-status.md                                │
├─────────────────────────────────────────────────────────────┤
│              QUALITY GATES                                    │
│  Solutioning Gate Check (≥90% completeness threshold)        │
└─────────────────────────────────────────────────────────────┘
```

**BMAD distinguishing characteristics:**
- Agent-as-Code: each agent is a markdown file following Anthropic's Skills specification
- Scale-adaptive: automatically adjusts depth from Level 0 (bug fix) to Level 4 (enterprise platform)
- Party Mode: multi-agent collaboration where 2-3 agents debate, agree, disagree, and build on ideas
- Solutioning Gate Check: mandatory quality gate requiring ≥90% architecture completeness before implementation
- Document sharding: 74-90% token reduction through atomic story files
- Modular ecosystem: BMM (core), BMB (builder), TEA (testing), BMGD (game dev), CIS (creative)

### 3.5 PAUL Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER (Claude Code CLI)                     │
├─────────────────────────────────────────────────────────────┤
│                  SLASH COMMANDS (26)                          │
│  /paul:init /paul:plan /paul:apply /paul:unify /paul:verify  │
│  /paul:research /paul:discover /paul:pause /paul:resume ...  │
├─────────────────────────────────────────────────────────────┤
│             CARL RULE ENGINE (Dynamic Injection)              │
│  14 rules (6 CRITICAL, 3 QUALITY, 3 PATTERN)                │
│  Activates domain-specific rules just-in-time               │
├─────────────────────────────────────────────────────────────┤
│              WORKFLOW ENGINE (21 workflows)                   │
│  init-project | plan-phase | apply-phase | unify-phase |     │
│  transition-phase | complete-milestone | debug | research |   │
│  map-codebase | discovery | quality-gate | ...               │
├─────────────────────────────────────────────────────────────┤
│              REFERENCE DOCS (12 documents)                    │
│  loop-phases | context-management | checkpoints | tdd |       │
│  plan-format | quality-principles | work-units | ...         │
├─────────────────────────────────────────────────────────────┤
│              TEMPLATES (16+ templates)                        │
│  PROJECT.md | STATE.md | ROADMAP.md | PLAN.md | SUMMARY.md  │
│  codebase/{stack,architecture,structure,conventions,...}      │
├─────────────────────────────────────────────────────────────┤
│         PAU LOOP (Mandatory Three-Phase Cycle)               │
│  PLAN ──▶ APPLY ──▶ UNIFY (loop closure required)           │
│    ✓        ●        ○   [visual position tracking]          │
├─────────────────────────────────────────────────────────────┤
│              PERSISTENT STATE (.paul/)                        │
│  PROJECT.md | ROADMAP.md | STATE.md | MILESTONES.md |        │
│  phases/{NN}-{name}/{NN}-{plan}-PLAN.md + SUMMARY.md |      │
│  codebase/ | research/ | debug/ | HANDOFF-{date}.md         │
└─────────────────────────────────────────────────────────────┘
```

**PAUL distinguishing characteristics:**
- **Mandatory loop closure**: Every PLAN→APPLY must produce a SUMMARY.md via UNIFY before new work begins
- **Anti-subagent philosophy**: Implementation stays in-session; subagents only for discovery/research
- **CARL dynamic rules**: 14 rules loaded just-in-time instead of static prompt bloat
- **Context brackets**: FRESH (>70%), MODERATE (40-70%), DEEP (20-40%), CRITICAL (<20%) with different strategies per bracket
- **Plan sizing**: 2-3 tasks per plan, ~50% context budget target (quality degrades past 50%)
- **Checkpoint types**: `human-verify` (90%), `decision` (9%), `human-action` (1%) — if Claude CAN automate it, Claude MUST
- **Skill tracking**: SPECIAL-FLOWS.md with required/optional skills audited during UNIFY
- **7-document codebase mapping**: 4 parallel Explore agents produce STACK, ARCHITECTURE, STRUCTURE, CONVENTIONS, TESTING, INTEGRATIONS, CONCERNS

---

## 4. The Planning Pipeline

### 4.1 GSD Planning Pipeline

```
new-project → Deep Questioning → PROJECT.md → 4× Research → Synthesis
→ REQUIREMENTS.md → Roadmapper → ROADMAP.md
→ Per-phase: discuss → CONTEXT.md → Research → Planner → Checker (×3) → PLAN.md
```

- Planning is **incremental** — each phase is planned just before execution
- Planner-Checker revision loop (max 3 iterations)
- Nyquist validation maps test coverage to requirements pre-code
- Plans use XML task format with dependencies, waves, checkpoints

### 4.2 M2C1 Planning Pipeline

```
Brain Dump → Phase 1: PRD → Phase 2: Research Wave 1 → Phase 3: Discovery Q&A
→ DISCOVERY.md (TOP AUTHORITY) → Phase 4: Research Wave 2
→ Phase 5: Tool Setup → Phase 6: Tool Verification → Phase 7: Skill Creation
→ Phase 8: Context Compact → Phase 9: PHASES.md → Phase 10: Task Sharding
→ Phase 11: Synergy Review → Phase 12: Final Artifacts
```

- Planning is **monolithic** — ALL 12 phases happen upfront before any code
- Discovery Completeness Check: "Could an agent implement without guessing?"
- Two-wave research: broad first, implementation-focused second
- Self-contained task files are complete prompts for execution agents

### 4.3 PRP Planning Pipeline

```
Requirements → /prp-prd → PRD → /prp-plan → Research → PRP Document
→ /prp-implement or /prp-ralph
```

- Planning is **feature-scoped** — one PRP per feature/story
- PRP = PRD + Codebase Intelligence + Agent Runbook
- Information-dense keywords reduce token usage
- Bounded scope ensures single-iteration completability

### 4.4 BMAD Planning Pipeline

```
/workflow-init → Business Analyst (4× parallel research sub-agents)
→ product-brief.md → /prd → Product Manager (parallel section generation)
→ PRD.md + epics.md → /architecture → System Architect (parallel component design)
→ ARCHITECTURE.md + db-schema.sql + api_spec.json + tech-stack.md
→ /solutioning-gate-check (≥90% completeness gate)
→ /sprint-planning → Scrum Master (parallel epic breakdown)
→ stories/story-*.md (atomic, sharded)
→ /dev-story → Developer Agent → QA Agent → Tracking
```

- Planning follows a **4-phase agile model**: Analysis → Planning → Solution Design → Implementation
- **Scale-adaptive depth**: automatically adjusts from Quick Spec (Level 0) to Full Enterprise + Compliance (Level 4)
- **Mandatory quality gate**: `/solutioning-gate-check` requires ≥90% architecture completeness — identifies gaps and demands completion
- **Document sharding**: Scrum Master fragments PRD into atomic stories containing only:
  - Relevant acceptance criteria
  - Relevant database schema fragments
  - Related API interface definitions
  - Pertinent design notes
- **4 parallel sub-agents** during analysis for requirements discovery
- **Parallel section generation** during PRD creation
- **Parallel component design** during architecture

### 4.5 PAUL Planning Pipeline

```
/paul:init → Questions → PROJECT.md + ROADMAP.md + STATE.md
→ /paul:discuss-milestone → MILESTONE-CONTEXT.md → /paul:milestone → Phase dirs
→ Per-phase: /paul:discuss → CONTEXT.md → /paul:assumptions → /paul:discover → DISCOVERY.md
→ /paul:plan → PLAN.md (2-3 tasks, AC in BDD, boundaries) → User approval
→ /paul:apply → Execute tasks in-session → Checkpoints
→ /paul:unify → SUMMARY.md (planned vs actual) → STATE.md update
→ transition-phase (auto) → Next phase or /paul:complete-milestone
```

- Planning is **per-plan within phases** — small, atomic units (2-3 tasks each)
- **Mandatory user approval** before APPLY — catches assumption errors early
- **Acceptance-Driven Development**: AC defined before tasks using Given/When/Then
- **Boundaries section**: Explicitly declares DO NOT CHANGE files and SCOPE LIMITS
- **Plan sizing**: ~50% context budget target; quality degrades past 50%
- **Decimal phases**: Integer phases (1, 2, 3) for planned work; decimals (2.1, 2.2) for urgent interruptions without renumbering
- **Three discovery depths**: Quick (2-5 min), Standard (15-30 min), Deep (1+ hour with confidence gate)
- **CARL rules enforce**: No implementation without approved PLAN.md; every APPLY followed by UNIFY; boundary violations require confirmation
- **Phase transition auto-trigger**: UNIFY detects last plan in phase and automatically invokes transition workflow

### 4.6 Planning Pipeline Comparison

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Planning scope** | Per-phase (incremental) | Entire project (monolithic) | Per-feature (atomic) | Entire project (agile phases) | Per-plan (micro-incremental, 2-3 tasks) |
| **Research waves** | 1 per phase + project-level | 2 (broad + implementation) | 1 (integrated) | 1 (4 parallel sub-agents) | 3 depths (quick/standard/deep) |
| **Authority document** | PROJECT.md + ROADMAP.md | DISCOVERY.md (overrides all) | PRP document | PRD.md + ARCHITECTURE.md | STATE.md (loop position) + PROJECT.md |
| **Decision tracking** | STATE.md decisions table | Numbered decisions (D1, D2...) | Inline in PRP | Workflow-status artifacts | 3 locations: STATE.md + PROJECT.md + SUMMARY.md |
| **Quality gates** | Plan-checker loop | Discovery Completeness Check | PRP review | Solutioning Gate ≥90% | User plan approval + AC verification |
| **Tool setup** | Manual / assumed | Autonomous via Playwright | Manual / assumed | Manual / assumed | Manual / assumed |
| **Skill creation** | Not part of framework | Mandatory phase | Not part of framework | Agent-as-Code (pre-defined) | SPECIAL-FLOWS.md (skill tracking + audit) |
| **Cross-phase validation** | Integration checker agent | Synergy review (Phase 11) | N/A (single-feature) | Gate check before implementation | State consistency check (3-file alignment, BLOCKING) |
| **Document sharding** | Wave-based plan decomposition | Task file sharding | Feature-scoped PRP | Story-level atomic sharding | Plan-level atomic sizing (~50% context) |
| **Planning overhead** | Medium (per phase) | Very High (12 phases upfront) | Low (single document) | High (4 phases, but scale-adaptive) | Low-Medium (per plan, 2-3 tasks each) |
| **Re-planning cost** | Low (plan next phase) | High (re-run phases 9-12) | Low (create new PRP) | Medium (re-shard stories) | Very Low (create next 2-3 task plan) |
| **Parallelism in planning** | Sequential agents | Parallel research + sharding | None | Parallel at every phase | None (in-session, sequential) |

---

## 5. Execution Models

### 5.1 GSD — Wave-based parallel execution

```
Wave 1: [Plan 01, Plan 02]     ← spawn in parallel (fresh contexts)
Wave 2: [Plan 03]              ← wait for wave 1, then spawn
Wave 3: [Plan 04, Plan 05]     ← wait for wave 2, spawn in parallel
```

- Each plan gets a `gsd-executor` with fresh 200K context
- Three execution modes: autonomous, segmented, main-context
- Atomic commits per task, deviation rules, Analysis Paralysis Guard

### 5.2 M2C1 — Sequential task execution

```
/start → Read PROGRESS.md → Find lowest pending task → Spawn executor → Verify → Repeat
```

- Strictly sequential (one task at a time)
- Task files are complete prompts — no additional context needed
- Three-tier failure escalation (self-recovery → orchestrator → user)

### 5.3 PRP — Single-agent with validation loops

```
Load PRP → ULTRATHINK Planning → Execute → Validate → Complete
                                    ↑          │
                                    └──────────┘ (fix and retry)
```

- Single agent, no multi-agent orchestration
- Ralph Loop: autonomous iteration across fresh instances with git as memory

### 5.4 BMAD — Shard-code-test micro-loop

```
Scrum Master: Fragment PRD → atomic stories (document sharding)
    ↓
Developer Agent: Load story + tech-stack.md → TDD (optional) → implement → self-validate
    ↓
QA Agent: Independent verification with E2E tests (Playwright)
    ↓
Scrum Master: Update workflow-status.md → next story
```

- **Micro-loop per story**: shard → code → test
- Developer loads **only one story** + `tech-stack.md` — minimal context per task
- Parallel story implementation possible across multiple developer instances
- QA is a separate agent with independent verification
- TDD optional (write failing tests first, then implement)
- Workflow tracking via `workflow-status.md` / `bmm-workflow-status.yaml`

### 5.5 PAUL — In-session sequential with mandatory closure

```
User approves PLAN.md → APPLY (in-session, sequential tasks)
    │
    ├─ auto task → execute → verify → commit → next task
    ├─ checkpoint:human-verify → stop → show work → wait for approval → resume
    ├─ checkpoint:decision → present options → record choice → resume
    └─ checkpoint:human-action → require manual step → verify → resume
    │
    ↓
UNIFY → SUMMARY.md (planned vs actual reconciliation)
    ↓
Auto-detect: Last plan in phase? → transition-phase → next phase or complete-milestone
```

- **In-session execution**: No execution subagents — all implementation happens in main context window
- **Sequential task processing**: Tasks execute one at a time with per-task verification
- **Mandatory approval**: User must approve PLAN.md before APPLY begins (CARL Rule 2)
- **Per-task atomic commits**: `{type}({phase}-{plan}): {description}` format
- **Three checkpoint types**: human-verify (90% of checkpoints), decision (9%), human-action (1%)
- **Golden rule**: If Claude CAN automate it (CLI/API/tool), Claude MUST — checkpoint:human-action is the rarest type
- **Deviation handling**: Auto-fix bugs, auto-add critical deps, auto-fix blockers, ASK about architectural changes
- **Loop closure**: UNIFY is mandatory (CARL Rule 3) — every APPLY produces SUMMARY.md
- **Auto-transition**: UNIFY detects last plan in phase and triggers transition-phase automatically

### 5.6 Execution Model Comparison

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Parallelism** | Wave-based (within phase) | None (sequential) | None (single agent) | Per-story (parallel possible) | None (in-session, sequential) |
| **Fresh context per task** | Yes (each executor) | Yes (each subagent) | Per Ralph iteration | Yes (per story load) | No (stays in-session, preserves full context) |
| **Orchestrator overhead** | ~10-15% context | Minimal | None | BMad Master coordination | None (no orchestrator) |
| **Task granularity** | XML tasks within plans | Self-contained task files | PRP task list | Atomic user stories | 2-3 tasks per PLAN.md (micro plans) |
| **Sharding approach** | Plans within waves | Complete task file prompts | Feature-scoped PRP | Story-level document sharding | Plan-level (~50% context budget) |
| **Commit strategy** | Atomic per task, conventional | Per task, `Task N.M:` prefix | Per feature/fix | Per story | Per task: `{type}({phase}-{plan}): {desc}` |
| **QA separation** | Verifier agent (post-execution) | Testing within execution | Validation loop | Separate QA agent (independent) | Per-task verify step + UAT workflow |
| **TDD support** | Optional, configurable | No | Yes (Ralph Loop) | Optional | Yes (dedicated TDD plan type with RED/GREEN/REFACTOR) |
| **Token efficiency** | Moderate | Moderate (skill files help) | High (info-dense keywords) | Very High (74-90% reduction via sharding) | High (no subagent overhead, ~50% context plans) |
| **Mandatory closure** | Optional (verify is separate) | Not enforced | Not enforced | Via QA agent | **Mandatory** (UNIFY required, CARL Rule 3) |

---

## 6. Agent Architecture

### 6.1 GSD — 11 Named Agent Types

| Agent | Role | Fresh Context |
|-------|------|---------------|
| `gsd-executor` | Builds code, tests, commits | Yes |
| `gsd-planner` | Creates PLAN.md with XML tasks | Yes |
| `gsd-phase-researcher` | Deep research before planning | Yes |
| `gsd-plan-checker` | Validates plans (read-only in Codex) | Yes |
| `gsd-verifier` | Post-execution goal-backward verification | Yes |
| `gsd-debugger` | Systematic debugging | Yes |
| `gsd-codebase-mapper` | Brownfield analysis (4 parallel) | Yes |
| `gsd-project-researcher` | Technology research (4 parallel) | Yes |
| `gsd-research-synthesizer` | Combines researcher outputs | Yes |
| `gsd-roadmapper` | Creates ROADMAP.md | Yes |
| `gsd-integration-checker` | Cross-component validation | Yes |

### 6.2 M2C1 — 6 Implicit Roles

| Role | Phase | Parallel |
|------|-------|----------|
| Research Agent | 2, 4 | Yes (1 per domain) |
| Skill Creation Agent | 7 | Yes (1 per skill) |
| Task Sharding Agent | 10 | Yes (1 per phase) |
| Synergy Review Agent | 11 | Yes |
| Execution Agent | Post-/start | No (sequential) |
| Fix Agent | On failure | No |

### 6.3 PRP — 1 Agent Type

Single agent model. Same agent researches, plans, and executes. Ralph Loop uses sequential fresh instances with git continuity.

### 6.4 BMAD — 9-19+ Named Agent Types

| Agent | Phase | Function | Output |
|-------|-------|----------|--------|
| **BMad Master** | All | Orchestration, routing, state | Coordination |
| **Business Analyst** | Analysis | Requirements discovery (4 parallel sub-agents) | `product-brief.md` |
| **Product Manager** | Planning | PRD with parallel section generation | `PRD.md`, `epics.md` |
| **UX Designer** | Planning/Design | Interface design, UX maps | `UX_Design.md` |
| **System Architect** | Solution | Architecture with parallel component design | `ARCHITECTURE.md`, `db-schema.sql` |
| **Scrum Master** | Implementation | Sprint planning, story sharding, tracking | `stories/story-*.md` |
| **Developer** | Implementation | Code + tests (parallel story impl.) | Source code, unit tests |
| **QA / Test Architect** | Implementation | Independent E2E verification | Test reports |
| **Builder** | Meta | Custom skills and workflows | New agents/workflows |
| **Creative Intelligence** | Cross-cutting | Brainstorming, multi-technique research | Ideas, analysis |
| **Dr. Ada (v6)** | Legacy | Deep methodical research | Context analysis |
| **Atlas (v6)** | Legacy | Visual/spatial code mapping | Architecture maps |
| **Morgan (v6)** | Legacy | Proactive documentation | Knowledge transfer |

**Key distinction:** BMAD agents have **constraints** — an Architect cannot write tests; a Developer cannot redefine product objectives. This prevents role confusion.

**Party Mode:** 2-3 agents collaborate in-character, debating trade-offs, agreeing/disagreeing, building on each other's ideas. BMad Master synthesizes consensus or exposes disagreements.

### 6.5 PAUL — 1 Primary Agent + Research Subagents

| Role | Context | When Used |
|------|---------|-----------|
| **Main session (Claude)** | In-session (full context preserved) | ALL implementation, planning, execution, UNIFY |
| **Explore subagent** | Fresh context | Codebase mapping (4 parallel for map-codebase) |
| **General-purpose subagent** | Fresh context | Web research, documentation gathering |

**Key distinction:** PAUL explicitly **rejects** execution subagents. The framework documents the cost: ~2,000-3,000 tokens cold-start overhead per subagent, ~70% quality output requiring cleanup, coordination overhead that compounds. Instead, PAUL keeps all implementation in the main session where Claude has full project context.

**Subagent decision framework** (from `subagent-criteria.md`): ALL of these must be true before spawning:
1. Task is self-contained (no iterative feedback needed)
2. Clear scope (low ambiguity)
3. Parallel value (multiple tasks simultaneously)
4. Complexity sweet spot (15-60 min work)
5. Token efficiency (overhead < value produced)
6. State compatibility (APPLY phase, no pending decisions)

**CARL rules govern agent behavior**: 14 rules loaded dynamically based on context. Rules are classified as CRITICAL (MUST), QUALITY (SHOULD), or PATTERN (MAY). Critical rules include: no implementation without approved plan, mandatory UNIFY after APPLY, respect boundaries.

### 6.6 Agent Architecture Comparison

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Named agent types** | 11 | 0 (implicit) | 0 | 9-19+ | 0 (1 primary + ad-hoc research) |
| **Agent definitions** | Dedicated markdown | Inline in workflow | N/A | Agent-as-Code (Skills) | CARL rules (14 dynamic rules) |
| **Model selection** | 3 profiles + overrides | None | None | Recommended models per role | None |
| **Agent constraints** | Role-specific rules | Task-file scoped | PRP-scoped | Explicit (cannot cross roles) | CARL rules (6 CRITICAL, blocking) |
| **Multi-agent collaboration** | Via files | Via files | N/A | Party Mode (live debate) | None (single-session philosophy) |
| **Custom agent creation** | Not built-in | Not built-in | Not built-in | Builder module (BMB) | Not built-in |
| **Agent philosophy** | Functional roles | Functional roles | Single role | "Personified practice philosophies" | "In-session context > subagent sprawl" |
| **Scale adaptation** | Manual (model profiles) | None | None | Automatic (5 levels, 0-4) | None (plans sized to ~50% context) |
| **Implementation agents** | Yes (executor) | Yes (execution agent) | Yes (single agent) | Yes (developer agent) | **No** (main session only) |
| **Research agents** | Yes (4 parallel) | Yes (per domain) | No | Yes (analyst sub-agents) | Yes (Explore + general-purpose) |

---

## 7. State Management

### 7.1 GSD — Rich CLI-managed state

- `STATE.md` with 14 CRUD commands via CLI
- `PROJECT.md`, `ROADMAP.md`, `REQUIREMENTS.md`, `config.json`, `MILESTONES.md`
- YAML frontmatter always synced from markdown body
- `.continue-here` files, agent history tracking
- Snapshots for point-in-time recovery

### 7.2 M2C1 — File-based, no tooling

- `DISCOVERY.md` as top authority (numbered decisions D1, D2...)
- `PHASES.md`, `PROGRESS.md`, `PRD.md`
- No CLI commands — agents edit files directly
- Authority hierarchy: DISCOVERY.md > PHASES.md > Task files > Research > PRD.md

### 7.3 PRP — Minimal

- `.claude/PRPs/` directory (prds, plans, reports, issues, reviews)
- `.claude/prp-ralph.state.md` for Ralph Loop
- Git as primary state layer

### 7.4 BMAD — YAML-based workflow tracking

- `bmad/config.yaml` — project configuration (type, agents, quality checks, paths)
- `workflow-status.md` / `bmm-workflow-status.yaml` — progress tracking
- `documentation/` directory with all artifacts (product-brief, PRD, ARCHITECTURE, db-schema, api_spec, tech-stack)
- `docs/stories/` — atomic story files (sharded documents)
- `bmad/context/` — shared context between agents
- `bmad/outputs/` — sub-agent results
- Artifacts committed to Git for full traceability

### 7.5 PAUL — Loop-position-aware state

- **STATE.md** — The heartbeat. Tracks: current phase/plan, loop position (PLAN/APPLY/UNIFY with visual markers ✓/●/○), performance metrics (velocity, duration, trend), accumulated decisions, deferred issues, blockers, active boundaries, session continuity. Target: <100 lines (digest, not archive).
- **PROJECT.md** — Project brief (what, core value, requirements, tech stack, constraints, key decisions). **Evolved** at phase transitions and milestones (requirements validated/invalidated, decisions logged).
- **ROADMAP.md** — Phase structure with milestone groupings. Integer phases for planned work, decimal phases (2.1, 2.2) for urgent insertions.
- **PLAN.md** — Per-plan executable spec with frontmatter (phase, plan, type, wave, depends_on, autonomous), objective, acceptance criteria (BDD), tasks (2-3), boundaries.
- **SUMMARY.md** — UNIFY output. What was built, AC results (PASS/FAIL), deviations, decisions, deferred items, next phase readiness.
- **MILESTONES.md** — Permanent shipped milestone log (reverse chronological).
- **ISSUES.md** — Deferred enhancements (ISS-001, ISS-002...) with type, impact, effort, suggested phase.
- **HANDOFF-{date}.md** — Explicit session handoff with loop position, decisions, prioritized next actions.
- **codebase/** — 7 analysis documents (STACK, ARCHITECTURE, STRUCTURE, CONVENTIONS, TESTING, INTEGRATIONS, CONCERNS).
- **debug/** — Persistent debug sessions that survive context resets (with resolved/ archive).

**State consistency enforcement**: At phase transitions, PAUL verifies alignment across STATE.md, PROJECT.md, and ROADMAP.md. Misalignment is a BLOCKING error requiring re-read and correction (CARL Rule 6).

**Decision recording redundancy**: Decisions logged in 3 places — STATE.md decisions table, PROJECT.md key decisions, and per-plan SUMMARY.md.

### 7.6 State Management Comparison

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **State tooling** | 14 CLI commands | None (direct edits) | None | YAML config + workflow status | Workflow-driven (no CLI tooling) |
| **State file format** | YAML frontmatter + markdown | Pure markdown | Pure markdown | YAML + markdown | YAML frontmatter + markdown |
| **Hierarchical state** | Project → Milestone → Phase → Plan → Task | Project → Phase → Task | Feature → Tasks | Project → Epic → Story | Project → Milestone → Phase → Plan → Task |
| **Metrics tracking** | Built-in | Manual | None | Workflow status tracking | Performance metrics (velocity, duration, trend) |
| **Decision tracking** | STATE.md decisions | DISCOVERY.md (D1, D2...) | Inline in PRP | Artifact-embedded | **3 locations** (STATE + PROJECT + SUMMARY) |
| **Snapshot capability** | Yes | No | Git commits | Git commits | Git commits + milestone archives |
| **Recovery mechanism** | `.continue-here` + agent history | PROGRESS.md status | Git log | Artifacts + Git | HANDOFF-{date}.md + STATE.md session continuity |
| **Traceability** | STATE.md + summaries | PROGRESS.md | Git log | Full (artifacts in Git) | Full (SUMMARY per plan + per-task commits) |
| **State consistency check** | Not enforced | Not enforced | Not enforced | Not enforced | **BLOCKING** (3-file alignment at transitions) |
| **State evolution** | Manual updates | Manual updates | N/A | Manual updates | **Auto-evolution** (PROJECT.md updated at transitions) |

---

## 8. Verification and Quality Assurance

### 8.1 GSD — Multi-layer verification (5 layers)

1. **Plan Verification**: structure validation, Nyquist mapping, plan-checker loop
2. **Execution Verification**: spot-checks, commit verification
3. **Phase Verification**: `gsd-verifier` with 4-level hierarchy (exists → substantive → wired → functional)
4. **UAT**: natural language severity inference, gap closure pipeline
5. **Health Checks**: 8-check assessment with `--repair`

### 8.2 M2C1 — Three-level testing + pre-execution validation

1. **Pre-execution**: Discovery Completeness, Tool Verification (100% pass), Skill Completeness, Synergy Review
2. **Per-task**: unit/integration tests, Playwright UI testing, multi-angle verification
3. **Phase regression**: last task of every phase deploys and tests everything
4. **Final e2e**: entire last phase dedicated to comprehensive testing

### 8.3 PRP — Validation gating

- Executable validation loops (linters, unit tests, integration, e2e)
- Error pattern matching from PRP document
- Fix-revalidate cycle until all pass
- Ralph Loop: autonomous iteration with fresh context

### 8.4 BMAD — Quality gates + independent QA

1. **Solutioning Gate Check**: mandatory before implementation, requires ≥90% architecture completeness. If below threshold, identifies specific gaps and demands completion
2. **Developer self-validation**: tests written and run during implementation (TDD optional)
3. **Independent QA Agent**: separate Test Architect performs E2E verification with Playwright — this agent is NOT the developer, preventing self-review bias
4. **Pre-commit quality checks**: configurable in `config.yaml` (e.g., `black .`, `pytest tests/unit`)
5. **Workflow status tracking**: Scrum Master updates progress after each story

**Unique BMAD approach:** The separation of Developer and QA into distinct agents with different constraints is closer to real-world software teams than any other framework. The QA agent has no incentive to overlook issues because it didn't write the code.

### 8.5 PAUL — Acceptance-Driven Development + Loop Closure

1. **Plan-level AC**: Every PLAN.md requires acceptance criteria in BDD format (Given/When/Then) before any tasks are defined. Tasks reference specific AC (AC-1, AC-2, etc.) for traceability.
2. **Per-task verification**: Every task requires a `<verify>` step (specific command/check proving completion) and a `<done>` criterion linking to AC. If you can't specify all four task fields (files, action, verify, done), the task is too vague.
3. **UNIFY reconciliation**: SUMMARY.md compares planned vs. actual with AC results table (PASS/FAIL). Deviations logged with explanations. Not ambiguous — "AC-3: PASS" is definitive.
4. **Skill audit**: UNIFY checks SPECIAL-FLOWS.md for required skills — warns if required skill wasn't invoked (continuous improvement, not rigid enforcement).
5. **State consistency**: Phase transitions verify 3-file alignment (STATE.md, PROJECT.md, ROADMAP.md). Misalignment is BLOCKING.
6. **SonarQube integration**: Optional code quality scanning that populates CONCERNS.md with objective metrics.
7. **UAT workflow**: `/paul:verify` guides manual acceptance testing; `/paul:plan-fix` creates fix plans for discovered issues.

**Unique PAUL approach:** The mandatory UNIFY phase creates accountability that other frameworks lack. Every plan has a closure document — there are no orphan plans, no unreconciled work, no "I think that was done" ambiguity. The trade-off is slightly slower per iteration, but dramatically higher reliability across sessions.

### 8.6 Verification Comparison

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Pre-execution validation** | Plan checker, Nyquist | Discovery + tools + synergy | PRP review | Solutioning Gate ≥90% | User plan approval + AC review |
| **During-execution checks** | Spot-checks, commit verify | Per-task tests | Validation loop | Developer self-test + pre-commit | Per-task verify step (mandatory) |
| **Post-execution verification** | Verifier (4-level) | Phase regression | Report | Independent QA agent | **Mandatory UNIFY** (SUMMARY.md reconciliation) |
| **QA independence** | Verifier is separate | Testing is agent-driven | Self-validation | Fully separate QA agent | Self-verification + UAT workflow |
| **Quality threshold** | Goal-backward pass/fail | 100% tool verification | All validations pass | ≥90% completeness score | AC PASS/FAIL per plan |
| **UAT workflow** | Built-in with severity inference | Not explicit | Not explicit | Via QA agent | `/paul:verify` + `/paul:plan-fix` |
| **False positive awareness** | Not documented | Not documented | Not documented | Documented ("AI finds problems even when none exist") | Not documented |
| **Gap closure** | Debugger → Planner → Execute | Hotfix loop | Fix-revalidate | Re-shard and re-implement | `/paul:plan-fix` → new PLAN → APPLY → UNIFY |
| **Closure guarantee** | Not enforced | Not enforced | Not enforced | Not enforced | **Mandatory** (CARL Rule 3) |

---

## 9. Context Window Management

### 9.1 GSD — Proactive monitoring with hooks

- Fresh 200K per subagent; orchestrator stays at ~10-15%
- PostToolUse hook: WARNING at ≤35% remaining, CRITICAL at ≤25%
- Statusline progress bar (10 segments, color-coded)
- `.continue-here` + `pause-work` for exhaustion handling
- History digest compresses phase summaries

### 9.2 M2C1 — Structural decomposition

- Phase 8: explicit context compact checkpoint
- Self-contained task files minimize per-agent context
- Skill files as pre-digested knowledge
- "If context is getting large, suggest compacting"

### 9.3 PRP — Information density

- Separate clean instances for creation vs. execution
- Information-dense keywords (`find`, `inject`, `preserve`)
- Ralph Loop: fresh context per iteration with git memory
- Feature-scoped PRP bounds complexity

### 9.4 BMAD — Document sharding (74-90% reduction)

This is BMAD's **most significant technical contribution**:

| Metric | Traditional Approach | BMAD v6 Sharding |
|--------|---------------------|-------------------|
| Average context per workflow | ~31,667 tokens | ~8,333 tokens |
| Token reduction | Baseline | **74-90%** |
| Agent precision | Variable | Significantly higher |
| Hallucinations | Frequent | Reduced |

**How it works:**
- Instead of feeding the entire PRD + architecture docs to every agent, the Scrum Master creates atomic story files
- Each story contains ONLY: relevant acceptance criteria, relevant DB schema fragments, related API definitions, pertinent design notes
- Developer Agent processes a few KB of focused context instead of MB of complete documentation
- Result: dramatically improved precision AND cost efficiency

### 9.5 PAUL — Context brackets + plan sizing

PAUL's approach to context management is **structural prevention** rather than runtime monitoring:

**Context Brackets** (from `context-management.md`):

| Bracket | Remaining | Strategy |
|---------|-----------|----------|
| **FRESH** | >70% | Lean loading, trust recent context |
| **MODERATE** | 40-70% | Reinforce key files, consider plan splits |
| **DEEP** | 20-40% | Read SUMMARY not PLAN for prior work, defer complex work |
| **CRITICAL** | <20% | Complete current task ONLY, prepare HANDOFF immediately |

**Plan sizing**: Quality degrades after 50% context usage (Claude enters "completion mode"). PAUL enforces 2-3 tasks per plan targeting ~50% context budget. Context impact guidelines:
- 0-3 files modified: ~10-15% context
- 4-6 files: ~20-30%
- 7+ files: ~40%+ (SPLIT the plan!)

**Summary-before-full**: When resuming, read SUMMARY.md (closure digest) instead of PLAN.md (full spec) to preserve context budget.

**No runtime monitoring**: Unlike GSD's hooks, PAUL has no real-time context tracking. Instead, it prevents bloat structurally through small plans and aggressive splitting.

### 9.6 Context Management Comparison

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Runtime monitoring** | PostToolUse hook | None | None | None | None |
| **Visual indicators** | Statusline progress bar | None | None | None | Loop position markers (✓/●/○) |
| **Agent isolation** | Fresh 200K per agent | Fresh per subagent | Fresh per Ralph iteration | Fresh per story (sharded) | **No isolation** (in-session, full context preserved) |
| **Token reduction technique** | Fresh contexts | Skill files + task files | Info-dense keywords | Document sharding (74-90%) | Plan sizing (~50% budget) + context brackets |
| **Measured savings** | Not quantified | Not quantified | Not quantified | 74-90% documented | Not quantified (structural, not measured) |
| **Proactive vs. reactive** | Proactive (warns before) | Reactive | Reactive | Structural (prevents bloat) | Structural (prevents bloat via plan sizing) |
| **Context exhaustion handling** | `.continue-here` + pause | Phase 8 compact | Fresh instances | Small stories = rarely exhausted | HANDOFF-{date}.md at CRITICAL bracket |
| **Quality degradation awareness** | Not documented | Not documented | Not documented | Not documented | **Documented** (50% threshold, "completion mode") |

---

## 10. Error Handling and Recovery

### 10.1 GSD

**Deviation Rules (priority order):**
1. Bug → auto-fix
2. Missing dependency → auto-add
3. Blocking issue → auto-resolve (simplest approach)
4. Architectural decision → ASK USER (overrides 1-3)

### 10.2 M2C1

**Three-tier escalation:**
1. Self-recovery (subagent fixes own issues)
2. Orchestrator intervention (spawns fix subagent)
3. User escalation (provides error + suggested fix; continues with next task)

### 10.3 PRP

- Error pattern matching from PRP document with fix strategies
- Validation loop: detect → match pattern → apply fix → re-validate
- Ralph Loop: catastrophic failure → next iteration starts clean

### 10.4 BMAD

- **Agent role constraints** prevent entire categories of errors (architect can't write code that breaks tests; developer can't redefine requirements)
- **Pre-commit hooks** catch issues before they enter the codebase (`config.yaml` quality section)
- **Solutioning Gate** prevents implementation with incomplete architecture
- **Independent QA** catches issues the developer missed
- **Documented false positive awareness**: BMAD explicitly warns that AI "will find problems even when none exist" and that filtering signal from noise falls on the human reviewer
- **Builder module** allows creating specialized error-handling agents for domain-specific issues

### 10.5 PAUL

**Deviation Rules** (from `quality-principles.md`, same priority pattern as GSD):
1. Bug → auto-fix (document in SUMMARY.md deviations)
2. Critical missing dependency → auto-add
3. Blocking issue → auto-fix (simplest approach)
4. Architectural decision → ASK USER (overrides 1-3)

**Boundary enforcement** (CARL Rule 4): PLAN.md declares DO NOT CHANGE files and SCOPE LIMITS. Violations require explicit user confirmation before proceeding.

**Blocker protocol** (CARL Rule 5): When blocked, document in STATE.md, notify human, await approval. Never silently work around a blocker.

**Task failure handling**: Stop, report failure, offer retry/skip/stop options. Failures are logged in SUMMARY.md.

**Debug persistence**: `/paul:debug` creates a debug file that survives context resets. Tracks Current Focus, Symptoms (immutable), Eliminated hypotheses (append-only), Evidence (append-only), and Resolution. Moves to `debug/resolved/` when fixed.

**Issue deferral**: Enhancements discovered during APPLY are logged to ISSUES.md (not scope-crept into current plan). `/paul:consider-issues` triages: Resolved? Urgent (insert decimal phase)? Natural fit for upcoming phase? Can wait?

### 10.6 Error Handling Comparison

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Auto-fix capability** | Yes (priority rules) | Yes (tier 1) | Yes (pattern matching) | Via pre-commit hooks | Yes (priority rules + boundary enforcement) |
| **Escalation model** | 4-level priority | 3-tier | Validation loop | Agent constraints + QA | 4-level priority + blocker protocol |
| **Continues on failure** | Next task | Next unblocked task | Iterates same task | Next story | Stop, offer retry/skip/stop |
| **Error prevention** | Plan validation | Discovery completeness | Error patterns | Role constraints + gate checks | Boundaries (DO NOT CHANGE) + plan approval |
| **False positive handling** | Not documented | Not documented | Not documented | Explicitly documented | Not documented |
| **Domain-specific errors** | Generic | Generic | PRP-defined patterns | Custom agents via Builder | Skill tracking (SPECIAL-FLOWS.md) |
| **Persistent debugging** | Not built-in | Not built-in | Not built-in | Not built-in | **Yes** (debug/ with context-reset survival) |
| **Issue deferral system** | Not built-in | Not built-in | Not built-in | Not built-in | **Yes** (ISSUES.md + `/paul:consider-issues`) |

---

## 11. Tool and Integration Ecosystem

### 11.1 GSD

- Brave Search API, Git (atomic commits, branching), Claude Code hooks, multi-runtime
- No browser automation requirement, no MCP prerequisite

### 11.2 M2C1

- Playwright MCP (HARD PREREQUISITE), MCP server installation, CLI tools, `.env` management
- Autonomous tool setup via browser automation (signing up, generating API keys)

### 11.3 PRP

- Linters, test runners, curl, optional Playwright/Puppeteer, optional MCP, Git as memory

### 11.4 BMAD

- **npm package** with interactive installer
- **Agent-as-Code** via Anthropic Skills specification
- **Party Mode** for multi-agent collaboration
- **Builder module** for creating custom agents/workflows
- **Pre-commit hooks** via config.yaml
- **Community MCP servers**: bmad-mcp-server (enterprise Python), bmad-mcp-server (11 agents + 36 workflows), BMAD-JIRA integration
- **Git integration** for artifact traceability and CI/CD pipeline triggers
- **Playwright** for QA E2E testing (v6)
- No hard MCP prerequisite — works with slash commands alone

### 11.5 PAUL

- **npx installer** (`npx paul-framework`) with global/local install modes
- **CARL rule engine** for dynamic rule injection (companion system, not bundled)
- **SonarQube integration** (optional) for static analysis and quality metrics — populates CONCERNS.md
- **SPECIAL-FLOWS.md** for skill tracking — declares required/optional skills, audits invocation during UNIFY
- **Git integration**: per-task atomic commits, phase commits at transitions, milestone tags, optional feature branches
- **4 parallel Explore agents** for codebase mapping (STACK, ARCHITECTURE, STRUCTURE, CONVENTIONS, TESTING, INTEGRATIONS, CONCERNS)
- No browser automation, no MCP prerequisite, no web search built-in
- Claude Code only (single runtime)

### 11.6 Integration Comparison

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Browser automation** | Not required | REQUIRED (Playwright) | Optional | Optional (QA E2E) | Not required |
| **Web search** | Brave Search API | Via subagent research | Not specified | Not built-in | Via research subagents |
| **MCP prerequisite** | None | Playwright MCP | None | None (optional MCP servers) | None |
| **Tool setup automation** | Manual | Autonomous via Playwright | Manual | Manual | Manual |
| **Git integration** | Deep (conventions, branching) | Deep (per-task branches) | Light (memory layer) | Deep (artifacts + CI/CD) | Deep (per-task commits, phase commits, milestone tags) |
| **Multi-runtime** | 4 runtimes | Claude Code only | Any LLM | Claude Code, Cursor, Windsurf, Codex | Claude Code only |
| **Hook system** | 3 hooks | None | None | Pre-commit via config | CARL dynamic rules (14 rules) |
| **Extensibility** | Limited | None | None | Builder module (custom agents) | SPECIAL-FLOWS.md (skill tracking) |
| **Community ecosystem** | Growing | Minimal | Active (2k+ stars) | Large (38k+ stars, MCP servers, JIRA) | Small (194 stars) |
| **Static analysis** | Not built-in | Not built-in | Not built-in | Not built-in | **SonarQube** (optional) |
| **Rule engine** | Static prompts | Static workflow | N/A | Agent-as-Code | **CARL** (dynamic, just-in-time) |

---

## 12. Session Continuity

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Dedicated resume** | `/gsd:resume-work` | Read PROGRESS.md | None | Artifacts resume context | `/paul:resume` (reads STATE.md, suggests ONE next action) |
| **Interrupted recovery** | `.continue-here` files | PROGRESS.md status | Git log | workflow-status + Git | HANDOFF-{date}.md + STATE.md session continuity |
| **State reconstruction** | Auto-repair from disk | Manual (re-read files) | None | Re-read artifacts | Loop position detection (auto-route to plan/apply/unify) |
| **Proactive save** | `pause-work` command | Phase 8 compact | Git commit | Artifacts auto-committed | `/paul:pause` (HANDOFF.md + optional WIP commit) |
| **Cross-session context** | STATE.md + agent history | File-based state | Git checkpoints | Documentation-first (artifacts persist) | STATE.md (<100 lines digest) + SUMMARY.md chain |
| **Handoff format** | Implicit `.continue-here` | Not explicit | Not explicit | Not explicit | **Explicit** HANDOFF-{date}.md with loop position + decisions |
| **Decision fatigue** | Multiple options presented | Manual routing | Manual | Manual routing | **Single next action** (no menu navigation) |
| **Debug persistence** | Not built-in | Not built-in | Not built-in | Not built-in | **Yes** (debug/ survives context resets) |

---

## 13. Configuration and Customization

### 13.1 GSD — Rich configuration

```json
{
  "model_profile": "quality|balanced|budget",
  "model_overrides": { "gsd-executor": "opus" },
  "workflow": { "research": true, "auto_advance": true, "commit_docs": true },
  "branching": "none|phase|milestone",
  "tdd_enabled": true
}
```

### 13.2 M2C1 — No configuration

Zero config files, fixed 12-phase workflow, no customization options.

### 13.3 PRP — Minimal

PRP variant selection (base, task, planning), validation commands per PRP.

### 13.4 BMAD — YAML-based with extensibility

```yaml
project:
  name: "MyProject"
  type: "python_django"       # Determines architectural patterns
agents:
  default: "python-dev"
  available: ["python-architect", "python-qa"]
quality:
  pre_commit:
    - "black ."
    - "pytest tests/unit"
paths:
  docs: "documentation/"
  tests: "tests/"
```

- `project.type` determines which patterns agents prioritize
- Modular installation: choose BMM, BMB, TEA, BMGD, CIS modules
- Builder module creates entirely new agents and workflows
- Scale-Domain-Adaptive Intelligence auto-adjusts depth (Level 0-4)

### 13.5 PAUL — Markdown-based with integrations

```markdown
<!-- .paul/config.md -->
## Integrations
| Integration | Status | Configuration |
|-------------|--------|---------------|
| SonarQube   | active | server: localhost:9000, project-key: my-project |

## Settings
| Setting | Value |
|---------|-------|
| commit_strategy | per-task |
| branching | feature/{phase-name} |
```

- **SPECIAL-FLOWS.md**: Maps skills to work types (required/optional), with triggers and phase-level overrides
- **Decimal phases**: Insert urgent work (8.1, 8.2) without renumbering roadmap
- **CARL rules**: 14 dynamic rules loaded just-in-time — behavior configured via rule priorities (CRITICAL/QUALITY/PATTERN)
- **Plan frontmatter**: Per-plan configuration (type: execute/tdd/research, autonomous: true/false, wave, depends_on)
- **No model selection**: Single runtime (Claude Code), no model profiles

### 13.6 Configuration Comparison

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Project config** | config.json | None | None | config.yaml | config.md (markdown) |
| **User config** | ~/.gsd/defaults.json | None | None | Per-project | Global or local install |
| **Model selection** | 3 profiles + overrides | None | None | Recommended per agent | None |
| **Workflow toggles** | research, auto_advance, etc. | None | None | Scale-adaptive (auto) | Plan frontmatter (autonomous, type) |
| **Custom agents** | No | No | No | Yes (Builder module) | No |
| **Project type awareness** | No | No | No | Yes (determines patterns) | No |
| **Module system** | No | No | No | 5 modules (BMM, BMB, TEA, BMGD, CIS) | No |
| **Scale adaptation** | Manual | None | Variant selection | Automatic (5 levels) | Plan sizing (manual, 2-3 tasks) |
| **Skill tracking** | No | Mandatory skill creation | No | Agent-as-Code | **SPECIAL-FLOWS.md** (audit in UNIFY) |
| **Static analysis config** | No | No | No | No | **SonarQube** (optional) |
| **Dynamic rules** | No | No | No | No | **CARL** (14 rules, just-in-time) |

---

## 14. Testing Philosophy

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| **Approach** | Spec-driven, goal-backward | Human-emulating, multi-angle | Validation gating | Agile (TDD optional, independent QA) | Acceptance-driven (BDD Given/When/Then) |
| **Pre-code planning** | Nyquist validation | Per-task acceptance criteria | Error patterns | Acceptance criteria in stories | AC-1, AC-2 in PLAN.md (first-class, before tasks) |
| **TDD support** | Optional, configurable | No | Yes (Ralph Loop) | Optional | **Yes** (dedicated TDD plan type: RED/GREEN/REFACTOR) |
| **Browser testing** | Not built-in | Playwright-first (required) | Optional | Playwright via QA (v6) | Not built-in |
| **QA independence** | Verifier agent (post-exec) | Same execution flow | Self-validation | Separate QA agent | Self-verification (per-task verify + UNIFY) |
| **UAT workflow** | Built-in severity inference | Not explicit | Not explicit | Via QA agent reports | `/paul:verify` (guided manual testing) |
| **Test asset creation** | Not explicit | Mandatory (simulated assets) | Not explicit | Via story context | Not explicit |
| **Regression testing** | Phase verification | Last task of each phase | Per-PRP validation | Per-sprint QA cycle | Per-plan SUMMARY.md (AC results carried forward) |
| **TDD plan sizing** | N/A | N/A | N/A | N/A | ~40% context (lower than standard 50% due to back-and-forth) |
| **TDD commit pattern** | N/A | N/A | N/A | N/A | 2-3 atomic commits per plan (RED, GREEN, REFACTOR) |

---

## 15. UI and Design Capabilities

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL | UI/UX Pro Max |
|-----------|-----|------|-----|------|------|---------------|
| **Built-in design system** | No | No | No | UX Designer agent | No | **Yes** (67 styles, 96 palettes, 57 typography) |
| **Design agent** | No | No | No | Yes (UX Designer) | No | N/A (skill, not agent) |
| **Industry matching** | No | No | No | No | No | **Yes** (100 industry reasoning rules) |
| **Design output** | N/A | N/A | N/A | `UX_Design.md` | N/A | `MASTER.md` + per-page overrides |
| **Component specs** | No | No | No | Within architecture | No | **Yes** (buttons, cards, inputs, modals) |
| **Design tokens** | No | No | No | No | No | **Yes** (CSS variables, Tailwind tokens) |
| **Anti-pattern database** | No | No | No | No | No | **Yes** (per-industry DO NOTs) |
| **Design verification** | No | No | No | No | No | **Yes** (10-item pre-delivery checklist) |
| **Stack-specific guidance** | No | No | No | No | No | **Yes** (13 stacks: Tailwind, shadcn, SwiftUI, Flutter, etc.) |
| **Visual tool integration** | No | No | No | No | No | No |

**Note:** UI/UX Pro Max (https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) is the only system with comprehensive design intelligence. Its industry reasoning rules, style catalog, and token system are adapted for MIKE's DESIGN step. None of the five development frameworks address design systematically — this is the gap MIKE fills by integrating UI/UX Pro Max's data as a pipeline step rather than a standalone skill.

---

## 16. Platform and Project Type Suitability

| Project Type | GSD | M2C1 | PRP | BMAD | PAUL |
|-------------|-----|------|-----|------|------|
| **Greenfield web app** | Excellent | Excellent | Fair | Excellent | Good |
| **Feature on existing codebase** | Good | Fair | Excellent | Good | Excellent (map-codebase + 7 docs) |
| **SaaS with many APIs** | Good | Excellent (tool setup) | Good | Good | Good |
| **Quick bug fix** | Good (`/quick`) | Poor (12 phases overkill) | Excellent (PRP-task) | Excellent (Level 0 Quick Spec) | Fair (still requires PLAN→APPLY→UNIFY) |
| **Enterprise/large project** | Excellent | Fair | Fair | Excellent (Level 3-4) | Good (milestone lifecycle) |
| **Content automation** | Good | Excellent (skill creation) | Good | Good | Fair |
| **Native iOS/macOS** | Good (with MCP) | Fair | Fair | Good | Fair |
| **Native Android** | Fair | Poor | Fair | Good | Fair |
| **Multi-milestone project** | Excellent (milestone lifecycle) | Fair | Fair | Good (sprint-based) | Excellent (milestone archive + version tracking) |
| **One-shot prototype** | Fair | Good | Excellent | Good (Level 1 Quick Flow) | Poor (loop overhead too heavy for throwaway) |
| **Multi-service platform** | Good | Good | Fair | Fair (single-service focus) | Fair |
| **Legacy modernization** | Good (map-codebase) | Fair | Good (existing codebases) | Excellent (v6 legacy agents) | Good (7-doc codebase analysis) |
| **Game development** | Fair | Fair | Fair | Good (BMGD module) | Fair |
| **Team collaboration** | Fair | Fair | Fair | Excellent (multi-agent SDLC) | Poor (explicitly solo developer + Claude) |
| **Multi-session projects** | Good | Fair | Fair | Good | **Excellent** (HANDOFF, STATE, loop position) |
| **Debugging complex issues** | Good | Fair | Fair | Fair | **Excellent** (persistent debug sessions) |

---

## 17. Autonomy Spectrum

### 17.1 Autonomy Map

```
LOW AUTONOMY                                              HIGH AUTONOMY
(more control)                                            (more speed)
     │                                                         │
 PAUL Standard ──┤                                             │
                 │                                             │
GSD Interactive ──┤                                            │
                  │                                            │
  BMAD Standard ──┼─────────┤                                  │
                  │         │                                  │
       GSD YOLO ──┼─────────┼─────────┤                        │
                  │         │         │                        │
   BMAD Quick ────┼─────────┼─────────┤                        │
                  │         │         │                        │
           PRP ───┼─────────┼─────────┼──────┤                 │
                  │         │         │      │                 │
    PRP + Ralph ──┼─────────┼─────────┼──────┼────┤            │
                  │         │         │      │    │            │
          M2C1 ───┼─────────┼─────────┼──────┼────┼──┤         │
                  │         │         │      │    │  │         │
  Raw Claude Code ┼─────────┼─────────┼──────┼────┼──┼────────┤
```

### 17.2 Human Touchpoints for a 5-Phase Project

| Framework | Estimated Touches | Character |
|-----------|-------------------|-----------|
| **PAUL Standard** | ~30-40 | Deliberate, per-plan approval + UNIFY closure |
| **GSD Interactive** | ~25-35 | Deliberate, controlled, per-phase |
| **BMAD Standard** | ~15-25 | Structured SDLC with gates |
| **GSD YOLO** | ~10-15 | Streamlined but structured |
| **BMAD Quick Flow** | ~8-12 | Scale-adaptive, lighter |
| **M2C1** | ~8-12 | Front-loaded, then hands-off |
| **PRP** | ~5-8 per feature × N | Light per feature, compounds |
| **PRP + Ralph** | ~3-5 per feature × N | Very light, iterative |

**Note on PAUL**: Higher touch count reflects per-plan approval gates (with 2-3 tasks per plan, a 5-phase project may have 15-25 plans, each requiring approval). The trade-off is maximum control and zero orphan work.

### 17.3 What Each Framework Trusts AI to Do

| Decision Type | GSD | M2C1 | PRP | BMAD | PAUL |
|---------------|-----|------|-----|------|------|
| **Tech stack** | User decides | User decides | AI/User mixed | Architect proposes, user confirms | User decides (discovery workflow) |
| **Architecture** | User decides (rule 4) | User decides (discovery) | AI proposes | Architect decides (gate check) | User decides (CARL Rule 4: ask for arch changes) |
| **Bug fixes** | Auto-fix | Auto-fix (tier 1) | Auto-fix (loop) | Pre-commit hooks | Auto-fix (logged in SUMMARY deviations) |
| **Missing deps** | Auto-add | Auto-add (tier 1) | Auto-fix (loop) | Developer handles | Auto-add (critical only) |
| **File structure** | AI (within plan) | AI (within task) | AI (within PRP) | Architect defines | AI (within PLAN boundaries) |
| **Test strategy** | AI proposes | AI decides (skills) | AI decides (PRP) | QA agent decides | AI proposes (TDD type in plan frontmatter) |
| **Tool config** | User manual | AI via Playwright | User manual | User manual | User manual |
| **Git operations** | AI commits | AI commits | AI commits | AI commits + CI/CD | AI commits (per-task + phase + milestone tags) |
| **Story sharding** | AI (planner) | AI (sharding agents) | N/A | Scrum Master agent | AI (2-3 tasks per plan, user approves) |
| **Quality judgment** | Verifier agent | Acceptance criteria | Validation gates | QA agent (independent) | Per-task verify + UNIFY reconciliation |
| **Plan approval** | Implicit | Implicit | Implicit | Via gate check | **Explicit** (user must approve before APPLY) |

---

## 18. Speed and Overhead Analysis

### 18.1 Time-to-First-Code

| Framework | Setup Time | Planning Time | Time to First LOC |
|-----------|-----------|---------------|-------------------|
| **GSD** | npm install (~1 min) | new-project (30-60 min) + plan-phase (15-30 min) | ~45-90 min |
| **M2C1** | Copy files (~30 sec) | Phases 0-12 (~2-4 hours) | ~2-4 hours |
| **PRP** | Copy templates (~30 sec) | PRP creation (~15-30 min) | ~15-30 min |
| **BMAD** | npx install (~1-2 min) | Analysis + PRD + Architecture + Gate (~1-3 hours) | ~1-3 hours |
| **PAUL** | npx install (~1 min) | init + discuss + plan (~15-30 min) | ~20-40 min |
| **Raw Claude Code** | None | None | ~0 min |

### 18.2 Token/Cost Overhead (5-Phase Project, ~5000 LOC)

| Framework | Planning Tokens | Execution Tokens | Verification Tokens | Total Estimate |
|-----------|----------------|-------------------|---------------------|----------------|
| **GSD** | ~50-100K/phase | ~200-400K/phase | ~50-100K/phase | ~1.5-3M |
| **M2C1** | ~200-500K (upfront) | ~100-200K/phase | ~50-100K/phase | ~1-2M |
| **PRP** | ~20-50K/feature | ~50-150K/feature | ~20-50K/feature | ~0.5-1.5M |
| **BMAD** | ~80-200K (upfront) | ~30-80K/story (sharded!) | ~20-50K/story | ~0.4-1M |
| **PAUL** | ~15-30K/plan | ~30-80K/plan (in-session) | ~10-20K/plan (UNIFY) | ~0.8-1.5M |
| **Raw Claude** | 0 | ~0.3-0.8M | 0 | ~0.3-0.8M |

**PAUL token analysis**: No subagent cold-start overhead (~2-3K saved per would-be agent), but also no parallelism. More plans needed (15-25 for 5 phases vs. 5-10 for GSD) because of 2-3 task sizing. Trade-off: lower per-plan cost but higher plan count. Net token usage moderate — more than BMAD's sharding but less than GSD's subagent sprawl.

**BMAD's sharding advantage is significant**: by reducing per-story context to ~8,333 tokens (vs. ~31,667 without sharding), the total token cost drops substantially. The framework claims 74-90% reduction, which community data supports.

### 18.3 Process Overhead Visualization

```
RAW CLAUDE CODE:  ████░░░░░░░░░░░░░░░░  (20% overhead, 80% coding)

PRP:              ██████████░░░░░░░░░░  (30% overhead, 70% coding)

PAUL:             ████████████░░░░░░░░  (40% overhead, 60% coding — many small loops)
                  ▲ spread across many small PLAN→APPLY→UNIFY cycles

BMAD:             ████████████░░░░░░░░  (40% overhead, 60% coding — but less total tokens)

M2C1:             ████████████████░░░░  (60% overhead upfront, 40% coding)
                  ▲ heavy upfront, then autonomous

GSD:              ██████░░████░░████░░  (50% overhead, 50% coding)
                  ▲ spread across phases
```

### 18.4 Where Time Goes

| Activity | GSD | M2C1 | PRP | BMAD | PAUL |
|----------|-----|------|-----|------|------|
| **Questioning user** | Per-phase (discuss) | Upfront (discovery) | Per-PRP (minimal) | Upfront (analyst) | Per-plan (discuss + approval) |
| **Research** | Per-phase (configurable) | 2 waves upfront | Per-PRP (integrated) | 4 parallel sub-agents | 3 depths (quick/standard/deep) |
| **Planning** | Per-phase (planner+checker) | Monolithic (sharding) | Per-PRP (single doc) | PRD + Architecture (parallel) | Per-plan (2-3 tasks, frequent) |
| **Quality gates** | Plan checker loop | Discovery + tool + synergy | PRP review | Solutioning Gate ≥90% | Plan approval + AC verification |
| **Execution** | Wave-parallel executors | Sequential task files | Single agent | Per-story (sharded context) | In-session (full context, sequential) |
| **Verification** | Verifier + UAT | Regression + final e2e | Validation loop | Independent QA agent | UNIFY (mandatory, per-plan SUMMARY) |
| **State management** | Continuous (14 commands) | Minimal (file edits) | Minimal (git) | Workflow tracking | Per-loop (STATE.md + 3-file consistency) |
| **Loop closure** | Optional | Not enforced | Not enforced | Not enforced | **Mandatory** (UNIFY required per plan) |

---

## 19. Strengths and Weaknesses Matrix

### 19.1 GSD

| Strengths | Weaknesses |
|-----------|------------|
| Mature, battle-tested (v1.22.0) | Heavyweight process overhead |
| Excellent state management (14 commands) | Slow iteration cycle |
| Context monitoring hooks (proactive) | Per-phase planning adds latency |
| Wave-based parallelism | Over-verification can waste tokens |
| Multi-runtime support (4 runtimes) | Complex command surface (~30+) |
| YOLO mode for speed | No document sharding |
| Built-in UAT with severity inference | No browser automation integration |
| Milestone lifecycle management | No tool setup automation |
| Health checks with auto-repair | No design system |
| Brownfield analysis (map-codebase) | No scale adaptation |

### 19.2 M2C1

| Strengths | Weaknesses |
|-----------|------------|
| Zero-code (1,657 lines markdown) | No state management tooling |
| Extreme upfront thoroughness | 2-4 hours before any code |
| DISCOVERY.md as single authority | No session recovery mechanism |
| Mandatory skill creation (knowledge persists) | No context monitoring |
| Autonomous tool setup via Playwright | Sequential execution only |
| Two-wave research | No configuration system |
| Synergy review (cross-phase coherence) | No quick mode |
| Self-contained task files | Requires Playwright MCP |
| Discovery Completeness Check | Claude Code only |
| Human-emulating testing | No scale adaptation |
| Generalizable | Extremely new (3 commits) |
| Minimal post-planning human touches | No parallelism during execution |

### 19.3 PRP

| Strengths | Weaknesses |
|-----------|------------|
| Lightest overhead | No multi-agent orchestration |
| Information-dense (fewer tokens) | No project-level management |
| Excellent for existing codebases | No milestone/phase lifecycle |
| PRP-task variant for quick fixes | No state management |
| Ralph Loop for autonomous iteration | No context monitoring |
| Any LLM support (most portable) | No brownfield analysis |
| TDD integration | No tool setup automation |
| Error pattern pre-documentation | No verification agent |
| Feature-scoped (bounded complexity) | Doesn't scale to large projects |
| Established community (2k+ stars) | No design system |
| Fast time-to-first-code | No cross-feature coherence |

### 19.4 BMAD

| Strengths | Weaknesses |
|-----------|------------|
| Largest community (38k+ stars, 119 contributors) | Prescriptive workflow (rigid for exploratory projects) |
| Document sharding (74-90% token reduction) | Steep learning curve |
| Scale-adaptive (Level 0-4 automatic) | Agent chain trust issues (errors propagate) |
| Agent role constraints (prevent confusion) | Model-dependent (needs long context) |
| Independent QA agent (no self-review bias) | High initial overhead ("long and tedious" upstream) |
| Party Mode (multi-agent collaboration) | False positive noise in reviews |
| Builder module (custom agents/workflows) | Single-service focus (limited multi-service) |
| Solutioning Gate ≥90% (prevents bad architecture) | No context monitoring hooks |
| Multiple IDE support (Claude Code, Cursor, etc.) | No session continuity commands |
| Modular ecosystem (BMM, BMB, TEA, BMGD, CIS) | No autonomous tool setup |
| Documentation-first (reduces hallucinations) | No wave-based parallelism in execution |
| Open source, no paywalls | More agile-process focused than AI-automation focused |
| Legacy modernization agents (v6) | Party Mode coordination overhead |
| Community MCP servers + JIRA integration | Requires Node.js >= v20 |

### 19.5 PAUL

| Strengths | Weaknesses |
|-----------|------------|
| Mandatory loop closure (zero orphan work) | Anti-parallelism limits throughput |
| Token-to-value efficiency (no subagent waste) | Claude Code only (single runtime) |
| Acceptance-Driven Development (BDD first-class) | Many small loops = high human touch count |
| Context brackets (quality degradation awareness) | No runtime context monitoring |
| Explicit handoff format (HANDOFF-{date}.md) | No document sharding (BMAD-style) |
| 3-location decision redundancy | No scale adaptation (no quick mode) |
| Persistent debug sessions (survive context resets) | Small community (194 stars) |
| Issue deferral system (ISSUES.md + triage) | No independent QA agent |
| CARL dynamic rules (lean context, just-in-time) | CARL dependency (companion system) |
| 7-document codebase mapping (comprehensive) | No browser automation |
| Decimal phases (urgent insertions without renumbering) | Loop overhead too heavy for throwaway prototypes |
| State consistency enforcement (3-file BLOCKING check) | No configuration system beyond config.md |
| Plan boundaries (DO NOT CHANGE enforcement) | No model selection or profiles |
| TDD plan type (RED/GREEN/REFACTOR with sizing) | Newer framework (v1.0.3, less battle-tested) |
| Single next action philosophy (no decision fatigue) | No parallelism during execution |
| SonarQube integration (optional static analysis) | Limited extensibility |
| Milestone lifecycle (archive + version tracking) | No design system |
| Skill tracking with UNIFY audit | No tool setup automation |

---

## 20. GMSD: Current State Assessment

Our GMSD framework builds on GSD's foundation but adds significant capabilities:

### 20.1 What GMSD Adds Over GSD

1. **Agent Teams** — Bidirectional messaging, shared task lists, dynamic task claiming
2. **Full UI/Design System** — 14 commands, 6 agents, W3C tokens, 10-section screen specs, 5 export adapters
3. **Pencil MCP Integration** — Direct, interactive, bidirectional design execution
4. **Observable Execution** — tmux split-pane visibility for all agents
5. **Continuous Task Flow** — Shared task list replaces wave orchestration
6. **Design Drift Detection** — Automated sync checking between specs and code
7. **Reverse Engineering** — Scan codebases to auto-generate design specs
8. **Component Inventory** — Automatic extraction and reusability tracking

### 20.2 What GMSD Inherits from GSD (Including Weaknesses)

- Same heavyweight planning pipeline (discuss → research → plan → check → execute → verify)
- Same per-phase overhead model
- Same configuration complexity
- Same learning curve (expanded to ~55 commands)
- Same lack of tool setup automation
- Same lack of document sharding

### 20.3 What GMSD Could Learn from M2C1

1. **Upfront completeness** — Discovery Completeness Check ("could an agent implement without guessing?")
2. **Mandatory skill creation** — Pre-digesting knowledge for execution agents
3. **Autonomous tool setup** — Playwright-based account creation, API key generation
4. **Synergy review** — Cross-phase coherence before execution
5. **Two-wave research** — Broad first, implementation-focused after decisions
6. **Self-contained task files** — Complete prompts needing no additional context

### 20.4 What GMSD Could Learn from PRP

1. **Information density** — Keywords like `find`, `inject`, `preserve` reduce tokens
2. **Feature-scoped planning** — PRPs are bounded, completable in one pass
3. **Error pattern pre-documentation** — Known failures with fix strategies
4. **Ralph Loop** — Autonomous iteration with fresh context per pass
5. **Separate creation/execution instances** — Prevents context contamination
6. **Before/after tree visualization** — Clear modularization intent

### 20.5 What GMSD Could Learn from BMAD

1. **Document sharding** — 74-90% token reduction through atomic stories (the single biggest optimization opportunity)
2. **Scale-adaptive intelligence** — Auto-adjusting depth from Level 0 (bug fix) to Level 4 (enterprise)
3. **Agent role constraints** — Preventing cross-role confusion (architect can't write tests)
4. **Independent QA** — Separate testing agent prevents self-review bias
5. **Solutioning Gate** — ≥90% completeness threshold before implementation
6. **Party Mode** — Multi-agent debate for complex decisions
7. **Builder module** — User-extensible agent creation
8. **Project type awareness** — `config.yaml` project type determines architectural patterns
9. **Community ecosystem** — Modular packages (BMM, BMB, TEA, BMGD, CIS)
10. **Pre-commit quality hooks** — Configurable quality checks per project

### 20.6 What GMSD Could Learn from PAUL

1. **Mandatory loop closure** — UNIFY phase that reconciles planned vs. actual, creating an unbroken audit trail. Currently GMSD verification is optional and post-hoc; making it mandatory per-plan would dramatically improve traceability.
2. **Acceptance-Driven Development** — First-class BDD acceptance criteria (Given/When/Then) defined before tasks, with every task linking to specific AC. More structured than GMSD's current approach.
3. **Context brackets** — Documented quality degradation curve (50% threshold) with explicit strategies per bracket (FRESH/MODERATE/DEEP/CRITICAL). GMSD monitors context but doesn't prescribe bracket-specific behaviors.
4. **Plan sizing discipline** — 2-3 tasks per plan targeting ~50% context budget. GMSD plans can grow large; smaller atomic plans could improve quality.
5. **Persistent debug sessions** — Debug files that survive context resets with immutable symptoms, append-only evidence, and overwrite-on-update current focus. GMSD has no persistent debugging.
6. **Issue deferral system** — ISSUES.md with typed enhancements (ISS-001...) and a triage workflow (`/paul:consider-issues`). Prevents scope creep during execution.
7. **State consistency enforcement** — 3-file alignment check (STATE/PROJECT/ROADMAP) at transitions that BLOCKS on misalignment. GMSD doesn't enforce cross-file consistency.
8. **Single next action philosophy** — `/paul:progress` suggests exactly ONE next action instead of menu navigation. Reduces decision fatigue and preserves focus.
9. **Explicit handoff format** — Dated HANDOFF-{date}.md files with loop position, decisions, and prioritized next actions. More structured than GMSD's `.continue-here`.
10. **CARL dynamic rules** — Just-in-time rule injection based on context instead of static prompt bloat. Could reduce GMSD's orchestrator context overhead.
11. **Boundary enforcement** — PLAN.md declares DO NOT CHANGE files explicitly, with CARL rule requiring confirmation before violation. GMSD has no explicit boundary protection.
12. **Decimal phases** — Insert urgent work (8.1, 8.2) without renumbering. GMSD uses insert-phase but with full renumbering.
13. **SonarQube integration** — Optional static analysis feeding into CONCERNS.md. GMSD has no static analysis integration.
14. **Skill tracking with audit** — SPECIAL-FLOWS.md declares required skills, UNIFY audits whether they were invoked. GMSD has no skill invocation tracking.

---

## 21. Lessons for a Next-Generation System

### 21.1 The Fundamental Tension

```
PLANNING DEPTH ←──────────────────────────→ EXECUTION SPEED
     │                                           │
   M2C1                                     Raw Claude Code
   (12 phases upfront)                      (no planning)
        │                              │
      BMAD                           PRP
   (4 agile phases)              (per-feature)
             │                │
            GSD            PAUL
         (per-phase)    (per-plan, micro)
```

The stated goal: **"More autonomous, fast, and easy but with a very thorough and good planning upfront"** — this maps to combining M2C1/BMAD's upfront planning with PRP's execution speed, BMAD's token efficiency, and PAUL's loop discipline.

### 21.2 Best Ideas to Take from Each Framework

**From M2C1 — Take:**
- Monolithic upfront planning (do it once, do it thoroughly)
- Discovery Completeness Check (gate: "can agents implement without guessing?")
- Two-wave research (broad → implementation-focused)
- Self-contained task files (complete prompts for execution)
- Authority hierarchy (one document overrides all)
- Autonomous tool setup via browser automation
- Mandatory skill/knowledge pre-creation
- Synergy review before execution

**From GSD — Take:**
- Context monitoring hooks (proactive warnings)
- State management system (STATE.md + tooling)
- Wave-based parallel execution
- Model profiles and overrides
- Session continuity (`.continue-here`, `resume-work`, `pause-work`)
- Health checks with auto-repair
- Deviation rules (auto-fix bugs, escalate architecture)
- Multi-runtime support
- Analysis Paralysis Guard

**From PRP — Take:**
- Information-dense keywords (token efficiency)
- Error pattern pre-documentation
- Ralph Loop concept (autonomous iteration with fresh context)
- Feature-scoped bounded execution
- Before/after tree visualization
- TDD integration
- Separate planning/execution contexts

**From BMAD — Take:**
- Document sharding (74-90% token reduction — the single biggest win)
- Scale-adaptive intelligence (Level 0-4 automatic depth adjustment)
- Agent role constraints (prevent cross-role confusion)
- Independent QA agent (no self-review bias)
- Solutioning Gate (≥90% completeness before implementation)
- Party Mode (multi-agent debate for complex decisions)
- Builder module (user-extensible agents)
- Project type awareness (config determines patterns)
- Pre-commit quality hooks
- Community-driven modular ecosystem

**From PAUL — Take:**
- Mandatory loop closure (UNIFY reconciliation — zero orphan work)
- Acceptance-Driven Development (BDD Given/When/Then as first-class plan elements)
- Context brackets with quality degradation awareness (50% threshold documented)
- Plan sizing discipline (2-3 tasks, ~50% context budget)
- Persistent debug sessions (survive context resets)
- Issue deferral system (ISSUES.md + `/consider-issues` triage)
- State consistency enforcement (3-file BLOCKING check at transitions)
- Single next action philosophy (reduce decision fatigue)
- Explicit handoff format (HANDOFF-{date}.md with loop position)
- CARL-style dynamic rules (just-in-time injection, not static bloat)
- Boundary enforcement (DO NOT CHANGE declarations in plans)
- Decimal phases (urgent insertion without renumbering)
- SonarQube integration (optional static analysis)
- Skill tracking with UNIFY audit (SPECIAL-FLOWS.md)

### 21.3 Proposed Architecture Sketch

```
┌────────────────────────────────────────────────────────────┐
│                 PHASE 1: DEEP PLANNING                      │
│  (Thorough, one-time, front-loaded)                         │
│  From: M2C1 (completeness), BMAD (agile structure + gate)  │
│  From: PAUL (AC-driven, boundary declarations)              │
│                                                              │
│  Brain dump → PRD → 2-wave Research → Discovery Q&A →       │
│  Completeness Gate → Tool Setup → Skill Creation →           │
│  Architecture → Solutioning Gate (≥90%) →                    │
│  Document Sharding → Synergy Review                          │
│  + BDD Acceptance Criteria per shard (from PAUL)            │
│  + Boundary declarations per shard (from PAUL)              │
│                                                              │
│  Output: Sharded task files + authority docs + skills        │
│  Human touches: ~5-8 total                                   │
├────────────────────────────────────────────────────────────┤
│                 PHASE 2: AUTONOMOUS EXECUTION                │
│  (Fast, parallel, minimal interruption)                      │
│  From: GSD (waves), BMAD (sharding), PRP (Ralph Loop)       │
│  From: PAUL (mandatory closure, context brackets)            │
│                                                              │
│  Wave-based parallel execution with sharded contexts         │
│  Auto-fix bugs, auto-add deps, escalate architecture only    │
│  Context monitoring hooks + session continuity               │
│  Atomic commits + state management                           │
│  Ralph Loop for stuck tasks                                  │
│  Independent QA per wave (from BMAD)                         │
│  Mandatory UNIFY per task file (from PAUL)                   │
│  Context brackets govern plan splitting (from PAUL)          │
│  Issue deferral to ISSUES.md (from PAUL)                     │
│                                                              │
│  Human touches: Only Tier 3 escalation                       │
├────────────────────────────────────────────────────────────┤
│                 PHASE 3: VERIFICATION                        │
│  (Goal-backward, efficient)                                  │
│  From: GSD (verifier), BMAD (QA), M2C1 (regression)        │
│  From: PAUL (AC results table, state consistency check)      │
│                                                              │
│  Phase regression tests                                      │
│  Goal-backward verification                                  │
│  Independent QA agent                                        │
│  UAT with severity inference                                 │
│  Gap closure pipeline if needed                              │
│  AC results reconciliation (from PAUL)                       │
│  3-file state consistency check (from PAUL)                  │
│                                                              │
│  Human touches: Final UAT only                               │
└────────────────────────────────────────────────────────────┘
```

### 21.4 Speed Optimization Opportunities

| Optimization | Source | Expected Impact |
|-------------|--------|-----------------|
| Document sharding for execution | BMAD | **74-90% token reduction** |
| Move all planning upfront | M2C1 | Eliminates per-phase planning latency |
| Self-contained task files | M2C1 | Executor needs no context-building |
| Wave-based parallelism | GSD | Multiple tasks execute simultaneously |
| Information-dense keywords | PRP | ~20-30% additional token reduction |
| Scale-adaptive depth | BMAD | Skip overhead for simple tasks |
| Skip per-phase research | M2C1 | Already done in upfront phase |
| Skip per-phase discussion | M2C1 | Already done in discovery |
| Error pattern pre-documentation | PRP | Faster error recovery |
| Skill files for tools | M2C1 | Agents don't re-research tools |
| Independent QA (no self-review) | BMAD | Fewer false completions |
| Pre-commit hooks | BMAD | Catch issues before commit |
| Ralph Loop for stuck tasks | PRP | Auto-iterate instead of escalate |
| Agent role constraints | BMAD | Prevent category errors |
| Mandatory UNIFY per shard | PAUL | Zero orphan work, complete audit trail |
| Context brackets for plan splitting | PAUL | Prevent quality degradation past 50% |
| Boundary enforcement | PAUL | Prevent scope creep and unintended changes |
| Issue deferral system | PAUL | Scope discipline during execution |
| CARL-style dynamic rules | PAUL | Lean context (rules loaded just-in-time) |
| State consistency enforcement | PAUL | Prevent cross-file drift |
| Persistent debug sessions | PAUL | Faster debugging across context resets |
| SonarQube integration | PAUL | Objective quality metrics for planning |

### 21.5 Estimated Speed Comparison

| Framework | 5-Phase Project Time | Human Touches | Token Cost |
|-----------|---------------------|---------------|------------|
| **PAUL Standard** | 8-16 hours | 30-40 | ~0.8-1.5M |
| **GSD Interactive** | 8-16 hours | 25-35 | ~1.5-3M |
| **BMAD Standard** | 6-12 hours | 15-25 | ~0.4-1M |
| **GSD YOLO** | 5-10 hours | 10-15 | ~1.2-2.5M |
| **M2C1** | 6-12 hours (2-4h plan + 4-8h exec) | 8-12 | ~1-2M |
| **PRP x 5** | 3-8 hours | 15-25 | ~0.5-1.5M |
| **PRP + Ralph** | ~3-5 per feature x N | 3-5 per feature | ~0.5-1.5M |
| **Next-Gen (proposed)** | 3-6 hours (1-2h plan + 2-4h exec) | 6-10 | ~0.3-0.8M |
| **Raw Claude Code** | 2-6 hours | Continuous | ~0.3-0.8M |

The next-gen system aims for: **M2C1's thoroughness + GSD's parallel execution + BMAD's sharding + PRP's density + PAUL's loop discipline** — targeting **3-6 hours with 6-10 human touches and 0.3-0.8M tokens** for a 5-phase project.

---

## 22. Sources and References

### Repositories Analyzed
- **GSD:** https://github.com/gsd-build/get-shit-done (v1.22.0, MIT, by TACHES)
- **M2C1:** https://github.com/grandamenium/m2c1 (MIT, by James Goldbach)
- **PRP:** https://github.com/Wirasm/PRPs-agentic-eng (2k+ stars, by Rasmus Widing)
- **BMAD:** https://github.com/bmad-code-org/BMAD-METHOD (38k+ stars, v6.0.3, by Brian/BMad Code LLC)
- **PAUL:** https://github.com/ChristopherKahler/paul (194 stars, v1.0.3, MIT, by Christopher Kahler / Chris AI Systems)

### BMAD Specific Sources
- [BMAD Official Documentation](https://docs.bmad-method.org/)
- [BMAD npm package](https://www.npmjs.com/package/bmad-method)
- [BMAD V6 Intellectual Ecosystem (Benny Cheung)](https://bennycheung.github.io/bmad-v6-intellectual-ecosystem)
- [Applied BMAD - Reclaiming Control in AI Development](https://bennycheung.github.io/bmad-reclaiming-control-in-ai-dev)
- [From Token Hell to 90% Savings: BMAD v6 (Medium)](https://medium.com/@hieutrantrung.it/from-token-hell-to-90-savings-how-bmad-v6-revolutionized-ai-assisted-development-09c175013085)
- [BMAD: The Agile Framework That Makes AI Predictable (DEV Community)](https://dev.to/extinctsion/bmad-the-agile-framework-that-makes-ai-actually-predictable-5fe7)
- [BMAD Adversarial Review (Official)](https://docs.bmad-method.org/explanation/adversarial-review/)
- [BMAD MCP Server (Dali1789)](https://github.com/Dali1789/bmad-mcp-server)
- [BMAD MCP Server (mkellerman)](https://github.com/mkellerman/bmad-mcp-server)
- [BMAD-JIRA Integration](https://github.com/DisanduP/BMAD-JIRA-Integration-Documentation-MCP-Server)
- [BMAD for Claude Code Skills](https://github.com/aj-geddes/claude-code-bmad-skills)

### PAUL Specific Sources
- [PAUL GitHub Repository](https://github.com/ChristopherKahler/paul) (v1.0.3, MIT)
- [PAUL npm package](https://www.npmjs.com/package/paul-framework) (npx paul-framework)
- PAUL-VS-GSD.md (bundled comparison document in repo)
- 12 reference documents (loop-phases, context-management, checkpoints, tdd, plan-format, quality-principles, work-units, subagent-criteria, git-strategy, research-quality-control, sonarqube-integration, specialized-workflow-integration)
- 21 workflow files, 26 command definitions, 16+ templates analyzed from source

### Key Articles
- [Beating context rot in Claude Code with GSD (The New Stack)](https://thenewstack.io/beating-the-rot-and-getting-stuff-done/)
- [The PRP Framework Explained (10xdev.blog)](https://10xdev.blog/the-prp-framework-explained-supercharge-your-ai-coding-workflow-in-10-minutes/)
- [AI Coding Assistants: Guide to Context Engineering & PRP](https://www.aifire.co/p/ai-coding-assistants-a-guide-to-context-engineering-prp)
- [Goodbye Vibe Coding: SDD Framework Guide](https://pasqualepillitteri.it/en/news/158/framework-ai-spec-driven-development-guide-bmad-gsd-ralph-loop)
- [Context Engineering with PRP (Spotify)](https://creators.spotify.com/pod/profile/build-wiz-ai/episodes/Context-Engineering-with-the-PRP-Framework-e35moab)

### UI/UX Pro Max Sources
- **UI/UX Pro Max:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (npm: `uipro-cli`, by NextLevelBuilder)
- Key data files: `src/ui-ux-pro-max/data/styles.csv` (67 styles), `colors.csv` (96 palettes), `typography.csv` (57 pairings), `ui-reasoning.csv` (100 industry rules), `products.csv`, `landing.csv`, `charts.csv`, `ux-guidelines.csv`
- Recommendation engine: `src/ui-ux-pro-max/scripts/core.py` (BM25), `design_system.py` (5-step pipeline)
- Design system output: `MASTER.md` (global) + per-page overrides
- Supports 13 tech stacks, 15 editor platforms

### Additional Frameworks Referenced
- **Ralph Loop:** Autonomous iteration with git as memory, Red-Green-Refactor
- **GitHub Spec Kit:** 5-phase workflow, platform-agnostic
- **Kiro (Amazon):** Agentic IDE with auto requirements generation

---

*This document was produced by analyzing the complete source code of all five frameworks (every file read), web research on PRP, BMAD, and PAUL methodology, and analysis of the locally installed GMSD framework.*
