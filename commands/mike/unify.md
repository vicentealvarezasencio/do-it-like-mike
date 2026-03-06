---
name: mike:unify
description: Mandatory closure — SUMMARY.md reconciliation (R2)
allowed-tools: [Read, Write, Bash, Glob, Grep]
---

<objective>
Produce the mandatory SUMMARY.md that closes the current execution unit. This is the UNIFY step — adapted from PAUL's mandatory loop closure innovation.

**Rule R2 (CRITICAL):** Every execution unit MUST be followed by UNIFY. No new work begins until closure.

UNIFY reconciles planned vs. actual outcomes, logs deviations, verifies acceptance criteria, and updates state.

**When to use:** After `/mike:execute` completes (or after `/mike:verify` for SPRINT+).
</objective>

<execution_context>
@~/.claude/do-it-like-mike/workflows/unify.md
@~/.claude/do-it-like-mike/references/rules.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/config.json
@.mike/ROADMAP.md
</context>

<process>

<step name="resolve_depth">
Determine UNIFY depth based on profile:

| Profile | Depth | Max Lines |
|---------|-------|-----------|
| BLITZ / GOLD L0-L1 | Lightweight | < 30 lines |
| SPRINT / GOLD L2 | Standard | < 100 lines |
| FORGE / GOLD L3 | Full | < 150 lines |
| CITADEL / GOLD L4 | Full + synergy | < 200 lines |
| SCOUT | Full + codebase delta | < 150 lines |
</step>

<step name="gather_evidence">
Read execution artifacts to build the summary:

1. **PLAN.md or inline task list** — what was planned
2. **Git log for this phase** — what was actually committed
3. **VERIFICATION.md** (if exists) — QA results
4. **Any error logs or deviation notes** from execution
5. **ISSUES.md** — check for newly deferred issues

Compare planned vs. actual:
- Were all tasks completed?
- Were acceptance criteria met?
- Were there deviations?
- Were there deferred issues?
</step>

<step name="write_lightweight_summary">
**For BLITZ / GOLD L0-L1:**

Write `.mike/phases/{N}-{name}/SUMMARY.md`:

```markdown
# Summary — Phase {N}: {PHASE_NAME}

## What Was Built
{Brief description of what was done}

## Acceptance Criteria
| AC | Result |
|----|--------|
| AC-1 | PASS / FAIL |

## Issues Deferred
{List or "None"}

## Next
--> {NEXT_ACTION}
```
</step>

<step name="write_standard_summary">
**For SPRINT / GOLD L2:**

Write `.mike/phases/{N}-{name}/SUMMARY.md`:

```markdown
# Summary — Phase {N}: {PHASE_NAME}

## What Was Planned
{Original objective from PLAN.md}

## What Was Built
{Actual outcome — what was delivered}

## Acceptance Criteria Results
| AC | Description | Result | Evidence |
|----|-------------|--------|----------|
| AC-1 | {desc} | PASS | {evidence} |
| AC-2 | {desc} | FAIL | {why} |

## Deviations
| # | What Changed | Why | Impact |
|---|-------------|-----|--------|
| DEV-1 | {change} | {reason} | {impact} |

## Decisions Made
| # | Decision | Context |
|---|----------|---------|
| D-{N} | {decision} | {context} |

## Issues Deferred
| ID | Description | Type | Impact | Suggested Phase |
|----|-------------|------|--------|-----------------|
| ISS-{N} | {desc} | {type} | {impact} | {phase} |

## Metrics
| Metric | Value |
|--------|-------|
| Tasks Completed | {N}/{TOTAL} |
| Commits | {N} |

## Next
--> {SINGLE_NEXT_ACTION}
```
</step>

<step name="write_full_summary">
**For FORGE / CITADEL / GOLD L3-L4:**

Same as Standard, plus:

```markdown
## Shard Execution Report
| Shard | Status | Commit | Deviations |
|-------|--------|--------|------------|
| SHARD-01 | PASS | {hash} | 0 |
| SHARD-02 | PASS | {hash} | 1 (DEV-1) |

## Skill Audit
| Required Skill | Invoked | Notes |
|----------------|---------|-------|
| {skill} | yes/no | {notes} |

## State Consistency Check
| File | Consistent | Notes |
|------|-----------|-------|
| STATE.md ↔ ROADMAP.md | PASS | |
| STATE.md ↔ PROJECT.md | PASS | |
| Decisions alignment | PASS | |
```

**CITADEL additions:**
- Cross-shard coherence assessment
- False positive notes (things QA flagged that aren't real issues)
- Synergy review results

**SCOUT additions:**
- Codebase delta (what changed in the codebase structure)
- Convention compliance check
</step>

<step name="update_state">
After writing SUMMARY.md:

1. **Update state.json:**
   - `phase_status`: "executed" → "unified" (or "complete")
   - `loop_position`: "UNIFY"
   - `session.last_command`: "/mike:unify"
   - Append decisions to `decisions` array
   - Append deferred issues to `deferred_issues` array

2. **Update STATE.md:**
   - Refresh current position
   - Add new decisions to decisions table
   - Update next action

3. **Update ROADMAP.md:**
   - Mark current phase status as "complete"

4. **Update ISSUES.md** (if deferred issues exist):
   - Append new issues with ISS-{N} IDs

5. **Update PROJECT.md** (if new decisions were made):
   - Add decisions to the decisions table
</step>

<step name="route_next">
Determine next action:

- If more phases remain: `--> /mike:transition`
- If this was the last phase in the milestone: `--> /mike:complete`
- If BLITZ standalone: "Done!"

Display exactly ONE next action (R11).
</step>

</process>

<success_criteria>
- [ ] SUMMARY.md written at appropriate depth
- [ ] Planned vs actual reconciliation complete
- [ ] All deviations logged
- [ ] All decisions recorded (in SUMMARY, STATE, PROJECT)
- [ ] All deferred issues logged to ISSUES.md
- [ ] State files updated and consistent
- [ ] Single next action suggested
</success_criteria>
