---
name: mike:plan
description: Create PLAN.md for a phase (planner + checker loop)
allowed-tools: [Read, Write, Bash, Glob, Grep, Agent]
---

<objective>
Create a detailed execution plan for the current phase. Includes tasks with BDD acceptance criteria, boundary declarations, file ownership, and risk assessment.

For FORGE+, the plan goes through a planner-checker revision loop (max 3 iterations).

**When to use:** After `/mike:discuss` (or `/mike:research` for SPRINT), before `/mike:execute` (or `/mike:shard` for FORGE+).
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
@~/.claude/do-it-like-mike/references/deviation-rules.md
@~/.claude/do-it-like-mike/references/acceptance-criteria.md (when it exists)
@~/.claude/do-it-like-mike/templates/PLAN.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/PROJECT.md
@.mike/ROADMAP.md
@.mike/config.json
</context>

<process>

<step name="gather_inputs">
Read all inputs for plan creation:

1. **ROADMAP.md** — phase goal, dependencies
2. **PROJECT.md** — requirements (REQ-IDs), tech stack, constraints
3. **CONTEXT.md** (if exists) — locked user decisions, scope
4. **RESEARCH.md** (if exists) — technology findings, risks
5. **Previous SUMMARY.md** (if exists) — what was done before, deferred issues
6. **DESIGN.md** (if exists) — design tokens, component specs for UI tasks
</step>

<step name="create_plan">
Create `.mike/phases/{N}-{name}/PLAN.md` following the template:

**Key sections:**

1. **Metadata** — phase number, profile, wave info, dependencies
2. **Objective** — one sentence
3. **Acceptance Criteria** — BDD format (Given/When/Then), defined BEFORE tasks (R9)
4. **Boundaries** — DO NOT CHANGE files + SCOPE LIMITS
5. **Tasks** — each with:
   - Description, complexity, dependencies
   - Files to create/modify
   - AC references (which AC this task satisfies)
   - Verify command (specific command proving completion)
   - Done criteria (AC passes)
6. **File Ownership** — which task owns which file (prevents conflicts)
7. **Risk Assessment** — known risks with mitigations
8. **Error Patterns** (FORGE+) — known failure modes with fix strategies

**Task sizing:**
- BLITZ: 1-3 tasks (simple list)
- SPRINT: 3-7 tasks per phase
- FORGE: 3-10 tasks per phase (will be sharded)
- CITADEL: 5-15 tasks per phase (will be sharded)

**Wave assignment:**
- Identify independent tasks (can run in parallel)
- Group into waves: Wave 1 (no dependencies), Wave 2 (depends on Wave 1), etc.
</step>

<step name="checker_loop">
**For FORGE+ profiles:**

After creating the plan, run a plan-checker review:

1. **Goal-backward analysis:** Start from the phase goal. Does the plan achieve it?
2. **AC coverage:** Does every AC have at least one task that satisfies it?
3. **File conflict check:** Do any tasks modify the same file? If so, they must be in different waves.
4. **Boundary compliance:** Do tasks respect scope limits?
5. **Completeness:** Would an executor have enough information to implement each task?

If issues found:
- Revise the plan
- Re-check (max 3 iterations)

If no issues: Plan is approved.
</step>

<step name="present_plan">
Present the plan to the user for review:

- Summary of tasks and waves
- Acceptance criteria
- Any risks or concerns
- Estimated complexity

Wait for user approval or feedback. Adjust if needed.
</step>

<step name="update_state">
Update state:
- `state.json`: `phase_status` = "planned", `loop_position` = "PLAN"
- `STATE.md`: Update position and next action
- Create phase directory if needed: `.mike/phases/{N}-{name}/`

Route:
- SPRINT: `--> /mike:execute`
- FORGE+: `--> /mike:shard` (if sharding enabled) or `--> /mike:execute`
</step>

</process>

<success_criteria>
- [ ] PLAN.md created with all required sections
- [ ] Acceptance criteria defined BEFORE tasks (R9)
- [ ] Boundary declarations present
- [ ] Tasks have file ownership (no conflicts)
- [ ] Waves assigned for parallel execution
- [ ] Plan-checker approved (FORGE+)
- [ ] User approved the plan
- [ ] State updated
</success_criteria>
