# Workflow: Transition Phase

Manages the boundary between phases with state consistency verification.

---

## Steps

### 1. Verify Closure
- SUMMARY.md must exist (R2)
- Phase status must be "complete" in state
- No unresolved blockers

### 2. State Consistency Check (R5, FORGE+)
| Check | Files | Verify |
|-------|-------|--------|
| Phase status | STATE.md ↔ ROADMAP.md | Aligned |
| Decisions | STATE.md ↔ PROJECT.md | Reflected |
| Position | STATE.md ↔ state.json | Consistent |
| Issues | ISSUES.md ↔ SUMMARY.md | Transferred |

Misalignment is **BLOCKING** — fix before proceeding.

### 3. Update for Next Phase
- Increment `current_phase` in state.json
- Set `phase_status` = "not-started"
- Append completed phase to `completed_phases`
- Update STATE.md and ROADMAP.md

### 4. Route Next Action
- More phases → next phase's first step (based on profile)
- Last phase → `/mike:complete`
