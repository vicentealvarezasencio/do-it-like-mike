# MIKE UI Design Step — Integration Proposal

> Adding a DESIGN step to the MIKE pipeline, inspired by UI/UX Pro Max Skill's recommendation engine and design template system.
>
> Date: 2026-03-06

---

## 1. The Gap

The FRAMEWORK-COMPARISON.md (Section 15) reveals a clear weakness across ALL five source frameworks:

| Dimension | GSD | M2C1 | PRP | BMAD | PAUL |
|-----------|-----|------|-----|------|------|
| Built-in design system | No | No | No | Partial | No |
| Design tokens | No | No | No | No | No |
| Visual tool integration | No | No | No | No | No |

MIKE currently inherits this gap. The 10-step pipeline (INITIALIZE → DISCOVER → RESEARCH → ARCHITECT → SHARD → EXECUTE → VERIFY → UNIFY → TRANSITION → COMPLETE) treats UI as an afterthought — something that happens implicitly during EXECUTE, with no structured approach to design decisions.

**The result:** AI-generated UIs are generic, inconsistent, and disconnected from industry best practices. Developers either accept mediocre design or manually specify every visual detail.

---

## 2. What UI/UX Pro Max Does Well (And What We Want)

### 2.1 Their Architecture

```
User describes project
  → BM25 search across 10 CSV data domains
    → Industry reasoning rules (100 rules) match project to design approach
      → Multi-domain parallel search (style, color, typography, pattern, landing)
        → Design system output (MASTER.md + per-page overrides)
```

### 2.2 What's Worth Taking

| Innovation | Description | Value for MIKE |
|-----------|-------------|----------------|
| **Industry reasoning rules** | 100 rules mapping industry/product type → style + color mood + typography + anti-patterns | Eliminates guesswork — "beauty spa" automatically gets Soft UI + pastels, not Brutalism + neon |
| **67 UI style catalog** | Structured data: name, keywords, colors, effects, best-for, do-not-use-for, accessibility, performance, mobile-friendliness | Gives executors concrete design vocabulary instead of vague "make it look good" |
| **96 color palettes** | Industry-specific, with Primary/Secondary/CTA/Background/Text/Border hex values | Token-ready output that drops directly into CSS/Tailwind |
| **57 typography pairings** | Heading + Body font combos with Google Fonts URLs, Tailwind config, mood keywords | No more random font guessing |
| **Landing page patterns** | 8 archetypes (Hero-Centric, Conversion-Optimized, Social Proof, etc.) | Structural templates, not just colors |
| **Dashboard patterns** | 10 archetypes (Data-Dense, Executive, Real-Time, etc.) | Critical for SaaS/admin projects |
| **Anti-pattern database** | Per-industry "DO NOT" rules (e.g., healthcare: never use red as primary) | Prevents embarrassing design mistakes |
| **Pre-delivery checklist** | 10-item verification (icons, contrast, a11y, responsiveness) | Feeds into MIKE's VERIFY step |
| **Stack-specific guidelines** | 13 tech stacks with implementation details | Tailwind classes, SwiftUI modifiers, etc. |
| **Hierarchical design system** | MASTER.md (global) + per-page overrides | Matches MIKE's sharding philosophy perfectly |

### 2.3 What We DON'T Want

| UI/UX Pro Max Feature | Why We Skip It |
|-----------------------|----------------|
| Python BM25 search engine | Over-engineered for our use case — MIKE agents can reason over structured data directly without a separate search runtime |
| Separate CLI (`uipro-cli`) | MIKE already has an installer; we don't need another CLI |
| Multi-platform support (Cursor, Windsurf, etc.) | MIKE v1 is Claude Code only |
| `--persist` file generation | MIKE's state system (`.mike/`) already handles persistence |

---

## 3. Proposed Integration: The DESIGN Step

### 3.1 Pipeline Change

The 10-step pipeline becomes **11 steps**, with DESIGN inserted between ARCHITECT and SHARD:

