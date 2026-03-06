---
name: mike:settings
description: View and edit MIKE project configuration
allowed-tools: [Read, Write, AskUserQuestion]
---

<objective>
View or modify project configuration. Supports viewing the current config, changing profile, adjusting scale level, toggling features, and modifying design settings.

**When to use:**
- Check current configuration
- Change profile mid-project
- Toggle features (design, sharding, etc.)
- Override scale level
- Set design preferences
</objective>

<execution_context>
@~/.claude/do-it-like-mike/workflows/profile-resolution.md
@~/.claude/do-it-like-mike/workflows/scale-detection.md
</execution_context>

<context>
$ARGUMENTS
@.mike/config.json
@.mike/state.json
</context>

<process>

<step name="parse_arguments">
Parse the user's arguments. If no arguments provided, show current configuration.

**Supported arguments:**

| Argument | Action |
|----------|--------|
| (none) | Display current configuration summary |
| `--profile {name}` | Change active profile |
| `--scale {L0-L4\|auto}` | Set or auto-detect scale level |
| `--design on\|off` | Enable/disable design step |
| `--design-style {name}` | Override auto-detected UI style |
| `--design-palette {N}` | Override auto-selected color palette |
| `--dark-mode on\|off` | Toggle dark mode in design system |
| `--concurrency {N}` | Set max parallel agents |
| `--tdd on\|off` | Toggle TDD availability |
| `--ralph on\|off` | Toggle Ralph Loop for stuck tasks |
| `--commit-prefix {prefix}` | Change git commit prefix |
</step>

<step name="view_config">
**If no arguments:** Display a formatted summary of the current configuration:

```
MIKE Configuration — {{PROJECT_NAME}}

  Profile:     {{PROFILE}} ({{SCALE_LEVEL}})
  Scale Mode:  {{SCALE_MODE}}

  Planning:    depth={{DEPTH}}, research_waves={{WAVES}}, completeness_gate={{GATE}}
  Architecture: gate={{GATE}}, threshold={{THRESHOLD}}%, party_mode={{PM}}
  Sharding:    enabled={{ENABLED}}, max_tasks={{MAX}}, context_budget={{BUDGET}}%
  Execution:   model={{MODEL}}, concurrency={{CONCURRENCY}}, ralph={{RALPH}}
  Verification: qa={{QA}}, state_consistency={{SC}}, regression={{REG}}
  Git:         prefix={{PREFIX}}, commit_per={{PER}}, branching={{BRANCH}}
  Design:      enabled={{ENABLED}}, industry={{IND}}, dark_mode={{DM}}
  Context:     monitoring={{MON}}, quality_threshold={{QT}}%

  Metrics:     {{TASKS_COMPLETED}} tasks completed, {{DEVIATIONS}} deviations
```
</step>

<step name="modify_config">
**If arguments provided:**

1. Read current `config.json`
2. Apply the requested changes
3. Validate the changes make sense:
   - Don't allow BLITZ profile with sharding enabled
   - Don't allow scale level override when profile is not GOLD
   - Warn if changing profile mid-phase (may affect current work)
4. Write updated `config.json`
5. Update `state.json` if profile or scale changed
6. Update `STATE.md` to reflect the change
7. Display what changed:

```
Configuration updated:
  profile: sprint → forge
  sharding.enabled: false → true
  architecture.gate: "skip" → "scale-adaptive"

Note: Profile change affects behavior of all subsequent commands.
Current phase (Phase 2) will continue with FORGE behaviors.
```
</step>

<step name="warn_if_needed">
If the profile change is significant (e.g., BLITZ → CITADEL), warn the user:

```
Warning: Switching from BLITZ to CITADEL adds significant process:
- Architecture solutioning gate (>=90%)
- Document sharding
- Independent QA verification
- Party mode for architecture decisions
- 7-layer verification

This is a big jump. Consider FORGE as a middle ground.
Continue with CITADEL? (yes/no)
```
</step>

</process>

<success_criteria>
- [ ] Current config displayed clearly when no args
- [ ] Changes applied to config.json correctly
- [ ] State files updated to reflect changes
- [ ] Validation prevents invalid combinations
- [ ] Warnings shown for significant changes
</success_criteria>
