# Workflow: Verify Phase

Independent verification that phase goal was achieved.

---

## Verification Layers

### Layer 1: Build Check (All profiles)
- Run project build command
- Verify zero build errors

### Layer 2: Test Check (All profiles)
- Run test suite
- Verify all tests pass

### Layer 3: Goal-Backward (SPRINT+)
- Start from phase goal, derive required conditions
- Check each: Exists → Substantive → Wired → Functional
- Produce AC results table (PASS/FAIL per criterion)

### Layer 4: Functional Verification (SPRINT+)

Automated testing against a running application. Auto-detected from tech stack — uses Playwright MCP for web apps, XcodeBuildMCP for iOS/macOS apps. Skipped if no applicable tool is available or project has no runnable UI.

**4a. Detect Project Type**

| Tech Stack | Tool | How Detected |
|---|---|---|
| Web (React, Next.js, Vue, Svelte, HTML) | Playwright MCP | Web framework in `config.json` or `index.html` exists |
| iOS / macOS (Swift, SwiftUI, UIKit) | XcodeBuildMCP | Swift in tech stack or `.xcodeproj`/`.xcworkspace` exists |
| API / CLI | Playwright (API mode) or skip | REST/GraphQL endpoints in AC |
| Other | Skip | Mark SKIP with justification |

**4b. Map Acceptance Criteria to Test Scenarios**

Read AC from PLAN.md / SHARDs / SUMMARY.md. For each AC, derive:
- Target (URL, screen, endpoint)
- Interactions (navigate, click, fill, tap, swipe)
- Assertions (element visible, text matches, URL changed, status code)
- Screenshot name for evidence

**4c. Execute — Playwright (Web Apps)**

1. Start dev server if not running (`npm run dev`, `next dev`, etc.)
2. Wait for server ready (poll localhost until responsive)
3. For each scenario:
   - `browser_navigate` to target URL
   - `browser_snapshot` to inspect page state
   - `browser_click`, `browser_fill_form`, `browser_select_option` as needed
   - Assert expected state via `browser_snapshot` or `browser_evaluate`
   - `browser_take_screenshot` as evidence
   - Record PASS/FAIL with details
4. Collect `browser_console_messages` for error signals
5. Check `browser_network_requests` for failed API calls

**4d. Execute — XcodeBuildMCP (iOS/macOS Apps)**

1. `discover_projs` to find project/workspace
2. `list_schemes` and `list_sims` to identify build target
3. `build_sim` to compile for simulator
4. `boot_sim` and `launch_app_sim` to start the app
5. For each scenario:
   - `screenshot` to capture current state
   - `snapshot_ui` to inspect view hierarchy with coordinates
   - Perform interactions via XcodeBuildMCP UI automation tools
   - Assert expected state via `snapshot_ui` (element exists, text matches)
   - `screenshot` as evidence
   - Record PASS/FAIL with details
6. `start_sim_log_cap` / `stop_sim_log_cap` for error signals

**4e. Functional Verification Report**

```markdown
## Functional Verification

| AC | Scenario | Tool | Result | Evidence |
|----|----------|------|--------|----------|
| AC-1 | Login flow | Playwright | PASS | screenshots/login-success.png |
| AC-2 | Dashboard | Playwright | FAIL | Expected 3 cards, found 0 |
| AC-3 | Settings | XcodeBuildMCP | PASS | screenshots/settings-screen.png |
```

Screenshots saved to `.mike/phases/{N}-{name}/screenshots/`.

### Layer 5: Design Compliance (FORGE+ with DESIGN.md)
- Color contrast check (WCAG 2.1 AA)
- Token usage audit (no hardcoded colors)
- Anti-pattern scan
- Responsive check
- Design checklist reconciliation
- Use screenshots from Layer 4 for visual validation when available

### Layer 6: Regression (CITADEL / GOLD L4)

Full regression analysis — not just "did new tests pass" but "did we break anything that used to work." Also re-runs functional test scenarios from prior phases if they exist.

**5a. Full Test Suite Execution**
- Run ALL tests across the entire project, not just tests for the current phase
- Compare test count before and after: if tests disappeared, investigate
- Record: total tests, passed, failed, skipped, duration

**5b. Cross-Phase Integration**
For each previously completed phase:
1. Identify its key acceptance criteria (from its SUMMARY.md)
2. Verify those conditions still hold:
   - Do the endpoints/pages/features from prior phases still respond correctly?
   - Were any shared dependencies changed in a breaking way?
   - Were any shared files modified that prior phases depend on?
3. If a prior phase's AC no longer passes: mark as REGRESSION with severity

**5c. Import/Dependency Chain**
- Check that no import paths were broken by file moves or renames
- Verify that any newly added dependencies don't conflict with existing ones
- Check for circular dependency introduction

**Regression Report:**
```markdown
| Prior Phase | Key AC | Still Passes | Notes |
|-------------|--------|-------------|-------|
| Phase 1 | AC-1: ... | YES/NO | ... |
```

### Layer 7: Security (CITADEL / GOLD L4)

Stack-appropriate security audit focused on the OWASP Top 10 and common AI-era pitfalls.

**6a. Secrets Scan**
- Grep for patterns: API keys, tokens, passwords, connection strings
- Check for hardcoded credentials in source files (not just .env)
- Verify .gitignore covers sensitive files (.env, *.pem, *.key, credentials.*)
- Check that no secrets leaked into committed files (git log search)

**6b. OWASP Top 10 (stack-relevant)**
- **Injection:** SQL injection (parameterized queries?), command injection (shell escapes?), XSS (output encoding?)
- **Broken Auth:** Session management, password storage (bcrypt/argon2?), JWT validation
- **Sensitive Data Exposure:** HTTPS enforcement, data encryption, PII handling
- **XXE/Deserialization:** If XML/serialization is used, check for unsafe parsing
- **Broken Access Control:** Authorization checks on all protected routes, IDOR prevention
- **Security Misconfiguration:** Default credentials, verbose error messages in production, unnecessary ports
- **CSRF:** Token validation on state-changing requests (if web app)

Only check items relevant to the project's stack and scope. Skip inapplicable checks with justification.

**6c. Dependency Audit**
- Run the project's dependency audit command (npm audit, pip audit, cargo audit, etc.)
- Flag any HIGH or CRITICAL vulnerabilities
- Check for deprecated packages with known issues

**Security Report:**
```markdown
| Check | Result | Severity | Details |
|-------|--------|----------|---------|
| Secrets Scan | PASS/FAIL | ... | ... |
| Injection | PASS/FAIL/SKIP | ... | ... |
| Auth | PASS/FAIL/SKIP | ... | ... |
| Dependencies | PASS/FAIL | ... | ... |
```

---

## Output
- `.mike/phases/{N}-{name}/VERIFICATION.md`
- `.mike/phases/{N}-{name}/screenshots/` — functional test evidence (Layer 4)
- Regression report (CITADEL): cross-phase integration results
- Security report (CITADEL): OWASP + secrets + dependency audit
- State updated: `phase_status` = "verified", `loop_position` = "VERIFY"
