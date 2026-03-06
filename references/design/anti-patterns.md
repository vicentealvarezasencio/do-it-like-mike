# UX Anti-Patterns & Guidelines

> UX guidelines and anti-patterns organized by category for design compliance verification.
> Source: UI/UX Pro Max (converted to MIKE format).

---

## Navigation

### 1. Smooth Scroll (Web)

Anchor links should scroll smoothly to target section

| | Guidance |
|---|---------|
| **Do** | Use scroll-behavior: smooth on html element |
| **Don't** | Jump directly without transition |
| **Good** | `html { scroll-behavior: smooth; }` |
| **Bad** | `<a href='#section'> without CSS` |
| **Severity** | High |

### 2. Sticky Navigation (Web)

Fixed nav should not obscure content

| | Guidance |
|---|---------|
| **Do** | Add padding-top to body equal to nav height |
| **Don't** | Let nav overlap first section content |
| **Good** | `pt-20 (if nav is h-20)` |
| **Bad** | `No padding compensation` |
| **Severity** | Medium |

### 3. Active State (All)

Current page/section should be visually indicated

| | Guidance |
|---|---------|
| **Do** | Highlight active nav item with color/underline |
| **Don't** | No visual feedback on current location |
| **Good** | `text-primary border-b-2` |
| **Bad** | `All links same style` |
| **Severity** | Medium |

### 4. Back Button (Mobile)

Users expect back to work predictably

| | Guidance |
|---|---------|
| **Do** | Preserve navigation history properly |
| **Don't** | Break browser/app back button behavior |
| **Good** | `history.pushState()` |
| **Bad** | `location.replace()` |
| **Severity** | High |

### 5. Deep Linking (All)

URLs should reflect current state for sharing

| | Guidance |
|---|---------|
| **Do** | Update URL on state/view changes |
| **Don't** | Static URLs for dynamic content |
| **Good** | `Use query params or hash` |
| **Bad** | `Single URL for all states` |
| **Severity** | Medium |

### 6. Breadcrumbs (Web)

Show user location in site hierarchy

| | Guidance |
|---|---------|
| **Do** | Use for sites with 3+ levels of depth |
| **Don't** | Use for flat single-level sites |
| **Good** | `Home > Category > Product` |
| **Bad** | `Only on deep nested pages` |
| **Severity** | Low |

---

## Animation

### 7. Excessive Motion (All)

Too many animations cause distraction and motion sickness

| | Guidance |
|---|---------|
| **Do** | Animate 1-2 key elements per view maximum |
| **Don't** | Animate everything that moves |
| **Good** | `Single hero animation` |
| **Bad** | `animate-bounce on 5+ elements` |
| **Severity** | High |

### 8. Duration Timing (All)

Animations should feel responsive not sluggish

| | Guidance |
|---|---------|
| **Do** | Use 150-300ms for micro-interactions |
| **Don't** | Use animations longer than 500ms for UI |
| **Good** | `transition-all duration-200` |
| **Bad** | `duration-1000` |
| **Severity** | Medium |

### 9. Reduced Motion (All)

Respect user's motion preferences

| | Guidance |
|---|---------|
| **Do** | Check prefers-reduced-motion media query |
| **Don't** | Ignore accessibility motion settings |
| **Good** | `@media (prefers-reduced-motion: reduce)` |
| **Bad** | `No motion query check` |
| **Severity** | High |

### 10. Loading States (All)

Show feedback during async operations

| | Guidance |
|---|---------|
| **Do** | Use skeleton screens or spinners |
| **Don't** | Leave UI frozen with no feedback |
| **Good** | `animate-pulse skeleton` |
| **Bad** | `Blank screen while loading` |
| **Severity** | High |

### 11. Hover vs Tap (All)

Hover effects don't work on touch devices

| | Guidance |
|---|---------|
| **Do** | Use click/tap for primary interactions |
| **Don't** | Rely only on hover for important actions |
| **Good** | `onClick handler` |
| **Bad** | `onMouseEnter only` |
| **Severity** | High |

### 12. Continuous Animation (All)

Infinite animations are distracting

