---
name: mike:pause
description: Create HANDOFF for session continuity, optional WIP commit
allowed-tools: [Read, Write, Bash]
---

<objective>
Prepare for session end by creating a HANDOFF document that captures current state, in-progress work, and prioritized next actions. Optionally creates a WIP commit.

**When to use:**
- Ending a work session
- Context bracket at CRITICAL (< 20%)
- Stepping away and want another session to continue seamlessly
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
@~/.claude/do-it-like-mike/templates/HANDOFF.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/config.json
</context>

<process>

<step name="capture_state">
Read current project state:
- Loop position (which pipeline step)
- Phase status
- In-progress work
- Key decisions made this session
- Context bracket
</step>

<step name="wip_commit">
Check for uncommitted changes:
- If changes exist, offer to create a WIP commit: `mike(wip): {description}`
- If no changes, skip
</step>

<step name="write_handoff">
Write `.mike/HANDOFF-{YYYY-MM-DD}.md`:

```markdown
# Handoff — {DATE}

## Loop Position
| Field | Value |
|-------|-------|
| Phase | {N} — {NAME} |
| Step | {PIPELINE_STEP} (e.g., "EXECUTE — 4/7 tasks done") |
| Profile | {PROFILE} ({SCALE_LEVEL}) |
| Context Bracket | {BRACKET} |

## Key Decisions This Session
1. {DECISION}
2. {DECISION}

## In-Progress Work
{WHAT_WAS_BEING_WORKED_ON}

## Prioritized Next Actions
1. **IMMEDIATE:** {FIRST_ACTION}
2. {SECOND_ACTION}
3. {THIRD_ACTION}

## State File Checksums
- STATE.md: {checksum}
- PROJECT.md: {checksum}
- ROADMAP.md: {checksum}
```
</step>

<step name="update_state">
Update state:
- `state.json`: `session.last_command` = "/mike:pause"
- `STATE.md`: Note session paused, next action = "/mike:resume"
</step>

</process>

<success_criteria>
- [ ] HANDOFF file created with current state
- [ ] WIP commit offered (if uncommitted changes)
- [ ] Next actions prioritized
- [ ] State checksums recorded
</success_criteria>
