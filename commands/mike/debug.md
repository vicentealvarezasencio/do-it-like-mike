---
name: mike:debug
description: Persistent debug session (survives context resets)
allowed-tools: [Read, Write, Edit, Bash, Glob, Grep, Agent, WebSearch]
---

<objective>
Start or resume a persistent debug session. Debug state is saved to `.mike/debug/{slug}.md` so it survives `/clear` and context resets. The debugger uses scientific method — hypotheses, evidence gathering, elimination — not guessing.

**Profile behavior:**
- All profiles: Full debug capability (debugging is universal)
- SCOUT: Auto-creates debug sessions for unexpected behavior during execution

**When to use:**
- Bug reports or unexpected behavior
- Intermittent issues that need persistent tracking
- Complex bugs that may span multiple sessions
- Anytime something doesn't work as expected

**Arguments:** Description of the issue, OR a number to resume an existing session.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
@~/.claude/do-it-like-mike/workflows/debug.md
</execution_context>

<context>
$ARGUMENTS
@.mike/STATE.md (if exists)
@.mike/config.json (if exists)
</context>

<process>

<step name="check_active_sessions">
Check for active debug sessions:

```bash
ls .mike/debug/*.md 2>/dev/null | grep -v resolved
```

**If active sessions exist AND no $ARGUMENTS:**
- List sessions with status, current hypothesis, and next action
- Wait for user to select by number or describe a new issue

**If active sessions exist AND $ARGUMENTS is a number:**
- Resume that session (go to resume_session)

**If active sessions exist AND $ARGUMENTS is text:**
- Start a new session (go to create_session)

**If no active sessions AND no $ARGUMENTS:**
- Prompt: "No active debug sessions. Describe the issue to start one."

**If no active sessions AND $ARGUMENTS:**
- Start a new session (go to create_session)
</step>

<step name="create_session">
Create the debug file immediately. This is the persistent brain of the debug session.

1. Generate slug from user input (lowercase, hyphens, max 30 chars)
2. `mkdir -p .mike/debug`
3. Write `.mike/debug/{slug}.md` with initial state:

```markdown
---
status: gathering
trigger: "{verbatim user input}"
created: {ISO timestamp}
updated: {ISO timestamp}
---

## Current Focus

hypothesis: (none yet)
test: (none yet)
expecting: (none yet)
next_action: gather symptoms

## Symptoms

expected: (to be filled)
actual: (to be filled)
errors: (to be filled)
reproduction: (to be filled)
started: (to be filled)

## Eliminated

(none yet)

## Evidence

(none yet)

## Resolution

root_cause: (unknown)
fix: (not applied)
verification: (not verified)
files_changed: []
```

Proceed to gather_symptoms.
</step>

<step name="gather_symptoms">
Gather symptoms through focused questioning. Update the debug file after EACH answer.

Ask only what the user can observe (they are the reporter, you are the investigator):

1. **Expected behavior** → update Symptoms.expected
2. **Actual behavior** → update Symptoms.actual
3. **Error messages** (if any) → update Symptoms.errors
4. **When it started / if it ever worked** → update Symptoms.started
5. **How to reproduce** → update Symptoms.reproduction

After gathering: update status to "investigating", proceed to investigate.

**Skip if symptoms are already clear from $ARGUMENTS** — extract what you can and ask only for gaps.
</step>

<step name="investigate">
Autonomous investigation. Update the debug file continuously.

**Phase 1: Evidence gathering**
- Update Current Focus: "gathering initial evidence"
- Search codebase for error text, relevant files
- Read relevant files COMPLETELY (not just "relevant" lines)
- Run the app/tests to observe behavior
- APPEND to Evidence after each finding

**Phase 2: Form hypothesis**
- Based on evidence, form a SPECIFIC, FALSIFIABLE hypothesis
- Update Current Focus with hypothesis, test plan, expected outcome

**Phase 3: Test hypothesis**
- Execute ONE test at a time
- APPEND result to Evidence
- Change one variable per test — multiple changes = no learning

**Phase 4: Evaluate**
- **CONFIRMED:** Update Resolution.root_cause → proceed to fix_and_verify
- **ELIMINATED:** APPEND to Eliminated, form new hypothesis, return to Phase 2

**Cognitive discipline:**
- After 3 failed hypotheses: step back, question assumptions
- After 5 evidence entries: ensure Current Focus is current
- If context filling up: suggest "/clear then /mike:debug to resume"
</step>

<step name="fix_and_verify">
Update status to "fixing".

1. **Implement minimal fix** — smallest change addressing root cause
2. Update Resolution.fix and Resolution.files_changed
3. Update status to "verifying"
4. **Verify against original Symptoms** — exact same reproduction steps
5. Run existing tests if applicable

**If verification FAILS:** status → "investigating", return to investigate
**If verification PASSES:** update Resolution.verification, proceed to confirm_with_user
</step>

<step name="confirm_with_user">
Update status to "awaiting_human_verify".

Present to the user:

```
## Fix Applied — Please Verify

**Root cause:** {from Resolution}
**Fix:** {what was changed}
**Files changed:** {list}

**Self-verified:**
- {check 1}
- {check 2}

**Please confirm:** Test in your workflow and tell me "confirmed" or what's still failing.
```

Do NOT archive until the user confirms.
</step>

<step name="archive_session">
Only after user confirms the fix works:

1. Update status to "resolved"
2. Move to resolved: `mv .mike/debug/{slug}.md .mike/debug/resolved/`
3. Commit the fix:

```bash
git add {changed files}
git commit -m "mike(debug): fix {brief description}

Root cause: {root_cause}"
```

Report completion.
</step>

<step name="resume_session">
Read the existing debug file. Announce:
- Status, current hypothesis, evidence count, eliminated count

Based on status:
- "gathering" → continue gather_symptoms
- "investigating" → continue investigate from Current Focus.next_action
- "fixing" → continue fix_and_verify
- "verifying" → continue verification
- "awaiting_human_verify" → ask user for confirmation result
</step>

</process>

<debug_principles>
## User = Reporter, Claude = Investigator

The user knows what they expected and what happened. They do NOT know what's causing it — that's your job. Ask about experience, investigate the cause yourself.

## Scientific Method

1. Observe precisely (not "it's broken" but "X returns Y when it should return Z")
2. Form FALSIFIABLE hypotheses (specific, testable claims)
3. Design experiments that distinguish between competing hypotheses
4. Test ONE hypothesis at a time
5. Document results — Evidence section is append-only
6. Eliminated section prevents re-investigating dead ends

## Cognitive Biases to Avoid

| Bias | Trap | Antidote |
|------|------|----------|
| Confirmation | Only look for supporting evidence | Seek disconfirming evidence |
| Anchoring | First explanation becomes the anchor | Generate 3+ hypotheses first |
| Sunk cost | 2 hours on one path, keep going | Every 30 min: "Would I still choose this path?" |

## When to Restart

- 2+ hours with no progress
- 3+ "fixes" that didn't work
- You can't explain the current behavior
- The fix works but you don't know why
</debug_principles>

<success_criteria>
- [ ] Debug file created immediately on invocation
- [ ] File updated after EACH piece of information
- [ ] Current Focus always reflects what's happening NOW
- [ ] Evidence appended for every finding
- [ ] Eliminated prevents re-investigation of dead ends
- [ ] Can resume perfectly from any /clear
- [ ] Root cause confirmed with evidence before fixing
- [ ] Fix verified against original symptoms
- [ ] User confirms before session is archived
</success_criteria>
