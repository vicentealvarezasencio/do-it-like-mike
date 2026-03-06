# Deviation Rules

When an executor encounters something unexpected during implementation, deviations are classified into 4 levels. Each level has a specific response protocol.

---

## Deviation Priority Levels

### Level 1 — Auto-fix Bugs (No Confirmation)

**What:** A bug is discovered in existing code or a test fails due to a pre-existing issue.

**Protocol:** Fix it immediately. Log the fix in the task completion notes.

**Example:**
- Typo in existing function name
- Missing import that was already broken
- Off-by-one error in existing loop

**Log format:**
```
DEV-{N}: Auto-fixed bug — {description}
```

---

### Level 2 — Auto-add Critical Dependencies (No Confirmation)

**What:** A required dependency is missing and the task cannot proceed without it.

**Protocol:** Add the dependency using the project's package manager. Log the addition.

**Example:**
- Missing npm package needed for the task
- Missing type definitions (@types/*)
- Missing peer dependency

**Log format:**
```
DEV-{N}: Auto-added dependency — {package}@{version} ({reason})
```

---

### Level 3 — Auto-fix Blockers (Simplest Approach, No Confirmation)

**What:** An unexpected blocker prevents task completion, but a simple workaround exists.

**Protocol:** Apply the simplest possible fix. Do not over-engineer. Log the deviation with rationale.

**Example:**
- API endpoint returns different shape than documented — adapt
- File path changed since plan was created — update reference
- Version incompatibility — pin to compatible version

**Log format:**
```
DEV-{N}: Auto-fixed blocker — {description}. Approach: {what_was_done}
```

---

### Level 4 — ASK for Architectural Changes (Confirmation Required)

**What:** The deviation involves a structural or architectural change that could affect other parts of the system.

**Protocol:** STOP. Present the issue, options, and recommendation to the user. Wait for approval.

**Example:**
- Need to change database schema
- Need to introduce new design pattern
- Need to restructure component hierarchy
- Need to change API contract
- Need to modify files in DO NOT CHANGE list (R3)

**Log format:**
```
CHECKPOINT: Architectural decision required — {description}
  Option A: {description} — {pros/cons}
  Option B: {description} — {pros/cons}
  Recommendation: {which_option_and_why}
```

---

## Deviation Tracking

All deviations are recorded in SUMMARY.md during UNIFY:

```markdown
## Deviations
| # | Level | What Changed | Why | Impact |
|---|-------|-------------|-----|--------|
| DEV-1 | L1 | Fixed typo in utils.js | Pre-existing bug | None |
| DEV-2 | L3 | Pinned react to 18.2 | Version incompatibility | Minor — locked version |
```

---

## Analysis Paralysis Guard

If an executor spends more than 3 attempts on the same problem:
1. Log the issue
2. Move to the next task (if independent)
3. Flag the blocked task for lead attention
4. If configured, trigger Ralph Loop (fresh context retry)

This prevents infinite loops on edge cases.
