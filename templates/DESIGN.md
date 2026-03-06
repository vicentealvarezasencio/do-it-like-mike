# Design System — {{PROJECT_NAME}}

## Metadata
| Field | Value |
|-------|-------|
| Profile | {{PROFILE}} |
| Industry | {{INDUSTRY}} |
| Industry Rule | Rule {{N}}: {{RULE_NAME}} |
| Style | {{PRIMARY_STYLE}} + {{SECONDARY_STYLE}} |
| Pattern | {{PAGE_PATTERN}} |
| Tech Stack | {{STACK}} |

## Color Palette
| Role | Hex | CSS Variable | Tailwind |
|------|-----|-------------|----------|
| Primary | {{HEX}} | --color-primary | primary |
| Secondary | {{HEX}} | --color-secondary | secondary |
| CTA | {{HEX}} | --color-cta | cta |
| Background | {{HEX}} | --color-bg | bg |
| Surface | {{HEX}} | --color-surface | surface |
| Text | {{HEX}} | --color-text | foreground |
| Text Muted | {{HEX}} | --color-text-muted | muted-foreground |
| Border | {{HEX}} | --color-border | border |
| Success | {{HEX}} | --color-success | success |
| Warning | {{HEX}} | --color-warning | warning |
| Error | {{HEX}} | --color-error | error |

## Typography
| Role | Font | Weight | Size | Line Height | Google Fonts |
|------|------|--------|------|-------------|-------------|
| Heading 1 | {{FONT}} | {{WEIGHT}} | {{SIZE}} | {{LH}} | {{URL}} |
| Heading 2 | {{FONT}} | {{WEIGHT}} | {{SIZE}} | {{LH}} | |
| Heading 3 | {{FONT}} | {{WEIGHT}} | {{SIZE}} | {{LH}} | |
| Body | {{FONT}} | {{WEIGHT}} | {{SIZE}} | {{LH}} | {{URL}} |
| Body Small | {{FONT}} | {{WEIGHT}} | {{SIZE}} | {{LH}} | |
| Caption | {{FONT}} | {{WEIGHT}} | {{SIZE}} | {{LH}} | |
| Button | {{FONT}} | {{WEIGHT}} | {{SIZE}} | {{LH}} | |

## Spacing Scale
| Token | Value | CSS Variable |
|-------|-------|-------------|
| xs | 4px | --space-xs |
| sm | 8px | --space-sm |
| md | 16px | --space-md |
| lg | 24px | --space-lg |
| xl | 32px | --space-xl |
| 2xl | 48px | --space-2xl |
| 3xl | 64px | --space-3xl |

## Shadow Depths
| Level | Value | CSS Variable |
|-------|-------|-------------|
| sm | {{VALUE}} | --shadow-sm |
| md | {{VALUE}} | --shadow-md |
| lg | {{VALUE}} | --shadow-lg |
| xl | {{VALUE}} | --shadow-xl |

## Border Radius
| Token | Value | CSS Variable |
|-------|-------|-------------|
| sm | {{VALUE}} | --radius-sm |
| md | {{VALUE}} | --radius-md |
| lg | {{VALUE}} | --radius-lg |
| full | 9999px | --radius-full |

## Effects & Animation
| Effect | Implementation | Notes |
|--------|---------------|-------|
| {{EFFECT_NAME}} | {{CSS}} | {{NOTES}} |

## Page Pattern: {{PATTERN_NAME}}
{{PATTERN_DESCRIPTION}}

### Section Order
1. {{SECTION_1}}
2. {{SECTION_2}}
3. {{SECTION_3}}

## Component Specifications

### Buttons
| Variant | Background | Text | Border | Hover | Radius |
|---------|-----------|------|--------|-------|--------|
| Primary | {{}} | {{}} | {{}} | {{}} | {{}} |
| Secondary | {{}} | {{}} | {{}} | {{}} | {{}} |
| Ghost | {{}} | {{}} | {{}} | {{}} | {{}} |

### Cards
| Property | Value |
|----------|-------|
| Background | {{}} |
| Border | {{}} |
| Shadow | {{}} |
| Radius | {{}} |
| Padding | {{}} |

### Inputs
| State | Border | Background | Text | Shadow |
|-------|--------|-----------|------|--------|
| Default | {{}} | {{}} | {{}} | {{}} |
| Focus | {{}} | {{}} | {{}} | {{}} |
| Error | {{}} | {{}} | {{}} | {{}} |
| Disabled | {{}} | {{}} | {{}} | {{}} |

## Anti-Patterns
<!-- From industry rules. Executors MUST NOT do these. -->
- DO NOT: {{ANTI_PATTERN_1}}
- DO NOT: {{ANTI_PATTERN_2}}
- DO NOT: {{ANTI_PATTERN_3}}

## Design Verification Checklist
<!-- Fed into /mike:verify for design QA -->
- [ ] Color contrast ratios meet WCAG 2.1 AA (4.5:1 text, 3:1 large text)
- [ ] Touch targets >= 44x44px on mobile
- [ ] Font sizes >= 16px for body text on mobile
- [ ] Consistent spacing using token scale
- [ ] No orphaned design decisions (all components use tokens)
- [ ] Responsive breakpoints defined and tested
- [ ] Loading states for async content
- [ ] Empty states for lists/tables
- [ ] Error states for forms and data fetching
- [ ] Dark mode support (if applicable per style)
