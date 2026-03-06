---
name: mike:design
description: UI design system — style, palette, typography, tokens, anti-patterns
allowed-tools: [Read, Write, Bash, Glob, Grep, Agent, AskUserQuestion]
---

<objective>
Generate a project-specific design system using the design knowledge base. Auto-skip for non-UI projects.

**Profile behavior:**
- **BLITZ:** Skip
- **SPRINT:** Lightweight (auto-select style + palette + typography from industry rules, no user approval needed)
- **FORGE:** Standard (full design system + tokens, user reviews once)
- **CITADEL:** Full (design system + per-page overrides + anti-pattern enforcement + user approves)
- **SCOUT:** Extract (analyze existing CSS/theme, document conventions in DESIGN.md)
- **GOLD:** Scale-adaptive (L0-L1: Skip, L2: Lightweight, L3: Standard, L4: Full)

**When to use:** After `/mike:architect`, before `/mike:shard` (FORGE+) or `/mike:plan` (SPRINT).
</objective>

<execution_context>
@~/.claude/do-it-like-mike/references/rules.md
@~/.claude/do-it-like-mike/references/design/industry-rules.md
</execution_context>

<context>
@.mike/STATE.md
@.mike/PROJECT.md
@.mike/config.json
</context>

<process>

<step name="check_applicability">
Determine if the design step applies to this project:

1. Read `.mike/config.json` — check `design.enabled`
2. Read `.mike/PROJECT.md` — check project type

**Auto-skip conditions (any one triggers skip):**
- `design.enabled` is explicitly `false`
- Project type is API-only, CLI tool, library, backend service, or data pipeline
- No UI components exist in the requirements

If skipping:
- Log skip reason to STATE.md: "Design skipped: {reason}"
- Route to `/mike:shard` (FORGE+) or `/mike:plan` (SPRINT)
- Stop processing further steps
</step>

<step name="resolve_depth">
Determine design system depth from the effective profile:

| Profile | Depth | What It Includes |
|---------|-------|------------------|
| SPRINT / GOLD L2 | Lightweight | Style + palette + typography (auto-selected) |
| FORGE / GOLD L3 | Standard | Full design system + tokens |
| CITADEL / GOLD L4 | Full | Design system + page overrides + anti-pattern enforcement |
| SCOUT | Extract | Analyze existing, document findings |
</step>

<step name="gather_context">
Read all inputs for design system generation:

1. **PROJECT.md** — industry, target audience, tech stack, brand guidelines (if any)
2. **ARCHITECTURE.md** (if exists) — component list, page/view inventory
3. **config.json** — design section preferences (preferred style, color overrides, font preferences)
4. **Existing styles** (SCOUT mode) — scan for CSS files, theme configs, design tokens in the codebase

Identify key design inputs:
- What industry is this? (determines default style rules)
- What is the target audience? (affects accessibility, complexity)
- What tech stack is used? (determines token format: CSS vars, Tailwind config, etc.)
- Are there existing brand guidelines to follow?
</step>

<step name="spawn_designer">
Spawn the `mike-designer` agent with project context.

The agent:
1. Reads `references/design/industry-rules.md` to find the matching industry
2. Loads the relevant style, palette, and typography rules for that industry
3. Applies any user overrides from config.json
4. Generates `.mike/DESIGN.md` with the following sections:

```markdown
# Design System — {{PROJECT_NAME}}

## Style Direction
- Visual style: {style} (e.g., minimal, bold, editorial)
- Mood: {mood descriptors}
- References: {style references}

## Color Palette
### Primary
- Primary: {hex} — {usage}
- Primary Light: {hex}
- Primary Dark: {hex}
### Neutral
- Background: {hex}
- Surface: {hex}
- Text: {hex}
- Text Muted: {hex}
### Semantic
- Success: {hex}
- Warning: {hex}
- Error: {hex}
- Info: {hex}

## Typography
- Font Family (Headings): {font}
- Font Family (Body): {font}
- Scale: {scale type}
- Base Size: {size}
- Line Height: {ratio}
- Font Weights: {weights}

## Spacing
- Base Unit: {size}
- Scale: {scale values}

## Component Patterns
- Border Radius: {values}
- Shadow: {values}
- Transitions: {values}

## Anti-Patterns (DO NOT)
- {anti-pattern 1}
- {anti-pattern 2}
```

**For SCOUT (extract mode):**
- Scan existing CSS/SCSS/Tailwind config/theme files
- Extract current design conventions
- Document them in DESIGN.md as-is
- Flag inconsistencies or missing patterns

**For Lightweight (SPRINT):**
- Auto-select from industry rules without user interaction
- Generate a minimal DESIGN.md (palette + typography + spacing only)
</step>

<step name="review_output">
**FORGE+ only (Standard and Full depth).**

Present the design system summary to the user:

1. **Style direction** — visual approach and mood
2. **Color palette** — primary, neutral, semantic colors with swatches description
3. **Typography** — font choices, scale, weights
4. **Component patterns** — radius, shadows, spacing

Wait for user approval or feedback.

**For CITADEL (Full depth):**
- Also present per-page/view overrides if any
- Present anti-pattern list for user review
- Get explicit approval before proceeding
</step>

<step name="generate_tokens">
**FORGE+ only.**

Generate `.mike/design-tokens.json` from DESIGN.md:

```json
{
  "colors": {
    "primary": "{hex}",
    "primary-light": "{hex}",
    "primary-dark": "{hex}",
    "background": "{hex}",
    "surface": "{hex}",
    "text": "{hex}",
    "text-muted": "{hex}",
    "success": "{hex}",
    "warning": "{hex}",
    "error": "{hex}",
    "info": "{hex}"
  },
  "typography": {
    "font-heading": "{font}",
    "font-body": "{font}",
    "base-size": "{size}",
    "scale": "{ratio}",
    "line-height": "{ratio}"
  },
  "spacing": {
    "unit": "{size}",
    "scale": ["{values}"]
  },
  "radii": {
    "sm": "{value}",
    "md": "{value}",
    "lg": "{value}"
  },
  "shadows": {
    "sm": "{value}",
    "md": "{value}",
    "lg": "{value}"
  }
}
```

The token format adapts to the tech stack:
- **CSS/HTML:** Generate as CSS custom properties
- **Tailwind:** Generate as `tailwind.config.js` extension
- **React Native:** Generate as JS theme object
- **Generic:** Generate as JSON (default)
</step>

<step name="update_state">
Update state files:
- `state.json`: `loop_position` = "DESIGN"
- `STATE.md`: Update position, design depth used, next action
- `session.last_command` = "/mike:design"

Route to next action:
- SPRINT: `--> /mike:plan`
- FORGE+: `--> /mike:shard` (if sharding enabled) or `--> /mike:plan`
</step>

</process>

<success_criteria>
- [ ] Applicability checked (skipped if non-UI project)
- [ ] Design depth resolved from profile
- [ ] DESIGN.md generated with all required sections
- [ ] Industry rules applied correctly
- [ ] Design tokens generated (FORGE+)
- [ ] Anti-patterns documented (CITADEL)
- [ ] User reviewed and approved (FORGE+)
- [ ] State updated
- [ ] Single next action suggested
</success_criteria>
