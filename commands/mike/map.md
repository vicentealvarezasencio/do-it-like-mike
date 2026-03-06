---
name: mike:map
description: 7-doc codebase analysis with 4 parallel Explore agents
allowed-tools: [Read, Write, Bash, Glob, Grep, Agent]
---

<objective>
Analyze an existing codebase using 4 parallel mike-codebase-mapper agents to produce 7 structured documents in `.mike/codebase/`.

Each mapper agent explores a focus area and **writes documents directly** — the orchestrator only receives confirmations, keeping context usage minimal.

**Profile behavior:**
- **BLITZ:** Skip (codebase analysis not needed for quick tasks)
- **SPRINT:** Skip (plan-level context sufficient)
- **FORGE:** Skip (architecture-forward, not codebase-first)
- **CITADEL:** Optional (user can request before architect)
- **SCOUT:** Required first step — runs before /mike:init
- **GOLD:** L0-L1: Skip, L2+: Full

**When to use:**
- Brownfield projects before initialization (understand existing code first)
- Refreshing codebase understanding after significant changes
- Onboarding to an unfamiliar codebase
- Before major refactoring

**When NOT to use:**
- Greenfield projects with no code yet
- Trivial codebases (<5 files)
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
</execution_context>

<context>
$ARGUMENTS (optional — focus area, e.g., "api" or "auth")
@.mike/STATE.md (if exists)
@.mike/config.json (if exists)
</context>

<process>

<step name="check_profile">
Read `.mike/config.json` if it exists. Determine if codebase mapping is appropriate for the current profile.

**Skip conditions:**
- Profile is BLITZ, SPRINT, or FORGE (unless user explicitly invoked `/mike:map`)
- GOLD L0-L1

If the user explicitly invoked `/mike:map`, always proceed regardless of profile.
</step>

<step name="check_existing">
Check if `.mike/codebase/` already exists.

**If exists:**
- Show file listing with line counts
- Ask: "Codebase map exists. Refresh (overwrite), or skip?"
- If skip: route to `/mike:progress`

**If not exists:**
- Continue to spawn mappers
</step>

<step name="create_directory">
```bash
mkdir -p .mike/codebase
```
</step>

<step name="spawn_mappers">
Spawn 4 parallel `mike-codebase-mapper` agents, each with a focus area:

**Agent 1 — tech focus:**
Writes STACK.md and INTEGRATIONS.md
→ Languages, runtime, frameworks, dependencies, external services, APIs

**Agent 2 — arch focus:**
Writes ARCHITECTURE.md and STRUCTURE.md
→ Patterns, layers, data flow, entry points, directory layout, naming

**Agent 3 — quality focus:**
Writes CONVENTIONS.md and TESTING.md
→ Code style, linting, naming patterns, test framework, test organization

**Agent 4 — concerns focus:**
Writes CONCERNS.md
→ Tech debt, known bugs, security risks, performance bottlenecks, fragile areas

If the user provided $ARGUMENTS (a specific focus area), pass it to all agents so they prioritize that subsystem.

Each agent receives:
- Focus area assignment
- Output path: `.mike/codebase/`
- Forbidden files list (no .env, credentials, keys)
- Instruction to write directly and return confirmation only
</step>

<step name="verify_output">
After all agents complete, verify all 7 documents exist:

```bash
ls -la .mike/codebase/*.md
wc -l .mike/codebase/*.md
```

Expected files:
- STACK.md
- INTEGRATIONS.md
- ARCHITECTURE.md
- STRUCTURE.md
- CONVENTIONS.md
- TESTING.md
- CONCERNS.md

If any are missing, report which agent failed and offer to re-run that focus area.
</step>

<step name="report">
Present codebase map summary:

```
## Codebase Map Complete

| Document | Lines | Focus |
|----------|-------|-------|
| STACK.md | {N} | Languages, runtime, frameworks |
| INTEGRATIONS.md | {N} | External services, APIs |
| ARCHITECTURE.md | {N} | Patterns, layers, data flow |
| STRUCTURE.md | {N} | Directory layout, file locations |
| CONVENTIONS.md | {N} | Code style, naming patterns |
| TESTING.md | {N} | Test framework, patterns |
| CONCERNS.md | {N} | Tech debt, risks, fragile areas |
```
</step>

<step name="update_state">
If `.mike/STATE.md` exists:
- Update loop position to "MAP"
- Note codebase analysis date

Route to next action:
- If SCOUT and no project initialized: `--> /mike:init`
- If refreshing existing project: `--> /mike:progress`
</step>

</process>

<success_criteria>
- [ ] `.mike/codebase/` directory created
- [ ] All 7 codebase documents written by mapper agents
- [ ] Documents follow template structure with file paths
- [ ] 4 parallel agents completed without errors
- [ ] Line counts reported for each document
- [ ] State updated (if project exists)
- [ ] Single next action suggested
</success_criteria>
