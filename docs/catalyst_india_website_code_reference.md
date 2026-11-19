# Catalyst India — Website Code Reference

Complete source-code reference for the Catalyst India Next.js website. All code below is as it exists in the repository; nothing has been reformatted or simplified.

## 1. Folder Structure

Tree excludes generated/derived directories (`node_modules/`, `.next/`, `.git/`, `.opencode/`), build cache (`tsconfig.tsbuildinfo`, `package-lock.json`), and binary assets (images, PDF). Binary assets are noted in brackets.

```
catalystindia/
├── AGENTS.md
├── README.md
├── package.json
├── package-lock.json         (generated)
├── tsconfig.json
├── tsconfig.tsbuildinfo      (generated)
├── next.config.ts
├── eslint.config.mjs
├── next-env.d.ts             (generated)
├── opencode.json
├── .gitignore
├── docs/
│   ├── catalyst_india_website_SRS_PRD_v4.md
│   ├── catalyst_india_website_source_content.pdf  [binary]
│   └── catalyst_india_website_code_reference.md   (this file)
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── about/
│   │   │   ├── Abhishek.jpg
│   │   │   ├── Abhishek1.jpg
│   │   │   ├── Anandi.jpg
│   │   │   ├── Angelika Gier.jpg
│   │   │   ├── Michael D'Cruz.jpg
│   │   │   └── Mielan.jpg
│   │   ├── boardmembers/
│   │   │   ├── Abhishek Gier.jpg
│   │   │   ├── Angelika Gier.jpg
│   │   │   ├── Gerald Kessop.jpg
│   │   │   ├── Manish Walter.jpg
│   │   │   ├── Meribeni Williams.jpg
│   │   │   ├── Nitin Bailey.jpg
│   │   │   ├── Shaves Williams.jpg
│   │   │   ├── Smita Srinivasan.jpg
│   │   │   ├── Vivek Masih.jpg
│   │   │   └── projects/   [binary images]
│   │   ├── gallery/        [39 binary images]
│   │   ├── home/           [Clif Davidson.jpg, Dave-Hillis.jpg, Jim De.jpg]
│   │   ├── Our partners/   [banner-1.jpg .. banner-5.jpg]
│   │   └── rescentstories/ [2thanks-cat.jpg, memo.jpg, thanks-cat.jpg]
│   └── favicon.ico         (copy at src/app/favicon.ico)
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── Component/
    │   ├── layout/
    │   │   ├── Footer.tsx
    │   │   ├── Header.tsx
    │   │   └── MobileMenu.tsx
    │   ├── section/
    │   │   ├── about/      (empty)
    │   │   └── home/
    │   │       ├── Approach.tsx
    │   │       ├── BuildingBridges.tsx
    │   │       ├── Hero.tsx
    │   │       └── Vision.tsx
    │   └── ui/
    │       ├── Button.tsx
    │       └── SectionHeader.tsx
    └── data/
        ├── home.ts
        └── site.ts
```

## 2. Source Files

### Root Configuration

#### `package.json`

```json
{
  "name": "catalystindia",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "lucide-react": "^1.72.0",
    "motion": "^14.12.0",
    "next": "16.4.6",
    "react": "19.3.0",
    "react-dom": "19.3.0"
  },
  "devDependencies": {
    "@tailwindcss/turbopack": "4.3.3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.4.6",
    "tailwindcss": "4.3.3",
    "typescript": "^5"
  }
}
```

#### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

#### `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
```

#### `eslint.config.mjs`

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

#### `.gitignore`

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

#### `AGENTS.md`

```markdown
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
```

#### `README.md`

```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

#### `opencode.json`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["@dietrichgebert/ponytail"]
}
```

### `src/app`

#### `layout.tsx`

```tsx
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Component/layout/Header";
import Footer from "@/Component/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Catalyst India — An Empowered City",
  description:
    "Catalyst India works with vulnerable girls, families and youth in Delhi to build an empowered, educated, environmentally conscious and economically sustainable city.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
```

#### `page.tsx`

```tsx
import Approach from "@/Component/section/home/Approach";
import Hero from "@/Component/section/home/Hero";
import Vision from "@/Component/section/home/Vision";
import BuildingBridges from "@/Component/section/home/BuildingBridges";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Approach/>
      <Vision />
      <BuildingBridges />
    </main>
  );
}
```

#### `globals.css`

```css
@import "tailwindcss";

@theme {
  --color-forest: #1f4d3a;
  --color-forest-dark: #163a2b;
  --color-flame: #c2410c;
  --color-flame-dark: #9a3412;
  --color-gold: #f8c808;
  --color-ink: #1a1714;
  --color-offwhite: #faf6ef;
  --color-stone: #e8e1d6;
}