| | Guidance |
|---|---------|
| **Do** | Use for loading indicators only |
| **Don't** | Use for decorative elements |
| **Good** | `animate-spin on loader` |
| **Bad** | `animate-bounce on icons` |
| **Severity** | Medium |

### 13. Transform Performance (Web)

Some CSS properties trigger expensive repaints

| | Guidance |
|---|---------|
| **Do** | Use transform and opacity for animations |
| **Don't** | Animate width/height/top/left properties |
| **Good** | `transform: translateY()` |
| **Bad** | `top: 10px animation` |
| **Severity** | Medium |

### 14. Easing Functions (All)

Linear motion feels robotic

| | Guidance |
|---|---------|
| **Do** | Use ease-out for entering ease-in for exiting |
| **Don't** | Use linear for UI transitions |
| **Good** | `ease-out` |
| **Bad** | `linear` |
| **Severity** | Low |

---

## Layout

### 15. Z-Index Management (Web)

Stacking context conflicts cause hidden elements

| | Guidance |
|---|---------|
| **Do** | Define z-index scale system (10 20 30 50) |
| **Don't** | Use arbitrary large z-index values |
| **Good** | `z-10 z-20 z-50` |
| **Bad** | `z-[9999]` |
| **Severity** | High |

### 16. Overflow Hidden (Web)

Hidden overflow can clip important content

| | Guidance |
|---|---------|
| **Do** | Test all content fits within containers |
| **Don't** | Blindly apply overflow-hidden |
| **Good** | `overflow-auto with scroll` |
| **Bad** | `overflow-hidden truncating content` |
| **Severity** | Medium |

### 17. Fixed Positioning (Web)

Fixed elements can overlap or be inaccessible

| | Guidance |
|---|---------|
| **Do** | Account for safe areas and other fixed elements |
| **Don't** | Stack multiple fixed elements carelessly |
| **Good** | `Fixed nav + fixed bottom with gap` |
| **Bad** | `Multiple overlapping fixed elements` |
| **Severity** | Medium |

### 18. Stacking Context (Web)

New stacking contexts reset z-index

| | Guidance |
|---|---------|
| **Do** | Understand what creates new stacking context |
| **Don't** | Expect z-index to work across contexts |
| **Good** | `Parent with z-index isolates children` |
| **Bad** | `z-index: 9999 not working` |
| **Severity** | Medium |

### 19. Content Jumping (Web)

Layout shift when content loads is jarring

| | Guidance |
|---|---------|
| **Do** | Reserve space for async content |
| **Don't** | Let images/content push layout around |
| **Good** | `aspect-ratio or fixed height` |
| **Bad** | `No dimensions on images` |
| **Severity** | High |

### 20. Viewport Units (Web)

100vh can be problematic on mobile browsers

| | Guidance |
|---|---------|
| **Do** | Use dvh or account for mobile browser chrome |
| **Don't** | Use 100vh for full-screen mobile layouts |
| **Good** | `min-h-dvh or min-h-screen` |
| **Bad** | `h-screen on mobile` |
| **Severity** | Medium |

### 21. Container Width (Web)

Content too wide is hard to read

| | Guidance |
|---|---------|
| **Do** | Limit max-width for text content (65-75ch) |
| **Don't** | Let text span full viewport width |
| **Good** | `max-w-prose or max-w-3xl` |
| **Bad** | `Full width paragraphs` |
| **Severity** | Medium |

---

## Touch

### 22. Touch Target Size (Mobile)

Small buttons are hard to tap accurately

| | Guidance |
|---|---------|
| **Do** | Minimum 44x44px touch targets |
| **Don't** | Tiny clickable areas |
| **Good** | `min-h-[44px] min-w-[44px]` |
| **Bad** | `w-6 h-6 buttons` |
| **Severity** | High |

### 23. Touch Spacing (Mobile)

Adjacent touch targets need adequate spacing

| | Guidance |
|---|---------|
| **Do** | Minimum 8px gap between touch targets |
| **Don't** | Tightly packed clickable elements |
| **Good** | `gap-2 between buttons` |
| **Bad** | `gap-0 or gap-1` |
| **Severity** | Medium |

