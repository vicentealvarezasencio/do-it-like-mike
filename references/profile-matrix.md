# Profile Matrix

Complete behavior matrix for all commands across all profiles. This is the authority reference for how each command adapts to the active profile.

---

## Command Behavior by Profile

### /mike:init

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Questions | 1-3 sentences | 5-10 adaptive | 10-15 deep | Brain dump + structured extraction | Codebase-first | L0: 1-3, L1: 5-10, L2: 10-15, L3-L4: deep |
| PROJECT.md | Minimal | Standard | Detailed | Comprehensive | Codebase-augmented | Scale-adaptive |
| ROADMAP.md | 1 phase | Multi-phase | Multi-phase + milestones | Multi-phase + milestones + DISCOVERY.md | Feature-scoped | Scale-adaptive |

### /mike:discover

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Behavior | Skip (inline in init) | Standard PRD | PRD + completeness gate | Full DISCOVERY.md (authority doc) | PRP + codebase intel | Scale-adaptive |
| Output | — | PROJECT.md updated | PROJECT.md + REQ-IDs | PROJECT.md + DISCOVERY.md | PROJECT.md + codebase context | Scale-adaptive |
| Completeness gate | No | No | Yes (>=80%) | Yes (>=80%) | No | L3+: Yes |

### /mike:research

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Behavior | Skip | 1 wave quick | 2 waves + skills | 2 waves + deep + skills | 3 depths (codebase, docs, web) | Scale-adaptive |
| Parallel agents | 0 | 1-2 | 2-4 | 2-4 | 3-4 (mapper-aware) | L0-L1: 0, L2: 2, L3-L4: 4 |
| Output | — | RESEARCH.md | RESEARCH.md | RESEARCH.md (comprehensive) | RESEARCH.md + codebase context | Scale-adaptive |

### /mike:architect

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Behavior | Skip | Skip | Solutioning gate >=90% | Gate + party mode | Review-only | L0-L2: Skip, L3: Gate, L4: Gate + party |
| Gate | — | — | 10-dim, >=90%, max 3 iterations | 10-dim, >=90%, max 3 iterations | Informational (no gate) | Scale-adaptive |
| Party mode | No | No | No | Yes (3 reviewers) | No | L4 only |
| Output | — | — | ARCHITECTURE.md | ARCHITECTURE.md + reviewer feedback | ARCHITECTURE.md (existing analysis) | Scale-adaptive |

### /mike:design

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Behavior | Skip | Lightweight (auto) | Standard (full system) | Full (per-page + approval) | Extract (reverse-engineer) | Scale-adaptive |
| User approval | — | No (auto-generated) | Yes | Yes (explicit per-page review) | No (extraction) | L3+: Yes |
| design-tokens.json | No | No | Yes | Yes | No (extract existing) | L3+: Yes |
| Output | — | DESIGN.md (basic) | DESIGN.md + tokens.json | DESIGN.md + tokens.json + per-page specs | DESIGN.md (extracted) | Scale-adaptive |

### /mike:discuss

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Behavior | Skip | Adaptive questioning | Adaptive + deeper | Full (comprehensive context gathering) | Feature-focused | Scale-adaptive |
| Output | — | CONTEXT.md | CONTEXT.md | CONTEXT.md (comprehensive) | CONTEXT.md (codebase-aware) | Scale-adaptive |

### /mike:plan

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Behavior | Skip (inline tasks) | Per-phase plan | Full plan + checker loop | Full plan + checker loop + error patterns | Feature plan + boundaries | Scale-adaptive |
| Plan checker | No | Yes (1 round) | Yes (max 3 rounds) | Yes (max 3 rounds) | Yes (1 round) | L2+: Yes |
| Error patterns | No | No | Yes | Yes | No | L3+: Yes |
| Output | — | PLAN.md | PLAN.md (detailed) | PLAN.md (comprehensive) | PLAN.md (scoped) | Scale-adaptive |

### /mike:shard

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Behavior | Skip | Skip | Full atomic sharding | Full + synergy review | Skip | L0-L2: Skip, L3: Full, L4: Full + synergy |
| Design context | — | — | Yes | Yes | — | L3+: Yes |
| Synergy review | No | No | No | Yes (5 checks) | No | L4 only |
| Output | — | — | SHARD-{NN}.md files | SHARD-{NN}.md + synergy report | — | Scale-adaptive |

### /mike:execute

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Model | In-session sequential | Wave-parallel (2-3) | Wave-parallel sharded (3-5) | Wave-parallel sharded (5+) | In-session sequential | Scale-adaptive |
| Input | Inline task list | PLAN.md tasks | SHARD files | SHARD files | PLAN.md tasks | Scale-adaptive |
| Max concurrency | 1 | 3 | 5 | 5+ | 1 | L0: 1, L1: 2, L2: 3, L3: 5, L4: 5+ |

### /mike:verify

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Layers | 1-2 (build + test) | 1-3 (+ goal-backward) | 1-4 (+ design compliance) | 1-6 (+ regression + security) | 1-3 (+ existing tests) | Scale-adaptive |
| Independent agent | No | Yes | Yes | Yes | No | L2+: Yes |
| Regression check | No | No | No | Yes (cross-phase) | No | L4 only |
| Security scan | No | No | No | Yes (OWASP + secrets + deps) | No | L4 only |

### /mike:unify

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Depth | Lightweight (<30 lines) | Standard (<100 lines) | Full (<150 lines) | Full + synergy (<200 lines) | Full + codebase delta | Scale-adaptive |
| Shard report | No | No | Yes | Yes | No | L3+: Yes |
| Synergy assessment | No | No | No | Yes (cross-shard coherence) | No | L4 only |
| False positive notes | No | No | No | Yes | No | L4 only |
| Codebase delta | No | No | No | No | Yes | No |

