# Shard {{SHARD_ID}} — {{TASK_NAME}}

## Context
- **Project:** {{PROJECT_NAME}}
- **Phase:** {{N}} — {{PHASE_NAME}}
- **Phase Goal:** {{PHASE_GOAL}}
- **Profile:** {{PROFILE}}

## Objective
{{ONE_CLEAR_SENTENCE}}

## Acceptance Criteria
<!-- Copied from PLAN.md. Only the AC relevant to THIS shard. -->
- **AC-{{N}}:** Given {{precondition}}, when {{action}}, then {{expected_result}}

## What to Do
1. {{STEP_1}}
2. {{STEP_2}}
3. {{STEP_3}}

## Files to Read Before Starting
- `{{path}}` — {{why}}

## Files to Create or Modify
- `{{path}}` — create / modify — {{what_changes}}

## Relevant Schema (if applicable)
<!-- Only the DB schema fragments relevant to this shard -->

## Relevant API Definitions (if applicable)
<!-- Only the API interface definitions relevant to this shard -->

## Design Context
<!-- Extracted from DESIGN.md. Only tokens/specs relevant to this shard. -->

### Applicable Tokens
| Token | Value |
|-------|-------|
| {{TOKEN}} | {{VALUE}} |

### Component Specs (This Shard)
{{COMPONENT_SPECS_OR_NONE}}

### Anti-Patterns (This Shard)
{{ANTI_PATTERNS_OR_NONE}}

### Style Notes
{{STYLE_NOTES_OR_NONE}}

## User Decisions
<!-- Only the decisions from CONTEXT.md relevant to this shard -->
- D-{{N}}: {{decision}}

## Boundaries
### DO NOT CHANGE
- `{{file}}` — {{reason}}

## Error Patterns
<!-- Known failure modes for this type of work -->
| Pattern | Fix |
|---------|-----|
| {{pattern}} | {{fix}} |

## Dependencies
- Depends on: {{SHARD_IDS_OR_NONE}}
- Blocks: {{SHARD_IDS_OR_NONE}}

## Git Convention
- Format: `mike(phase-{{N}}): {{short_description}}`
- Stage ONLY files listed above

## Deviation Protocol
1. Auto-fix bugs (log in completion)
2. Auto-add critical deps (log in completion)
3. Auto-fix blockers (simplest approach)
4. ASK for architectural changes (never auto-decide)
