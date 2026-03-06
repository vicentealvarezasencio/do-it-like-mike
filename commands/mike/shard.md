---
name: mike:shard
description: Document sharding — decompose plan into atomic task files
allowed-tools: [Read, Write, Bash, Glob, Grep, Agent]
---

<objective>
Decompose PLAN.md into atomic SHARD files — each a self-contained prompt for an executor agent. This is BMAD's killer innovation (74-90% token reduction per executor).

**Profile behavior:**
- **BLITZ:** Skip (single task list)
- **SPRINT:** Skip (per-phase plans sufficient)
- **FORGE:** Full atomic sharding + design context
- **CITADEL:** Full + synergy review (cross-shard coherence check)
- **SCOUT:** Skip (in-session execution)
- **GOLD:** Scale-adaptive (L0-L1: Skip, L2: Skip, L3: Full, L4: Full + synergy)

**When to use:** After `/mike:plan` (or `/mike:design` if design.enabled), before `/mike:execute`.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
@~/.claude/do-it-like-mike/references/sharding-algorithm.md
@~/.claude/do-it-like-mike/templates/SHARD.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/config.json
@.mike/ROADMAP.md
</context>

<process>

<step name="check_sharding">
Read `.mike/config.json` — check `sharding.enabled`.

**Skip conditions:**
- `sharding.enabled` is `false`
- Profile is BLITZ, SPRINT, SCOUT, or GOLD L0-L2

If skipping:
- Log skip reason to STATE.md
- Route directly to `/mike:execute`
- Stop processing further steps
</step>

<step name="gather_inputs">
Read all source documents that will be decomposed into shards:

1. **PLAN.md** — `.mike/phases/{N}-{name}/PLAN.md` — tasks, AC, boundaries, file ownership, waves
2. **PROJECT.md** — requirements, tech stack, constraints
3. **REQUIREMENTS.md** (if exists) — detailed requirement specs
4. **CONTEXT.md** (if exists) — locked user decisions, scope
5. **DESIGN.md** (if exists) — design tokens, component specs, anti-patterns
6. **ARCHITECTURE.md** (if exists) — component design, API contracts, data models
7. **RESEARCH.md** (if exists) — technology findings, patterns to follow

Validate that PLAN.md exists and has tasks defined. If not, route to `/mike:plan`.
</step>

<step name="spawn_sharder">
Spawn the `mike-sharder` agent with all gathered inputs.

The sharder performs:

**a. Parse tasks**
Extract each task from PLAN.md. For each task, capture:
- Task ID, description, complexity
- Acceptance criteria (BDD)
- File ownership (files to create/modify)
- Dependencies (other tasks)
- Wave assignment
- Verify command

**b. Extract relevant context**
For each task, pull ONLY the context fragments it needs from source docs:
- From PROJECT.md: only the requirements (REQ-IDs) this task addresses
- From ARCHITECTURE.md: only the component(s) this task implements
- From DESIGN.md: only the tokens/specs for this task's components
- From RESEARCH.md: only findings relevant to this task's tech
- From CONTEXT.md: only decisions that affect this task

**c. Compose shards**
For each task, create a shard file from the SHARD.md template:

```markdown
# SHARD-{NN}: {Task Title}

## Task
{task description}

## Context
{relevant fragments ONLY — minimal context}

## Design Context
{design tokens and specs for this shard's components — if applicable}

## Acceptance Criteria
{BDD Given/When/Then}

## Boundaries
### DO NOT CHANGE
- {files this shard must not modify}
### SCOPE LIMITS
- {what this shard should NOT attempt}

## File Ownership
- CREATE: {files}
- MODIFY: {files}

## Dependencies
- Depends on: {SHARD-XX (if any)}
- Blocks: {SHARD-YY (if any)}

## Error Patterns
- {known failure mode}: {fix strategy}

## Verify
{specific command to prove completion}
```

**d. Write shard files**
Write each shard to: `.mike/phases/{N}-{name}/shards/SHARD-{NN}.md`
- Numbering: SHARD-01, SHARD-02, ... (zero-padded)
- Order follows wave assignment (Wave 1 shards first)

**e. Validate self-containment**
For each shard, verify:
- An executor reading ONLY this shard has enough information to implement the task
- No implicit dependencies on context not included in the shard
- AC is specific enough to verify without external docs

**f. Verify coverage**
Cross-reference:
- Every task in PLAN.md is covered by exactly one shard
- No task is split across multiple shards
- No shard covers multiple tasks
- All AC from PLAN.md appear in at least one shard
</step>

<step name="synergy_review">
**CITADEL / GOLD L4 only.**

Check cross-shard coherence:

1. **Shared files** — If multiple shards reference the same file (even read-only), flag potential conflicts
2. **API contracts** — If Shard A defines an API and Shard B consumes it, verify the contract matches
3. **State dependencies** — If Shard B depends on state produced by Shard A, verify the state shape is consistent
4. **Design consistency** — If multiple shards produce UI components, verify they use the same design tokens
5. **Naming conventions** — Verify consistent naming across shards

For each issue found:
- **Conflict:** Adjust shard boundaries or add explicit notes
- **Inconsistency:** Standardize across shards
- **Gap:** Add missing context to relevant shards
</step>

<step name="report">
Present sharding summary:

| Metric | Value |
|--------|-------|
| Total shards | {count} |
| Avg tokens per shard | ~{count} |
| Total waves | {count} |
| Coverage | {tasks_covered}/{total_tasks} |

**Wave breakdown:**
- Wave 1: SHARD-01, SHARD-02, SHARD-03 (independent)
- Wave 2: SHARD-04, SHARD-05 (depend on Wave 1)
- ...

**Token efficiency:**
- PLAN.md size: ~{tokens}
- Avg shard size: ~{tokens}
- Reduction per executor: ~{percentage}%

Report any coverage gaps or issues from validation.
</step>

<step name="update_state">
Update state files:
- `state.json`: `phase_status` = "sharded", `loop_position` = "SHARD"
- `STATE.md`: Update position, shard count, wave count, next action
- `session.last_command` = "/mike:shard"

Route to next action: `--> /mike:execute`
</step>

</process>

<sharding_rules>
These rules govern all shard creation:

1. **One task per shard** — never combine multiple tasks
2. **Self-contained** — executor needs ONLY the shard file to implement
3. **Minimal context** — include only relevant fragments from source docs
4. **Target ~8K tokens** — if a shard exceeds 12K, split the task
5. **BDD AC included** — every shard has Given/When/Then criteria
6. **Boundaries included** — every shard declares what NOT to touch
7. **Error patterns included** — known failure modes with fix strategies
8. **Dependencies declared** — explicit depends-on / blocks relationships
9. **Verify command included** — specific command proving task completion
10. **Design context scoped** — only the tokens/specs for that shard's components
</sharding_rules>

<success_criteria>
- [ ] All PLAN.md tasks decomposed into individual shards
- [ ] Each shard is self-contained (~8K tokens)
- [ ] Coverage verified: every task in exactly one shard
- [ ] Shard files written to `.mike/phases/{N}-{name}/shards/`
- [ ] Wave assignments preserved from PLAN.md
- [ ] Design context included where applicable
- [ ] Synergy review passed (CITADEL)
- [ ] Token reduction reported
- [ ] State updated
- [ ] Single next action suggested
</success_criteria>
