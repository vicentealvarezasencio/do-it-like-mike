# Workflow: Persistent Debug

Systematic debugging with persistent state that survives context resets.

---

## Overview

Debug sessions are tracked in `.mike/debug/{slug}.md`. The file IS the debug brain — it records symptoms, hypotheses, evidence, eliminated paths, and resolution. After `/clear`, running `/mike:debug` reads the file and resumes exactly where it left off.

---

## Debug File Structure

```markdown
---
status: gathering | investigating | fixing | verifying | awaiting_human_verify | resolved
trigger: "[verbatim user input]"
created: [ISO timestamp]
updated: [ISO timestamp]
---

## Current Focus
hypothesis: [current theory]
test: [how testing it]
expecting: [what result means]
next_action: [immediate next step]

## Symptoms
expected: [what should happen]
actual: [what actually happens]
errors: [error messages]
reproduction: [how to trigger]
started: [when broke / always broken]

## Eliminated
- hypothesis: [disproved theory]
  evidence: [what disproved it]
  timestamp: [when]

## Evidence
- timestamp: [when found]
  checked: [what examined]
  found: [what observed]
  implication: [what this means]

## Resolution
root_cause: [empty until found]
fix: [empty until applied]
verification: [empty until verified]
files_changed: []
```

---

## Update Rules

| Section | Rule | When |
|---------|------|------|
| Frontmatter.status | OVERWRITE | Each phase transition |
| Frontmatter.updated | OVERWRITE | Every file update |
| Current Focus | OVERWRITE | Before every action |
| Symptoms | IMMUTABLE | After gathering complete |
| Eliminated | APPEND only | When hypothesis disproved |
| Evidence | APPEND only | After each finding |
| Resolution | OVERWRITE | As understanding evolves |

**Key principle:** Update BEFORE acting, not after. The file must reflect intent so context resets can resume.

---

## Investigation Flow

```
1. Evidence Gathering
   - Search for error text in codebase
   - Read relevant files completely
   - Run app/tests, observe behavior
   - Append findings to Evidence

2. Hypothesis Formation
   - Form SPECIFIC, FALSIFIABLE hypothesis
   - Update Current Focus

3. Hypothesis Testing
   - One test at a time
   - One variable change per test
   - Append results to Evidence

4. Evaluation
   ├── CONFIRMED → Fix & Verify
   └── ELIMINATED → Append to Eliminated → Back to 2
```

---

## Scientific Method Principles

### Falsifiability

A good hypothesis can be proven wrong. If you can't design an experiment to disprove it, it's not useful.

- Bad: "Something is wrong with the state"
- Good: "State resets because component remounts on route change"

### Evidence Quality

**Strong:** directly observable, repeatable, unambiguous, independent
**Weak:** hearsay, non-repeatable, ambiguous, confounded

### Decision Point

Act when you can answer YES to all:
1. Understand the mechanism? (not just "what" but "why")
2. Reproduce reliably?
3. Have evidence, not just theory?
4. Ruled out alternatives?

---

## Techniques Reference

| Technique | When |
|-----------|------|
| Binary search | Large codebase, many possible failure points |
| Rubber duck | Stuck, confused, mental model doesn't match |
| Minimal reproduction | Complex system, many moving parts |
| Working backwards | Know correct output, don't know why it's wrong |
| Differential debugging | Worked before, now doesn't |
| Git bisect | Feature broke at unknown commit |
| Comment out everything | Many possible interactions |
| Observability first | Always — before changing behavior |

---

## Modes

| Mode | Behavior |
|------|----------|
| `find_and_fix` (default) | Full cycle: investigate → fix → verify → human confirm |
| `find_root_cause_only` | Diagnose only: investigate → return root cause |

---

## Status Transitions

```
gathering → investigating → fixing → verifying → awaiting_human_verify → resolved
                ^              |          |                |
                |______________|__________|________________|
                (loop back if verification fails)
```

---

## Resume Protocol

On `/mike:debug` with existing session:
1. Parse frontmatter → status
2. Read Current Focus → what was happening
3. Read Eliminated → what NOT to retry
4. Read Evidence → what's been learned
5. Continue from next_action

---

## Archive Protocol

Only after user confirms fix:
1. Update status to "resolved"
2. Move to `.mike/debug/resolved/`
3. Commit the fix with root cause in message