### 24. Gesture Conflicts (Mobile)

Custom gestures can conflict with system

| | Guidance |
|---|---------|
| **Do** | Avoid horizontal swipe on main content |
| **Don't** | Override system gestures |
| **Good** | `Vertical scroll primary` |
| **Bad** | `Horizontal swipe carousel only` |
| **Severity** | Medium |

### 25. Tap Delay (Mobile)

300ms tap delay feels laggy

| | Guidance |
|---|---------|
| **Do** | Use touch-action CSS or fastclick |
| **Don't** | Default mobile tap handling |
| **Good** | `touch-action: manipulation` |
| **Bad** | `No touch optimization` |
| **Severity** | Medium |

### 26. Pull to Refresh (Mobile)

Accidental refresh is frustrating

| | Guidance |
|---|---------|
| **Do** | Disable where not needed |
| **Don't** | Enable by default everywhere |
| **Good** | `overscroll-behavior: contain` |
| **Bad** | `Default overscroll` |
| **Severity** | Low |

### 27. Haptic Feedback (Mobile)

Tactile feedback improves interaction feel

| | Guidance |
|---|---------|
| **Do** | Use for confirmations and important actions |
| **Don't** | Overuse vibration feedback |
| **Good** | `navigator.vibrate(10)` |
| **Bad** | `Vibrate on every tap` |
| **Severity** | Low |

---

## Interaction

### 28. Focus States (All)

Keyboard users need visible focus indicators

| | Guidance |
|---|---------|
| **Do** | Use visible focus rings on interactive elements |
| **Don't** | Remove focus outline without replacement |
| **Good** | `focus:ring-2 focus:ring-blue-500` |
| **Bad** | `outline-none without alternative` |
| **Severity** | High |

### 29. Hover States (Web)

Visual feedback on interactive elements

| | Guidance |
|---|---------|
| **Do** | Change cursor and add subtle visual change |
| **Don't** | No hover feedback on clickable elements |
| **Good** | `hover:bg-gray-100 cursor-pointer` |
| **Bad** | `No hover style` |
| **Severity** | Medium |

### 30. Active States (All)

Show immediate feedback on press/click

| | Guidance |
|---|---------|
| **Do** | Add pressed/active state visual change |
| **Don't** | No feedback during interaction |
| **Good** | `active:scale-95` |
| **Bad** | `No active state` |
| **Severity** | Medium |

### 31. Disabled States (All)

Clearly indicate non-interactive elements

| | Guidance |
|---|---------|
| **Do** | Reduce opacity and change cursor |
| **Don't** | Confuse disabled with normal state |
| **Good** | `opacity-50 cursor-not-allowed` |
| **Bad** | `Same style as enabled` |
| **Severity** | Medium |

### 32. Loading Buttons (All)

Prevent double submission during async actions

| | Guidance |
|---|---------|
| **Do** | Disable button and show loading state |
| **Don't** | Allow multiple clicks during processing |
| **Good** | `disabled={loading} spinner` |
| **Bad** | `Button clickable while loading` |
| **Severity** | High |

### 33. Error Feedback (All)

Users need to know when something fails

| | Guidance |
|---|---------|
| **Do** | Show clear error messages near problem |
| **Don't** | Silent failures with no feedback |
| **Good** | `Red border + error message` |
| **Bad** | `No indication of error` |
| **Severity** | High |

### 34. Success Feedback (All)

Confirm successful actions to users

| | Guidance |
|---|---------|
| **Do** | Show success message or visual change |
| **Don't** | No confirmation of completed action |
| **Good** | `Toast notification or checkmark` |
| **Bad** | `Action completes silently` |
| **Severity** | Medium |

### 35. Confirmation Dialogs (All)

Prevent accidental destructive actions

| | Guidance |
|---|---------|
| **Do** | Confirm before delete/irreversible actions |
| **Don't** | Delete without confirmation |
| **Good** | `Are you sure modal` |
| **Bad** | `Direct delete on click` |
| **Severity** | High |

---

## Accessibility

### 36. Color Contrast (All)

Text must be readable against background

