# Commit Conventions

Git commit format reference for MIKE projects. Rule R7 enforces atomic commits per task.

---

## Format

```
mike({scope}): {description}
```

- **Prefix**: Always `mike` (or custom prefix from `config.json` -> `git.commit_prefix`)
- **Scope**: Identifies what was changed
- **Description**: Imperative mood, lowercase, no period, max 72 chars

---

## Scope Patterns

### During Phase Execution

```
mike(phase-{N}): {description}
```

Examples:
```
mike(phase-1): add user authentication endpoint
mike(phase-3): implement dashboard chart component
mike(phase-2): fix validation for email input
```

### Sharded Execution (FORGE+)

```
mike(phase-{N}-shard-{NN}): {description}
```

Examples:
```
mike(phase-2-shard-01): create database migration for users table
mike(phase-2-shard-03): add API route handlers for auth
```

### Ralph Loop Iterations

```
mike(ralph-{N}): {description}
```

Examples:
```
mike(ralph-1): fix type error in auth middleware
mike(ralph-3): resolve test failure in user service
```

### Roadmap Operations

```
mike(roadmap): {operation} phase {N} ({name})
```

Examples:
```
mike(roadmap): add phase 5 (caching-layer)
mike(roadmap): insert phase 3.1 (hotfix-auth-bug)
mike(roadmap): remove phase 7 (deprecated-feature)
```

### Milestone Operations

```
mike(milestone): complete {version}
```

Examples:
```
mike(milestone): complete v1.0.0
mike(milestone): complete v0.5.0
```

### Planning Artifacts

```
mike(plan): {description}
```

Examples:
```
mike(plan): create phase 2 plan and shards
mike(plan): update roadmap with research findings
```

### Debug Sessions

```
mike(debug): {description}
```

Examples:
```
mike(debug): resolve memory leak in websocket handler
mike(debug): fix race condition in queue processor
```

---

## Rules

1. **One commit per task** — each task in a PLAN.md or SHARD gets its own commit
2. **Imperative mood** — "add feature" not "added feature" or "adding feature"
3. **Lowercase description** — no capital first letter
4. **No period** — don't end with a period
5. **Max 72 chars** — total commit message on first line
6. **Stage only relevant files** — don't stage unrelated changes
7. **Body optional** — use body for context when the description isn't sufficient

---

## Commit Body

For complex changes, add a body after a blank line:

```
mike(phase-2-shard-01): implement user auth flow

- Added JWT token generation and validation
- Created middleware for protected routes
- Integrated with existing session management
- AC-1: PASS (login returns valid JWT)
- AC-2: PASS (protected route rejects invalid token)
```

---

## Profile-Specific Behavior

| Profile | Commit Granularity | Body Required |
|---------|-------------------|---------------|
| BLITZ | Per task (coarse) | No |
| SPRINT | Per task | No |
| FORGE | Per shard | Recommended |
| CITADEL | Per shard + AC results in body | Yes |
| SCOUT | Per task | No |
| GOLD | Scale-adaptive | Scale-adaptive |

---

## Special Commits

| Type | Format | When |
|------|--------|------|
| WIP | `mike(wip): {description}` | `/mike:pause` with uncommitted work |
| Revert | `mike(revert): {description}` | Reverting a failed change |
| Config | `mike(config): {description}` | Settings or config changes only |
| Docs | `mike(docs): {description}` | Documentation-only changes |
