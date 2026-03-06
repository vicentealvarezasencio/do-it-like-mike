---
name: mike:add-phase
description: Append a new phase to the end of the current milestone
allowed-tools: [Read, Write, Bash]
---

<objective>
Add a new integer phase to the end of the current milestone in the roadmap. Calculates the next phase number, creates the phase directory, and updates ROADMAP.md.

**When to use:** When you need to add work to the current milestone.
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
Parse the user's arguments as the phase description.

Example: `/mike:add-phase Add authentication system` -> description = "Add authentication system"

If no arguments provided:
```
Usage: /mike:add-phase <description>
Example: /mike:add-phase Add authentication system
```
Exit.
</step>

<step name="validate">
1. Verify `.mike/ROADMAP.md` exists — if not, route to `/mike:init`
2. Read ROADMAP.md to find all existing phases in the current milestone
3. Calculate the next integer phase number (highest existing + 1)
4. Generate a slug from the description (lowercase, hyphens, max 40 chars):
   - "Add authentication system" -> "add-authentication-system"
</step>

<step name="create_phase">
1. Create the phase directory:
   ```bash
   mkdir -p .mike/phases/{{N}}-{{slug}}/
   ```

2. Add the phase entry to ROADMAP.md under the current milestone:
   ```markdown
   - [ ] Phase {{N}}: {{Description}}
   ```

3. Update STATE.md under a "Roadmap Evolution" section:
   ```
   - Phase {{N}} added: {{description}}
   ```
   Create the section if it doesn't exist.
</step>

<step name="completion">
Display:
```
Phase {{N}} added to current milestone:
- Description: {{description}}
- Directory: .mike/phases/{{N}}-{{slug}}/
- Status: Not planned yet

Roadmap updated.

--> Next: /mike:discuss {{N}} (or /mike:plan {{N}})
```
</step>

</process>

<success_criteria>
- [ ] Phase number correctly calculated
- [ ] Phase directory created
- [ ] ROADMAP.md updated with new phase entry
- [ ] STATE.md updated with roadmap evolution note
- [ ] User informed of next steps
</success_criteria>