| | Guidance |
|---|---------|
| **Do** | Minimum 4.5:1 ratio for normal text |
| **Don't** | Low contrast text |
| **Good** | `#333 on white (7:1)` |
| **Bad** | `#999 on white (2.8:1)` |
| **Severity** | High |

### 37. Color Only (All)

Don't convey information by color alone

| | Guidance |
|---|---------|
| **Do** | Use icons/text in addition to color |
| **Don't** | Red/green only for error/success |
| **Good** | `Red text + error icon` |
| **Bad** | `Red border only for error` |
| **Severity** | High |

### 38. Alt Text (All)

Images need text alternatives

| | Guidance |
|---|---------|
| **Do** | Descriptive alt text for meaningful images |
| **Don't** | Empty or missing alt attributes |
| **Good** | `alt='Dog playing in park'` |
| **Bad** | `alt='' for content images` |
| **Severity** | High |

### 39. Heading Hierarchy (Web)

Screen readers use headings for navigation

| | Guidance |
|---|---------|
| **Do** | Use sequential heading levels h1-h6 |
| **Don't** | Skip heading levels or misuse for styling |
| **Good** | `h1 then h2 then h3` |
| **Bad** | `h1 then h4` |
| **Severity** | Medium |

### 40. ARIA Labels (All)

Interactive elements need accessible names

| | Guidance |
|---|---------|
| **Do** | Add aria-label for icon-only buttons |
| **Don't** | Icon buttons without labels |
| **Good** | `aria-label='Close menu'` |
| **Bad** | `<button><Icon/></button>` |
| **Severity** | High |

### 41. Keyboard Navigation (Web)

All functionality accessible via keyboard

| | Guidance |
|---|---------|
| **Do** | Tab order matches visual order |
| **Don't** | Keyboard traps or illogical tab order |
| **Good** | `tabIndex for custom order` |
| **Bad** | `Unreachable elements` |
| **Severity** | High |

### 42. Screen Reader (All)

Content should make sense when read aloud

| | Guidance |
|---|---------|
| **Do** | Use semantic HTML and ARIA properly |
| **Don't** | Div soup with no semantics |
| **Good** | `<nav> <main> <article>` |
| **Bad** | `<div> for everything` |
| **Severity** | Medium |

### 43. Form Labels (All)

Inputs must have associated labels

| | Guidance |
|---|---------|
| **Do** | Use label with for attribute or wrap input |
| **Don't** | Placeholder-only inputs |
| **Good** | `<label for='email'>` |
| **Bad** | `placeholder='Email' only` |
| **Severity** | High |

### 44. Error Messages (All)

Error messages must be announced

| | Guidance |
|---|---------|
| **Do** | Use aria-live or role=alert for errors |
| **Don't** | Visual-only error indication |
| **Good** | `role='alert'` |
| **Bad** | `Red border only` |
| **Severity** | High |

### 45. Skip Links (Web)

Allow keyboard users to skip navigation

| | Guidance |
|---|---------|
| **Do** | Provide skip to main content link |
| **Don't** | No skip link on nav-heavy pages |
| **Good** | `Skip to main content link` |
| **Bad** | `100 tabs to reach content` |
| **Severity** | Medium |

### 99. Motion Sensitivity (All)

Parallax/Scroll-jacking causes nausea

| | Guidance |
|---|---------|
| **Do** | Respect prefers-reduced-motion |
| **Don't** | Force scroll effects |
| **Good** | `@media (prefers-reduced-motion)` |
| **Bad** | `ScrollTrigger.create()` |
| **Severity** | High |

---

## Performance

### 46. Image Optimization (All)

Large images slow page load

| | Guidance |
|---|---------|
| **Do** | Use appropriate size and format (WebP) |
| **Don't** | Unoptimized full-size images |
| **Good** | `srcset with multiple sizes` |
| **Bad** | `4000px image for 400px display` |
| **Severity** | High |

### 47. Lazy Loading (All)

Load content as needed

| | Guidance |
|---|---------|
| **Do** | Lazy load below-fold images and content |
| **Don't** | Load everything upfront |
| **Good** | `loading='lazy'` |
| **Bad** | `All images eager load` |
| **Severity** | Medium |

