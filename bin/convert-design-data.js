#!/usr/bin/env node

/**
 * Convert UI/UX Pro Max CSV data files to MIKE design knowledge base markdown.
 *
 * Usage: node bin/convert-design-data.js [--source <dir>] [--output <dir>]
 *
 * Defaults:
 *   --source  _references/ui-ux-pro-max/src/ui-ux-pro-max/data
 *   --output  references/design
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgRoot = path.join(__dirname, '..');

// ─── CLI args ────────────────────────────────────────────────────────
const args = process.argv.slice(2);
function argVal(flag, fallback) {
  const idx = args.indexOf(flag);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : fallback;
}

const SOURCE = path.resolve(pkgRoot, argVal('--source', '_references/ui-ux-pro-max/src/ui-ux-pro-max/data'));
const OUTPUT = path.resolve(pkgRoot, argVal('--output', 'references/design'));

// ─── CSV parser (handles quoted fields with commas) ──────────────────
function parseCSV(text) {
  const lines = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      lines.push(current);
      current = '';
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      lines.push(current);
      current = '';
      // Mark row boundary
      lines.push('\n');
    } else {
      current += ch;
    }
  }
  if (current) lines.push(current);

  // Reconstruct rows from flat field list
  const rows = [];
  let row = [];
  for (const item of lines) {
    if (item === '\n') {
      if (row.length > 0) rows.push(row);
      row = [];
    } else {
      row.push(item.trim());
    }
  }
  if (row.length > 0) rows.push(row);

  if (rows.length === 0) return [];
  const headers = rows[0];
  return rows.slice(1).map(r => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = r[i] || ''; });
    return obj;
  });
}

function readCSV(filename) {
  const fp = path.join(SOURCE, filename);
  if (!fs.existsSync(fp)) {
    console.warn(`  ⚠ Missing: ${fp}`);
    return [];
  }
  return parseCSV(fs.readFileSync(fp, 'utf8'));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeOut(relPath, content) {
  const fp = path.join(OUTPUT, relPath);
  ensureDir(path.dirname(fp));
  fs.writeFileSync(fp, content, 'utf8');
  console.log(`  ✓ ${relPath} (${content.split('\n').length} lines)`);
}

// ─── Converters ──────────────────────────────────────────────────────

function convertStyles() {
  const rows = readCSV('styles.csv');
  let md = `# UI Styles Catalog

> 67 UI styles with structured metadata for design system generation.
> Source: UI/UX Pro Max (converted to MIKE format).

---

`;
  for (const r of rows) {
    md += `### Style ${r.No}: ${r['Style Category']}

| Field | Value |
|-------|-------|
| Type | ${r.Type} |
| Keywords | ${r.Keywords} |
| Primary Colors | ${r['Primary Colors']} |
| Secondary Colors | ${r['Secondary Colors']} |
| Effects | ${r['Effects & Animation']} |
| Best For | ${r['Best For']} |
| Do Not Use For | ${r['Do Not Use For']} |
| Light Mode | ${r['Light Mode ✓']} |
| Dark Mode | ${r['Dark Mode ✓']} |
| Performance | ${r.Performance} |
| Accessibility | ${r.Accessibility} |
| Mobile | ${r['Mobile-Friendly']} |
| Conversion | ${r['Conversion-Focused']} |
| Complexity | ${r.Complexity} |
| CSS Keywords | ${r['CSS/Technical Keywords']} |
| Design Tokens | ${r['Design System Variables']} |

---

`;
  }
  writeOut('styles.md', md);
}

function convertColors() {
  const rows = readCSV('colors.csv');
  let md = `# Color Palettes

> 96 industry-specific color palettes with CSS variables and hex values.
> Source: UI/UX Pro Max (converted to MIKE format).

---

`;
  for (const r of rows) {
    md += `### Palette ${r.No}: ${r['Product Type']}

| Role | Hex | CSS Variable |
|------|-----|-------------|
| Primary | ${r['Primary (Hex)']} | --color-primary |
| Secondary | ${r['Secondary (Hex)']} | --color-secondary |
| CTA | ${r['CTA (Hex)']} | --color-cta |
| Background | ${r['Background (Hex)']} | --color-bg |
| Text | ${r['Text (Hex)']} | --color-text |
| Border | ${r['Border (Hex)']} | --color-border |

**Notes:** ${r.Notes}

---

`;
  }
  writeOut('color-palettes.md', md);
}

function convertTypography() {
  const rows = readCSV('typography.csv');
  let md = `# Typography Pairings

> 57 font pairings with heading + body combinations, mood keywords, and Google Fonts URLs.
> Source: UI/UX Pro Max (converted to MIKE format).

---

`;
  for (const r of rows) {
    md += `### Pairing ${r.No}: ${r['Font Pairing Name']}

| Field | Value |
|-------|-------|
| Category | ${r.Category} |
| Heading Font | ${r['Heading Font']} |
| Body Font | ${r['Body Font']} |
| Mood | ${r['Mood/Style Keywords']} |
| Best For | ${r['Best For']} |
| Google Fonts | ${r['Google Fonts URL']} |
| CSS Import | \`${r['CSS Import']}\` |
| Tailwind Config | \`${r['Tailwind Config']}\` |
| Notes | ${r.Notes} |

---

`;
  }
  writeOut('typography.md', md);
}

function convertIndustryRules() {
  const rows = readCSV('ui-reasoning.csv');
  let md = `# Industry Design Rules

> 100 industry-to-design mapping rules for automated style/color/typography selection.
> Source: UI/UX Pro Max (converted to MIKE format).

---

`;
  for (const r of rows) {
    md += `### Rule ${r.No}: ${r.UI_Category}

| Field | Value |
|-------|-------|
| Category | ${r.UI_Category} |
| Recommended Pattern | ${r.Recommended_Pattern} |
| Style Priority | ${r.Style_Priority} |
| Color Mood | ${r.Color_Mood} |
| Typography Mood | ${r.Typography_Mood} |
| Key Effects | ${r.Key_Effects} |
| Anti-Patterns | ${r.Anti_Patterns} |
| Decision Rules | \`${r.Decision_Rules}\` |
| Severity | ${r.Severity} |

---

`;
  }

  // Merge products.csv data as a secondary index
  const products = readCSV('products.csv');
  if (products.length > 0) {
    md += `\n## Product-to-Style Index\n\n`;
    md += `| # | Product Type | Primary Style | Secondary Styles | Landing Pattern | Dashboard Style | Color Focus |\n`;
    md += `|---|-------------|--------------|-----------------|----------------|----------------|-------------|\n`;
    for (const p of products) {
      md += `| ${p.No} | ${p['Product Type']} | ${p['Primary Style Recommendation']} | ${p['Secondary Styles']} | ${p['Landing Page Pattern']} | ${p['Dashboard Style (if applicable)']} | ${p['Color Palette Focus']} |\n`;
    }
  }
  writeOut('industry-rules.md', md);
}

function convertLanding() {
  const rows = readCSV('landing.csv');
  let md = `# Landing Page Patterns

> Landing page archetypes with section order, CTA placement, color strategy, and conversion optimization.
> Source: UI/UX Pro Max (converted to MIKE format).

---

`;
  for (const r of rows) {
    md += `### Pattern ${r.No}: ${r['Pattern Name']}

| Field | Value |
|-------|-------|
| Keywords | ${r.Keywords} |
| Section Order | ${r['Section Order']} |
| Primary CTA Placement | ${r['Primary CTA Placement']} |
| Color Strategy | ${r['Color Strategy']} |
| Recommended Effects | ${r['Recommended Effects']} |
| Conversion Optimization | ${r['Conversion Optimization']} |

---

`;
  }
  writeOut('landing-patterns.md', md);
}

function convertAntiPatterns() {
  const rows = readCSV('ux-guidelines.csv');
  let md = `# UX Anti-Patterns & Guidelines

> UX guidelines and anti-patterns organized by category for design compliance verification.
> Source: UI/UX Pro Max (converted to MIKE format).

---

`;
  // Group by category
  const groups = {};
  for (const r of rows) {
    const cat = r.Category || 'General';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(r);
  }

  for (const [cat, items] of Object.entries(groups)) {
    md += `## ${cat}\n\n`;
    for (const r of items) {
      md += `### ${r.No}. ${r.Issue} (${r.Platform})

${r.Description}

| | Guidance |
|---|---------|
| **Do** | ${r.Do} |
| **Don't** | ${r["Don't"]} |
| **Good** | \`${r['Code Example Good'] || r['Code Good'] || ''}\` |
| **Bad** | \`${r['Code Example Bad'] || r['Code Bad'] || ''}\` |
| **Severity** | ${r.Severity} |

`;
    }
    md += `---\n\n`;
  }
  writeOut('anti-patterns.md', md);
}

function convertDashboardPatterns() {
  // Dashboard patterns are derived from styles.csv — styles that reference dashboards
  const rows = readCSV('styles.csv');
  const dashStyles = rows.filter(r =>
    (r['Best For'] || '').toLowerCase().includes('dashboard') ||
    (r.Keywords || '').toLowerCase().includes('dashboard')
  );

  let md = `# Dashboard Patterns

> Dashboard archetypes extracted from the styles catalog, focused on data presentation and admin interfaces.
> Source: UI/UX Pro Max (converted to MIKE format).

---

`;
  const archetypes = [
    { name: 'Data-Dense', desc: 'Maximum information density with clear hierarchy. Uses compact spacing, small fonts, and subtle separators.', styles: ['Minimalism', 'Flat Design', 'Data Visualization'], bestFor: 'Analytics, monitoring, financial dashboards' },
    { name: 'Executive', desc: 'High-level KPI focus with large numbers, sparklines, and clean whitespace.', styles: ['Minimalism', 'Glassmorphism'], bestFor: 'C-suite dashboards, business intelligence' },
    { name: 'Real-Time Monitoring', desc: 'Live data feeds, auto-updating charts, status indicators. Optimized for dark mode.', styles: ['Dark Mode UI', 'Data Visualization'], bestFor: 'DevOps, IoT, server monitoring' },
    { name: 'Admin Panel', desc: 'CRUD-focused with tables, filters, and bulk actions. Sidebar navigation.', styles: ['Flat Design', 'Minimalism'], bestFor: 'CMS, user management, content moderation' },
    { name: 'Analytics', desc: 'Chart-heavy with interactive filtering, date range pickers, and drill-down.', styles: ['Data Visualization', 'Glassmorphism'], bestFor: 'Marketing analytics, sales reports' },
    { name: 'Project Management', desc: 'Kanban boards, Gantt charts, task lists. Drag-and-drop heavy.', styles: ['Flat Design', 'Micro-interactions'], bestFor: 'PM tools, issue trackers, sprint boards' },
    { name: 'E-Commerce Admin', desc: 'Order management, inventory, sales charts. Multi-panel layout.', styles: ['Flat Design', 'Minimalism'], bestFor: 'Store management, marketplace admin' },
    { name: 'Social Media', desc: 'Feed-based, engagement metrics, content calendar. Card-heavy layout.', styles: ['Soft UI Evolution', 'Micro-interactions'], bestFor: 'Social media management, community dashboards' },
    { name: 'Healthcare', desc: 'Patient data, vitals, appointment scheduling. HIPAA-aware design.', styles: ['Minimalism', 'Accessible Design'], bestFor: 'EHR, clinic management, telemedicine' },
    { name: 'Financial', desc: 'Portfolio views, transaction tables, risk indicators. Trust-focused colors.', styles: ['Minimalism', 'Data Visualization'], bestFor: 'Banking, trading, investment platforms' },
  ];

  for (let i = 0; i < archetypes.length; i++) {
    const a = archetypes[i];
    md += `### ${i + 1}. ${a.name}

${a.desc}

| Field | Value |
|-------|-------|
| Recommended Styles | ${a.styles.join(', ')} |
| Best For | ${a.bestFor} |

---

`;
  }

  if (dashStyles.length > 0) {
    md += `## Dashboard-Compatible Styles from Catalog\n\n`;
    md += `| # | Style | Keywords | Performance | Accessibility |\n`;
    md += `|---|-------|----------|-------------|---------------|\n`;
    for (const s of dashStyles) {
      md += `| ${s.No} | ${s['Style Category']} | ${s.Keywords} | ${s.Performance} | ${s.Accessibility} |\n`;
    }
  }

  writeOut('dashboard-patterns.md', md);
}

function convertDesignChecklist() {
  let md = `# Design Verification Checklist

> Pre-delivery design verification items for the VERIFY step.
> Used by \`mike-verifier\` during design compliance checks (Layer 4).

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
- [ ] Animations respect \`prefers-reduced-motion\`
- [ ] Custom fonts loaded with \`font-display: swap\`
`;
  writeOut('design-checklist.md', md);
}

function convertStack(csvFile, outputFile, title) {
  const rows = readCSV(`stacks/${csvFile}`);
  if (rows.length === 0) return;

  let md = `# ${title} — Design Guidelines

> Stack-specific design implementation guidelines.
> Source: UI/UX Pro Max (converted to MIKE format).

---

`;
  // Group by category
  const groups = {};
  for (const r of rows) {
    const cat = r.Category || 'General';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(r);
  }

  for (const [cat, items] of Object.entries(groups)) {
    md += `## ${cat}\n\n`;
    for (const r of items) {
      md += `### ${r.Guideline}

${r.Description}

| | Guidance |
|---|---------|
| **Do** | ${r.Do} |
| **Don't** | ${r["Don't"]} |
| **Good** | \`${r['Code Good'] || ''}\` |
| **Bad** | \`${r['Code Bad'] || ''}\` |
| **Severity** | ${r.Severity} |
${r['Docs URL'] ? `| **Docs** | ${r['Docs URL']} |` : ''}

`;
    }
  }
  writeOut(`stacks/${outputFile}`, md);
}

// ─── Main ────────────────────────────────────────────────────────────
console.log('MIKE Design Knowledge Base — CSV → Markdown Converter');
console.log(`  Source: ${SOURCE}`);
console.log(`  Output: ${OUTPUT}\n`);

if (!fs.existsSync(SOURCE)) {
  console.error(`ERROR: Source directory not found: ${SOURCE}`);
  console.error('Clone ui-ux-pro-max to _references/ first.');
  process.exit(1);
}

ensureDir(OUTPUT);
ensureDir(path.join(OUTPUT, 'stacks'));

convertStyles();
convertColors();
convertTypography();
convertIndustryRules();
convertLanding();
convertAntiPatterns();
convertDashboardPatterns();
convertDesignChecklist();

// Stack-specific guides
convertStack('html-tailwind.csv', 'html-tailwind.md', 'HTML + Tailwind CSS');
convertStack('react.csv', 'react-shadcn.md', 'React + shadcn/ui');
convertStack('nextjs.csv', 'nextjs.md', 'Next.js');
convertStack('swiftui.csv', 'swiftui.md', 'SwiftUI');
convertStack('flutter.csv', 'flutter.md', 'Flutter');
convertStack('react-native.csv', 'react-native.md', 'React Native');
convertStack('vue.csv', 'vue-nuxt.md', 'Vue / Nuxt');

console.log('\nDone. Design knowledge base generated.');
