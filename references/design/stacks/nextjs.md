# Next.js — Design Guidelines

> Stack-specific design implementation guidelines.
> Source: UI/UX Pro Max (converted to MIKE format).

---

## Routing

### Use App Router for new projects

App Router is the recommended approach in Next.js 14+

| | Guidance |
|---|---------|
| **Do** | app/ directory with page.tsx |
| **Don't** | pages/ for new projects |
| **Good** | `app/dashboard/page.tsx` |
| **Bad** | `pages/dashboard.tsx` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app |

### Use file-based routing

Create routes by adding files in app directory

| | Guidance |
|---|---------|
| **Do** | page.tsx for routes layout.tsx for layouts |
| **Don't** | Manual route configuration |
| **Good** | `app/blog/[slug]/page.tsx` |
| **Bad** | `Custom router setup` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/routing |

### Colocate related files

Keep components styles tests with their routes

| | Guidance |
|---|---------|
| **Do** | Component files alongside page.tsx |
| **Don't** | Separate components folder |
| **Good** | `app/dashboard/_components/` |
| **Bad** | `components/dashboard/` |
| **Severity** | Low |


### Use route groups for organization

Group routes without affecting URL

| | Guidance |
|---|---------|
| **Do** | Parentheses for route groups |
| **Don't** | Nested folders affecting URL |
| **Good** | `(marketing)/about/page.tsx` |
| **Bad** | `marketing/about/page.tsx` |
| **Severity** | Low |
| **Docs** | https://nextjs.org/docs/app/building-your-application/routing/route-groups |

### Handle loading states

Use loading.tsx for route loading UI

| | Guidance |
|---|---------|
| **Do** | loading.tsx alongside page.tsx |
| **Don't** | Manual loading state management |
| **Good** | `app/dashboard/loading.tsx` |
| **Bad** | `useState for loading in page` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming |

### Handle errors with error.tsx

Catch errors at route level

| | Guidance |
|---|---------|
| **Do** | error.tsx with reset function |
| **Don't** | try/catch in every component |
| **Good** | `app/dashboard/error.tsx` |
| **Bad** | `try/catch in page component` |
| **Severity** | High |
| **Docs** | https://nextjs.org/docs/app/building-your-application/routing/error-handling |

## Rendering

### Use Server Components by default

Server Components reduce client JS bundle

| | Guidance |
|---|---------|
| **Do** | Keep components server by default |
| **Don't** | Add 'use client' unnecessarily |
| **Good** | `export default function Page()` |
| **Bad** | `('use client') for static content` |
| **Severity** | High |
| **Docs** | https://nextjs.org/docs/app/building-your-application/rendering/server-components |

### Mark Client Components explicitly

'use client' for interactive components

| | Guidance |
|---|---------|
| **Do** | Add 'use client' only when needed |
| **Don't** | Server Component with hooks/events |
| **Good** | `('use client') for onClick useState` |
| **Bad** | `No directive with useState` |
| **Severity** | High |
| **Docs** | https://nextjs.org/docs/app/building-your-application/rendering/client-components |

### Push Client Components down

Keep Client Components as leaf nodes

| | Guidance |
|---|---------|
| **Do** | Client wrapper for interactive parts only |
| **Don't** | Mark page as Client Component |
| **Good** | `<InteractiveButton/> in Server Page` |
| **Bad** | `('use client') on page.tsx` |
| **Severity** | High |


### Use streaming for better UX

Stream content with Suspense boundaries

| | Guidance |
|---|---------|
| **Do** | Suspense for slow data fetches |
| **Don't** | Wait for all data before render |
| **Good** | `<Suspense><SlowComponent/></Suspense>` |
| **Bad** | `await allData then render` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming |

### Choose correct rendering strategy

SSG for static SSR for dynamic ISR for semi-static

| | Guidance |
|---|---------|
| **Do** | generateStaticParams for known paths |
| **Don't** | SSR for static content |
| **Good** | `export const revalidate = 3600` |
| **Bad** | `fetch without cache config` |
| **Severity** | Medium |


## DataFetching

### Fetch data in Server Components

Fetch directly in async Server Components

| | Guidance |
|---|---------|
| **Do** | async function Page() { const data = await fetch() } |
| **Don't** | useEffect for initial data |
| **Good** | `const data = await fetch(url)` |
| **Bad** | `useEffect(() => fetch(url))` |
| **Severity** | High |
| **Docs** | https://nextjs.org/docs/app/building-your-application/data-fetching |

### Configure caching explicitly (Next.js 15+)