@theme inline {
  --font-sans: var(--font-inter), system-ui, sans-serif;
  --font-serif: var(--font-fraunces), Georgia, serif;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-offwhite font-sans text-ink antialiased;
  }
  h1,
  h2,
  h3,
  h4 {
    @apply font-serif;
  }
  :focus-visible {
    outline: 2px solid var(--color-flame-dark);
    outline-offset: 3px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

### `src/data`

#### `home.ts`

```ts
export type ApproachId = "collaborate" | "create" | "connect" | "celebrate";

export type ApproachItem = {
  id: ApproachId;
  title: string;
  text: string;
};

export const approach: ApproachItem[] = [
  {
    id: "collaborate",
    title: "Collaborate",
    text: "We collaborate with key groups who have a passion for the transformation of Delhi.",
  },
  {
    id: "create",
    title: "Create",
    text: "We create innovative holistic solutions to the environmental, economic, and educational issues facing Delhi.",
  },
  {
    id: "connect",
    title: "Connect",
    text: "We connect the most vulnerable of Delhi to a new generation of emerging leaders to enrich and empower each other.",
  },
  {
    id: "celebrate",
    title: "Celebrate",
    text: "We celebrate the transformation.",
  },
];

export type Pillar = {
  id: "empowered" | "educated" | "environmentally-conscious" | "economically-sustainable";
  title: string;
  points: string[];
};

export const visionStatement =
  "We seek a Resurgent Delhi where people are empowered, educated, environmentally conscious and leading economically sustainable life.";

export const pillars: Pillar[] = [
  {
    id: "empowered",
    title: "Empowered",
    points: [
      "Understanding their identity and purpose, people are both fulfilled and productive.",
    ],
  },
  {
    id: "educated",
    title: "Educated",
    points: [
      "People are employable because they have received education and training.",
      "People can and do read.",
    ],
  },
  {
    id: "environmentally-conscious",
    title: "Environmentally Conscious",
    points: [
      "People take ownership of the attitude, appearance and safety of their city, homes, and self.",
      "Art and beauty are encouraged and expressed.",
    ],
  },
  {
    id: "economically-sustainable",
    title: "Economically Sustainable",
    points: [
      "There is a job opportunity for everyone.",
      "Our dependence on each other is celebrated.",
    ],
  },
];

export const bridgesText: string[] = [
  "From the very beginning, one of the key components of Catalyst was relationship.",
  "Seeking opportunities to spend time with them where they are with an intention to develop relationships that are non judgmental in nature.",
  "Therefore Catalyst designed and built bridges on the islands of the rich/middle class and those on the margins.",
];
```

#### `site.ts`

```ts
export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Subsidiary", href: "/enterprises" },
  { label: "Projects", href: "/our-work" },
  { label: "Contacts", href: "/contact" },
];

/** Routes whose first section is a dark hero, so the header starts transparent. */
export const transparentTopRoutes: string[] = ["/"];

interface SiteConfig {
  donationUrl: string | null;
  donationInfoPage: boolean;
  email: string;
}

export const siteConfig: SiteConfig = {
  donationUrl: null, // set only when the client supplies a verified URL
  donationInfoPage: false, // set true once /support exists with verified details
  email: "info@catalystindia.org",
};

export function getSupportHref(): { href: string; external: boolean } {
  if (siteConfig.donationUrl) {
    return { href: siteConfig.donationUrl, external: true };
  }
  if (siteConfig.donationInfoPage) {
    return { href: "/support", external: false };
  }
  return { href: "/contact?topic=support", external: false };
}

export const footerLinks: NavLink[] = [
  ...navLinks,
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
];
// Historical details from the original site. Verify them with the client before launch.
export const contactInfo = {
  registeredOffice: "D-177, Sector-8, Dwarka, New Delhi-110077",
  projectAddress: "BG-366, Bagdolla Village, Sector-8, Dwarka, ND-77",
  phoneDisplay: "+91 11 4573 3804",
  phoneHref: "tel:+911145733804",
  email: "info@catalystindia.org",
};

// Use "Catalyst India" only after the client confirms the legal owner.
export const copyrightOwner = "Catalyst India";
```

### `src/Component/layout`

#### `Header.tsx`

```tsx
"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { getSupportHref, navLinks, transparentTopRoutes } from "@/data/site";
import Button from "@/Component/ui/Button";
import MobileMenu from "./MobileMenu";

const isActive = (pathname: string, href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  // Close the mobile menu when the route changes
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  const close = useCallback(() => setOpen(false), []);

  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(!open && y > prev && y > 120);
  });

  const support = getSupportHref();
  const solid = scrolled || !transparentTopRoutes.includes(pathname);
  const onDark = open || !solid;
  const activeHref =
    navLinks.find((l) => isActive(pathname, l.href))?.href ?? null;
  const underlineTarget = hovered ?? activeHref;

  const headerSurface = open
    ? "bg-transparent border-b border-transparent"
    : solid
      ? "bg-offwhite/95 backdrop-blur-md border-b border-stone shadow-sm"
      : "bg-transparent border-b border-transparent";

  const linkColor = onDark
    ? "text-white/90 hover:text-white"
    : "text-forest hover:text-flame-dark";

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: reduce ? 0 : 0.35, ease: "easeOut" }}
        onFocusCapture={() => setHidden(false)}
        className={`fixed inset-x-0 top-0 z-[70] h-16 transition-[background-color,box-shadow,border-color] duration-300 lg:h-20 ${headerSurface}`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1680px] items-center justify-between px-5 lg:px-10 2xl:px-16">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Catalyst India — home"
            className="inline-flex items-center"
          >
            <Image
  src="/images/logo.png"
  alt="Catalyst India"
  width={400}
  height={145}
  priority
  className="h-11 w-auto sm:h-12 lg:h-16 xl:h-[72px]"
/>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul
              className="flex items-center gap-8 xl:gap-12"
              onMouseLeave={() => setHovered(null)}
            >
              {navLinks.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.45 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onMouseEnter={() => setHovered(link.href)}
                      onFocus={() => setHovered(link.href)}
                      onBlur={() => setHovered(null)}
                      className={`relative inline-flex min-h-12 items-center px-1 text-base transition-colors duration-300 xl:text-lg ${linkColor} ${
                        active ? "font-semibold" : "font-medium"
                      }`}
                    >
                      {link.label}
                      {underlineTarget === link.href && (
                        <motion.span
                          layoutId="nav-underline"
                          aria-hidden
                          transition={
                            reduce
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 500, damping: 38 }
                          }
                          className={`absolute inset-x-0 bottom-2 h-0.5 rounded-full ${
                            solid ? "bg-flame" : "bg-gold"
                          }`}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:block"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + navLinks.length * 0.06, duration: 0.45 }}
          >
            <Button
              href={support.href}
              external={support.external}
              variant={solid ? "flame" : "gold"}
            >
              Support Our Work
            </Button>
          </motion.div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="-mr-2 flex size-11 items-center justify-center lg:hidden"
          >
            <span className="flex h-[18px] w-6 flex-col justify-between">
              {[0, 1, 2].map((bar) => (
                <motion.span
                  key={bar}
                  className={`block h-0.5 w-full rounded-full ${
                    onDark ? "bg-white" : "bg-forest"
                  }`}
                  animate={
                    open
                      ? bar === 0
                        ? { y: 8, rotate: 45 }
                        : bar === 1
                          ? { opacity: 0 }
                          : { y: -8, rotate: -45 }
                      : { y: 0, rotate: 0, opacity: 1 }
                  }
                  transition={{ duration: reduce ? 0 : 0.3 }}
                />
              ))}
            </span>
          </button>
        </div>

        {/* Scroll progress */}
        <motion.div
          aria-hidden
          style={{ scaleX: reduce ? scrollYProgress : smoothProgress }}
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gradient-to-r from-flame to-gold"
        />
      </motion.header>

      <MobileMenu
        open={open}
        onClose={close}
        links={navLinks}
        activeHref={activeHref}
        support={support}
        toggleRef={toggleRef}
      />
    </>
  );
}
```

#### `Footer.tsx`

```tsx
"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  contactInfo,
  copyrightOwner,
  footerLinks,
  getSupportHref,
} from "@/data/site";
import Button from "@/Component/ui/Button";

const noopSubscribe = () => () => {};

export default function Footer() {
  const reduce = useReducedMotion();
  const support = getSupportHref();

  // Real year in the browser, a fixed fallback during prerender (avoids the new Date() error)
  const year = useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const backToTop = () =>
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  const linkClass =
    "group relative inline-flex min-h-11 items-center text-base text-offwhite/80 transition-colors duration-300 hover:text-gold xl:text-lg";

  const headingClass =
    "mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-gold";

  const mapsUrl = (address: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="relative overflow-hidden bg-forest-dark text-offwhite">
      {/* Animated top divider */}
      <motion.div
        aria-hidden
        initial={{ scaleX: reduce ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-flame via-gold to-flame"
      />

      {/* Decorative glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 size-96 rounded-full bg-flame/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-24 size-96 rounded-full bg-gold/10 blur-3xl"
      />

      {/* Decorative giant wordmark */}
            {/* Decorative giant wordmark (centered) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="select-none whitespace-nowrap font-serif text-[12.5vw] font-semibold leading-none tracking-tight text-white/[0.04]"
        >
          Empowered City
        </motion.p>
      </div>

      <div className="relative mx-auto max-w-[1680px] px-5 pb-8 pt-16 lg:px-10 lg:pt-24 2xl:px-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.5fr_1.2fr] lg:gap-14"
        >
          {/* 1. Brand */}
          <motion.div variants={item}>
                        <Link
              href="/"
              aria-label="Catalyst India — home"
              className="inline-block"
            >
              <Image
                src="/images/logo.png"
                alt="Catalyst India"
                width={400}
                height={145}
                className="h-16 w-auto lg:h-20 xl:h-[88px]"
              />
            </Link>
            <p className="mt-6 max-w-xs font-serif text-3xl font-semibold leading-tight xl:text-4xl">
              We seek an <span className="text-gold">Empowered City!</span>
            </p>
          </motion.div>

          {/* 2. Navigation */}
          <motion.nav variants={item} aria-label="Footer">
            <h2 className={headingClass}>Explore</h2>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    <span className="relative">
                      {link.label}
                      <span
                        aria-hidden
                        className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* 3. Contact */}
          <motion.div variants={item}>
            <h2 className={headingClass}>Contact</h2>
            <address className="space-y-5 text-base not-italic text-offwhite/80 xl:text-lg">
              <div>
                <p className="mb-1 text-sm font-semibold text-offwhite">
                  Registered Office
                </p>
                <a
                  href={mapsUrl(contactInfo.registeredOffice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block min-h-11 transition-colors hover:text-gold"
                >
                  {contactInfo.registeredOffice}
                </a>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-offwhite">
                  Project Address
                </p>
                <a
                  href={mapsUrl(contactInfo.projectAddress)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block min-h-11 transition-colors hover:text-gold"
                >
                  {contactInfo.projectAddress}
                </a>
              </div>
              <div className="flex flex-col">
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-gold"
                >
                  {contactInfo.phoneDisplay}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex min-h-11 items-center break-all transition-colors hover:text-gold"
                >
                  {contactInfo.email}
                </a>
              </div>
            </address>
          </motion.div>

          {/* 4. Support */}
          <motion.div variants={item}>
            <h2 className={headingClass}>Support</h2>
            <p className="mb-6 max-w-xs text-base text-offwhite/80 xl:text-lg">
              Help us build bridges and open doors for the most vulnerable in
              Delhi.
            </p>
            <Button
              href={support.href}
              external={support.external}
              variant="gold"
            >
              Support Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-offwhite/60 sm:flex-row lg:mt-24"
        >
          <p>
            © {year} {copyrightOwner}
          </p>
          <button
            type="button"
            onClick={backToTop}
            className="group inline-flex min-h-11 items-center gap-2 transition-colors hover:text-gold"
          >
            Back to top
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:-translate-y-1"
            >
              ↑
            </span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
```

#### `MobileMenu.tsx`

```tsx
"use client";

import { useEffect, useRef, type RefObject } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Button from "@/Component/ui/Button";
import { siteConfig, type NavLink } from "@/data/site";

type Props = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  activeHref: string | null;
  support: { href: string; external: boolean };
  toggleRef: RefObject<HTMLButtonElement | null>;
};

export default function MobileMenu({
  open,
  onClose,
  links,
  activeHref,
  support,
  toggleRef,
}: Props) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;

      const items = [
        toggleRef.current,
        ...Array.from(
          panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
        ),
      ].filter((el): el is HTMLElement => el !== null);

      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement as HTMLElement | null;

      if (!current || !items.includes(current)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && current === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, toggleRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={
            reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }
          }
          animate={
            reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }
          }
          exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          transition={{
            duration: reduce ? 0.15 : 0.55,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-forest-dark px-6 pb-8 pt-24 text-offwhite lg:hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-1/3 size-80 rounded-full bg-flame/25 blur-3xl"
          />

          <nav aria-label="Mobile" className="relative">
            <ul>
              {links.map((link, i) => {
                const active = link.href === activeHref;
                return (
                  <motion.li
                    key={link.href}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: reduce ? 0 : 0.25 + i * 0.07,
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-12 items-baseline gap-4 py-4 font-serif text-3xl transition-colors ${
                        active ? "text-gold" : "text-offwhite hover:text-gold"
                      }`}
                    >
                      <span className="text-sm tabular-nums text-gold/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={
                          active
                            ? "underline decoration-2 underline-offset-8"
                            : ""
                        }
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <motion.div
            className="relative mt-auto pt-10"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: reduce ? 0 : 0.25 + links.length * 0.07,
                duration: 0.5,
              },
            }}
          >
            <Button
              href={support.href}
              external={support.external}
              variant="gold"
              className="w-full !min-h-12 text-base"
              onClick={onClose}
            >
              Support Our Work
            </Button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 block min-h-11 py-2 text-center text-sm text-offwhite/70 hover:text-gold"
            >
              {siteConfig.email}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### `src/Component/ui`

