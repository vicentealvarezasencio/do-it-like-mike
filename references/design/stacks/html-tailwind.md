# HTML + Tailwind CSS — Design Guidelines

> Stack-specific design implementation guidelines.
> Source: UI/UX Pro Max (converted to MIKE format).

---

## Animation

### Use Tailwind animate utilities

Built-in animations are optimized and respect reduced-motion

| | Guidance |
|---|---------|
| **Do** | Use animate-pulse animate-spin animate-ping |
| **Don't** | Custom @keyframes for simple effects |
| **Good** | `animate-pulse` |
| **Bad** | `@keyframes pulse {...}` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/animation |

### Limit bounce animations

Continuous bounce is distracting and causes motion sickness

| | Guidance |
|---|---------|
| **Do** | Use animate-bounce sparingly on CTAs only |
| **Don't** | Multiple bounce animations on page |
| **Good** | `Single CTA with animate-bounce` |
| **Bad** | `5+ elements with animate-bounce` |
| **Severity** | High |


### Transition duration

Use appropriate transition speeds for UI feedback

| | Guidance |
|---|---------|
| **Do** | duration-150 to duration-300 for UI |
| **Don't** | duration-1000 or longer for UI elements |
| **Good** | `transition-all duration-200` |
| **Bad** | `transition-all duration-1000` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/transition-duration |

### Hover transitions

Add smooth transitions on hover state changes

| | Guidance |
|---|---------|
| **Do** | Add transition class with hover states |
| **Don't** | Instant hover changes without transition |
| **Good** | `hover:bg-gray-100 transition-colors` |
| **Bad** | `hover:bg-gray-100 (no transition)` |
| **Severity** | Low |


## Z-Index

### Use Tailwind z-* scale

Consistent stacking context with predefined scale

| | Guidance |
|---|---------|
| **Do** | z-0 z-10 z-20 z-30 z-40 z-50 |
| **Don't** | Arbitrary z-index values |
| **Good** | `z-50 for modals` |
| **Bad** | `z-[9999]` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/z-index |

### Fixed elements z-index

Fixed navigation and modals need explicit z-index

| | Guidance |
|---|---------|
| **Do** | z-50 for nav z-40 for dropdowns |
| **Don't** | Relying on DOM order for stacking |
| **Good** | `fixed top-0 z-50` |
| **Bad** | `fixed top-0 (no z-index)` |
| **Severity** | High |


### Negative z-index for backgrounds

Use negative z-index for decorative backgrounds

| | Guidance |
|---|---------|
| **Do** | z-[-1] for background elements |
| **Don't** | Positive z-index for backgrounds |
| **Good** | `-z-10 for decorative` |
| **Bad** | `z-10 for background` |
| **Severity** | Low |


## Layout

### Container max-width

Limit content width for readability

| | Guidance |
|---|---------|
| **Do** | max-w-7xl mx-auto for main content |
| **Don't** | Full-width content on large screens |
| **Good** | `max-w-7xl mx-auto px-4` |
| **Bad** | `w-full (no max-width)` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/container |

### Responsive padding

Adjust padding for different screen sizes

| | Guidance |
|---|---------|
| **Do** | px-4 md:px-6 lg:px-8 |
| **Don't** | Same padding all sizes |
| **Good** | `px-4 sm:px-6 lg:px-8` |
| **Bad** | `px-8 (same all sizes)` |
| **Severity** | Medium |


### Grid gaps

Use consistent gap utilities for spacing

| | Guidance |
|---|---------|
| **Do** | gap-4 gap-6 gap-8 |
| **Don't** | Margins on individual items |
| **Good** | `grid gap-6` |
| **Bad** | `grid with mb-4 on each item` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/gap |

### Flexbox alignment

Use flex utilities for alignment

| | Guidance |
|---|---------|
| **Do** | items-center justify-between |
| **Don't** | Multiple nested wrappers |
| **Good** | `flex items-center justify-between` |
| **Bad** | `Nested divs for alignment` |
| **Severity** | Low |


### Container Queries

Use @container for component-based responsiveness

| | Guidance |
|---|---------|
| **Do** | Use @container and @lg: etc. |
| **Don't** | Media queries for component internals |
| **Good** | `@container @lg:grid-cols-2` |
| **Bad** | `@media (min-width: ...) inside component` |
| **Severity** | Medium |
| **Docs** | https://github.com/tailwindlabs/tailwindcss-container-queries |

### Use shrink-0 shorthand

Shorter class name for flex-shrink-0

| | Guidance |
|---|---------|
| **Do** | shrink-0 shrink |
| **Don't** | flex-shrink-0 flex-shrink |
| **Good** | `shrink-0` |
| **Bad** | `flex-shrink-0` |
| **Severity** | Low |
| **Docs** | https://tailwindcss.com/docs/flex-shrink |

