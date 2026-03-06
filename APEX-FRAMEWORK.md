# APEX: Adaptive Pipeline for EXecution Excellence

> A unified meta-framework that combines the best innovations from GSD, M2C1, PRP, BMAD, and PAUL into a profile-driven system that adapts every step to the user's goals.
>
> Date: 2026-03-06

---

## Table of Contents

1. [Vision and Philosophy](#1-vision-and-philosophy)
2. [Core Architecture (Profile-Invariant)](#2-core-architecture-profile-invariant)
3. [The Profile System](#3-the-profile-system)
4. [Profile Definitions](#4-profile-definitions)
5. [The GOLD Standard](#5-the-gold-standard)
6. [Step-by-Step Comparison Across Profiles](#6-step-by-step-comparison-across-profiles)
7. [Profile Recommender](#7-profile-recommender)
8. [Innovation Registry](#8-innovation-registry)
9. [Configuration Schema](#9-configuration-schema)
10. [Estimated Performance](#10-estimated-performance)

---

## 1. Vision and Philosophy

### 1.1 The Problem

Every existing framework makes a **fixed philosophical bet**:

- **M2C1** bets on exhaustive upfront planning — but pays 2-4 hours before the first line of code
- **GSD** bets on fresh-context subagents — but pays heavyweight orchestration overhead per phase
- **PRP** bets on information density — but can't scale beyond single features
- **BMAD** bets on agile document sharding — but demands a rigid SDLC workflow
- **PAUL** bets on loop integrity — but sacrifices parallelism and throughput

Each is optimal for *some* projects and suboptimal for others. None adapts its fundamental approach based on what you're actually building.

### 1.2 The Insight

No single workflow is universally optimal. A hackathon prototype and a production SaaS backend demand fundamentally different:
- Planning depth
- Execution models
- Verification rigor
- Human interaction patterns
- Token investment strategies

### 1.3 The APEX Principle

**One framework, many shapes.** APEX defines a universal 10-step pipeline where *every step* is configurable through **profiles** — predetermined configurations that shift the entire philosophy, depth, and behavior of the system based on the user's declared goal.

```
APEX = Invariant Core + Profile Layer + Best-of-Breed Innovations
```

**Three axioms:**

1. **Adaptive depth** — The framework scales to the project, not the project to the framework
2. **Mandatory accountability** — Every unit of work must close (UNIFY), regardless of profile
3. **Token consciousness** — Every token spent must produce proportional value

### 1.4 What APEX Takes from Each Framework

| Innovation | Origin | Why It's Best-in-Class |
|-----------|--------|----------------------|
| Document sharding | BMAD | 74-90% token reduction — the single biggest optimization in any framework |
| Mandatory UNIFY closure | PAUL | Zero orphan work, complete audit trail — no other framework guarantees this |
| Wave-based parallel execution | GSD | Dramatic speed improvement for independent tasks |
| Context brackets + 50% threshold | PAUL | Only framework to document quality degradation curves |
| Scale-adaptive intelligence | BMAD | Automatic depth adjustment (Level 0-4) — eliminates "overkill for small tasks" problem |
| Information-dense keywords | PRP | 20-30% additional token savings in planning artifacts |
| 2-wave research | M2C1 | Broad discovery + implementation-focused detail — most thorough research model |
| Discovery Completeness Gate | M2C1 | "Can an agent implement without guessing?" — best planning gate question |
| Solutioning Gate >= 90% | BMAD | Prevents building on incomplete architecture — measurable threshold |
| Independent QA agent | BMAD | Eliminates self-review bias — closest to real engineering teams |
| Ralph Loop | PRP | Autonomous retry with fresh context — best stuck-task recovery |
| Context monitoring hooks | GSD | Proactive warnings before quality degrades — only runtime monitoring |
| Persistent debug sessions | PAUL | Debug files survive context resets — unique to PAUL |
| State consistency enforcement | PAUL | 3-file BLOCKING check at transitions — prevents cross-file drift |
| BDD acceptance criteria | PAUL | Given/When/Then as first-class plan elements — testable "done" |
| Dynamic rules (CARL-style) | PAUL | Just-in-time rule injection — lean context vs. static prompt bloat |
| Boundary enforcement | PAUL | DO NOT CHANGE declarations — explicit scope protection |
| Issue deferral system | PAUL | ISSUES.md prevents scope creep during execution |
| Agent role constraints | BMAD | Architect can't write tests; Developer can't redefine requirements |
| Deviation rules | GSD + PAUL | 4-level priority (auto-fix bug > auto-add dep > auto-fix blocker > ASK architecture) |
| Decimal phases | PAUL | Insert urgent work (8.1, 8.2) without renumbering roadmap |
| Error pattern pre-documentation | PRP | Known failures + fix strategies reduce recovery time |
| Skill/knowledge pre-creation | M2C1 | Pre-digested tool knowledge for execution agents |
| Party Mode | BMAD | Multi-agent debate for complex architectural decisions |
| Explicit handoff format | PAUL | Dated HANDOFF-{date}.md with loop position + prioritized next actions |
| Single next action | PAUL | One suggestion, not a menu — eliminates decision fatigue on resume |
| Industry-to-design matching | UI/UX Pro Max | 100 industry rules → style + palette + typography — eliminates design guesswork |
| Design token system | UI/UX Pro Max | CSS variables, Tailwind tokens, spacing/shadow/radius scales — consistent design language |
| Design anti-pattern database | UI/UX Pro Max | Per-industry "DO NOT" rules prevent embarrassing design mistakes |
| Design-to-shard integration | APEX-original | Design tokens sharded per task — executors get only relevant design context |
| Session continuity hooks | GSD | pause-work, resume-work, .continue-here — battle-tested recovery |
| Multi-runtime support | GSD | Claude Code, OpenCode, Gemini, Codex — broadest compatibility |
| Builder module | BMAD | User-extensible agent creation — unique extensibility |
| SonarQube integration | PAUL | Optional static analysis feeding quality metrics |

---

## 2. Core Architecture (Profile-Invariant)

These elements are **always present** regardless of which profile is active. They are the non-negotiable foundation.

### 2.1 The 11-Step Pipeline

Every APEX project flows through these steps. Profiles control the *depth and approach* of each step, but never skip the step entirely (with noted exceptions for Level 0 scale adaptation and non-UI projects).

```
Step 1:  INITIALIZE  — Project setup, goal capture
Step 2:  DISCOVER    — Requirements, constraints, decisions
Step 3:  RESEARCH    — Technology, patterns, risks
Step 4:  ARCHITECT   — Design, structure, gates
Step 5:  DESIGN      — UI style, colors, typography, patterns, anti-patterns
Step 6:  SHARD       — Task decomposition into executable units
Step 7:  EXECUTE     — Build, test, commit
Step 8:  VERIFY      — Quality assurance, acceptance
Step 9:  UNIFY       — Mandatory closure, planned vs. actual reconciliation
Step 10: TRANSITION  — Phase/milestone boundaries, state consistency
Step 11: COMPLETE    — Archive, retrospective, handoff
```

**Step 5 (DESIGN) skip conditions:** Automatically skipped for API-only, CLI, library, or backend-only projects (no UI). Also skipped at BLITZ profile and GOLD L0-L1. When skipped, pipeline flows directly from ARCHITECT → SHARD.

### 2.2 Mandatory UNIFY (Always-On)

Regardless of profile, **every execution unit must close with UNIFY**. This is the single most impactful quality innovation across all frameworks (from PAUL).

```
UNIFY produces SUMMARY.md:
- What was planned vs. what was built
- Acceptance criteria results (PASS/FAIL per AC)
- Deviations with explanations
- Decisions made during execution
- Issues deferred to ISSUES.md
- Next unit readiness assessment
```

**Why this is non-negotiable:** Without mandatory closure, work becomes orphaned across sessions. Every other framework (GSD, M2C1, PRP, BMAD) treats verification as optional or post-hoc. PAUL proved that mandatory closure eliminates the "I think that was done" ambiguity that plagues AI-assisted projects.

### 2.3 State System (Always-On)

Minimum state files present in every profile:

| File | Purpose | Inspired By |
|------|---------|-------------|
| `STATE.md` | Heartbeat: current position, loop status, metrics, decisions, blockers | GSD + PAUL |
| `PROJECT.md` | Project brief: what, why, requirements, tech stack, key decisions | GSD + PAUL |
| `ROADMAP.md` | Phase structure with milestone groupings | GSD + PAUL |
| `ISSUES.md` | Deferred enhancements with type, impact, effort | PAUL |

### 2.4 Deviation Rules (Always-On)

Priority-ordered, from GSD + PAUL:

1. **Bug encountered** -> Auto-fix, log in SUMMARY deviations
2. **Missing critical dependency** -> Auto-add, log in SUMMARY
3. **Blocking issue** -> Auto-resolve (simplest approach), log in SUMMARY
4. **Architectural decision** -> **ASK USER** (overrides 1-3, always)

### 2.5 Context Brackets (Always-On)

From PAUL, the only framework to document quality degradation:

| Bracket | Remaining | Strategy |
|---------|-----------|----------|
| FRESH | >70% | Lean loading, trust recent context |
| MODERATE | 40-70% | Reinforce key files, consider unit splits |
| DEEP | 20-40% | Read SUMMARY not PLAN for prior work, defer complex work |
| CRITICAL | <20% | Complete current task ONLY, prepare HANDOFF immediately |

**Quality cliff at 50%**: Plan execution that exceeds 50% context usage enters "completion mode" where output quality degrades. All profiles respect this threshold; profiles differ in how they *prevent* reaching it.

### 2.6 Dynamic Rules Engine (Always-On)

Inspired by PAUL's CARL system. Rules loaded just-in-time based on context instead of bloating every session with static prompts.

**Core rules (always active):**

| # | Level | Rule |
|---|-------|------|
| R1 | CRITICAL | No implementation without an approved plan |
| R2 | CRITICAL | Every execution unit followed by UNIFY |
| R3 | CRITICAL | Respect boundary declarations (DO NOT CHANGE) |
| R4 | CRITICAL | Architectural decisions require user confirmation |
| R5 | CRITICAL | State consistency at transitions (multi-file alignment) |
| R6 | CRITICAL | Context bracket strategies are binding |
| R7 | QUALITY | Atomic commits per task with conventional format |
| R8 | QUALITY | Deferred issues go to ISSUES.md, not into current scope |
| R9 | QUALITY | Acceptance criteria defined before tasks |
| R10 | PATTERN | Summary-before-full when resuming (read SUMMARY not PLAN) |
| R11 | PATTERN | Single next action on resume (no menu navigation) |
| R12 | PATTERN | Error patterns documented in planning artifacts |

**Profile-specific rules** are injected when a profile activates. For example, CITADEL adds rules for independent QA and Party Mode governance.

### 2.7 Git Strategy (Always-On)

- Per-task atomic commits: `{type}({phase}-{unit}): {description}`
- Phase commits at transitions
- Milestone tags at completion
- Branching configurable per profile (none / phase / milestone / feature)

---

## 3. The Profile System

### 3.1 How Profiles Work

A profile is a **named configuration** that sets the depth, approach, and philosophy for every step of the pipeline. Selecting a profile is the first thing a user does.

```
/apex:init --profile gold
/apex:init --profile blitz
/apex:init --profile citadel
```

Profiles can be:
- **Selected at init** and remain fixed for the project
- **Overridden per-phase** for mixed-mode projects (e.g., BLITZ for a prototype phase, FORGE for the production phase)
- **Auto-recommended** by the recommender based on project characteristics

### 3.2 Profile Dimensions

Every profile defines its position on these 12 dimensions:

| Dimension | Spectrum |
|-----------|----------|
| Planning depth | None <-> 12-phase monolithic |
| Planning timing | Just-in-time <-> All upfront |
| Research waves | 0 <-> 2+ waves |
| Architecture gates | None <-> Solutioning Gate >=90% |
| Task granularity | Feature-scoped <-> Atomic shards |
| Execution model | In-session sequential <-> Wave-parallel sharded subagents |
| QA independence | Self-validation <-> Fully independent QA agent |
| Human touchpoints | Minimal (3-5) <-> Maximum control (30-40) |
| Token strategy | Minimal investment <-> Maximum thoroughness |
| Context protection | Git-as-memory <-> Hooks + brackets + monitoring |
| Autonomy level | High (minimal gates) <-> Low (approval at every plan) |
| Scale adaptation | Fixed depth <-> Auto-adaptive (Level 0-4) |

### 3.3 The Six Profiles

```
AUTONOMY        LOW ──────────────────────────────────────── HIGH
THOROUGHNESS    LOW ──────────────────────────────────────── HIGH
SPEED           HIGH ─────────────────────────────────────── LOW

BLITZ ──────── SPRINT ──────── FORGE ──────── CITADEL
                                  |
                               SCOUT (brownfield specialist)
                                  |
                                GOLD (adaptive default)
```

| Profile | Philosophy | Target User | Target Project |
|---------|-----------|-------------|----------------|
| **BLITZ** | Ship fast, iterate later | Hackers, prototypers | Hackathons, POCs, throwaway experiments |
| **SPRINT** | Balanced speed and structure | Solo developers | Side projects, small apps, MVPs |
| **FORGE** | Production quality, parallel speed | Professional developers | Production apps, client work, SaaS |
| **CITADEL** | Maximum rigor, zero compromise | Teams, enterprises | Mission-critical, regulated, enterprise |
| **SCOUT** | Understand first, change carefully | Maintainers, refactorers | Legacy modernization, existing codebases |
| **GOLD** | Objectively optimal for general use | Everyone (default) | Any project — adapts automatically |

---

## 4. Profile Definitions

### 4.1 BLITZ — "Ship it yesterday"

**Philosophy:** Speed is survival. Plan just enough to not build the wrong thing, then execute in a single focused session. Iterate rather than perfect. Inspired primarily by PRP's information density and raw Claude Code's directness.

**When to use:** Hackathons, proof-of-concepts, throwaway prototypes, "can this even work?" experiments, demo deadlines.

**When NOT to use:** Anything that will see production users. Anything you'll maintain for more than 2 weeks.

#### Step-by-step behavior:

| Step | BLITZ Approach | Source |
|------|---------------|--------|
| **1. INITIALIZE** | Capture goal in 1-3 sentences. Create minimal PROJECT.md + ROADMAP.md (single phase). No deep questioning — trust the user's initial description. | PRP simplicity |
| **2. DISCOVER** | Single PRP-style document: context + blueprint + tasks. Feature-scoped, bounded. Info-dense keywords (`find`, `inject`, `preserve`). No Q&A rounds. | PRP |
| **3. RESEARCH** | None unless user explicitly requests it. Trust developer knowledge and LLM training data. If needed: quick web search only. | Raw speed |
| **4. ARCHITECT** | No formal architecture phase. Tech stack from user input or auto-detected from existing code. Decisions made inline during execution. | PRP |
| **5. DESIGN** | **Skip** — No design step. Executor uses sensible defaults or user-provided CSS. | N/A |
| **6. SHARD** | Single task list in PRP document. 5-10 tasks, info-dense, no sharding overhead. Error patterns pre-documented if user provides them. | PRP |
| **7. EXECUTE** | In-session sequential (PAUL-style). No subagents — keeps full context and avoids cold-start overhead. All tasks in one focused session. | PAUL in-session |
| **8. VERIFY** | Validation loop only: lint -> test -> done. Fix-revalidate cycle if failures. No independent QA. | PRP |
| **9. UNIFY** | Lightweight SUMMARY.md: what was built, AC pass/fail (if AC were defined), any known gaps. < 30 lines. | PAUL (simplified) |
| **10. TRANSITION** | N/A (typically single-phase) or immediate advance. No state consistency checks beyond ROADMAP update. | Minimal |
| **11. COMPLETE** | Git tag, done. No retrospective, no milestone archive. | Minimal |

#### BLITZ configuration:

```json
{
  "profile": "blitz",
  "planning": { "depth": "minimal", "timing": "just-in-time", "research_waves": 0 },
  "architecture": { "gate": "none", "party_mode": false },
  "design": { "enabled": false },
  "sharding": { "strategy": "single-document", "task_granularity": "feature" },
  "execution": { "model": "in-session", "parallelism": "none", "subagents": "none" },
  "verification": { "qa_independence": "self", "unify": "lightweight" },
  "human": { "estimated_touches": "3-5", "plan_approval": false },
  "context": { "monitoring": "brackets-only", "hooks": false },
  "git": { "branching": "none", "commits": "per-feature" }
}
```

#### BLITZ metrics target:

| Metric | Target |
|--------|--------|
| Time to first code | < 5 minutes |
| Total project time | 1-3 hours |
| Human touchpoints | 3-5 |
| Token cost (5K LOC) | ~200-500K |
| Overhead ratio | ~15% overhead, ~85% coding |

---

### 4.2 SPRINT — "Steady pace, solid output"

**Philosophy:** Plan each phase before executing it. Use parallel subagents for speed but keep the planning lightweight. Good enough quality for shipping, not perfect. Inspired by GSD's phased model but without the heavyweight verification stack.

**When to use:** Personal projects you'll maintain, small-to-medium apps, MVPs that will evolve, solo developer shipping consistently.

**When NOT to use:** Enterprise/regulated projects. Large codebases without running SCOUT first.

#### Step-by-step behavior:

| Step | SPRINT Approach | Source |
|------|----------------|--------|
| **1. INITIALIZE** | Structured questioning (5-10 questions, adaptive). PROJECT.md + ROADMAP.md with 3-8 phases. No deep dream extraction — practical and direct. | GSD (lighter) |
| **2. DISCOVER** | Standard PRD creation. Per-phase discussion (`discuss-phase`) to capture context. No exhaustive completeness gate — "good enough to plan" threshold. | GSD |
| **3. RESEARCH** | 1 wave per phase. Quick research (2-5 min) for known domains, standard (15-30 min) for unfamiliar tech. Research subagents allowed. | GSD + PAUL depths |
| **4. ARCHITECT** | Light architecture: tech stack + key decisions documented. No formal Solutioning Gate. Architecture captured in PROJECT.md decisions section. | GSD (light) |
| **5. DESIGN** | **Lightweight** — Auto-select style + palette + typography from industry rules. Single DESIGN.md in `.mike/`. No user approval needed. Skipped for non-UI projects. | UI/UX Pro Max (adapted) |
| **6. SHARD** | Per-phase PLAN.md with 4-6 tasks. BDD acceptance criteria per plan. Boundary declarations for existing codebases. Not fully sharded — plans are self-contained but not atomic. | GSD + PAUL AC |
| **7. EXECUTE** | Wave-based parallel subagents (GSD-style). 2-3 concurrent executors. Fresh 200K context per executor. Context monitoring hooks active. | GSD waves |
| **8. VERIFY** | Verifier agent post-execution (GSD-style). Per-task verify steps during execution. No independent QA agent. | GSD |
| **9. UNIFY** | Standard SUMMARY.md: planned vs. actual, AC results table, deviations, decisions, deferred issues. Full reconciliation. | PAUL |
| **10. TRANSITION** | Phase transitions with STATE.md update. State consistency check (advisory, not blocking). Auto-advance to next phase. | GSD + PAUL (lighter) |
| **11. COMPLETE** | Milestone archive, simple retrospective, git tag. | GSD |

#### SPRINT configuration:

```json
{
  "profile": "sprint",
  "planning": { "depth": "per-phase", "timing": "incremental", "research_waves": 1 },
  "architecture": { "gate": "informal", "party_mode": false },
  "design": { "enabled": "auto", "depth": "lightweight", "industry_rules": true, "tokens": false },
  "sharding": { "strategy": "per-phase-plans", "task_granularity": "plan" },
  "execution": { "model": "wave-parallel", "parallelism": "2-3 concurrent", "subagents": "executors" },
  "verification": { "qa_independence": "verifier", "unify": "standard" },
  "human": { "estimated_touches": "10-18", "plan_approval": false },
  "context": { "monitoring": "hooks", "hooks": true },
  "git": { "branching": "phase", "commits": "per-task" }
}
```

#### SPRINT metrics target:

| Metric | Target |
|--------|--------|
| Time to first code | 15-30 minutes |
| Total project time (5 phases) | 4-8 hours |
| Human touchpoints | 10-18 |
| Token cost (5K LOC) | ~0.8-1.5M |
| Overhead ratio | ~35% overhead, ~65% coding |

---

### 4.3 FORGE — "Built to last, shipped this week"

**Philosophy:** Invest upfront in thorough planning and architecture so execution is fast, parallel, and predictable. Document sharding slashes token costs. Independent QA catches what developers miss. Mandatory UNIFY ensures nothing slips through. This is the professional-grade profile. Inspired primarily by BMAD's sharding + GSD's parallelism + PAUL's closure.

**When to use:** Production applications, client deliverables, SaaS products, APIs that others depend on, anything that must work reliably.

**When NOT to use:** Throwaway code, experiments, tiny bug fixes (use BLITZ for those via scale adaptation).

#### Step-by-step behavior:

| Step | FORGE Approach | Source |
|------|---------------|--------|
| **1. INITIALIZE** | Deep questioning with adaptive follow-ups. PROJECT.md + ROADMAP.md + REQUIREMENTS.md. Capture vision, constraints, non-functional requirements. 4x parallel research subagents for technology discovery. | GSD + BMAD analyst |
| **2. DISCOVER** | Full PRD with parallel section generation. Discovery Q&A round. Completeness Gate: "Could an agent implement this without guessing?" Must pass before proceeding. 2-wave research (broad then implementation-focused). | M2C1 completeness + BMAD parallel PRD |
| **3. RESEARCH** | 2 waves: Wave 1 (broad technology/pattern discovery), Wave 2 (implementation-focused after architectural decisions). Mandatory skill creation for unfamiliar tools/APIs. Error pattern pre-documentation. | M2C1 waves + PRP error patterns |
| **4. ARCHITECT** | Full architecture design with parallel component analysis. Solutioning Gate: >=90% completeness threshold. Gaps identified and demanded before proceeding. Tech stack, DB schema, API spec, component contracts. | BMAD gate + parallel design |
| **5. DESIGN** | **Standard** — Full design system generation: industry rule matching → style + palette + typography selection → DESIGN.md with tokens, component specs, anti-patterns. User reviews once. Design context atomically sharded into SHARD files. Skipped for non-UI projects. | UI/UX Pro Max (adapted) |
| **6. SHARD** | **Document sharding** (BMAD's killer innovation): PRD fragmented into atomic story files. Each shard contains ONLY relevant AC (BDD format), relevant schema fragments, related API definitions, pertinent design notes, **relevant design tokens + component specs from DESIGN.md**, boundary declarations (DO NOT CHANGE). Self-contained — executor needs no additional context. | BMAD sharding + PAUL AC + PAUL boundaries |
| **7. EXECUTE** | Wave-based parallel execution with sharded contexts. Each executor receives its atomic shard (~8K tokens vs. ~32K traditional). 3-5 concurrent executors per wave. Ralph Loop activated for any executor stuck >3 retries. Context monitoring hooks active. | GSD waves + BMAD sharding + PRP Ralph |
| **8. VERIFY** | **Independent QA agent** — separate agent verifies each wave's output without having written the code. Per-task verify steps during execution. Phase regression testing on last wave. Pre-commit quality hooks. **Design compliance check** (contrast ratios, token usage, anti-pattern scan). | BMAD independent QA + GSD verifier + UI/UX Pro Max checklist |
| **9. UNIFY** | Full SUMMARY.md per execution unit: planned vs. actual, AC results table (PASS/FAIL per AC-N), deviations with explanations, decisions logged to 3 locations (STATE + PROJECT + SUMMARY), deferred issues to ISSUES.md, skill audit (were required skills invoked?). **Design compliance results** (PASS/FAIL per checklist item). | PAUL mandatory UNIFY |
| **10. TRANSITION** | **State consistency enforcement**: 3-file alignment check (STATE.md, PROJECT.md, ROADMAP.md) — BLOCKING on misalignment. PROJECT.md evolved with validated/invalidated requirements. Auto-transition to next phase. | PAUL state consistency |
| **11. COMPLETE** | Milestone archive with version tracking. Retrospective. UAT workflow with severity inference. Gap closure pipeline if needed. Git milestone tag. | GSD + PAUL milestone |

#### FORGE configuration:

```json
{
  "profile": "forge",
  "planning": { "depth": "upfront-thorough", "timing": "front-loaded", "research_waves": 2 },
  "architecture": { "gate": "solutioning-90", "party_mode": false },
  "design": { "enabled": "auto", "depth": "standard", "industry_rules": true, "tokens": true, "shard_integration": true, "verification": true },
  "sharding": { "strategy": "atomic-stories", "task_granularity": "shard", "token_budget_per_shard": "~50%", "design_context_included": true },
  "execution": { "model": "wave-parallel-sharded", "parallelism": "3-5 concurrent", "subagents": "executors+qa", "ralph_loop": true },
  "verification": { "qa_independence": "full", "unify": "full", "state_consistency": "blocking", "design_compliance": true },
  "human": { "estimated_touches": "8-15", "plan_approval": "per-phase" },
  "context": { "monitoring": "hooks+brackets", "hooks": true },
  "git": { "branching": "feature", "commits": "per-task" },
  "skills": { "mandatory_creation": true, "unify_audit": true },
  "error_patterns": { "pre_documented": true }
}
```

#### FORGE metrics target:

| Metric | Target |
|--------|--------|
| Time to first code | 1-2 hours (upfront planning) |
| Total project time (5 phases) | 3-6 hours |
| Human touchpoints | 8-15 |
| Token cost (5K LOC) | ~0.3-0.8M (sharding saves 74-90%) |
| Overhead ratio | ~40% overhead, ~60% coding (but far fewer total tokens) |

---

### 4.4 CITADEL — "Nothing gets through unless it's perfect"

**Philosophy:** Maximum rigor at every step. Every assumption challenged, every decision debated, every output verified by an independent agent. This is the framework equivalent of a fortified castle — nothing enters production without passing through multiple gates. Inspired by the combined maximum of all five frameworks.

**When to use:** Enterprise platforms, regulated industries (fintech, health, legal), mission-critical systems, multi-team projects, anything where failure has serious consequences.

**When NOT to use:** Anything time-pressured. Solo side projects. Prototypes. The overhead is justified only when the cost of failure exceeds the cost of rigor.

#### Step-by-step behavior:

| Step | CITADEL Approach | Source |
|------|-----------------|--------|
| **1. INITIALIZE** | Full M2C1-depth brain dump. 4x parallel research subagents. Deep questioning with discovery completeness check. PROJECT.md + ROADMAP.md + REQUIREMENTS.md + DISCOVERY.md (authority document). Authority hierarchy established: DISCOVERY.md > ARCHITECTURE.md > stories > research. | M2C1 + GSD |
| **2. DISCOVER** | 2-wave research (broad -> implementation). Full discovery Q&A. Completeness Gate: "Could an agent implement without guessing?" Mandatory skill creation for every tool, API, and testing strategy. Autonomous tool setup via browser automation where possible. | M2C1 full pipeline |
| **3. RESEARCH** | 2 waves + deep discovery depth (1+ hour with confidence gate per domain). Synergy review: cross-phase coherence check before proceeding. Research artifacts stored as skill files. | M2C1 + PAUL deep discovery |
| **4. ARCHITECT** | Full architecture + **Party Mode**: 2-3 specialized agents (Architect, Security Analyst, Performance Engineer) debate trade-offs, agree/disagree, synthesize consensus. Solutioning Gate >=90%. Agent role constraints enforced (Architect can't write implementation, Developer can't redefine requirements). | BMAD Party Mode + gate + constraints |
| **5. DESIGN** | **Full** — Design system generation with industry matching + per-page overrides + anti-pattern enforcement. User approves design system before execution. Design tokens exported as `design-tokens.json`. Per-page design override files for complex UIs. Design verification integrated into QA. Skipped for non-UI projects. | UI/UX Pro Max (adapted) |
| **6. SHARD** | Atomic document sharding (BMAD) + BDD acceptance criteria per shard (PAUL) + boundary declarations per shard (PAUL) + error patterns per shard (PRP) + **design tokens + component specs per shard** + synergy verification across shards (M2C1). Self-contained task files that are complete prompts. Skill files bundled per shard. | BMAD + PAUL + PRP + M2C1 |
| **7. EXECUTE** | Wave-based parallel execution with sharded contexts. 5+ concurrent executors. Independent QA agent per wave (BMAD). Ralph Loop for stuck tasks with fresh context (PRP). Context monitoring hooks (GSD). TDD plan type available (RED/GREEN/REFACTOR with ~40% context budget) (PAUL). Per-task boundary enforcement. Issue deferral to ISSUES.md. | All frameworks |
| **8. VERIFY** | 6-layer verification: (1) Per-task verify + commit verify, (2) Independent QA agent per wave, (3) Phase regression tests, (4) Goal-backward verification (GSD verifier 4-level hierarchy), (5) **Design compliance** (contrast, token usage, anti-patterns, responsive), (6) UAT with severity inference + gap closure pipeline. SonarQube optional for static analysis metrics. | GSD + BMAD + PAUL + M2C1 + UI/UX Pro Max |
| **9. UNIFY** | Full UNIFY with maximum reconciliation. AC results table (PASS/FAIL). Deviation log with root cause. Decisions to 3 locations. Skill audit. Issue deferral. State consistency check (BLOCKING). **Design compliance results table.** False positive awareness note (from BMAD: AI may find problems that don't exist — filter signal from noise). | PAUL + BMAD |
| **10. TRANSITION** | State consistency enforcement (3-file BLOCKING check). PROJECT.md evolution (requirements validated/invalidated). Synergy re-check across remaining phases. Milestone boundary checks. Decimal phase insertion capability for urgent discoveries. | PAUL + M2C1 synergy |
| **11. COMPLETE** | Full milestone archive with version tracking. Structured retrospective (what worked, what didn't, patterns for next milestone). Codebase re-analysis delta (compare pre/post 7-doc mapping). Final UAT sign-off. | PAUL + GSD |

#### CITADEL configuration:

```json
{
  "profile": "citadel",
  "planning": { "depth": "exhaustive", "timing": "all-upfront", "research_waves": 2, "synergy_review": true },
  "architecture": { "gate": "solutioning-90", "party_mode": true, "role_constraints": true },
  "design": { "enabled": "auto", "depth": "full", "industry_rules": true, "tokens": true, "per_page_overrides": true, "shard_integration": true, "verification": true, "user_approval": true },
  "sharding": { "strategy": "atomic-stories", "task_granularity": "shard", "error_patterns": true, "skills_bundled": true, "synergy_verified": true, "design_context_included": true },
  "execution": { "model": "wave-parallel-sharded", "parallelism": "5+ concurrent", "subagents": "executors+qa+specialist", "ralph_loop": true, "tdd_available": true },
  "verification": { "qa_independence": "full-per-wave", "unify": "full", "state_consistency": "blocking", "regression": true, "goal_backward": true, "uat": true, "sonarqube": "optional" },
  "human": { "estimated_touches": "12-20", "plan_approval": "per-phase" },
  "context": { "monitoring": "hooks+brackets", "hooks": true },
  "git": { "branching": "feature", "commits": "per-task" },
  "skills": { "mandatory_creation": true, "unify_audit": true },
  "error_patterns": { "pre_documented": true },
  "discovery": { "authority_doc": "DISCOVERY.md", "completeness_gate": true }
}
```

#### CITADEL metrics target:

| Metric | Target |
|--------|--------|
| Time to first code | 2-4 hours (exhaustive planning) |
| Total project time (5 phases) | 5-10 hours |
| Human touchpoints | 12-20 |
| Token cost (5K LOC) | ~0.5-1.2M (sharding offsets thoroughness) |
| Overhead ratio | ~55% overhead, ~45% coding (justified by zero-defect goal) |

---

### 4.5 SCOUT — "Understand everything before changing anything"

**Philosophy:** Existing codebases are minefields of implicit assumptions, undocumented conventions, and fragile interdependencies. SCOUT prioritizes deep understanding before any modification. Conservative boundaries prevent unintended ripple effects. Persistent debug sessions handle the inevitable surprises. Inspired primarily by PAUL's boundary enforcement + PRP's existing-codebase focus + GSD's codebase mapping.

**When to use:** Legacy modernization, adding features to large existing codebases, refactoring campaigns, system migrations, any project where "what exists" is more complex than "what to build."

**When NOT to use:** Greenfield projects (use FORGE or SPRINT). Throwaway modifications (use BLITZ).

#### Step-by-step behavior:

| Step | SCOUT Approach | Source |
|------|---------------|--------|
| **1. INITIALIZE** | **Codebase-first**: Before ANY project planning, run full 7-document codebase analysis with 4 parallel Explore agents (STACK, ARCHITECTURE, STRUCTURE, CONVENTIONS, TESTING, INTEGRATIONS, CONCERNS). This becomes the foundation for all decisions. Then: questions about what to change, PROJECT.md, ROADMAP.md. | PAUL 7-doc + GSD map-codebase |
| **2. DISCOVER** | Feature-scoped PRP-style document enriched with codebase intelligence. "Before/after tree visualization" showing what changes structurally. Boundary declarations: explicit DO NOT CHANGE files based on codebase analysis. Impact analysis: which existing tests, integrations, conventions are affected. | PRP + PAUL boundaries |
| **3. RESEARCH** | 3 depths available: Quick (known patterns), Standard (unfamiliar areas), Deep (complex legacy with confidence gate). Research focused on *existing* patterns and conventions, not new technology. Convention conformance: any new code must match discovered CONVENTIONS. | PAUL 3 depths |
| **4. ARCHITECT** | Architecture *review*, not creation. Document existing architecture -> propose minimal changes -> boundary declarations. Emphasis on "change the least amount to achieve the goal." No Solutioning Gate (architecture already exists). | SCOUT-specific |
| **5. DESIGN** | **Review/Extract** — Analyze existing codebase design (CSS/SCSS/Tailwind config, theme files). Extract current colors, typography, spacing, component patterns. Generate DESIGN.md that *documents* the existing design system. New work must conform to extracted design (boundary enforcement). Skipped for non-UI projects. | SCOUT-specific + UI/UX Pro Max |
| **6. SHARD** | Feature-scoped plans with aggressive boundary enforcement. 2-3 tasks per plan (PAUL-style ~50% context budget). Each plan declares: files to modify (whitelist), files NOT to modify (blacklist), conventions to follow (from codebase analysis), **design tokens to use (from DESIGN.md)**, tests that must still pass. | PAUL sizing + boundaries |
| **7. EXECUTE** | **In-session sequential** (PAUL-style). No subagents for execution — existing codebases need full context to avoid breaking implicit dependencies. Per-task verification includes existing test suite. Persistent debug sessions auto-created for any unexpected behavior. | PAUL in-session + persistent debug |
| **8. VERIFY** | Per-task: existing tests pass + new tests pass + boundary check (no files outside whitelist modified). Phase: codebase re-analysis delta (compare 7-doc before/after — flag unintended changes). SonarQube for regression metrics (optional). | PAUL + GSD verifier |
| **9. UNIFY** | Standard UNIFY + codebase impact assessment: what changed in STRUCTURE, CONVENTIONS, INTEGRATIONS, CONCERNS? Any unintended side effects? Convention violations? | PAUL UNIFY + SCOUT-specific |
| **10. TRANSITION** | State consistency check (BLOCKING). Codebase docs updated if architecture changed. Issue deferral for discovered tech debt (ISSUES.md with type: tech-debt). | PAUL |
| **11. COMPLETE** | Codebase 7-doc refresh (delta analysis). Final existing test suite pass. Document what was learned about the codebase for future sessions. | SCOUT-specific |

#### SCOUT configuration:

```json
{
  "profile": "scout",
  "planning": { "depth": "codebase-first", "timing": "incremental", "research_waves": 1, "research_depths": 3 },
  "architecture": { "gate": "review-only", "party_mode": false },
  "design": { "enabled": "auto", "depth": "extract", "extract_existing": true, "convention_enforcement": true },
  "sharding": { "strategy": "feature-scoped-plans", "task_granularity": "plan", "boundary_enforcement": "strict" },
  "execution": { "model": "in-session", "parallelism": "none", "subagents": "research-only", "persistent_debug": true },
  "verification": { "qa_independence": "self+existing-tests", "unify": "full+codebase-delta", "state_consistency": "blocking" },
  "human": { "estimated_touches": "12-20", "plan_approval": true },
  "context": { "monitoring": "brackets-only", "hooks": false },
  "git": { "branching": "feature", "commits": "per-task" },
  "codebase": { "analysis": "7-doc", "delta_on_complete": true, "convention_enforcement": true },
  "debug": { "persistent_sessions": true }
}
```

#### SCOUT metrics target:

| Metric | Target |
|--------|--------|
| Time to first code | 30-60 minutes (codebase analysis first) |
| Total project time (5 phases) | 6-12 hours |
| Human touchpoints | 12-20 |
| Token cost (5K LOC) | ~0.6-1.2M |
| Overhead ratio | ~45% overhead, ~55% coding (understanding-heavy) |

---

## 5. The GOLD Standard

### 5.1 Philosophy

GOLD is not a fixed configuration — it is an **adaptive engine** that selects the optimal approach for each step based on project characteristics. It represents the objectively best default for any project by combining scale adaptation (BMAD) with the best innovation per dimension.

**GOLD's core principle:** Apply maximum rigor *where it matters* and minimum overhead *where it doesn't*. A bug fix doesn't need 12-phase planning. An enterprise platform doesn't need BLITZ execution. GOLD adapts.

### 5.2 Scale Detection

On initialization, GOLD assesses the project and assigns a **Scale Level** (inspired by BMAD's 5-level system):

| Level | Trigger | Description | Example |
|-------|---------|-------------|---------|
| **L0 — Atomic** | 1-2 files, <1 hour work | Bug fix, config change, tiny tweak | Fix typo in API response |
| **L1 — Minor** | 3-10 files, 1-4 hours | Small feature, refactor | Add search endpoint |
| **L2 — Standard** | 10-30 files, 1-3 days | Medium feature, new module | User authentication system |
| **L3 — Major** | 30-100 files, 1-2 weeks | Large feature set, new service | Full e-commerce backend |
| **L4 — Enterprise** | 100+ files, weeks-months | Platform, multi-service | Microservices migration |

### 5.3 GOLD Adaptive Behavior Per Scale Level

| Step | L0 (Atomic) | L1 (Minor) | L2 (Standard) | L3 (Major) | L4 (Enterprise) |
|------|-------------|------------|----------------|------------|-----------------|
| **INITIALIZE** | Single sentence goal | 3-5 questions | Deep questioning, PROJECT.md | Full init + 4x research | Full init + DISCOVERY.md |
| **DISCOVER** | Inline description | Light PRD | PRD + completeness check | PRD + 2-wave research + completeness gate | Full M2C1 discovery pipeline |
| **RESEARCH** | None | Quick (2-5 min) | Standard (15-30 min) | 2 waves + skill creation | 2 waves + skill creation + tool setup |
| **ARCHITECT** | None | Tech stack only | Light architecture | Solutioning Gate >=90% | Party Mode + Solutioning Gate |
| **DESIGN** | Skip | Skip | Lightweight (auto-select) | Standard (full system + tokens) | Full (per-page overrides + approval) |
| **SHARD** | Single task list | Per-phase plans (4-6 tasks) | Document sharding (atomic) | Document sharding + error patterns + design context | Full sharding + synergy review + design context |
| **EXECUTE** | In-session (1 pass) | In-session sequential | Wave-parallel (3 concurrent) | Wave-parallel sharded (5 concurrent) | Wave-parallel sharded + Ralph Loop |
| **VERIFY** | Tests pass = done | Verifier agent | Independent QA + design compliance | Independent QA + regression + design compliance | 6-layer verification (includes design) |
| **UNIFY** | Lightweight (<30 lines) | Standard SUMMARY | Full SUMMARY + AC table + design results | Full + skill audit + design results | Full + synergy re-check + design results |
| **TRANSITION** | N/A (single pass) | STATE update (advisory) | State consistency (blocking) | State consistency + PROJECT evolution | State consistency + synergy + codebase delta |
| **COMPLETE** | Git commit | Git tag | Milestone archive | Milestone + retrospective | Milestone + retrospective + codebase re-analysis |

### 5.4 GOLD's Best-of-Breed Defaults

Regardless of scale level, GOLD always uses these best-in-class approaches:

| Dimension | GOLD Default | Why This Is Objectively Best |
|-----------|-------------|------------------------------|
| **Task decomposition** | Document sharding (L2+) | 74-90% token reduction with higher precision. No framework beats BMAD's numbers here. |
| **Loop closure** | Mandatory UNIFY | Zero orphan work. Only PAUL guarantees this; every other framework leaks work across sessions. |
| **Acceptance criteria** | BDD Given/When/Then | Testable "done" criteria. Eliminates ambiguity that plagues fuzzy task descriptions. |
| **Execution (L2+)** | Wave-parallel with sharded contexts | GSD's parallelism + BMAD's sharding = fast AND token-efficient. |
| **Context strategy** | Brackets + plan sizing + hooks (L2+) | Structural prevention (PAUL) + runtime monitoring (GSD). Belt and suspenders. |
| **QA (L2+)** | Independent QA agent | BMAD proved that separating developer and tester eliminates self-review bias. |
| **Error recovery** | Deviation rules + Ralph Loop (L3+) | GSD/PAUL's 4-level priority + PRP's fresh-context retry = most robust recovery. |
| **State management** | 3-file consistency enforcement | PAUL's BLOCKING check at transitions prevents the drift that accumulates silently in every other framework. |
| **Session continuity** | HANDOFF + single next action | PAUL's explicit handoff format + no-menu-navigation philosophy = fastest resume with least confusion. |
| **Debug persistence** | Persistent debug sessions (L2+) | PAUL-unique: debug files survive context resets with immutable symptoms + append-only evidence. |
| **Issue management** | ISSUES.md + triage workflow | PAUL's issue deferral prevents scope creep. No other framework systematizes this. |
| **Rules engine** | Dynamic, just-in-time | CARL-inspired: rules loaded on demand, not static prompt bloat. |
| **Boundary protection** | DO NOT CHANGE declarations | PAUL's plan-level boundaries with rule enforcement. Prevents unintended modifications. |
| **Decision tracking** | 3-location redundancy | STATE + PROJECT + SUMMARY (PAUL). Decisions never lost even if one file is corrupted. |
| **Research** | 2-wave (L2+) | M2C1's broad-then-focused model produces the most actionable research. |
| **Error anticipation** | Error patterns pre-documented | PRP-unique: known failure modes with fix strategies reduces recovery time by 30-50%. |
| **UI design system** | Industry-matched design (L2+) | UI/UX Pro Max-inspired: 100 industry rules auto-select style + palette + typography. Sharded into task files for token efficiency. |

### 5.5 GOLD Configuration

```json
{
  "profile": "gold",
  "scale": "auto-detect",
  "planning": {
    "depth": "scale-adaptive",
    "timing": "scale-adaptive",
    "research_waves": "scale-adaptive (0/1/2)",
    "completeness_gate": "L2+",
    "synergy_review": "L4"
  },
  "architecture": {
    "gate": "scale-adaptive (none/informal/solutioning-90)",
    "party_mode": "L4 only",
    "role_constraints": "L3+"
  },
  "sharding": {
    "strategy": "scale-adaptive (single-doc/per-phase/atomic)",
    "bdd_acceptance": true,
    "boundary_declarations": true,
    "error_patterns": "L2+"
  },
  "execution": {
    "model": "scale-adaptive (in-session/wave-parallel/wave-parallel-sharded)",
    "ralph_loop": "L3+",
    "tdd_available": true
  },
  "verification": {
    "qa_independence": "scale-adaptive (self/verifier/full-independent)",
    "unify": "mandatory-always",
    "state_consistency": "blocking (L2+), advisory (L0-1)"
  },
  "human": {
    "estimated_touches": "scale-adaptive (3/8/12/15/20)",
    "plan_approval": "L2+"
  },
  "context": {
    "monitoring": "scale-adaptive (brackets/brackets+hooks)",
    "quality_threshold": "50%"
  },
  "git": {
    "branching": "scale-adaptive (none/phase/feature)",
    "commits": "per-task (always)"
  },
  "design": {
    "enabled": "auto (skip for non-UI projects)",
    "depth": "scale-adaptive (skip/skip/lightweight/standard/full)",
    "industry_rules": "L2+",
    "tokens": "L3+",
    "per_page_overrides": "L4",
    "shard_integration": "L2+",
    "verification": "L2+",
    "user_approval": "L4"
  },
  "rules_engine": "dynamic-just-in-time",
  "issue_deferral": true,
  "handoff_format": "explicit-dated",
  "debug_persistence": "L2+",
  "skill_tracking": "L2+",
  "decimal_phases": true
}
```

### 5.6 GOLD Metrics Target

| Metric | L0 | L1 | L2 | L3 | L4 |
|--------|----|----|----|----|-----|
| Time to first code | <2 min | 10-15 min | 30-60 min | 1-2 hours | 2-4 hours |
| Total time | 15-30 min | 1-3 hours | 3-6 hours | 1-2 days | 1-2 weeks |
| Human touches | 1-2 | 4-6 | 8-12 | 12-18 | 15-25 |
| Token cost | <50K | 200-500K | 300-800K | 500K-1.5M | 1-3M |
| Overhead | ~10% | ~25% | ~40% | ~45% | ~50% |

### 5.7 Why GOLD Is the Recommended Default

```
                   Quality
                     ^
                     |     CITADEL
                     |       *
                     |
                     |          GOLD (L3-L4)
                     |            *
                     |
                     |      GOLD (L2)   FORGE
                     |        *           *
                     |
                     |   GOLD (L1)
                     |     *        SPRINT
                     |                *
                     |
                     |  GOLD (L0)
                     |    *     BLITZ
                     |            *
                     +------------------------------> Speed
```

GOLD traces the **Pareto frontier** — at every point on the speed-quality spectrum, it matches or exceeds the purpose-built profile. It does this by applying exactly the right amount of rigor for the project's scale, never over-investing and never under-investing.

The only reason to choose a specific profile over GOLD is if you have an **explicit philosophical preference** (e.g., "I want CITADEL's Party Mode for everything" or "I want BLITZ's zero-planning approach even for a large project"). For purely outcome-optimized decisions, GOLD is always correct.

---

## 6. Step-by-Step Comparison Across Profiles

### 6.1 Step 1: INITIALIZE

| Dimension | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|-----------|-------|--------|-------|---------|-------|------|
| User questioning | 0-2 sentences | 5-10 questions | Deep adaptive | Full brain dump | Codebase-first, then questions | Scale-adaptive |
| PROJECT.md | Minimal | Standard | Full | Full + DISCOVERY.md | Codebase analysis + project | Scale-adaptive |
| Research subagents | None | None | 4x parallel | 4x parallel | 4x Explore (codebase) | 0/0/4/4 by level |
| Time | <5 min | 10-15 min | 20-40 min | 30-60 min | 30-60 min | Scale-adaptive |

### 6.2 Step 2: DISCOVER

| Dimension | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|-----------|-------|--------|-------|---------|-------|------|
| Format | PRP doc | PRD | PRD + Q&A | PRD + 2-wave + DISCOVERY.md | PRP + codebase intel | Scale-adaptive |
| Completeness gate | No | No | Yes | Yes + synergy | No (feature-scoped) | L2+ |
| Research waves | 0 | 1 (per-phase) | 2 (upfront) | 2 + deep depth | 1-3 (per complexity) | 0/1/2 by level |
| Skill creation | No | No | Yes | Mandatory | No | L2+ |
| Authority doc | PRP | PROJECT.md | PRD + ARCHITECTURE | DISCOVERY.md (overrides all) | Codebase analysis | Scale-adaptive |

### 6.3 Step 5: DESIGN

| Dimension | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|-----------|-------|--------|-------|---------|-------|------|
| Depth | Skip | Lightweight (auto) | Standard (full system) | Full (per-page + approval) | Extract (reverse-engineer existing) | Scale-adaptive |
| Industry rules | N/A | Auto-match | Auto-match + review | Auto-match + approval | Extract from codebase | L2+ |
| Design tokens output | No | DESIGN.md only | DESIGN.md + design-tokens.json | DESIGN.md + tokens + per-page overrides | DESIGN.md (documenting existing) | L3+ |
| Shard integration | No | No (plans not sharded) | Yes (tokens in each shard) | Yes (tokens + specs in each shard) | No (in-session context) | L2+ |
| Verification | No | No | Design compliance check | 6-layer (includes design) | Convention conformance | L2+ |
| User approval | No | No | Review once | Approval required | Review conventions | L4 |
| Anti-pattern enforcement | No | Informational | In shards as boundaries | In shards + verification | Convention-based | L2+ |

### 6.4 Step 6: SHARD

| Dimension | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|-----------|-------|--------|-------|---------|-------|------|
| Strategy | Single task list | Per-phase plans | Atomic stories (BMAD) | Atomic + skills + error patterns | Feature-scoped plans | Scale-adaptive |
| Tasks per unit | 5-10 | 4-6 | 1-3 per shard | 1-3 per shard | 2-3 per plan | Scale-adaptive |
| BDD acceptance criteria | Optional | Yes | Yes | Yes + cross-shard verification | Yes | Always |
| Boundary declarations | No | Optional | Yes | Yes | Strict (whitelist + blacklist) | L1+ |
| Self-contained task files | No | No | Yes | Yes + bundled skills | No (needs codebase context) | L2+ |
| Token per execution unit | ~full context | ~60% context | ~8K (sharded) | ~8K + skills | ~50% context | Scale-adaptive |

### 6.5 Step 7: EXECUTE

| Dimension | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|-----------|-------|--------|-------|---------|-------|------|
| Model | In-session | Wave-parallel | Wave-parallel sharded | Wave-parallel sharded | In-session sequential | Scale-adaptive |
| Concurrency | 1 | 2-3 | 3-5 | 5+ | 1 | 1/1/3/5/5+ |
| Subagents | None | Executors | Executors + QA | Executors + QA + specialist | Research only | Scale-adaptive |
| Fresh context per task | No | Yes | Yes (sharded) | Yes (sharded + skills) | No (full context) | Scale-adaptive |
| Ralph Loop | No | No | Yes (stuck >3) | Yes | No | L3+ |
| TDD available | No | No | Yes | Yes | Yes | Always |
| Context monitoring | Brackets only | Hooks | Hooks + brackets | Hooks + brackets | Brackets only | Scale-adaptive |

### 6.6 Step 8: VERIFY

| Dimension | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|-----------|-------|--------|-------|---------|-------|------|
| QA independence | Self | Verifier agent | Independent QA | Independent QA per wave | Self + existing tests | Scale-adaptive |
| Regression testing | No | Per-phase | Per-phase | Per-wave + final e2e | Per-task (existing suite) | L2+ |
| Goal-backward | No | No | No | Yes (4-level hierarchy) | No | L4 |
| UAT | No | No | Yes | Yes + severity inference | Yes (focused on regressions) | L2+ |
| SonarQube | No | No | Optional | Optional | Recommended | L2+ optional |
| Pre-commit hooks | No | No | Yes | Yes | Yes | L2+ |

### 6.7 Step 9: UNIFY

| Dimension | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|-----------|-------|--------|-------|---------|-------|------|
| SUMMARY depth | Lightweight (<30 lines) | Standard | Full (AC table, deviations) | Full + synergy + false positive note | Full + codebase delta | Scale-adaptive |
| AC reconciliation | Optional | Yes | Yes (PASS/FAIL per AC) | Yes + cross-shard coherence | Yes | Always |
| Decision logging | SUMMARY only | STATE + SUMMARY | 3 locations | 3 locations | 3 locations | 2+ locations |
| Skill audit | No | No | Yes | Yes | No | L2+ |
| Issue deferral | No | Yes | Yes | Yes | Yes | Always |

---

## 7. Profile Recommender

### 7.1 Decision Tree

```
START: What are you building?
  |
  +-- "Quick fix / tiny change / config tweak"
  |     --> BLITZ (or GOLD L0, which behaves identically)
  |
  +-- "Prototype / POC / hackathon / experiment"
  |     --> BLITZ
  |
  +-- "Feature on existing codebase / legacy system"
  |     |
  |     +-- "I understand the codebase well"
  |     |     --> SPRINT or FORGE (depends on criticality)
  |     |
  |     +-- "The codebase is unfamiliar or complex"
  |           --> SCOUT
  |
  +-- "New application / greenfield"
  |     |
  |     +-- "Personal / side project / learning"
  |     |     --> SPRINT
  |     |
  |     +-- "Production / client / SaaS"
  |     |     --> FORGE
  |     |
  |     +-- "Enterprise / regulated / critical"
  |           --> CITADEL
  |
  +-- "I don't know / general purpose"
        --> GOLD (auto-detects scale and adapts)
```

### 7.2 Goal-Based Selection Matrix

| Your Priority | Best Profile | Why |
|--------------|-------------|-----|
| **Maximum speed** | BLITZ | Zero planning overhead, in-session execution |
| **Minimum human interaction** | FORGE | Front-loaded planning, then autonomous parallel execution |
| **Maximum quality** | CITADEL | 5-layer verification, Party Mode, independent QA per wave |
| **Minimum token cost** | FORGE | Document sharding (74-90% reduction) + parallel execution |
| **Best for solo developer** | SPRINT | Balanced overhead, wave-parallel, manageable touchpoints |
| **Best for teams** | CITADEL | Role constraints, Party Mode, independent QA, full audit trail |
| **Best for existing codebases** | SCOUT | Codebase-first analysis, boundary enforcement, persistent debug |
| **Best for learning** | SPRINT | Enough structure to learn patterns, not so much to overwhelm |
| **Best overall default** | GOLD | Adapts to everything, Pareto-optimal at every scale level |
| **Most autonomous** | FORGE | Thorough upfront planning enables highly autonomous execution |
| **Most control** | SCOUT or CITADEL | Explicit plan approval, boundary enforcement, maximum gates |
| **Multi-session project** | GOLD or CITADEL | HANDOFF, state consistency, explicit session continuity |
| **Debugging complex issue** | SCOUT | Persistent debug sessions, codebase analysis, conservative changes |

### 7.3 Project Size Quick Reference

| Project Size | Recommended | Rationale |
|-------------|------------|-----------|
| 1-2 files | BLITZ / GOLD L0 | Overhead of any planning exceeds value |
| 3-10 files | SPRINT / GOLD L1 | Light planning pays off, heavy planning doesn't |
| 10-30 files | FORGE / GOLD L2 | Sharding + parallel execution saves significant time |
| 30-100 files | FORGE or CITADEL / GOLD L3 | Upfront planning prevents expensive rework |
| 100+ files | CITADEL / GOLD L4 | Maximum rigor prevents cascading failures |

### 7.4 Mixed-Mode Projects

APEX supports **per-phase profile overrides** for projects with mixed requirements:

```
Phase 1: Prototype UI → BLITZ
Phase 2: Core business logic → FORGE
Phase 3: Payment integration → CITADEL (regulated)
Phase 4: Admin dashboard → SPRINT
Phase 5: Performance optimization → SCOUT (existing codebase)
```

```json
{
  "profile": "gold",
  "phase_overrides": {
    "1": "blitz",
    "2": "forge",
    "3": "citadel",
    "4": "sprint",
    "5": "scout"
  }
}
```

This is where APEX's profile system becomes genuinely unique — no other framework allows workflow adaptation *within* a single project.

---

## 8. Innovation Registry

Every innovation in APEX is traceable to its source framework. This registry serves as both attribution and a reference for understanding *why* each feature exists.

### 8.1 Innovations by Source

#### From GSD (10 innovations)

| Innovation | Used In Profiles | Impact |
|-----------|-----------------|--------|
| Wave-based parallel execution | SPRINT, FORGE, CITADEL, GOLD L2+ | 2-5x speed improvement for independent tasks |
| Context monitoring hooks | SPRINT, FORGE, CITADEL, GOLD L2+ | Proactive quality degradation warnings |
| State management (STATE.md + CLI tooling) | All | Persistent project state across sessions |
| Model profiles and overrides | All (configurable) | Right model for right task |
| Session continuity (pause/resume) | All | Work resumption without context loss |
| Health checks with auto-repair | FORGE, CITADEL, GOLD L2+ | Self-healing state files |
| Deviation rules (4-level) | All | Consistent error handling priority |
| Multi-runtime support | All | Not locked to a single AI platform |
| Analysis Paralysis Guard | All | Prevents over-thinking loops |
| Brownfield analysis (map-codebase) | SCOUT, GOLD (brownfield) | Systematic existing-codebase understanding |

#### From M2C1 (7 innovations)

| Innovation | Used In Profiles | Impact |
|-----------|-----------------|--------|
| Discovery Completeness Gate | FORGE, CITADEL, GOLD L2+ | Prevents "building on guesses" |
| 2-wave research (broad + implementation) | FORGE, CITADEL, GOLD L2+ | Most actionable research output |
| Authority hierarchy (single source of truth) | CITADEL, GOLD L4 | Eliminates contradictory information |
| Autonomous tool setup | CITADEL | Removes manual configuration bottleneck |
| Mandatory skill/knowledge creation | FORGE, CITADEL, GOLD L2+ | Pre-digested knowledge for executors |
| Synergy review (cross-phase coherence) | CITADEL, GOLD L4 | Prevents integration failures |
| Self-contained task files | FORGE, CITADEL, GOLD L2+ | Executors need zero context-building |

#### From PRP (6 innovations)

| Innovation | Used In Profiles | Impact |
|-----------|-----------------|--------|
| Information-dense keywords | BLITZ, all sharding | 20-30% token reduction in planning docs |
| Error pattern pre-documentation | FORGE, CITADEL, GOLD L2+ | 30-50% faster error recovery |
| Ralph Loop (fresh-context retry) | FORGE, CITADEL, GOLD L3+ | Autonomous stuck-task recovery |
| Feature-scoped bounded execution | BLITZ, SCOUT | Right-sized planning for small work |
| Before/after tree visualization | SCOUT | Clear structural change communication |
| Separate planning/execution contexts | FORGE, CITADEL | Prevents context contamination |

#### From BMAD (10 innovations)

| Innovation | Used In Profiles | Impact |
|-----------|-----------------|--------|
| Document sharding (74-90% token reduction) | FORGE, CITADEL, GOLD L2+ | **Single biggest optimization** |
| Scale-adaptive intelligence (Level 0-4) | GOLD | Automatic depth adjustment |
| Agent role constraints | CITADEL, GOLD L3+ | Prevents cross-role confusion |
| Independent QA agent | FORGE, CITADEL, GOLD L2+ | Eliminates self-review bias |
| Solutioning Gate >=90% | FORGE, CITADEL, GOLD L2+ | Measurable architecture completeness |
| Party Mode (multi-agent debate) | CITADEL, GOLD L4 | Best complex decision-making |
| Builder module (extensibility) | All (optional) | User-created custom agents |
| Project type awareness | All | Config determines patterns |
| Pre-commit quality hooks | FORGE, CITADEL, GOLD L2+ | Catches issues before commit |
| False positive awareness | CITADEL | Realistic QA expectations |

#### From PAUL (14 innovations)

| Innovation | Used In Profiles | Impact |
|-----------|-----------------|--------|
| Mandatory UNIFY closure | **All (core invariant)** | Zero orphan work — most impactful quality innovation |
| BDD acceptance criteria | **All (core invariant)** | Testable "done" criteria |
| Context brackets (50% threshold) | **All (core invariant)** | Only documented quality degradation curve |
| Dynamic rules engine (CARL-style) | **All (core invariant)** | Lean context, just-in-time rules |
| Issue deferral system | **All (core invariant)** | Prevents scope creep |
| Persistent debug sessions | SCOUT, CITADEL, GOLD L2+ | Debug survives context resets |
| State consistency enforcement (3-file) | FORGE, CITADEL, SCOUT, GOLD L2+ | Prevents cross-file drift |
| Boundary enforcement (DO NOT CHANGE) | FORGE, CITADEL, SCOUT, GOLD L1+ | Explicit scope protection |
| Single next action philosophy | **All (core invariant)** | Zero decision fatigue on resume |
| Explicit handoff format | **All (core invariant)** | Best session continuity |
| Decimal phases | **All (core invariant)** | Urgent insertion without renumbering |
| Plan sizing (~50% context budget) | SCOUT, BLITZ, GOLD L0-1 | Structural quality prevention |
| SonarQube integration | SCOUT, CITADEL (optional) | Objective quality metrics |
| Skill tracking with UNIFY audit | FORGE, CITADEL, GOLD L2+ | Continuous improvement |

#### From UI/UX Pro Max (4 innovations)

| Innovation | Used In Profiles | Impact |
|-----------|-----------------|--------|
| Industry reasoning rules (100 rules) | SPRINT, FORGE, CITADEL, GOLD L2+ | Auto-match project to optimal style + palette + typography |
| Design token system (colors, typography, spacing, shadows) | FORGE, CITADEL, GOLD L3+ | Machine-readable tokens drop directly into CSS/Tailwind |
| Anti-pattern database (per-industry) | FORGE, CITADEL, GOLD L2+ | Prevents industry-inappropriate design choices |
| Pre-delivery design checklist | FORGE, CITADEL, GOLD L2+ | Feeds into VERIFY step for design compliance |

#### APEX-Original (1 innovation)

| Innovation | Used In Profiles | Impact |
|-----------|-----------------|--------|
| Design-to-shard integration | FORGE, CITADEL, GOLD L2+ | Design tokens atomically distributed per task — executors get only relevant design context |

### 8.2 Innovation Density by Framework

| Framework | Innovations Contributed | In Core (Always-On) | In Profiles Only |
|-----------|------------------------|---------------------|-----------------|
| **PAUL** | 14 | **7** (most core contributions) | 7 |
| **BMAD** | 10 | 0 | 10 |
| **GSD** | 10 | 2 (state, deviations) | 8 |
| **M2C1** | 7 | 0 | 7 |
| **PRP** | 6 | 0 | 6 |
| **UI/UX Pro Max** | 4 | 0 | 4 |
| **APEX-Original** | 1 | 0 | 1 |

**Takeaway:** PAUL contributes the most to APEX's invariant core (mandatory UNIFY, context brackets, dynamic rules, BDD, issue deferral, handoff, single next action). BMAD contributes the most impactful execution optimization (document sharding). GSD contributes the most battle-tested infrastructure (state management, waves, hooks). M2C1 contributes the most thorough planning pipeline. PRP contributes the most token-efficient practices. UI/UX Pro Max fills the design intelligence gap that all five source frameworks lacked.

---

## 9. Configuration Schema

### 9.1 Full Configuration Reference

```json
{
  "apex": {
    "version": "1.0.0",
    "profile": "gold | blitz | sprint | forge | citadel | scout",
    "scale": "auto | L0 | L1 | L2 | L3 | L4",

    "planning": {
      "depth": "minimal | per-phase | upfront-thorough | exhaustive | codebase-first | scale-adaptive",
      "timing": "just-in-time | incremental | front-loaded | all-upfront | scale-adaptive",
      "research_waves": "0 | 1 | 2 | scale-adaptive",
      "research_depths": "1 | 3",
      "completeness_gate": "boolean",
      "synergy_review": "boolean",
      "skill_creation": "none | optional | mandatory"
    },

    "architecture": {
      "gate": "none | informal | review-only | solutioning-90 | scale-adaptive",
      "party_mode": "boolean",
      "role_constraints": "boolean"
    },

    "design": {
      "enabled": "boolean | auto (default: auto — skip for non-UI projects)",
      "depth": "skip | lightweight | standard | full | extract | scale-adaptive",
      "industry_rules": "boolean",
      "tokens": "boolean",
      "per_page_overrides": "boolean",
      "shard_integration": "boolean",
      "verification": "boolean",
      "user_approval": "boolean",
      "extract_existing": "boolean (SCOUT only)"
    },

    "sharding": {
      "strategy": "single-document | per-phase-plans | feature-scoped-plans | atomic-stories | scale-adaptive",
      "task_granularity": "feature | plan | shard",
      "token_budget_per_unit": "percentage (default: 50%)",
      "bdd_acceptance": "boolean (default: true)",
      "boundary_declarations": "boolean (default: true)",
      "error_patterns": "boolean",
      "skills_bundled": "boolean",
      "synergy_verified": "boolean",
      "design_context_included": "boolean"
    },

    "execution": {
      "model": "in-session | wave-parallel | wave-parallel-sharded | scale-adaptive",
      "max_concurrency": "1 | 2-3 | 3-5 | 5+",
      "subagents": "none | research-only | executors | executors+qa | executors+qa+specialist",
      "ralph_loop": "boolean",
      "ralph_threshold": "number (default: 3 retries)",
      "tdd_available": "boolean",
      "tdd_context_budget": "percentage (default: 40%)",
      "persistent_debug": "boolean"
    },

    "verification": {
      "qa_independence": "self | self+existing-tests | verifier | full | full-per-wave | scale-adaptive",
      "unify": "lightweight | standard | full | full+codebase-delta",
      "state_consistency": "off | advisory | blocking",
      "regression": "boolean",
      "goal_backward": "boolean",
      "uat": "boolean",
      "sonarqube": "off | optional | recommended",
      "pre_commit_hooks": "boolean"
    },

    "human": {
      "estimated_touches": "range",
      "plan_approval": "none | per-phase | per-plan",
      "architecture_decisions": "always-ask (immutable)"
    },

    "context": {
      "monitoring": "brackets-only | hooks | hooks+brackets",
      "quality_threshold": "percentage (default: 50%)",
      "hooks_enabled": "boolean"
    },

    "state": {
      "files": ["STATE.md", "PROJECT.md", "ROADMAP.md", "ISSUES.md"],
      "consistency_check": "off | advisory | blocking",
      "decision_locations": "1 | 2 | 3",
      "handoff_format": "implicit | explicit-dated",
      "resume_philosophy": "single-next-action"
    },

    "git": {
      "branching": "none | phase | milestone | feature | scale-adaptive",
      "commits": "per-feature | per-task",
      "milestone_tags": "boolean",
      "phase_commits": "boolean"
    },

    "rules_engine": {
      "mode": "static | dynamic-just-in-time",
      "core_rules": 12,
      "profile_rules": "injected per profile"
    },

    "codebase": {
      "analysis": "none | light | 7-doc",
      "delta_on_complete": "boolean",
      "convention_enforcement": "boolean"
    },

    "phase_overrides": {
      "<phase_number>": "<profile_name>"
    }
  }
}
```

### 9.2 Minimal Valid Configuration

```json
{
  "apex": {
    "profile": "gold"
  }
}
```

That's it. GOLD auto-detects everything else. Every other field has sensible defaults derived from the profile selection.

---

## 10. Estimated Performance

### 10.1 Comparative Performance (5-Phase, ~5K LOC Project)

| Metric | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| **Time to first code** | <5 min | 15-30 min | 1-2 hr | 2-4 hr | 30-60 min | Scale-adaptive |
| **Total time** | 1-3 hr | 4-8 hr | 3-6 hr | 5-10 hr | 6-12 hr | 3-8 hr |
| **Human touchpoints** | 3-5 | 10-18 | 8-15 | 12-20 | 12-20 | 3-18 |
| **Token cost** | 200-500K | 0.8-1.5M | 0.3-0.8M | 0.5-1.2M | 0.6-1.2M | 0.2-1.2M |
| **Overhead ratio** | 15% | 35% | 40% | 55% | 45% | 10-50% |
| **Defect rate** | High | Medium | Low | Very Low | Low | Scale-adaptive |
| **Orphan work** | Possible | Unlikely | None | None | None | None |
| **Session recovery** | Poor | Good | Excellent | Excellent | Excellent | Excellent |

### 10.2 FORGE vs. Individual Frameworks (Best Comparison)

FORGE is the closest comparison to the existing frameworks because it targets the same use case (production apps) with the combined innovations.

| Metric | GSD | M2C1 | PRP x5 | BMAD | PAUL | **FORGE** |
|--------|-----|------|--------|------|------|-----------|
| Total time | 8-16h | 6-12h | 3-8h | 6-12h | 8-16h | **3-6h** |
| Human touches | 25-35 | 8-12 | 15-25 | 15-25 | 30-40 | **8-15** |
| Token cost | 1.5-3M | 1-2M | 0.5-1.5M | 0.4-1M | 0.8-1.5M | **0.3-0.8M** |
| Orphan work risk | Medium | High | Medium | Medium | None | **None** |
| Defect rate | Low | Low | Medium | Very Low | Low | **Very Low** |
| Session recovery | Good | Poor | Poor | Fair | Excellent | **Excellent** |

**How FORGE achieves this:**
- BMAD's sharding slashes token costs (74-90% per execution unit)
- GSD's wave-parallelism enables concurrent execution
- M2C1's upfront planning eliminates per-phase re-planning
- PRP's info-density reduces planning artifact size
- PAUL's mandatory UNIFY eliminates orphan work
- PAUL's state consistency prevents drift
- BMAD's independent QA catches self-review blind spots

### 10.3 Process Overhead Visualization

```
BLITZ:     ██░░░░░░░░░░░░░░░░░░  15% overhead, 85% coding
           Fast and loose. Ship it.

SPRINT:    ██████░░░░░░░░░░░░░░  35% overhead, 65% coding
           Plan each phase, execute in waves, verify.

FORGE:     ████████░░░░░░░░░░░░  40% overhead, 60% coding
           BUT total tokens ~60-80% less than GSD/M2C1 due to sharding.
           Front-loaded planning, parallel sharded execution, independent QA.

CITADEL:   ███████████░░░░░░░░░  55% overhead, 45% coding
           Maximum rigor. Every assumption challenged, every output verified.
           Token cost offset by sharding — still cheaper than GSD.

SCOUT:     █████████░░░░░░░░░░░  45% overhead, 55% coding
           Understanding IS the work. Codebase analysis is production value.

GOLD:      ██─────████──████░░░  10-50% overhead (adaptive)
           Overhead matches project scale. L0 = BLITZ. L4 = near-CITADEL.
```

---

## Appendix A: Profile Selection Cheat Sheet

```
Need it NOW?           --> BLITZ
Building for myself?   --> SPRINT
Building for others?   --> FORGE
Can't afford bugs?     --> CITADEL
Modifying old code?    --> SCOUT
Not sure?              --> GOLD
```

## Appendix B: Naming Rationale

| Profile | Name Meaning | Connotation |
|---------|-------------|-------------|
| BLITZ | Lightning warfare | Speed, decisiveness, momentum |
| SPRINT | Short focused burst | Steady pace, consistent delivery |
| FORGE | Where metal is shaped | Craftsmanship, heat, deliberate creation |
| CITADEL | Fortified stronghold | Impenetrable quality, maximum defense |
| SCOUT | Reconnaissance specialist | Understanding terrain before advancing |
| GOLD | Gold standard | The objective benchmark, the default |

## Appendix C: Framework Attribution Summary

APEX stands on the shoulders of six frameworks. Every innovation is attributed. Nothing is claimed as original — the originality is in the *combination and adaptation* of these proven approaches into a unified, profile-driven system.

| Framework | Primary Contribution to APEX |
|-----------|------------------------------|
| **GSD** | Execution infrastructure (waves, hooks, state, multi-runtime) |
| **M2C1** | Planning depth (completeness gates, 2-wave research, skill creation) |
| **PRP** | Token efficiency (info-density, error patterns, feature-scoping) |
| **BMAD** | Execution efficiency (document sharding, scale adaptation, independent QA, Party Mode) |
| **PAUL** | Quality assurance (mandatory UNIFY, context brackets, dynamic rules, boundary enforcement, persistent debug, state consistency) |
| **UI/UX Pro Max** | Design intelligence (industry reasoning rules, style/palette/typography matching, design anti-patterns, design verification) |

## Appendix D: Source Framework Repositories

All source frameworks are open source. These URLs should be used to study source implementations when building MIKE.

| Framework | Repository | Key Files to Study |
|-----------|-----------|-------------------|
| **GSD** | https://github.com/gsd-build/get-shit-done | `agents/`, `commands/`, `workflows/`, `templates/`, `hooks/`, `bin/install.js` |
| **M2C1** | https://github.com/grandamenium/m2c1 | Single skill file — complete workflow in one markdown document |
| **PRP** | https://github.com/Wirasm/PRPs-agentic-eng | PRP templates, Ralph Loop specification |
| **BMAD** | https://github.com/bmad-code-org/BMAD-METHOD | `bmad-agent/`, `bmad-core/personas/`, document sharding, scale-adaptive intelligence |
| **PAUL** | https://github.com/ChristopherKahler/paul | `commands/`, `workflows/`, `templates/`, `references/`, CARL rules engine |
| **UI/UX Pro Max** | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | `src/ui-ux-pro-max/data/` (styles.csv, colors.csv, typography.csv, ui-reasoning.csv, products.csv, landing.csv), `scripts/design_system.py`, `templates/base/skill-content.md` |

---

*This document defines the architecture and philosophy of APEX. Implementation requires translating these profiles into executable workflows, commands, and tooling.*