```
Step 1: INITIALIZE   — Project setup, goal capture
Step 2: DISCOVER     — Requirements, constraints, decisions
Step 3: RESEARCH     — Technology, patterns, risks
Step 4: ARCHITECT    — Design, structure, gates
Step 5: DESIGN       — UI style, colors, typography, patterns, anti-patterns  ← NEW
Step 6: SHARD        — Task decomposition into executable units
Step 7: EXECUTE      — Build, test, commit
Step 8: VERIFY       — Quality assurance, acceptance
Step 9: UNIFY        — Mandatory closure, reconciliation
Step 10: TRANSITION  — Phase/milestone boundaries
Step 11: COMPLETE    — Archive, retrospective, handoff
```

**Why between ARCHITECT and SHARD?**
- ARCHITECT defines the technical structure (components, APIs, DB schema)
- DESIGN defines the visual language that those components will use
- SHARD needs BOTH to create self-contained task files with design context

### 3.2 The DESIGN Step: Profile-Aware Behavior

| Profile | DESIGN Behavior |
|---------|----------------|
| **BLITZ** | **Skip** — No design step. Executor uses sensible defaults or user-provided CSS. |
| **SPRINT** | **Lightweight** — Auto-select style + palette + typography from industry rules. Output: single `DESIGN.md` in `.mike/`. No user approval needed. |
| **FORGE** | **Standard** — Full design system generation with industry matching. Output: `DESIGN.md` + design tokens. User reviews once. Design context sharded into SHARD files. |
| **CITADEL** | **Full** — Design system + per-page overrides + anti-pattern enforcement + design verification in QA. User approves design system before execution. |
| **SCOUT** | **Review** — Analyze existing design (extract colors, typography, patterns from codebase) → generate DESIGN.md that documents conventions. New work must conform. |
| **GOLD** | **Scale-adaptive** — L0-L1: Skip. L2: Lightweight. L3: Standard. L4: Full. |

### 3.3 When DESIGN Is Skipped

Not every project needs UI design. DESIGN is automatically skipped when:

1. Project is API-only / CLI / library / backend service (detected from ARCHITECT output)
2. Profile is BLITZ
3. GOLD scale is L0-L1
4. User explicitly opts out (`/mike:settings --design off`)

When skipped, the pipeline flows directly from ARCHITECT → SHARD as before.

---

## 4. Data Architecture

### 4.1 Design Knowledge Base

Instead of UI/UX Pro Max's CSV + Python approach, MIKE embeds design knowledge as **structured markdown reference files** — consistent with the rest of the framework and directly consumable by agents without a search runtime.

```
do-it-like-mike/
|-- references/
|   |-- design/
|       |-- styles.md              # 67 UI styles (structured tables)
|       |-- color-palettes.md      # 96 industry-specific palettes
|       |-- typography.md          # 57 font pairings with URLs
|       |-- industry-rules.md      # 100 industry → design mappings
|       |-- landing-patterns.md    # 8 landing page archetypes
|       |-- dashboard-patterns.md  # 10 dashboard archetypes
|       |-- anti-patterns.md       # Per-industry design anti-patterns
|       |-- design-checklist.md    # Pre-delivery design verification
|       |-- stacks/
|           |-- html-tailwind.md   # Tailwind implementation details
|           |-- react-shadcn.md    # shadcn/ui specifics
|           |-- nextjs.md          # Next.js specifics
|           |-- swiftui.md         # SwiftUI specifics
|           |-- flutter.md         # Flutter specifics
|           |-- react-native.md    # React Native specifics
|           |-- vue-nuxt.md        # Vue/Nuxt specifics
```

### 4.2 Why Markdown, Not CSV + Search Engine

| Approach | Pros | Cons |
|----------|------|------|
| **CSV + BM25 (UI/UX Pro Max)** | Precise ranking, programmatic | Requires Python runtime, external dependency, agents can't read directly |
| **Markdown tables (MIKE)** | Agents read natively, zero dependencies, fits MIKE's all-markdown philosophy, can be sharded | Slightly larger token footprint per query |

