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
- **CITADEL:** 7-layer verification
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
| BLITZ | 1-2: Build + test |
| SPRINT | 1-4: Build + test + goal-backward + functional |
| FORGE | 1-5: Build + test + goal-backward + functional + design compliance |
| CITADEL | 1-7: All layers |
| SCOUT | 1-4: Build + test + existing test suite + functional |
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

<step name="layer_4_functional">
**Layer 4: Functional Verification (SPRINT+)**

Automated UI/functional testing against a running application. Auto-detected from tech stack in `config.json` / `PROJECT.md`.

**Skip conditions:**
- Project type is library, data pipeline, or has no runnable UI/API
- No applicable MCP tools available (Playwright or XcodeBuildMCP)

**4a. Detect project type and tool:**

| Tech Stack | Tool | Detection |
|---|---|---|
| Web app (React, Next.js, Vue, Svelte, HTML) | Playwright MCP | `tech_stack` includes web framework or `index.html` exists |
| iOS / macOS app (Swift, SwiftUI, UIKit) | XcodeBuildMCP | `tech_stack` includes Swift/Xcode or `.xcodeproj`/`.xcworkspace` exists |
| API / CLI | Playwright MCP (API mode) | REST/GraphQL endpoints defined in AC |
| Other | Skip | Mark as SKIP with justification |

**4b. Derive test scenarios from acceptance criteria:**

Read the phase's AC (from PLAN.md, SHARDs, or SUMMARY.md). Map each AC to a functional test:

```
AC-1: "User can log in with email and password"
  → Navigate to /login
  → Fill email field, fill password field
  → Click submit
  → Assert: redirected to /dashboard (or expected screen)
  → Screenshot: login-success.png

AC-2: "Dashboard shows user's projects"
  → Assert: project list visible
  → Assert: at least one project card rendered
  → Screenshot: dashboard-projects.png
```

**4c. Execute with Playwright (web apps):**

1. Start the dev server if not running (`npm run dev`, `next dev`, etc.)
2. Wait for the server to be ready
3. For each test scenario:
   - Navigate to the target URL
   - Perform interactions (click, fill, select, type)
   - Assert expected state (element visible, text content, URL change)
   - Take a screenshot as evidence
   - Record PASS/FAIL with details
4. Collect console errors and network failures as additional signals

**4d. Execute with XcodeBuildMCP (iOS/macOS apps):**

1. Discover the Xcode project and scheme
2. Build for simulator
3. Boot the target simulator and launch the app
4. For each test scenario:
   - Capture a screenshot or inspect UI hierarchy
   - Perform interactions (tap, swipe, type text)
   - Assert expected state (element exists, text matches)
   - Take a screenshot as evidence
   - Record PASS/FAIL with details
5. Capture device logs for error signals

**4e. Produce functional report:**

```markdown
## Functional Verification

| AC | Scenario | Tool | Result | Evidence |
|----|----------|------|--------|----------|
| AC-1 | Login flow | Playwright | PASS | screenshots/login-success.png |
| AC-2 | Dashboard | Playwright | FAIL | Expected 3 cards, found 0 |
```

Screenshots are saved to `.mike/phases/{N}-{name}/screenshots/`.
</step>

<step name="layer_5_design">
**Layer 5: Design Compliance (FORGE+)**

If DESIGN.md exists:
- Check color contrast (WCAG 2.1 AA)
- Verify design tokens are used (no hardcoded colors)
- Scan for anti-patterns from DESIGN.md
- Check responsive breakpoints
- Verify design checklist items

If Playwright or XcodeBuildMCP is available, use screenshots from Layer 4 for visual validation.
</step>

<step name="layer_6_regression">
**Layer 6: Regression Check (CITADEL)**
- Run full test suite (not just new tests)
- Check for regressions in existing functionality
- Cross-phase integration check
- Re-run functional tests from prior phases if scenarios exist
</step>

<step name="layer_7_security">
**Layer 7: Security Scan (CITADEL)**
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
| Functional | PASS/FAIL/SKIP | {notes} |
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
