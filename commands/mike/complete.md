---
name: mike:complete
description: Milestone archive, retrospective, git tag
allowed-tools: [Read, Write, Glob, Bash, AskUserQuestion]
---

<objective>
Mark the current milestone as shipped. Archives planning artifacts, writes a retrospective, tags the release in git, and prepares for the next milestone.

**When to use:** After all phases in a milestone are complete (all have SUMMARY.md files) and `/mike:transition` routes here.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/workflows/complete-milestone.md
@~/.claude/do-it-like-mike/references/rules.md
</execution_context>

<context>
$ARGUMENTS
@.mike/STATE.md
@.mike/ROADMAP.md
@.mike/PROJECT.md
@.mike/config.json
</context>

<process>

<step name="profile_behavior">
Adapt behavior based on active profile:

| Aspect | BLITZ | SPRINT | FORGE | CITADEL | SCOUT | GOLD |
|--------|-------|--------|-------|---------|-------|------|
| Behavior | Done (no ceremony) | Standard archive | Full archive + retro | Full archive + retro + codebase re-analysis | Full archive + 7-doc refresh | Scale-adaptive |
| Retrospective | No | No | Yes | Yes (comprehensive) | Yes | L3+: Yes |

For **BLITZ**: Update state, display "Done.", skip to git tag. No archival ceremony.
</step>

<step name="verify_readiness">
Verify all phases in the current milestone are complete:

1. Read ROADMAP.md — identify all phases in the current milestone
2. For each phase, check that `.mike/phases/{N}-{name}/SUMMARY.md` exists (R2)
3. Check STATE.md for unresolved blockers

If any phase lacks a SUMMARY.md:
```
Cannot complete milestone — Phase {N} has no SUMMARY.md.
--> /mike:unify (for Phase {N})
```

Present milestone scope:
```
Milestone {{VERSION}}: {{NAME}}

Phases:
- Phase 1: {{NAME}} (complete)
- Phase 2: {{NAME}} (complete)
- Phase 3: {{NAME}} (complete)

Total: {{N}} phases, all complete
```

Ask for confirmation to proceed.
</step>

<step name="gather_stats">
Calculate milestone statistics:

```bash
git log --oneline | head -30
git diff --stat $(git log --format="%H" --reverse | head -1)..HEAD | tail -1
```

Present:
```
Milestone Stats:
- Phases: {{N}}
- Tasks completed: {{TOTAL}} (from phase SUMMARYs)
- Timeline: {{START_DATE}} - {{END_DATE}}
```
</step>

<step name="extract_accomplishments">
Read all phase SUMMARY.md files in this milestone. Extract 4-6 key accomplishments — one per phase plus any standout achievements.

Present accomplishments for user approval.
</step>

<step name="archive_milestone">
**For SPRINT+ profiles:**

1. Create `.mike/milestones/` directory if it doesn't exist
2. Archive the ROADMAP to `.mike/milestones/{{VERSION}}-ROADMAP.md`:
   - Full phase details for this milestone
   - Accomplishments list
   - Statistics
3. Update ROADMAP.md — collapse completed milestone into a one-line summary:
   ```
   - [x] **{{VERSION}}** — Phases 1-{{N}} (shipped {{DATE}})
   ```
4. Archive phase directories (ask user):
   - Yes: move `.mike/phases/{completed}` to `.mike/milestones/{{VERSION}}-phases/`
   - No: keep in place for now
</step>

<step name="evolve_project">
Full PROJECT.md evolution review:

1. **Description accuracy** — does "What This Is" still match what was built?
2. **Requirements audit** — move shipped requirements to a "Validated" or "Done" section
3. **Decisions audit** — extract decisions from all phase SUMMARYs, add to PROJECT.md
4. **Context update** — current codebase state, known issues, tech debt
5. Update "Last updated" footer

Write changes to PROJECT.md.
</step>

<step name="write_retrospective">
**For FORGE+ and GOLD L3+ only.**

Generate a retrospective section. If `.mike/RETROSPECTIVE.md` exists, append; otherwise create it.

```markdown
## Milestone: {{VERSION}} — {{NAME}}

**Shipped:** {{DATE}}
**Phases:** {{N}}

### What Was Built
{{Extract from SUMMARY.md one-liners}}

### What Worked
{{Patterns that led to smooth execution}}

### What Was Inefficient
{{Rework, bottlenecks, context resets}}

### Patterns Established
{{New conventions discovered}}

### Key Lessons
{{Specific, actionable takeaways}}
```

**For CITADEL additionally:**
- Re-run `/mike:map` for a fresh 7-doc codebase analysis reflecting the shipped state

**For SCOUT additionally:**
- Refresh the 7-doc codebase analysis in `.mike/codebase/`
</step>

<step name="update_state">
Update state files:

1. **state.json:**
   - `current_milestone`: increment
   - `current_phase`: null
   - `phase_status`: null
   - `loop_position`: null
   - Append milestone version to history

2. **STATE.md:**
   - Update project reference
   - Clear phase-specific state
   - Set next action: "Start next milestone"
</step>

<step name="git_tag">
Create a git tag:

```bash
git tag -a {{VERSION}} -m "{{VERSION}} {{NAME}}

Key accomplishments:
- {{ACCOMPLISHMENT_1}}
- {{ACCOMPLISHMENT_2}}
- {{ACCOMPLISHMENT_3}}"
```

Ask: "Push tag to remote? (y/n)"

Commit milestone completion:
```
mike(milestone): complete {{VERSION}}
```
</step>

<step name="offer_next">
Display completion summary:

```
Milestone {{VERSION}} complete.

Shipped: {{N}} phases
Archived: .mike/milestones/{{VERSION}}-ROADMAP.md

--> Start next milestone with /mike:init (new milestone mode)
    or /clear for a fresh context window first.
```
</step>

</process>

<success_criteria>
- [ ] All phases verified complete (SUMMARY.md exists)
- [ ] Milestone archived (SPRINT+)
- [ ] PROJECT.md evolved with shipped state
- [ ] Retrospective written (FORGE+)
- [ ] State files updated for next milestone
- [ ] Git tag created
- [ ] User knows next steps
</success_criteria>