The key insight: **MIKE agents already reason over structured markdown**. The MIKE design agent doesn't need a search engine — it reads the industry-rules reference, matches the project type, and extracts the relevant style/color/typography recommendations. This is exactly what LLMs excel at.

For larger reference files, MIKE's dynamic rules engine philosophy applies: **load only what's needed**. The design agent reads `industry-rules.md` to find the matching rule, then reads only the relevant sections of `styles.md`, `color-palettes.md`, and `typography.md`.

### 4.3 Data Format: Industry Rules

Each rule in `industry-rules.md` follows this structure:

```markdown
### Rule 042: E-Commerce — Fashion/Luxury

| Field | Value |
|-------|-------|
| Category | Fashion/Luxury E-Commerce |
| Keywords | fashion, luxury, apparel, designer, boutique, clothing |
| Recommended Pattern | Hero-Centric + Social Proof |
| Style Priority | Minimalism + Editorial Design |
| Color Mood | Monochrome with gold/cream accents |
| Typography Mood | High-contrast serif headlines + clean sans body |
| Key Effects | Smooth transitions (300ms), parallax hero, hover zoom on products |
| Anti-Patterns | Bright neon colors, Comic Sans, cluttered layouts, auto-playing video with sound |
| Decision Rules | `if_luxury: serif-only-headlines`, `if_fast-fashion: allow-bold-colors` |
| Severity | HIGH |
```

### 4.4 Data Format: Style Catalog

Each style in `styles.md`:

```markdown
### Style 12: Glassmorphism

| Field | Value |
|-------|-------|
| Category | Modern/Trend |
| Keywords | glass, blur, transparency, frosted, translucent |
| Primary Colors | White (rgba), light accent color |
| Secondary Colors | Background gradient behind glass elements |
| Effects | backdrop-filter: blur(10-20px), semi-transparent backgrounds, subtle borders |
| Best For | Cards, modals, overlays, navigation, dashboards |
| Do Not Use For | Text-heavy content, accessibility-critical interfaces, low-end devices |
| Light Mode | Excellent |
| Dark Mode | Excellent (often preferred) |
| Performance | Medium (blur is GPU-intensive, avoid on mobile lists) |
| Accessibility | Fair (ensure sufficient contrast ratios on frosted backgrounds) |
| Mobile | Good (reduce blur radius on mobile for performance) |
| Conversion | Medium (visually impressive but can distract from CTAs) |
| Complexity | Medium |
| CSS Keywords | backdrop-filter, blur(), rgba(), border: 1px solid rgba() |
| Design Tokens | `--glass-blur: 12px`, `--glass-bg: rgba(255,255,255,0.15)`, `--glass-border: rgba(255,255,255,0.2)` |
```

### 4.5 Data Format: Color Palettes

Each palette in `color-palettes.md`:

```markdown
### Palette 23: FinTech — Trust & Authority

| Role | Hex | CSS Variable |
|------|-----|-------------|
| Primary | #1A365D | --color-primary |
| Secondary | #2B6CB0 | --color-secondary |
| CTA | #38A169 | --color-cta |
| Background | #F7FAFC | --color-bg |
| Surface | #FFFFFF | --color-surface |
| Text | #1A202C | --color-text |
| Text Muted | #718096 | --color-text-muted |
| Border | #E2E8F0 | --color-border |
| Success | #38A169 | --color-success |
| Warning | #D69E2E | --color-warning |
| Error | #E53E3E | --color-error |

**Industries:** Banking, FinTech, Investment, Insurance
**Mood:** Professional, trustworthy, stable
**Notes:** Navy + green = trust + growth. Avoid red as primary (financial loss association).
```

---

## 5. New Files for MIKE

### 5.1 Command: `/mike:design`

```
commands/mike/design.md        # New slash command
```

**Behavior:**
1. Read PROJECT.md to determine industry/product type
2. Read ARCHITECT output (if exists) to understand component structure
3. Load `industry-rules.md`, find matching rule(s)
4. Load relevant style, palette, typography from references
5. Generate `.mike/DESIGN.md` (project design system)
6. For FORGE+: generate `.mike/design-tokens.json` (machine-readable tokens)
7. For CITADEL: generate per-page override files in `.mike/phases/{N}/design/`

