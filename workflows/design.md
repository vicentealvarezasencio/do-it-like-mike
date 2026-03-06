# Workflow: Design System Generation

Profile-adaptive design system generation using the design knowledge base.

---

## Depth by Profile

| Profile | Depth |
|---------|-------|
| BLITZ | Skip |
| SPRINT | Lightweight (auto-select, no approval) |
| FORGE | Standard (full system + tokens, user reviews) |
| CITADEL | Full (system + per-page overrides + approval) |
| SCOUT | Extract (reverse-engineer from codebase) |
| GOLD | L0-L1: Skip, L2: Light, L3: Standard, L4: Full |

---

## Generation Process

1. Read PROJECT.md for industry/product type
2. Match to industry-rules.md
3. From matched rule: get style priority, color mood, typography mood
4. Select style from styles.md
5. Select palette from color-palettes.md
6. Select typography from typography.md
7. Read stack-specific guide (stacks/*.md)
8. Compose DESIGN.md from template

## SCOUT Extraction

1. Scan codebase for CSS/SCSS/Tailwind config/theme files
2. Extract: colors, fonts, spacing, component patterns
3. Document in DESIGN.md as existing conventions
4. New work must conform

---

## Output
- `.mike/DESIGN.md` (design authority)
- `.mike/design-tokens.json` (FORGE+, machine-readable)
- State: loop_position="DESIGN"