### 48. Code Splitting (Web)

Large bundles slow initial load

| | Guidance |
|---|---------|
| **Do** | Split code by route/feature |
| **Don't** | Single large bundle |
| **Good** | `dynamic import()` |
| **Bad** | `All code in main bundle` |
| **Severity** | Medium |

### 49. Caching (Web)

Repeat visits should be fast

| | Guidance |
|---|---------|
| **Do** | Set appropriate cache headers |
| **Don't** | No caching strategy |
| **Good** | `Cache-Control headers` |
| **Bad** | `Every request hits server` |
| **Severity** | Medium |

### 50. Font Loading (Web)

Web fonts can block rendering

| | Guidance |
|---|---------|
| **Do** | Use font-display swap or optional |
| **Don't** | Invisible text during font load |
| **Good** | `font-display: swap` |
| **Bad** | `FOIT (Flash of Invisible Text)` |
| **Severity** | Medium |

### 51. Third Party Scripts (Web)

External scripts can block rendering

| | Guidance |
|---|---------|
| **Do** | Load non-critical scripts async/defer |
| **Don't** | Synchronous third-party scripts |
| **Good** | `async or defer attribute` |
| **Bad** | `<script src='...'> in head` |
| **Severity** | Medium |

### 52. Bundle Size (Web)

Large JavaScript slows interaction

| | Guidance |
|---|---------|
| **Do** | Monitor and minimize bundle size |
| **Don't** | Ignore bundle size growth |
| **Good** | `Bundle analyzer` |
| **Bad** | `No size monitoring` |
| **Severity** | Medium |

### 53. Render Blocking (Web)

CSS/JS can block first paint

| | Guidance |
|---|---------|
| **Do** | Inline critical CSS defer non-critical |
| **Don't** | Large blocking CSS files |
| **Good** | `Critical CSS inline` |
| **Bad** | `All CSS in head` |
| **Severity** | Medium |

---

## Forms

### 54. Input Labels (All)

Every input needs a visible label

| | Guidance |
|---|---------|
| **Do** | Always show label above or beside input |
| **Don't** | Placeholder as only label |
| **Good** | `<label>Email</label><input>` |
| **Bad** | `placeholder='Email' only` |
| **Severity** | High |

### 55. Error Placement (All)

Errors should appear near the problem

| | Guidance |
|---|---------|
| **Do** | Show error below related input |
| **Don't** | Single error message at top of form |
| **Good** | `Error under each field` |
| **Bad** | `All errors at form top` |
| **Severity** | Medium |

### 56. Inline Validation (All)

Validate as user types or on blur

| | Guidance |
|---|---------|
| **Do** | Validate on blur for most fields |
| **Don't** | Validate only on submit |
| **Good** | `onBlur validation` |
| **Bad** | `Submit-only validation` |
| **Severity** | Medium |

### 57. Input Types (All)

Use appropriate input types

| | Guidance |
|---|---------|
| **Do** | Use email tel number url etc |
| **Don't** | Text input for everything |
| **Good** | `type='email'` |
| **Bad** | `type='text' for email` |
| **Severity** | Medium |

### 58. Autofill Support (Web)

Help browsers autofill correctly

| | Guidance |
|---|---------|
| **Do** | Use autocomplete attribute properly |
| **Don't** | Block or ignore autofill |
| **Good** | `autocomplete='email'` |
| **Bad** | `autocomplete='off' everywhere` |
| **Severity** | Medium |

### 59. Required Indicators (All)

Mark required fields clearly

| | Guidance |
|---|---------|
| **Do** | Use asterisk or (required) text |
| **Don't** | No indication of required fields |
| **Good** | `* required indicator` |
| **Bad** | `Guess which are required` |
| **Severity** | Medium |

### 60. Password Visibility (All)

Let users see password while typing

| | Guidance |
|---|---------|
| **Do** | Toggle to show/hide password |
| **Don't** | No visibility toggle |
| **Good** | `Show/hide password button` |
| **Bad** | `Password always hidden` |
| **Severity** | Medium |

### 61. Submit Feedback (All)

Confirm form submission status