### 5.2 Agent: `mike-designer.md`

```
agents/mike-designer.md        # New design agent
```

**Role:** Analyzes project context and generates design system recommendations using the design knowledge base. Does NOT create visual mockups — produces structured design specifications that executors follow.

**Startup Sequence:**
1. Read PROJECT.md (product type, industry, target audience)
2. Read ARCHITECT output (component list, page structure, tech stack)
3. Read `references/design/industry-rules.md` — find matching rule
4. Read relevant style, palette, typography references (only matching sections)
5. If SCOUT profile: read `.mike/codebase/CONVENTIONS.md` for existing design patterns

**Output:** `.mike/DESIGN.md`

### 5.3 Template: `DESIGN.md`

```
templates/DESIGN.md            # Design system template
```

### 5.4 Workflow: `design.md`

```
workflows/design.md            # Design workflow orchestration
```

### 5.5 Reference Files (Design Knowledge Base)

```
references/design/
|-- styles.md
|-- color-palettes.md
|-- typography.md
|-- industry-rules.md
|-- landing-patterns.md
|-- dashboard-patterns.md
|-- anti-patterns.md
|-- design-checklist.md
|-- stacks/
    |-- html-tailwind.md
    |-- react-shadcn.md
    |-- nextjs.md
    |-- swiftui.md
    |-- flutter.md
    |-- react-native.md
    |-- vue-nuxt.md
```

---

## 6. DESIGN.md Template

The output of `/mike:design`. This becomes the **design authority document** for the project.

```markdown
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
| {{EFFECT_NAME}} | {{CSS/IMPLEMENTATION}} | {{NOTES}} |

## Page Pattern: {{PATTERN_NAME}}
{{PATTERN_DESCRIPTION}}

### Section Order
1. {{SECTION_1}}
2. {{SECTION_2}}
3. {{SECTION_3}}
...

## Component Specifications
<!-- High-level component design language. Detail goes in shards. -->

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
```

---

## 7. How DESIGN Feeds Into Sharding

This is where the integration becomes powerful. When `mike-sharder` creates SHARD files, it now includes **design context** from DESIGN.md — but only the parts relevant to that shard.

### 7.1 SHARD.md Enhancement

Add a new section to the SHARD.md template:

```markdown
## Design Context
<!-- Extracted from DESIGN.md. Only tokens/specs relevant to this shard. -->

### Applicable Tokens
| Token | Value |
|-------|-------|
| --color-primary | #1A365D |
| --color-cta | #38A169 |
| --radius-md | 8px |

### Component Specs (This Shard)
- Buttons: Primary variant — bg: primary, text: white, radius: md, hover: darken 10%
- Cards: bg: surface, border: border, shadow: sm, radius: lg, padding: lg

### Anti-Patterns (This Shard)
- DO NOT use red as a primary action color (financial context)
- DO NOT mix serif and sans-serif in the same card

### Style Notes
- Style: Minimalism — clean lines, generous whitespace, restrained color use
- Transitions: 200ms ease-in-out on hover states
```

### 7.2 Sharding Algorithm Change

The sharder's extraction step (Section 8.1 of MIKE-IMPLEMENTATION-SPEC.md, step 3) gains a new sub-step:

```
3f. From DESIGN.md: only tokens, component specs, and anti-patterns
    relevant to this shard's UI components
```

This keeps each shard self-contained with design context — executors don't need to read the full DESIGN.md.

---

## 8. How DESIGN Feeds Into Verification

The design checklist from DESIGN.md feeds into `/mike:verify`:

### 8.1 Design Verification Layer

Add to the verification workflow (for FORGE+ profiles):

```
Verification Layer 3.5: Design Compliance
  - Color contrast check (automated via axe-core or lighthouse)
  - Token usage audit (are hardcoded colors used instead of tokens?)
  - Anti-pattern scan (grep for known anti-patterns in CSS/JSX)
  - Responsive check (viewport sizes tested)
  - Design checklist reconciliation (PASS/FAIL per item)
```

