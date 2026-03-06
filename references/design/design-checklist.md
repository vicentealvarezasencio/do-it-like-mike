# Design Verification Checklist

> Pre-delivery design verification items for the VERIFY step.
> Used by `mike-verifier` during design compliance checks (Layer 4).

---

## Visual Quality

- [ ] **Color contrast** meets WCAG 2.1 AA (4.5:1 text, 3:1 large text/UI)
- [ ] **Touch targets** >= 44x44px on mobile (WCAG 2.5.5)
- [ ] **Font sizes** >= 16px for body text on mobile
- [ ] **Line height** >= 1.5x font size for body text
- [ ] **Focus indicators** visible on all interactive elements
- [ ] **Color not sole indicator** — information conveyed by color also uses text/icons

## Token Consistency

- [ ] All colors use design tokens (no hardcoded hex values)
- [ ] All spacing uses the spacing scale (no magic numbers)
- [ ] All border radii use radius tokens
- [ ] All shadows use shadow tokens
- [ ] All font sizes/weights use typography tokens

## Responsive Design

- [ ] Layout tested at mobile (375px), tablet (768px), desktop (1280px)
- [ ] Images and media are responsive
- [ ] Navigation adapts to viewport (hamburger on mobile)
- [ ] Tables scroll horizontally on mobile
- [ ] Forms stack vertically on mobile

## Component States

- [ ] **Loading states** for async content (skeletons, spinners)
- [ ] **Empty states** for lists, tables, search results
- [ ] **Error states** for forms, data fetching, network failures
- [ ] **Hover states** for interactive elements
- [ ] **Active/pressed states** for buttons and links
- [ ] **Disabled states** where applicable
- [ ] **Selected/checked states** for toggles, checkboxes, tabs

## Content & Layout

- [ ] **Visual hierarchy** clear — primary/secondary/tertiary content distinct
- [ ] **Whitespace** consistent and adequate
- [ ] **Alignment** on grid — no random offsets
- [ ] **Icons** consistent style (outline OR filled, not mixed)
- [ ] **Images** have alt text
- [ ] **Truncation** handled with ellipsis where content may overflow

## Dark Mode (if applicable)

- [ ] All color tokens have dark mode variants
- [ ] Sufficient contrast in dark mode
- [ ] Images/illustrations adapted for dark backgrounds
- [ ] Shadows adjusted for dark mode (lighter, not darker)

## Performance

- [ ] No excessive blur effects on mobile (GPU-intensive)
- [ ] Images optimized (WebP/AVIF, lazy-loaded)
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Custom fonts loaded with `font-display: swap`
