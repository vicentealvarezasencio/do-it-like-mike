# Workflow: Profile Resolution

Resolves which profile is active and what behaviors apply for the current command.

---

## When to Run

This workflow is invoked at the start of EVERY `/mike:` command (except `/mike:help` and `/mike:update`). It determines how the command should behave based on the active profile.

---

## Steps

### Step 1 — Read Configuration

Read `.mike/config.json` to get the active profile and scale level.

```
profile = config.profile          # "blitz" | "sprint" | "forge" | "citadel" | "scout" | "gold"
scale_level = config.scale_level  # null | "L0" | "L1" | "L2" | "L3" | "L4"
scale_mode = config.scale_mode    # "auto" | "manual"
```

### Step 2 — Resolve Effective Profile

If profile is `"gold"`, resolve to an effective behavior set based on scale level:

| GOLD Scale | Effective Behavior |
|------------|-------------------|
| L0 (Atomic) | Same as BLITZ |
| L1 (Minor) | Same as BLITZ with lightweight UNIFY |
| L2 (Standard) | Same as SPRINT with sharding |
| L3 (Major) | Same as FORGE |
| L4 (Enterprise) | Same as CITADEL |

If scale level is `null` and scale_mode is `"auto"`, trigger the scale detection workflow first.

### Step 3 — Return Behavior Matrix

For the resolved profile, return the behavior set for the current command:

**Command behaviors by profile:**

| Command | BLITZ | SPRINT | FORGE | CITADEL | SCOUT |
|---------|-------|--------|-------|---------|-------|
| `init` | Minimal (1-3 sentences) | Standard (5-10 Q) | Deep (adaptive) | Full (brain dump) | Codebase-first |
| `discover` | Skip (inline in init) | Standard PRD | PRD + completeness gate | PRD + DISCOVERY.md | PRP + codebase intel |
| `research` | Skip | 1 wave quick | 2 waves + skills | 2 waves + deep + skills | 3 depths |
| `architect` | Skip | Skip | Solutioning gate >=90% | Gate + party mode | Review-only |
| `design` | Skip | Lightweight (auto) | Standard (full system) | Full (per-page + approval) | Extract (reverse-engineer) |
| `shard` | Skip (single task list) | Skip (per-phase plans) | Full atomic sharding | Full + synergy | Skip (feature plans) |
| `execute` | In-session sequential | Wave-parallel (2-3) | Wave-parallel sharded (3-5) | Wave-parallel sharded (5+) | In-session sequential |
| `verify` | Lint+test only | Verifier agent | Independent QA | 6-layer verification | Self + existing tests |
| `unify` | Lightweight (<30 lines) | Standard | Full (AC table, 3-loc decisions) | Full + synergy + false positive | Full + codebase delta |

### Step 4 — Load Rules

Load the appropriate rules for the current context (see `references/rules.md`):
- Always load CRITICAL rules (R1-R6)
- Load QUALITY rules (R7-R9) during execution and UNIFY
- Load PATTERN rules (R10-R12) during session management
- Load profile-specific rules if any

---

## Output

The resolved profile behavior is used by the calling command to determine its execution depth. This is not a separate file — it's an in-context resolution that shapes the command's behavior.
