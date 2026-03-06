---
name: mike:progress
description: Status dashboard and single next action routing
allowed-tools: [Read, Glob]
---

<objective>
Show current project progress and **route to exactly ONE next action**. This is the navigation hub — when unsure what to do next, run this.

Prevents decision fatigue by analyzing project state and suggesting the single best path forward (R11).

**When to use:**
- Mid-session check on progress
- After `/mike:resume` for more context
- When unsure what to do next
- Between pipeline steps
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

<step name="load_state">
Read `.mike/STATE.md`, `.mike/ROADMAP.md`, and `.mike/config.json`:
- Current milestone and phase
- Phase status (not-started, in-progress, verifying, complete)
- Loop position (which pipeline step we're in)
- Profile and scale level
- Any blockers
- Decisions made
</step>

<step name="calculate_progress">
Determine overall progress:

**Milestone Progress:**
```
Milestone {{N}}: {{NAME}}
  Phases: {{completed}}/{{total}} complete
  Current: Phase {{N}} — {{PHASE_NAME}} ({{STATUS}})
```

**Pipeline Position:**
Determine where we are in the 11-step pipeline:
```
INITIALIZE → DISCOVER → RESEARCH → ARCHITECT → DESIGN → SHARD → EXECUTE → VERIFY → UNIFY → TRANSITION → COMPLETE
                                                                    ▲
                                                              (you are here)
```
</step>

<step name="check_blockers">
Check for blockers:
- Missing SUMMARY.md for a completed phase (R2 violation — must UNIFY first)
- State inconsistency between STATE.md and ROADMAP.md (R5)
- Context bracket at DEEP or CRITICAL (R6 — may need HANDOFF)
- Pending issues in ISSUES.md that affect current phase
</step>

<step name="route_next_action">
Based on the current state, route to exactly ONE next action.

**Routing logic:**

```
IF no .mike/ exists:
  --> /mike:init

IF blocker exists:
  --> Address the blocker (specific action)

IF current phase status is "not-started":
  IF profile needs planning for this phase:
    --> /mike:discuss (SPRINT+) or /mike:plan (if discuss done)
  ELSE:
    --> /mike:execute

IF current phase status is "planning":
  IF CONTEXT.md exists but no PLAN.md:
    --> /mike:plan
  IF PLAN.md exists but no shards (FORGE+):
    --> /mike:shard
  ELSE:
    --> /mike:discuss

IF current phase status is "executing":
  IF all tasks/shards complete:
    --> /mike:verify (SPRINT+) or /mike:unify (BLITZ)
  ELSE:
    --> /mike:execute (continue)

IF current phase status is "verifying":
  IF VERIFICATION.md exists:
    --> /mike:unify
  ELSE:
    --> /mike:verify

IF current phase status is "complete":
  IF SUMMARY.md exists:
    IF more phases remain:
      --> /mike:transition
    ELSE:
      --> /mike:complete
  ELSE:
    --> /mike:unify (must close before transitioning)

IF milestone complete:
  --> /mike:complete
```

**Special routes:**
- If DESIGN step is pending (after ARCHITECT, before SHARD): → `/mike:design`
- If SCOUT profile and no codebase analysis: → `/mike:map`
- If context bracket is CRITICAL: → `/mike:pause`
</step>

<step name="display">
Display the progress dashboard:

```
[MIKE] {{PROJECT_NAME}} — {{PROFILE}} ({{SCALE_LEVEL}})

Milestone {{N}}: {{MILESTONE_NAME}}
  Phase {{completed}}/{{total}} | Current: Phase {{N}} — {{PHASE_NAME}}
  Pipeline: ... → [EXECUTE] → VERIFY → UNIFY → ...
  Status: {{STATUS_DESCRIPTION}}

{{BLOCKERS_IF_ANY}}

--> Next: /mike:{{COMMAND}}
```

End with EXACTLY one next action. No menus. No alternatives. One confident recommendation.
</step>

</process>

<success_criteria>
- [ ] Current state accurately read and summarized
- [ ] Progress percentage/count displayed
- [ ] Pipeline position shown
- [ ] Blockers identified (if any)
- [ ] Exactly ONE next action suggested (R11)
</success_criteria>