### Use size-* for square dimensions

Single utility for equal width and height

| | Guidance |
|---|---------|
| **Do** | size-4 size-8 size-12 |
| **Don't** | Separate h-* w-* for squares |
| **Good** | `size-6` |
| **Bad** | `h-6 w-6` |
| **Severity** | Low |
| **Docs** | https://tailwindcss.com/docs/size |

## Images

### Aspect ratio

Maintain consistent image aspect ratios

| | Guidance |
|---|---------|
| **Do** | aspect-video aspect-square |
| **Don't** | No aspect ratio on containers |
| **Good** | `aspect-video rounded-lg` |
| **Bad** | `No aspect control` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/aspect-ratio |

### Object fit

Control image scaling within containers

| | Guidance |
|---|---------|
| **Do** | object-cover object-contain |
| **Don't** | Stretched distorted images |
| **Good** | `object-cover w-full h-full` |
| **Bad** | `No object-fit` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/object-fit |

### Lazy loading

Defer loading of off-screen images

| | Guidance |
|---|---------|
| **Do** | loading='lazy' on images |
| **Don't** | All images eager load |
| **Good** | `<img loading='lazy'>` |
| **Bad** | `<img> without lazy` |
| **Severity** | High |


### Responsive images

Serve appropriate image sizes

| | Guidance |
|---|---------|
| **Do** | srcset and sizes attributes |
| **Don't** | Same large image all devices |
| **Good** | `srcset with multiple sizes` |
| **Bad** | `4000px image everywhere` |
| **Severity** | High |


### SVG explicit dimensions

Add width/height attributes to SVGs to prevent layout shift before CSS loads

| | Guidance |
|---|---------|
| **Do** | <svg class='size-6' width='24' height='24'> |
| **Don't** | SVG without explicit dimensions |
| **Good** | `<svg class='size-6' width='24' height='24'>` |
| **Bad** | `<svg class='size-6'>` |
| **Severity** | High |


## Typography

### Prose plugin

Use @tailwindcss/typography for rich text

| | Guidance |
|---|---------|
| **Do** | prose prose-lg for article content |
| **Don't** | Custom styles for markdown |
| **Good** | `prose prose-lg max-w-none` |
| **Bad** | `Custom text styling` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/typography-plugin |

### Line height

Use appropriate line height for readability

| | Guidance |
|---|---------|
| **Do** | leading-relaxed for body text |
| **Don't** | Default tight line height |
| **Good** | `leading-relaxed (1.625)` |
| **Bad** | `leading-none or leading-tight` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/line-height |

### Font size scale

Use consistent text size scale

| | Guidance |
|---|---------|
| **Do** | text-sm text-base text-lg text-xl |
| **Don't** | Arbitrary font sizes |
| **Good** | `text-lg` |
| **Bad** | `text-[17px]` |
| **Severity** | Low |
| **Docs** | https://tailwindcss.com/docs/font-size |

### Text truncation

Handle long text gracefully

| | Guidance |
|---|---------|
| **Do** | truncate or line-clamp-* |
| **Don't** | Overflow breaking layout |
| **Good** | `line-clamp-2` |
| **Bad** | `No overflow handling` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/text-overflow |

## Colors

### Opacity utilities

Use color opacity utilities

| | Guidance |
|---|---------|
| **Do** | bg-black/50 text-white/80 |
| **Don't** | Separate opacity class |
| **Good** | `bg-black/50` |
| **Bad** | `bg-black opacity-50` |
| **Severity** | Low |
| **Docs** | https://tailwindcss.com/docs/background-color |

### Dark mode

Support dark mode with dark: prefix

| | Guidance |
|---|---------|
| **Do** | dark:bg-gray-900 dark:text-white |
| **Don't** | No dark mode support |
| **Good** | `dark:bg-gray-900` |
| **Bad** | `Only light theme` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/dark-mode |

### Semantic colors

Use semantic color naming in config

| | Guidance |
|---|---------|
| **Do** | primary secondary danger success |
| **Don't** | Generic color names in components |
| **Good** | `bg-primary` |
| **Bad** | `bg-blue-500 everywhere` |
| **Severity** | Medium |


### Theme color variables

Define colors in Tailwind theme and use directly

| | Guidance |
|---|---------|
| **Do** | bg-primary text-success border-cta |
| **Don't** | bg-[var(--color-primary)] text-[var(--color-success)] |
| **Good** | `bg-primary` |
| **Bad** | `bg-[var(--color-primary)]` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/customizing-colors |

### Use bg-linear-to-* for gradients

Tailwind v4 uses bg-linear-to-* syntax for gradients