Next.js 15 changed defaults to uncached for fetch

| | Guidance |
|---|---------|
| **Do** | Explicitly set cache: 'force-cache' for static data |
| **Don't** | Assume default is cached (it's not in Next.js 15) |
| **Good** | `fetch(url { cache: 'force-cache' })` |
| **Bad** | `fetch(url) // Uncached in v15` |
| **Severity** | High |
| **Docs** | https://nextjs.org/docs/app/building-your-application/upgrading/version-15 |

### Deduplicate fetch requests

React and Next.js dedupe same requests

| | Guidance |
|---|---------|
| **Do** | Same fetch call in multiple components |
| **Don't** | Manual request deduplication |
| **Good** | `Multiple components fetch same URL` |
| **Bad** | `Custom cache layer` |
| **Severity** | Low |


### Use Server Actions for mutations

Server Actions for form submissions

| | Guidance |
|---|---------|
| **Do** | action={serverAction} in forms |
| **Don't** | API route for every mutation |
| **Good** | `<form action={createPost}>` |
| **Bad** | `<form onSubmit={callApiRoute}>` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations |

### Revalidate data appropriately

Use revalidatePath/revalidateTag after mutations

| | Guidance |
|---|---------|
| **Do** | Revalidate after Server Action |
| **Don't** | 'use client' with manual refetch |
| **Good** | `revalidatePath('/posts')` |
| **Bad** | `router.refresh() everywhere` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/caching#revalidating |

## Images

### Use next/image for optimization

Automatic image optimization and lazy loading

| | Guidance |
|---|---------|
| **Do** | <Image> component for all images |
| **Don't** | <img> tags directly |
| **Good** | `<Image src={} alt={} width={} height={}>` |
| **Bad** | `<img src={}/>` |
| **Severity** | High |
| **Docs** | https://nextjs.org/docs/app/building-your-application/optimizing/images |

### Provide width and height

Prevent layout shift with dimensions

| | Guidance |
|---|---------|
| **Do** | width and height props or fill |
| **Don't** | Missing dimensions |
| **Good** | `<Image width={400} height={300}/>` |
| **Bad** | `<Image src={url}/>` |
| **Severity** | High |


### Use fill for responsive images

Fill container with object-fit

| | Guidance |
|---|---------|
| **Do** | fill prop with relative parent |
| **Don't** | Fixed dimensions for responsive |
| **Good** | `<Image fill className="object-cover"/>` |
| **Bad** | `<Image width={window.width}/>` |
| **Severity** | Medium |


### Configure remote image domains

Whitelist external image sources

| | Guidance |
|---|---------|
| **Do** | remotePatterns in next.config.js |
| **Don't** | Allow all domains |
| **Good** | `remotePatterns: [{ hostname: 'cdn.example.com' }]` |
| **Bad** | `domains: ['*']` |
| **Severity** | High |
| **Docs** | https://nextjs.org/docs/app/api-reference/components/image#remotepatterns |

### Use priority for LCP images

Mark above-fold images as priority

| | Guidance |
|---|---------|
| **Do** | priority prop on hero images |
| **Don't** | All images with priority |
| **Good** | `<Image priority src={hero}/>` |
| **Bad** | `<Image priority/> on every image` |
| **Severity** | Medium |


## Fonts

### Use next/font for fonts

Self-hosted fonts with zero layout shift

| | Guidance |
|---|---------|
| **Do** | next/font/google or next/font/local |
| **Don't** | External font links |
| **Good** | `import { Inter } from 'next/font/google'` |
| **Bad** | `<link href="fonts.googleapis.com"/>` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/optimizing/fonts |

### Apply font to layout

Set font in root layout for consistency

| | Guidance |
|---|---------|
| **Do** | className on body in layout.tsx |
| **Don't** | Font in individual pages |
| **Good** | `<body className={inter.className}>` |
| **Bad** | `Each page imports font` |
| **Severity** | Low |


### Use variable fonts

Variable fonts reduce bundle size

| | Guidance |
|---|---------|
| **Do** | Single variable font file |
| **Don't** | Multiple font weights as files |
| **Good** | `Inter({ subsets: ['latin'] })` |
| **Bad** | `Inter_400 Inter_500 Inter_700` |
| **Severity** | Low |


## Metadata

### Use generateMetadata for dynamic

Generate metadata based on params

| | Guidance |
|---|---------|
| **Do** | export async function generateMetadata() |
| **Don't** | Hardcoded metadata everywhere |
| **Good** | `generateMetadata({ params })` |
| **Bad** | `export const metadata = {}` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/optimizing/metadata |

