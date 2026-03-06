---
name: mike:execute
description: Execute tasks — in-session or wave-parallel depending on profile
allowed-tools: [Read, Write, Edit, Bash, Glob, Grep, Agent, AskUserQuestion]
---

<objective>
Execute the current phase's tasks. Behavior adapts based on profile:

- **BLITZ:** In-session, sequential, from inline task list
- **SPRINT:** Wave-parallel with 2-3 executor agents
- **FORGE:** Wave-parallel with sharded task files (3-5 agents)
- **CITADEL:** Wave-parallel with sharded task files (5+ agents)
- **SCOUT:** In-session, sequential, with boundary enforcement
- **GOLD:** Scale-adaptive

**When to use:** After planning is complete and you're ready to build.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/workflows/execute-phase.md (when it exists — Phase 3)
@~/.claude/do-it-like-mike/references/rules.md
@~/.claude/do-it-like-mike/references/deviation-rules.md
@~/.claude/do-it-like-mike/references/context-brackets.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/config.json
@.mike/ROADMAP.md
</context>

<process>

<step name="resolve_profile">
Read `.mike/config.json` to determine the execution model.

Resolve the effective profile (see `workflows/profile-resolution.md`).
</step>

<step name="load_execution_context">
Based on profile, load the appropriate execution context:

**BLITZ / GOLD L0-L1:**
- Read `PROJECT.md` for the inline task list
- No PLAN.md, no shards

**SPRINT / GOLD L2:**
- Read `.mike/phases/{N}-{name}/PLAN.md`
- Tasks are in the plan, executed via wave-parallel agents

**FORGE / GOLD L3:**
- Read `.mike/phases/{N}-{name}/shards/SHARD-*.md`
- Each shard is a complete, self-contained task for an executor agent

**CITADEL / GOLD L4:**
- Same as FORGE but with higher concurrency and synergy checks

**SCOUT:**
- Read `.mike/phases/{N}-{name}/PLAN.md`
- Execute in-session with boundary enforcement from codebase analysis
</step>

<step name="execute_blitz">
**For BLITZ / GOLD L0-L1 (in-session sequential):**

1. Read the task list from PROJECT.md or PLAN.md
2. For each task:
   a. Understand what needs to be done
   b. Read relevant files
   c. Implement the change
   d. Verify (build, test, manual check)
   e. Commit: `mike(phase-{N}): {description}`
   f. Move to next task
3. After all tasks: proceed to `/mike:unify`

**Rules active:** R1, R3, R4, R6, R7, R8
**Deviation protocol:** See `references/deviation-rules.md`
</step>

<step name="execute_sprint">
**For SPRINT / GOLD L2 (wave-parallel):**

1. Read PLAN.md and identify task waves (groups of independent tasks)
2. For each wave:
   a. Spawn `mike-executor` agents in parallel (max from config.max_concurrency)
   b. Each agent receives:
      - The specific task from PLAN.md
      - PROJECT.md context
      - Active rules (R1, R3, R4, R7, R8)
      - Deviation protocol
   c. Wait for all agents in the wave to complete
   d. Verify wave results (build check, test check)
3. After all waves: proceed to `/mike:verify`

**Agent spawn format:**
```
Agent:
  name: mike-executor
  subagent_type: general-purpose
  prompt: [executor instructions + task + rules]
```
</step>

<step name="execute_forge">
**For FORGE / CITADEL / GOLD L3-L4 (wave-parallel sharded):**

1. Read shards from `.mike/phases/{N}-{name}/shards/`
2. Parse shard dependencies to determine wave order
3. For each wave:
   a. Spawn `mike-executor` agents in parallel
   b. Each agent receives ONLY its SHARD.md file (self-contained)
   c. Wait for all agents in the wave to complete
   d. Verify wave results
4. After all waves: proceed to `/mike:verify`

**Key difference from SPRINT:** Executors get SHARD files (8K tokens each) instead of the full PLAN.md (potentially 32K+). This is the document sharding efficiency gain.
</step>

<step name="handle_failures">
If a task/shard fails:

1. **First failure:** Retry once with adjusted approach
2. **Second failure:** Log the error, skip to next independent task
3. **Third failure (same error):** Trigger Analysis Paralysis Guard
   - Mark task as blocked
   - If `ralph_loop` enabled in config: offer Ralph Loop (fresh context retry)
   - Otherwise: report to user for manual intervention

Log all failures for SUMMARY.md during UNIFY.
</step>

<step name="update_state">
After execution completes (or is interrupted):

1. Update `state.json`:
   - `phase_status`: "executing" → "executed" (or "partially-executed" if failures)
   - `loop_position`: "EXECUTE"
   - `session.last_command`: "/mike:execute"
2. Update `STATE.md` with execution summary

Route to next action:
- If all tasks passed: `--> /mike:verify` (SPRINT+) or `--> /mike:unify` (BLITZ)
- If failures exist: Report failures and ask user how to proceed
</step>

</process>

<success_criteria>
- [ ] All tasks executed (or failures clearly reported)
- [ ] Atomic commits per task (R7)
- [ ] Boundary declarations respected (R3)
- [ ] Deviations logged per deviation protocol
- [ ] State updated to reflect execution results
- [ ] Single next action suggested
</success_criteria>
