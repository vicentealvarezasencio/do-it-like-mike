---
name: mike:architect
description: Architecture design + solutioning gate (>=90%)
allowed-tools: [Read, Write, Bash, Glob, Grep, Agent, AskUserQuestion]
---

<objective>
Architecture design, solutioning gate, and party mode (CITADEL). Produces a verified architecture document that scores >=90% on the solutioning gate before proceeding.

**Profile behavior:**
- **BLITZ:** Skip
- **SPRINT:** Skip
- **FORGE:** Solutioning gate >=90%
- **CITADEL:** Gate + party mode (multiple reviewer agents)
- **SCOUT:** Review-only (analyze existing architecture)
- **GOLD:** Scale-adaptive (L0-L1: Skip, L2: Skip, L3: Gate, L4: Gate + party mode)

**When to use:** After `/mike:research`, before `/mike:design` (if design.enabled) or `/mike:shard` or `/mike:plan`.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
@~/.claude/do-it-like-mike/references/deviation-rules.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/PROJECT.md
@.mike/ROADMAP.md
@.mike/config.json
</context>

<process>

<step name="resolve_profile">
Read `.mike/config.json` to determine the effective profile.

- **BLITZ / SPRINT / GOLD L0-L2:** Skip architect entirely. Log skip reason to STATE.md. Route to `/mike:plan`.
- **SCOUT:** Proceed in review-only mode (analyze existing architecture, do not create new one).
- **FORGE / GOLD L3:** Proceed with full architecture + solutioning gate.
- **CITADEL / GOLD L4:** Proceed with full architecture + solutioning gate + party mode.
</step>

<step name="gather_context">
Read all available inputs for architecture design:

1. **PROJECT.md** — requirements (REQ-IDs), tech stack, constraints, industry
2. **REQUIREMENTS.md** (if exists) — detailed functional/non-functional requirements
3. **RESEARCH.md** (if exists) — technology findings, recommendations, risks
4. **CONTEXT.md** (if exists) — locked user decisions, scope boundaries
5. **Previous SUMMARY.md** (if exists) — what was done before, lessons learned
6. **Existing codebase** (SCOUT mode) — scan for existing patterns, structure, conventions

Identify the key architectural concerns:
- What are the core components?
- What are the integration points?
- What are the quality attribute requirements (performance, security, scalability)?
- What constraints exist (tech stack, hosting, budget)?
</step>

<step name="design_architecture">
Define the system architecture. Write to `.mike/ARCHITECTURE.md` (or update the architecture section in PROJECT.md for smaller projects):

**Key sections:**

1. **Architecture Overview** — high-level diagram description (components and their relationships)
2. **Component Design** — each component with:
   - Responsibility
   - Public API / interface
   - Dependencies
   - Data model
3. **Data Architecture** — database schema, data flow, state management
4. **API Design** — endpoints, contracts, authentication
5. **Technology Decisions** — chosen tech with rationale for each choice
6. **Infrastructure** — hosting, deployment, CI/CD approach
7. **Cross-Cutting Concerns** — logging, error handling, auth, caching
8. **Constraints & Trade-offs** — what was sacrificed and why

**For SCOUT (review-only):**
- Analyze existing codebase structure
- Document discovered architecture patterns
- Identify architectural debt or inconsistencies
- Write findings to ARCHITECTURE.md as documentation
</step>

<step name="solutioning_gate">
Self-evaluate the architecture on 10 dimensions. Score each 0-10, then compute the total percentage.

| Dimension | Score (0-10) | Notes |
|-----------|-------------|-------|
| **Completeness** — All requirements addressable | | |
| **Feasibility** — Can be built with chosen tech/team | | |
| **Scalability** — Handles growth in users/data/features | | |
| **Security** — Auth, data protection, attack surface | | |
| **Performance** — Meets latency/throughput targets | | |
| **Testability** — Components testable in isolation | | |
| **Simplicity** — No unnecessary complexity | | |
| **Consistency** — Uniform patterns across components | | |
| **Extensibility** — New features addable without rewrites | | |
| **Risk** — Known risks have mitigations | | |

**Total: {sum}/100 = {percentage}%**

**Gate rule:** MUST score >=90% to pass.

If score <90%:
1. Identify the lowest-scoring dimensions
2. Document specific gaps for each
3. Revise the architecture to address gaps
4. Re-score
5. Maximum 3 revision iterations

If still <90% after 3 iterations:
- Present to user with the current score and remaining gaps
- User decides: approve with known gaps, or provide guidance

**For SCOUT:** Score is informational only (no gate). Report the score as an architecture health assessment.
</step>

<step name="party_mode">
**CITADEL / GOLD L4 only.**

After the architecture passes the solutioning gate, spawn 2-3 reviewer agents with distinct perspectives:

1. **Security Reviewer** — Reviews auth model, data protection, input validation, attack surface, secrets management. Flags vulnerabilities.
2. **Performance Reviewer** — Reviews data flow, query patterns, caching strategy, concurrency model, bottlenecks. Flags latency risks.
3. **DX Reviewer** — Reviews API ergonomics, developer onboarding, code organization, naming conventions, documentation needs. Flags usability issues.

Each agent receives:
- ARCHITECTURE.md
- PROJECT.md (requirements context)
- Their specific review focus

Collect all feedback. For each concern raised:
- **Critical:** Must address before proceeding
- **Important:** Should address, document if deferred
- **Nice-to-have:** Log for future consideration

Update ARCHITECTURE.md with responses to reviewer feedback.
</step>

<step name="present_to_user">
Present the architecture summary to the user:

1. **Architecture overview** — key components and their relationships
2. **Technology decisions** — what was chosen and why
3. **Gate score** — final score with dimension breakdown
4. **Reviewer feedback** (CITADEL) — summary of concerns and resolutions
5. **Trade-offs** — what was sacrificed and why
6. **Open questions** — anything needing user input

Wait for user approval or feedback. Adjust if needed.
</step>

<step name="update_state">
Update state files:
- `state.json`: `phase_status` = "architected", `loop_position` = "ARCHITECT"
- `STATE.md`: Update position, gate score, next action
- `session.last_command` = "/mike:architect"

Route to next action:
- If `design.enabled` in config: `--> /mike:design`
- Else if `sharding.enabled` in config: `--> /mike:shard`
- Else: `--> /mike:plan`
</step>

</process>

<success_criteria>
- [ ] Architecture document created (ARCHITECTURE.md)
- [ ] All requirements addressed by at least one component
- [ ] Solutioning gate scored >=90% (or user-approved with gaps)
- [ ] Party mode feedback addressed (CITADEL)
- [ ] Technology decisions documented with rationale
- [ ] Trade-offs explicitly stated
- [ ] User approved the architecture
- [ ] State updated with gate score
- [ ] Single next action suggested
</success_criteria>