| | Guidance |
|---|---------|
| **Do** | Show loading then success/error state |
| **Don't** | No feedback after submit |
| **Good** | `Loading -> Success message` |
| **Bad** | `Button click with no response` |
| **Severity** | High |

### 62. Input Affordance (All)

Inputs should look interactive

| | Guidance |
|---|---------|
| **Do** | Use distinct input styling |
| **Don't** | Inputs that look like plain text |
| **Good** | `Border/background on inputs` |
| **Bad** | `Borderless inputs` |
| **Severity** | Medium |

### 63. Mobile Keyboards (Mobile)

Show appropriate keyboard for input type

| | Guidance |
|---|---------|
| **Do** | Use inputmode attribute |
| **Don't** | Default keyboard for all inputs |
| **Good** | `inputmode='numeric'` |
| **Bad** | `Text keyboard for numbers` |
| **Severity** | Medium |

---

## Responsive

### 64. Mobile First (Web)

Design for mobile then enhance for larger

| | Guidance |
|---|---------|
| **Do** | Start with mobile styles then add breakpoints |
| **Don't** | Desktop-first causing mobile issues |
| **Good** | `Default mobile + md: lg: xl:` |
| **Bad** | `Desktop default + max-width queries` |
| **Severity** | Medium |

### 65. Breakpoint Testing (Web)

Test at all common screen sizes

| | Guidance |
|---|---------|
| **Do** | Test at 320 375 414 768 1024 1440 |
| **Don't** | Only test on your device |
| **Good** | `Multiple device testing` |
| **Bad** | `Single device development` |
| **Severity** | Medium |

### 66. Touch Friendly (Web)

Mobile layouts need touch-sized targets

| | Guidance |
|---|---------|
| **Do** | Increase touch targets on mobile |
| **Don't** | Same tiny buttons on mobile |
| **Good** | `Larger buttons on mobile` |
| **Bad** | `Desktop-sized targets on mobile` |
| **Severity** | High |

### 67. Readable Font Size (All)

Text must be readable on all devices

| | Guidance |
|---|---------|
| **Do** | Minimum 16px body text on mobile |
| **Don't** | Tiny text on mobile |
| **Good** | `text-base or larger` |
| **Bad** | `text-xs for body text` |
| **Severity** | High |

### 68. Viewport Meta (Web)

Set viewport for mobile devices

| | Guidance |
|---|---------|
| **Do** | Use width=device-width initial-scale=1 |
| **Don't** | Missing or incorrect viewport |
| **Good** | `<meta name='viewport'...>` |
| **Bad** | `No viewport meta tag` |
| **Severity** | High |

### 69. Horizontal Scroll (Web)

Avoid horizontal scrolling

| | Guidance |
|---|---------|
| **Do** | Ensure content fits viewport width |
| **Don't** | Content wider than viewport |
| **Good** | `max-w-full overflow-x-hidden` |
| **Bad** | `Horizontal scrollbar on mobile` |
| **Severity** | High |

### 70. Image Scaling (Web)

Images should scale with container

| | Guidance |
|---|---------|
| **Do** | Use max-width: 100% on images |
| **Don't** | Fixed width images overflow |
| **Good** | `max-w-full h-auto` |
| **Bad** | `width='800' fixed` |
| **Severity** | Medium |

### 71. Table Handling (Web)

Tables can overflow on mobile

| | Guidance |
|---|---------|
| **Do** | Use horizontal scroll or card layout |
| **Don't** | Wide tables breaking layout |
| **Good** | `overflow-x-auto wrapper` |
| **Bad** | `Table overflows viewport` |
| **Severity** | Medium |

---

## Typography

### 72. Line Height (All)

Adequate line height improves readability

| | Guidance |
|---|---------|
| **Do** | Use 1.5-1.75 for body text |
| **Don't** | Cramped or excessive line height |
| **Good** | `leading-relaxed (1.625)` |
| **Bad** | `leading-none (1)` |
| **Severity** | Medium |

### 73. Line Length (Web)

Long lines are hard to read

