---
name: mike:quick
description: BLITZ-mode quick task — auto-selects BLITZ profile for one-off work
allowed-tools: [Read, Write, Edit, Bash, Glob, Grep, AskUserQuestion]
---

<objective>
Execute a quick task with minimal process. Automatically uses BLITZ profile regardless of project settings. Ideal for bug fixes, config changes, small features, and one-off tasks.

Think of this as the express lane — get in, get it done, get out.

**When to use:**
- Quick bug fix or typo
- Small config change
- One-off script or utility
- Any task that should take < 30 minutes
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
@~/.claude/do-it-like-mike/references/deviation-rules.md
@~/.claude/do-it-like-mike/workflows/unify.md
</execution_context>

<context>
$ARGUMENTS
@.mike/config.json (if exists)
@.mike/STATE.md (if exists)
</context>

<process>

<step name="capture_task">
If the user provided arguments (e.g., `/mike:quick fix the login button`), use that as the task description.

If no arguments, ask ONE question:
"What needs to get done?"

Extract:
- Task description (one sentence)
- Files likely involved (infer from description)
- Definition of done (infer from description)
</step>

<step name="check_mike_state">
Check if `.mike/` exists:

**If `.mike/` exists:**
- Read current state
- This quick task will be tracked as a decimal phase (e.g., Phase 2.1) if a project is active
- Save the current state so we can restore after the quick task

**If `.mike/` does NOT exist:**
- Create a minimal `.mike/` directory with config.json set to BLITZ profile
- This is a standalone quick task — no project context needed
</step>

<step name="execute_inline">
Execute the task directly in-session (no subagents, no plans, no shards):

1. **Read** relevant files to understand current state
2. **Plan** mentally — determine the simplest approach (do NOT write a PLAN.md)
3. **Implement** the changes
4. **Verify** the changes work:
   - Run build if applicable
   - Run tests if applicable
   - Manual verification of the change
5. **Commit** with format: `mike(quick): {description}`

**Rules active:** R1 (plan = inline understanding), R3 (boundaries), R4 (ask for arch changes), R7 (atomic commit)

**Deviation handling:**
- Level 1-3: Auto-fix and log
- Level 4: Ask the user (this is supposed to be quick — major arch changes mean it's not a quick task)
</step>

<step name="lightweight_unify">
Produce a lightweight SUMMARY (< 30 lines) either in the conversation or as `.mike/phases/{N.1}-quick/SUMMARY.md` if a project exists:

```
## Quick Task Complete

**Task:** {description}
**What was done:** {brief summary}
**Files changed:** {list}
**Commit:** {commit hash}
**Issues noticed:** {any deferred issues, or "none"}
```

If issues were noticed that are outside scope, add them to `.mike/ISSUES.md` (if it exists).
</step>

<step name="restore_state">
If this was a quick task within an existing project:
- Update STATE.md to reflect the quick task completion
- Route back to the previous pipeline position

Display: `--> Back to: /mike:progress`

If standalone:
Display: "Done. Run `/mike:init` if you want to start a full project."
</step>

</process>

<success_criteria>
- [ ] Task completed and verified
- [ ] Atomic commit created
- [ ] Lightweight summary produced
- [ ] Any noticed issues deferred (not scope-crept)
- [ ] State restored if within existing project
</success_criteria>