#### `Button.tsx`

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "gold" | "flame" | "ghost";

type ButtonProps = {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold transition-colors duration-300 xl:text-lg";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-white",
  flame: "bg-flame text-white hover:bg-flame-dark",
  ghost: "border border-current hover:bg-white/10",
};

export default function Button({
  href,
  variant = "flame",
  external = false,
  className = "",
  children,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
```

#### `SectionHeader.tsx`

```tsx
"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
};

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "center",
}: Props) {
  const reduce = useReducedMotion();
  const dark = tone === "dark";
  const center = align === "center";

  const parent: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
  };
  const word: Variants = {
    hidden: reduce ? { opacity: 0 } : { y: "110%" },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: reduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className={`mb-5 text-sm font-semibold uppercase tracking-[0.25em] xl:text-base ${
          dark ? "text-gold" : "text-flame"
        }`}
      >
        {eyebrow}
      </motion.p>

      <h2
        className={`flex flex-wrap gap-x-[0.28em] text-4xl font-semibold leading-[1.15] md:text-6xl xl:text-7xl ${
          center ? "justify-center" : "justify-start"
        } ${dark ? "text-offwhite" : "text-forest"}`}
      >
        {title.split(" ").map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em]"
          >
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
        ))}
      </h2>

      {lead && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
          }}
          className={`mt-6 text-lg xl:text-xl ${
            center ? "mx-auto" : ""
          } max-w-[65ch] ${dark ? "text-offwhite/80" : "text-ink/75"}`}
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}
```

### `src/Component/section/home`

#### `Hero.tsx`

```tsx
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { ArrowDown, Heart } from "lucide-react";

// TODO: change to a real file inside public/images/home/
const HERO_IMAGE = "/images/home/hero.jpg";

