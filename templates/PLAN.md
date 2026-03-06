# Plan — Phase {{N}}: {{PHASE_NAME}}

## Metadata
| Field | Value |
|-------|-------|
| Phase | {{N}} |
| Profile | {{PROFILE}} |
| Type | execute / tdd / research |
| Autonomous | true / false |
| Wave | {{WAVE_NUMBER}} |
| Depends On | {{PHASE_DEPS}} |

## Objective
{{ONE_SENTENCE_OBJECTIVE}}

## Acceptance Criteria
- **AC-1:** Given {{precondition}}, when {{action}}, then {{expected_result}}
- **AC-2:** Given {{precondition}}, when {{action}}, then {{expected_result}}
- **AC-3:** Given {{precondition}}, when {{action}}, then {{expected_result}}

## Boundaries
### DO NOT CHANGE
- `{{file_path}}` — {{reason}}

### SCOPE LIMITS
- {{what_is_NOT_in_scope}}

## Tasks

### Task 1 — {{TASK_NAME}}
| Field | Value |
|-------|-------|
| Description | {{DESCRIPTION}} |
| Complexity | trivial / low / medium / high |
| Depends On | none |
| Files | `{{file1}}`, `{{file2}}` |
| AC Reference | AC-1, AC-2 |
| Verify | `{{specific_command_proving_completion}}` |
| Done | AC-1 passes, AC-2 passes |

### Task 2 — {{TASK_NAME}}
| Field | Value |
|-------|-------|
| Description | {{DESCRIPTION}} |
| Complexity | trivial / low / medium / high |
| Depends On | Task 1 |
| Files | `{{file1}}` |
| AC Reference | AC-3 |
| Verify | `{{specific_command}}` |
| Done | AC-3 passes |

## File Ownership
| File | Task(s) | Shared | Notes |
|------|---------|--------|-------|

## Risk Assessment
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|

## Error Patterns
| Pattern | Symptom | Fix Strategy |
|---------|---------|-------------|