### 8.2 SUMMARY.md Enhancement

Add to UNIFY output:

```markdown
## Design Compliance
| Check | Result |
|-------|--------|
| Color contrast | PASS |
| Token usage | PASS (2 hardcoded values found, fixed) |
| Anti-patterns | PASS |
| Responsive | PASS |
| Design checklist | 9/10 PASS (dark mode deferred to ISS-004) |
```

---

## 9. Integration with Existing MIKE Components

### 9.1 `/mike:init` Change

During initialization, capture UI-relevant information:

- **Does this project have a UI?** (auto-detected from tech stack, or asked)
- **Industry/product type** (for industry rule matching)
- **Target audience** (influences style choices)
- **Existing brand guidelines?** (user can provide colors/fonts to use instead of auto-generated)

These get stored in `config.json` under a new `design` section:

```json
{
  "design": {
    "enabled": true,
    "industry": "fintech",
    "audience": "professional",
    "brand_colors": null,
    "brand_fonts": null,
    "style_override": null,
    "dark_mode": true
  }
}
```

### 9.2 `/mike:progress` Change

The progress router recognizes the new DESIGN step:

```
After ARCHITECT completes → route to /mike:design (if design.enabled)
After DESIGN completes → route to /mike:shard (or /mike:plan)
```

### 9.3 `/mike:settings` Change

New settings:

```
/mike:settings --design on|off          # Enable/disable design step
/mike:settings --design-style brutalism # Override auto-detected style
/mike:settings --design-palette 23      # Override auto-selected palette
```

### 9.4 SCOUT Profile: Design Extraction

For SCOUT (existing codebase), the design step works in reverse:

1. `mike-designer` reads the codebase (CSS/SCSS/Tailwind config, theme files)
2. Extracts current colors, typography, spacing, component patterns
3. Generates DESIGN.md that **documents** the existing design system
4. New work must conform to the extracted design (boundary enforcement)

---

## 10. Build Order Integration

The DESIGN step slots into **Phase 4** of the MIKE build order (FORGE profile), since that's when architecture and sharding are built:

### Revised Phase 4: FORGE Profile (v0.4.0)

**What ships:** Document sharding, independent QA, front-loaded planning, **and design system generation**.

Additional files to build:
- `commands/mike/design.md`
- `agents/mike-designer.md`
- `templates/DESIGN.md`
- `workflows/design.md`
- `references/design/styles.md`
- `references/design/color-palettes.md`
- `references/design/typography.md`
- `references/design/industry-rules.md`
- `references/design/landing-patterns.md`
- `references/design/dashboard-patterns.md`
- `references/design/anti-patterns.md`
- `references/design/design-checklist.md`
- `references/design/stacks/html-tailwind.md`
- `references/design/stacks/react-shadcn.md`
- `references/design/stacks/nextjs.md`
- `references/design/stacks/swiftui.md`
- `references/design/stacks/flutter.md`
- `references/design/stacks/react-native.md`
- `references/design/stacks/vue-nuxt.md`

---

## 11. Comparison: UI/UX Pro Max vs MIKE Design

| Dimension | UI/UX Pro Max | MIKE Design |
|-----------|--------------|-------------|
| **Engine** | Python BM25 search over CSVs | LLM reasoning over structured markdown |
| **Runtime dependency** | Python 3.x required | None (markdown only) |
| **Data format** | CSV files (22+ columns) | Markdown tables (agent-readable) |
| **Industry rules** | 100 rules in CSV | 100 rules in markdown (same data, different format) |
| **Style catalog** | 67 styles in CSV | 67 styles in markdown |
| **Color palettes** | 96 palettes in CSV | 96 palettes in markdown |
| **Typography** | 57 pairings in CSV | 57 pairings in markdown |
| **Output** | MASTER.md + page overrides | DESIGN.md + sharded design context |
| **Integration** | Standalone skill, bolted on | Pipeline step, feeds sharding + verification |
| **Profile awareness** | None (one-size-fits-all) | Full (BLITZ=skip, SPRINT=light, FORGE=standard, CITADEL=full) |
| **Existing codebase** | No support | SCOUT extracts and documents existing design |
| **Anti-pattern enforcement** | In output document only | In shards + verification + UNIFY |
| **Design verification** | Checklist in output | Automated checks in /mike:verify |
| **Token efficiency** | Full MASTER.md loaded every time | Sharded — executor gets only relevant tokens |

