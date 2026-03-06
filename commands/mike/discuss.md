---
name: mike:discuss
description: Gather phase context through adaptive questioning
allowed-tools: [Read, Write, AskUserQuestion]
---

<objective>
Before planning a specific phase, gather the user's decisions and context through focused conversation. Produces a CONTEXT.md file that locks user decisions for the phase.

**When to use:** Before `/mike:plan` for a specific phase. Especially important when the phase has ambiguous requirements or multiple valid approaches.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/PROJECT.md
@.mike/ROADMAP.md
@.mike/config.json
</context>

<process>

<step name="identify_phase">
Determine which phase we're discussing:
- Read ROADMAP.md to find the current phase (or next not-started phase)
- Read PROJECT.md for relevant requirements
- Read RESEARCH.md if it exists (for technology context)
</step>

<step name="adaptive_questions">
Ask focused questions about this specific phase:

1. "For Phase {N} ({name}), there are a few decisions to make..."
2. Present each decision point with options and a recommendation
3. Wait for the user's choice before moving on
4. If the user's answer raises new questions, ask those too

**Types of decisions:**
- Technical approach (which pattern/library to use)
- Scope boundaries (what's in vs. out for this phase)
- Priority trade-offs (speed vs. quality, features vs. polish)
- UI/UX choices (if applicable)

**Key behaviors:**
- Present concrete options, not open-ended questions
- Lead with a recommendation
- 3-7 questions max per phase
- Stop when you have enough to write a plan
</step>

<step name="write_context">
Write `.mike/phases/{N}-{name}/CONTEXT.md`:

```markdown
# Context — Phase {N}: {PHASE_NAME}

## Phase Goal
{goal from ROADMAP.md}

## User Decisions
| # | Decision | Choice | Rationale |
|---|----------|--------|-----------|
| D-{N} | {question} | {answer} | {why} |

## Scope
### In Scope
- {item}

### Out of Scope
- {item}

## Approach
{brief description of the agreed approach}
```
</step>

<step name="update_state">
Update state:
- `state.json`: `loop_position` = "DISCUSS"
- `STATE.md`: Add new decisions, update next action
- `PROJECT.md`: Add significant decisions

Route: `--> /mike:plan`
</step>

</process>

<success_criteria>
- [ ] Phase-specific decisions captured
- [ ] CONTEXT.md written with locked decisions
- [ ] Scope clearly defined (in/out)
- [ ] Approach agreed upon
- [ ] State updated
</success_criteria>
