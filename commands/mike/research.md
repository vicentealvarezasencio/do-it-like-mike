---
name: mike:research
description: Technology research with parallel agents (1-2 waves)
allowed-tools: [Read, Write, Bash, Glob, Grep, Agent, WebSearch, WebFetch]
---

<objective>
Research technologies, patterns, and risks relevant to the project. Uses parallel research agents for efficient discovery.

**Profile behavior:**
- **BLITZ:** Skip
- **SPRINT:** 1 wave, quick research
- **FORGE:** 2 waves (broad + implementation-focused)
- **CITADEL:** 2 waves + deep + skill creation
- **SCOUT:** 3 depths available (quick/standard/deep)
- **GOLD:** Scale-adaptive

**When to use:** After `/mike:discover`, before `/mike:architect` (or `/mike:plan` for SPRINT).
</objective>

<execution_context>
@~/.claude/do-it-like-mike/workflows/research.md (when it exists)
@~/.claude/do-it-like-mike/references/rules.md
@~/.claude/do-it-like-mike/templates/RESEARCH.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/PROJECT.md
@.mike/config.json
</context>

<process>

<step name="identify_research_topics">
From PROJECT.md, identify what needs researching:

1. **Technology choices** — best libraries, frameworks, patterns for the requirements
2. **Integration patterns** — how to connect with external services
3. **Risk areas** — known pitfalls with the chosen tech stack
4. **Prior art** — existing solutions to learn from

Generate 2-4 research topics with specific questions for each.
</step>

<step name="wave_1_research">
**Wave 1: Broad research**

Spawn 2-4 `mike-researcher` agents in parallel (when agents exist — Phase 3+):

Each agent gets:
- One research topic
- Specific questions to answer
- PROJECT.md context
- Instructions to produce structured findings

For now (before agents exist), perform research in-session:
- Use WebSearch for current information
- Use WebFetch for documentation
- Read relevant reference files in `_references/` if applicable

Produce findings for each topic.
</step>

<step name="wave_2_research">
**Wave 2 (FORGE+ only): Implementation-focused research**

Based on Wave 1 findings, identify implementation-specific questions:
- API specifics, version compatibility
- Configuration patterns
- Known bugs or workarounds
- Performance benchmarks

Research these targeted questions.
</step>

<step name="synthesize">
Merge all research findings into `.mike/RESEARCH.md`:

```markdown
# Research Findings — {{PROJECT_NAME}}

## Topic 1: {{TOPIC}}
### Key Findings
- {finding}
### Recommendation
{recommendation}
### Sources
- {source}

## Topic 2: {{TOPIC}}
...

## Risk Assessment
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|

## Decisions Needed
- {decision_1}
- {decision_2}
```

Present key findings and decisions to the user.
</step>

<step name="update_state">
Update state files:
- `state.json`: `loop_position` = "RESEARCH"
- `STATE.md`: Update position and next action
- `PROJECT.md`: Add research-informed decisions

Route:
- SPRINT: `--> /mike:plan` (or `/mike:discuss` if phase context needed)
- FORGE+: `--> /mike:architect`
</step>

</process>

<success_criteria>
- [ ] Research topics identified from requirements
- [ ] Findings documented in RESEARCH.md
- [ ] Risks identified with mitigations
- [ ] Decisions presented to user
- [ ] State updated
</success_criteria>
