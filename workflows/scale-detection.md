# Workflow: Scale Detection

Auto-detects the appropriate scale level for the GOLD profile based on project signals.

---

## When to Run

Triggered during `/mike:init` when `profile: "gold"` and `scale_mode: "auto"`. Also re-run when `/mike:settings --scale auto` is set.

---

## Steps

### Step 1 — Gather Signals

Collect information from multiple sources:

1. **User's project description** — complexity keywords, scope indicators
2. **Existing codebase** (if brownfield):
   - `file_count` = count of source files (exclude node_modules, .git, vendor, build)
   - `dir_count` = count of source directories
3. **Requirements stated** — count from PROJECT.md or init conversation
4. **Phases in roadmap** — count from ROADMAP.md or init conversation

### Step 2 — Apply Detection Logic

```
IF user says "quick fix" or "bug fix" or "config change" or "typo"
  OR estimated_files <= 2:
  -> L0 (Atomic)

ELSE IF estimated_files <= 10
  OR requirements <= 5
  OR phases <= 2:
  -> L1 (Minor)

ELSE IF estimated_files <= 30
  OR requirements <= 15
  OR phases <= 5:
  -> L2 (Standard)

ELSE IF estimated_files <= 100
  OR requirements <= 30
  OR phases <= 8:
  -> L3 (Major)

ELSE:
  -> L4 (Enterprise)
```

### Step 3 — Confirm with User

Present the detected scale level with rationale:

```
I've detected this as an **L2 (Standard)** project based on:
- ~20 estimated files
- 8 requirements identified
- 4 phases planned

This means MIKE will use: per-phase planning, wave-parallel execution (2-3 agents),
standard verification, and document sharding.

Does this feel right? You can override with `/mike:settings --scale L3` anytime.
```

### Step 4 — Apply

Update `config.json`:
```json
{
  "scale_level": "L2",
  "scale_mode": "auto"
}
```

Update `state.json` and `STATE.md` with the detected scale level.

---

## Scale Level Summary

| Level | Name | Typical Project | Files | Phases |
|-------|------|----------------|-------|--------|
| L0 | Atomic | Bug fix, config change, typo | 1-2 | 1 |
| L1 | Minor | Small feature, script, utility | 3-10 | 1-2 |
| L2 | Standard | Feature module, integration, refactor | 11-30 | 3-5 |
| L3 | Major | New service, full feature set, migration | 31-100 | 6-8 |
| L4 | Enterprise | Platform, multi-service, full product | 100+ | 8+ |

---

## User Override

User can always override detection:
- During init: "This is a big project, use L3"
- Anytime: `/mike:settings --scale L3`
- Reset to auto: `/mike:settings --scale auto`
