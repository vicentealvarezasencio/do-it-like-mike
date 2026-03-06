# Workflow: Complete Milestone

Manages milestone completion — archival, retrospective, PROJECT.md evolution, and git tagging.

---

## Prerequisites

- All phases in the milestone have SUMMARY.md files (R2)
- No unresolved blockers in STATE.md
- User has confirmed milestone scope

---

## Steps

### 1. Verify Readiness

Check all phases belong to the current milestone and are complete:

| Check | Source | Verify |
|-------|--------|--------|
| All phases complete | ROADMAP.md | Every phase has [x] or "complete" status |
| SUMMARY.md exists | Phase directories | Each phase dir has SUMMARY.md (R2) |
| No blockers | STATE.md | Blockers section is empty |
| State consistency | STATE.md + ROADMAP.md | Aligned (R5, FORGE+) |

If any phase lacks SUMMARY.md: **BLOCKING** — route to `/mike:unify` for that phase.

Present milestone scope and ask for confirmation.

### 2. Gather Statistics

From phase SUMMARYs and git log:
- Phase count
- Total tasks completed (sum from all SUMMARYs)
- Total commits in milestone range
- Timeline (first commit to last)
- Lines of code (if available)

### 3. Extract Accomplishments

Read each phase's SUMMARY.md. Extract one key accomplishment per phase (the "What Was Built" or main deliverable). Aim for 4-6 bullet points.

Present for user approval.

### 4. Archive Milestone (SPRINT+)

Create `.mike/milestones/` if needed.

**Archive ROADMAP:**
Write `.mike/milestones/{{VERSION}}-ROADMAP.md`:
```markdown
# Milestone Archive: {{VERSION}} — {{NAME}}

**Shipped:** {{DATE}}
**Phases:** {{N}}

## Accomplishments
{{BULLET_LIST}}

## Phase Details
{{FULL_PHASE_ENTRIES_FROM_ROADMAP}}

## Statistics
| Metric | Value |
|--------|-------|
| Phases | {{N}} |
| Tasks | {{TOTAL}} |
| Commits | {{N}} |
| Timeline | {{DAYS}} days |
```

**Update ROADMAP.md:**
Collapse the completed milestone into a one-line summary:
```markdown
- [x] **{{VERSION}}** — Phases 1-{{N}} (shipped {{DATE}}) — see milestones/{{VERSION}}-ROADMAP.md
```

**Optionally archive phase directories:**
Ask user: "Move phase directories to milestones/{{VERSION}}-phases/? (y/n)"
- Yes: `mv .mike/phases/{completed-dirs} .mike/milestones/{{VERSION}}-phases/`
- No: Keep in place

### 5. Evolve PROJECT.md

Full review at milestone boundary:

1. **Description** — compare to what was actually built, update if needed
2. **Requirements** — move shipped requirements to "Done" or "Validated" section
3. **Decisions** — extract all decisions from phase SUMMARYs, add to PROJECT.md
4. **Context** — update with current codebase state
5. **Footer** — update "Last updated" date

### 6. Write Retrospective (FORGE+, GOLD L3+)

Append to `.mike/RETROSPECTIVE.md` (create if needed):

```markdown
## Milestone: {{VERSION}} — {{NAME}}

**Shipped:** {{DATE}}
**Phases:** {{N}}

### What Was Built
{{From SUMMARY.md one-liners}}

### What Worked
{{Smooth execution patterns}}

### What Was Inefficient
{{Rework, context resets, bottlenecks}}

### Patterns Established
{{New conventions}}

### Key Lessons
{{Actionable takeaways}}
```

**CITADEL/SCOUT additional step:** Trigger codebase re-analysis (`/mike:map`) to refresh the 7-doc analysis with the shipped state.

### 7. Update State

**state.json:**
- `current_milestone`: increment
- `current_phase`: null
- `phase_status`: null
- `loop_position`: null
- Append `{ "milestone": "{{VERSION}}", "date": "{{DATE}}" }` to `history`

**STATE.md:**
- Clear phase-specific data
- Update project reference
- Set next action

### 8. Git Tag and Commit

```bash
git add .mike/
git commit -m "mike(milestone): complete {{VERSION}}"
git tag -a {{VERSION}} -m "{{VERSION}} {{NAME}} — {{ONE_LINE_SUMMARY}}"
```

Ask user about pushing the tag to remote.

### 9. Offer Next Steps

```
Milestone {{VERSION}} complete.

--> /mike:init (new milestone) or /clear first for fresh context
```

---

## Profile Behavior Summary

| Profile | Archive | Retrospective | Codebase Re-Analysis |
|---------|---------|--------------|---------------------|
| BLITZ | No | No | No |
| SPRINT | Yes | No | No |
| FORGE | Yes | Yes | No |
| CITADEL | Yes | Yes (comprehensive) | Yes (/mike:map) |
| SCOUT | Yes | Yes | Yes (7-doc refresh) |
| GOLD L0-L1 | No | No | No |
| GOLD L2 | Yes | No | No |
| GOLD L3+ | Yes | Yes | Optional |
