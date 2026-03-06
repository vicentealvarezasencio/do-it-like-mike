---
name: mike:help
description: Command reference with profile-aware filtering
allowed-tools: [Read]
---

<objective>
Display MIKE command reference. If a project is initialized, show only commands relevant to the current profile.

**When to use:** When unsure what commands are available or how to use them.
</objective>

<execution_context>
</execution_context>

<context>
@.mike/config.json (if exists)
</context>

<process>

<step name="detect_context">
Check if `.mike/config.json` exists:
- **If yes:** Read the active profile and filter commands accordingly
- **If no:** Show all commands with profile annotations
</step>

<step name="display_help">
Display the command reference. If profile is known, mark commands as active/skip/simplified.

```
 ███╗   ███╗██╗██╗  ██╗███████╗
 ████╗ ████║██║██║ ██╔╝██╔════╝
 ██╔████╔██║██║█████╔╝ █████╗
 ██║╚██╔╝██║██║██╔═██╗ ██╔══╝
 ██║ ╚═╝ ██║██║██║  ██╗███████╗
 ╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚══════╝
  Don't half ass it. Do it like Mike.

PIPELINE COMMANDS (run in order):
  /mike:init         Initialize project, select profile, capture goal
  /mike:discover     Requirements gathering, PRD, completeness gate
  /mike:research     Technology research with parallel agents
  /mike:architect    Architecture design with solutioning gate
  /mike:design       UI design system — style, palette, typography, tokens
  /mike:shard        Document sharding into atomic task files
  /mike:execute      Build, test, commit — in-session or wave-parallel
  /mike:verify       Independent QA, regression testing, design compliance
  /mike:unify        Mandatory closure — SUMMARY.md reconciliation
  /mike:transition   Phase/milestone boundary management
  /mike:complete     Milestone archive, retrospective, git tag

NAVIGATION:
  /mike:progress     Status dashboard + single next action routing
  /mike:resume       Resume from previous session
  /mike:pause        Create HANDOFF, optional WIP commit

PLANNING:
  /mike:discuss      Gather phase context via adaptive questioning
  /mike:plan         Create PLAN.md for a phase

ERROR HANDLING:
  /mike:debug        Persistent debug session
  /mike:issues       View/triage deferred issues

CODEBASE:
  /mike:map          7-doc codebase analysis (SCOUT/GOLD L2+)

ROADMAP:
  /mike:add-phase    Append a phase to the roadmap
  /mike:insert-phase Insert decimal phase without renumbering
  /mike:remove-phase Remove a future phase

UTILITY:
  /mike:quick        BLITZ-mode quick task
  /mike:help         This help (you are here)
  /mike:settings     View/edit configuration
  /mike:update       Self-update with changelog

PROFILES:
  BLITZ    — Quick tasks, minimal process
  SPRINT   — Per-phase planning, wave-parallel execution
  FORGE    — Front-loaded planning, document sharding, independent QA
  CITADEL  — Maximum rigor, party mode, 6-layer verification
  SCOUT    — Existing codebase, boundary enforcement
  GOLD     — Auto-adaptive (L0-L4 scale detection)
```

If profile is active, annotate each command:
- Commands that are active for this profile: show normally
- Commands that are skipped: show with `(skipped — {{PROFILE}} doesn't use this)`
- Commands that are simplified: show with `(simplified in {{PROFILE}})`
</step>

</process>

<success_criteria>
- [ ] All 26 commands listed with descriptions
- [ ] Profile information shown if project is initialized
- [ ] Commands annotated by relevance to current profile
</success_criteria>
