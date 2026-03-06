# MIKE Dynamic Rules

Rules are loaded just-in-time based on the current context. This prevents static prompt bloat — agents only receive the rules relevant to their current task.

---

## Rule Severity Levels

| Level | Enforcement | Consequence of Violation |
|-------|------------|------------------------|
| **CRITICAL** | MUST be followed | Violation blocks progress |
| **QUALITY** | SHOULD be followed | Violation logged in SUMMARY.md deviations |
| **PATTERN** | MAY be followed | Best practice, not enforced |

---

## R1 — No Implementation Without Plan (CRITICAL)

**When active:** Always
**Applies to:** All agents, all profiles

No code changes may be made without an approved plan. For BLITZ, the plan is the inline task list from `/mike:init`. For SPRINT+, the plan is `PLAN.md`. For FORGE+, the plan is sharded into `SHARD-{NN}.md` files.

**Enforcement:** If an executor agent is spawned without a corresponding plan or shard, it must halt and report the violation.

---

## R2 — Mandatory UNIFY Closure (CRITICAL)

**When active:** Always
**Applies to:** All profiles

Every execution unit must be followed by a UNIFY step that produces `SUMMARY.md`. No new work begins until the current unit is closed. This creates an unbroken audit trail across sessions and prevents the "drift and forget" pattern.

**Enforcement:** `/mike:transition` checks for SUMMARY.md existence. Missing SUMMARY blocks phase transition.

---

## R3 — Respect Boundary Declarations (CRITICAL)

**When active:** Always
**Applies to:** All agents

Plans and shards declare `DO NOT CHANGE` files and `SCOPE LIMITS`. Agents must not modify files listed in boundary declarations without explicit user confirmation.

**Enforcement:** Before modifying any file, check if it appears in the current plan/shard boundaries. If it does, stop and ask the user.

---

## R4 — Architectural Decisions Require Confirmation (CRITICAL)

**When active:** Always
**Applies to:** All agents

Auto-fix bugs, auto-add critical dependencies, auto-fix blockers using the simplest approach. But architectural changes (new patterns, technology choices, structural reorganization) require user confirmation.

**Enforcement:** Executor agents must classify deviations into the 4-level hierarchy (see `deviation-rules.md`) and only auto-fix levels 1-3.

---

## R5 — State Consistency at Transitions (CRITICAL)

**When active:** FORGE+ and GOLD L2+
**Applies to:** `/mike:transition`, `/mike:complete`

STATE.md, PROJECT.md, and ROADMAP.md must align at every phase/milestone boundary. Misalignment is BLOCKING — the transition cannot proceed until files are reconciled.

**Checks:**
- Phase status in STATE.md matches ROADMAP.md
- Decisions in STATE.md are reflected in PROJECT.md
- Current position in STATE.md is consistent with completed phases

---

## R6 — Context Bracket Strategies (CRITICAL)

**When active:** Always
**Applies to:** All agents and lead

Context brackets define mandatory strategies based on remaining context window capacity. See `context-brackets.md` for full definitions.

**Enforcement:** At CRITICAL (<20%), complete ONLY the current task and prepare HANDOFF. Do not start new work.

---

## R7 — Atomic Commits (QUALITY)

**When active:** Always
**Applies to:** Executor agents

Each task produces one atomic commit using the conventional format:
```
mike({phase}-{shard}): {description}
```

For non-sharded execution (BLITZ/SPRINT):
```
mike(phase-{N}): {description}
```

**Enforcement:** Logged in SUMMARY.md. Deviations noted but not blocking.

---

## R8 — Issue Deferral (QUALITY)

**When active:** Always
**Applies to:** All agents

Discovered enhancements, tech debt, or non-blocking bugs that are outside the current scope go to ISSUES.md, not into the current execution unit. No scope creep during execution.

**Enforcement:** Executor agents must check if discovered work falls within the current plan/shard scope. If not, log to ISSUES.md.

---

## R9 — Acceptance Criteria First (QUALITY)

**When active:** Always
**Applies to:** Planner, sharder agents

Acceptance criteria must be defined before tasks, using BDD format (Given/When/Then). AC are first-class citizens — they are testable, specific, and drive the definition of "done."

**Enforcement:** `/mike:plan` and `/mike:shard` validate that AC exist before producing output.

---

## R10 — Summary-Before-Full (PATTERN)

**When active:** Always
**Applies to:** Session management (resume, transition)

When resuming or transitioning, read SUMMARY.md (digest) instead of PLAN.md (full spec) to preserve context. Only read PLAN.md if SUMMARY.md is insufficient.

**Rationale:** Summaries are < 100 lines vs plans that can be 300+ lines. In deep context, this saves significant tokens.

---

## R11 — Single Next Action (PATTERN)

**When active:** Always
**Applies to:** `/mike:progress`, `/mike:resume`, SUMMARY.md

Always suggest ONE action, not a menu. Eliminate decision fatigue. The user can always ask for alternatives, but the default is a single confident recommendation.

**Example:** `--> /mike:execute` not "You could run /mike:execute, or /mike:verify, or /mike:plan..."

---

## R12 — Error Pattern Documentation (PATTERN)

**When active:** FORGE+
**Applies to:** Planner, sharder agents

Known failure modes should be documented in planning artifacts (PLAN.md, SHARD.md) for proactive error recovery. This is PRP's innovation — pre-documenting error patterns prevents executors from getting stuck.

**Format:**
```
| Pattern | Symptom | Fix Strategy |
|---------|---------|-------------|
```

---

## Rule Loading by Context

| Context | Rules Loaded |
|---------|-------------|
| **Always** | R1, R2, R3, R4, R6 (CRITICAL core) |
| **Execution** | + R7, R8, R9 (QUALITY) |
| **Planning** | + R9, R12 (AC + error patterns) |
| **Session management** | + R10, R11 (PATTERN) |
| **Transitions** | + R5 (state consistency) |
| **FORGE+ only** | + R5, R12 (state + patterns) |
