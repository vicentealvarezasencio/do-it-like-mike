# Industry Design Rules

> 100 industry-to-design mapping rules for automated style/color/typography selection.
> Source: UI/UX Pro Max (converted to MIKE format).

---

### Rule 1: SaaS (General)

| Field | Value |
|-------|-------|
| Category | SaaS (General) |
| Recommended Pattern | Hero + Features + CTA |
| Style Priority | Glassmorphism + Flat Design |
| Color Mood | Trust blue + Accent contrast |
| Typography Mood | Professional + Hierarchy |
| Key Effects | Subtle hover (200-250ms) + Smooth transitions |
| Anti-Patterns | Excessive animation + Dark mode by default |
| Decision Rules | `{"if_ux_focused": "prioritize-minimalism", "if_data_heavy": "add-glassmorphism"}` |
| Severity | HIGH |

---

### Rule 2: Micro SaaS

| Field | Value |
|-------|-------|
| Category | Micro SaaS |
| Recommended Pattern | Minimal & Direct + Demo |
| Style Priority | Flat Design + Vibrant & Block |
| Color Mood | Vibrant primary + White space |
| Typography Mood | Bold + Clean typography |
| Key Effects | Large CTA hover (300ms) + Scroll reveal |
| Anti-Patterns | Complex onboarding flow + Cluttered layout |
| Decision Rules | `{"if_quick_onboarding": "reduce-steps", "if_demo_available": "feature-interactive-demo"}` |
| Severity | HIGH |

---

### Rule 3: E-commerce

| Field | Value |
|-------|-------|
| Category | E-commerce |
| Recommended Pattern | Feature-Rich Showcase |
| Style Priority | Vibrant & Block-based |
| Color Mood | Brand primary + Success green |
| Typography Mood | Engaging + Clear hierarchy |
| Key Effects | Card hover lift (200ms) + Scale effect |
| Anti-Patterns | Flat design without depth + Text-heavy pages |
| Decision Rules | `{"if_luxury": "switch-to-liquid-glass", "if_conversion_focused": "add-urgency-colors"}` |
| Severity | HIGH |

---

### Rule 4: E-commerce Luxury

| Field | Value |
|-------|-------|
| Category | E-commerce Luxury |
| Recommended Pattern | Feature-Rich Showcase |
| Style Priority | Liquid Glass + Glassmorphism |
| Color Mood | Premium colors + Minimal accent |
| Typography Mood | Elegant + Refined typography |
| Key Effects | Chromatic aberration + Fluid animations (400-600ms) |
| Anti-Patterns | Vibrant & Block-based + Playful colors |
| Decision Rules | `{"if_checkout": "emphasize-trust", "if_hero_needed": "use-3d-hyperrealism"}` |
| Severity | HIGH |

---

### Rule 5: Healthcare App

| Field | Value |
|-------|-------|
| Category | Healthcare App |
| Recommended Pattern | Social Proof-Focused |
| Style Priority | Neumorphism + Accessible & Ethical |
| Color Mood | Calm blue + Health green |
| Typography Mood | Readable + Large type (16px+) |
| Key Effects | Soft box-shadow + Smooth press (150ms) |
| Anti-Patterns | Bright neon colors + Motion-heavy animations + AI purple/pink gradients |
| Decision Rules | `{"must_have": "wcag-aaa-compliance", "if_medication": "red-alert-colors"}` |
| Severity | HIGH |

---

### Rule 6: Fintech/Crypto

| Field | Value |
|-------|-------|
| Category | Fintech/Crypto |
| Recommended Pattern | Conversion-Optimized |
| Style Priority | Glassmorphism + Dark Mode (OLED) |
| Color Mood | Dark tech colors + Vibrant accents |
| Typography Mood | Modern + Confident typography |
| Key Effects | Real-time chart animations + Alert pulse/glow |
| Anti-Patterns | Light backgrounds + No security indicators |
| Decision Rules | `{"must_have": "security-badges", "if_real_time": "add-streaming-data"}` |
| Severity | HIGH |

---

### Rule 7: Education

| Field | Value |
|-------|-------|
| Category | Education |
| Recommended Pattern | Feature-Rich Showcase |
| Style Priority | Claymorphism + Micro-interactions |
| Color Mood | Playful colors + Clear hierarchy |
| Typography Mood | Friendly + Engaging typography |
| Key Effects | Soft press (200ms) + Fluffy elements |
| Anti-Patterns | Dark modes + Complex jargon |
| Decision Rules | `{"if_gamification": "add-progress-animation", "if_children": "increase-playfulness"}` |
| Severity | MEDIUM |

---

### Rule 8: Portfolio/Personal

| Field | Value |
|-------|-------|
| Category | Portfolio/Personal |
| Recommended Pattern | Storytelling-Driven |
| Style Priority | Motion-Driven + Minimalism |
| Color Mood | Brand primary + Artistic |
| Typography Mood | Expressive + Variable typography |
| Key Effects | Parallax (3-5 layers) + Scroll-triggered reveals |
| Anti-Patterns | Corporate templates + Generic layouts |
| Decision Rules | `{"if_creative_field": "add-brutalism", "if_minimal_portfolio": "reduce-motion"}` |
| Severity | MEDIUM |

---

### Rule 9: Government/Public

| Field | Value |
|-------|-------|
| Category | Government/Public |
| Recommended Pattern | Minimal & Direct |
| Style Priority | Accessible & Ethical + Minimalism |
| Color Mood | Professional blue + High contrast |
| Typography Mood | Clear + Large typography |
| Key Effects | Clear focus rings (3-4px) + Skip links |
| Anti-Patterns | Ornate design + Low contrast + Motion effects + AI purple/pink gradients |
| Decision Rules | `{"must_have": "wcag-aaa", "must_have": "keyboard-navigation"}` |
| Severity | HIGH |

---

### Rule 10: Fintech (Banking)

| Field | Value |
|-------|-------|
| Category | Fintech (Banking) |
| Recommended Pattern | Trust & Authority |
| Style Priority | Minimalism + Accessible & Ethical |
| Color Mood | Navy + Trust Blue + Gold |
| Typography Mood | Professional + Trustworthy |
| Key Effects | Smooth state transitions + Number animations |
| Anti-Patterns | Playful design + Unclear fees + AI purple/pink gradients |
| Decision Rules | `{"must_have": "security-first", "if_dashboard": "use-dark-mode"}` |
| Severity | HIGH |

---

### Rule 11: Social Media App

| Field | Value |
|-------|-------|
| Category | Social Media App |
| Recommended Pattern | Feature-Rich Showcase |
| Style Priority | Vibrant & Block-based + Motion-Driven |
| Color Mood | Vibrant + Engagement colors |
| Typography Mood | Modern + Bold typography |
| Key Effects | Large scroll animations + Icon animations |
| Anti-Patterns | Heavy skeuomorphism + Accessibility ignored |
| Decision Rules | `{"if_engagement_metric": "add-motion", "if_content_focused": "minimize-chrome"}` |
| Severity | MEDIUM |

---

### Rule 12: Startup Landing

| Field | Value |
|-------|-------|
| Category | Startup Landing |
| Recommended Pattern | Hero-Centric + Trust |
| Style Priority | Motion-Driven + Vibrant & Block |
| Color Mood | Bold primaries + Accent contrast |
| Typography Mood | Modern + Energetic typography |
| Key Effects | Scroll-triggered animations + Parallax |
| Anti-Patterns | Static design + No video + Poor mobile |
| Decision Rules | `{"if_pre_launch": "use-waitlist-pattern", "if_video_ready": "add-hero-video"}` |
| Severity | HIGH |

---

### Rule 13: Gaming

| Field | Value |
|-------|-------|
| Category | Gaming |
| Recommended Pattern | Feature-Rich Showcase |
| Style Priority | 3D & Hyperrealism + Retro-Futurism |
| Color Mood | Vibrant + Neon + Immersive |
| Typography Mood | Bold + Impactful typography |
| Key Effects | WebGL 3D rendering + Glitch effects |
| Anti-Patterns | Minimalist design + Static assets |
| Decision Rules | `{"if_competitive": "add-real-time-stats", "if_casual": "increase-playfulness"}` |
| Severity | HIGH |

---

### Rule 14: Creative Agency

| Field | Value |
|-------|-------|
| Category | Creative Agency |
| Recommended Pattern | Storytelling-Driven |
| Style Priority | Brutalism + Motion-Driven |
| Color Mood | Bold primaries + Artistic freedom |
| Typography Mood | Bold + Expressive typography |
| Key Effects | CRT scanlines + Neon glow + Glitch effects |
| Anti-Patterns | Corporate minimalism + Hidden portfolio |
| Decision Rules | `{"must_have": "case-studies", "if_boutique": "increase-artistic-freedom"}` |
| Severity | HIGH |

---

### Rule 15: Wellness/Mental Health

| Field | Value |
|-------|-------|
| Category | Wellness/Mental Health |
| Recommended Pattern | Social Proof-Focused |
| Style Priority | Neumorphism + Accessible & Ethical |
| Color Mood | Calm Pastels + Trust colors |
| Typography Mood | Calming + Readable typography |
| Key Effects | Soft press + Breathing animations |
| Anti-Patterns | Bright neon + Motion overload |
| Decision Rules | `{"must_have": "privacy-first", "if_meditation": "add-breathing-animation"}` |
| Severity | HIGH |

---

### Rule 16: Restaurant/Food

| Field | Value |
|-------|-------|
| Category | Restaurant/Food |
| Recommended Pattern | Hero-Centric + Conversion |
| Style Priority | Vibrant & Block-based + Motion-Driven |
| Color Mood | Warm colors (Orange Red Brown) |
| Typography Mood | Appetizing + Clear typography |
| Key Effects | Food image reveal + Menu hover effects |
| Anti-Patterns | Low-quality imagery + Outdated hours |
| Decision Rules | `{"must_have": "high_quality_images", "if_delivery": "emphasize-speed"}` |
| Severity | HIGH |

---

### Rule 17: Real Estate

| Field | Value |
|-------|-------|
| Category | Real Estate |
| Recommended Pattern | Hero-Centric + Feature-Rich |
| Style Priority | Glassmorphism + Minimalism |
| Color Mood | Trust Blue + Gold + White |
| Typography Mood | Professional + Confident |
| Key Effects | 3D property tour zoom + Map hover |
| Anti-Patterns | Poor photos + No virtual tours |
| Decision Rules | `{"if_luxury": "add-3d-models", "must_have": "map-integration"}` |
| Severity | HIGH |

