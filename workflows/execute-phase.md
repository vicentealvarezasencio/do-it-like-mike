# Workflow: Execute Phase

Orchestrates task execution with profile-adaptive concurrency.

---

## Execution Models

### In-Session Sequential (BLITZ, SCOUT, GOLD L0-L1)
1. Read task list from PLAN.md or PROJECT.md
2. Execute each task in order, in the main context
3. Verify after each task (build + test)
4. Commit per task: `mike(phase-{N}): {description}`

### Wave-Parallel (SPRINT, GOLD L2)
1. Read PLAN.md, identify waves
2. Per wave: spawn `mike-executor` agents in parallel (max: config.execution.max_concurrency)
3. Each agent gets: task details + PROJECT.md context + active rules
4. Wait for wave completion, verify results
5. Proceed to next wave

### Wave-Parallel Sharded (FORGE, CITADEL, GOLD L3-L4)
1. Read SHARD files from `.mike/phases/{N}-{name}/shards/`
2. Parse dependencies to determine wave order
3. Per wave: spawn `mike-executor` agents, each receiving ONLY its SHARD file
4. Wait for wave completion, verify results
5. Proceed to next wave

---

## Failure Handling
1. First failure: Retry with adjusted approach
2. Second failure: Skip to next independent task, mark as blocked
3. Third failure (same error): Analysis Paralysis Guard — report to user
4. If `ralph_loop` enabled: Offer fresh-context retry (Ralph Loop)

---

## State Updates
- `phase_status`: "planned" → "executing" → "executed"
- `loop_position`: "EXECUTE"
- Track completed/failed tasks in state