| | Guidance |
|---|---------|
| **Do** | Limit to 65-75 characters per line |
| **Don't** | Full-width text on large screens |
| **Good** | `max-w-prose` |
| **Bad** | `Full viewport width text` |
| **Severity** | Medium |

### 74. Font Size Scale (All)

Consistent type hierarchy aids scanning

| | Guidance |
|---|---------|
| **Do** | Use consistent modular scale |
| **Don't** | Random font sizes |
| **Good** | `Type scale (12 14 16 18 24 32)` |
| **Bad** | `Arbitrary sizes` |
| **Severity** | Medium |

### 75. Font Loading (Web)

Fonts should load without layout shift

| | Guidance |
|---|---------|
| **Do** | Reserve space with fallback font |
| **Don't** | Layout shift when fonts load |
| **Good** | `font-display: swap + similar fallback` |
| **Bad** | `No fallback font` |
| **Severity** | Medium |

### 76. Contrast Readability (All)

Body text needs good contrast

| | Guidance |
|---|---------|
| **Do** | Use darker text on light backgrounds |
| **Don't** | Gray text on gray background |
| **Good** | `text-gray-900 on white` |
| **Bad** | `text-gray-400 on gray-100` |
| **Severity** | High |

### 77. Heading Clarity (All)

Headings should stand out from body

| | Guidance |
|---|---------|
| **Do** | Clear size/weight difference |
| **Don't** | Headings similar to body text |
| **Good** | `Bold + larger size` |
| **Bad** | `Same size as body` |
| **Severity** | Medium |

---

## Feedback

### 78. Loading Indicators (All)

Show system status during waits

| | Guidance |
|---|---------|
| **Do** | Show spinner/skeleton for operations > 300ms |
| **Don't** | No feedback during loading |
| **Good** | `Skeleton or spinner` |
| **Bad** | `Frozen UI` |
| **Severity** | High |

### 79. Empty States (All)

Guide users when no content exists

| | Guidance |
|---|---------|
| **Do** | Show helpful message and action |
| **Don't** | Blank empty screens |
| **Good** | `No items yet. Create one!` |
| **Bad** | `Empty white space` |
| **Severity** | Medium |

### 80. Error Recovery (All)

Help users recover from errors

| | Guidance |
|---|---------|
| **Do** | Provide clear next steps |
| **Don't** | Error without recovery path |
| **Good** | `Try again button + help link` |
| **Bad** | `Error message only` |
| **Severity** | Medium |

### 81. Progress Indicators (All)

Show progress for multi-step processes

| | Guidance |
|---|---------|
| **Do** | Step indicators or progress bar |
| **Don't** | No indication of progress |
| **Good** | `Step 2 of 4 indicator` |
| **Bad** | `No step information` |
| **Severity** | Medium |

### 82. Toast Notifications (All)

Transient messages for non-critical info

| | Guidance |
|---|---------|
| **Do** | Auto-dismiss after 3-5 seconds |
| **Don't** | Toasts that never disappear |
| **Good** | `Auto-dismiss toast` |
| **Bad** | `Persistent toast` |
| **Severity** | Medium |

### 83. Confirmation Messages (All)

Confirm successful actions

| | Guidance |
|---|---------|
| **Do** | Brief success message |
| **Don't** | Silent success |
| **Good** | `Saved successfully toast` |
| **Bad** | `No confirmation` |
| **Severity** | Medium |

---

## Content

### 84. Truncation (All)

Handle long content gracefully

| | Guidance |
|---|---------|
| **Do** | Truncate with ellipsis and expand option |
| **Don't** | Overflow or broken layout |
| **Good** | `line-clamp-2 with expand` |
| **Bad** | `Overflow or cut off` |
| **Severity** | Medium |

### 85. Date Formatting (All)

Use locale-appropriate date formats

| | Guidance |
|---|---------|
| **Do** | Use relative or locale-aware dates |
| **Don't** | Ambiguous date formats |
| **Good** | `2 hours ago or locale format` |
| **Bad** | `01/02/03` |
| **Severity** | Low |

### 86. Number Formatting (All)

Format large numbers for readability