---

### Rule 18: Travel/Tourism

| Field | Value |
|-------|-------|
| Category | Travel/Tourism |
| Recommended Pattern | Storytelling-Driven + Hero |
| Style Priority | Aurora UI + Motion-Driven |
| Color Mood | Vibrant destination + Sky Blue |
| Typography Mood | Inspirational + Engaging |
| Key Effects | Destination parallax + Itinerary animations |
| Anti-Patterns | Generic photos + Complex booking |
| Decision Rules | `{"if_experience_focused": "use-storytelling", "must_have": "mobile-booking"}` |
| Severity | HIGH |

---

### Rule 19: SaaS Dashboard

| Field | Value |
|-------|-------|
| Category | SaaS Dashboard |
| Recommended Pattern | Data-Dense Dashboard |
| Style Priority | Data-Dense + Heat Map |
| Color Mood | Cool to Hot gradients + Neutral grey |
| Typography Mood | Clear + Readable typography |
| Key Effects | Hover tooltips + Chart zoom + Real-time pulse |
| Anti-Patterns | Ornate design + Slow rendering |
| Decision Rules | `{"must_have": "real-time-updates", "if_large_dataset": "prioritize-performance"}` |
| Severity | HIGH |

---

### Rule 20: B2B SaaS Enterprise

| Field | Value |
|-------|-------|
| Category | B2B SaaS Enterprise |
| Recommended Pattern | Feature-Rich Showcase |
| Style Priority | Trust & Authority + Minimal |
| Color Mood | Professional blue + Neutral grey |
| Typography Mood | Formal + Clear typography |
| Key Effects | Subtle section transitions + Feature reveals |
| Anti-Patterns | Playful design + Hidden features + AI purple/pink gradients |
| Decision Rules | `{"must_have": "case-studies", "must_have": "roi-messaging"}` |
| Severity | HIGH |

---

### Rule 21: Music/Entertainment

