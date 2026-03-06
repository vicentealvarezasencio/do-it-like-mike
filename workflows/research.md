# Workflow: Research

Orchestrates 1-2 wave research with parallel agents.

---

## Wave 1: Broad Research (All profiles that research)
1. Identify 2-4 research topics from PROJECT.md
2. Spawn `mike-researcher` agents in parallel (one per topic)
3. Each agent gets: topic + questions + PROJECT.md context
4. Collect outputs
5. Spawn `mike-synthesizer` to merge findings into RESEARCH.md

## Wave 2: Implementation-Focused (FORGE+ only)
1. From Wave 1 findings, identify implementation-specific questions
2. Spawn targeted researchers for API details, version compat, config patterns
3. Merge into RESEARCH.md

---

## Output
- `.mike/RESEARCH.md` — unified research document
- Decisions needing user input presented for resolution
- State updated: `loop_position` = "RESEARCH"