### Include OpenGraph images

Add OG images for social sharing

| | Guidance |
|---|---------|
| **Do** | opengraph-image.tsx or og property |
| **Don't** | Missing social preview images |
| **Good** | `opengraph: { images: ['/og.png'] }` |
| **Bad** | `No OG configuration` |
| **Severity** | Medium |


### Use metadata API

Export metadata object for static metadata

| | Guidance |
|---|---------|
| **Do** | export const metadata = {} |
| **Don't** | Manual head tags |
| **Good** | `export const metadata = { title: 'Page' }` |
| **Bad** | `<head><title>Page</title></head>` |
| **Severity** | Medium |


## API

### Use Route Handlers for APIs

app/api routes for API endpoints

| | Guidance |
|---|---------|
| **Do** | app/api/users/route.ts |
| **Don't** | pages/api for new projects |
| **Good** | `export async function GET(request)` |
| **Bad** | `export default function handler` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/routing/route-handlers |

### Return proper Response objects

Use NextResponse for API responses

| | Guidance |
|---|---------|
| **Do** | NextResponse.json() for JSON |
| **Don't** | Plain objects or res.json() |
| **Good** | `return NextResponse.json({ data })` |
| **Bad** | `return { data }` |
| **Severity** | Medium |


### Handle HTTP methods explicitly

Export named functions for methods

| | Guidance |
|---|---------|
| **Do** | Export GET POST PUT DELETE |
| **Don't** | Single handler for all methods |
| **Good** | `export async function POST()` |
| **Bad** | `switch(req.method)` |
| **Severity** | Low |


### Validate request body

Validate input before processing

| | Guidance |
|---|---------|
| **Do** | Zod or similar for validation |
| **Don't** | Trust client input |
| **Good** | `const body = schema.parse(await req.json())` |
| **Bad** | `const body = await req.json()` |
| **Severity** | High |


## Middleware

### Use middleware for auth

Protect routes with middleware.ts

| | Guidance |
|---|---------|
| **Do** | middleware.ts at root |
| **Don't** | Auth check in every page |
| **Good** | `export function middleware(request)` |
| **Bad** | `if (!session) redirect in page` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/routing/middleware |

### Match specific paths

Configure middleware matcher

| | Guidance |
|---|---------|
| **Do** | config.matcher for specific routes |
| **Don't** | Run middleware on all routes |
| **Good** | `matcher: ['/dashboard/:path*']` |
| **Bad** | `No matcher config` |
| **Severity** | Medium |


### Keep middleware edge-compatible

Middleware runs on Edge runtime

| | Guidance |
|---|---------|
| **Do** | Edge-compatible code only |
| **Don't** | Node.js APIs in middleware |
| **Good** | `Edge-compatible auth check` |
| **Bad** | `fs.readFile in middleware` |
| **Severity** | High |


## Environment

### Use NEXT_PUBLIC prefix

Client-accessible env vars need prefix

| | Guidance |
|---|---------|
| **Do** | NEXT_PUBLIC_ for client vars |
| **Don't** | Server vars exposed to client |
| **Good** | `NEXT_PUBLIC_API_URL` |
| **Bad** | `API_SECRET in client code` |
| **Severity** | High |
| **Docs** | https://nextjs.org/docs/app/building-your-application/configuring/environment-variables |

### Validate env vars

Check required env vars exist

| | Guidance |
|---|---------|
| **Do** | Validate on startup |
| **Don't** | Undefined env at runtime |
| **Good** | `if (!process.env.DATABASE_URL) throw` |
| **Bad** | `process.env.DATABASE_URL (might be undefined)` |
| **Severity** | High |


### Use .env.local for secrets

Local env file for development secrets

| | Guidance |
|---|---------|
| **Do** | .env.local gitignored |
| **Don't** | Secrets in .env committed |
| **Good** | `.env.local with secrets` |
| **Bad** | `.env with DATABASE_PASSWORD` |
| **Severity** | High |


## Performance

### Analyze bundle size

Use @next/bundle-analyzer

| | Guidance |
|---|---------|
| **Do** | Bundle analyzer in dev |
| **Don't** | Ship large bundles blindly |
| **Good** | `ANALYZE=true npm run build` |
| **Bad** | `No bundle analysis` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer |

### Use dynamic imports

Code split with next/dynamic

| | Guidance |
|---|---------|
| **Do** | dynamic() for heavy components |
| **Don't** | Import everything statically |
| **Good** | `const Chart = dynamic(() => import('./Chart'))` |
| **Bad** | `import Chart from './Chart'` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading |

