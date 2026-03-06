# Workflow: Document Sharding

Decomposes PLAN.md into atomic SHARD files for parallel execution.

---

## Sharding Algorithm

### Input
- PLAN.md (tasks, AC, boundaries, file ownership, risks)
- PROJECT.md (requirements, constraints, decisions)
- REQUIREMENTS.md (REQ-IDs)
- CONTEXT.md (locked decisions)
- DESIGN.md (tokens, specs, anti-patterns)
- Architecture docs (schema, API spec)
- Error patterns

### Process
For each task in PLAN.md:
1. Extract task description, objective, steps
2. Extract only AC referenced by this task
3. Extract files to create/modify
4. Extract dependencies
5. Extract only relevant boundaries
6. From CONTEXT.md: only decisions affecting this task
7. From schema: only tables/columns this task touches
8. From API spec: only endpoints this task implements
9. From REQUIREMENTS.md: only REQ-IDs this task satisfies
10. From DESIGN.md: only design tokens, component specs, anti-patterns relevant to this shard
11. From error patterns: only patterns for this task's technology
12. Compose SHARD-{NN}.md from template

### Validation
- Coverage: every PLAN task has exactly one shard
- Self-containment: each shard has enough context
- Token budget: target ~8K per shard

---

## Sharding Rules
1. One task per shard
2. Self-contained (executor needs ONLY the shard)
3. Minimal context (only relevant fragments)
4. Token budget ~8K
5. BDD AC included
6. Boundaries included
7. Error patterns included
8. Dependencies declared

---

## Synergy Review (CITADEL / GOLD L4)

Cross-shard coherence analysis to catch integration issues before parallel execution.

### Check 1: Shared File Detection

For every file path referenced across all shards:
1. Build a file-to-shard map: `{ "src/auth.ts": ["SHARD-01", "SHARD-04"] }`
2. For each file referenced by 2+ shards:
   - If both MODIFY: **CONFLICT** — restructure shard boundaries or sequence into different waves
   - If one MODIFY, others READ: **CAUTION** — add explicit note to readers that the file will change
   - If both READ: **OK** — no action needed

### Check 2: API Contract Verification

For shards that define producer/consumer relationships:
1. Identify shards that CREATE or MODIFY API endpoints, functions, types, or interfaces
2. Identify shards that CONSUME those same endpoints/functions/types
3. Verify the contract matches:
   - Function signatures agree (parameters, return types)
   - API request/response shapes align
   - Error handling expectations match
4. If mismatch found: add the agreed contract to BOTH shards

### Check 3: State Dependency Validation

For shards with declared dependencies:
1. Verify the producing shard's output matches the consuming shard's expected input
2. Check DB schema assumptions: if Shard A creates a table and Shard B reads it, verify column names/types match
3. Check env/config assumptions: if Shard A sets a config value and Shard B reads it, verify the key name matches

### Check 4: Design Consistency

For shards that produce UI components:
1. Verify all shards reference the same design token names
2. Check that component patterns are consistent (e.g., all buttons use the same base component)
3. Flag any shard that hardcodes values instead of using tokens

### Check 5: Naming Convention Audit

Across all shards:
1. Check that file naming follows the same pattern (kebab-case, camelCase, etc.)
2. Check that function/variable naming is consistent
3. Check that test file naming follows the project convention

### Resolution

For each issue found, take one of:
- **Adjust boundary:** Move work between shards to eliminate the conflict
- **Add context:** Include missing information in the affected shard(s)
- **Sequence:** Move conflicting shards to different waves
- **Document:** Add explicit integration notes to both shards

### Synergy Report

Append to the sharding report:

```markdown
## Synergy Review
| Check | Result | Issues | Resolutions |
|-------|--------|--------|-------------|
| Shared Files | PASS/FAIL | {count} | {actions taken} |
| API Contracts | PASS/FAIL | {count} | {actions taken} |
| State Dependencies | PASS/FAIL | {count} | {actions taken} |
| Design Consistency | PASS/FAIL | {count} | {actions taken} |
| Naming Conventions | PASS/FAIL | {count} | {actions taken} |
```

---

## Output
- `.mike/phases/{N}-{name}/shards/SHARD-01.md` through SHARD-{NN}.md
- Sharding report: total shards, avg tokens, coverage
- Synergy report (CITADEL): cross-shard coherence results
- State: phase_status="sharded", loop_position="SHARD"