### /mike:transition

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Behavior | Minimal (state update) | Standard (state consistency) | Full (3-file check) | Full (3-file check + review) | Standard + codebase check | Scale-adaptive |
| State consistency check | No | Yes | Yes (R5 blocking) | Yes (R5 blocking) | Yes | L2+: Yes |

### /mike:complete

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Behavior | Done (no ceremony) | Standard archive | Full archive + retro | Full archive + retro + codebase re-analysis | Full archive + 7-doc refresh | Scale-adaptive |
| Retrospective | No | No | Yes | Yes (comprehensive) | Yes | L3+: Yes |

---

## Profile Summary

| Profile | Target Use Case | Planning Depth | Execution Model | Verification Rigor |
|---------|----------------|---------------|-----------------|-------------------|
| BLITZ | Quick tasks, bug fixes, config changes | None (inline) | Sequential, in-session | Build + test only |
| SPRINT | Standard features, multi-phase work | Per-phase plans, 1 research wave | 2-3 parallel executors | Goal-backward analysis |
| FORGE | Complex features, design-heavy projects | Front-loaded: discover + research + architect + design + shard | 3-5 parallel sharded executors | Independent QA + design compliance |
| CITADEL | Mission-critical, maximum rigor | Front-loaded + party mode + synergy review | 5+ parallel sharded executors | 6-layer (+ regression + security) |
| SCOUT | Brownfield, existing codebases | Codebase-first: map before plan | Sequential, in-session | Self-verify + existing tests |
| GOLD | Auto-adaptive (detects scale L0-L4) | Scale-adaptive | Scale-adaptive | Scale-adaptive |

---

## GOLD Scale Level Mapping

| Scale | Equivalent Profile | Trigger |
|-------|-------------------|---------|
| L0 (Atomic) | BLITZ | Quick fix, <=2 files |
| L1 (Minor) | SPRINT-lite | <=10 files, <=5 requirements |
| L2 (Standard) | SPRINT | 10-50 files, 5-15 requirements |
| L3 (Major) | FORGE | 50+ files, 15+ requirements, 5+ phases |
| L4 (Enterprise) | CITADEL | 100+ files, 30+ requirements, complex integrations |

---

## Rules Active by Profile

| Rule | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|------|-------|--------|-------|---------|-------|------|
| R1 (No impl without plan) | Always | Always | Always | Always | Always | Always |
| R2 (UNIFY mandatory) | Always | Always | Always | Always | Always | Always |
| R3 (Boundaries) | Always | Always | Always | Always | Always | Always |
| R4 (Arch decisions) | Always | Always | Always | Always | Always | Always |
| R5 (State consistency) | No | No | Yes | Yes | No | L2+: Yes |
| R6 (Context brackets) | Always | Always | Always | Always | Always | Always |
| R7 (Atomic commits) | Always | Always | Always | Always | Always | Always |
| R8 (Issue deferral) | Always | Always | Always | Always | Always | Always |
| R9 (AC before tasks) | Always | Always | Always | Always | Always | Always |
| R10 (Summary-before-full) | Always | Always | Always | Always | Always | Always |
| R11 (Single next action) | Always | Always | Always | Always | Always | Always |
| R12 (Error patterns) | No | No | Yes | Yes | No | L3+: Yes |

---

## Agent Usage by Profile

| Agent | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|-------|-------|--------|-------|---------|-------|------|
| mike-executor | In-session | Parallel (2-3) | Sharded parallel (3-5) | Sharded parallel (5+) | In-session | Scale-adaptive |
| mike-researcher | No | 1-2 parallel | 2-4 parallel | 2-4 parallel | 3-4 parallel | Scale-adaptive |
| mike-synthesizer | No | Yes (1 wave) | Yes (2 waves) | Yes (2 waves) | Yes | Scale-adaptive |
| mike-planner | No | Yes | Yes | Yes | Yes | L1+: Yes |
| mike-plan-checker | No | Yes (1 round) | Yes (max 3) | Yes (max 3) | Yes (1 round) | L2+: Yes |
| mike-verifier | No | Yes | Yes | Yes | No | L2+: Yes |
| mike-sharder | No | No | Yes | Yes | No | L3+: Yes |
| mike-designer | No | Auto (lightweight) | Yes (full) | Yes (full + per-page) | Extraction mode | Scale-adaptive |
| mike-codebase-mapper | No | No | No | No | Yes (4 parallel) | L3+: Optional |
| mike-debugger | On demand | On demand | On demand | On demand | On demand | On demand |

---

## CITADEL-Specific Features

Features exclusive to CITADEL (and GOLD L4):

| Feature | Where | Description |
|---------|-------|-------------|
| DISCOVERY.md | /mike:discover | Authority document capturing comprehensive requirements |
| Party Mode | /mike:architect | 3-reviewer multi-perspective architecture review |
| Synergy Review | /mike:shard | 5-check cross-shard coherence analysis |
| 6-Layer Verification | /mike:verify | Adds regression (Layer 5) and security (Layer 6) |
| Cross-Shard Coherence | /mike:unify | Assessment in SUMMARY.md |
| False Positive Notes | /mike:unify | Documenting QA flags that aren't real issues |
| Role Constraints | All agents | CITADEL-level governance enforcing strict role boundaries |
| 3-File Transition Check | /mike:transition | STATE.md + PROJECT.md + ROADMAP.md consistency |
| Comprehensive Retro | /mike:complete | Full retrospective with codebase re-analysis |
