# UI Styles Catalog

> 67 UI styles with structured metadata for design system generation.
> Source: UI/UX Pro Max (converted to MIKE format).

---

### Style 1: Minimalism & Swiss Style

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, essential |
| Primary Colors | Monochromatic, Black #000000, White #FFFFFF |
| Secondary Colors | Neutral (Beige #F5F1E8, Grey #808080, Taupe #B38B6D), Primary accent |
| Effects | Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading |
| Best For | Enterprise apps, dashboards, documentation sites, SaaS platforms, professional tools |
| Do Not Use For | Creative portfolios, entertainment, playful brands, artistic experiments |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ High |
| Conversion | ◐ Medium |
| Complexity | Low |
| CSS Keywords | display: grid, gap: 2rem, font-family: sans-serif, color: #000 or #FFF, max-width: 1200px, clean borders, no box-shadow unless necessary |
| Design Tokens | --spacing: 2rem, --border-radius: 0px, --font-weight: 400-700, --shadow: none, --accent-color: single primary only |

---

### Style 2: Neumorphism

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Soft UI, embossed, debossed, convex, concave, light source, subtle depth, rounded (12-16px), monochromatic |
| Primary Colors | Light pastels: Soft Blue #C8E0F4, Soft Pink #F5E0E8, Soft Grey #E8E8E8 |
| Secondary Colors | Tints/shades (±30%), gradient subtlety, color harmony |
| Effects | Soft box-shadow (multiple: -5px -5px 15px, 5px 5px 15px), smooth press (150ms), inner subtle shadow |
| Best For | Health/wellness apps, meditation platforms, fitness trackers, minimal interaction UIs |
| Do Not Use For | Complex apps, critical accessibility, data-heavy dashboards, high-contrast required |
| Light Mode | ✓ Full |
| Dark Mode | ◐ Partial |
| Performance | ⚡ Good |
| Accessibility | ⚠ Low contrast |
| Mobile | ✓ Good |
| Conversion | ◐ Medium |
| Complexity | Medium |
| CSS Keywords | border-radius: 12-16px, box-shadow: -5px -5px 15px rgba(0,0,0,0.1), 5px 5px 15px rgba(255,255,255,0.8), background: linear-gradient(145deg, color1, color2), transform: scale on press |
| Design Tokens | --border-radius: 14px, --shadow-soft-1: -5px -5px 15px, --shadow-soft-2: 5px 5px 15px, --color-light: #F5F5F5, --color-primary: single pastel |

---

### Style 3: Glassmorphism

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth, multi-layer |
| Primary Colors | Translucent white: rgba(255,255,255,0.1-0.3) |
| Secondary Colors | Vibrant: Electric Blue #0080FF, Neon Purple #8B00FF, Vivid Pink #FF1493, Teal #20B2AA |
| Effects | Backdrop blur (10-20px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth |
| Best For | Modern SaaS, financial dashboards, high-end corporate, lifestyle apps, modal overlays, navigation |
| Do Not Use For | Low-contrast backgrounds, critical accessibility, performance-limited, dark text on dark |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Good |
| Accessibility | ⚠ Ensure 4.5:1 |
| Mobile | ✓ Good |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | backdrop-filter: blur(15px), background: rgba(255, 255, 255, 0.15), border: 1px solid rgba(255,255,255,0.2), -webkit-backdrop-filter: blur(15px), z-index layering for depth |
| Design Tokens | --blur-amount: 15px, --glass-opacity: 0.15, --border-color: rgba(255,255,255,0.2), --background: vibrant color, --text-color: light/dark based on BG |

---

### Style 4: Brutalism

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Raw, unpolished, stark, high contrast, plain text, default fonts, visible borders, asymmetric, anti-design |
| Primary Colors | Primary: Red #FF0000, Blue #0000FF, Yellow #FFFF00, Black #000000, White #FFFFFF |
| Secondary Colors | Limited: Neon Green #00FF00, Hot Pink #FF00FF, minimal secondary |
| Effects | No smooth transitions (instant), sharp corners (0px), bold typography (700+), visible grid, large blocks |
| Best For | Design portfolios, artistic projects, counter-culture brands, editorial/media sites, tech blogs |
| Do Not Use For | Corporate environments, conservative industries, critical accessibility, customer-facing professional |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ◐ Medium |
| Conversion | ✗ Low |
| Complexity | Low |
| CSS Keywords | border-radius: 0px, transition: none or 0s, font-family: system-ui or monospace, font-weight: 700+, border: visible 2-4px, colors: #FF0000, #0000FF, #FFFF00, #000000, #FFFFFF |
| Design Tokens | --border-radius: 0px, --transition-duration: 0s, --font-weight: 700-900, --colors: primary only, --border-style: visible, --grid-visible: true |

---

### Style 5: 3D & Hyperrealism

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Depth, realistic textures, 3D models, spatial navigation, tactile, skeuomorphic elements, rich detail, immersive |
| Primary Colors | Deep Navy #001F3F, Forest Green #228B22, Burgundy #800020, Gold #FFD700, Silver #C0C0C0 |
| Secondary Colors | Complex gradients (5-10 stops), realistic lighting, shadow variations (20-40% darker) |
| Effects | WebGL/Three.js 3D, realistic shadows (layers), physics lighting, parallax (3-5 layers), smooth 3D (300-400ms) |
| Best For | Gaming, product showcase, immersive experiences, high-end e-commerce, architectural viz, VR/AR |
| Do Not Use For | Low-end mobile, performance-limited, critical accessibility, data tables/forms |
| Light Mode | ◐ Partial |
| Dark Mode | ◐ Partial |
| Performance | ❌ Poor |
| Accessibility | ⚠ Not accessible |
| Mobile | ✗ Low |
| Conversion | ◐ Medium |
| Complexity | High |
| CSS Keywords | transform: translate3d, perspective: 1000px, WebGL canvas, Three.js/Babylon.js library, box-shadow: complex multi-layer, background: complex gradients, filter: drop-shadow() |
| Design Tokens | --perspective: 1000px, --parallax-layers: 5, --lighting-intensity: realistic, --shadow-depth: 20-40%, --animation-duration: 300-400ms |

---

### Style 6: Vibrant & Block-based

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Bold, energetic, playful, block layout, geometric shapes, high color contrast, duotone, modern, energetic |
| Primary Colors | Neon Green #39FF14, Electric Purple #BF00FF, Vivid Pink #FF1493, Bright Cyan #00FFFF, Sunburst #FFAA00 |
| Secondary Colors | Complementary: Orange #FF7F00, Shocking Pink #FF006E, Lime #CCFF00, triadic schemes |
| Effects | Large sections (48px+ gaps), animated patterns, bold hover (color shift), scroll-snap, large type (32px+), 200-300ms |
| Best For | Startups, creative agencies, gaming, social media, youth-focused, entertainment, consumer |
| Do Not Use For | Financial institutions, healthcare, formal business, government, conservative, elderly |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Good |
| Accessibility | ◐ Ensure WCAG |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | display: flex/grid with large gaps (48px+), font-size: 32px+, background: animated patterns (CSS), color: neon/vibrant colors, animation: continuous pattern movement |
| Design Tokens | --block-gap: 48px, --typography-size: 32px+, --color-palette: 4-6 vibrant colors, --animation: continuous pattern, --contrast-ratio: 7:1+ |

---

### Style 7: Dark Mode (OLED)

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Dark theme, low light, high contrast, deep black, midnight blue, eye-friendly, OLED, night mode, power efficient |
| Primary Colors | Deep Black #000000, Dark Grey #121212, Midnight Blue #0A0E27 |
| Secondary Colors | Vibrant accents: Neon Green #39FF14, Electric Blue #0080FF, Gold #FFD700, Plasma Purple #BF00FF |
| Effects | Minimal glow (text-shadow: 0 0 10px), dark-to-light transitions, low white emission, high readability, visible focus |
| Best For | Night-mode apps, coding platforms, entertainment, eye-strain prevention, OLED devices, low-light |
| Do Not Use For | Print-first content, high-brightness outdoor, color-accuracy-critical |
| Light Mode | ✗ No |
| Dark Mode | ✓ Only |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ High |
| Conversion | ◐ Low |
| Complexity | Low |
| CSS Keywords | background: #000000 or #121212, color: #FFFFFF or #E0E0E0, text-shadow: 0 0 10px neon-color (sparingly), filter: brightness(0.8) if needed, color-scheme: dark |
| Design Tokens | --bg-black: #000000, --bg-dark-grey: #121212, --text-primary: #FFFFFF, --accent-neon: neon colors, --glow-effect: minimal, --oled-optimized: true |

---

### Style 8: Accessible & Ethical

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | High contrast, large text (16px+), keyboard navigation, screen reader friendly, WCAG compliant, focus state, semantic |
| Primary Colors | WCAG AA/AAA (4.5:1 min), simple primary, clear secondary, high luminosity (7:1+) |
| Secondary Colors | Symbol-based colors (not color-only), supporting patterns, inclusive combinations |
| Effects | Clear focus rings (3-4px), ARIA labels, skip links, responsive design, reduced motion, 44x44px touch targets |
| Best For | Government, healthcare, education, inclusive products, large audience, legal compliance, public |
| Do Not Use For | None - accessibility universal |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | color-contrast: 7:1+, font-size: 16px+, outline: 3-4px on :focus-visible, aria-label, role attributes, @media (prefers-reduced-motion), touch-target: 44x44px, cursor: pointer |
| Design Tokens | --contrast-ratio: 7:1, --font-size-min: 16px, --focus-ring: 3-4px, --touch-target: 44x44px, --wcag-level: AAA, --keyboard-accessible: true, --sr-tested: true |

---

### Style 9: Claymorphism

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Soft 3D, chunky, playful, toy-like, bubbly, thick borders (3-4px), double shadows, rounded (16-24px) |
| Primary Colors | Pastel: Soft Peach #FDBCB4, Baby Blue #ADD8E6, Mint #98FF98, Lilac #E6E6FA, light BG |
| Secondary Colors | Soft gradients (pastel-to-pastel), light/dark variations (20-30%), gradient subtle |
| Effects | Inner+outer shadows (subtle, no hard lines), soft press (200ms ease-out), fluffy elements, smooth transitions |
| Best For | Educational apps, children's apps, SaaS platforms, creative tools, fun-focused, onboarding, casual games |
| Do Not Use For | Formal corporate, professional services, data-critical, serious/medical, legal apps, finance |
| Light Mode | ✓ Full |
| Dark Mode | ◐ Partial |
| Performance | ⚡ Good |
| Accessibility | ⚠ Ensure 4.5:1 |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | border-radius: 16-24px, border: 3-4px solid, box-shadow: inset -2px -2px 8px, 4px 4px 8px, background: pastel-gradient, animation: soft bounce (cubic-bezier 0.34, 1.56) |
| Design Tokens | --border-radius: 20px, --border-width: 3-4px, --shadow-inner: inset -2px -2px 8px, --shadow-outer: 4px 4px 8px, --color-palette: pastels, --animation: bounce |

---

### Style 10: Aurora UI

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Vibrant gradients, smooth blend, Northern Lights effect, mesh gradient, luminous, atmospheric, abstract |
| Primary Colors | Complementary: Blue-Orange, Purple-Yellow, Electric Blue #0080FF, Magenta #FF1493, Cyan #00FFFF |
| Secondary Colors | Smooth transitions (Blue→Purple→Pink→Teal), iridescent effects, blend modes (screen, multiply) |
| Effects | Large flowing CSS/SVG gradients, subtle 8-12s animations, depth via color layering, smooth morph |
| Best For | Modern SaaS, creative agencies, branding, music platforms, lifestyle, premium products, hero sections |
| Do Not Use For | Data-heavy dashboards, critical accessibility, content-heavy where distraction issues |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Good |
| Accessibility | ⚠ Text contrast |
| Mobile | ✓ Good |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | background: conic-gradient or radial-gradient with multiple stops, animation: @keyframes gradient (8-12s), background-size: 200% 200%, filter: saturate(1.2), blend-mode: screen or multiply |
| Design Tokens | --gradient-colors: complementary pairs, --animation-duration: 8-12s, --blend-mode: screen, --color-saturation: 1.2, --effect: iridescent, --loop-smooth: true |

---

### Style 11: Retro-Futurism

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Vintage sci-fi, 80s aesthetic, neon glow, geometric patterns, CRT scanlines, pixel art, cyberpunk, synthwave |
| Primary Colors | Neon Blue #0080FF, Hot Pink #FF006E, Cyan #00FFFF, Deep Black #1A1A2E, Purple #5D34D0 |
| Secondary Colors | Metallic Silver #C0C0C0, Gold #FFD700, duotone, 80s Pink #FF10F0, neon accents |
| Effects | CRT scanlines (::before overlay), neon glow (text-shadow+box-shadow), glitch effects (skew/offset keyframes) |
| Best For | Gaming, entertainment, music platforms, tech brands, artistic projects, nostalgic, cyberpunk |
| Do Not Use For | Conservative industries, critical accessibility, professional/corporate, elderly, legal/finance |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Dark focused |
| Performance | ⚠ Moderate |
| Accessibility | ⚠ High contrast/strain |
| Mobile | ◐ Medium |
| Conversion | ◐ Medium |
| Complexity | Medium |
| CSS Keywords | color: neon colors (#0080FF, #FF006E, #00FFFF), text-shadow: 0 0 10px neon, background: #000 or #1A1A2E, font-family: monospace, animation: glitch (skew+offset), filter: hue-rotate |
| Design Tokens | --neon-colors: #0080FF #FF006E #00FFFF, --background: #000000, --font-family: monospace, --effect: glitch+glow, --scanline-opacity: 0.3, --crt-effect: true |

---

### Style 12: Flat Design

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | 2D, minimalist, bold colors, no shadows, clean lines, simple shapes, typography-focused, modern, icon-heavy |
| Primary Colors | Solid bright: Red, Orange, Blue, Green, limited palette (4-6 max) |
| Secondary Colors | Complementary colors, muted secondaries, high saturation, clean accents |
| Effects | No gradients/shadows, simple hover (color/opacity shift), fast loading, clean transitions (150-200ms ease), minimal icons |
| Best For | Web apps, mobile apps, cross-platform, startup MVPs, user-friendly, SaaS, dashboards, corporate |
| Do Not Use For | Complex 3D, premium/luxury, artistic portfolios, immersive experiences, high-detail |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | box-shadow: none, background: solid color, border-radius: 0-4px, color: solid (no gradients), fill: solid, stroke: 1-2px, font: bold sans-serif, icons: simplified SVG |
| Design Tokens | --shadow: none, --color-palette: 4-6 solid, --border-radius: 2px, --gradient: none, --icons: simplified SVG, --animation: minimal 150-200ms |

---

### Style 13: Skeuomorphism

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Realistic, texture, depth, 3D appearance, real-world metaphors, shadows, gradients, tactile, detailed, material |
| Primary Colors | Rich realistic: wood, leather, metal colors, detailed gradients (8-12 stops), metallic effects |
| Secondary Colors | Realistic lighting gradients, shadow variations (30-50% darker), texture overlays, material colors |
| Effects | Realistic shadows (layers), depth (perspective), texture details (noise, grain), realistic animations (300-500ms) |
| Best For | Legacy apps, gaming, immersive storytelling, premium products, luxury, realistic simulations, education |
| Do Not Use For | Modern enterprise, critical accessibility, low-performance, web (use Flat/Modern) |
| Light Mode | ◐ Partial |
| Dark Mode | ◐ Partial |
| Performance | ❌ Poor |
| Accessibility | ⚠ Textures reduce readability |
| Mobile | ✗ Low |
| Conversion | ◐ Medium |
| Complexity | High |
| CSS Keywords | background: complex gradient (8-12 stops), box-shadow: realistic multi-layer, background-image: texture overlay (noise, grain), filter: drop-shadow, transform: scale on press (300-500ms) |
| Design Tokens | --gradient-stops: 8-12, --texture-overlay: noise+grain, --shadow-layers: 3+, --animation-duration: 300-500ms, --depth-effect: pronounced, --tactile: true |

---

### Style 14: Liquid Glass

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Flowing glass, morphing, smooth transitions, fluid effects, translucent, animated blur, iridescent, chromatic aberration |
| Primary Colors | Vibrant iridescent (rainbow spectrum), translucent base with opacity shifts, gradient fluidity |
| Secondary Colors | Chromatic aberration (Red-Cyan), iridescent oil-spill, fluid gradient blends, holographic effects |
| Effects | Morphing elements (SVG/CSS), fluid animations (400-600ms curves), dynamic blur (backdrop-filter), color transitions |
| Best For | Premium SaaS, high-end e-commerce, creative platforms, branding experiences, luxury portfolios |
| Do Not Use For | Performance-limited, critical accessibility, complex data, budget projects |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Moderate-Poor |
| Accessibility | ⚠ Text contrast |
| Mobile | ◐ Medium |
| Conversion | ✓ High |
| Complexity | High |
| CSS Keywords | animation: morphing SVG paths (400-600ms), backdrop-filter: blur + saturate, filter: hue-rotate + brightness, blend-mode: screen, background: iridescent gradient |
| Design Tokens | --morph-duration: 400-600ms, --blur-amount: 15px, --chromatic-aberration: true, --iridescent: true, --blend-mode: screen, --smooth-transitions: true |

---

### Style 15: Motion-Driven

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Animation-heavy, microinteractions, smooth transitions, scroll effects, parallax, entrance anim, page transitions |
| Primary Colors | Bold colors emphasize movement, high contrast animated, dynamic gradients, accent action colors |
| Secondary Colors | Transitional states, success (Green #22C55E), error (Red #EF4444), neutral feedback |
| Effects | Scroll anim (Intersection Observer), hover (300-400ms), entrance, parallax (3-5 layers), page transitions |
| Best For | Portfolio sites, storytelling platforms, interactive experiences, entertainment apps, creative, SaaS |
| Do Not Use For | Data dashboards, critical accessibility, low-power devices, content-heavy, motion-sensitive |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Good |
| Accessibility | ⚠ Prefers-reduced-motion |
| Mobile | ✓ Good |
| Conversion | ✓ High |
| Complexity | High |
| CSS Keywords | animation: @keyframes scroll-reveal, transform: translateY/X, Intersection Observer API, will-change: transform, scroll-behavior: smooth, animation-duration: 300-400ms |
| Design Tokens | --animation-duration: 300-400ms, --parallax-layers: 5, --scroll-behavior: smooth, --gpu-accelerated: true, --entrance-animation: true, --page-transition: smooth |

---

### Style 16: Micro-interactions

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Small animations, gesture-based, tactile feedback, subtle animations, contextual interactions, responsive |
| Primary Colors | Subtle color shifts (10-20%), feedback: Green #22C55E, Red #EF4444, Amber #F59E0B |
| Secondary Colors | Accent feedback, neutral supporting, clear action indicators |
| Effects | Small hover (50-100ms), loading spinners, success/error state anim, gesture-triggered (swipe/pinch), haptic |
| Best For | Mobile apps, touchscreen UIs, productivity tools, user-friendly, consumer apps, interactive components |
| Do Not Use For | Desktop-only, critical performance, accessibility-first (alternatives needed) |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ Good |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | animation: short 50-100ms, transition: hover states, @media (hover: hover) for desktop, :active for press, haptic-feedback CSS/API, loading animation smooth loop |
| Design Tokens | --micro-animation-duration: 50-100ms, --gesture-responsive: true, --haptic-feedback: true, --loading-animation: smooth, --state-feedback: success+error |

---

### Style 17: Inclusive Design

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Accessible, color-blind friendly, high contrast, haptic feedback, voice interaction, screen reader, WCAG AAA, universal |
| Primary Colors | WCAG AAA (7:1+ contrast), avoid red-green only, symbol-based indicators, high contrast primary |
| Secondary Colors | Supporting patterns (stripes, dots, hatch), symbols, combinations, clear non-color indicators |
| Effects | Haptic feedback (vibration), voice guidance, focus indicators (4px+ ring), motion options, alt content, semantic |
| Best For | Public services, education, healthcare, finance, government, accessible consumer, inclusive |
| Do Not Use For | None - accessibility universal |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | aria-* attributes complete, role attributes semantic, focus-visible: 3-4px ring, color-contrast: 7:1+, @media (prefers-reduced-motion), alt text on all images, form labels properly associated |
| Design Tokens | --contrast-ratio: 7:1, --font-size: 16px+, --keyboard-accessible: true, --sr-compatible: true, --wcag-level: AAA, --color-symbols: true, --haptic: enabled |

---

### Style 18: Zero Interface

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Minimal visible UI, voice-first, gesture-based, AI-driven, invisible controls, predictive, context-aware, ambient |
| Primary Colors | Neutral backgrounds: Soft white #FAFAFA, light grey #F0F0F0, warm off-white #F5F1E8 |
| Secondary Colors | Subtle feedback: light green, light red, minimal UI elements, soft accents |
| Effects | Voice recognition UI, gesture detection, AI predictions (smooth reveal), progressive disclosure, smart suggestions |
| Best For | Voice assistants, AI platforms, future-forward UX, smart home, contextual computing, ambient experiences |
| Do Not Use For | Complex workflows, data-entry heavy, traditional systems, legacy support, explicit control |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ Excellent |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | voice-commands: Web Speech API, gesture-detection: touch events, AI-predictions: hidden by default (reveal on hover), progressive-disclosure: show on demand, minimal UI visible |
| Design Tokens | --voice-ui: enabled, --gesture-detection: active, --ai-predictions: smart, --progressive-disclosure: true, --visible-ui: minimal, --context-aware: true |

---

### Style 19: Soft UI Evolution

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Evolved soft UI, better contrast, modern aesthetics, subtle depth, accessibility-focused, improved shadows, hybrid |
| Primary Colors | Improved contrast pastels: Soft Blue #87CEEB, Soft Pink #FFB6C1, Soft Green #90EE90, better hierarchy |
| Secondary Colors | Better combinations, accessible secondary, supporting with improved contrast, modern accents |
| Effects | Improved shadows (softer than flat, clearer than neumorphism), modern (200-300ms), focus visible, WCAG AA/AAA |
| Best For | Modern enterprise apps, SaaS platforms, health/wellness, modern business tools, professional, hybrid |
| Do Not Use For | Extreme minimalism, critical performance, systems without modern OS |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA+ |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | box-shadow: softer multi-layer (0 2px 4px), background: improved contrast pastels, border-radius: 8-12px, animation: 200-300ms smooth, outline: 2-3px on focus, contrast: 4.5:1+ |
| Design Tokens | --shadow-soft: modern blend, --border-radius: 10px, --animation-duration: 200-300ms, --contrast-ratio: 4.5:1+, --color-hierarchy: improved, --wcag-level: AA+ |

---

### Style 20: Hero-Centric Design

| Field | Value |
|-------|-------|
| Type | Landing Page |
| Keywords | Large hero section, compelling headline, high-contrast CTA, product showcase, value proposition, hero image/video, dramatic visual |
| Primary Colors | Brand primary color, white/light backgrounds for contrast, accent color for CTA |
| Secondary Colors | Supporting colors for secondary CTAs, accent highlights, trust elements (testimonials, logos) |
| Effects | Smooth scroll reveal, fade-in animations on hero, subtle background parallax, CTA glow/pulse effect |
| Best For | SaaS landing pages, product launches, service landing pages, B2B platforms, tech companies |
| Do Not Use For | Complex navigation, multi-page experiences, data-heavy applications |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Good |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ Full |
| Conversion | ✓ Very High |
| Complexity | Medium |
| CSS Keywords | min-height: 100vh, display: flex, align-items: center, background: linear-gradient or image, text-shadow for readability, max-width: 800px for text, button with hover scale (1.05) |
| Design Tokens | --hero-min-height: 100vh, --headline-size: clamp(2rem, 5vw, 4rem), --cta-padding: 1rem 2rem, --overlay-opacity: 0.5, --text-shadow: 0 2px 4px rgba(0,0,0,0.3) |

---

### Style 21: Conversion-Optimized

| Field | Value |
|-------|-------|
| Type | Landing Page |
| Keywords | Form-focused, minimalist design, single CTA focus, high contrast, urgency elements, trust signals, social proof, clear value |
| Primary Colors | Primary brand color, high-contrast white/light backgrounds, warning/urgency colors for time-limited offers |
| Secondary Colors | Secondary CTA color (muted), trust element colors (testimonial highlights), accent for key benefits |
| Effects | Hover states on CTA (color shift, slight scale), form field focus animations, loading spinner, success feedback |
| Best For | E-commerce product pages, free trial signups, lead generation, SaaS pricing pages, limited-time offers |
| Do Not Use For | Complex feature explanations, multi-product showcases, technical documentation |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ Full (mobile-optimized) |
| Conversion | ✓ Very High |
| Complexity | Medium |
| CSS Keywords | form with focus states, input:focus ring, button: primary color high contrast, position: sticky for CTA, max-width: 600px for form, loading spinner, success/error states |
| Design Tokens | --cta-color: high contrast primary, --form-max-width: 600px, --input-height: 48px, --focus-ring: 3px solid accent, --success-color: #22C55E, --error-color: #EF4444 |

---

### Style 22: Feature-Rich Showcase

| Field | Value |
|-------|-------|
| Type | Landing Page |
| Keywords | Multiple feature sections, grid layout, benefit cards, visual feature demonstrations, interactive elements, problem-solution pairs |
| Primary Colors | Primary brand, bright secondary colors for feature cards, contrasting accent for CTAs |
| Secondary Colors | Supporting colors for: benefits (green), problems (red/orange), features (blue/purple), social proof (neutral) |
| Effects | Card hover effects (lift/scale), icon animations on scroll, feature toggle animations, smooth section transitions |
| Best For | Enterprise SaaS, software tools landing pages, platform services, complex product explanations, B2B products |
| Do Not Use For | Simple product pages, early-stage startups with few features, entertainment landing pages |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Good |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ Good |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | display: grid, grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)), gap: 2rem, card hover effects (translateY -4px), icon containers, alternating background colors |
| Design Tokens | --card-padding: 2rem, --card-radius: 12px, --icon-size: 48px, --grid-gap: 2rem, --section-padding: 4rem 0, --hover-transform: translateY(-4px) |

---

### Style 23: Minimal & Direct

| Field | Value |
|-------|-------|
| Type | Landing Page |
| Keywords | Minimal text, white space heavy, single column layout, direct messaging, clean typography, visual-centric, fast-loading |
| Primary Colors | Monochromatic primary, white background, single accent color for CTA, black/dark grey text |
| Secondary Colors | Minimal secondary colors, reserved for critical CTAs only, neutral supporting elements |
| Effects | Very subtle hover effects, minimal animations, fast page load (no heavy animations), smooth scroll |
| Best For | Simple service landing pages, indie products, consulting services, micro SaaS, freelancer portfolios |
| Do Not Use For | Feature-heavy products, complex explanations, multi-product showcases |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ Full |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | max-width: 680px, margin: 0 auto, padding: 4rem 2rem, font-size: 18-20px, line-height: 1.6, minimal animations, no box-shadow, clean borders only |
| Design Tokens | --content-max-width: 680px, --spacing-large: 4rem, --font-size-body: 18px, --line-height: 1.6, --color-text: #1a1a1a, --color-bg: #ffffff |

---

### Style 24: Social Proof-Focused

| Field | Value |
|-------|-------|
| Type | Landing Page |
| Keywords | Testimonials prominent, client logos displayed, case studies sections, reviews/ratings, user avatars, success metrics, credibility markers |
| Primary Colors | Primary brand, trust colors (blue), success/growth colors (green), neutral backgrounds |
| Secondary Colors | Testimonial highlight colors, logo grid backgrounds (light grey), badge/achievement colors |
| Effects | Testimonial carousel animations, logo grid fade-in, stat counter animations (number count-up), review star ratings |
| Best For | B2B SaaS, professional services, premium products, e-commerce conversion pages, established brands |
| Do Not Use For | Startup MVPs, products without users, niche/experimental products |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Good |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ Full |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | testimonial cards with avatar, logo grid (grayscale filter), star rating SVGs, counter animations (count-up), blockquote styling, carousel for testimonials, metric cards |
| Design Tokens | --avatar-size: 64px, --logo-height: 40px, --star-color: #FBBF24, --metric-font-size: 3rem, --testimonial-bg: #F9FAFB, --blockquote-border: 4px solid accent |

---

### Style 25: Interactive Product Demo

| Field | Value |
|-------|-------|
| Type | Landing Page |
| Keywords | Embedded product mockup/video, interactive elements, product walkthrough, step-by-step guides, hover-to-reveal features, embedded demos |
| Primary Colors | Primary brand, interface colors matching product, demo highlight colors for interactive elements |
| Secondary Colors | Product UI colors, tutorial step colors (numbered progression), hover state indicators |
| Effects | Product animation playback, step progression animations, hover reveal effects, smooth zoom on interaction |
| Best For | SaaS platforms, tool/software products, productivity apps landing pages, developer tools, productivity software |
| Do Not Use For | Simple services, consulting, non-digital products, complexity-averse audiences |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Good (video/interactive) |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ Good |
| Conversion | ✓ Very High |
| Complexity | Medium |
| CSS Keywords | video element with controls, position: relative for overlays, hover reveal (opacity transition), step indicators, modal for full demo, screenshot lightbox, play button overlay |
| Design Tokens | --video-aspect-ratio: 16/9, --overlay-bg: rgba(0,0,0,0.7), --step-indicator-size: 32px, --play-button-size: 80px, --transition-duration: 300ms |

---

### Style 26: Trust & Authority

| Field | Value |
|-------|-------|
| Type | Landing Page |
| Keywords | Certificates/badges displayed, expert credentials, case studies with metrics, before/after comparisons, industry recognition, security badges |
| Primary Colors | Professional colors (blue/grey), trust colors, certification badge colors (gold/silver accents) |
| Secondary Colors | Certificate highlight colors, metric showcase colors, comparison highlight (success green) |
| Effects | Badge hover effects, metric pulse animations, certificate carousel, smooth stat reveal |
| Best For | Healthcare/medical landing pages, financial services, enterprise software, premium/luxury products, legal services |
| Do Not Use For | Casual products, entertainment, viral/social-first products |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ Full |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | badge grid layout, shield icons, lock icons for security, certificate styling, metric cards with icons, professional color scheme (blue/grey), subtle shadows for depth |
| Design Tokens | --badge-height: 48px, --trust-color: #1E40AF, --security-green: #059669, --card-shadow: 0 4px 6px rgba(0,0,0,0.1), --metric-highlight: #F59E0B |

---

### Style 27: Storytelling-Driven

| Field | Value |
|-------|-------|
| Type | Landing Page |
| Keywords | Narrative flow, visual story progression, section transitions, consistent character/brand voice, emotional messaging, journey visualization |
| Primary Colors | Brand primary, warm/emotional colors, varied accent colors per story section, high visual variety |
| Secondary Colors | Story section color coding, emotional state colors (calm, excitement, success), transitional gradients |
| Effects | Section-to-section animations, scroll-triggered reveals, character/icon animations, morphing transitions, parallax narrative |
| Best For | Brand/startup stories, mission-driven products, premium/lifestyle brands, documentary-style products, educational |
| Do Not Use For | Technical/complex products (unless narrative-driven), traditional enterprise software |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Moderate (animations) |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ Good |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | scroll-snap sections, Intersection Observer for reveals, parallax backgrounds, section transitions, timeline CSS, narrative typography (varied sizes), image-text alternating |
| Design Tokens | --section-min-height: 100vh, --reveal-duration: 600ms, --narrative-font: serif, --chapter-spacing: 8rem, --timeline-color: accent, --parallax-speed: 0.5 |

---

### Style 28: Data-Dense Dashboard

| Field | Value |
|-------|-------|
| Type | BI/Analytics |
| Keywords | Multiple charts/widgets, data tables, KPI cards, minimal padding, grid layout, space-efficient, maximum data visibility |
| Primary Colors | Neutral primary (light grey/white #F5F5F5), data colors (blue/green/red), dark text #333333 |
| Secondary Colors | Chart colors: success (green #22C55E), warning (amber #F59E0B), alert (red #EF4444), neutral (grey) |
| Effects | Hover tooltips, chart zoom on click, row highlighting on hover, smooth filter animations, data loading spinners |
| Best For | Business intelligence dashboards, financial analytics, enterprise reporting, operational dashboards, data warehousing |
| Do Not Use For | Marketing dashboards, consumer-facing analytics, simple reporting |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ◐ Medium |
| Conversion | ✗ Not applicable |
| Complexity | Medium |
| CSS Keywords | display: grid, grid-template-columns: repeat(12, 1fr), gap: 8px, padding: 12px, font-size: 12-14px, overflow: auto for tables, compact card design, sticky headers |
| Design Tokens | --grid-gap: 8px, --card-padding: 12px, --font-size-small: 12px, --table-row-height: 36px, --sidebar-width: 240px, --header-height: 56px |

---

### Style 29: Heat Map & Heatmap Style

| Field | Value |
|-------|-------|
| Type | BI/Analytics |
| Keywords | Color-coded grid/matrix, data intensity visualization, geographical heat maps, correlation matrices, cell-based representation, gradient coloring |
| Primary Colors | Gradient scale: Cool (blue #0080FF) to hot (red #FF0000), neutral middle (white/yellow) |
| Secondary Colors | Support gradients: Light (cool blue) to dark (warm red), divergent for positive/negative data, monochromatic options |
| Effects | Color gradient transitions on data change, cell highlighting on hover, tooltip reveal on click, smooth color animation |
| Best For | Geographical analysis, performance matrices, correlation analysis, user behavior heatmaps, temperature/intensity data |
| Do Not Use For | Linear data representation, categorical comparisons (use bar charts), small datasets |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full (with adjustments) |
| Performance | ⚡ Excellent |
| Accessibility | ⚠ Colorblind considerations |
| Mobile | ◐ Medium |
| Conversion | ✗ Not applicable |
| Complexity | Medium |
| CSS Keywords | display: grid, background: linear-gradient for legend, cell hover states, tooltip positioning, color scale (blue→white→red), SVG for geographic, canvas for large datasets |
| Design Tokens | --heatmap-cool: #0080FF, --heatmap-neutral: #FFFFFF, --heatmap-hot: #FF0000, --cell-size: 24px, --legend-width: 200px, --tooltip-bg: rgba(0,0,0,0.9) |

---

### Style 30: Executive Dashboard

| Field | Value |
|-------|-------|
| Type | BI/Analytics |
| Keywords | High-level KPIs, large key metrics, minimal detail, summary view, trend indicators, at-a-glance insights, executive summary |
| Primary Colors | Brand colors, professional palette (blue/grey/white), accent for KPIs, red for alerts/concerns |
| Secondary Colors | KPI highlight colors: positive (green), negative (red), neutral (grey), trend arrow colors |
| Effects | KPI value animations (count-up), trend arrow direction animations, metric card hover lift, alert pulse effect |
| Best For | C-suite dashboards, business summary reports, decision-maker dashboards, strategic planning views |
| Do Not Use For | Detailed analyst dashboards, technical deep-dives, operational monitoring |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ✗ Low (not mobile-optimized) |
| Conversion | ✗ Not applicable |
| Complexity | Medium |
| CSS Keywords | display: flex for KPI row, large font-size (24-48px) for metrics, sparkline SVG inline, status indicators (border-left color), card shadows for hierarchy, responsive breakpoints |
| Design Tokens | --kpi-font-size: 48px, --sparkline-height: 32px, --status-green: #22C55E, --status-yellow: #F59E0B, --status-red: #EF4444, --card-min-width: 280px |

---

### Style 31: Real-Time Monitoring

| Field | Value |
|-------|-------|
| Type | BI/Analytics |
| Keywords | Live data updates, status indicators, alert notifications, streaming data visualization, active monitoring, streaming charts |
| Primary Colors | Alert colors: critical (red #FF0000), warning (orange #FFA500), normal (green #22C55E), updating (blue animation) |
| Secondary Colors | Status indicator colors, chart line colors varying by metric, streaming data highlight colors |
| Effects | Real-time chart animations, alert pulse/glow, status indicator blink animation, smooth data stream updates, loading effect |
| Best For | System monitoring dashboards, DevOps dashboards, real-time analytics, stock market dashboards, live event tracking |
| Do Not Use For | Historical analysis, long-term trend reports, archived data dashboards |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Good (real-time load) |
| Accessibility | ✓ WCAG AA |
| Mobile | ◐ Medium |
| Conversion | ✗ Not applicable |
| Complexity | Medium |
| CSS Keywords | animation: pulse for live, WebSocket for streaming, position: fixed for alerts, status-dot with animation, chart real-time updates, notification toast, connection indicator |
| Design Tokens | --pulse-animation: pulse 2s infinite, --alert-z-index: 1000, --live-indicator: #22C55E, --critical-color: #DC2626, --update-interval: 5s, --toast-duration: 5s |

---

### Style 32: Drill-Down Analytics

| Field | Value |
|-------|-------|
| Type | BI/Analytics |
| Keywords | Hierarchical data exploration, expandable sections, interactive drill-down paths, summary-to-detail flow, context preservation |
| Primary Colors | Primary brand, breadcrumb colors, drill-level indicator colors, hierarchy depth colors |
| Secondary Colors | Drill-down path indicator colors, level-specific colors, highlight colors for selected level, transition colors |
| Effects | Drill-down expand animations, breadcrumb click transitions, smooth detail reveal, level change smooth, data reload animation |
| Best For | Sales analytics, product analytics, funnel analysis, multi-dimensional data exploration, business intelligence |
| Do Not Use For | Simple linear data, single-metric dashboards, streaming real-time dashboards |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Good |
| Accessibility | ✓ WCAG AA |
| Mobile | ◐ Medium |
| Conversion | ✗ Not applicable |
| Complexity | Medium |
| CSS Keywords | breadcrumb nav with separators, details/summary for expand, transition for drill animation, position: sticky breadcrumb, nested grid layouts, smooth scroll to detail |
| Design Tokens | --breadcrumb-separator: /, --expand-duration: 300ms, --level-indent: 24px, --back-button-size: 40px, --context-bar-height: 48px, --drill-transition: 300ms ease |

---

### Style 33: Comparative Analysis Dashboard

| Field | Value |
|-------|-------|
| Type | BI/Analytics |
| Keywords | Side-by-side comparisons, period-over-period metrics, A/B test results, regional comparisons, performance benchmarks |
| Primary Colors | Comparison colors: primary (blue), comparison (orange/purple), delta indicator (green/red) |
| Secondary Colors | Winning metric color (green), losing metric color (red), neutral comparison (grey), benchmark colors |
| Effects | Comparison bar animations (grow to value), delta indicator animations (direction arrows), highlight on compare |
| Best For | Period-over-period reporting, A/B test dashboards, market comparison, competitive analysis, regional performance |
| Do Not Use For | Single metric dashboards, future projections (use forecasting), real-time only (no historical) |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ◐ Medium |
| Conversion | ✗ Not applicable |
| Complexity | Medium |
| CSS Keywords | display: flex for side-by-side, gap for comparison spacing, color coding (green up, red down), arrow indicators, diff highlighting, comparison table zebra striping |
| Design Tokens | --positive-color: #22C55E, --negative-color: #EF4444, --neutral-color: #6B7280, --comparison-gap: 2rem, --arrow-size: 16px, --badge-padding: 4px 8px |

---

### Style 34: Predictive Analytics

| Field | Value |
|-------|-------|
| Type | BI/Analytics |
| Keywords | Forecast lines, confidence intervals, trend projections, scenario modeling, AI-driven insights, anomaly detection visualization |
| Primary Colors | Forecast line color (distinct from actual), confidence interval shading, anomaly highlight (red alert), trend colors |
| Secondary Colors | High confidence (dark color), low confidence (light color), anomaly colors (red/orange), normal trend (green/blue) |
| Effects | Forecast line animation on draw, confidence band fade-in, anomaly pulse alert, smoothing function animations |
| Best For | Forecasting dashboards, anomaly detection systems, trend prediction dashboards, AI-powered analytics, budget planning |
| Do Not Use For | Historical-only dashboards, simple reporting, real-time operational dashboards |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Good (computation) |
| Accessibility | ✓ WCAG AA |
| Mobile | ◐ Medium |
| Conversion | ✗ Not applicable |
| Complexity | Medium |
| CSS Keywords | stroke-dasharray for forecast lines, fill-opacity for confidence bands, anomaly markers (circles), tooltip for predictions, toggle switches for scenarios, gradient for probability |
| Design Tokens | --forecast-dash: 5 5, --confidence-opacity: 0.2, --anomaly-color: #F59E0B, --prediction-color: #8B5CF6, --scenario-toggle-width: 48px, --ai-accent: #6366F1 |

---

### Style 35: User Behavior Analytics

| Field | Value |
|-------|-------|
| Type | BI/Analytics |
| Keywords | Funnel visualization, user flow diagrams, conversion tracking, engagement metrics, user journey mapping, cohort analysis |
| Primary Colors | Funnel stage colors: high engagement (green), drop-off (red), conversion (blue), user flow arrows (grey) |
| Secondary Colors | Stage completion colors (success), abandonment colors (warning), engagement levels (gradient), cohort colors |
| Effects | Funnel animation (fill-down), flow diagram animations (connection draw), conversion pulse, engagement bar fill |
| Best For | Conversion funnel analysis, user journey tracking, engagement analytics, cohort analysis, retention tracking |
| Do Not Use For | Real-time operational metrics, technical system monitoring, financial transactions |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Good |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ Good |
| Conversion | ✗ Not applicable |
| Complexity | Medium |
| CSS Keywords | SVG funnel with gradients, Sankey diagram library, percentage labels, cohort grid cells, retention chart (line/area), click heatmap overlay, session timeline |
| Design Tokens | --funnel-width: 100%, --stage-colors: gradient, --flow-opacity: 0.6, --cohort-cell-size: 40px, --retention-line-color: #3B82F6, --engagement-scale: 5 levels |

---

### Style 36: Financial Dashboard

| Field | Value |
|-------|-------|
| Type | BI/Analytics |
| Keywords | Revenue metrics, profit/loss visualization, budget tracking, financial ratios, portfolio performance, cash flow, audit trail |
| Primary Colors | Financial colors: profit (green #22C55E), loss (red #EF4444), neutral (grey), trust (dark blue #003366) |
| Secondary Colors | Revenue highlight (green), expenses (red), budget variance (orange/red), balance (grey), accuracy (blue) |
| Effects | Number animations (count-up), trend direction indicators, percentage change animations, profit/loss color transitions |
| Best For | Financial reporting, accounting dashboards, portfolio tracking, budget monitoring, banking analytics |
| Do Not Use For | Simple business dashboards, entertainment/social metrics, non-financial data |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✗ Low |
| Conversion | ✗ Not applicable |
| Complexity | Medium |
| CSS Keywords | number formatting (Intl.NumberFormat), waterfall chart (positive/negative bars), variance coloring, table with totals row, sparkline for trends, sticky column headers |
| Design Tokens | --currency-symbol: $, --decimal-places: 2, --profit-color: #22C55E, --loss-color: #EF4444, --variance-threshold: 10%, --table-header-bg: #F3F4F6 |

---

### Style 37: Sales Intelligence Dashboard

| Field | Value |
|-------|-------|
| Type | BI/Analytics |
| Keywords | Deal pipeline, sales metrics, territory performance, sales rep leaderboard, win-loss analysis, quota tracking, forecast accuracy |
| Primary Colors | Sales colors: won (green), lost (red), in-progress (blue), blocked (orange), quota met (gold), quota missed (grey) |
| Secondary Colors | Pipeline stage colors, rep performance colors, quota achievement colors, forecast accuracy colors |
| Effects | Deal movement animations, metric updates, leaderboard ranking changes, gauge needle movements, status change highlights |
| Best For | CRM dashboards, sales management, opportunity tracking, performance management, quota planning |
| Do Not Use For | Marketing analytics, customer support metrics, HR dashboards |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Good |
| Accessibility | ✓ WCAG AA |
| Mobile | ◐ Medium |
| Conversion | ✗ Not applicable |
| Complexity | Medium |
| CSS Keywords | kanban columns (flex), gauge chart (SVG arc), leaderboard ranking styles, map integration (Mapbox/Google), timeline vertical, deal card with status border |
| Design Tokens | --pipeline-colors: stage gradient, --gauge-track: #E5E7EB, --gauge-fill: primary, --rank-1-color: #FFD700, --rank-2-color: #C0C0C0, --rank-3-color: #CD7F32 |

---

### Style 38: Neubrutalism

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Bold borders, black outlines, primary colors, thick shadows, no gradients, flat colors, 45° shadows, playful, Gen Z |
| Primary Colors | #FFEB3B (Yellow), #FF5252 (Red), #2196F3 (Blue), #000000 (Black borders) |
| Secondary Colors | Limited accent colors, high contrast combinations, no gradients allowed |
| Effects | box-shadow: 4px 4px 0 #000, border: 3px solid #000, no gradients, sharp corners (0px), bold typography |
| Best For | Gen Z brands, startups, creative agencies, Figma-style apps, Notion-style interfaces, tech blogs |
| Do Not Use For | Luxury brands, finance, healthcare, conservative industries (too playful) |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | border: 3px solid black, box-shadow: 5px 5px 0px black, colors: #FFDB58 #FF6B6B #4ECDC4, font-weight: 700, no gradients |
| Design Tokens | --border-width: 3px, --shadow-offset: 4px, --shadow-color: #000, --colors: high saturation, --font: bold sans |

---

### Style 39: Bento Box Grid

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Modular cards, asymmetric grid, varied sizes, Apple-style, dashboard tiles, negative space, clean hierarchy, cards |
| Primary Colors | Neutral base + brand accent, #FFFFFF, #F5F5F5, brand primary |
| Secondary Colors | Subtle gradients, shadow variations, accent highlights for interactive cards |
| Effects | grid-template with varied spans, rounded-xl (16px), subtle shadows, hover scale (1.02), smooth transitions |
| Best For | Dashboards, product pages, portfolios, Apple-style marketing, feature showcases, SaaS |
| Do Not Use For | Dense data tables, text-heavy content, real-time monitoring |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | display: grid, grid-template-columns: repeat(4, 1fr), grid-auto-rows: 200px, gap: 16px, border-radius: 24px, background: #FFFFFF, box-shadow: 0 4px 6px rgba(0,0,0,0.05) |
| Design Tokens | --grid-gap: 16px, --card-radius: 24px, --card-bg: #FFFFFF, --page-bg: #F5F5F7, --shadow: 0 4px 6px rgba(0,0,0,0.05), --hover-scale: 1.02 |

---

### Style 40: Y2K Aesthetic

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Neon pink, chrome, metallic, bubblegum, iridescent, glossy, retro-futurism, 2000s, futuristic nostalgia |
| Primary Colors | #FF69B4 (Hot Pink), #00FFFF (Cyan), #C0C0C0 (Silver), #9400D3 (Purple) |
| Secondary Colors | Metallic gradients, glossy overlays, iridescent effects, chrome textures |
| Effects | linear-gradient metallic, glossy buttons, 3D chrome effects, glow animations, bubble shapes |
| Best For | Fashion brands, music platforms, Gen Z brands, nostalgia marketing, entertainment, youth-focused |
| Do Not Use For | B2B enterprise, healthcare, finance, conservative industries, elderly users |
| Light Mode | ✓ Full |
| Dark Mode | ◐ Partial |
| Performance | ⚠ Good |
| Accessibility | ⚠ Check contrast |
| Mobile | ✓ Good |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | background: linear-gradient(135deg, #FF69B4, #00FFFF), filter: drop-shadow for glow, border-radius: 50% for bubbles, metallic gradients (silver/chrome), text-shadow: neon glow, ::before for sparkles |
| Design Tokens | --neon-pink: #FF69B4, --neon-cyan: #00FFFF, --chrome-silver: #C0C0C0, --glossy-gradient: linear-gradient(180deg, white 0%, transparent 50%), --glow-blur: 10px |

---

### Style 41: Cyberpunk UI

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Neon, dark mode, terminal, HUD, sci-fi, glitch, dystopian, futuristic, matrix, tech noir |
| Primary Colors | #00FF00 (Matrix Green), #FF00FF (Magenta), #00FFFF (Cyan), #0D0D0D (Dark) |
| Secondary Colors | Neon gradients, scanline overlays, glitch colors, terminal green accents |
| Effects | Neon glow (text-shadow), glitch animations (skew/offset), scanlines (::before overlay), terminal fonts |
| Best For | Gaming platforms, tech products, crypto apps, sci-fi applications, developer tools, entertainment |
| Do Not Use For | Corporate enterprise, healthcare, family apps, conservative brands, elderly users |
| Light Mode | ✗ No |
| Dark Mode | ✓ Only |
| Performance | ⚠ Moderate |
| Accessibility | ⚠ Limited (dark+neon) |
| Mobile | ◐ Medium |
| Conversion | ◐ Medium |
| Complexity | Medium |
| CSS Keywords | background: #0D0D0D, color: #00FF00 or #FF00FF, font-family: monospace, text-shadow: 0 0 10px neon, animation: glitch (transform skew), ::before scanlines (repeating-linear-gradient) |
| Design Tokens | --bg-dark: #0D0D0D, --neon-green: #00FF00, --neon-magenta: #FF00FF, --neon-cyan: #00FFFF, --scanline-opacity: 0.1, --glitch-duration: 0.3s |

---

### Style 42: Organic Biophilic

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Nature, organic shapes, green, sustainable, rounded, flowing, wellness, earthy, natural textures |
| Primary Colors | #228B22 (Forest Green), #8B4513 (Earth Brown), #87CEEB (Sky Blue), #F5F5DC (Beige) |
| Secondary Colors | Natural gradients, earth tones, sky blues, organic textures, wood/stone colors |
| Effects | Rounded corners (16-24px), organic curves (border-radius variations), natural shadows, flowing SVG shapes |
| Best For | Wellness apps, sustainability brands, eco products, health apps, meditation, organic food brands |
| Do Not Use For | Tech-focused products, gaming, industrial, urban brands |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | border-radius: 16-24px (varied), background: earth tones, SVG organic shapes (blob), box-shadow: natural soft, color: #228B22 #8B4513 #87CEEB, texture overlays (subtle) |
| Design Tokens | --forest-green: #228B22, --earth-brown: #8B4513, --sky-blue: #87CEEB, --cream-bg: #F5F5DC, --organic-radius: 24px, --shadow-soft: 0 8px 32px rgba(0,0,0,0.08) |

---

### Style 43: AI-Native UI

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Chatbot, conversational, voice, assistant, agentic, ambient, minimal chrome, streaming text, AI interactions |
| Primary Colors | Neutral + single accent, #6366F1 (AI Purple), #10B981 (Success), #F5F5F5 (Background) |
| Secondary Colors | Status indicators, streaming highlights, context card colors, subtle accent variations |
| Effects | Typing indicators (3-dot pulse), streaming text animations, pulse animations, context cards, smooth reveals |
| Best For | AI products, chatbots, voice assistants, copilots, AI-powered tools, conversational interfaces |
| Do Not Use For | Traditional forms, data-heavy dashboards, print-first content |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | chat bubble layout (flex-direction: column), typing animation (3 dots pulse), streaming text (overflow: hidden + animation), input: sticky bottom, context cards (border-left accent), minimal borders |
| Design Tokens | --ai-accent: #6366F1, --user-bubble-bg: #E0E7FF, --ai-bubble-bg: #F9FAFB, --input-height: 48px, --typing-dot-size: 8px, --message-gap: 16px |

---

### Style 44: Memphis Design

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | 80s, geometric, playful, postmodern, shapes, patterns, squiggles, triangles, neon, abstract, bold |
| Primary Colors | #FF71CE (Hot Pink), #FFCE5C (Yellow), #86CCCA (Teal), #6A7BB4 (Blue Purple) |
| Secondary Colors | Complementary geometric colors, pattern fills, contrasting accent shapes |
| Effects | transform: rotate(), clip-path: polygon(), mix-blend-mode, repeating patterns, bold shapes |
| Best For | Creative agencies, music sites, youth brands, event promotion, artistic portfolios, entertainment |
| Do Not Use For | Corporate finance, healthcare, legal, elderly users, conservative brands |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ⚠ Check contrast |
| Mobile | ✓ Good |
| Conversion | ◐ Medium |
| Complexity | Medium |
| CSS Keywords | clip-path: polygon() for shapes, background: repeating patterns, transform: rotate() for tilted elements, mix-blend-mode for overlays, border: dashed/dotted patterns, bold sans-serif |
| Design Tokens | --memphis-pink: #FF71CE, --memphis-yellow: #FFCE5C, --memphis-teal: #86CCCA, --memphis-purple: #6A7BB4, --pattern-size: 20px, --shape-rotation: 15deg |

---

### Style 45: Vaporwave

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Synthwave, retro-futuristic, 80s-90s, neon, glitch, nostalgic, sunset gradient, dreamy, aesthetic |
| Primary Colors | #FF71CE (Pink), #01CDFE (Cyan), #05FFA1 (Mint), #B967FF (Purple) |
| Secondary Colors | Sunset gradients, glitch overlays, VHS effects, neon accents, pastel variations |
| Effects | text-shadow glow, linear-gradient, filter: hue-rotate(), glitch animations, retro scan lines |
| Best For | Music platforms, gaming, creative portfolios, tech startups, entertainment, artistic projects |
| Do Not Use For | Business apps, e-commerce, education, healthcare, enterprise software |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Dark focused |
| Performance | ⚠ Moderate |
| Accessibility | ⚠ Poor (motion) |
| Mobile | ◐ Medium |
| Conversion | ◐ Medium |
| Complexity | Medium |
| CSS Keywords | background: linear-gradient(180deg, #FF71CE, #01CDFE, #B967FF), filter: hue-rotate(), text-shadow: neon glow, retro grid (perspective + linear-gradient), VHS scanlines |
| Design Tokens | --vapor-pink: #FF71CE, --vapor-cyan: #01CDFE, --vapor-mint: #05FFA1, --vapor-purple: #B967FF, --grid-color: rgba(255,255,255,0.1), --glow-intensity: 15px |

---

### Style 46: Dimensional Layering

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Depth, overlapping, z-index, layers, 3D, shadows, elevation, floating, cards, spatial hierarchy |
| Primary Colors | Neutral base (#FFFFFF, #F5F5F5, #E0E0E0) + brand accent for elevated elements |
| Secondary Colors | Shadow variations (sm/md/lg/xl), elevation colors, highlight colors for top layers |
| Effects | z-index stacking, box-shadow elevation (4 levels), transform: translateZ(), backdrop-filter, parallax |
| Best For | Dashboards, card layouts, modals, navigation, product showcases, SaaS interfaces |
| Do Not Use For | Print-style layouts, simple blogs, low-end devices, flat design requirements |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Good |
| Accessibility | ⚠ Moderate (SR issues) |
| Mobile | ✓ Good |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | z-index: 1-4 levels, box-shadow: elevation scale (sm/md/lg/xl), transform: translateZ(), backdrop-filter: blur(), position: relative for stacking, parallax on scroll |
| Design Tokens | --elevation-1: 0 1px 3px rgba(0,0,0,0.1), --elevation-2: 0 4px 6px rgba(0,0,0,0.1), --elevation-3: 0 10px 20px rgba(0,0,0,0.1), --elevation-4: 0 20px 40px rgba(0,0,0,0.15), --blur-amount: 8px |

---

### Style 47: Exaggerated Minimalism

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Bold minimalism, oversized typography, high contrast, negative space, loud minimal, statement design |
| Primary Colors | #000000 (Black), #FFFFFF (White), single vibrant accent only |
| Secondary Colors | Minimal - single accent color, no secondary colors, extreme restraint |
| Effects | font-size: clamp(3rem 10vw 12rem), font-weight: 900, letter-spacing: -0.05em, massive whitespace |
| Best For | Fashion, architecture, portfolios, agency landing pages, luxury brands, editorial |
| Do Not Use For | E-commerce catalogs, dashboards, forms, data-heavy, elderly users, complex apps |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | font-size: clamp(3rem, 10vw, 12rem), font-weight: 900, letter-spacing: -0.05em, color: #000 or #FFF, padding: 8rem+, single accent, no decorations |
| Design Tokens | --type-giant: clamp(3rem, 10vw, 12rem), --type-weight: 900, --spacing-huge: 8rem, --color-primary: #000000, --color-bg: #FFFFFF, --accent: single color only |

---

### Style 48: Kinetic Typography

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Motion text, animated type, moving letters, dynamic, typing effect, morphing, scroll-triggered text |
| Primary Colors | Flexible - high contrast recommended, bold colors for emphasis, animation-friendly palette |
| Secondary Colors | Accent colors for emphasis, transition colors, gradient text fills |
| Effects | @keyframes text animation, typing effect, background-clip: text, GSAP ScrollTrigger, split text |
| Best For | Hero sections, marketing sites, video platforms, storytelling, creative portfolios, landing pages |
| Do Not Use For | Long-form content, accessibility-critical, data interfaces, forms, elderly users |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Moderate |
| Accessibility | ❌ Poor (motion) |
| Mobile | ✓ Good |
| Conversion | ✓ Very High |
| Complexity | High |
| CSS Keywords | @keyframes for text animation, background-clip: text, GSAP SplitText, typing effect (steps()), transform on letters, scroll-triggered (Intersection Observer), variable fonts for morphing |
| Design Tokens | --text-animation-duration: 1s, --letter-delay: 0.05s, --typing-speed: 100ms, --gradient-text: linear-gradient(90deg, #color1, #color2), --morph-duration: 0.5s |

---

### Style 49: Parallax Storytelling

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Scroll-driven, narrative, layered scrolling, immersive, progressive disclosure, cinematic, scroll-triggered |
| Primary Colors | Story-dependent, often gradients and natural colors, section-specific palettes |
| Secondary Colors | Section transition colors, depth layer colors, narrative mood colors |
| Effects | transform: translateY(scroll), position: fixed/sticky, perspective: 1px, scroll-triggered animations |
| Best For | Brand storytelling, product launches, case studies, portfolios, annual reports, marketing campaigns |
| Do Not Use For | E-commerce, dashboards, mobile-first, SEO-critical, accessibility-required |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ❌ Poor |
| Accessibility | ❌ Poor (motion) |
| Mobile | ✗ Low |
| Conversion | ✓ High |
| Complexity | High |
| CSS Keywords | position: fixed/sticky, transform: translateY(calc()), perspective: 1px, z-index layering, scroll-snap-type, Intersection Observer for triggers, will-change: transform |
| Design Tokens | --parallax-speed-bg: 0.3, --parallax-speed-mid: 0.6, --parallax-speed-fg: 1, --section-height: 100vh, --transition-duration: 600ms, --perspective: 1px |

---

### Style 50: Swiss Modernism 2.0

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Grid system, Helvetica, modular, asymmetric, international style, rational, clean, mathematical spacing |
| Primary Colors | #000000, #FFFFFF, #F5F5F5, single vibrant accent only |
| Secondary Colors | Minimal secondary, accent for emphasis only, no gradients |
| Effects | display: grid, grid-template-columns: repeat(12 1fr), gap: 1rem, mathematical ratios, clear hierarchy |
| Best For | Corporate sites, architecture, editorial, SaaS, museums, professional services, documentation |
| Do Not Use For | Playful brands, children's sites, entertainment, gaming, emotional storytelling |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | display: grid, grid-template-columns: repeat(12, 1fr), gap: 1rem (8px base unit), font-family: Inter/Helvetica, font-weight: 400-700, color: #000/#FFF, single accent |
| Design Tokens | --grid-columns: 12, --grid-gap: 1rem, --base-unit: 8px, --font-primary: Inter, --color-text: #000000, --color-bg: #FFFFFF, --accent: single vibrant |

---

### Style 51: HUD / Sci-Fi FUI

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Futuristic, technical, wireframe, neon, data, transparency, iron man, sci-fi, interface |
| Primary Colors | Neon Cyan #00FFFF, Holographic Blue #0080FF, Alert Red #FF0000 |
| Secondary Colors | Transparent Black, Grid Lines #333333 |
| Effects | Glow effects, scanning animations, ticker text, blinking markers, fine line drawing |
| Best For | Sci-fi games, space tech, cybersecurity, movie props, immersive dashboards |
| Do Not Use For | Standard corporate, reading heavy content, accessible public services |
| Light Mode | ✓ Low |
| Dark Mode | ✓ Full |
| Performance | ⚠ Moderate (renders) |
| Accessibility | ⚠ Poor (thin lines) |
| Mobile | ◐ Medium |
| Conversion | ✗ Low |
| Complexity | High |
| CSS Keywords | border: 1px solid rgba(0,255,255,0.5), color: #00FFFF, background: transparent or rgba(0,0,0,0.8), font-family: monospace, text-shadow: 0 0 5px cyan |
| Design Tokens | --hud-color: #00FFFF, --bg-color: rgba(0,10,20,0.9), --line-width: 1px, --glow: 0 0 5px, --font: monospace |

---

### Style 52: Pixel Art

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Retro, 8-bit, 16-bit, gaming, blocky, nostalgic, pixelated, arcade |
| Primary Colors | Primary colors (NES Palette), brights, limited palette |
| Secondary Colors | Black outlines, shading via dithering or block colors |
| Effects | Frame-by-frame sprite animation, blinking cursor, instant transitions, marquee text |
| Best For | Indie games, retro tools, creative portfolios, nostalgia marketing, Web3/NFT |
| Do Not Use For | Professional corporate, modern SaaS, high-res photography sites |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ Good (if contrast ok) |
| Mobile | ✓ High |
| Conversion | ◐ Medium |
| Complexity | Medium |
| CSS Keywords | font-family: 'Press Start 2P', image-rendering: pixelated, box-shadow: 4px 0 0 #000 (pixel border), no anti-aliasing |
| Design Tokens | --pixel-size: 4px, --font: pixel font, --border-style: pixel-shadow, --anti-alias: none |

---

### Style 53: Bento Grids

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Apple-style, modular, cards, organized, clean, hierarchy, grid, rounded, soft |
| Primary Colors | Off-white #F5F5F7, Clean White #FFFFFF, Text #1D1D1F |
| Secondary Colors | Subtle accents, soft shadows, blurred backdrops |
| Effects | Hover scale (1.02), soft shadow expansion, smooth layout shifts, content reveal |
| Best For | Product features, dashboards, personal sites, marketing summaries, galleries |
| Do Not Use For | Long-form reading, data tables, complex forms |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | display: grid, grid-template-columns: repeat(auto-fit, minmax(...)), gap: 1rem, border-radius: 20px, background: #FFF, box-shadow: subtle |
| Design Tokens | --grid-gap: 20px, --card-radius: 24px, --card-bg: #FFFFFF, --page-bg: #F5F5F7, --shadow: soft |

---

### Style 55: Spatial UI (VisionOS)

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Glass, depth, immersion, spatial, translucent, gaze, gesture, apple, vision-pro |
| Primary Colors | Frosted Glass #FFFFFF (15-30% opacity), System White |
| Secondary Colors | Vibrant system colors for active states, deep shadows for depth |
| Effects | Parallax depth, dynamic lighting response, gaze-hover effects, smooth scale on focus |
| Best For | Spatial computing apps, VR/AR interfaces, immersive media, futuristic dashboards |
| Do Not Use For | Text-heavy documents, high-contrast requirements, non-3D capable devices |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Moderate (blur cost) |
| Accessibility | ⚠ Contrast risks |
| Mobile | ✓ High (if adapted) |
| Conversion | ✓ High |
| Complexity | High |
| CSS Keywords | backdrop-filter: blur(40px) saturate(180%), background: rgba(255,255,255,0.2), border-radius: 24px, box-shadow: 0 8px 32px rgba(0,0,0,0.1), transform: scale on focus, depth via shadows |
| Design Tokens | --glass-bg: rgba(255,255,255,0.2), --glass-blur: 40px, --glass-saturate: 180%, --window-radius: 24px, --depth-shadow: 0 8px 32px rgba(0,0,0,0.1), --focus-scale: 1.02 |

---

### Style 56: E-Ink / Paper

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Paper-like, matte, high contrast, texture, reading, calm, slow tech, monochrome |
| Primary Colors | Off-White #FDFBF7, Paper White #F5F5F5, Ink Black #1A1A1A |
| Secondary Colors | Pencil Grey #4A4A4A, Highlighter Yellow #FFFF00 (accent) |
| Effects | No motion blur, distinct page turns, grain/noise texture, sharp transitions (no fade) |
| Best For | Reading apps, digital newspapers, minimal journals, distraction-free writing, slow-living brands |
| Do Not Use For | Gaming, video platforms, high-energy marketing, dark mode dependent apps |
| Light Mode | ✓ Full |
| Dark Mode | ✗ Low (inverted only) |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ High |
| Conversion | ✓ Medium |
| Complexity | Low |
| CSS Keywords | background: #FDFBF7 (paper white), color: #1A1A1A, transition: none, font-family: serif for reading, no gradients, border: 1px solid #E0E0E0, texture overlay (noise) |
| Design Tokens | --paper-bg: #FDFBF7, --ink-color: #1A1A1A, --pencil-grey: #4A4A4A, --border-color: #E0E0E0, --font-reading: Georgia, --transition: none |

---

### Style 57: Gen Z Chaos / Maximalism

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Chaos, clutter, stickers, raw, collage, mixed media, loud, internet culture, ironic |
| Primary Colors | Clashing Brights: #FF00FF, #00FF00, #FFFF00, #0000FF |
| Secondary Colors | Gradients, rainbow, glitch, noise, heavily saturated mix |
| Effects | Marquee scrolls, jitter, sticker layering, GIF overload, random placement, drag-and-drop |
| Best For | Gen Z lifestyle brands, music artists, creative portfolios, viral marketing, fashion |
| Do Not Use For | Corporate, government, healthcare, banking, serious tools |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Poor (heavy assets) |
| Accessibility | ❌ Poor |
| Mobile | ◐ Medium |
| Conversion | ✓ High (Viral) |
| Complexity | High |
| CSS Keywords | mix-blend-mode: multiply/screen, transform: rotate(random), animation: jitter, marquee text, position: absolute for scattered elements, filter: saturate(150%), z-index chaos |
| Design Tokens | --chaos-pink: #FF00FF, --chaos-green: #00FF00, --chaos-yellow: #FFFF00, --chaos-blue: #0000FF, --jitter-amount: 5deg, --saturate: 150% |

---

### Style 58: Biomimetic / Organic 2.0

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Nature-inspired, cellular, fluid, breathing, generative, algorithms, life-like |
| Primary Colors | Cellular Pink #FF9999, Chlorophyll Green #00FF41, Bioluminescent Blue |
| Secondary Colors | Deep Ocean #001E3C, Coral #FF7F50, Organic gradients |
| Effects | Breathing animations, fluid morphing, generative growth, physics-based movement |
| Best For | Sustainability tech, biotech, advanced health, meditation, generative art platforms |
| Do Not Use For | Standard SaaS, data grids, strict corporate, accounting |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Moderate |
| Accessibility | ✓ Good |
| Mobile | ✓ Good |
| Conversion | ✓ High |
| Complexity | High |
| CSS Keywords | SVG morphing (SMIL or GSAP), canvas for generative, animation: breathing (scale pulse), filter: blur for organic, clip-path for cellular, WebGL for advanced, physics libraries |
| Design Tokens | --cellular-pink: #FF9999, --chlorophyll: #00FF41, --bioluminescent: #00FFFF, --breathing-duration: 4s, --morph-ease: cubic-bezier(0.4, 0, 0.2, 1), --organic-blur: 20px |

---

### Style 59: Anti-Polish / Raw Aesthetic

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Hand-drawn, collage, scanned textures, unfinished, imperfect, authentic, human, sketch, raw marks, creative process |
| Primary Colors | Paper White #FAFAF8, Pencil Grey #4A4A4A, Marker Black #1A1A1A, Kraft Brown #C4A77D |
| Secondary Colors | Watercolor washes, pencil shading, ink splatters, tape textures, aged paper tones |
| Effects | No smooth transitions, hand-drawn animations, paper texture overlays, jitter effects, sketch reveal |
| Best For | Creative portfolios, artist sites, indie brands, handmade products, authentic storytelling, editorial |
| Do Not Use For | Corporate enterprise, fintech, healthcare, government, polished SaaS |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | background: url(paper-texture.png), filter: grayscale() contrast(), border: hand-drawn SVG, transform: rotate(small random), no smooth transitions, sketch-style fonts, opacity variations |
| Design Tokens | --paper-bg: #FAFAF8, --pencil-color: #4A4A4A, --marker-black: #1A1A1A, --kraft-brown: #C4A77D, --sketch-rotation: random(-3deg, 3deg), --texture-opacity: 0.3 |

---

### Style 60: Tactile Digital / Deformable UI

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Jelly buttons, chrome, clay, squishy, deformable, bouncy, physical, tactile feedback, press response |
| Primary Colors | Gradient metallics, Chrome Silver #C0C0C0, Jelly Pink #FF9ECD, Soft Blue #87CEEB |
| Secondary Colors | Glossy highlights, shadow depth, reflection effects, material-specific colors |
| Effects | Press deformation (scale + squish), bounce-back (cubic-bezier), material response, haptic-like feedback, spring physics |
| Best For | Modern mobile apps, playful brands, entertainment, gaming UI, consumer products, interactive demos |
| Do Not Use For | Enterprise software, data dashboards, accessibility-critical, professional tools |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Good |
| Accessibility | ⚠ Motion sensitive |
| Mobile | ✓ High |
| Conversion | ✓ Very High |
| Complexity | Medium |
| CSS Keywords | transform: scale(0.95) on active, animation: bounce (cubic-bezier(0.34, 1.56, 0.64, 1)), box-shadow: inset for press, filter: brightness on press, spring physics (react-spring/framer-motion) |
| Design Tokens | --press-scale: 0.95, --bounce-duration: 400ms, --spring-stiffness: 300, --spring-damping: 20, --material-glossy: linear-gradient(135deg, white 0%, transparent 60%), --depth-shadow: 0 10px 30px rgba(0,0,0,0.2) |

---

### Style 61: Nature Distilled

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Muted earthy, skin tones, wood, soil, sand, terracotta, warmth, organic materials, handmade warmth |
| Primary Colors | Terracotta #C67B5C, Sand Beige #D4C4A8, Warm Clay #B5651D, Soft Cream #F5F0E1 |
| Secondary Colors | Earth Brown #8B4513, Olive Green #6B7B3C, Warm Stone #9C8B7A, muted gradients |
| Effects | Subtle parallax, natural easing (ease-out), texture overlays, grain effects, soft shadows |
| Best For | Wellness brands, sustainable products, artisan goods, organic food, spa/beauty, home decor |
| Do Not Use For | Tech startups, gaming, nightlife, corporate finance, high-energy brands |
| Light Mode | ✓ Full |
| Dark Mode | ◐ Partial |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Low |
| CSS Keywords | background: warm earth tones, color: #C67B5C #D4C4A8 #6B7B3C, border-radius: organic (varied), box-shadow: soft natural, texture overlays (grain), font: humanist sans-serif |
| Design Tokens | --terracotta: #C67B5C, --sand-beige: #D4C4A8, --warm-clay: #B5651D, --soft-cream: #F5F0E1, --olive-green: #6B7B3C, --grain-opacity: 0.1 |

---

### Style 62: Interactive Cursor Design

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Custom cursor, cursor as tool, hover effects, cursor feedback, pointer transformation, cursor trail, magnetic cursor |
| Primary Colors | Brand-dependent, cursor accent color, high contrast for visibility |
| Secondary Colors | Trail colors, hover state colors, magnetic zone indicators, feedback colors |
| Effects | Cursor scale on hover, magnetic pull to elements, cursor morphing, trail effects, blend mode cursors, click feedback |
| Best For | Creative portfolios, interactive experiences, agency sites, product showcases, gaming, entertainment |
| Do Not Use For | Mobile-first (no cursor), accessibility-critical, data-heavy dashboards, forms |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Good |
| Accessibility | ⚠ Not for touch/SR |
| Mobile | ✗ No cursor |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | cursor: none (custom), position: fixed for cursor element, mix-blend-mode: difference, transform on hover targets, magnetic effect (JS position lerp), trail with opacity fade, scale on click |
| Design Tokens | --cursor-size: 20px, --cursor-hover-scale: 1.5, --magnetic-distance: 100px, --trail-length: 10, --trail-fade: 0.1, --blend-mode: difference |

---

### Style 63: Voice-First Multimodal

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Voice UI, multimodal, audio feedback, conversational, hands-free, ambient, contextual, speech recognition |
| Primary Colors | Calm neutrals: Soft White #FAFAFA, Muted Blue #6B8FAF, Gentle Purple #9B8FBB |
| Secondary Colors | Audio waveform colors, status indicators (listening/processing/speaking), success/error tones |
| Effects | Voice waveform visualization, listening pulse, processing spinner, speak animation, smooth transitions |
| Best For | Voice assistants, accessibility apps, hands-free tools, smart home, automotive UI, cooking apps |
| Do Not Use For | Visual-heavy content, data entry, complex forms, noisy environments |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ Excellent |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | Web Speech API integration, canvas for waveform, animation: pulse for listening, status indicators (color change), audio visualization (Web Audio API), minimal chrome, large touch targets |
| Design Tokens | --listening-color: #6B8FAF, --speaking-color: #22C55E, --waveform-height: 60px, --pulse-duration: 1.5s, --indicator-size: 24px, --voice-accent: #9B8FBB |

---

### Style 64: 3D Product Preview

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | 360 product view, rotatable, zoomable, touch-to-spin, AR preview, product configurator, interactive 3D model |
| Primary Colors | Product-dependent, neutral backgrounds: Soft Grey #E8E8E8, Pure White #FFFFFF |
| Secondary Colors | Shadow gradients, reflection planes, environment lighting colors, accent highlights |
| Effects | Drag-to-rotate, pinch-to-zoom, spin animation, AR placement, material switching, smooth orbit controls |
| Best For | E-commerce, furniture, fashion, automotive, electronics, jewelry, product configurators |
| Do Not Use For | Content-heavy sites, blogs, dashboards, low-bandwidth, accessibility-critical |
| Light Mode | ◐ Partial |
| Dark Mode | ◐ Partial |
| Performance | ❌ Poor (3D rendering) |
| Accessibility | ⚠ Alt content needed |
| Mobile | ◐ Medium |
| Conversion | ✓ Very High |
| Complexity | High |
| CSS Keywords | Three.js or model-viewer, OrbitControls, touch events for rotation, WebXR for AR, canvas with WebGL, loading placeholder, LOD for performance, environment lighting |
| Design Tokens | --canvas-bg: #F5F5F5, --hotspot-color: #3B82F6, --loading-spinner: primary, --rotation-speed: 0.5, --zoom-min: 0.5, --zoom-max: 2 |

---

### Style 65: Gradient Mesh / Aurora Evolved

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Complex gradients, mesh gradients, multi-color blend, aurora effect, flowing colors, iridescent, holographic, prismatic |
| Primary Colors | Multi-stop gradients: Cyan #00FFFF, Magenta #FF00FF, Yellow #FFFF00, Blue #0066FF, Green #00FF66 |
| Secondary Colors | Complementary mesh points, smooth color transitions, iridescent overlays, chromatic shifts |
| Effects | CSS mesh-gradient (experimental), SVG gradients, canvas gradients, smooth color morphing, flowing animation |
| Best For | Hero sections, backgrounds, creative brands, music platforms, fashion, lifestyle, premium products |
| Do Not Use For | Data interfaces, text-heavy content, accessibility-critical, conservative brands |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚠ Good |
| Accessibility | ⚠ Text contrast |
| Mobile | ✓ Good |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | background: conic-gradient or mesh (SVG), animation: gradient flow (background-position), filter: hue-rotate for shimmer, mix-blend-mode: screen, canvas for complex mesh, multiple gradient layers |
| Design Tokens | --mesh-color-1: #00FFFF, --mesh-color-2: #FF00FF, --mesh-color-3: #FFFF00, --mesh-color-4: #00FF66, --flow-duration: 10s, --shimmer-intensity: 0.3 |

---

### Style 66: Editorial Grid / Magazine

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Magazine layout, asymmetric grid, editorial typography, pull quotes, drop caps, column layout, print-inspired |
| Primary Colors | High contrast: Black #000000, White #FFFFFF, accent brand color |
| Secondary Colors | Muted supporting, pull quote highlights, byline colors, section dividers |
| Effects | Smooth scroll, reveal on scroll, parallax images, text animations, page-flip transitions |
| Best For | News sites, blogs, magazines, editorial content, long-form articles, journalism, publishing |
| Do Not Use For | Dashboards, apps, e-commerce catalogs, real-time data, short-form content |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Full |
| Performance | ⚡ Excellent |
| Accessibility | ✓ WCAG AAA |
| Mobile | ✓ High |
| Conversion | ✓ Medium |
| Complexity | Low |
| CSS Keywords | display: grid with named areas, column-count for text, ::first-letter for drop caps, blockquote styling, figure/figcaption, gap variations, font: serif for body, variable widths |
| Design Tokens | --grid-cols: asymmetric, --body-font: Georgia/Merriweather, --heading-font: bold sans, --drop-cap-size: 4em, --pull-quote-size: 1.5em, --column-gap: 2rem |

---

### Style 67: Chromatic Aberration / RGB Split

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | RGB split, color fringing, glitch, retro tech, VHS, analog error, distortion, lens effect |
| Primary Colors | Offset RGB: Red #FF0000, Green #00FF00, Blue #0000FF, Black #000000 |
| Secondary Colors | Neon accents, scan lines, noise overlays, error colors |
| Effects | RGB offset animation, glitch timing, scan line movement, noise flicker, distortion on hover |
| Best For | Music platforms, gaming, tech brands, creative portfolios, nightlife, entertainment, video platforms |
| Do Not Use For | Corporate, healthcare, finance, accessibility-critical, elderly users |
| Light Mode | ✓ Full |
| Dark Mode | ✓ Dark preferred |
| Performance | ⚠ Good |
| Accessibility | ⚠ Can cause strain |
| Mobile | ◐ Medium |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | filter: drop-shadow with offset colors, text-shadow: RGB offset (-2px 0 red, 2px 0 cyan), animation: glitch (random offset), ::before for scanlines, mix-blend-mode: screen for overlays |
| Design Tokens | --rgb-offset: 2px, --red-channel: #FF0000, --green-channel: #00FF00, --blue-channel: #0000FF, --glitch-duration: 0.3s, --scanline-opacity: 0.1 |

---

### Style 68: Vintage Analog / Retro Film

| Field | Value |
|-------|-------|
| Type | General |
| Keywords | Film grain, VHS, cassette tape, polaroid, analog warmth, faded colors, light leaks, vintage photography |
| Primary Colors | Faded Cream #F5E6C8, Warm Sepia #D4A574, Muted Teal #4A7B7C, Soft Pink #E8B4B8 |
| Secondary Colors | Grain overlays, light leak oranges, shadow blues, vintage paper tones, desaturated accents |
| Effects | Film grain overlay, VHS tracking effect, polaroid shake, fade-in transitions, light leak animations |
| Best For | Photography portfolios, music/vinyl brands, vintage fashion, nostalgia marketing, film industry, cafes |
| Do Not Use For | Modern tech, SaaS, healthcare, children's apps, corporate enterprise |
| Light Mode | ✓ Full |
| Dark Mode | ◐ Partial |
| Performance | ⚡ Good |
| Accessibility | ✓ WCAG AA |
| Mobile | ✓ High |
| Conversion | ✓ High |
| Complexity | Medium |
| CSS Keywords | filter: sepia() contrast() saturate(0.8), background: noise texture overlay, animation: VHS tracking (transform skew), light leak gradient overlay, border for polaroid frame, grain via SVG filter |
| Design Tokens | --sepia-amount: 20%, --contrast: 1.1, --saturation: 0.8, --grain-opacity: 0.15, --light-leak-color: rgba(255,200,100,0.2), --warm-tint: #F5E6C8 |

---

