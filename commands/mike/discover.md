---
name: mike:discover
description: Requirements gathering, PRD generation, completeness gate
allowed-tools: [Read, Write, Bash, Glob, Grep, AskUserQuestion, Agent]
---

<objective>
Gather comprehensive requirements through adaptive questioning. Produces a structured PRD within PROJECT.md (SPRINT) or a separate DISCOVERY.md (CITADEL).

**Profile behavior:**
- **BLITZ:** Skip (inline in init)
- **SPRINT:** Standard PRD within PROJECT.md
- **FORGE:** PRD + completeness gate check
- **CITADEL:** Full DISCOVERY.md (authority document)
- **SCOUT:** PRP-style feature-scoped requirements + codebase intelligence
- **GOLD:** Scale-adaptive

**When to use:** After `/mike:init`, before `/mike:research`.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/workflows/profile-resolution.md
@~/.claude/do-it-like-mike/references/rules.md
@~/.claude/do-it-like-mike/templates/PROJECT.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/PROJECT.md
@.mike/config.json
</context>

<process>

<step name="adaptive_questioning">
Ask questions to deepen understanding of requirements. Adapt depth to profile:

**SPRINT (5-10 questions):**
1. Walk through each feature area identified in init
2. For each: What specifically should it do? What are the edge cases?
3. Any integrations with external services?
4. Authentication/authorization requirements?
5. Data model — what entities exist and how do they relate?

**FORGE (10-15 questions, deeper):**
All SPRINT questions plus:
6. Non-functional requirements (performance, scalability, security)
7. Error handling strategy
8. Migration needs
9. API contract requirements
10. Testing strategy expectations

**CITADEL (brain dump + structured extraction):**
All FORGE questions plus:
11. Compliance requirements
12. Audit trail needs
13. Deployment strategy
14. Rollback plan
15. Monitoring and alerting

**Key behavior:** Ask ONE question at a time. Extract maximum information from each answer.
</step>

<step name="generate_prd">
Update `.mike/PROJECT.md` with structured requirements:

- Populate the Requirements table with REQ-{N} IDs
- Add constraints discovered during questioning
- Update success criteria based on discussion
- Record all decisions in the decisions table

For CITADEL: Also create `.mike/DISCOVERY.md` as the authority document.
</step>

<step name="completeness_gate">
**For FORGE+ profiles:**

Run a completeness check: "Could an executor agent implement these requirements without guessing?"

Check each requirement for:
- [ ] Clear acceptance criteria (Given/When/Then)
- [ ] No ambiguous terms ("fast", "good", "user-friendly")
- [ ] Technical constraints specified
- [ ] Edge cases documented
- [ ] Dependencies identified

If completeness < 80%: Ask targeted follow-up questions for the gaps.
If completeness >= 80%: Proceed.
</step>

<step name="update_state">
Update state files:
- `state.json`: `loop_position` = "DISCOVER"
- `STATE.md`: Update position and next action

Route: `--> /mike:research`
</step>

</process>

<success_criteria>
- [ ] Requirements captured with REQ-{N} IDs
- [ ] Each requirement has acceptance criteria
- [ ] PROJECT.md updated with full requirements
- [ ] Completeness gate passed (FORGE+)
- [ ] State updated
</success_criteria>
