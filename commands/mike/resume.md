---
name: mike:resume
description: Resume from previous session with full context restoration
allowed-tools: [Read, Glob]
---

<objective>
Resume work from a previous session. Reads the most recent HANDOFF file (R10: summary-before-full) and suggests ONE next action (R11).

**When to use:** Starting a new session on an existing MIKE project.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/config.json
</context>

<process>

<step name="find_handoff">
Look for the most recent HANDOFF file:
1. Glob `.mike/HANDOFF-*.md`
2. Sort by date (filename contains date)
3. Read the most recent one

If no HANDOFF exists, fall back to reading STATE.md directly.
</step>

<step name="restore_context">
From HANDOFF (or STATE.md):
- Current phase and pipeline step
- In-progress work description
- Prioritized next actions
- Key decisions from last session
- Profile and scale level

**R10 (summary-before-full):** Read SUMMARY.md digests instead of full PLAN.md to preserve context.
</step>

<step name="verify_state">
Quick state integrity check:
- Does STATE.md position match HANDOFF?
- Any git changes since the HANDOFF was written?
- If checksums are recorded, verify state files weren't corrupted

If state looks inconsistent, warn the user and suggest `/mike:progress` for a deeper check.
</step>

<step name="display_and_route">
Display a concise session restoration:

```
[MIKE] Resuming — {PROJECT_NAME}

  Last session: {DATE}
  Phase {N}: {PHASE_NAME} — {STATUS}
  Pipeline: ... → [{CURRENT_STEP}] → ...

  Last session decisions:
  - {D1}
  - {D2}

  In progress: {DESCRIPTION}

--> Next: /mike:{COMMAND}
```

**R11:** Suggest exactly ONE next action. Not a menu.
</step>

</process>

<success_criteria>
- [ ] Most recent HANDOFF found and read
- [ ] Context restored concisely
- [ ] State integrity verified
- [ ] Single next action suggested (R11)
</success_criteria>
