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

### Layer 4: Design Compliance (FORGE+ with DESIGN.md)
- Color contrast check (WCAG 2.1 AA)
- Token usage audit (no hardcoded colors)
- Anti-pattern scan
- Responsive check
- Design checklist reconciliation

### Layer 5: Regression (CITADEL)
- Full test suite (not just new tests)
- Cross-phase integration check

### Layer 6: Security (CITADEL)
- OWASP top 10 scan
- No secrets in code
- Dependency vulnerability check

---

## Output
- `.mike/phases/{N}-{name}/VERIFICATION.md`
- State updated: `phase_status` = "verified", `loop_position` = "VERIFY"
