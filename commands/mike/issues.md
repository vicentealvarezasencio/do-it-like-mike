---
name: mike:issues
description: View/triage deferred issues from ISSUES.md
allowed-tools: [Read, Write, Edit, Bash, Glob, Grep, AskUserQuestion]
---

<objective>
View, triage, and manage deferred issues tracked in `.mike/ISSUES.md`. Issues are logged during execution when discovered work falls outside the current scope (R8 — Issue Deferral).

**Profile behavior:**
- All profiles: Full issue management capability

**When to use:**
- Between phases to review accumulated issues
- When planning a new phase and want to include deferred work
- During milestone completion to ensure nothing was forgotten
- Anytime you want to see what's been deferred

**Arguments:** Optional action — "list", "triage", "add {description}", or an issue ID to inspect.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
</execution_context>

<context>
$ARGUMENTS
@.mike/ISSUES.md
@.mike/STATE.md (if exists)
@.mike/ROADMAP.md (if exists)
</context>

<process>

<step name="check_issues_file">
Check if `.mike/ISSUES.md` exists.

**If not exists:**
- "No issues file found. Issues are created automatically during execution (R8). Run `/mike:init` to start a project."
- Stop.

**If exists but empty (only header row):**
- "No deferred issues. Clean slate."
- Stop.
</step>

<step name="parse_action">
Determine action from $ARGUMENTS:

| Input | Action |
|-------|--------|
| (none) or "list" | Show all issues |
| "triage" | Interactive triage session |
| "add {text}" | Add a new issue manually |
| "ISS-{N}" or a number | Inspect specific issue |
| "promote {ID}" | Move issue into next phase plan |
| "close {ID}" | Close issue as won't-fix or resolved |
</step>

<step name="list_issues">
Read `.mike/ISSUES.md` and display issues grouped by type:

```
## Deferred Issues ({total} total)

### Tech Debt ({count})
| ID | Description | Impact | Effort | Phase |
|----|-------------|--------|--------|-------|

### Enhancements ({count})
| ID | Description | Impact | Effort | Phase |
|----|-------------|--------|--------|-------|

### Bugs ({count})
| ID | Description | Impact | Effort | Phase |
|----|-------------|--------|--------|-------|
```

Show summary stats:
- Total issues
- By type breakdown
- By suggested phase
- High-impact items (if any)
</step>

<step name="triage">
Interactive triage session. For each untriaged issue:

1. Show the issue details
2. Ask:
   - **Priority:** High / Medium / Low
   - **Action:** Promote to phase, defer, close
   - **Phase:** Which phase should address this? (suggest based on ROADMAP.md)

Update ISSUES.md with triage decisions.

After all issues triaged, show summary of decisions.
</step>

<step name="add_issue">
Add a new issue to ISSUES.md:

1. Generate next ID: ISS-{N} (sequential)
2. Ask for (or infer from $ARGUMENTS):
   - Description
   - Type: tech-debt | enhancement | bug
   - Impact: high | medium | low
   - Effort: small | medium | large
   - Suggested phase (or "backlog")
3. Append row to ISSUES.md table
4. Confirm: "Added ISS-{N}: {description}"
</step>

<step name="inspect_issue">
Show full details for a specific issue:

- ID, description, type, impact, effort
- Which phase discovered it
- Suggested phase for resolution
- Related files (if noted)

Offer actions: promote, close, edit.
</step>

<step name="promote_issue">
Move an issue into the active roadmap:

1. Read the issue details
2. Read ROADMAP.md to find the target phase
3. Add the issue as a task note in the target phase
4. Update issue status to "promoted → Phase {N}"
5. Confirm the promotion
</step>

<step name="close_issue">
Close an issue:

1. Ask for reason: "resolved" | "won't-fix" | "duplicate of ISS-{N}"
2. Update issue status in ISSUES.md
3. Confirm closure
</step>

</process>

<success_criteria>
- [ ] Issues displayed clearly grouped by type
- [ ] Triage session walks through each untriaged issue
- [ ] New issues get sequential IDs
- [ ] Promoted issues are linked to roadmap phases
- [ ] Closed issues are marked with reason
- [ ] ISSUES.md stays clean and parseable
</success_criteria>
