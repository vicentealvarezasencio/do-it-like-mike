# Context Bracket Strategies

Context brackets define mandatory strategies based on remaining context window capacity. The context monitor hook (`mike-context-monitor.js`) tracks usage and reports bracket transitions.

---

## Bracket Definitions

| Bracket | Remaining | Indicator | Strategy |
|---------|-----------|-----------|----------|
| **FRESH** | > 70% | Green | Full capability. Start new phases, spawn parallel agents, deep research. |
| **MODERATE** | 40–70% | Yellow | Continue current work. Consider splitting large plans. Avoid spawning unnecessary agents. |
| **DEEP** | 20–40% | Orange | Complete current task only. Do not start new phases. Prepare for handoff if needed. |
| **CRITICAL** | < 20% | Red | **STOP new work.** Complete ONLY the in-progress task. Create HANDOFF immediately. |

---

## FRESH (> 70% remaining)

All capabilities available:
- Spawn parallel execution agents (wave-based)
- Start new phases
- Deep research with multiple agents
- Full verification workflows
- Party mode (CITADEL)

**No restrictions apply.**

---

## MODERATE (40–70% remaining)

Restrictions:
- **Reduce parallelism**: Max 2 concurrent agents instead of profile maximum
- **Plan splitting**: If remaining plan has > 5 tasks, consider splitting into smaller units
- **Avoid deep research**: Use quick research depth only
- **Monitor closely**: Bracket transitions accelerate as context fills

**Action:** Continue current work but plan for session boundaries.

---

## DEEP (20–40% remaining)

Restrictions:
- **No new phases**: Do not start a new phase
- **No parallel agents**: All work in-session, sequential
- **No research agents**: Use direct file reads only
- **Complete and close**: Focus on finishing the current task and producing SUMMARY.md
- **Prepare handoff**: Start drafting HANDOFF if current unit cannot complete in remaining context

**Action:** Finish current task, UNIFY, prepare for new session.

---

## CRITICAL (< 20% remaining)

**MANDATORY actions — R6 enforces this:**

1. **STOP** all new work immediately
2. **Complete** only the current in-progress task (if nearly done)
3. **Create HANDOFF** with:
   - Current loop position
   - Key decisions made this session
   - In-progress work description
   - Prioritized next actions
   - State file checksums
4. **Commit** any uncommitted work (WIP commit acceptable)
5. **Do NOT** start any new tasks, phases, or research

**Action:** HANDOFF and end session.

---

## Bracket Detection

The context monitor hook estimates remaining capacity by tracking:
- Number of tool calls in current session
- Cumulative output size
- Conversation turn count

The hook outputs warnings on bracket transitions:
```
[MIKE] Context: 65% remaining (MODERATE) -- consider plan splits
[MIKE] Context: 35% remaining (DEEP) -- complete current task only
[MIKE] WARNING: Context CRITICAL (<20%) -- prepare HANDOFF immediately
```

---

## Profile-Specific Adjustments

| Profile | MODERATE Threshold | Notes |
|---------|-------------------|-------|
| BLITZ | Ignore (sessions are short) | BLITZ tasks should complete in one session |
| SPRINT | Standard (40-70%) | |
| FORGE | Standard (40-70%) | Shard execution helps — each agent gets fresh context |
| CITADEL | Elevated (50-70%) | Earlier caution due to complexity |
| SCOUT | Standard (40-70%) | |
| GOLD | Scale-adaptive | L0-L1: ignore. L2+: standard. L4: elevated. |