### Avoid layout shifts

Reserve space for dynamic content

| | Guidance |
|---|---------|
| **Do** | Skeleton loaders aspect ratios |
| **Don't** | Content popping in |
| **Good** | `<Skeleton className="h-48"/>` |
| **Bad** | `No placeholder for async content` |
| **Severity** | High |


### Use Partial Prerendering

Combine static and dynamic in one route

| | Guidance |
|---|---------|
| **Do** | Static shell with Suspense holes |
| **Don't** | Full dynamic or static pages |
| **Good** | `Static header + dynamic content` |
| **Bad** | `Entire page SSR` |
| **Severity** | Low |
| **Docs** | https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering |

## Link

### Use next/link for navigation

Client-side navigation with prefetching

| | Guidance |
|---|---------|
| **Do** | <Link href=""> for internal links |
| **Don't** | <a> for internal navigation |
| **Good** | `<Link href="/about">About</Link>` |
| **Bad** | `<a href="/about">About</a>` |
| **Severity** | High |
| **Docs** | https://nextjs.org/docs/app/api-reference/components/link |

### Prefetch strategically

Control prefetching behavior

| | Guidance |
|---|---------|
| **Do** | prefetch={false} for low-priority |
| **Don't** | Prefetch all links |
| **Good** | `<Link prefetch={false}>` |
| **Bad** | `Default prefetch on every link` |
| **Severity** | Low |


### Use scroll option appropriately

Control scroll behavior on navigation

| | Guidance |
|---|---------|
| **Do** | scroll={false} for tabs pagination |
| **Don't** | Always scroll to top |
| **Good** | `<Link scroll={false}>` |
| **Bad** | `Manual scroll management` |
| **Severity** | Low |


## Config

### Use next.config.js correctly

Configure Next.js behavior

| | Guidance |
|---|---------|
| **Do** | Proper config options |
| **Don't** | Deprecated or wrong options |
| **Good** | `images: { remotePatterns: [] }` |
| **Bad** | `images: { domains: [] }` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/api-reference/next-config-js |

### Enable strict mode

Catch potential issues early

| | Guidance |
|---|---------|
| **Do** | reactStrictMode: true |
| **Don't** | Strict mode disabled |
| **Good** | `reactStrictMode: true` |
| **Bad** | `reactStrictMode: false` |
| **Severity** | Medium |


### Configure redirects and rewrites

Use config for URL management

| | Guidance |
|---|---------|
| **Do** | redirects() rewrites() in config |
| **Don't** | Manual redirect handling |
| **Good** | `redirects: async () => [...]` |
| **Bad** | `res.redirect in pages` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/api-reference/next-config-js/redirects |

## Deployment

### Use Vercel for easiest deploy

Vercel optimized for Next.js

| | Guidance |
|---|---------|
| **Do** | Deploy to Vercel |
| **Don't** | Self-host without knowledge |
| **Good** | `vercel deploy` |
| **Bad** | `Complex Docker setup for simple app` |
| **Severity** | Low |
| **Docs** | https://nextjs.org/docs/app/building-your-application/deploying |

### Configure output for self-hosting

Set output option for deployment target

| | Guidance |
|---|---------|
| **Do** | output: 'standalone' for Docker |
| **Don't** | Default output for containers |
| **Good** | `output: 'standalone'` |
| **Bad** | `No output config for Docker` |
| **Severity** | Medium |
| **Docs** | https://nextjs.org/docs/app/building-your-application/deploying#self-hosting |

## Security

### Sanitize user input

Never trust user input

| | Guidance |
|---|---------|
| **Do** | Escape sanitize validate all input |
| **Don't** | Direct interpolation of user data |
| **Good** | `DOMPurify.sanitize(userInput)` |
| **Bad** | `dangerouslySetInnerHTML={{ __html: userInput }}` |
| **Severity** | High |


### Use CSP headers

Content Security Policy for XSS protection

| | Guidance |
|---|---------|
| **Do** | Configure CSP in next.config.js |
| **Don't** | No security headers |
| **Good** | `headers() with CSP` |
| **Bad** | `No CSP configuration` |
| **Severity** | High |
| **Docs** | https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy |

### Validate Server Action input

Server Actions are public endpoints

| | Guidance |
|---|---------|
| **Do** | Validate and authorize in Server Action |
| **Don't** | Trust Server Action input |
| **Good** | `Auth check + validation in action` |
| **Bad** | `Direct database call without check` |
| **Severity** | High |