### Key advantages of MIKE's approach:

1. **Zero external dependencies** — No Python, no search engine, pure markdown
2. **Profile-adaptive** — BLITZ skips it entirely, CITADEL adds per-page overrides
3. **Sharding integration** — Design context is atomically sharded per task, not monolithically loaded
4. **Verification loop** — Design compliance is checked in VERIFY, reported in UNIFY
5. **Brownfield support** — SCOUT extracts existing design, not just generates new
6. **Anti-pattern enforcement** — Carried through shards as boundary declarations, not just documentation

---

## 12. Data Migration Strategy

To bootstrap the design knowledge base, we adapt UI/UX Pro Max's data (which is open source) from CSV to markdown:

1. **styles.csv → styles.md** — Convert 67 rows × 22 columns to 67 structured markdown sections
2. **colors.csv → color-palettes.md** — Convert 96 palettes with expanded token names
3. **typography.csv → typography.md** — Convert 57 pairings with Google Fonts URLs
4. **ui-reasoning.csv → industry-rules.md** — Convert 100 rules to structured markdown
5. **landing.csv → landing-patterns.md** — Convert 8 archetypes
6. **Dashboard styles from styles.csv → dashboard-patterns.md** — Extract and expand 10 dashboard styles
7. **Anti-patterns from reasoning rules → anti-patterns.md** — Deduplicate and organize by category
8. **Stack CSVs → stacks/*.md** — Convert 13 stack files (we keep the 7 most common)

This is a one-time conversion. The markdown format is richer because we can add prose explanations, implementation examples, and cross-references that CSVs can't express.

---

## 13. Summary

### What we're adding:
- **1 new pipeline step** (DESIGN, between ARCHITECT and SHARD)
- **1 new command** (`/mike:design`)
- **1 new agent** (`mike-designer`)
- **1 new template** (DESIGN.md)
- **1 new workflow** (design.md)
- **~15 reference files** (design knowledge base)
- **Enhancements** to SHARD template, VERIFY workflow, UNIFY template, init, progress, settings

### What we're NOT adding:
- No Python runtime dependency
- No separate CLI or search engine
- No visual mockup generation (out of scope for v1)
- No Figma/Sketch integration (out of scope for v1)

### The design philosophy:
> **MIKE treats design decisions like architectural decisions — they happen once, are documented in a structured format, and are atomically distributed to every executor that needs them.**

This is the same philosophy that makes document sharding powerful: instead of every executor carrying 32K of context, each gets only the 2-3K of design tokens, component specs, and anti-patterns relevant to their specific task.

---

---

## 14. Source Repositories and Key Files

### All GitHub Repos for MIKE Development

| Framework | Repository | What to Fetch |
|-----------|-----------|---------------|
| **GSD** | https://github.com/gsd-build/get-shit-done | `bin/install.js` (installer pattern), `agents/` (agent format), `commands/` (slash command format), `workflows/`, `templates/`, `hooks/`, `references/` |
| **BMAD** | https://github.com/bmad-code-org/BMAD-METHOD | `bmad-agent/` (agent-as-code), `bmad-core/personas/` (role definitions), document sharding logic, scale-adaptive intelligence, independent QA, Party Mode |
| **PAUL** | https://github.com/ChristopherKahler/paul | `commands/` (26 commands), `workflows/` (21 workflows), `templates/` (16+ templates), `references/` (12 docs including CARL rules, context-management, loop-phases, tdd, plan-format) |
| **M2C1** | https://github.com/grandamenium/m2c1 | Single skill file — complete 12-phase discovery/execution pipeline. Study: completeness gate, 2-wave research, authority hierarchy, skill creation |
| **PRP** | https://github.com/Wirasm/PRPs-agentic-eng | PRP template format, Ralph Loop specification, error pattern pre-documentation, info-dense keywords |
| **UI/UX Pro Max** | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | **Critical files for DESIGN step:** |

### UI/UX Pro Max — Files to Fetch for Design Knowledge Base

| Source Path | Purpose | Convert To |
|------------|---------|-----------|
| `src/ui-ux-pro-max/data/styles.csv` | 67 UI styles (22 columns: name, keywords, colors, effects, best-for, accessibility, performance, complexity, CSS keywords, design tokens) | `references/design/styles.md` |
| `src/ui-ux-pro-max/data/colors.csv` | 96 industry-specific palettes (Primary, Secondary, CTA, Background, Text, Border hex values) | `references/design/color-palettes.md` |
| `src/ui-ux-pro-max/data/typography.csv` | 57 font pairings (heading + body, mood keywords, Google Fonts URLs, Tailwind config, CSS import) | `references/design/typography.md` |
| `src/ui-ux-pro-max/data/ui-reasoning.csv` | 100 industry reasoning rules (category, recommended pattern, style priority, color mood, typography mood, key effects, anti-patterns, decision rules JSON, severity) | `references/design/industry-rules.md` |
| `src/ui-ux-pro-max/data/products.csv` | Product-to-style mapping (product type, keywords, primary/secondary style, landing pattern, dashboard style, color focus) | Merge into `industry-rules.md` |
| `src/ui-ux-pro-max/data/landing.csv` | 8 landing page archetypes (Hero-Centric, Conversion-Optimized, Feature-Rich, Minimal, Social Proof, Interactive Demo, Trust & Authority, Storytelling) | `references/design/landing-patterns.md` |
| `src/ui-ux-pro-max/data/ux-guidelines.csv` | 99 UX guidelines and anti-patterns | Merge into `anti-patterns.md` |
| `src/ui-ux-pro-max/scripts/design_system.py` | Design system generator — study `_generate_master()`, `_select_best_match()`, `_generate_intelligent_overrides()` | Logic adapted into `workflows/design.md` and `agents/mike-designer.md` |
| `src/ui-ux-pro-max/scripts/core.py` | BM25 search engine + CSV_CONFIG (domain routing) | Understand matching logic, adapt to LLM reasoning over markdown |
| `src/ui-ux-pro-max/templates/base/skill-content.md` | Skill definition template with priority rules and pre-delivery checklist | Adapt checklist into `references/design/design-checklist.md` |
| `src/ui-ux-pro-max/data/stacks/html-tailwind.csv` | Tailwind-specific implementation details | `references/design/stacks/html-tailwind.md` |
| `src/ui-ux-pro-max/data/stacks/react.csv` | React-specific patterns | Merge into `stacks/react-shadcn.md` |
| `src/ui-ux-pro-max/data/stacks/nextjs.csv` | Next.js specifics | `references/design/stacks/nextjs.md` |
| `src/ui-ux-pro-max/data/stacks/swiftui.csv` | SwiftUI design patterns | `references/design/stacks/swiftui.md` |
| `src/ui-ux-pro-max/data/stacks/flutter.csv` | Flutter/Material patterns | `references/design/stacks/flutter.md` |
| `src/ui-ux-pro-max/data/stacks/react-native.csv` | React Native specifics | `references/design/stacks/react-native.md` |
| `src/ui-ux-pro-max/data/stacks/vue.csv` | Vue/Nuxt specifics | `references/design/stacks/vue-nuxt.md` |

---

*This proposal should be reviewed alongside APEX-FRAMEWORK.md and MIKE-IMPLEMENTATION-SPEC.md. All four documents together (APEX-FRAMEWORK.md, FRAMEWORK-COMPARISON.md, MIKE-IMPLEMENTATION-SPEC.md, MIKE-UI-DESIGN-PROPOSAL.md) provide complete context for building the MIKE framework from scratch, including the DESIGN step and all design knowledge base files.*