const headline = [
  { text: "We", accent: false },
  { text: "seek", accent: false },
  { text: "an", accent: false },
  { text: "EMPOWERED", accent: true },
  { text: "CITY!", accent: true },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax + fade-out as the user scrolls into the next section
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-forest-dark text-offwhite"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
          backgroundImage: `url(${HERO_IMAGE})`,
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        aria-hidden
      />

      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/85 via-forest/60 to-forest-dark/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

      {/* Floating glow orbs */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-flame/25 blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-gold sm:text-sm"
        >
          Catalyst India
        </motion.p>

        {/* h1 automatically uses font-serif (Fraunces) from your globals.css */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {headline.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-2">
              <motion.span
                variants={word}
                className={`inline-block ${w.accent ? "text-gold" : ""}`}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
          className="mx-auto mt-8 h-1 w-24 origin-center rounded-full bg-flame"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex justify-center"
        >
          {/* TODO: point to your real donate page / payment info once verified */}
          <motion.a
            href="#donate"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-8 py-4 text-base font-bold text-ink shadow-[0_0_40px_rgba(248,200,8,0.4)] transition-shadow hover:shadow-[0_0_60px_rgba(248,200,8,0.65)] focus-visible:outline-offwhite"
          >
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/50 transition-transform duration-700 group-hover:translate-x-full" />
            <Heart className="relative h-5 w-5 fill-current text-flame" />
            <span className="relative">Donate</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#approach"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2 text-offwhite/80 hover:text-gold focus-visible:outline-gold"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]">
          Scroll
          <motion.span
            animate={reduce ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.span>
        </div>
      </motion.a>

      {/* Curved bottom edge, same color as your body background (offwhite) */}
      <svg
        aria-hidden
        className="absolute bottom-0 left-0 w-full text-offwhite"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        height="60"
      >
        <path fill="currentColor" d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}
```

#### `Approach.tsx`

```tsx
//     "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useSpring,
//   type Variants,
// } from "motion/react";
// import { approach, type ApproachId } from "@/data/home";
// import SectionHeader from "@/Component/ui/SectionHeader";

// const icons: Record<ApproachId, React.ReactNode> = {
//   collaborate: (
//     <>
//       <circle cx="14" cy="20" r="9" />
//       <circle cx="26" cy="20" r="9" />
//     </>
//   ),
//   create: <path d="M20 4l4 12 12 4-12 4-4 12-4-12L4 20l12-4z" />,
   ...
//   celebrate: (
//     <>
//       <circle cx="20" cy="20" r="4" />
//       <path d="M20 4v6M20 30v6M4 20h6M30 20h6M8.7 8.7l4.3 4.3M27 27l4.3 4.3M31.3 8.7L27 13M13 27l-4.3 4.3" />
//     </>
//   ),
// };

// export default function Approach() {
//   const reduce = useReducedMotion();
//   const ref = useRef<HTMLElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 0.6", "center 0.4"],
//   });
//   const progress = useSpring(scrollYProgress, {
//     stiffness: 110,
//     damping: 28,
//     restDelta: 0.001,
//   });

//   const list: Variants = {
//     hidden: {},
//     show: { transition: { staggerChildren: reduce ? 0 : 0.15 } },
//   };
//   const card: Variants = {
//     hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 70, scale: 0.96 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: reduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <section
//       id="approach"
//       ref={ref}
//       className="relative z-10 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-offwhite py-24 lg:py-32"
//     >
//       ...
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "motion/react";
import { approach, type ApproachId } from "@/data/home";
import SectionHeader from "@/Component/ui/SectionHeader";

const icons: Record<ApproachId, React.ReactNode> = {
  collaborate: (
    <>
      <circle cx="14" cy="20" r="9" />
      <circle cx="26" cy="20" r="9" />
    </>
  ),
  create: <path d="M20 4l4 12 12 4-12 4-4 12-4-12L4 20l12-4z" />,
  connect: (
    <>
      <circle cx="20" cy="9" r="4" />
      <circle cx="8" cy="30" r="4" />
      <circle cx="32" cy="30" r="4" />
      <path d="M18 12.5L10 26.5M22 12.5l8 14M12 30h16" />
    </>
  ),
  celebrate: (
    <>
      <circle cx="20" cy="20" r="4" />
      <path d="M20 4v6M20 30v6M4 20h6M30 20h6M8.7 8.7l4.3 4.3M27 27l4.3 4.3M31.3 8.7L27 13M13 27l-4.3 4.3" />
    </>
  ),
};

// Full class strings so Tailwind can detect them
const themes: Record<
  ApproachId,
  { bar: string; fill: string; icon: string; title: string; ring: string }
> = {
  collaborate: {
    bar: "bg-forest",
    fill: "bg-forest-dark",
    icon: "bg-forest text-gold group-hover:bg-gold group-hover:text-forest-dark",
    title: "text-forest group-hover:text-gold",
    ring: "hover:border-forest",
  },
  create: {
    bar: "bg-flame",
    fill: "bg-flame-dark",
    icon: "bg-flame text-offwhite group-hover:bg-offwhite group-hover:text-flame-dark",
    title: "text-flame-dark group-hover:text-offwhite",
    ring: "hover:border-flame",
  },
  connect: {
    bar: "bg-ink",
    fill: "bg-ink",
    icon: "bg-ink text-gold group-hover:bg-gold group-hover:text-ink",
    title: "text-ink group-hover:text-gold",
    ring: "hover:border-ink",
  },
  celebrate: {
    bar: "bg-gold",
    fill: "bg-forest",
    icon: "bg-gold text-ink group-hover:bg-forest-dark group-hover:text-gold",
    title: "text-forest-dark group-hover:text-gold",
    ring: "hover:border-gold",
  },
};

export default function Approach() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "center 0.4"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.15 } },
  };
  const card: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 70, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="approach"
      ref={ref}
      className="relative z-10 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-offwhite py-24 lg:py-32"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 size-[28rem] rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-10 size-[28rem] rounded-full bg-flame/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1680px] px-5 lg:px-10 2xl:px-16">
        <SectionHeader
          eyebrow="Our Approach"
          title="Collaborate. Create. Connect. Celebrate."
        />

        {/* Short accent divider */}
        <div
          aria-hidden
          className="mx-auto mt-8 flex items-center justify-center gap-2"
        >
          <span className="h-1 w-10 rounded-full bg-forest" />
          <span className="h-1 w-6 rounded-full bg-flame" />
          <span className="h-1 w-3 rounded-full bg-gold" />
        </div>

        <div className="relative mt-16 lg:mt-20">
          {/* Connector line that fills as you scroll (desktop) */}
          <div
            aria-hidden
            className="absolute top-[68px] hidden h-1 rounded-full bg-stone lg:block"
            style={{
              left: "calc((100% - 3 * 1.5rem) / 8)",
              right: "calc((100% - 3 * 1.5rem) / 8)",
            }}
          >
            <motion.div
              style={{ scaleX: reduce ? 1 : progress }}
              className="h-full origin-left rounded-full bg-gradient-to-r from-forest via-flame to-gold"
            />
          </div>

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {approach.map((item, i) => {
              const t = themes[item.id];
              return (
                <motion.li
                  key={item.id}
                  variants={card}
                  className={`group relative overflow-hidden rounded-3xl border-2 border-stone bg-white p-8 pt-10 transition-[box-shadow,border-color] duration-500 hover:shadow-2xl ${t.ring}`}
                >
                  {/* Colored top bar */}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 z-10 h-2 ${t.bar}`}
                  />

                  {/* Hover fill sweep */}
                  <span
                    aria-hidden
                    className={`absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 ${t.fill}`}
                  />

                  {/* Big faint number */}
                  <span
                    aria-hidden
                    className="absolute -right-2 -top-2 select-none font-serif text-[7rem] font-semibold leading-none text-stone transition-colors duration-500 group-hover:text-offwhite/10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <span
                      className={`flex size-14 items-center justify-center rounded-full transition-colors duration-500 ${t.icon}`}
                    >
                      <svg
                        viewBox="0 0 40 40"
                        className="size-7 transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        {icons[item.id]}
                      </svg>
                    </span>

                    <h3
                      className={`mt-8 font-serif text-3xl font-semibold transition-colors duration-500 xl:text-4xl ${t.title}`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-ink/75 transition-colors duration-500 group-hover:text-offwhite/90 xl:text-xl">
                      {item.text}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
```

#### `Vision.tsx`

```tsx
// "use client";

// import { useRef, useState } from "react";
// import {
//   motion,
//   useMotionValueEvent,
//   useReducedMotion,
//   useScroll,
//   useSpring,
//   type Variants,
// } from "motion/react";
// import { pillars, visionStatement, type Pillar } from "@/data/home";
// import SectionHeader from "@/Component/ui/SectionHeader";

// const icons: Record<Pillar["id"], React.ReactNode> = {
//   empowered: (
//     <>
//       <circle cx="20" cy="11" r="5" />
//       <path d="M8 34c0-7 5-12 12-12s12 5 12 12" />
//     </>
//   ),
//   educated: (
//     <path d="M6 9h11a3 3 0 013 3v21a3 3 0 00-3-3H6zM34 9H23a3 3 0 00-3 3v21a3 3 0 013-3h11z" />
//   ),
//   "environmentally-conscious": (
//     <path d="M8 32C8 16 18 8 33 7c0 15-8 25-23 25zM8 32l14-14" />
//   ),
//   "economically-sustainable": <path d="M7 33V22M16 33V15M25 33V19M34 33V7" />,
// };

// // Full class strings so Tailwind can detect them
// const themes: Record<
//   Pillar["id"],
//   {
//     card: string;
//     title: string;
//     text: string;
//     label: string;
//     badge: string;
//     icon: string;
//     dot: string;
//     glow: string;
//     rule: string;
//   }
// > = {
//   empowered: {
//     card: "bg-forest",
//     title: "text-gold",
//     text: "text-offwhite/90",
//     label: "text-gold/80",
//     badge: "bg-gold text-forest-dark",
//     icon: "bg-forest-dark text-gold",
//     dot: "bg-gold",
//     glow: "bg-gold/20",
//     rule: "border-white/15",
//   },
//   educated: {
//     card: "bg-flame",
//     title: "text-offwhite",
//     text: "text-offwhite/95",
//     label: "text-offwhite/80",
//     badge: "bg-offwhite text-flame-dark",
//     icon: "bg-flame-dark text-offwhite",
//     dot: "bg-offwhite",
//     glow: "bg-gold/30",
//     rule: "border-white/20",
//   },
//   "environmentally-conscious": {
//     card: "bg-ink",
//     title: "text-gold",
//     text: "text-offwhite/85",
//     label: "text-gold/80",
//     badge: "bg-gold text-ink",
//     icon: "bg-forest text-gold",
//     dot: "bg-flame",
//     glow: "bg-forest/40",
//     rule: "border-white/15",
//   },
//   "economically-sustainable": {
//     card: "bg-gold",
//     title: "text-forest-dark",
//     text: "text-ink/85",
//     label: "text-forest-dark/80",
//     badge: "bg-forest-dark text-gold",
//     icon: "bg-forest-dark text-gold",
//     dot: "bg-flame-dark",
//     glow: "bg-offwhite/50",
//     rule: "border-ink/15",
//   },
// };

// // Height of the visible "tab" of each stacked card (header strip)
// const TAB = 4.25; // rem

// function PillarCard({
//   pillar,
//   index,
//   total,
//   reduce,
// }: {
//   pillar: Pillar;
//   index: number;
//   total: number;
//   reduce: boolean;
// }) {
//   const t = themes[pillar.id];
//   const isLast = index === total - 1;
//   const num = String(index + 1).padStart(2, "0");

//   const bullets: Variants = {
//     hidden: {},
//     show: {
//       transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.2 },
//     },
//   };
//   const bullet: Variants = {
//     hidden: reduce ? { opacity: 0 } : { opacity: 0, x: -28 },
//     show: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: reduce ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <motion.li
//       style={{ top: `calc(7rem + ${index * TAB}rem)` }}
//       initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//       className={`relative overflow-hidden rounded-[2rem] shadow-xl lg:sticky lg:min-h-[22rem] ${t.card} ${
//         isLast ? "" : "mb-6 lg:mb-[26vh]"
//       }`}
//     >
//       {/* Glow */}
//       <div
//         aria-hidden
//         className={`pointer-events-none absolute -right-20 top-10 size-72 rounded-full blur-3xl ${t.glow}`}
//       />

//       {/* Header strip: number + title (always visible when stacked) */}
//       <div
//         className={`relative flex items-center gap-4 border-b px-6 lg:px-12 ${t.rule}`}
//         style={{ height: `${TAB}rem` }}
//       >
//         <span
//           className={`flex h-10 min-w-12 items-center justify-center rounded-full px-3 font-serif text-lg font-semibold tabular-nums ${t.badge}`}
//         >
//           {num}
//         </span>
//         <h3
//           className={`font-serif text-xl font-semibold leading-tight sm:text-2xl xl:text-3xl ${t.title}`}
//         >
//           {pillar.title}
//         </h3>
//       </div>

//       {/* Body */}
//       <div className="relative flex flex-col gap-6 px-6 pb-10 pt-8 sm:flex-row sm:items-start lg:px-12">
//         <span
//           className={`flex size-16 shrink-0 items-center justify-center rounded-2xl ${t.icon}`}
//         >
//           <svg
//             viewBox="0 0 40 40"
//             className="size-8"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             aria-hidden
//           >
//             {icons[pillar.id]}
//           </svg>
//         </span>

//         <div>
//           <p
//             className={`text-sm font-semibold uppercase tracking-[0.2em] ${t.label}`}
//           >
//             We seek an {pillar.title} Delhi where
//           </p>
//           <motion.ul
//             variants={bullets}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.4 }}
//             className="mt-5 max-w-2xl space-y-4"
//           >
//             {pillar.points.map((p) => (
//               <motion.li
//                 key={p}
//                 variants={bullet}
//                 className={`flex gap-4 text-lg leading-relaxed xl:text-xl ${t.text}`}
//               >
//                 <span
//                   aria-hidden
//                   className={`mt-2.5 size-2.5 shrink-0 rounded-full ${t.dot}`}
//                 />
//                 {p}
//               </motion.li>
//             ))}
//           </motion.ul>
//         </div>
//       </div>
//     </motion.li>
//   );
// }

// export default function Vision() {
//   const reduce = useReducedMotion() ?? false;
//   const listRef = useRef<HTMLUListElement>(null);
//   const [active, setActive] = useState(0);

//   const { scrollYProgress } = useScroll({
//     target: listRef,
//     offset: ["start 0.6", "end end"],
//   });
//   const bar = useSpring(scrollYProgress, {
//     stiffness: 120,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   useMotionValueEvent(scrollYProgress, "change", (v) => {
//     const i = Math.min(pillars.length - 1, Math.max(0, Math.floor(v * pillars.length)));
//     setActive(i);
//   });

//   return (
//     // overflow-x-clip (not overflow-hidden) so position: sticky keeps working
//     <section
//       id="vision"
//       className="relative z-20 -mt-8 overflow-x-clip rounded-t-[2.5rem] bg-stone py-24 lg:py-32"
//     >
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -left-32 top-40 size-[30rem] rounded-full bg-forest/10 blur-3xl"
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -right-32 bottom-40 size-[30rem] rounded-full bg-flame/10 blur-3xl"
//       />

//       <div className="relative mx-auto grid max-w-[1680px] gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 2xl:px-16">
//         {/* Left: sticky intro */}
//         <div className="lg:sticky lg:top-32 lg:self-start">
//           <SectionHeader
//             eyebrow="Our Vision"
//             title="A Resurgent Delhi"
//             lead={visionStatement}
//             align="left"
//           />

//           {/* Numbered progress (desktop) */}
//           <div aria-hidden className="mt-12 hidden lg:block">
//             <ol className="flex gap-3">
//               {pillars.map((p, i) => (
//                 <li
//                   key={p.id}
//                   className={`flex h-12 min-w-14 items-center justify-center rounded-full border-2 px-3 font-serif text-lg font-semibold tabular-nums transition-all duration-500 ${
//                     i === active
//                       ? "scale-110 border-forest bg-forest text-gold shadow-lg"
//                       : i < active
//                         ? "border-flame bg-flame text-offwhite"
//                         : "border-forest/25 text-forest/60"
//                   }`}
//                 >
//                   {String(i + 1).padStart(2, "0")}
//                 </li>
//               ))}
//             </ol>
//             <div className="mt-5 h-1 w-full max-w-sm overflow-hidden rounded-full bg-forest/15">
//               <motion.div
//                 style={{ scaleX: reduce ? 1 : bar }}
//                 className="h-full origin-left rounded-full bg-gradient-to-r from-forest via-flame to-gold"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right: stacking cards */}
//         <ul ref={listRef} className="relative">
//           {pillars.map((pillar, i) => (
//             <PillarCard
//               key={pillar.id}
//               pillar={pillar}
//               index={i}
//               total={pillars.length}
//               reduce={reduce}
//             />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import { pillars, visionStatement, type Pillar } from "@/data/home";
import SectionHeader from "@/Component/ui/SectionHeader";

const icons: Record<Pillar["id"], React.ReactNode> = {
  empowered: (
    <>
      <circle cx="20" cy="11" r="5" />
      <path d="M8 34c0-7 5-12 12-12s12 5 12 12" />
    </>
  ),
  educated: (
    <path d="M6 9h11a3 3 0 013 3v21a3 3 0 00-3-3H6zM34 9H23a3 3 0 00-3 3v21a3 3 0 013-3h11z" />
  ),
  "environmentally-conscious": (
    <path d="M8 32C8 16 18 8 33 7c0 15-8 25-23 25zM8 32l14-14" />
  ),
  "economically-sustainable": <path d="M7 33V22M16 33V15M25 33V19M34 33V7" />,
};

// Full class strings so Tailwind can detect them
const themes: Record<
  Pillar["id"],
  {
    card: string;
    title: string;
    text: string;
    label: string;
    badge: string;
    icon: string;
    dot: string;
    glow: string;
    rule: string;
  }
> = {
  empowered: {
    card: "bg-forest",
    title: "text-gold",
    text: "text-offwhite/90",
    label: "text-gold/80",
    badge: "bg-gold text-forest-dark",
    icon: "bg-forest-dark text-gold",
    dot: "bg-gold",
    glow: "bg-gold/20",
    rule: "border-white/15",
  },
  educated: {
    card: "bg-flame",
    title: "text-offwhite",
    text: "text-offwhite/95",
    label: "text-offwhite/80",
    badge: "bg-offwhite text-flame-dark",
    icon: "bg-flame-dark text-offwhite",
    dot: "bg-offwhite",
    glow: "bg-gold/30",
    rule: "border-white/20",
  },
  "environmentally-conscious": {
    card: "bg-ink",
    title: "text-gold",
    text: "text-offwhite/85",
    label: "text-gold/80",
    badge: "bg-gold text-ink",
    icon: "bg-forest text-gold",
    dot: "bg-flame",
    glow: "bg-forest/40",
    rule: "border-white/15",
  },
  "economically-sustainable": {
    card: "bg-gold",
    title: "text-forest-dark",
    text: "text-ink/85",
    label: "text-forest-dark/80",
    badge: "bg-forest-dark text-gold",
    icon: "bg-forest-dark text-gold",
    dot: "bg-flame-dark",
    glow: "bg-offwhite/50",
    rule: "border-ink/15",
  },
};

const TAB = 4.25; // rem: visible header strip of each stacked card
const CARD_H = 26; // rem: min height of a card
const N = pillars.length;

// Scroll timeline: cards 2..N enter one after another, then a short hold
const FIRST_START = 0.05;
const LAST_END = 0.85;
const STEP = (LAST_END - FIRST_START) / (N - 1);
const LENGTH = STEP * 0.9;
const startOf = (i: number) => FIRST_START + (i - 1) * STEP;

const subscribe = (cb: () => void) => {
  const m = window.matchMedia("(min-width: 1024px)");
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};
const getDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

function PillarCard({
  pillar,
  index,
  progress,
  pinned,
}: {
  pillar: Pillar;
  index: number;
  progress: MotionValue<number>;
  pinned: boolean;
}) {
  const t = themes[pillar.id];
  const num = String(index + 1).padStart(2, "0");

  // Every card (except the first) slides up from below the screen
  const y = useTransform(
    progress,
    index === 0 ? [0, 1] : [startOf(index), startOf(index) + LENGTH],
    index === 0 ? ["0vh", "0vh"] : ["105vh", "0vh"],
  );

  const bullets: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
  };
  const bullet: Variants = {
    hidden: { opacity: 0, x: -28 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.li
      style={pinned ? { y, top: `${index * TAB}rem` } : undefined}
      initial={pinned ? false : { opacity: 0, y: 50 }}
      whileInView={pinned ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-[2rem] shadow-xl ${t.card} ${
        pinned ? "absolute inset-x-0" : "relative"
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-20 top-10 size-72 rounded-full blur-3xl ${t.glow}`}
      />

      {/* Header strip: number + title (stays visible when stacked) */}
      <div
        className={`relative flex items-center gap-4 border-b px-6 lg:px-12 ${t.rule}`}
        style={{ height: `${TAB}rem` }}
      >
        <span
          className={`flex h-10 min-w-12 items-center justify-center rounded-full px-3 font-serif text-lg font-semibold tabular-nums ${t.badge}`}
        >
          {num}
        </span>
        <h3
          className={`font-serif text-xl font-semibold leading-tight sm:text-2xl xl:text-3xl ${t.title}`}
        >
          {pillar.title}
        </h3>
      </div>

      {/* Body */}
      <div
        className="relative flex flex-col gap-6 px-6 pb-10 pt-8 sm:flex-row sm:items-start lg:px-12"
        style={{ minHeight: `${CARD_H - TAB}rem` }}
      >
        <span
          className={`flex size-16 shrink-0 items-center justify-center rounded-2xl ${t.icon}`}
        >
          <svg
            viewBox="0 0 40 40"
            className="size-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {icons[pillar.id]}
          </svg>
        </span>

        <div>
          <p
            className={`text-sm font-semibold uppercase tracking-[0.2em] ${t.label}`}
          >
            We seek an {pillar.title} Delhi where
          </p>
          <motion.ul
            variants={bullets}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-5 max-w-2xl space-y-4"
          >
            {pillar.points.map((p) => (
              <motion.li
                key={p}
                variants={bullet}
                className={`flex gap-4 text-lg leading-relaxed xl:text-xl ${t.text}`}
              >
                <span
                  aria-hidden
                  className={`mt-2.5 size-2.5 shrink-0 rounded-full ${t.dot}`}
                />
                {p}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.li>
  );
}

export default function Vision() {
  const reduce = useReducedMotion() ?? false;
  const desktop = useSyncExternalStore(subscribe, getDesktop, () => false);
  const pinned = desktop && !reduce;

  const wrapRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    restDelta: 0.0005,
  });
  const barScale = useTransform(smooth, [FIRST_START, LAST_END], [0, 1]);

  useMotionValueEvent(smooth, "change", (v) => {
    let a = 0;
    for (let i = 1; i < N; i++) {
      if (v >= startOf(i) + LENGTH * 0.5) a = i;
    }
    setActive(a);
  });

  return (
    <section
      id="vision"
      ref={wrapRef}
      style={pinned ? { height: `${N * 100}vh` } : undefined}
      className="relative z-20 -mt-8 overflow-x-clip rounded-t-[2.5rem] bg-stone"
    >
      <div
        className={
          pinned
            ? "sticky top-0 flex h-screen items-center overflow-hidden pt-24"
            : "py-24 lg:py-32"
        }
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-40 size-[30rem] rounded-full bg-forest/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-20 size-[30rem] rounded-full bg-flame/10 blur-3xl"
        />

        <div className="relative mx-auto grid w-full max-w-[1680px] gap-14 px-5 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20 lg:px-10 2xl:px-16">
          {/* Left: intro + numbered progress */}
          <div>
            <SectionHeader
              eyebrow="Our Vision"
              title="A Resurgent Delhi"
              lead={visionStatement}
              align="left"
            />

            <div aria-hidden className="mt-12 hidden lg:block">
              <ol className="flex gap-3">
                {pillars.map((p, i) => (
                  <li
                    key={p.id}
                    className={`flex h-12 min-w-14 items-center justify-center rounded-full border-2 px-3 font-serif text-lg font-semibold tabular-nums transition-all duration-500 ${
                      i === active
                        ? "scale-110 border-forest bg-forest text-gold shadow-lg"
                        : i < active
                          ? "border-flame bg-flame text-offwhite"
                          : "border-forest/25 text-forest/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </li>
                ))}
              </ol>
              <div className="mt-5 h-1 w-full max-w-sm overflow-hidden rounded-full bg-forest/15">
                <motion.div
                  style={{ scaleX: reduce ? 1 : barScale }}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-forest via-flame to-gold"
                />
              </div>
            </div>
          </div>

          {/* Right: card stack */}
                    <ul
            className={`w-full max-w-[36rem] lg:justify-self-end ${
              pinned ? "relative" : "space-y-6"
            }`}
            style={
              pinned
                ? { height: `${(N - 1) * TAB + CARD_H + 1}rem` }
                : undefined
            }
          >
                        {pillars.map((pillar, i) => (
              <PillarCard
                key={`${pillar.id}-${pinned ? "pinned" : "flow"}`}
                pillar={pillar}
                index={i}
                progress={smooth}
                pinned={pinned}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
```

#### `BuildingBridges.tsx`

```tsx
// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useSpring,
//   useTransform,
//   type MotionValue,
// } from "motion/react";
// import { bridgesText } from "@/data/home";
// import SectionHeader from "@/Component/ui/SectionHeader";

// /* ---------- Scroll-highlighted word ---------- */
// function Word({
//   word,
//   range,
//   progress,
//   reduce,
//   accent,
// }: {
//   word: string;
//   range: [number, number];
//   progress: MotionValue<number>;
//   reduce: boolean;
//   accent: boolean;
// }) {
//   const opacity = useTransform(progress, range, [0.18, 1]);
//   return (
//     <motion.span
//       style={{ opacity: reduce ? 1 : opacity }}
//       className={`mr-[0.28em] inline-block ${accent ? "text-gold" : ""}`}
//     >
//       {word}
//     </motion.span>
//   );
// }

// /* ---------- Bridge geometry (all numbers in SVG units) ---------- */
// const DECK_Y = 220;
// const X0 = 300;
// const X1 = 900;
// const ARCH = `M${X0} ${DECK_Y} Q600 20 ${X1} ${DECK_Y}`;
// const hangerTs = [0.12, 0.22, 0.32, 0.42, 0.5, 0.58, 0.68, 0.78, 0.88];
// const archY = (t: number) => DECK_Y - 400 * t * (1 - t);
// const archX = (t: number) => X0 + (X1 - X0) * t;

// const WAVE = `M0 0 q75 -14 150 0${" t150 0".repeat(11)}`;

// function Hanger({
//   t,
//   i,
//   progress,
// }: {
//   t: number;
//   i: number;
//   progress: MotionValue<number>;
// }) {
//   const start = 0.45 + i * 0.04;
//   const pathLength = useTransform(progress, [start, start + 0.12], [0, 1]);
//   return (
//     <motion.line
//       x1={archX(t)}
//       y1={archY(t)}
//       x2={archX(t)}
//       y2={DECK_Y}
//       stroke="var(--color-offwhite)"
//       strokeOpacity={0.6}
//       strokeWidth={2}
//       strokeLinecap="round"
//       style={{ pathLength }}
//     />
//   );
// }

// export default function BuildingBridges() {
//   const reduce = useReducedMotion() ?? false;

//   const sectionRef = useRef<HTMLElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const sceneRef = useRef<HTMLDivElement>(null);

//   /* Parallax glows */
//   const { scrollYProgress: secProg } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });
//   const glowA = useTransform(secProg, [0, 1], [-80, 80]);
//   const glowB = useTransform(secProg, [0, 1], [80, -80]);

//   /* Word highlight progress */
//   const { scrollYProgress: textProg } = useScroll({
//     target: textRef,
//     offset: ["start 0.85", "end 0.5"],
//   });

//   /* Bridge drawing progress */
//   const { scrollYProgress: sceneRaw } = useScroll({
//     target: sceneRef,
//     offset: ["start 0.85", "center 0.4"],
//   });
//   const p = useSpring(sceneRaw, { stiffness: 110, damping: 28, restDelta: 0.001 });

//   const archLen = useTransform(p, [0.05, 0.55], [0, 1]);
//   const deckLen = useTransform(p, [0, 0.4], [0, 1]);
//   const dotT = useTransform(p, [0.8, 1], [0, 1]);
//   const dotX = useTransform(dotT, (t) => archX(t));
//   const dotY = useTransform(dotT, (t) => archY(t));
//   const dotOpacity = useTransform(p, [0.78, 0.84], [0, 1]);

//   const words = bridgesText.flatMap((s, si) =>
//     s.split(" ").map((w) => ({ w, si })),
//   );
//   const total = words.length;

//   const stat = reduce ? 1 : undefined;

//   return (
//     <section
//       id="building-bridges"
//       ref={sectionRef}
//       className="relative z-30 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-forest to-forest-dark py-24 text-offwhite lg:py-36"
//     >
//       {/* Parallax glows */}
//       ...
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { bridgesText } from "@/data/home";
import SectionHeader from "@/Component/ui/SectionHeader";

/* ---------- Scroll-highlighted word ---------- */
function Word({
  word,
  range,
  progress,
  reduce,
  accent,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  reduce: boolean;
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const underline = useTransform(progress, range, [0, 1]);
  return (
    <motion.span
      style={{ opacity: reduce ? 1 : opacity }}
      className={`relative mr-[0.28em] inline-block ${accent ? "text-gold" : ""}`}
    >
      {word}
      {accent && (
        <motion.span
          aria-hidden
          style={{ scaleX: reduce ? 1 : underline }}
          className="absolute inset-x-0 -bottom-1 h-[3px] origin-left rounded-full bg-flame"
        />
      )}
    </motion.span>
  );
}

/* ---------- One numbered beat of the statement ---------- */
const labels = ["Relationship", "Where they are", "Bridges"];

function Beat({
  index,
  sentence,
  startIdx,
  total,
  progress,
  reduce,
}: {
  index: number;
  sentence: string;
  startIdx: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const sWords = sentence.split(" ");
  const first = startIdx / total;
  const litOn = useTransform(progress, [first, first + 0.06], [0, 1]);
  const litOff = useTransform(progress, [first, first + 0.06], [1, 0]);
  const isLast = index === 2;

  return (
    <div className="relative grid grid-cols-[3.5rem_1fr] gap-5 md:gap-8">
      {/* Number badge */}
      <div className="relative z-10 flex size-14 items-center justify-center rounded-full border-2 border-gold/40 bg-forest-dark font-serif text-lg font-semibold tabular-nums">
        <motion.span
          aria-hidden
          style={{ opacity: reduce ? 1 : litOn }}
          className="absolute inset-0 rounded-full bg-gold shadow-[0_0_30px_rgba(248,200,8,0.45)]"
        />
        <motion.span
          style={{ opacity: reduce ? 0 : litOff }}
          className="absolute text-gold"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <motion.span
          style={{ opacity: reduce ? 1 : litOn }}
          className="absolute text-ink"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </div>

      {/* Text */}
      <div
        className={
          isLast
            ? "rounded-3xl border border-white/10 border-l-4 border-l-flame bg-white/5 p-6 backdrop-blur-sm md:p-8"
            : ""
        }
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
          {labels[index]}
        </p>
        <p
          className={`font-serif leading-snug ${
            index === 0
              ? "text-3xl md:text-5xl xl:text-6xl"
              : "text-2xl md:text-3xl xl:text-4xl"
          }`}
        >
          {sWords.map((w, wi) => {
            const gi = startIdx + wi;
            const a = gi / total;
            const b = Math.min(1, (gi + 1.5) / total);
            const accent = /^(relationship\.|bridges|rich\/middle|margins\.)$/.test(w);
            return (
              <Word
                key={gi}
                word={w}
                range={[a, b]}
                progress={progress}
                reduce={reduce}
                accent={accent}
              />
            );
          })}
        </p>
      </div>
    </div>
  );
}

/* ---------- Bridge geometry (all numbers in SVG units) ---------- */
const DECK_Y = 220;
const X0 = 300;
const X1 = 900;
const ARCH = `M${X0} ${DECK_Y} Q600 20 ${X1} ${DECK_Y}`;
const hangerTs = [0.12, 0.22, 0.32, 0.42, 0.5, 0.58, 0.68, 0.78, 0.88];
const archY = (t: number) => DECK_Y - 400 * t * (1 - t);
const archX = (t: number) => X0 + (X1 - X0) * t;

const WAVE = `M0 0 q75 -14 150 0${" t150 0".repeat(11)}`;

function Hanger({
  t,
  i,
  progress,
}: {
  t: number;
  i: number;
  progress: MotionValue<number>;
}) {
  const start = 0.45 + i * 0.04;
  const pathLength = useTransform(progress, [start, start + 0.12], [0, 1]);
  return (
    <motion.line
      x1={archX(t)}
      y1={archY(t)}
      x2={archX(t)}
      y2={DECK_Y}
      stroke="var(--color-offwhite)"
      strokeOpacity={0.6}
      strokeWidth={2}
      strokeLinecap="round"
      style={{ pathLength }}
    />
  );
}

export default function BuildingBridges() {
  const reduce = useReducedMotion() ?? false;

  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  /* Parallax: glows + giant outlined word */
  const { scrollYProgress: secProg } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowA = useTransform(secProg, [0, 1], [-80, 80]);
  const glowB = useTransform(secProg, [0, 1], [80, -80]);
  const ghostX = useTransform(secProg, [0, 1], ["8%", "-18%"]);

  /* Statement progress (words + line + badges) */
  const { scrollYProgress: textRaw } = useScroll({
    target: textRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const textProg = useSpring(textRaw, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  /* Bridge drawing progress */
  const { scrollYProgress: sceneRaw } = useScroll({
    target: sceneRef,
    offset: ["start 0.85", "center 0.4"],
  });
  const p = useSpring(sceneRaw, { stiffness: 110, damping: 28, restDelta: 0.001 });

  const archLen = useTransform(p, [0.05, 0.55], [0, 1]);
  const deckLen = useTransform(p, [0, 0.4], [0, 1]);
  const dotT = useTransform(p, [0.8, 1], [0, 1]);
  const dotX = useTransform(dotT, (t) => archX(t));
  const dotY = useTransform(dotT, (t) => archY(t));
  const dotOpacity = useTransform(p, [0.78, 0.84], [0, 1]);

  const counts = bridgesText.map((s) => s.split(" ").length);
  const total = counts.reduce((a, b) => a + b, 0);
  const starts = counts.map((_, i) =>
    counts.slice(0, i).reduce((a, b) => a + b, 0),
  );

  return (
    <section
      id="building-bridges"
      ref={sectionRef}
      className="relative z-30 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-forest to-forest-dark py-24 text-offwhite lg:py-36"
    >
      {/* Parallax glows */}
      <motion.div
        aria-hidden
        style={{ y: reduce ? 0 : glowA }}
        className="pointer-events-none absolute -right-32 top-10 size-[32rem] rounded-full bg-flame/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ y: reduce ? 0 : glowB }}
        className="pointer-events-none absolute -left-40 bottom-10 size-[32rem] rounded-full bg-gold/15 blur-3xl"
      />

      {/* Giant outlined ghost word */}
      <motion.p
        aria-hidden
        style={{
          x: reduce ? 0 : ghostX,
          WebkitTextStroke: "2px rgba(250,246,239,0.09)",
        }}
        className="pointer-events-none absolute left-0 top-24 select-none whitespace-nowrap font-serif text-[22vw] font-semibold leading-none text-transparent lg:top-16"
      >
        BRIDGES
      </motion.p>

      <div className="relative mx-auto max-w-[1680px] px-5 lg:px-10 2xl:px-16">
        <SectionHeader
          eyebrow="Our Work Style"
          title="Building Bridges"
          tone="dark"
        />

        {/* Numbered statement */}
        <div ref={textRef} className="relative mx-auto mt-16 max-w-5xl lg:mt-24">
          {/* Vertical progress line */}
          <div
            aria-hidden
            className="absolute bottom-7 left-7 top-7 w-0.5 -translate-x-1/2 rounded-full bg-white/15"
          >
            <motion.div
              style={{ scaleY: reduce ? 1 : textProg }}
              className="h-full origin-top rounded-full bg-gradient-to-b from-gold via-flame to-gold"
            />
          </div>

          <div className="space-y-12 lg:space-y-16">
            {bridgesText.map((sentence, i) => (
              <Beat
                key={i}
                index={i}
                sentence={sentence}
                startIdx={starts[i]}
                total={total}
                progress={textProg}
                reduce={reduce}
              />
            ))}
          </div>
        </div>

        {/* Bridge scene */}
        <div ref={sceneRef} className="mx-auto mt-24 max-w-6xl lg:mt-32">
          <div className="relative">
            <svg
              viewBox="0 0 1200 340"
              className="h-auto w-full"
              role="img"
              aria-label="A bridge connecting the islands of the rich and middle class with those on the margins"
            >
              {/* Water */}
              <rect
                x="0"
                y="250"
                width="1200"
                height="90"
                fill="var(--color-ink)"
                fillOpacity={0.35}
              />
              {[0, 1, 2].map((row) => (
                <motion.g
                  key={row}
                  initial={{ x: -300 }}
                  animate={reduce ? { x: -300 } : { x: [-300, 0] }}
                  transition={{
                    duration: 6 + row * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <path
                    d={WAVE}
                    transform={`translate(0 ${268 + row * 26})`}
                    fill="none"
                    stroke="var(--color-stone)"
                    strokeOpacity={0.35 - row * 0.08}
                    strokeWidth={2}
                  />
                </motion.g>
              ))}

              {/* Islands */}
              <g>
                <path
                  d="M0 220 H322 Q346 220 354 242 L376 340 H0 Z"
                  fill="var(--color-ink)"
                />
                <path
                  d="M0 220 H322 Q346 220 354 242 L358 258 H0 Z"
                  fill="var(--color-stone)"
                />
                <path
                  d="M1200 220 H878 Q854 220 846 242 L824 340 H1200 Z"
                  fill="var(--color-ink)"
                />
                <path
                  d="M1200 220 H878 Q854 220 846 242 L842 258 H1200 Z"
                  fill="var(--color-flame)"
                />
              </g>

              {/* Bridge deck */}
              <motion.path
                d={`M${X0} ${DECK_Y} H${X1}`}
                stroke="var(--color-gold)"
                strokeWidth={8}
                strokeLinecap="round"
                fill="none"
                style={{ pathLength: reduce ? 1 : deckLen }}
              />

              {/* Arch */}
              <motion.path
                d={ARCH}
                stroke="var(--color-gold)"
                strokeWidth={6}
                strokeLinecap="round"
                fill="none"
                style={{ pathLength: reduce ? 1 : archLen }}
              />

              {/* Hangers */}
              {hangerTs.map((t, i) =>
                reduce ? (
                  <line
                    key={t}
                    x1={archX(t)}
                    y1={archY(t)}
                    x2={archX(t)}
                    y2={DECK_Y}
                    stroke="var(--color-offwhite)"
                    strokeOpacity={0.6}
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                ) : (
                  <Hanger key={t} t={t} i={i} progress={p} />
                ),
              )}

              {/* Crossing dot */}
              {!reduce && (
                <motion.circle
                  r={11}
                  fill="var(--color-offwhite)"
                  stroke="var(--color-flame)"
                  strokeWidth={4}
                  cx={dotX}
                  cy={dotY}
                  style={{ opacity: dotOpacity }}
                />
              )}
            </svg>

            {/* Island labels */}
            <div className="mt-6 grid gap-4 text-center sm:grid-cols-3 sm:items-center">
              <p className="rounded-2xl border border-stone/30 bg-white/5 px-5 py-4 font-serif text-lg font-semibold text-offwhite xl:text-2xl">
                The rich / middle class
              </p>
              <p className="rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ink">
                Non-judgmental relationships
              </p>
              <p className="rounded-2xl border border-flame/60 bg-flame/15 px-5 py-4 font-serif text-lg font-semibold text-offwhite xl:text-2xl">
                Those on the margins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `src/Component/section/about`

The `about/` directory exists but contains no files — no About-section components have been implemented yet.

---

## 3. Build & Run

From `package.json`:

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Next.js dev server (Turbopack) on `http://localhost:3000` |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

**Dependencies:** `next` 16.4.6, `react` 19.3.0, `react-dom` 19.3.0, `motion` 14.12.0, `lucide-react` 1.72.0, `tailwindcss` 4.3.3, `@tailwindcss/turbopack` 4.3.3.

**Key conventions:**
- App Router (`src/app/`): `layout.tsx`, `page.tsx`, `globals.css`.
- Components under `src/Component/` grouped as `layout/`, `section/home/`, `section/about/`, `ui/`.
- Data under `src/data/` (`home.ts`, `site.ts`).
- Path alias `@/*` maps to `./src/*`.
- Fonts: Inter (sans), Fraunces (serif) via `next/font/google`.
- Color tokens defined in `globals.css`: `--color-forest`, `--color-flame`, `--color-gold`, `--color-ink`, `--color-offwhite`, `--color-stone`.
