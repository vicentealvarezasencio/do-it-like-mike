---
name: mike:insert-phase
description: Insert a decimal phase between existing phases for urgent work
allowed-tools: [Read, Write, Bash]
---

<objective>
Insert a decimal phase for urgent work discovered mid-milestone. Uses decimal numbering (e.g., 3.1, 3.2) to preserve the logical sequence of planned phases without renumbering the entire roadmap.

**When to use:** When urgent work is discovered that must be completed between existing phases.
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
Parse the command arguments:
- First argument: integer phase number to insert after
- Remaining arguments: phase description

Example: `/mike:insert-phase 3 Fix critical auth bug`
-> after = 3, description = "Fix critical auth bug"

If arguments missing:
```
Usage: /mike:insert-phase <after-phase> <description>
Example: /mike:insert-phase 3 Fix critical auth bug
```
Exit.

Validate the first argument is a valid integer phase number.
</step>

<step name="validate">
1. Verify `.mike/ROADMAP.md` exists
2. Verify the target phase exists in ROADMAP.md
3. Calculate the decimal phase number:
   - Check for existing decimal phases after the target (e.g., 3.1, 3.2)
   - Next decimal = target + 0.1 * (count of existing decimals + 1)
   - Example: if 3.1 exists, next is 3.2
4. Generate slug from description
</step>

<step name="create_phase">
1. Create the phase directory:
   ```bash
   mkdir -p .mike/phases/{{DECIMAL}}-{{slug}}/
   ```

2. Insert the phase entry in ROADMAP.md **after** the target phase:
   ```markdown
   - [ ] Phase {{DECIMAL}}: {{Description}} (INSERTED)
   ```
   The `(INSERTED)` marker indicates urgent work.

3. Update STATE.md under "Roadmap Evolution":
   ```
   - Phase {{DECIMAL}} inserted after Phase {{AFTER}}: {{description}} (URGENT)
   ```
</step>

<step name="completion">
Display:
```
Phase {{DECIMAL}} inserted after Phase {{AFTER}}:
- Description: {{description}}
- Directory: .mike/phases/{{DECIMAL}}-{{slug}}/
- Status: Not planned yet
- Marker: (INSERTED) — indicates urgent work

Roadmap updated.

--> Next: /mike:plan {{DECIMAL}}

Note: Check if Phase {{AFTER+1}} dependencies still make sense.
```
</step>

</process>

<success_criteria>
- [ ] Decimal phase number correctly calculated
- [ ] Phase directory created
- [ ] ROADMAP.md updated with inserted phase (includes INSERTED marker)
- [ ] STATE.md updated with roadmap evolution note
- [ ] User informed of next steps and dependency implications
</success_criteria>