| | Guidance |
|---|---------|
| **Do** | Use thousand separators or abbreviations |
| **Don't** | Long unformatted numbers |
| **Good** | `1.2K or 1,234` |
| **Bad** | `1234567` |
| **Severity** | Low |

### 87. Placeholder Content (All)

Show realistic placeholders during dev

| | Guidance |
|---|---------|
| **Do** | Use realistic sample data |
| **Don't** | Lorem ipsum everywhere |
| **Good** | `Real sample content` |
| **Bad** | `Lorem ipsum` |
| **Severity** | Low |

---

## Onboarding

### 88. User Freedom (All)

Users should be able to skip tutorials

| | Guidance |
|---|---------|
| **Do** | Provide Skip and Back buttons |
| **Don't** | Force linear unskippable tour |
| **Good** | `Skip Tutorial button` |
| **Bad** | `Locked overlay until finished` |
| **Severity** | Medium |

---

## Search

### 89. Autocomplete (Web)

Help users find results faster

| | Guidance |
|---|---------|
| **Do** | Show predictions as user types |
| **Don't** | Require full type and enter |
| **Good** | `Debounced fetch + dropdown` |
| **Bad** | `No suggestions` |
| **Severity** | Medium |

### 90. No Results (Web)

Dead ends frustrate users

| | Guidance |
|---|---------|
| **Do** | Show 'No results' with suggestions |
| **Don't** | Blank screen or '0 results' |
| **Good** | `Try searching for X instead` |
| **Bad** | `No results found.` |
| **Severity** | Medium |

---

## Data Entry

### 91. Bulk Actions (Web)

Editing one by one is tedious

| | Guidance |
|---|---------|
| **Do** | Allow multi-select and bulk edit |
| **Don't** | Single row actions only |
| **Good** | `Checkbox column + Action bar` |
| **Bad** | `Repeated actions per row` |
| **Severity** | Low |

---

## AI Interaction

### 92. Disclaimer (All)

Users need to know they talk to AI

| | Guidance |
|---|---------|
| **Do** | Clearly label AI generated content |
| **Don't** | Present AI as human |
| **Good** | `AI Assistant label` |
| **Bad** | `Fake human name without label` |
| **Severity** | High |

### 93. Streaming (All)

Waiting for full text is slow

| | Guidance |
|---|---------|
| **Do** | Stream text response token by token |
| **Don't** | Show loading spinner for 10s+ |
| **Good** | `Typewriter effect` |
| **Bad** | `Spinner until 100% complete` |
| **Severity** | Medium |

### 98. Feedback Loop (All)

AI needs user feedback to improve

| | Guidance |
|---|---------|
| **Do** | Thumps up/down or 'Regenerate' |
| **Don't** | Static output only |
| **Good** | `Feedback component` |
| **Bad** | `Read-only text` |
| **Severity** | Low |

---

## Spatial UI

### 94. Gaze Hover (VisionOS)

Elements should respond to eye tracking before pinch

| | Guidance |
|---|---------|
| **Do** | Scale/highlight element on look |
| **Don't** | Static element until pinch |
| **Good** | `hoverEffect()` |
| **Bad** | `onTap only` |
| **Severity** | High |

### 95. Depth Layering (VisionOS)

UI needs Z-depth to separate content from environment

| | Guidance |
|---|---------|
| **Do** | Use glass material and z-offset |
| **Don't** | Flat opaque panels blocking view |
| **Good** | `.glassBackgroundEffect()` |
| **Bad** | `bg-white` |
| **Severity** | Medium |

---

## Sustainability

### 96. Auto-Play Video (Web)

Video consumes massive data and energy

| | Guidance |
|---|---------|
| **Do** | Click-to-play or pause when off-screen |
| **Don't** | Auto-play high-res video loops |
| **Good** | `playsInline muted preload='none'` |
| **Bad** | `autoplay loop` |
| **Severity** | Medium |

### 97. Asset Weight (Web)

Heavy 3D/Image assets increase carbon footprint

| | Guidance |
|---|---------|
| **Do** | Compress and lazy load 3D models |
| **Don't** | Load 50MB textures |
| **Good** | `Draco compression` |
| **Bad** | `Raw .obj files` |
| **Severity** | Medium |

---

