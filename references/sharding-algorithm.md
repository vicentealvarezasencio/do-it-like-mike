# Document Sharding Algorithm

> BMAD's killer innovation adapted for MIKE. 74-90% token reduction through atomic task decomposition.

---

## Overview

Document sharding decomposes a monolithic PLAN.md (potentially 32K+ tokens) into atomic SHARD files (~8K tokens each). Each shard is a complete, self-contained prompt for an execution agent. The executor receives ONLY its shard — no additional context needed.

## When Active

| Profile | Sharding |
|---------|----------|
| BLITZ | Never |
| SPRINT | Never |
| FORGE | Always |
| CITADEL | Always + synergy |
| SCOUT | Never |
| GOLD | L0-L1: Never, L2+: Always |

## Extraction Rules

For each task in PLAN.md, extract ONLY:

### From PLAN.md
- Task description, objective, steps
- Only AC referenced by this task
- Files to create/modify
- Dependencies (other shard IDs)
- Only boundaries relevant to this task's files

### From CONTEXT.md
- Only decisions that affect this task's files or domain

### From Schema/DB
- Only tables and columns this task touches

### From API Spec
- Only endpoints this task implements or calls

### From REQUIREMENTS.md
- Only REQ-IDs this task satisfies

### From DESIGN.md
- Only design tokens used by this shard's components
- Only component specs for components in this shard
- Only anti-patterns relevant to this shard's UI work

### From Error Patterns
- Only patterns matching this task's technology/approach

## Validation Checks

1. **Coverage:** Every task in PLAN.md maps to exactly one shard
2. **Completeness:** Each shard contains all info an executor needs
3. **Independence:** Shards in the same wave don't conflict on files
4. **Token budget:** Each shard targets ~8K tokens (warn if >12K)

## Wave Assignment

Shards are assigned to waves based on dependencies:
- Wave 1: Shards with no dependencies
- Wave 2: Shards depending only on Wave 1 shards
- Wave N: Shards depending only on Wave 1..N-1 shards

Executors within a wave run in parallel.

## Token Budget Guidance

| Section | Target Budget |
|---------|-------------|
| Context + Objective | ~500 tokens |
| Acceptance Criteria | ~300 tokens |
| What to Do (steps) | ~1500 tokens |
| Files to Read/Modify | ~200 tokens |
| Schema/API fragments | ~1500 tokens |
| Design context | ~1000 tokens |
| Decisions + Boundaries | ~500 tokens |
| Error patterns + Dependencies | ~500 tokens |
| Git + Deviation protocol | ~200 tokens |
| **Total** | **~6200 tokens** (buffer to 8K) |
