---
name: mike:remove-phase
description: Remove a future phase from the roadmap
allowed-tools: [Read, Write, Bash, AskUserQuestion, Glob]
---

<objective>
Remove an unstarted future phase from the roadmap, delete its directory, and renumber subsequent phases to maintain a clean sequence. The git commit serves as the historical record.

**When to use:** When work has been decided against and should be removed from the roadmap.
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
</execution_context>

<context>
$ARGUMENTS
@.mike/ROADMAP.md
@.mike/STATE.md
@.mike/config.json
</context>

<process>

<step name="parse_arguments">
Parse the phase number from arguments.

Example: `/mike:remove-phase 5` -> target = 5

If no argument:
```
Usage: /mike:remove-phase <phase-number>
Example: /mike:remove-phase 5
```
Exit.
</step>

<step name="validate_future_phase">
Verify the phase is a future phase (not started or completed):

1. Read state.json to get `current_phase`
2. Target phase must be > current phase

If target <= current phase:
```
Cannot remove Phase {{TARGET}} — only future phases can be removed.
Current phase: {{CURRENT}}

To abandon current work, use /mike:pause instead.
```
Exit.

3. Check if the phase directory has any SUMMARY.md (completed work):
   - If SUMMARY.md exists, warn the user and require explicit confirmation
</step>

<step name="confirm_removal">
Present removal summary:

```
Removing Phase {{TARGET}}: {{NAME}}

This will:
- Delete: .mike/phases/{{TARGET}}-{{slug}}/
- Renumber all subsequent phases
- Update: ROADMAP.md, STATE.md

Proceed? (y/n)
```

Wait for confirmation.
</step>

<step name="execute_removal">
1. **Delete the phase directory:**
   ```bash
   rm -rf .mike/phases/{{TARGET}}-{{slug}}/
   ```

2. **Renumber subsequent phase directories** (in reverse order to avoid conflicts):
   - Phase N+1 -> Phase N
   - Phase N+2 -> Phase N+1
   - etc.
   ```bash
   mv .mike/phases/{{N+1}}-{{slug}}/ .mike/phases/{{N}}-{{slug}}/
   ```

3. **Update ROADMAP.md:**
   - Remove the phase entry
   - Renumber all subsequent phase references

4. **Update STATE.md** under "Roadmap Evolution":
   ```
   - Phase {{TARGET}} ({{name}}) removed
   ```
</step>

<step name="commit">
Stage and commit:
```bash
git add .mike/
git commit -m "mike(roadmap): remove phase {{TARGET}} ({{name}})"
```

The commit message preserves the historical record.
</step>

<step name="completion">
Display:
```
Phase {{TARGET}} ({{name}}) removed.

Changes:
- Deleted: .mike/phases/{{TARGET}}-{{slug}}/
- Renumbered: {{N}} subsequent phases
- Updated: ROADMAP.md, STATE.md
- Committed: mike(roadmap): remove phase {{TARGET}}

--> /mike:progress to see updated roadmap
```
</step>

</process>

<success_criteria>
- [ ] Target validated as future/unstarted phase
- [ ] User confirmed removal
- [ ] Phase directory deleted
- [ ] Subsequent phases renumbered
- [ ] ROADMAP.md and STATE.md updated
- [ ] Changes committed with descriptive message
</success_criteria>