| | Guidance |
|---|---------|
| **Do** | bg-linear-to-r bg-linear-to-b |
| **Don't** | bg-gradient-to-* (deprecated in v4) |
| **Good** | `bg-linear-to-r from-blue-500 to-purple-500` |
| **Bad** | `bg-gradient-to-r from-blue-500 to-purple-500` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/background-image |

## Spacing

### Consistent spacing scale

Use Tailwind spacing scale consistently

| | Guidance |
|---|---------|
| **Do** | p-4 m-6 gap-8 |
| **Don't** | Arbitrary pixel values |
| **Good** | `p-4 (1rem)` |
| **Bad** | `p-[15px]` |
| **Severity** | Low |
| **Docs** | https://tailwindcss.com/docs/customizing-spacing |

### Negative margins

Use sparingly for overlapping effects

| | Guidance |
|---|---------|
| **Do** | -mt-4 for overlapping elements |
| **Don't** | Negative margins for layout fixing |
| **Good** | `-mt-8 for card overlap` |
| **Bad** | `-m-2 to fix spacing issues` |
| **Severity** | Medium |


### Space between

Use space-y-* for vertical lists

| | Guidance |
|---|---------|
| **Do** | space-y-4 on flex/grid column |
| **Don't** | Margin on each child |
| **Good** | `space-y-4` |
| **Bad** | `Each child has mb-4` |
| **Severity** | Low |
| **Docs** | https://tailwindcss.com/docs/space |

## Forms

### Focus states

Always show focus indicators

| | Guidance |
|---|---------|
| **Do** | focus:ring-2 focus:ring-blue-500 |
| **Don't** | Remove focus outline |
| **Good** | `focus:ring-2 focus:ring-offset-2` |
| **Bad** | `focus:outline-none (no replacement)` |
| **Severity** | High |


### Input sizing

Consistent input dimensions

| | Guidance |
|---|---------|
| **Do** | h-10 px-3 for inputs |
| **Don't** | Inconsistent input heights |
| **Good** | `h-10 w-full px-3` |
| **Bad** | `Various heights per input` |
| **Severity** | Medium |


### Disabled states

Clear disabled styling

| | Guidance |
|---|---------|
| **Do** | disabled:opacity-50 disabled:cursor-not-allowed |
| **Don't** | No disabled indication |
| **Good** | `disabled:opacity-50` |
| **Bad** | `Same style as enabled` |
| **Severity** | Medium |


### Placeholder styling

Style placeholder text appropriately

| | Guidance |
|---|---------|
| **Do** | placeholder:text-gray-400 |
| **Don't** | Dark placeholder text |
| **Good** | `placeholder:text-gray-400` |
| **Bad** | `Default dark placeholder` |
| **Severity** | Low |


## Responsive

### Mobile-first approach

Start with mobile styles and add breakpoints

| | Guidance |
|---|---------|
| **Do** | Default mobile + md: lg: xl: |
| **Don't** | Desktop-first approach |
| **Good** | `text-sm md:text-base` |
| **Bad** | `text-base max-md:text-sm` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/responsive-design |

### Breakpoint testing

Test at standard breakpoints

| | Guidance |
|---|---------|
| **Do** | 320 375 768 1024 1280 1536 |
| **Don't** | Only test on development device |
| **Good** | `Test all breakpoints` |
| **Bad** | `Single device testing` |
| **Severity** | High |


### Hidden/shown utilities

Control visibility per breakpoint

| | Guidance |
|---|---------|
| **Do** | hidden md:block |
| **Don't** | Different content per breakpoint |
| **Good** | `hidden md:flex` |
| **Bad** | `Separate mobile/desktop components` |
| **Severity** | Low |
| **Docs** | https://tailwindcss.com/docs/display |

## Buttons

### Button sizing

Consistent button dimensions

| | Guidance |
|---|---------|
| **Do** | px-4 py-2 or px-6 py-3 |
| **Don't** | Inconsistent button sizes |
| **Good** | `px-4 py-2 text-sm` |
| **Bad** | `Various padding per button` |
| **Severity** | Medium |


### Touch targets

Minimum 44px touch target on mobile

| | Guidance |
|---|---------|
| **Do** | min-h-[44px] on mobile |
| **Don't** | Small buttons on mobile |
| **Good** | `min-h-[44px] min-w-[44px]` |
| **Bad** | `h-8 w-8 on mobile` |
| **Severity** | High |


### Loading states

Show loading feedback

| | Guidance |
|---|---------|
| **Do** | disabled + spinner icon |
| **Don't** | Clickable during loading |
| **Good** | `<Button disabled><Spinner/></Button>` |
| **Bad** | `Button without loading state` |
| **Severity** | High |


### Icon buttons

Accessible icon-only buttons

| | Guidance |
|---|---------|
| **Do** | aria-label on icon buttons |
| **Don't** | Icon button without label |
| **Good** | `<button aria-label='Close'><XIcon/></button>` |
| **Bad** | `<button><XIcon/></button>` |
| **Severity** | High |


