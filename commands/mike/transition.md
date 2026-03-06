---
name: mike:transition
description: Phase/milestone boundary — state consistency check
allowed-tools: [Read, Write, Glob]
---

<objective>
Manage the boundary between phases. Verifies state consistency (R5), updates the roadmap, and routes to the next phase or milestone completion.

**When to use:** After `/mike:unify`, when moving to the next phase.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/ROADMAP.md
@.mike/config.json
</context>

<process>

<step name="verify_closure">
Verify the current phase is properly closed:

1. **SUMMARY.md exists** (R2) — if missing, block and route to `/mike:unify`
2. **Phase status is "complete"** in state.json
3. **No unresolved blockers** in STATE.md
</step>

<step name="state_consistency_check">
**For FORGE+ and GOLD L2+ (R5):**

Verify alignment across state files:

| Check | Files | What to Verify |
|-------|-------|---------------|
| Phase status | STATE.md ↔ ROADMAP.md | Phase marked complete in both |
| Decisions | STATE.md ↔ PROJECT.md | All decisions reflected |
| Position | STATE.md ↔ state.json | Current phase number matches |
| Issues | ISSUES.md ↔ SUMMARY.md | Deferred issues transferred |

If any misalignment: **BLOCKING** — fix before proceeding.
</step>

<step name="determine_next">
Read ROADMAP.md to find the next phase:

- If more phases exist in current milestone: route to next phase
- If current milestone is complete: route to `/mike:complete`
- If a deferred issue should become a new phase: offer to create it
</step>

<step name="update_state">
Update for the next phase:

1. **state.json:**
   - `current_phase`: increment to next phase
   - `phase_status`: "not-started"
   - `loop_position`: null
   - Append completed phase to `completed_phases`

2. **STATE.md:**
   - Update current position
   - Clear blockers (they should be resolved)
   - Set next action for the new phase

3. **ROADMAP.md:**
   - Confirm previous phase marked as "complete"
   - Set next phase as "current"

Route to next action based on profile (same logic as `/mike:progress`).
</step>

</process>

<success_criteria>
- [ ] Current phase properly closed (SUMMARY.md exists)
- [ ] State consistency check passed (FORGE+)
- [ ] State files updated for next phase
- [ ] Next action routed
</success_criteria>