| Field | Value |
|-------|-------|
| Category | Music/Entertainment |
| Recommended Pattern | Feature-Rich Showcase |
| Style Priority | Dark Mode (OLED) + Vibrant & Block-based |
| Color Mood | Dark (#121212) + Vibrant accents + Album art colors |
| Typography Mood | Modern + Bold typography |
| Key Effects | Waveform visualization + Playlist animations |
| Anti-Patterns | Cluttered layout + Poor audio player UX |
| Decision Rules | `{"must_have": "audio-player-ux", "if_discovery_focused": "add-playlist-recommendations"}` |
| Severity | HIGH |

---

### Rule 22: Video Streaming/OTT

| Field | Value |
|-------|-------|
| Category | Video Streaming/OTT |
| Recommended Pattern | Hero-Centric + Feature-Rich |
| Style Priority | Dark Mode (OLED) + Motion-Driven |
| Color Mood | Dark bg + Poster colors + Brand accent |
| Typography Mood | Bold + Engaging typography |
| Key Effects | Video player animations + Content carousel (parallax) |
| Anti-Patterns | Static layout + Slow video player |
| Decision Rules | `{"must_have": "continue-watching", "if_personalized": "add-recommendations"}` |
| Severity | HIGH |

---

### Rule 23: Job Board/Recruitment

| Field | Value |
|-------|-------|
| Category | Job Board/Recruitment |
| Recommended Pattern | Conversion-Optimized + Feature-Rich |
| Style Priority | Flat Design + Minimalism |
| Color Mood | Professional Blue + Success Green + Neutral |
| Typography Mood | Clear + Professional typography |
| Key Effects | Search/filter animations + Application flow |
| Anti-Patterns | Outdated forms + Hidden filters |
| Decision Rules | `{"must_have": "advanced-search", "if_salary_focused": "highlight-compensation"}` |
| Severity | HIGH |

---

### Rule 24: Marketplace (P2P)

| Field | Value |
|-------|-------|
| Category | Marketplace (P2P) |
| Recommended Pattern | Feature-Rich Showcase + Social Proof |
| Style Priority | Vibrant & Block-based + Flat Design |
| Color Mood | Trust colors + Category colors + Success green |
| Typography Mood | Modern + Engaging typography |
| Key Effects | Review star animations + Listing hover effects |
| Anti-Patterns | Low trust signals + Confusing layout |
| Decision Rules | `{"must_have": "seller-profiles", "must_have": "secure-payment"}` |
| Severity | HIGH |

---

### Rule 25: Logistics/Delivery

| Field | Value |
|-------|-------|
| Category | Logistics/Delivery |
| Recommended Pattern | Feature-Rich Showcase + Real-Time |
| Style Priority | Minimalism + Flat Design |
| Color Mood | Blue (#2563EB) + Orange (tracking) + Green |
| Typography Mood | Clear + Functional typography |
| Key Effects | Real-time tracking animation + Status pulse |
| Anti-Patterns | Static tracking + No map integration + AI purple/pink gradients |
| Decision Rules | `{"must_have": "tracking-map", "must_have": "delivery-updates"}` |
| Severity | HIGH |

---

### Rule 26: Agriculture/Farm Tech

| Field | Value |
|-------|-------|
| Category | Agriculture/Farm Tech |
| Recommended Pattern | Feature-Rich Showcase |
| Style Priority | Organic Biophilic + Flat Design |
| Color Mood | Earth Green (#4A7C23) + Brown + Sky Blue |
| Typography Mood | Clear + Informative typography |
| Key Effects | Data visualization + Weather animations |
| Anti-Patterns | Generic design + Ignored accessibility + AI purple/pink gradients |
| Decision Rules | `{"must_have": "sensor-dashboard", "if_crop_focused": "add-health-indicators"}` |
| Severity | MEDIUM |

---

### Rule 27: Construction/Architecture

| Field | Value |
|-------|-------|
| Category | Construction/Architecture |
| Recommended Pattern | Hero-Centric + Feature-Rich |
| Style Priority | Minimalism + 3D & Hyperrealism |
| Color Mood | Grey (#4A4A4A) + Orange (safety) + Blueprint Blue |
| Typography Mood | Professional + Bold typography |
| Key Effects | 3D model viewer + Timeline animations |
| Anti-Patterns | 2D-only layouts + Poor image quality + AI purple/pink gradients |
| Decision Rules | `{"must_have": "project-portfolio", "if_team_collaboration": "add-real-time-updates"}` |
| Severity | HIGH |

---

### Rule 28: Automotive/Car Dealership

| Field | Value |
|-------|-------|
| Category | Automotive/Car Dealership |
| Recommended Pattern | Hero-Centric + Feature-Rich |
| Style Priority | Motion-Driven + 3D & Hyperrealism |
| Color Mood | Brand colors + Metallic + Dark/Light |
| Typography Mood | Bold + Confident typography |
| Key Effects | 360 product view + Configurator animations |
| Anti-Patterns | Static product pages + Poor UX |
| Decision Rules | `{"must_have": "vehicle-comparison", "must_have": "financing-calculator"}` |
| Severity | HIGH |

---

### Rule 29: Photography Studio

| Field | Value |
|-------|-------|
| Category | Photography Studio |
| Recommended Pattern | Storytelling-Driven + Hero-Centric |
| Style Priority | Motion-Driven + Minimalism |
| Color Mood | Black + White + Minimal accent |
| Typography Mood | Elegant + Minimal typography |
| Key Effects | Full-bleed gallery + Before/after reveal |
| Anti-Patterns | Heavy text + Poor image showcase |
| Decision Rules | `{"must_have": "portfolio-showcase", "if_booking": "add-calendar-system"}` |
| Severity | HIGH |

---

### Rule 30: Coworking Space

| Field | Value |
|-------|-------|
| Category | Coworking Space |
| Recommended Pattern | Hero-Centric + Feature-Rich |
| Style Priority | Vibrant & Block-based + Glassmorphism |
| Color Mood | Energetic colors + Wood tones + Brand |
| Typography Mood | Modern + Engaging typography |
| Key Effects | Space tour video + Amenity reveal animations |
| Anti-Patterns | Outdated photos + Confusing layout |
| Decision Rules | `{"must_have": "virtual-tour", "must_have": "booking-system"}` |
| Severity | MEDIUM |

---

### Rule 31: Cleaning Service

| Field | Value |
|-------|-------|
| Category | Cleaning Service |
| Recommended Pattern | Conversion-Optimized + Trust |
| Style Priority | Soft UI Evolution + Flat Design |
| Color Mood | Fresh Blue (#00B4D8) + Clean White + Green |
| Typography Mood | Friendly + Clear typography |
| Key Effects | Before/after gallery + Service package reveal |
| Anti-Patterns | Poor before/after imagery + Hidden pricing |
| Decision Rules | `{"must_have": "price-transparency", "must_have": "trust-badges"}` |
| Severity | HIGH |

---

### Rule 32: Home Services

| Field | Value |
|-------|-------|
| Category | Home Services |
| Recommended Pattern | Conversion-Optimized + Trust |
| Style Priority | Flat Design + Trust & Authority |
| Color Mood | Trust Blue + Safety Orange + Grey |
| Typography Mood | Professional + Clear typography |
| Key Effects | Emergency contact highlight + Service menu animations |
| Anti-Patterns | Hidden contact info + No certifications |
| Decision Rules | `{"must_have": "emergency-contact", "must_have": "certifications-display"}` |
| Severity | HIGH |

---

### Rule 33: Childcare/Daycare

| Field | Value |
|-------|-------|
| Category | Childcare/Daycare |
| Recommended Pattern | Social Proof-Focused + Trust |
| Style Priority | Claymorphism + Vibrant & Block-based |
| Color Mood | Playful pastels + Safe colors + Warm |
| Typography Mood | Friendly + Playful typography |
| Key Effects | Parent portal animations + Activity gallery reveal |
| Anti-Patterns | Generic design + Hidden safety info |
| Decision Rules | `{"must_have": "parent-communication", "must_have": "safety-certifications"}` |
| Severity | HIGH |

---

### Rule 34: Senior Care/Elderly

| Field | Value |
|-------|-------|
| Category | Senior Care/Elderly |
| Recommended Pattern | Trust & Authority + Accessible |
| Style Priority | Accessible & Ethical + Soft UI Evolution |
| Color Mood | Calm Blue + Warm neutrals + Large text |
| Typography Mood | Large + Clear typography (18px+) |
| Key Effects | Large touch targets + Clear navigation |
| Anti-Patterns | Small text + Complex navigation + AI purple/pink gradients |
| Decision Rules | `{"must_have": "wcag-aaa", "must_have": "family-portal"}` |
| Severity | HIGH |

---

### Rule 35: Medical Clinic

| Field | Value |
|-------|-------|
| Category | Medical Clinic |
| Recommended Pattern | Trust & Authority + Conversion |
| Style Priority | Accessible & Ethical + Minimalism |
| Color Mood | Medical Blue (#0077B6) + Trust White |
| Typography Mood | Professional + Readable typography |
| Key Effects | Online booking flow + Doctor profile reveals |
| Anti-Patterns | Outdated interface + Confusing booking + AI purple/pink gradients |
| Decision Rules | `{"must_have": "appointment-booking", "must_have": "insurance-info"}` |
| Severity | HIGH |

---

### Rule 36: Pharmacy/Drug Store

| Field | Value |
|-------|-------|
| Category | Pharmacy/Drug Store |
| Recommended Pattern | Conversion-Optimized + Trust |
| Style Priority | Flat Design + Accessible & Ethical |
| Color Mood | Pharmacy Green + Trust Blue + Clean White |
| Typography Mood | Clear + Functional typography |
| Key Effects | Prescription upload flow + Refill reminders |
| Anti-Patterns | Confusing layout + Privacy concerns + AI purple/pink gradients |
| Decision Rules | `{"must_have": "prescription-management", "must_have": "drug-interaction-warnings"}` |
| Severity | HIGH |

---

### Rule 37: Dental Practice

| Field | Value |
|-------|-------|
| Category | Dental Practice |
| Recommended Pattern | Social Proof-Focused + Conversion |
| Style Priority | Soft UI Evolution + Minimalism |
| Color Mood | Fresh Blue + White + Smile Yellow |
| Typography Mood | Friendly + Professional typography |
| Key Effects | Before/after gallery + Patient testimonial carousel |
| Anti-Patterns | Poor imagery + No testimonials |
| Decision Rules | `{"must_have": "before-after-gallery", "must_have": "appointment-system"}` |
| Severity | HIGH |

---

### Rule 38: Veterinary Clinic

| Field | Value |
|-------|-------|
| Category | Veterinary Clinic |
| Recommended Pattern | Social Proof-Focused + Trust |
| Style Priority | Claymorphism + Accessible & Ethical |
| Color Mood | Caring Blue + Pet colors + Warm |
| Typography Mood | Friendly + Welcoming typography |
| Key Effects | Pet profile management + Service animations |
| Anti-Patterns | Generic design + Hidden services |
| Decision Rules | `{"must_have": "pet-portal", "must_have": "emergency-contact"}` |
| Severity | MEDIUM |

---

### Rule 39: News/Media Platform

| Field | Value |
|-------|-------|
| Category | News/Media Platform |
| Recommended Pattern | Hero-Centric + Feature-Rich |
| Style Priority | Minimalism + Flat Design |
| Color Mood | Brand colors + High contrast |
| Typography Mood | Clear + Readable typography |
| Key Effects | Breaking news badge + Article reveal animations |
| Anti-Patterns | Cluttered layout + Slow loading |
| Decision Rules | `{"must_have": "mobile-first-reading", "must_have": "category-navigation"}` |
| Severity | HIGH |

---

### Rule 40: Legal Services

| Field | Value |
|-------|-------|
| Category | Legal Services |
| Recommended Pattern | Trust & Authority + Minimal |
| Style Priority | Trust & Authority + Minimalism |
| Color Mood | Navy Blue (#1E3A5F) + Gold + White |
| Typography Mood | Professional + Authoritative typography |
| Key Effects | Practice area reveal + Attorney profile animations |
| Anti-Patterns | Outdated design + Hidden credentials + AI purple/pink gradients |
| Decision Rules | `{"must_have": "case-results", "must_have": "credential-display"}` |
| Severity | HIGH |

---

### Rule 41: Beauty/Spa/Wellness Service

| Field | Value |
|-------|-------|
| Category | Beauty/Spa/Wellness Service |
| Recommended Pattern | Hero-Centric + Social Proof |
| Style Priority | Soft UI Evolution + Neumorphism |
| Color Mood | Soft pastels (Pink Sage Cream) + Gold accents |
| Typography Mood | Elegant + Calming typography |
| Key Effects | Soft shadows + Smooth transitions (200-300ms) + Gentle hover |
| Anti-Patterns | Bright neon colors + Harsh animations + Dark mode |
| Decision Rules | `{"must_have": "booking-system", "must_have": "before-after-gallery", "if_luxury": "add-gold-accents"}` |
| Severity | HIGH |

---

### Rule 42: Service Landing Page

| Field | Value |
|-------|-------|
| Category | Service Landing Page |
| Recommended Pattern | Hero-Centric + Trust & Authority |
| Style Priority | Minimalism + Social Proof-Focused |
| Color Mood | Brand primary + Trust colors |
| Typography Mood | Professional + Clear typography |
| Key Effects | Testimonial carousel + CTA hover (200ms) |
| Anti-Patterns | Complex navigation + Hidden contact info |
| Decision Rules | `{"must_have": "social-proof", "must_have": "clear-cta"}` |
| Severity | HIGH |

---

### Rule 43: B2B Service

| Field | Value |
|-------|-------|
| Category | B2B Service |
| Recommended Pattern | Feature-Rich Showcase + Trust |
| Style Priority | Trust & Authority + Minimalism |
| Color Mood | Professional blue + Neutral grey |
| Typography Mood | Formal + Clear typography |
| Key Effects | Section transitions + Feature reveals |
| Anti-Patterns | Playful design + Hidden credentials + AI purple/pink gradients |
| Decision Rules | `{"must_have": "case-studies", "must_have": "roi-messaging"}` |
| Severity | HIGH |

---

### Rule 44: Financial Dashboard

| Field | Value |
|-------|-------|
| Category | Financial Dashboard |
| Recommended Pattern | Data-Dense Dashboard |
| Style Priority | Dark Mode (OLED) + Data-Dense |
| Color Mood | Dark bg + Red/Green alerts + Trust blue |
| Typography Mood | Clear + Readable typography |
| Key Effects | Real-time number animations + Alert pulse |
| Anti-Patterns | Light mode default + Slow rendering |
| Decision Rules | `{"must_have": "real-time-updates", "must_have": "high-contrast"}` |
| Severity | HIGH |

---

### Rule 45: Analytics Dashboard

| Field | Value |
|-------|-------|
| Category | Analytics Dashboard |
| Recommended Pattern | Data-Dense + Drill-Down |
| Style Priority | Data-Dense + Heat Map |
| Color Mood | Cool→Hot gradients + Neutral grey |
| Typography Mood | Clear + Functional typography |
| Key Effects | Hover tooltips + Chart zoom + Filter animations |
| Anti-Patterns | Ornate design + No filtering |
| Decision Rules | `{"must_have": "data-export", "if_large_dataset": "virtualize-lists"}` |
| Severity | HIGH |

---

### Rule 46: Productivity Tool

| Field | Value |
|-------|-------|
| Category | Productivity Tool |
| Recommended Pattern | Interactive Demo + Feature-Rich |
| Style Priority | Flat Design + Micro-interactions |
| Color Mood | Clear hierarchy + Functional colors |
| Typography Mood | Clean + Efficient typography |
| Key Effects | Quick actions (150ms) + Task animations |
| Anti-Patterns | Complex onboarding + Slow performance |
| Decision Rules | `{"must_have": "keyboard-shortcuts", "if_collaboration": "add-real-time-cursors"}` |
| Severity | HIGH |

---

### Rule 47: Design System/Component Library

| Field | Value |
|-------|-------|
| Category | Design System/Component Library |
| Recommended Pattern | Feature-Rich + Documentation |
| Style Priority | Minimalism + Accessible & Ethical |
| Color Mood | Clear hierarchy + Code-like structure |
| Typography Mood | Monospace + Clear typography |
| Key Effects | Code copy animations + Component previews |
| Anti-Patterns | Poor documentation + No live preview |
| Decision Rules | `{"must_have": "search", "must_have": "code-examples"}` |
| Severity | HIGH |

---

### Rule 48: AI/Chatbot Platform

| Field | Value |
|-------|-------|
| Category | AI/Chatbot Platform |
| Recommended Pattern | Interactive Demo + Minimal |
| Style Priority | AI-Native UI + Minimalism |
| Color Mood | Neutral + AI Purple (#6366F1) |
| Typography Mood | Modern + Clear typography |
| Key Effects | Streaming text + Typing indicators + Fade-in |
| Anti-Patterns | Heavy chrome + Slow response feedback |
| Decision Rules | `{"must_have": "conversational-ui", "must_have": "context-awareness"}` |
| Severity | HIGH |

---

### Rule 49: NFT/Web3 Platform

| Field | Value |
|-------|-------|
| Category | NFT/Web3 Platform |
| Recommended Pattern | Feature-Rich Showcase |
| Style Priority | Cyberpunk UI + Glassmorphism |
| Color Mood | Dark + Neon + Gold (#FFD700) |
| Typography Mood | Bold + Modern typography |
| Key Effects | Wallet connect animations + Transaction feedback |
| Anti-Patterns | Light mode default + No transaction status |
| Decision Rules | `{"must_have": "wallet-integration", "must_have": "gas-fees-display"}` |
| Severity | HIGH |

---

### Rule 50: Creator Economy Platform

| Field | Value |
|-------|-------|
| Category | Creator Economy Platform |
| Recommended Pattern | Social Proof + Feature-Rich |
| Style Priority | Vibrant & Block-based + Bento Box Grid |
| Color Mood | Vibrant + Brand colors |
| Typography Mood | Modern + Bold typography |
| Key Effects | Engagement counter animations + Profile reveals |
| Anti-Patterns | Generic layout + Hidden earnings |
| Decision Rules | `{"must_have": "creator-profiles", "must_have": "monetization-display"}` |
| Severity | MEDIUM |

---

### Rule 51: Sustainability/ESG Platform

| Field | Value |
|-------|-------|
| Category | Sustainability/ESG Platform |
| Recommended Pattern | Trust & Authority + Data |
| Style Priority | Organic Biophilic + Minimalism |
| Color Mood | Green (#228B22) + Earth tones |
| Typography Mood | Clear + Informative typography |
| Key Effects | Progress indicators + Impact animations |
| Anti-Patterns | Greenwashing visuals + No data |
| Decision Rules | `{"must_have": "data-transparency", "must_have": "certification-badges"}` |
| Severity | HIGH |

---

### Rule 52: Remote Work/Collaboration

| Field | Value |
|-------|-------|
| Category | Remote Work/Collaboration |
| Recommended Pattern | Feature-Rich + Real-Time |
| Style Priority | Soft UI Evolution + Minimalism |
| Color Mood | Calm Blue + Neutral grey |
| Typography Mood | Clean + Readable typography |
| Key Effects | Real-time presence indicators + Notification badges |
| Anti-Patterns | Cluttered interface + No presence |
| Decision Rules | `{"must_have": "status-indicators", "must_have": "video-integration"}` |
| Severity | HIGH |

---

### Rule 53: Pet Tech App

| Field | Value |
|-------|-------|
| Category | Pet Tech App |
| Recommended Pattern | Storytelling + Feature-Rich |
| Style Priority | Claymorphism + Vibrant & Block-based |
| Color Mood | Playful + Warm colors |
| Typography Mood | Friendly + Playful typography |
| Key Effects | Pet profile animations + Health tracking charts |
| Anti-Patterns | Generic design + No personality |
| Decision Rules | `{"must_have": "pet-profiles", "if_health": "add-vet-integration"}` |
| Severity | MEDIUM |

---

### Rule 54: Smart Home/IoT Dashboard

| Field | Value |
|-------|-------|
| Category | Smart Home/IoT Dashboard |
| Recommended Pattern | Real-Time Monitoring |
| Style Priority | Glassmorphism + Dark Mode (OLED) |
| Color Mood | Dark + Status indicator colors |
| Typography Mood | Clear + Functional typography |
| Key Effects | Device status pulse + Quick action animations |
| Anti-Patterns | Slow updates + No automation |
| Decision Rules | `{"must_have": "real-time-controls", "must_have": "energy-monitoring"}` |
| Severity | HIGH |

---

### Rule 55: EV/Charging Ecosystem

| Field | Value |
|-------|-------|
| Category | EV/Charging Ecosystem |
| Recommended Pattern | Hero-Centric + Feature-Rich |
| Style Priority | Minimalism + Aurora UI |
| Color Mood | Electric Blue (#009CD1) + Green |
| Typography Mood | Modern + Clear typography |
| Key Effects | Range estimation animations + Map interactions |
| Anti-Patterns | Poor map UX + Hidden costs |
| Decision Rules | `{"must_have": "charging-map", "must_have": "range-calculator"}` |
| Severity | HIGH |

---

### Rule 56: Subscription Box Service

| Field | Value |
|-------|-------|
| Category | Subscription Box Service |
| Recommended Pattern | Feature-Rich + Conversion |
| Style Priority | Vibrant & Block-based + Motion-Driven |
| Color Mood | Brand + Excitement colors |
| Typography Mood | Engaging + Clear typography |
| Key Effects | Unboxing reveal animations + Product carousel |
| Anti-Patterns | Confusing pricing + No unboxing preview |
| Decision Rules | `{"must_have": "personalization-quiz", "must_have": "subscription-management"}` |
| Severity | HIGH |

---

### Rule 57: Podcast Platform

| Field | Value |
|-------|-------|
| Category | Podcast Platform |
| Recommended Pattern | Storytelling + Feature-Rich |
| Style Priority | Dark Mode (OLED) + Minimalism |
| Color Mood | Dark + Audio waveform accents |
| Typography Mood | Modern + Clear typography |
| Key Effects | Waveform visualizations + Episode transitions |
| Anti-Patterns | Poor audio player + Cluttered layout |
| Decision Rules | `{"must_have": "audio-player-ux", "must_have": "episode-discovery"}` |
| Severity | HIGH |

---

### Rule 58: Dating App

| Field | Value |
|-------|-------|
| Category | Dating App |
| Recommended Pattern | Social Proof + Feature-Rich |
| Style Priority | Vibrant & Block-based + Motion-Driven |
| Color Mood | Warm + Romantic (Pink/Red gradients) |
| Typography Mood | Modern + Friendly typography |
| Key Effects | Profile card swipe + Match animations |
| Anti-Patterns | Generic profiles + No safety |
| Decision Rules | `{"must_have": "profile-cards", "must_have": "safety-features"}` |
| Severity | HIGH |

---

### Rule 59: Micro-Credentials/Badges

| Field | Value |
|-------|-------|
| Category | Micro-Credentials/Badges |
| Recommended Pattern | Trust & Authority + Feature |
| Style Priority | Minimalism + Flat Design |
| Color Mood | Trust Blue + Gold (#FFD700) |
| Typography Mood | Professional + Clear typography |
| Key Effects | Badge reveal animations + Progress tracking |
| Anti-Patterns | No verification + Hidden progress |
| Decision Rules | `{"must_have": "credential-verification", "must_have": "progress-display"}` |
| Severity | MEDIUM |

---

### Rule 60: Knowledge Base/Documentation

| Field | Value |
|-------|-------|
| Category | Knowledge Base/Documentation |
| Recommended Pattern | FAQ + Minimal |
| Style Priority | Minimalism + Accessible & Ethical |
| Color Mood | Clean hierarchy + Minimal color |
| Typography Mood | Clear + Readable typography |
| Key Effects | Search highlight + Smooth scrolling |
| Anti-Patterns | Poor navigation + No search |
| Decision Rules | `{"must_have": "search-first", "must_have": "version-switching"}` |
| Severity | HIGH |

---

### Rule 61: Hyperlocal Services

| Field | Value |
|-------|-------|
| Category | Hyperlocal Services |
| Recommended Pattern | Conversion + Feature-Rich |
| Style Priority | Minimalism + Vibrant & Block-based |
| Color Mood | Location markers + Trust colors |
| Typography Mood | Clear + Functional typography |
| Key Effects | Map hover + Provider card reveals |
| Anti-Patterns | No map + Hidden reviews |
| Decision Rules | `{"must_have": "map-integration", "must_have": "booking-system"}` |
| Severity | HIGH |

---

### Rule 62: Luxury/Premium Brand

| Field | Value |
|-------|-------|
| Category | Luxury/Premium Brand |
| Recommended Pattern | Storytelling + Feature-Rich |
| Style Priority | Liquid Glass + Glassmorphism |
| Color Mood | Black + Gold (#FFD700) + White |
| Typography Mood | Elegant + Refined typography |
| Key Effects | Slow parallax + Premium reveals (400-600ms) |
| Anti-Patterns | Cheap visuals + Fast animations |
| Decision Rules | `{"must_have": "high-quality-imagery", "must_have": "storytelling"}` |
| Severity | HIGH |

---

### Rule 63: Fitness/Gym App

| Field | Value |
|-------|-------|
| Category | Fitness/Gym App |
| Recommended Pattern | Feature-Rich + Data |
| Style Priority | Vibrant & Block-based + Dark Mode (OLED) |
| Color Mood | Energetic (Orange #FF6B35) + Dark bg |
| Typography Mood | Bold + Motivational typography |
| Key Effects | Progress ring animations + Achievement unlocks |
| Anti-Patterns | Static design + No gamification |
| Decision Rules | `{"must_have": "progress-tracking", "must_have": "workout-plans"}` |
| Severity | HIGH |

---

### Rule 64: Hotel/Hospitality

| Field | Value |
|-------|-------|
| Category | Hotel/Hospitality |
| Recommended Pattern | Hero-Centric + Social Proof |
| Style Priority | Liquid Glass + Minimalism |
| Color Mood | Warm neutrals + Gold (#D4AF37) |
| Typography Mood | Elegant + Welcoming typography |
| Key Effects | Room gallery + Amenity reveals |
| Anti-Patterns | Poor photos + Complex booking |
| Decision Rules | `{"must_have": "room-booking", "must_have": "virtual-tour"}` |
| Severity | HIGH |

---

### Rule 65: Wedding/Event Planning

| Field | Value |
|-------|-------|
| Category | Wedding/Event Planning |
| Recommended Pattern | Storytelling + Social Proof |
| Style Priority | Soft UI Evolution + Aurora UI |
| Color Mood | Soft Pink (#FFD6E0) + Gold + Cream |
| Typography Mood | Elegant + Romantic typography |
| Key Effects | Gallery reveals + Timeline animations |
| Anti-Patterns | Generic templates + No portfolio |
| Decision Rules | `{"must_have": "portfolio-gallery", "must_have": "planning-tools"}` |
| Severity | HIGH |

---

### Rule 66: Insurance Platform

| Field | Value |
|-------|-------|
| Category | Insurance Platform |
| Recommended Pattern | Conversion + Trust |
| Style Priority | Trust & Authority + Flat Design |
| Color Mood | Trust Blue (#0066CC) + Green + Neutral |
| Typography Mood | Clear + Professional typography |
| Key Effects | Quote calculator animations + Policy comparison |
| Anti-Patterns | Confusing pricing + No trust signals + AI purple/pink gradients |
| Decision Rules | `{"must_have": "quote-calculator", "must_have": "policy-comparison"}` |
| Severity | HIGH |

---

### Rule 67: Banking/Traditional Finance

| Field | Value |
|-------|-------|
| Category | Banking/Traditional Finance |
| Recommended Pattern | Trust & Authority + Feature |
| Style Priority | Minimalism + Accessible & Ethical |
| Color Mood | Navy (#0A1628) + Trust Blue + Gold |
| Typography Mood | Professional + Trustworthy typography |
| Key Effects | Smooth number animations + Security indicators |
| Anti-Patterns | Playful design + Poor security UX + AI purple/pink gradients |
| Decision Rules | `{"must_have": "security-first", "must_have": "accessibility"}` |
| Severity | HIGH |

---

### Rule 68: Online Course/E-learning

| Field | Value |
|-------|-------|
| Category | Online Course/E-learning |
| Recommended Pattern | Feature-Rich + Social Proof |
| Style Priority | Claymorphism + Vibrant & Block-based |
| Color Mood | Vibrant learning colors + Progress green |
| Typography Mood | Friendly + Engaging typography |
| Key Effects | Progress bar animations + Certificate reveals |
| Anti-Patterns | Boring design + No gamification |
| Decision Rules | `{"must_have": "progress-tracking", "must_have": "video-player"}` |
| Severity | HIGH |

---

### Rule 69: Non-profit/Charity

| Field | Value |
|-------|-------|
| Category | Non-profit/Charity |
| Recommended Pattern | Storytelling + Trust |
| Style Priority | Accessible & Ethical + Organic Biophilic |
| Color Mood | Cause-related colors + Trust + Warm |
| Typography Mood | Heartfelt + Readable typography |
| Key Effects | Impact counter animations + Story reveals |
| Anti-Patterns | No impact data + Hidden financials |
| Decision Rules | `{"must_have": "impact-stories", "must_have": "donation-transparency"}` |
| Severity | HIGH |

---

### Rule 70: Florist/Plant Shop

| Field | Value |
|-------|-------|
| Category | Florist/Plant Shop |
| Recommended Pattern | Hero-Centric + Conversion |
| Style Priority | Organic Biophilic + Vibrant & Block-based |
| Color Mood | Natural Green + Floral pinks/purples |
| Typography Mood | Elegant + Natural typography |
| Key Effects | Product reveal + Seasonal transitions |
| Anti-Patterns | Poor imagery + No seasonal content |
| Decision Rules | `{"must_have": "delivery-scheduling", "must_have": "care-guides"}` |
| Severity | MEDIUM |

---

### Rule 71: Bakery/Cafe

| Field | Value |
|-------|-------|
| Category | Bakery/Cafe |
| Recommended Pattern | Hero-Centric + Conversion |
| Style Priority | Vibrant & Block-based + Soft UI Evolution |
| Color Mood | Warm Brown + Cream + Appetizing accents |
| Typography Mood | Warm + Inviting typography |
| Key Effects | Menu hover + Order animations |
| Anti-Patterns | Poor food photos + Hidden hours |
| Decision Rules | `{"must_have": "menu-display", "must_have": "online-ordering"}` |
| Severity | HIGH |

---

### Rule 72: Coffee Shop

| Field | Value |
|-------|-------|
| Category | Coffee Shop |
| Recommended Pattern | Hero-Centric + Minimal |
| Style Priority | Minimalism + Organic Biophilic |
| Color Mood | Coffee Brown (#6F4E37) + Cream + Warm |
| Typography Mood | Cozy + Clean typography |
| Key Effects | Menu transitions + Loyalty animations |
| Anti-Patterns | Generic design + No atmosphere |
| Decision Rules | `{"must_have": "menu", "if_loyalty": "add-rewards-system"}` |
| Severity | MEDIUM |

---

### Rule 73: Brewery/Winery

| Field | Value |
|-------|-------|
| Category | Brewery/Winery |
| Recommended Pattern | Storytelling + Hero-Centric |
| Style Priority | Motion-Driven + Storytelling-Driven |
| Color Mood | Deep amber/burgundy + Gold + Craft |
| Typography Mood | Artisanal + Heritage typography |
| Key Effects | Tasting note reveals + Heritage timeline |
| Anti-Patterns | Generic product pages + No story |
| Decision Rules | `{"must_have": "product-showcase", "must_have": "story-heritage"}` |
| Severity | HIGH |

---

### Rule 74: Airline

| Field | Value |
|-------|-------|
| Category | Airline |
| Recommended Pattern | Conversion + Feature-Rich |
| Style Priority | Minimalism + Glassmorphism |
| Color Mood | Sky Blue + Brand colors + Trust |
| Typography Mood | Clear + Professional typography |
| Key Effects | Flight search animations + Boarding pass reveals |
| Anti-Patterns | Complex booking + Poor mobile |
| Decision Rules | `{"must_have": "flight-search", "must_have": "mobile-first"}` |
| Severity | HIGH |

---

### Rule 75: Magazine/Blog

| Field | Value |
|-------|-------|
| Category | Magazine/Blog |
| Recommended Pattern | Storytelling + Hero-Centric |
| Style Priority | Swiss Modernism 2.0 + Motion-Driven |
| Color Mood | Editorial colors + Brand + Clean white |
| Typography Mood | Editorial + Elegant typography |
| Key Effects | Article transitions + Category reveals |
| Anti-Patterns | Poor typography + Slow loading |
| Decision Rules | `{"must_have": "article-showcase", "must_have": "newsletter-signup"}` |
| Severity | HIGH |

---

### Rule 76: Freelancer Platform

| Field | Value |
|-------|-------|
| Category | Freelancer Platform |
| Recommended Pattern | Feature-Rich + Conversion |
| Style Priority | Flat Design + Minimalism |
| Color Mood | Professional Blue + Success Green |
| Typography Mood | Clear + Professional typography |
| Key Effects | Skill match animations + Review reveals |
| Anti-Patterns | Poor profiles + No reviews |
| Decision Rules | `{"must_have": "portfolio-display", "must_have": "skill-matching"}` |
| Severity | HIGH |

---

### Rule 77: Consulting Firm

| Field | Value |
|-------|-------|
| Category | Consulting Firm |
| Recommended Pattern | Trust & Authority + Minimal |
| Style Priority | Trust & Authority + Minimalism |
| Color Mood | Navy + Gold + Professional grey |
| Typography Mood | Authoritative + Clear typography |
| Key Effects | Case study reveals + Team profiles |
| Anti-Patterns | Generic content + No credentials + AI purple/pink gradients |
| Decision Rules | `{"must_have": "case-studies", "must_have": "thought-leadership"}` |
| Severity | HIGH |

---

### Rule 78: Marketing Agency

| Field | Value |
|-------|-------|
| Category | Marketing Agency |
| Recommended Pattern | Storytelling + Feature-Rich |
| Style Priority | Brutalism + Motion-Driven |
| Color Mood | Bold brand colors + Creative freedom |
| Typography Mood | Bold + Expressive typography |
| Key Effects | Portfolio reveals + Results animations |
| Anti-Patterns | Boring design + Hidden work |
| Decision Rules | `{"must_have": "portfolio", "must_have": "results-metrics"}` |
| Severity | HIGH |

---

### Rule 79: Event Management

| Field | Value |
|-------|-------|
| Category | Event Management |
| Recommended Pattern | Hero-Centric + Feature-Rich |
| Style Priority | Vibrant & Block-based + Motion-Driven |
| Color Mood | Event theme colors + Excitement accents |
| Typography Mood | Bold + Engaging typography |
| Key Effects | Countdown timer + Registration flow |
| Anti-Patterns | Confusing registration + No countdown |
| Decision Rules | `{"must_have": "registration", "must_have": "agenda-display"}` |
| Severity | HIGH |

---

### Rule 80: Conference/Webinar Platform

| Field | Value |
|-------|-------|
| Category | Conference/Webinar Platform |
| Recommended Pattern | Feature-Rich + Conversion |
| Style Priority | Glassmorphism + Minimalism |
| Color Mood | Professional Blue + Video accent |
| Typography Mood | Professional + Clear typography |
| Key Effects | Live stream integration + Agenda transitions |
| Anti-Patterns | Poor video UX + No networking |
| Decision Rules | `{"must_have": "registration", "must_have": "speaker-profiles"}` |
| Severity | HIGH |

---

### Rule 81: Membership/Community

| Field | Value |
|-------|-------|
| Category | Membership/Community |
| Recommended Pattern | Social Proof + Conversion |
| Style Priority | Vibrant & Block-based + Soft UI Evolution |
| Color Mood | Community brand colors + Engagement |
| Typography Mood | Friendly + Engaging typography |
| Key Effects | Member counter + Benefit reveals |
| Anti-Patterns | Hidden benefits + No community proof |
| Decision Rules | `{"must_have": "member-benefits", "must_have": "pricing-tiers"}` |
| Severity | HIGH |

---

### Rule 82: Newsletter Platform

| Field | Value |
|-------|-------|
| Category | Newsletter Platform |
| Recommended Pattern | Minimal + Conversion |
| Style Priority | Minimalism + Flat Design |
| Color Mood | Brand primary + Clean white + CTA |
| Typography Mood | Clean + Readable typography |
| Key Effects | Subscribe form + Archive reveals |
| Anti-Patterns | Complex signup + No preview |
| Decision Rules | `{"must_have": "subscribe-form", "must_have": "sample-content"}` |
| Severity | MEDIUM |

---

### Rule 83: Digital Products/Downloads

| Field | Value |
|-------|-------|
| Category | Digital Products/Downloads |
| Recommended Pattern | Feature-Rich + Conversion |
| Style Priority | Vibrant & Block-based + Motion-Driven |
| Color Mood | Product colors + Brand + Success green |
| Typography Mood | Modern + Clear typography |
| Key Effects | Product preview + Instant delivery animations |
| Anti-Patterns | No preview + Slow delivery |
| Decision Rules | `{"must_have": "product-preview", "must_have": "instant-delivery"}` |
| Severity | HIGH |

---

### Rule 84: Church/Religious Organization

| Field | Value |
|-------|-------|
| Category | Church/Religious Organization |
| Recommended Pattern | Hero-Centric + Social Proof |
| Style Priority | Accessible & Ethical + Soft UI Evolution |
| Color Mood | Warm Gold + Deep Purple/Blue + White |
| Typography Mood | Welcoming + Clear typography |
| Key Effects | Service time highlights + Event calendar |
| Anti-Patterns | Outdated design + Hidden info |
| Decision Rules | `{"must_have": "service-times", "must_have": "community-events"}` |
| Severity | MEDIUM |

---

### Rule 85: Sports Team/Club

| Field | Value |
|-------|-------|
| Category | Sports Team/Club |
| Recommended Pattern | Hero-Centric + Feature-Rich |
| Style Priority | Vibrant & Block-based + Motion-Driven |
| Color Mood | Team colors + Energetic accents |
| Typography Mood | Bold + Impactful typography |
| Key Effects | Score animations + Schedule reveals |
| Anti-Patterns | Static content + Poor fan engagement |
| Decision Rules | `{"must_have": "schedule", "must_have": "roster"}` |
| Severity | HIGH |

---

### Rule 86: Museum/Gallery

| Field | Value |
|-------|-------|
| Category | Museum/Gallery |
| Recommended Pattern | Storytelling + Feature-Rich |
| Style Priority | Minimalism + Motion-Driven |
| Color Mood | Art-appropriate neutrals + Exhibition accents |
| Typography Mood | Elegant + Minimal typography |
| Key Effects | Virtual tour + Collection reveals |
| Anti-Patterns | Cluttered layout + No online access |
| Decision Rules | `{"must_have": "virtual-tour", "must_have": "exhibition-info"}` |
| Severity | HIGH |

---

### Rule 87: Theater/Cinema

| Field | Value |
|-------|-------|
| Category | Theater/Cinema |
| Recommended Pattern | Hero-Centric + Conversion |
| Style Priority | Dark Mode (OLED) + Motion-Driven |
| Color Mood | Dark + Spotlight accents + Gold |
| Typography Mood | Dramatic + Bold typography |
| Key Effects | Seat selection + Trailer reveals |
| Anti-Patterns | Poor booking UX + No trailers |
| Decision Rules | `{"must_have": "showtimes", "must_have": "seat-selection"}` |
| Severity | HIGH |

---

### Rule 88: Language Learning App

| Field | Value |
|-------|-------|
| Category | Language Learning App |
| Recommended Pattern | Feature-Rich + Social Proof |
| Style Priority | Claymorphism + Vibrant & Block-based |
| Color Mood | Playful colors + Progress indicators |
| Typography Mood | Friendly + Clear typography |
| Key Effects | Progress animations + Achievement unlocks |
| Anti-Patterns | Boring design + No motivation |
| Decision Rules | `{"must_have": "progress-tracking", "must_have": "gamification"}` |
| Severity | HIGH |

---

### Rule 89: Coding Bootcamp

| Field | Value |
|-------|-------|
| Category | Coding Bootcamp |
| Recommended Pattern | Feature-Rich + Social Proof |
| Style Priority | Dark Mode (OLED) + Minimalism |
| Color Mood | Code editor colors + Brand + Success |
| Typography Mood | Technical + Clear typography |
| Key Effects | Terminal animations + Career outcome reveals |
| Anti-Patterns | Light mode only + Hidden results |
| Decision Rules | `{"must_have": "curriculum", "must_have": "career-outcomes"}` |
| Severity | HIGH |

---

### Rule 90: Cybersecurity Platform

| Field | Value |
|-------|-------|
| Category | Cybersecurity Platform |
| Recommended Pattern | Trust & Authority + Real-Time |
| Style Priority | Cyberpunk UI + Dark Mode (OLED) |
| Color Mood | Matrix Green (#00FF00) + Deep Black |
| Typography Mood | Technical + Clear typography |
| Key Effects | Threat visualization + Alert animations |
| Anti-Patterns | Light mode + Poor data viz |
| Decision Rules | `{"must_have": "real-time-monitoring", "must_have": "threat-display"}` |
| Severity | HIGH |

---

### Rule 91: Developer Tool/IDE

| Field | Value |
|-------|-------|
| Category | Developer Tool/IDE |
| Recommended Pattern | Minimal + Documentation |
| Style Priority | Dark Mode (OLED) + Minimalism |
| Color Mood | Dark syntax theme + Blue focus |
| Typography Mood | Monospace + Functional typography |
| Key Effects | Syntax highlighting + Command palette |
| Anti-Patterns | Light mode default + Slow performance |
| Decision Rules | `{"must_have": "keyboard-shortcuts", "must_have": "documentation"}` |
| Severity | HIGH |

---

### Rule 92: Biotech/Life Sciences

| Field | Value |
|-------|-------|
| Category | Biotech/Life Sciences |
| Recommended Pattern | Storytelling + Data |
| Style Priority | Glassmorphism + Clean Science |
| Color Mood | Sterile White + DNA Blue + Life Green |
| Typography Mood | Scientific + Clear typography |
| Key Effects | Data visualization + Research reveals |
| Anti-Patterns | Cluttered data + Poor credibility |
| Decision Rules | `{"must_have": "data-accuracy", "must_have": "clean-aesthetic"}` |
| Severity | HIGH |

---

### Rule 93: Space Tech/Aerospace

| Field | Value |
|-------|-------|
| Category | Space Tech/Aerospace |
| Recommended Pattern | Immersive + Feature-Rich |
| Style Priority | Holographic/HUD + Dark Mode |
| Color Mood | Deep Space Black + Star White + Metallic |
| Typography Mood | Futuristic + Precise typography |
| Key Effects | Telemetry animations + 3D renders |
| Anti-Patterns | Generic design + No immersion |
| Decision Rules | `{"must_have": "high-tech-feel", "must_have": "precision-data"}` |
| Severity | HIGH |

---

### Rule 94: Architecture/Interior

| Field | Value |
|-------|-------|
| Category | Architecture/Interior |
| Recommended Pattern | Portfolio + Hero-Centric |
| Style Priority | Exaggerated Minimalism + High Imagery |
| Color Mood | Monochrome + Gold Accent + High Imagery |
| Typography Mood | Architectural + Elegant typography |
| Key Effects | Project gallery + Blueprint reveals |
| Anti-Patterns | Poor imagery + Cluttered layout |
| Decision Rules | `{"must_have": "high-res-images", "must_have": "project-portfolio"}` |
| Severity | HIGH |

---

### Rule 95: Quantum Computing

| Field | Value |
|-------|-------|
| Category | Quantum Computing |
| Recommended Pattern | Immersive + Interactive |
| Style Priority | Holographic/HUD + Dark Mode |
| Color Mood | Quantum Blue (#00FFFF) + Deep Black |
| Typography Mood | Futuristic + Scientific typography |
| Key Effects | Probability visualizations + Qubit state animations |
| Anti-Patterns | Generic tech design + No viz |
| Decision Rules | `{"must_have": "complexity-visualization", "must_have": "scientific-credibility"}` |
| Severity | HIGH |

---

### Rule 96: Biohacking/Longevity App

| Field | Value |
|-------|-------|
| Category | Biohacking/Longevity App |
| Recommended Pattern | Data-Dense + Storytelling |
| Style Priority | Biomimetic/Organic 2.0 + Minimalism |
| Color Mood | Cellular Pink/Red + DNA Blue + White |
| Typography Mood | Scientific + Clear typography |
| Key Effects | Biological data viz + Progress animations |
| Anti-Patterns | Generic health app + No privacy |
| Decision Rules | `{"must_have": "data-privacy", "must_have": "scientific-credibility"}` |
| Severity | HIGH |

---

### Rule 97: Autonomous Drone Fleet

| Field | Value |
|-------|-------|
| Category | Autonomous Drone Fleet |
| Recommended Pattern | Real-Time + Feature-Rich |
| Style Priority | HUD/Sci-Fi FUI + Real-Time |
| Color Mood | Tactical Green + Alert Red + Map Dark |
| Typography Mood | Technical + Functional typography |
| Key Effects | Telemetry animations + 3D spatial awareness |
| Anti-Patterns | Slow updates + Poor spatial viz |
| Decision Rules | `{"must_have": "real-time-telemetry", "must_have": "safety-alerts"}` |
| Severity | HIGH |

---

### Rule 98: Generative Art Platform

| Field | Value |
|-------|-------|
| Category | Generative Art Platform |
| Recommended Pattern | Showcase + Feature-Rich |
| Style Priority | Minimalism + Gen Z Chaos |
| Color Mood | Neutral (#F5F5F5) + User Content |
| Typography Mood | Minimal + Content-focused typography |
| Key Effects | Gallery masonry + Minting animations |
| Anti-Patterns | Heavy chrome + Slow loading |
| Decision Rules | `{"must_have": "fast-loading", "must_have": "creator-attribution"}` |
| Severity | HIGH |

---

### Rule 99: Spatial Computing OS

| Field | Value |
|-------|-------|
| Category | Spatial Computing OS |
| Recommended Pattern | Immersive + Interactive |
| Style Priority | Spatial UI (VisionOS) + Glassmorphism |
| Color Mood | Frosted Glass + System Colors + Depth |
| Typography Mood | Spatial + Readable typography |
| Key Effects | Depth hierarchy + Gaze interactions |
| Anti-Patterns | 2D design + No spatial depth |
| Decision Rules | `{"must_have": "depth-hierarchy", "must_have": "environment-awareness"}` |
| Severity | HIGH |

---

### Rule 100: Sustainable Energy/Climate

| Field | Value |
|-------|-------|
| Category | Sustainable Energy/Climate |
| Recommended Pattern | Data + Trust |
| Style Priority | Organic Biophilic + E-Ink/Paper |
| Color Mood | Earth Green + Sky Blue + Solar Yellow |
| Typography Mood | Clear + Informative typography |
| Key Effects | Impact viz + Progress animations |
| Anti-Patterns | Greenwashing + No real data |
| Decision Rules | `{"must_have": "data-transparency", "must_have": "impact-visualization"}` |
| Severity | HIGH |

---


## Product-to-Style Index

| # | Product Type | Primary Style | Secondary Styles | Landing Pattern | Dashboard Style | Color Focus |
|---|-------------|--------------|-----------------|----------------|----------------|-------------|
| 1 | SaaS (General) | Glassmorphism + Flat Design | Soft UI Evolution, Minimalism | Hero + Features + CTA | Data-Dense + Real-Time Monitoring | Trust blue + accent contrast |
| 2 | Micro SaaS | Flat Design + Vibrant & Block | Motion-Driven, Micro-interactions | Minimal & Direct + Demo | Executive Dashboard | Vibrant primary + white space |
| 3 | E-commerce | Vibrant & Block-based | Aurora UI, Motion-Driven | Feature-Rich Showcase | Sales Intelligence Dashboard | Brand primary + success green |
| 4 | E-commerce Luxury | Liquid Glass + Glassmorphism | 3D & Hyperrealism, Aurora UI | Feature-Rich Showcase | Sales Intelligence Dashboard | Premium colors + minimal accent |
| 5 | Service Landing Page | Hero-Centric + Trust & Authority | Social Proof-Focused, Storytelling | Hero-Centric Design | N/A - Analytics for conversions | Brand primary + trust colors |
| 6 | B2B Service | Trust & Authority + Minimal | Feature-Rich, Conversion-Optimized | Feature-Rich Showcase | Sales Intelligence Dashboard | Professional blue + neutral grey |
| 7 | Financial Dashboard | Dark Mode (OLED) + Data-Dense | Minimalism, Accessible & Ethical | N/A - Dashboard focused | Financial Dashboard | Dark bg + red/green alerts + trust blue |
| 8 | Analytics Dashboard | Data-Dense + Heat Map & Heatmap | Minimalism, Dark Mode (OLED) | N/A - Analytics focused | Drill-Down Analytics + Comparative | Cool→Hot gradients + neutral grey |
| 9 | Healthcare App | Neumorphism + Accessible & Ethical | Soft UI Evolution, Claymorphism (for patients) | Social Proof-Focused | User Behavior Analytics | Calm blue + health green + trust |
| 10 | Educational App | Claymorphism + Micro-interactions | Vibrant & Block-based, Flat Design | Storytelling-Driven | User Behavior Analytics | Playful colors + clear hierarchy |
| 11 | Creative Agency | Brutalism + Motion-Driven | Retro-Futurism, Storytelling-Driven | Storytelling-Driven | N/A - Portfolio focused | Bold primaries + artistic freedom |
| 12 | Portfolio/Personal | Motion-Driven + Minimalism | Brutalism, Aurora UI | Storytelling-Driven | N/A - Personal branding | Brand primary + artistic interpretation |
| 13 | Gaming | 3D & Hyperrealism + Retro-Futurism | Motion-Driven, Vibrant & Block | Feature-Rich Showcase | N/A - Game focused | Vibrant + neon + immersive colors |
| 14 | Government/Public Service | Accessible & Ethical + Minimalism | Flat Design, Inclusive Design | Minimal & Direct | Executive Dashboard | Professional blue + high contrast |
| 15 | Fintech/Crypto | Glassmorphism + Dark Mode (OLED) | Retro-Futurism, Motion-Driven | Conversion-Optimized | Real-Time Monitoring + Predictive | Dark tech colors + trust + vibrant accents |
| 16 | Social Media App | Vibrant & Block-based + Motion-Driven | Aurora UI, Micro-interactions | Feature-Rich Showcase | User Behavior Analytics | Vibrant + engagement colors |
| 17 | Productivity Tool | Flat Design + Micro-interactions | Minimalism, Soft UI Evolution | Interactive Product Demo | Drill-Down Analytics | Clear hierarchy + functional colors |
| 18 | Design System/Component Library | Minimalism + Accessible & Ethical | Flat Design, Zero Interface | Feature-Rich Showcase | N/A - Dev focused | Clear hierarchy + code-like structure |
| 19 | AI/Chatbot Platform | AI-Native UI + Minimalism | Zero Interface, Glassmorphism | Interactive Product Demo | AI/ML Analytics Dashboard | Neutral + AI Purple (#6366F1) |
| 20 | NFT/Web3 Platform | Cyberpunk UI + Glassmorphism | Aurora UI, 3D & Hyperrealism | Feature-Rich Showcase | Crypto/Blockchain Dashboard | Dark + Neon + Gold (#FFD700) |
| 21 | Creator Economy Platform | Vibrant & Block-based + Bento Box Grid | Motion-Driven, Aurora UI | Social Proof-Focused | User Behavior Analytics | Vibrant + Brand colors |
| 22 | Sustainability/ESG Platform | Organic Biophilic + Minimalism | Accessible & Ethical, Flat Design | Trust & Authority | Energy/Utilities Dashboard | Green (#228B22) + Earth tones |
| 23 | Remote Work/Collaboration Tool | Soft UI Evolution + Minimalism | Glassmorphism, Micro-interactions | Feature-Rich Showcase | Drill-Down Analytics | Calm Blue + Neutral grey |
| 24 | Mental Health App | Neumorphism + Accessible & Ethical | Claymorphism, Soft UI Evolution | Social Proof-Focused | Healthcare Analytics | Calm Pastels + Trust colors |
| 25 | Pet Tech App | Claymorphism + Vibrant & Block-based | Micro-interactions, Flat Design | Storytelling-Driven | User Behavior Analytics | Playful + Warm colors |
| 26 | Smart Home/IoT Dashboard | Glassmorphism + Dark Mode (OLED) | Minimalism, AI-Native UI | Interactive Product Demo | Real-Time Monitoring | Dark + Status indicator colors |
| 27 | EV/Charging Ecosystem | Minimalism + Aurora UI | Glassmorphism, Organic Biophilic | Hero-Centric Design | Energy/Utilities Dashboard | Electric Blue (#009CD1) + Green |
| 28 | Subscription Box Service | Vibrant & Block-based + Motion-Driven | Claymorphism, Aurora UI | Feature-Rich Showcase | E-commerce Analytics | Brand + Excitement colors |
| 29 | Podcast Platform | Dark Mode (OLED) + Minimalism | Motion-Driven, Vibrant & Block-based | Storytelling-Driven | Media/Entertainment Dashboard | Dark + Audio waveform accents |
| 30 | Dating App | Vibrant & Block-based + Motion-Driven | Aurora UI, Glassmorphism | Social Proof-Focused | User Behavior Analytics | Warm + Romantic (Pink/Red gradients) |
| 31 | Micro-Credentials/Badges Platform | Minimalism + Flat Design | Accessible & Ethical, Swiss Modernism 2.0 | Trust & Authority | Education Dashboard | Trust Blue + Gold (#FFD700) |
| 32 | Knowledge Base/Documentation | Minimalism + Accessible & Ethical | Swiss Modernism 2.0, Flat Design | FAQ/Documentation | N/A - Documentation focused | Clean hierarchy + minimal color |
| 33 | Hyperlocal Services | Minimalism + Vibrant & Block-based | Micro-interactions, Flat Design | Conversion-Optimized | Drill-Down Analytics + Map | Location markers + Trust colors |
| 34 | Beauty/Spa/Wellness Service | Soft UI Evolution + Neumorphism | Glassmorphism, Minimalism | Hero-Centric Design + Social Proof | User Behavior Analytics | Soft pastels (Pink #FFB6C1 Sage #90EE90) + Cream + Gold accents |
| 35 | Luxury/Premium Brand | Liquid Glass + Glassmorphism | Minimalism, 3D & Hyperrealism | Storytelling-Driven + Feature-Rich | Sales Intelligence Dashboard | Black + Gold (#FFD700) + White + Minimal accent |
| 36 | Restaurant/Food Service | Vibrant & Block-based + Motion-Driven | Claymorphism, Flat Design | Hero-Centric Design + Conversion | N/A - Booking focused | Warm colors (Orange Red Brown) + appetizing imagery |
| 37 | Fitness/Gym App | Vibrant & Block-based + Dark Mode (OLED) | Motion-Driven, Neumorphism | Feature-Rich Showcase | User Behavior Analytics | Energetic (Orange #FF6B35 Electric Blue) + Dark bg |
| 38 | Real Estate/Property | Glassmorphism + Minimalism | Motion-Driven, 3D & Hyperrealism | Hero-Centric Design + Feature-Rich | Sales Intelligence Dashboard | Trust Blue (#0077B6) + Gold accents + White |
| 39 | Travel/Tourism Agency | Aurora UI + Motion-Driven | Vibrant & Block-based, Glassmorphism | Storytelling-Driven + Hero-Centric | Booking Analytics | Vibrant destination colors + Sky Blue + Warm accents |
| 40 | Hotel/Hospitality | Liquid Glass + Minimalism | Glassmorphism, Soft UI Evolution | Hero-Centric Design + Social Proof | Revenue Management Dashboard | Warm neutrals + Gold (#D4AF37) + Brand accent |
| 41 | Wedding/Event Planning | Soft UI Evolution + Aurora UI | Glassmorphism, Motion-Driven | Storytelling-Driven + Social Proof | N/A - Planning focused | Soft Pink (#FFD6E0) + Gold + Cream + Sage |
| 42 | Legal Services | Trust & Authority + Minimalism | Accessible & Ethical, Swiss Modernism 2.0 | Trust & Authority + Minimal | Case Management Dashboard | Navy Blue (#1E3A5F) + Gold + White |
| 43 | Insurance Platform | Trust & Authority + Flat Design | Accessible & Ethical, Minimalism | Conversion-Optimized + Trust | Claims Analytics Dashboard | Trust Blue (#0066CC) + Green (security) + Neutral |
| 44 | Banking/Traditional Finance | Minimalism + Accessible & Ethical | Trust & Authority, Dark Mode (OLED) | Trust & Authority + Feature-Rich | Financial Dashboard | Navy (#0A1628) + Trust Blue + Gold accents |
| 45 | Online Course/E-learning | Claymorphism + Vibrant & Block-based | Motion-Driven, Flat Design | Feature-Rich Showcase + Social Proof | Education Dashboard | Vibrant learning colors + Progress green |
| 46 | Non-profit/Charity | Accessible & Ethical + Organic Biophilic | Minimalism, Storytelling-Driven | Storytelling-Driven + Trust | Donation Analytics Dashboard | Cause-related colors + Trust + Warm |
| 47 | Music Streaming | Dark Mode (OLED) + Vibrant & Block-based | Motion-Driven, Aurora UI | Feature-Rich Showcase | Media/Entertainment Dashboard | Dark (#121212) + Vibrant accents + Album art colors |
| 48 | Video Streaming/OTT | Dark Mode (OLED) + Motion-Driven | Glassmorphism, Vibrant & Block-based | Hero-Centric Design + Feature-Rich | Media/Entertainment Dashboard | Dark bg + Content poster colors + Brand accent |
| 49 | Job Board/Recruitment | Flat Design + Minimalism | Vibrant & Block-based, Accessible & Ethical | Conversion-Optimized + Feature-Rich | HR Analytics Dashboard | Professional Blue + Success Green + Neutral |
| 50 | Marketplace (P2P) | Vibrant & Block-based + Flat Design | Micro-interactions, Trust & Authority | Feature-Rich Showcase + Social Proof | E-commerce Analytics | Trust colors + Category colors + Success green |
| 51 | Logistics/Delivery | Minimalism + Flat Design | Dark Mode (OLED), Micro-interactions | Feature-Rich Showcase + Conversion | Real-Time Monitoring + Route Analytics | Blue (#2563EB) + Orange (tracking) + Green (delivered) |
| 52 | Agriculture/Farm Tech | Organic Biophilic + Flat Design | Minimalism, Accessible & Ethical | Feature-Rich Showcase + Trust | IoT Sensor Dashboard | Earth Green (#4A7C23) + Brown + Sky Blue |
| 53 | Construction/Architecture | Minimalism + 3D & Hyperrealism | Brutalism, Swiss Modernism 2.0 | Hero-Centric Design + Feature-Rich | Project Management Dashboard | Grey (#4A4A4A) + Orange (safety) + Blueprint Blue |
| 54 | Automotive/Car Dealership | Motion-Driven + 3D & Hyperrealism | Dark Mode (OLED), Glassmorphism | Hero-Centric Design + Feature-Rich | Sales Intelligence Dashboard | Brand colors + Metallic accents + Dark/Light |
| 55 | Photography Studio | Motion-Driven + Minimalism | Aurora UI, Glassmorphism | Storytelling-Driven + Hero-Centric | N/A - Portfolio focused | Black + White + Minimal accent |
| 56 | Coworking Space | Vibrant & Block-based + Glassmorphism | Minimalism, Motion-Driven | Hero-Centric Design + Feature-Rich | Occupancy Dashboard | Energetic colors + Wood tones + Brand accent |
| 57 | Cleaning Service | Soft UI Evolution + Flat Design | Minimalism, Micro-interactions | Conversion-Optimized + Trust | Service Analytics | Fresh Blue (#00B4D8) + Clean White + Green |
| 58 | Home Services (Plumber/Electrician) | Flat Design + Trust & Authority | Minimalism, Accessible & Ethical | Conversion-Optimized + Trust | Service Analytics | Trust Blue + Safety Orange + Professional grey |
| 59 | Childcare/Daycare | Claymorphism + Vibrant & Block-based | Soft UI Evolution, Accessible & Ethical | Social Proof-Focused + Trust | Parent Dashboard | Playful pastels + Safe colors + Warm accents |
| 60 | Senior Care/Elderly | Accessible & Ethical + Soft UI Evolution | Minimalism, Neumorphism | Trust & Authority + Social Proof | Healthcare Analytics | Calm Blue + Warm neutrals + Large text |
| 61 | Medical Clinic | Accessible & Ethical + Minimalism | Neumorphism, Trust & Authority | Trust & Authority + Conversion | Healthcare Analytics | Medical Blue (#0077B6) + Trust White + Calm Green |
| 62 | Pharmacy/Drug Store | Flat Design + Accessible & Ethical | Minimalism, Trust & Authority | Conversion-Optimized + Trust | Inventory Dashboard | Pharmacy Green + Trust Blue + Clean White |
| 63 | Dental Practice | Soft UI Evolution + Minimalism | Accessible & Ethical, Trust & Authority | Social Proof-Focused + Conversion | Patient Analytics | Fresh Blue + White + Smile Yellow accent |
| 64 | Veterinary Clinic | Claymorphism + Accessible & Ethical | Soft UI Evolution, Flat Design | Social Proof-Focused + Trust | Pet Health Dashboard | Caring Blue + Pet-friendly colors + Warm accents |
| 65 | Florist/Plant Shop | Organic Biophilic + Vibrant & Block-based | Aurora UI, Motion-Driven | Hero-Centric Design + Conversion | E-commerce Analytics | Natural Green + Floral pinks/purples + Earth tones |
| 66 | Bakery/Cafe | Vibrant & Block-based + Soft UI Evolution | Claymorphism, Motion-Driven | Hero-Centric Design + Conversion | N/A - Order focused | Warm Brown + Cream + Appetizing accents |
| 67 | Coffee Shop | Minimalism + Organic Biophilic | Soft UI Evolution, Flat Design | Hero-Centric Design + Conversion | N/A - Order focused | Coffee Brown (#6F4E37) + Cream + Warm accents |
| 68 | Brewery/Winery | Motion-Driven + Storytelling-Driven | Dark Mode (OLED), Organic Biophilic | Storytelling-Driven + Hero-Centric | N/A - E-commerce focused | Deep amber/burgundy + Gold + Craft aesthetic |
| 69 | Airline | Minimalism + Glassmorphism | Motion-Driven, Accessible & Ethical | Conversion-Optimized + Feature-Rich | Operations Dashboard | Sky Blue + Brand colors + Trust accents |
| 70 | News/Media Platform | Minimalism + Flat Design | Dark Mode (OLED), Accessible & Ethical | Hero-Centric Design + Feature-Rich | Media Analytics Dashboard | Brand colors + High contrast + Category colors |
| 71 | Magazine/Blog | Swiss Modernism 2.0 + Motion-Driven | Minimalism, Aurora UI | Storytelling-Driven + Hero-Centric | Content Analytics | Editorial colors + Brand primary + Clean white |
| 72 | Freelancer Platform | Flat Design + Minimalism | Vibrant & Block-based, Micro-interactions | Feature-Rich Showcase + Conversion | Marketplace Analytics | Professional Blue + Success Green + Neutral |
| 73 | Consulting Firm | Trust & Authority + Minimalism | Swiss Modernism 2.0, Accessible & Ethical | Trust & Authority + Feature-Rich | N/A - Lead generation | Navy + Gold + Professional grey |
| 74 | Marketing Agency | Brutalism + Motion-Driven | Vibrant & Block-based, Aurora UI | Storytelling-Driven + Feature-Rich | Campaign Analytics | Bold brand colors + Creative freedom |
| 75 | Event Management | Vibrant & Block-based + Motion-Driven | Glassmorphism, Aurora UI | Hero-Centric Design + Feature-Rich | Event Analytics | Event theme colors + Excitement accents |
| 76 | Conference/Webinar Platform | Glassmorphism + Minimalism | Motion-Driven, Flat Design | Feature-Rich Showcase + Conversion | Attendee Analytics | Professional Blue + Video accent + Brand |
| 77 | Membership/Community | Vibrant & Block-based + Soft UI Evolution | Bento Box Grid, Micro-interactions | Social Proof-Focused + Conversion | Community Analytics | Community brand colors + Engagement accents |
| 78 | Newsletter Platform | Minimalism + Flat Design | Swiss Modernism 2.0, Accessible & Ethical | Minimal & Direct + Conversion | Email Analytics | Brand primary + Clean white + CTA accent |
| 79 | Digital Products/Downloads | Vibrant & Block-based + Motion-Driven | Glassmorphism, Bento Box Grid | Feature-Rich Showcase + Conversion | E-commerce Analytics | Product category colors + Brand + Success green |
| 80 | Church/Religious Organization | Accessible & Ethical + Soft UI Evolution | Minimalism, Trust & Authority | Hero-Centric Design + Social Proof | N/A - Community focused | Warm Gold + Deep Purple/Blue + White |
| 81 | Sports Team/Club | Vibrant & Block-based + Motion-Driven | Dark Mode (OLED), 3D & Hyperrealism | Hero-Centric Design + Feature-Rich | Performance Analytics | Team colors + Energetic accents |
| 82 | Museum/Gallery | Minimalism + Motion-Driven | Swiss Modernism 2.0, 3D & Hyperrealism | Storytelling-Driven + Feature-Rich | Visitor Analytics | Art-appropriate neutrals + Exhibition accents |
| 83 | Theater/Cinema | Dark Mode (OLED) + Motion-Driven | Vibrant & Block-based, Glassmorphism | Hero-Centric Design + Conversion | Booking Analytics | Dark + Spotlight accents + Gold |
| 84 | Language Learning App | Claymorphism + Vibrant & Block-based | Micro-interactions, Flat Design | Feature-Rich Showcase + Social Proof | Learning Analytics | Playful colors + Progress indicators + Country flags |
| 85 | Coding Bootcamp | Dark Mode (OLED) + Minimalism | Cyberpunk UI, Flat Design | Feature-Rich Showcase + Social Proof | Student Analytics | Code editor colors + Brand + Success green |
| 86 | Cybersecurity Platform | Cyberpunk UI + Dark Mode (OLED) | Neubrutalism, Minimal & Direct | Trust & Authority + Real-Time | Real-Time Monitoring + Heat Map | Matrix Green + Deep Black + Terminal feel |
| 87 | Developer Tool / IDE | Dark Mode (OLED) + Minimalism | Flat Design, Bento Box Grid | Minimal & Direct + Documentation | Real-Time Monitor + Terminal | Dark syntax theme colors + Blue focus |
| 88 | Biotech / Life Sciences | Glassmorphism + Clean Science | Minimalism, Organic Biophilic | Storytelling-Driven + Research | Data-Dense + Predictive | Sterile White + DNA Blue + Life Green |
| 89 | Space Tech / Aerospace | Holographic / HUD + Dark Mode | Glassmorphism, 3D & Hyperrealism | Immersive Experience + Hero | Real-Time Monitoring + 3D | Deep Space Black + Star White + Metallic |
| 90 | Architecture / Interior | Exaggerated Minimalism + High Imagery | Swiss Modernism 2.0, Parallax | Portfolio Grid + Visuals | Project Management + Gallery | Monochrome + Gold Accent + High Imagery |
| 91 | Quantum Computing Interface | Holographic / HUD + Dark Mode | Glassmorphism, Spatial UI | Immersive/Interactive Experience | 3D Spatial Data + Real-Time Monitor | Quantum Blue #00FFFF + Deep Black + Interference patterns |
| 92 | Biohacking / Longevity App | Biomimetic / Organic 2.0 | Minimalism, Dark Mode (OLED) | Data-Dense + Storytelling | Real-Time Monitor + Biological Data | Cellular Pink/Red + DNA Blue + Clean White |
| 93 | Autonomous Drone Fleet Manager | HUD / Sci-Fi FUI | Real-Time Monitor, Spatial UI | Real-Time Monitor | Geographic + Real-Time | Tactical Green #00FF00 + Alert Red + Map Dark |
| 94 | Generative Art Platform | Minimalism (Frame) + Gen Z Chaos | Masonry Grid, Dark Mode | Bento Grid Showcase | Gallery / Portfolio | Neutral #F5F5F5 (Canvas) + User Content |
| 95 | Spatial Computing OS / App | Spatial UI (VisionOS) | Glassmorphism, 3D & Hyperrealism | Immersive/Interactive Experience | Spatial Dashboard | Frosted Glass + System Colors + Depth |
| 96 | Sustainable Energy / Climate Tech | Organic Biophilic + E-Ink / Paper | Data-Dense, Swiss Modernism | Interactive Demo + Data | Energy/Utilities Dashboard | Earth Green + Sky Blue + Solar Yellow |
