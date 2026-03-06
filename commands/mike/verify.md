---
name: mike:verify
description: Independent QA, regression testing, design compliance
allowed-tools: [Read, Write, Bash, Glob, Grep, Agent]
---

<objective>
Independently verify that the phase goal was achieved. The verifier did NOT write the code — it checks independently.

**Profile behavior:**
- **BLITZ:** Lint + test only (in-session)
- **SPRINT:** Verifier agent (goal-backward)
- **FORGE:** Independent QA + design compliance
- **CITADEL:** 6-layer verification
- **SCOUT:** Self-verification + existing test suite
- **GOLD:** Scale-adaptive

**When to use:** After `/mike:execute`, before `/mike:unify`.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/config.json
</context>

<process>

<step name="resolve_verification_depth">
Determine depth from profile:

| Profile | Layers |
|---------|--------|
| BLITZ | 1: Build + test |
| SPRINT | 3: Build + test + goal-backward |
| FORGE | 4: Build + test + goal-backward + design compliance |
| CITADEL | 6: Build + test + goal-backward + design + regression + security |
| SCOUT | 3: Build + test + existing test suite |
</step>

<step name="layer_1_build">
**Layer 1: Build Check**
- Run the project build command
- Verify no build errors
- Check for TypeScript/lint errors if applicable
</step>

<step name="layer_2_test">
**Layer 2: Test Check**
- Run the project test suite
- Verify all tests pass
- Check for new test coverage (if TDD was used)
</step>

<step name="layer_3_goal_backward">
**Layer 3: Goal-Backward Analysis (SPRINT+)**

Start from the phase goal (from PLAN.md), not from the task list:
1. What must be true for this phase goal to be achieved?
2. Verify each condition:
   - **Exists:** Does the code/file exist?
   - **Substantive:** Does it contain real implementation (not stubs)?
   - **Wired:** Is it connected to the rest of the system?
   - **Functional:** Does it actually work?

Produce AC results:
```
| AC | Description | Result | Evidence |
|----|-------------|--------|----------|
| AC-1 | {desc} | PASS | {evidence} |
```
</step>

<step name="layer_4_design">
**Layer 4: Design Compliance (FORGE+)**

If DESIGN.md exists:
- Check color contrast (WCAG 2.1 AA)
- Verify design tokens are used (no hardcoded colors)
- Scan for anti-patterns from DESIGN.md
- Check responsive breakpoints
- Verify design checklist items
</step>

<step name="layer_5_regression">
**Layer 5: Regression Check (CITADEL)**
- Run full test suite (not just new tests)
- Check for regressions in existing functionality
- Cross-phase integration check
</step>

<step name="layer_6_security">
**Layer 6: Security Scan (CITADEL)**
- Check for OWASP top 10 vulnerabilities
- Verify no secrets in code
- Check dependency vulnerabilities
</step>

<step name="write_report">
Write `.mike/phases/{N}-{name}/VERIFICATION.md`:

```markdown
# Verification — Phase {N}: {PHASE_NAME}

## Results Summary
| Layer | Result | Notes |
|-------|--------|-------|
| Build | PASS/FAIL | {notes} |
| Tests | PASS/FAIL | {notes} |
| Goal-Backward | PASS/FAIL | {notes} |
| Design | PASS/FAIL/SKIP | {notes} |

## Acceptance Criteria
| AC | Description | Result | Evidence |
|----|-------------|--------|----------|
| AC-1 | {desc} | PASS | {evidence} |

## Issues Found
| # | Severity | Description | Fix |
|---|----------|-------------|-----|

## False Positives
{any flagged issues that aren't real problems}

## Verdict
PASS / PASS WITH NOTES / FAIL
```
</step>

<step name="update_state">
Update state:
- `state.json`: `phase_status` = "verified", `loop_position` = "VERIFY"
- `STATE.md`: Update position

Route: `--> /mike:unify`
</step>

</process>

<success_criteria>
- [ ] All applicable verification layers executed
- [ ] VERIFICATION.md written
- [ ] AC results documented with evidence
- [ ] Issues found are actionable
- [ ] State updated
</success_criteria>
