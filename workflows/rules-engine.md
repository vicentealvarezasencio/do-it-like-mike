# Workflow: Dynamic Rules Engine

Loads and enforces MIKE rules just-in-time based on current context. Adapted from PAUL's CARL system.

---

## Philosophy

Instead of loading all rules into every session (wasting tokens), rules are injected dynamically based on:
1. The current pipeline step (EXECUTE, PLAN, UNIFY, etc.)
2. The active profile and scale level
3. The specific agent being spawned

This keeps agent prompts lean while ensuring critical rules are always present.

---

## Rule Registry

All rules are defined in `references/rules.md`. The engine loads subsets based on context.

### Core Rules (Always Loaded)

These 6 CRITICAL rules are loaded into EVERY agent and EVERY command:

| Rule | Summary |
|------|---------|
| R1 | No implementation without approved plan |
| R2 | Every execution unit followed by UNIFY |
| R3 | Respect boundary declarations |
| R4 | Architectural decisions require user confirmation |
| R5 | State consistency at transitions (FORGE+ only) |
| R6 | Context bracket strategies are binding |

### Contextual Rules

Loaded based on the current pipeline step:

| Context | Additional Rules |
|---------|-----------------|
| Planning (`/mike:plan`, `/mike:shard`) | R9 (AC first), R12 (error patterns — FORGE+) |
| Execution (`/mike:execute`) | R7 (atomic commits), R8 (issue deferral), R9 (AC first) |
| Closure (`/mike:unify`) | R7 (commit audit), R8 (deferred issues review) |
| Session (`/mike:resume`, `/mike:pause`) | R10 (summary-before-full), R11 (single next action) |
| Transition (`/mike:transition`) | R5 (state consistency) |

---

## How Rules Are Injected

### Into Agent Prompts

When spawning a subagent (e.g., `mike-executor`), the lead includes the relevant rules in the agent's prompt:

```
## Active Rules
- **R1 (CRITICAL):** No implementation without approved plan. Your shard IS your plan.
- **R3 (CRITICAL):** Respect boundary declarations. DO NOT CHANGE files listed in Boundaries section.
- **R7 (QUALITY):** Atomic commits per task: mike(phase-{N}): {description}
- **R8 (QUALITY):** Issues outside scope → ISSUES.md, not current task.
```

### Into Command Workflows

Each command workflow specifies which rules apply. The lead reads the workflow, sees the rule list, and enforces them during execution.

---

## Rule Enforcement Protocol

### CRITICAL Rules — Hard Enforcement

If a CRITICAL rule is violated:
1. **STOP** the current action
2. **Report** the violation to the user
3. **Block** progress until the violation is resolved

Example: Executor tries to modify a file in the DO NOT CHANGE list (R3 violation)
```
BLOCKED: R3 violation — attempted to modify `src/auth/middleware.js` which is
declared as DO NOT CHANGE in SHARD-03.md.

Options:
1. Skip this modification (may leave task incomplete)
2. Confirm override (you explicitly approve the change)
3. Revise the plan to avoid this file
```

### QUALITY Rules — Soft Enforcement

If a QUALITY rule is violated:
1. **Log** the deviation in the current execution context
2. **Continue** work
3. **Report** in SUMMARY.md during UNIFY

### PATTERN Rules — Advisory

If a PATTERN rule is not followed:
1. **Note** in internal context (not reported unless relevant)
2. **Continue** normally

---

## Profile-Specific Rule Extensions

Some profiles add rules beyond the core 12:

| Profile | Additional Rules |
|---------|-----------------|
| CITADEL | Party mode governance: multi-agent debate protocol, consensus requirements |
| SCOUT | Codebase boundary: new code must conform to documented conventions |
| GOLD L4 | All CITADEL rules apply |
