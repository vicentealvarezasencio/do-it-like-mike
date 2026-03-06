# Acceptance Criteria — BDD Format Reference

> How to write acceptance criteria in MIKE.

---

## Format

All acceptance criteria use BDD (Behavior-Driven Development) Given/When/Then format:

```
AC-{N}: Given {precondition}, when {action}, then {expected_result}
```

## Rules

1. **Define BEFORE tasks** (R9) — AC are defined in PLAN.md before task breakdown
2. **Testable** — Each AC must be verifiable with a specific command or check
3. **Atomic** — One behavior per AC (don't combine multiple checks)
4. **Independent** — Each AC can be verified independently
5. **Complete** — All AC together fully describe the phase goal

## Examples

### Good AC
- AC-1: Given a new project directory, when `/mike:init` runs, then `.mike/` directory exists with config.json, state.json, STATE.md, PROJECT.md, ROADMAP.md
- AC-2: Given a PLAN.md with 5 tasks, when `/mike:shard` runs, then 5 SHARD files exist in `.mike/phases/{N}/shards/`
- AC-3: Given DESIGN.md with color tokens, when the executor creates components, then all colors use CSS variables (no hardcoded hex)

### Bad AC
- AC-X: The system works correctly (too vague)
- AC-Y: Code is clean and well-structured (subjective)
- AC-Z: Given many things, when everything happens, then it all works (not atomic)

## AC in Shards

When sharding, each shard receives ONLY the AC it must satisfy. This keeps executors focused on their specific acceptance criteria.

## Verification

During `/mike:verify`, the verifier checks each AC:
| AC | Description | Result | Evidence |
|----|-------------|--------|----------|
| AC-1 | {desc} | PASS | {specific evidence} |
| AC-2 | {desc} | FAIL | {what went wrong} |