## Cards

### Card structure

Consistent card styling

| | Guidance |
|---|---------|
| **Do** | rounded-lg shadow-md p-6 |
| **Don't** | Inconsistent card styles |
| **Good** | `rounded-2xl shadow-lg p-6` |
| **Bad** | `Mixed card styling` |
| **Severity** | Low |


### Card hover states

Interactive cards should have hover feedback

| | Guidance |
|---|---------|
| **Do** | hover:shadow-lg transition-shadow |
| **Don't** | No hover on clickable cards |
| **Good** | `hover:shadow-xl transition-shadow` |
| **Bad** | `Static cards that are clickable` |
| **Severity** | Medium |


### Card spacing

Consistent internal card spacing

| | Guidance |
|---|---------|
| **Do** | space-y-4 for card content |
| **Don't** | Inconsistent internal spacing |
| **Good** | `space-y-4 or p-6` |
| **Bad** | `Mixed mb-2 mb-4 mb-6` |
| **Severity** | Low |


## Accessibility

### Screen reader text

Provide context for screen readers

| | Guidance |
|---|---------|
| **Do** | sr-only for hidden labels |
| **Don't** | Missing context for icons |
| **Good** | `<span class='sr-only'>Close menu</span>` |
| **Bad** | `No label for icon button` |
| **Severity** | High |
| **Docs** | https://tailwindcss.com/docs/screen-readers |

### Focus visible

Show focus only for keyboard users

| | Guidance |
|---|---------|
| **Do** | focus-visible:ring-2 |
| **Don't** | Focus on all interactions |
| **Good** | `focus-visible:ring-2` |
| **Bad** | `focus:ring-2 (shows on click too)` |
| **Severity** | Medium |


### Reduced motion

Respect user motion preferences

| | Guidance |
|---|---------|
| **Do** | motion-reduce:animate-none |
| **Don't** | Ignore motion preferences |
| **Good** | `motion-reduce:transition-none` |
| **Bad** | `No reduced motion support` |
| **Severity** | High |
| **Docs** | https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-reduced-motion |

## Performance

### Configure content paths

Tailwind needs to know where classes are used

| | Guidance |
|---|---------|
| **Do** | Use 'content' array in config |
| **Don't** | Use deprecated 'purge' option (v2) |
| **Good** | `content: ['./src/**/*.{js,ts,jsx,tsx}']` |
| **Bad** | `purge: [...]` |
| **Severity** | High |
| **Docs** | https://tailwindcss.com/docs/content-configuration |

### JIT mode

Use JIT for faster builds and smaller bundles

| | Guidance |
|---|---------|
| **Do** | JIT enabled (default in v3) |
| **Don't** | Full CSS in development |
| **Good** | `Tailwind v3 defaults` |
| **Bad** | `Tailwind v2 without JIT` |
| **Severity** | Medium |


### Avoid @apply bloat

Use @apply sparingly

| | Guidance |
|---|---------|
| **Do** | Direct utilities in HTML |
| **Don't** | Heavy @apply usage |
| **Good** | `class='px-4 py-2 rounded'` |
| **Bad** | `@apply px-4 py-2 rounded;` |
| **Severity** | Low |
| **Docs** | https://tailwindcss.com/docs/reusing-styles |

## Plugins

### Official plugins

Use official Tailwind plugins

| | Guidance |
|---|---------|
| **Do** | @tailwindcss/forms typography aspect-ratio |
| **Don't** | Custom implementations |
| **Good** | `@tailwindcss/forms` |
| **Bad** | `Custom form reset CSS` |
| **Severity** | Medium |
| **Docs** | https://tailwindcss.com/docs/plugins |

### Custom utilities

Create utilities for repeated patterns

| | Guidance |
|---|---------|
| **Do** | Custom utility in config |
| **Don't** | Repeated arbitrary values |
| **Good** | `Custom shadow utility` |
| **Bad** | `shadow-[0_4px_20px_rgba(0,0,0,0.1)] everywhere` |
| **Severity** | Medium |


## Interactivity

### Group and Peer

Style based on parent/sibling state

| | Guidance |
|---|---------|
| **Do** | group-hover peer-checked |
| **Don't** | JS for simple state interactions |
| **Good** | `group-hover:text-blue-500` |
| **Bad** | `onMouseEnter={() => setHover(true)}` |
| **Severity** | Low |
| **Docs** | https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state |

## Customization

### Arbitrary Values

Use [] for one-off values

| | Guidance |
|---|---------|
| **Do** | w-[350px] for specific needs |
| **Don't** | Creating config for single use |
| **Good** | `top-[117px] (if strictly needed)` |
| **Bad** | `style={{ top: '117px' }}` |
| **Severity** | Low |
| **Docs** | https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values |

