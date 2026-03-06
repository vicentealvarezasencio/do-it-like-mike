# Workflow: UNIFY (Mandatory Closure)

Adapted from PAUL's mandatory UNIFY phase — the innovation that creates an unbroken audit trail across sessions.

---

## Purpose

UNIFY reconciles planned vs. actual work, producing a SUMMARY.md that:
1. Documents what was actually built (vs. what was planned)
2. Records all deviations with rationale
3. Logs decisions made during execution
4. Defers out-of-scope issues to ISSUES.md
5. Verifies acceptance criteria
6. Updates all state files for consistency

---

## Rule: R2 (CRITICAL)

Every execution unit MUST produce a SUMMARY.md via UNIFY before any new work begins. This is non-negotiable across all profiles.

---

## Workflow Steps

### 1. Determine Depth

Read `config.json` profile and resolve the UNIFY depth:

| Profile | Template |
|---------|----------|
| BLITZ / GOLD L0-L1 | Lightweight (< 30 lines) |
| SPRINT / GOLD L2 | Standard (< 100 lines) |
| FORGE / GOLD L3 | Full (< 150 lines) |
| CITADEL / GOLD L4 | Full + synergy (< 200 lines) |
| SCOUT | Full + codebase delta (< 150 lines) |

### 2. Gather Evidence

Read these sources (as available):

| Source | What to Extract |
|--------|----------------|
| PLAN.md / inline tasks | Original objective, acceptance criteria, task list |
| Git log (this phase) | Actual commits, files changed, timestamps |
| VERIFICATION.md | QA results (if SPRINT+) |
| Execution notes | Deviations, errors, decisions made |
| ISSUES.md | Newly deferred issues |

### 3. Reconcile Planned vs Actual

For each planned task:
- Was it completed? (check git log)
- Were acceptance criteria met? (check verification or self-verify)
- Were there deviations? (compare plan to actual commits)

For each deviation:
- Classify by level (1-4, see `deviation-rules.md`)
- Document rationale
- Assess impact

### 4. Write SUMMARY.md

Use the appropriate template from `templates/SUMMARY.md` at the resolved depth.

Write to: `.mike/phases/{N}-{name}/SUMMARY.md`

### 5. Update State Files

**state.json:**
```json
{
  "phase_status": "complete",
  "loop_position": "UNIFIED",
  "session.last_command": "/mike:unify"
}
```

Append to `decisions[]` any new decisions from this phase.
Append to `deferred_issues[]` any new issues.

**STATE.md:** Refresh to reflect current position.

**ROADMAP.md:** Update phase status to "complete".

**ISSUES.md:** Append any newly deferred issues with sequential ISS-{N} IDs.

**PROJECT.md:** Add significant decisions to the decisions table.

### 6. State Consistency Check (FORGE+)

For FORGE, CITADEL, and GOLD L2+, verify R5:

| Check | How |
|-------|-----|
| STATE ↔ ROADMAP | Phase status in STATE.md matches ROADMAP.md |
| STATE ↔ PROJECT | Decisions in STATE.md reflected in PROJECT.md |
| Position | Current position consistent with completed phases |

If inconsistency found: **BLOCKING** — fix before proceeding.

### 7. Route Next Action

| Condition | Next Action |
|-----------|------------|
| More phases remain | `/mike:transition` |
| Last phase in milestone | `/mike:complete` |
| BLITZ standalone | Done (display summary inline) |
| Context bracket CRITICAL | `/mike:pause` (create HANDOFF) |

---

## Anti-Patterns

- **DO NOT** skip UNIFY to "save time" — R2 is CRITICAL
- **DO NOT** write a SUMMARY without reading actual git history — summaries must reflect reality, not plans
- **DO NOT** defer UNIFY to the next session — close before context is lost
- **DO NOT** copy PLAN.md into SUMMARY.md — SUMMARY documents what actually happened
