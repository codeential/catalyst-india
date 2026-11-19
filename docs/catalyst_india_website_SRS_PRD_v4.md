# Catalyst India — Website SRS / PRD

**Version:** 4.0 (slug registry + logo colors)
**Status:** Development ready, with open content-verification items (Section 20)
**Product:** Catalyst India full responsive website
**Source of truth:** `catalyst_india_website_source_content.pdf` (client knowledge base)
**Recommended stack:** Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui where useful

> **How to use this document.** Every visual requirement is written out in plain text (layout, sizes, positions, colors) so a developer or an AI coding tool that cannot see images can build from it directly. Nothing here depends on an attached mockup.

---

## 1. Purpose and Audience

### 1.1 Purpose

Catalyst India is a Delhi-based social organization working with vulnerable girls, families and youth, with a set of for-profit subsidiaries that support its mission. The website must preserve the organization's story, projects, people and voice, and present them in a clear, trustworthy and emotionally engaging way.

Core idea, shown on the first screen of the Home page:

> **We seek an Empowered City!**

Visitor journey: **Understand → Trust → Explore impact → Act**

### 1.2 The one main action

**Primary action across the site: "Support Our Work".**

Because the source gives no verified donation or payment details, the button must resolve through a fallback chain:

1. If a verified donation platform URL exists in `content/site.ts` (`donationUrl`), the button links to it (opens in a new tab with `rel="noopener noreferrer"`).
2. Else, if a `donationInfoPage` flag is true, the button links to `/support`, a page of verified donation information.
3. Else, the button links to `/contact?topic=support` and the contact form preselects the subject "Supporting Catalyst".

No bank details, UPI IDs, payment gateways, tax-exemption claims or registration numbers may be written into code or copy until the client supplies and confirms them.

### 1.3 Secondary actions (never competing with the primary in the same section)

- Explore Our Work
- Read Stories
- Collaborate With Us
- Contact Catalyst

### 1.4 Audiences and what each needs

| Audience | Needs | Where we serve them |
|---|---|---|
| Donors and supporters | Clear mission, real stories, visible projects, leadership, partner voices, contact details, trust signals | Home, Our Work, Stories, About, Contact |
| Volunteers | Programs, culture, volunteer experience, how to get involved | Our Work, Stories (volunteer story), Contact |
| Partners and institutions | Approach, project models, leadership, collaboration route | About, Our Work, Home testimonials, Contact |
| General visitors | Fast understanding of who Catalyst is and how to reach them | Home, Contact |

### 1.5 Tone matched to audience

The site must feel **human, warm, editorial, trustworthy, hopeful and purposeful: premium but not corporate.** It is a nonprofit dealing with serious subjects, so it should be calm and dignified, not bold or playful like a creative studio. Design direction in one line: *editorial publication + documentary storytelling + modern social-impact organization.*

---

## 2. Product Goals and Success Measures

1. A first-time visitor can state what Catalyst does within about 5 seconds of landing.
2. All five projects are reachable within two clicks from any page.
3. Trust is built through real people, real stories and visible contact details.
4. The primary CTA and a route to Contact are visible on every major page.
5. The organization's original voice and terminology are preserved.
6. Works well on mobile, tablet and desktop with no horizontal scroll.
7. Loads fast (Core Web Vitals targets in Section 12).
8. Meets WCAG 2.2 AA.
9. Contains no fabricated information (Section 19).
10. Built from reusable components so the site can grow.

**Measures to track after launch** (analytics only after consent is configured): click-through on "Support Our Work", contact form completion rate, project page visits, story page scroll depth, Core Web Vitals field data.

---

## 3. Visual Hierarchy

### 3.1 Rules

- On every page the eye must land in this order: **headline → supporting text → button.**
- Hierarchy is created with size, weight, color and spacing. Do not emphasise everything. In any one section, at most one element is bold-colored and at most one button is filled.
- **Exactly one primary CTA per section.** Secondary actions are text links or outlined buttons.
- Each section has one clear purpose, and a section with no purpose is removed.

### 3.2 Type scale (desktop / mobile)

| Role | Desktop | Mobile | Weight | Font |
|---|---|---|---|---|
| H1 (hero) | 64–72px | 36–40px | Serif, 600 | Heading |
| H2 (section) | 40–48px | 28–32px | Serif, 600 | Heading |
| H3 (card/sub) | 24–28px | 20–22px | Serif, 600 | Heading |
| Lead paragraph | 20–22px | 18px | Sans, 400 | Body |
| Body | 16–18px | 16px | Sans, 400 | Body |
| Small label / eyebrow | 13–14px, uppercase, letter-spacing 0.08em | same | Sans, 600 | Body |

### 3.3 Hero hierarchy (described in text)

- Full-width section, minimum height 85vh on desktop and 75svh on mobile.
- Background: one original Catalyst photograph, cropped to fill, with a dark forest-green overlay at about 55% opacity so white text passes contrast. If no photograph is available, use a solid deep forest green background with no stock image.
- Content sits in the left 7 of 12 columns on desktop, vertically centered; full width with side padding on mobile.
- Order top to bottom: small uppercase eyebrow "Catalyst India · Delhi" → H1 "We seek an Empowered City!" in white → supporting paragraph (about 2 lines) in off-white → button row.
- Button row: filled gold (`--gold`, ink text) **"Support Our Work"** first, then a text-link style **"Explore Our Work →"** in white. On mobile the buttons stack, full width, 48px tall.

---

## 4. Layout and Spacing

### 4.1 Grid and widths

- 12-column grid on desktop, 8 on tablet, 4 on mobile. Gutter 24px (desktop), 20px (tablet), 16px (mobile).
- Max content width **1200px**, centered. Text-only blocks max 720px.
- Page side padding: 24px (desktop), 20px (tablet), 16px (mobile).
- Never use one-off margins per section. All spacing comes from the scale below.

### 4.2 Spacing scale (Tailwind tokens)

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px.

### 4.3 Section rhythm

| Breakpoint | Vertical padding per section |
|---|---|
| Desktop (1024+) | 96–120px |
| Tablet (640–1023) | 64–80px |
| Mobile (<640) | 48–64px |

### 4.4 Section separation

Alternate section backgrounds so sections read as distinct blocks without borders: warm off-white → white → stone → warm off-white. Use at most one dark (forest green) section per page apart from the hero and footer.

### 4.5 Familiar patterns

- Logo top-left, navigation top, CTA top-right.
- Contact details and address in the footer on every page.
- Breadcrumbs on pages deeper than one level.

---

## 5. Color

The palette combines the site's trust color (forest green) with the colors **taken from the Catalyst logo**: a near-black wordmark and a flame-shaped "A" that runs from red at the tip through orange to gold at the base. Logo values were sampled from the supplied `logo.jpg` (170 × 62px, JPEG), so they are close approximations. **Replace them with the exact values from the client's brand files if available.**

### 5.1 Tokens

| Token | Hex | Source | Use |
|---|---|---|---|
| `--forest` (primary) | `#1F4D3A` | Site | Headings on light backgrounds, header text, dark sections |
| `--forest-dark` | `#163A2B` | Site | Footer, hover on dark areas |
| `--flame` (accent) | `#C2410C` | Derived from logo orange, darkened for text contrast | Primary buttons on light backgrounds, active nav state, key highlights |
| `--flame-dark` | `#9A3412` | Derived | Button hover/pressed, focus ring |
| `--gold` | `#F8C808` | Logo (flame base) | Primary button and small markers **on dark backgrounds only**; logo flame |
| `--ink` | `#1A1714` | Logo (wordmark black) | Body text and the logo wordmark |
| `--logo-orange` | `#E87818` | Logo (flame middle) | Logo and decorative flame mark only, never text |
| `--logo-red` | `#D82818` | Logo (flame tip) | Logo only |
| `--offwhite` | `#FAF6EF` | Site | Default page background |
| `--stone` | `#E8E1D6` | Site | Alternate section background, dividers, borders |
| `--muted` | `#5C574F` | Site | Secondary text |
| `--white` | `#FFFFFF` | Site | Cards, text on dark and on flame backgrounds |
| `--error` | `#B42318` | Site | Form errors only, always paired with an icon and text |

### 5.2 Rules

- **Three working colors plus neutrals:** forest (primary), flame (accent) and ink/off-white/stone. Gold is the accent's dark-background counterpart, not a fourth color for general use.
- **Accent use:** flame is for buttons, active/hover states, key highlights and small markers. On forest or photo-overlay backgrounds the primary button switches to **gold fill with ink text**. Never use flame or gold for large backgrounds or body text.
- **Logo colors stay logo colors:** `--logo-orange` and `--logo-red` appear only inside the logo or a flame mark taken from it. Do not use red anywhere else, so it is never confused with an error. Errors use `--error`.
- **No gradients** except the flame inside the logo file itself and the dark photo overlay on image sections.
- Approximate contrast (to be verified in QA):

| Pairing | Ratio | OK for |
|---|---|---|
| Ink on off-white | about 16:1 | All text |
| Forest on off-white | about 9:1 | All text |
| Muted on off-white | about 6.5:1 | All text |
| White on flame | about 5.2:1 | Button labels |
| Flame on off-white | about 4.8:1 | Large or bold text only |
| Ink on gold | about 11:1 | Button labels on dark sections |
| Gold on forest | about 6:1 | Text, icons, markers on dark sections |
| White on forest | about 9:1 | All text on dark sections |
| `--logo-orange` on off-white | about 2.9:1 | **Never for text**; graphics only |

- Never convey meaning by color alone. Errors need an icon and text; active nav needs an underline.

### 5.3 Logo usage

- Provide the logo as **SVG with a transparent background**. The supplied JPEG is only 170 × 62px with a white background, so it will look soft on high-resolution screens and show as a white box on the off-white header.
- Three versions are needed: full color (ink wordmark + flame) for light backgrounds, **reversed** (white wordmark + gold flame) for forest backgrounds and the footer, and a flame-only mark for the favicon and small spaces.
- Minimum width 120px in the header. Clear space around the logo equals the height of the flame "A". Never recolor, stretch or add effects.
- The header is 72px tall on desktop and 64px on mobile, so render the logo at about 40px height (desktop) and 36px (mobile).

---

## 6. Typography

- **Two fonts maximum**, loaded with `next/font` (self-hosted, `display: swap`, subset to Latin):
  - Headings: an editorial serif such as **Fraunces** or **Playfair Display** (weights 500/600).
  - Body: a clean sans such as **Inter** or **Source Sans 3** (weights 400/600).
- Body text at least 16px, line height 1.5 to 1.65. Headings line height 1.15 to 1.25.
- Line length 50–75 characters. Use `max-w-[65ch]` on prose.
- Clear H1/H2/H3 hierarchy, with one H1 per page.
- Hindi support is not in the source. Do not add Hindi copy, and choose fonts that can be extended later.

---

## 7. Imagery and Media

### 7.1 Priority order

1. Original Catalyst photographs
2. Team portraits
3. Project photographs
4. Historical gallery images
5. Stock only when unavoidable (never of poverty or of vulnerable children)

### 7.2 Style rules

- Consistent warm natural-light look, similar color grading, and the same crop ratios per use:
  - Hero: 16:9 (desktop), 4:5 (mobile crop)
  - Project cards: 4:3
  - Team and board portraits: 1:1 (circle or square, one style across the site)
  - Testimonial portraits: 1:1, 96px
  - Gallery thumbnails: 1:1
- Photograph people with dignity and agency. No pity framing, no faces of minors at risk without confirmed consent.
- Every image has meaningful alt text. Decorative images use `alt=""`.

### 7.3 Performance of media

- Use `next/image` with explicit `width`/`height`, `sizes`, WebP/AVIF output, and `priority` only on the hero image.
- Lazy-load everything below the fold.
- Target under 200KB for most images and under 400KB for the hero.

### 7.4 Missing assets

The source lists placeholders only for: partner logos (5), testimonial portraits, team and board portraits, subsidiary images, project images and about 32 gallery images. **The original files must be supplied.** Until then, use a neutral stone-colored placeholder block with initials (for people) or the project name (for projects), and mark the content as "needs asset" in a build report. Do not use stock photos as stand-ins in production.

---

## 8. Navigation

### 8.1 Primary menu (7 items)

1. Home
2. About
3. Our Work
4. Enterprises *(the for-profit subsidiaries, kept clearly separate from the nonprofit projects)*
5. Stories
6. Gallery
7. Contact

Plus the **Support Our Work** button, right-aligned. Partners appear as a section on Home and on the About page rather than a menu item, to keep the menu within 7.

### 8.2 Desktop header

- Height 72px, sticky, background off-white at 95% opacity with a 1px stone bottom border once scrolled.
- Logo left. Menu items centered or right with 32px gaps. **Support Our Work** filled flame button at the far right.
- "Our Work" and "About" open a simple dropdown on hover and keyboard focus, listing their child pages. Dropdowns close on Escape and are reachable by Tab.

### 8.3 Mobile header

- Height 64px, sticky. Logo left, hamburger button right (44 × 44px minimum).
- Menu opens as a full-screen panel from the top, containing links at 48px minimum height with 18px type, then the **Support Our Work** button, full width, at the bottom of the panel.
- The panel traps focus, closes on Escape, on link tap and on a visible Close button, and locks body scroll while open.

### 8.4 Rules

- All tap targets at least 44 × 44px.
- A skip-to-content link is the first focusable element.
- Contact is reachable from every page via the header and the footer.
- The current page is marked with `aria-current="page"` and an underline.

---

## 9. Information Architecture, Sitemap and Slug Registry

This section lists **every slug and identifier derived from the knowledge base**. Nothing is added that the source does not support. Where the source is unclear, the slug is marked *pending* and depends on an open item in Section 20.

### 9.1 Slug conventions

- Lowercase, hyphen-separated, ASCII only. No spaces, underscores, dates or file extensions in URLs.
- A slug is unique within its section and must match the `slug` or `id` field in its content file exactly.
- A published slug never changes. If one must change, add a 301 redirect from the old URL.
- Story slugs use first names only, with no surnames, to protect privacy (see Section 18).
- A story whose `verified` flag is `false` is excluded from the sitemap, from listings and from static generation in production.
- Hash anchors use only plain `#name` values (letters, digits, hyphens). Never `#/path` or `#key=value`. Reserved words that must not be used as anchors: `settings`, `sidebar`, `customize`, `upgrade`, `downloads`, and anything starting with `comment-`.
- Name every section's `id` attribute with its anchor slug from 9.5 so deep links keep working.

### 9.2 Page routes (URL slugs)

**Launch routes: 25. Conditional routes: 2.**

| # | URL | Slug | Page | Knowledge-base source |
|---|---|---|---|---|
| 1 | `/` | (root) | Home | §1–7 Global info, Home, Four-Part Approach, Vision, Work Style, Testimonials, Partners |
| 2 | `/about` | `about` | About Catalyst | §8–13 |
| 3 | `/about/founder` | `founder` | Founder | §8 About Us, Founder |
| 4 | `/about/team` | `team` | Our Work Team | §12 |
| 5 | `/about/board` | `board` | Board Members | §13 |
| 6 | `/our-work` | `our-work` | Projects overview | §15 |
| 7 | `/our-work/diversion` | `diversion` | Project: Diversion | §16 |
| 8 | `/our-work/horizon` | `horizon` | Project: Horizon | §17 |
| 9 | `/our-work/re-boot` | `re-boot` | Project: Re-Boot | §18 |
| 10 | `/our-work/youth-light` | `youth-light` | Project: Youth Light | §19 |
| 11 | `/our-work/realty-bites` | `realty-bites` | Project: Realty Bites | §20 |
| 12 | `/enterprises` | `enterprises` | Business and subsidiaries overview | §14 |
| 13 | `/enterprises/catalyst-media` | `catalyst-media` | Catalyst Media | §14 |
| 14 | `/enterprises/tours-hospitality` | `tours-hospitality` | Catalyst Tours & Hospitality | §14 |
| 15 | `/enterprises/catalyst-exim` | `catalyst-exim` | Catalyst Exim | §14 |
| 16 | `/enterprises/cross-stitch` | `cross-stitch` | Cross-Stitch | §14 |
| 17 | `/stories` | `stories` | Stories listing | §11, §21–23 |
| 18 | `/stories/puja` | `puja` *(pending spelling, see 9.4)* | Success story: Puja | §11.1 |
| 19 | `/stories/babli` | `babli` | Success story: Babli | §11.2 |
| 20 | `/stories/swati` | `swati` | Success story: Swati | §11.3 |
| 21 | `/stories/kajal-kanta` | `kajal-kanta` | Success story: Kajal / Kanta | §11.4 |
| 22 | `/stories/zulfikar-and-amina` | `zulfikar-and-amina` | Success story: Zulfikar & Amina | §11.5 |
| 23 | `/stories/an-impact-in-india` | `an-impact-in-india` | Volunteer article, May 2015 | §21–23 |
| 24 | `/gallery` | `gallery` | Gallery | §26 |
| 25 | `/contact` | `contact` | Contact | §24–25 |
| C1 | `/support` | `support` | Donation information *(only after the client supplies verified details)* | none in source |
| C2 | `/privacy` | `privacy` | Privacy policy *(only after the client supplies text)* | none in source |

Other generated routes (not pages): `/not-found` (404), `/sitemap.xml`, `/robots.txt`, `/api/contact` (form handler).

### 9.3 Legacy and alias redirects (all 301)

The source shows these old labels and the project/services naming. Redirect them so old links and search results still work.

| From | To | Reason |
|---|---|---|
| `/home` | `/` | "Home" label in source |
| `/about-us` | `/about` | "About Us" label |
| `/subsidiary` | `/enterprises` | "Subsidiary" label |
| `/services` | `/enterprises` | "Services" label (appears on several source pages) |
| `/services/catalyst-media` | `/enterprises/catalyst-media` | Services label |
| `/services/tours-hospitality` | `/enterprises/tours-hospitality` | Services label |
| `/services/catalyst-exim` | `/enterprises/catalyst-exim` | Services label |
| `/services/cross-stitch` | `/enterprises/cross-stitch` | Services label |
| `/projects` | `/our-work` | "Projects" label |
| `/projects/diversion` | `/our-work/diversion` | Projects label |
| `/projects/horizon` | `/our-work/horizon` | Projects label |
| `/projects/re-boot` | `/our-work/re-boot` | Projects label |
| `/projects/youth-light` | `/our-work/youth-light` | Projects label |
| `/projects/realty-bites` | `/our-work/realty-bites` | Projects label |
| `/contacts` | `/contact` | "Contacts" label |
| `/partners` | `/#partners` | Partners are a Home section (no standalone page) |
| `/news` | `/stories` | "News" content (May 2015) lives in Stories |
| `/news/may-2015` | `/stories/an-impact-in-india` | News article, May 2015 |

### 9.4 Content-entry slugs (IDs used in content files and routes)

#### Projects (5) and their sections

| Project slug | Section anchors | Sub-items |
|---|---|---|
| `diversion` | `overview`, `aamaria-story`, `the-cycle`, `project-objective`, `methodology` | 12 methodology steps (below) |
| `horizon` | `overview`, `premise`, `housing`, `food`, `supervision` | none |
| `re-boot` | `overview`, `the-story`, `support-offered`, `beyond-delhi` | `shelter`, `food`, `skills`, `training`, `job-assistance` |
| `youth-light` | `overview`, `program`, `safety` | none |
| `realty-bites` | `overview`, `impact`, `the-needs` | `adolescent-girls`, `adolescent-and-young-boys`, `young-couples` |

**Diversion methodology step IDs (in source order):**

1. `step-01-identification-of-girls`
2. `step-02-relationship-building`
3. `step-03-need-identification`
4. `step-04-counseling`
5. `step-05-family-counseling`
6. `step-06-placement-in-diversion-home`
7. `step-07-medical-checkups-and-treatment`
8. `step-08-emotional-and-physical-stabilization`
9. `step-09-education-and-training`
10. `step-10-job-assistance`
11. `step-11-follow-up-with-employer-and-girls`
12. `step-12-follow-up-toward-preferred-field`

#### Enterprises (4)

`catalyst-media`, `tours-hospitality`, `catalyst-exim`, `cross-stitch`. Each has anchors `overview` and `contact-about-this` (the CTA).

#### Stories (6)

| Story slug | Category | Section anchors | Notes |
|---|---|---|---|
| `puja` | `success-stories` | `background`, `challenge`, `catalyst-involvement`, `transformation`, `status` | The source writes both "Puja" and "Pooja"; the slug follows the spelling the client confirms. If it changes to `pooja`, add a redirect from `puja`. |
| `babli` | `success-stories` | same five | Contains sensitive content; apply Section 18. |
| `swati` | `success-stories` | same five | Sensitive content; apply Section 18. |
| `kajal-kanta` | `success-stories` | same five | Source heading is "Kajal / Kanta". |
| `zulfikar-and-amina` | `success-stories` | same five | Also told inside `/our-work/re-boot`; link both ways through `relatedStories`. |
| `an-impact-in-india` | `volunteer-voices` | `thank-you-catalyst`, `what-i-did-at-catalyst`, `favorite-memories`, `overview` | Dated May 2015. Author unconfirmed (Shruti or Madeleine Tucker), so no author appears in the slug. |

Sub-anchors inside `what-i-did-at-catalyst`: `strengthening-your-body`, `strengthening-your-soul`, `strengthening-your-mind`.

The Aamaria story has no standalone page. It sits inside Diversion at `/our-work/diversion#aamaria-story`.

Story category slugs (used for filter chips): `success-stories`, `volunteer-voices`.

#### People (one ID per person across team and board)

`angelika-gier` and `abhishek-gier` appear in both the team and the board, so each has **one** ID, one portrait file and a list of roles.

| Person ID | Name | Team role | Board role |
|---|---|---|---|
| `abhishek-gier` | Abhishek Gier | Director | Director |
| `angelika-gier` | Angelika Gier | Director | Secretary |
| `michael-dcruz` | Michael D'Cruz | Account and Admin Manager | none |
| `mielan` | Mielan | House Mother | none |
| `anandi` | Anandi | House Mother | none |
| `abhishek-hembrom` | Abhishek Hembrom | Youth Light | none |
| `gerald-kessop` | Gerald Kessop | none | Chair Person |
| `nitin-bailey` | Nitin Bailey | none | Vice Chair Person |
| `smita-srinivasan` | Smita Srinivasan | none | Joint Secretary |
| `vivek-masih` | Vivek Masih | none | Legal Advisor |
| `manish-walter` | Manish Walter | none | Treasurer |
| `meribeni-williams` | Meribeni Williams | none | Advisor |
| `shaves-williams` | Shaves Williams | none | Advisor |

Only `/about/founder` has a page for an individual. Everyone else appears as a card with no page of their own.

#### Testimonials (3) and their organizations

| Testimonial ID | Speaker | Role | Organization ID |
|---|---|---|---|
| `dave-hillis` | Dave Hillis | President | `leadership-foundations` |
| `clif-davidson` | Clif Davidson | Vice President, Asia Pacific | `young-life-asia-pacific` |
| `jim-de` | Jim De | Chief Coordinator | `cym-network` |

#### Partner logos (5)

The source has five logos with **no names**: `partner-01`, `partner-02`, `partner-03`, `partner-04`, `partner-05`. Rename a slug to the partner's real name only after the client confirms it from the original assets.

#### Gallery images (32)

The source shows about 32 image slots in a 4 × 8 grid and no filenames or captions. IDs are positional: `gallery-01` to `gallery-32`. Do not map "B day" (the only visible label) to any slot until the client identifies it.

#### Vision pillars (4) and approach cards (4)

- Vision: `empowered-delhi`, `educated-delhi`, `environmentally-conscious-delhi`, `economically-sustainable-delhi`
- Approach: `collaborate`, `create`, `connect`, `celebrate`

#### History entries (2)

`the-beginning` (November 2007), `the-christening` (February 2008).

### 9.5 Section anchors per page

| Page | Anchors (in page order) |
|---|---|
| Home | `hero`, `approach`, `vision`, `building-bridges`, `featured-work`, `stories`, `partner-voices`, `partners`, `final-cta` |
| About | `about-catalyst`, `founder`, `key-issue`, `history`, `vision`, `building-bridges`, `team`, `board` |
| Our Work | `projects`, `how-projects-connect` |
| Enterprises | `for-profit-note`, `businesses` |
| Stories | `success-stories`, `volunteer-voices` |
| Gallery | `gallery-grid` |
| Contact | `details`, `registered-office`, `project-address`, `form`, `map` |

Key Issue (poverty) and Building Bridges (work style) each have one anchor only: `key-issue` and `building-bridges`.

### 9.6 Query parameters (allowed values only)

`/contact?topic=<value>` preselects the Subject field. Any other value is ignored and the form shows no preselection.

| Value | Subject |
|---|---|
| `general-enquiry` | General enquiry |
| `supporting-catalyst` | Supporting Catalyst (also the fallback for "Support Our Work") |
| `volunteering` | Volunteering |
| `partnership` | Partnership |
| `enterprises` | Enterprises |
| `catalyst-media`, `tours-hospitality`, `catalyst-exim`, `cross-stitch` | Enterprise-specific enquiry |
| `other` | Other |

No other query parameters are used in v1.

### 9.7 Focus-tag slugs (taxonomy for project cards)

These come from the project descriptions and the source's quick-reference table. Each project card shows at most two.

| Tag slug | Label | Used by |
|---|---|---|
| `safe-housing` | Safe housing | `diversion` |
| `education` | Education | `diversion` |
| `life-skills` | Life skills | `diversion` |
| `employment` | Employment | `diversion`, `re-boot` |
| `independent-living` | Independent living | `horizon` |
| `family-support` | Family support | `re-boot` |
| `youth-mentoring` | Youth mentoring | `youth-light`, `realty-bites` |
| `community` | Community | `realty-bites` |

Theme slugs from the source (§31), available for tagging stories and project content: `empowerment`, `education`, `relationships`, `vulnerable-girls`, `youth`, `families`, `economic-sustainability`, `environment-and-city`, `faith`.

### 9.8 Image asset filename slugs

Pattern: `/public/images/<group>/<slug>.webp` (plus an AVIF copy where used). One file per slug; responsive sizes come from `next/image`.

| Group | Filenames |
|---|---|
| `hero` | `home-hero` |
| `sections` | `building-bridges-main`, `key-issue-poverty` *(only if a photo is supplied; the section is text-led)* |
| `projects` | `diversion-hero`, `horizon-hero`, `re-boot-hero`, `youth-light-hero`, `realty-bites-hero` |
| `enterprises` | `catalyst-media`, `tours-hospitality`, `catalyst-exim`, `cross-stitch` |
| `people` | one file per person ID in 9.4, for example `abhishek-gier` |
| `testimonials` | `dave-hillis`, `clif-davidson`, `jim-de` |
| `partners` | `partner-01` to `partner-05` |
| `gallery` | `gallery-01` to `gallery-32` |
| `stories` | `<story-slug>` only if consent for the photo is documented |
| `og` | `og-default`, `og-about`, `og-our-work`, `og-enterprises`, `og-stories`, `og-gallery`, `og-contact` |

People photographs use one shared file per person, even though they appear on both team and board pages.

### 9.9 Non-routed identifiers (organizations and concepts)

The source mentions these names. They are **plain text, not pages**, but each gets an ID in `content/organizations.ts` or `content/glossary.ts` so spelling stays consistent.

**Organizations:** `catalyst`, `catalyst-sedi`, `leadership-foundations`, `young-life`, `young-life-asia-pacific`, `cym-network`, `sisters-of-charity`, `council-for-world-mission`, `micah-challenge`, `synodical-youth-cni`, `st-thomas-school`, `community-crafts-exports`, `amrit-seair`, `hilton-hotel`, `cross-stitch`, `tgis` *(meaning unexplained in the source; do not expand)*, `bezalel-green-arts` *(legal owner unconfirmed; see Section 17)*.

**Programs and concepts (original terminology to preserve):** `building-bridges`, `empowered-city`, `resurgent-delhi`, `strengthening-your-body-soul-and-mind`, `diversion-home`, `compass-boys`, `youth-group`, `clubs`, `camps`, `cohorts`, `house-mother`, `non-formal-education`, `life-sustaining-skills`, `job-assistance`, `family-counseling`, `medical-checkups`, `emotional-and-physical-stabilization`, `bachelors-preparatory-program`.

### 9.10 Slugs deliberately not created

The knowledge base does not support these, so no slug exists for them: individual donation campaigns, blog or news items other than May 2015, event pages, individual gallery albums, social-media pages, careers, volunteer sign-up forms, individual team biographies, and any current-year impact report.

### 9.11 Sitemap tree

```
/
├── about
│   ├── founder
│   ├── team
│   └── board
├── our-work
│   ├── diversion
│   ├── horizon
│   ├── re-boot
│   ├── youth-light
│   └── realty-bites
├── enterprises
│   ├── catalyst-media
│   ├── tours-hospitality
│   ├── catalyst-exim
│   └── cross-stitch
├── stories
│   ├── puja                  (pending spelling)
│   ├── babli
│   ├── swati
│   ├── kajal-kanta
│   ├── zulfikar-and-amina
│   └── an-impact-in-india
├── gallery
├── contact
├── support                   (conditional)
├── privacy                   (conditional)
└── not-found (404)
```

---

## 10. Page Specifications

Every page ends with the shared footer. Every section lists its single primary CTA.

### 10.1 Home (`/`)

Order: Header → Hero → Four-part approach → Vision → Building Bridges → Featured Work → Stories → Partner Voices → Partners → Final CTA → Footer.

| # | Section | Content source | Layout (text description) | Primary CTA |
|---|---|---|---|---|
| 1 | Hero | "We seek an Empowered City!" plus supporting line built from the vision | See 3.3 | Support Our Work |
| 2 | Collaborate / Create / Connect / Celebrate | Four verbatim statements | Off-white band. Four equal cards in one row (desktop), 2 × 2 (tablet), stacked (mobile). Each card: small forest-green line icon, the bold verb as H3, one sentence. Cards are white with a 1px stone border and 8px radius. | None (informational) |
| 3 | Our Vision | Vision statement plus four pillars | Stone background. H2 "Our Vision", the statement as a lead paragraph (max 720px), then four columns: Empowered, Educated, Environmentally Conscious, Economically Sustainable. Each has a number (01–04) in flame, an H3 and the supplied sentences. | Explore Our Work |
| 4 | Building Bridges | Work Style copy | White background, two columns: large documentary photo on the left (7 columns, 4:3), editorial text on the right (5 columns) with an eyebrow label "Our Approach", H2 "Building Bridges", and the supplied paragraphs. Image should show connection between people, not hardship. | About Catalyst |
| 5 | Featured Work | Five projects | Off-white background. H2 "Our Work". Grid of 5 project cards (3 + 2 on desktop, 2 columns on tablet, 1 on mobile). Card: 4:3 image, project name, one-line description, up to 2 focus tags, "Read more →". | Explore All Our Work |
| 6 | Stories | Five success stories | Forest-green section, white text. Horizontal scroll-snap row on mobile, 3-up on desktop with the remaining two reached by arrow buttons. Card: first name, a one-sentence summary, "Read story →". | Read All Stories |
| 7 | Partner Voices | Three testimonials | White background. Three cards (desktop) or a one-at-a-time carousel with dots and swipe (mobile). Card: 96px round portrait, quote, name, role, organization. | None |
| 8 | Partners | Five logos | Stone background. Single row of five grayscale logos, color on hover, 2-column wrap on mobile. Names only if confirmed from the assets. | None |
| 9 | Final CTA | New short copy "Be Part of the Transformation" | Full-width forest-green block, centered. H2, one-sentence supporting line, one filled gold button with ink text, two text links below ("Collaborate With Us", "Contact Catalyst"). | Support Our Work |

### 10.2 About (`/about`)

Sections in order: About Catalyst (intro) → Founder preview → Key Issue (Poverty) → History → Vision recap (shared component) → Building Bridges recap (shared component) → Team preview → Board preview.

- **Key Issue:** full-width stone section with the supplied "virus / immunity" metaphor set as a large serif pull-statement (28–36px, max 800px), with no photograph and a small flame marker above. This is the only place on the site where text alone carries a section.
- **History:** vertical timeline with two entries: *November 2007 — The Beginning* and *February 2008 — The Christening.* Do not add any other milestones.
- **Primary CTA for the page:** Meet the Team (link to `/about/team`).

### 10.3 Founder (`/about/founder`)

Portrait left (5 columns), biography right (7 columns). Use only the supplied biography and roles: President of Synodical Youth CNI; Youth Trustee at Council for World Mission; National Coordinator for Micah Challenge; Senior Associate for Leadership Foundations International; first Asian board member for Leadership Foundations. Mention Angelika Gier and the 2007 start as the source does. Add no other career claims.

### 10.4 Team (`/about/team`) and Board (`/about/board`)

- Team: Abhishek Gier (Director), Angelika Gier (Director), Michael D'Cruz (Account and Admin Manager), Mielan (House Mother), Anandi (House Mother), Abhishek Hembrom (Youth Light).
- Board: Gerald Kessop (Chair Person), Nitin Bailey (Vice Chair Person), Angelika Gier (Secretary), Smita Srinivasan (Joint Secretary), Abhishek Gier (Director), Vivek Masih (Legal Advisor), Manish Walter (Treasurer), Meribeni Williams (Advisor), Shaves Williams (Advisor).
- Cards: square portrait, name, role. No biographies unless supplied.
- Show a small note: "Roles shown are as of the original Catalyst website and are being verified." Remove it once the client confirms. 

### 10.5 Our Work overview (`/our-work`)

Intro paragraph explaining that the work combines relationships, safety, education, skills, employment, youth engagement and community support. Then all five project cards, followed by a small "How the projects connect" diagram (see 10.6). Primary CTA: Support Our Work.

### 10.6 Project pages (`/our-work/[slug]`)

Shared template, content from `content/projects.ts`:

1. Hero: project name H1, one-line description, hero image (16:9).
2. Introduction.
3. Main content sections (see below).
4. Methodology or details, rendered as a numbered list or timeline.
5. Related stories (cards).
6. CTA block (Support Our Work) and "Next project →" link.

Also include a short **"How the projects connect"** strip on each project page: Diversion → Horizon (for girls), Re-Boot (for families), Youth Light and Realty Bites (for young people and communities), with the current project highlighted. Use only relationships stated in the source (Diversion batch and Re-Boot, Diversion followed by Horizon).

**Diversion**
- Purpose: a safe place to live with proper sanitation, non-formal education and life-sustaining skills for girls above 13; a 15-month module.
- Content: the Aamaria story (name explicitly changed in the source), the cycle affecting girls in slums and streets, the project objective, and the **12-step methodology** exactly as listed in the source.
- Treat the story with the sensitivity rules in Section 18.

**Horizon**
- Purpose: moving from protected living toward social and financial independence.
- Content: the premise; housing (cohorts of 4–6, shared rent, electricity, water, setup costs); food (combined kitchen, rotating duties); supervision (house mother or mentor, with the long-term goal of former participants becoming mentors). Keep the source's note that the process is slow and at times painful but aims at strong women.

**Re-Boot**
- Purpose: 6 months of support, extendable to 1 year, covering shelter, food, skills, training and job assistance.
- Content: the Zulfikar and Amina story in a progression of Crisis → Stabilization → Skills → Employment → Cross-Stitch → Supporting other families. The "sustained 5 families" line is **historical** and must be labeled with a time note, not shown as a live statistic.

**Youth Light**
- Purpose: authentic friendship with teenagers.
- Content: club meetings, camps, small group gatherings, work with families, connections with churches and ministries, and the safety statement.
- The source copy mixes "Youth Light" and "Young Life". Keep as supplied but flag for client review.

**Realty Bites**
- Purpose: long-term relationships between street children and middle-class volunteers.
- Content: the four outcomes, the three high-risk groups (adolescent girls, adolescent and young boys, young couples), and the community-access paragraph. The source mentions "TGiS" without expanding it. Do not invent an expansion.

### 10.7 Enterprises (`/enterprises` and children)

- Intro line that clearly states: *these are Catalyst's for-profit businesses, separate from its nonprofit projects.*
- Four cards: Catalyst Media, Catalyst Tours & Hospitality, Catalyst Exim, Cross-Stitch. Each with image, 2–3 sentence description from the source, and no invented products, prices or clients.
- Each child page repeats the description, a relevant image if supplied, and a "Contact about this" button that opens `/contact?topic=<slug>`.
- Use a distinct badge "For-profit enterprise" (stone background, ink text, with text and an icon, not color alone).

### 10.8 Stories (`/stories`, `/stories/[slug]`)

- Listing: filter chips "Success stories" and "Volunteer voices". Cards in a 3-column grid (2 tablet, 1 mobile).
- Success stories: Puja, Babli, Swati, Kajal / Kanta, Zulfikar & Amina. Each page follows **Background → Challenge → Catalyst involvement → Transformation → Status (historical)**.
- Spelling: the source uses both "Puja" and "Pooja". Pick one after client confirmation.
- Volunteer article (May 2015): title "An Impact in India", subtitle "Catalyst India From a Volunteer's Point of View". Sections: Thank You Catalyst, What I Did at Catalyst, Favorite Memories, Overview. **The source attributes the article to both "Shruti" and "Madeleine Tucker". Do not publish an author name until the client confirms. Until then, byline reads "A Catalyst volunteer".**
- Every story page ends with a CTA block and a "More stories" row.

### 10.9 Gallery (`/gallery`)

- Grid: 4 columns desktop, 3 tablet, 2 mobile, square thumbnails with 8px gap, lazy-loaded.
- Lightbox: full-screen dark overlay, centered image, Previous / Next arrow buttons (48px), Close button top-right, image counter. Supports keyboard (Left, Right, Escape), mobile swipe, focus trap, and returns focus to the thumbnail on close.
- No invented captions. Only "B day" is present in the source and is not enough to caption the set. Use meaningful generic alt text such as "Catalyst India gallery photo 7 of 32" until real descriptions are supplied.

### 10.10 Contact (`/contact`)

- H1 "Stay in Touch".
- Two-column layout on desktop (form 7 columns, details 5 columns); details above form on mobile.
- Details card: Registered office (D-177, Sector-8, Dwarka, New Delhi-110077), Project address (BG-366, Bagdolla Village, Sector-8, Dwarka, ND-77), Telephone +91 11 4573 3804, Fax +91 11 4573 3804, Email info@catalystindia.org. Phone and email are tappable links (`tel:`, `mailto:`).
- Form fields: Full name (required), Email (required), Phone (optional), Subject (select: General enquiry, Supporting Catalyst, Volunteering, Partnership, Enterprises, Other), Message (required, 10–2000 characters). Include a visible consent line about how the message will be used, once the privacy text is supplied.
- Map: embed a **new, verified Google Maps embed** for the registered office, loaded only on user interaction ("Load map" button) to protect performance and privacy. The old Maps Engine URL in the source is defunct and must not be used.
- Success message: "Thank you. Your message has been received." Error message: "Something went wrong while sending your message. Please try again." Technical errors are never shown to visitors.

### 10.11 Support (`/support`, conditional)

Created only if the client supplies verified donation information. Contains exactly what the client provides (platform link, official bank details, tax statements). Nothing else.

### 10.12 404

Headline "The page you're looking for could not be found." Actions: Back Home (primary), Explore Our Work, Contact Catalyst. Same brand styling as the rest of the site.

---

## 11. Components and Consistency

### 11.1 Rule

One style per pattern across the site: same buttons, cards, icons, spacing and radii. Do not build duplicate components for visually identical patterns.

### 11.2 Design tokens

- Radius: 8px for cards and inputs, 9999px for pill tags and badges, 6px for buttons.
- Shadow: only one, `0 1px 2px rgba(0,0,0,0.06)` for cards; none elsewhere.
- Icons: one set (Lucide), 24px, 1.5px stroke, forest-green.
- Borders: 1px stone.

### 11.3 Buttons

| Variant | Style | Use |
|---|---|---|
| Primary | Flame fill, white text, 48px height, 24px horizontal padding, 600 weight | One per section |
| Secondary | Transparent, 1.5px forest border, forest text | Secondary actions on light backgrounds |
| Ghost / link | Text with arrow, underline on hover | Tertiary actions |
| On-dark | White border and text (secondary), gold fill with ink text (primary) | Dark sections and the hero |

All have a 3px flame-dark focus ring (white on dark sections) with 2px offset and a pressed state.

### 11.4 Component inventory

- **Layout:** Header, MobileMenu, Footer, Container, Section (with `tone` prop: offwhite, white, stone, forest), Breadcrumb
- **UI:** Button, SectionHeader (eyebrow + H2 + lead), Modal, Lightbox, Badge, IconCard
- **Content:** ProjectCard, StoryCard, PersonCard (used for both team and board), TestimonialCard, PartnerLogo, Timeline, CTASection, GalleryGrid
- **Forms:** ContactForm, FormField, SubmitButton, FormStatus (success and error states)

`PersonCard` replaces the separate TeamCard and BoardMemberCard from v1, since they look the same.

---

## 12. Performance and Feel

### 12.1 Targets

- LCP under 2.5s, INP under 200ms, CLS under 0.1 on mid-range mobile over 4G.
- Lighthouse performance 90+ on mobile for Home, a project page and Gallery.
- A beautiful page that loads slowly is a failed outcome.

### 12.2 Techniques

- Static generation for all content pages; server action or route handler only for the contact form.
- `next/image`, lazy loading, explicit dimensions, WebP/AVIF.
- `next/font` self-hosted fonts with `display: swap` and a metric-matched fallback.
- No third-party scripts by default. Analytics and the map load only after consent or interaction.
- Code splitting for Lightbox, carousel and form.
- Total JS on first load under 150KB gzipped on Home.

### 12.3 Animation

Subtle and purposeful only:
- Fade-in and 16px slide-up on section entry (400–500ms, ease-out, once).
- Gentle 200ms hover on cards (2px lift) and buttons (color).
- Image reveal on project pages (fade with slight scale 1.02 → 1).
- No parallax, no looping motion, no animation that delays content.
- All motion is disabled under `prefers-reduced-motion: reduce`, and content is visible without JavaScript.

---

## 13. Responsiveness

Mobile first. Tailwind breakpoints:

| Name | Range | Columns |
|---|---|---|
| Mobile | 0–639px | 4 |
| Tablet | 640–1023px | 8 |
| Desktop | 1024–1279px | 12 |
| Large | 1280px+ | 12 (content capped at 1200px) |

Test widths: 320, 360, 390, 430, 768, 820, 1024, 1280, 1440, 1920.

Requirements:
- No horizontal scrolling at any width. Tables and wide content scroll inside their own container.
- Long words and emails wrap or break (`overflow-wrap: anywhere` on contact details).
- Images scale with `max-width: 100%`.
- Text remains readable at 200% browser zoom and 320px width.
- Support portrait and landscape on phones and tablets.

---

## 14. Accessibility (WCAG 2.2 AA)

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `footer`), correct heading order, one H1 per page.
- Skip-to-content link; visible focus on every interactive element (3px ring, at least 3:1 against adjacent colors).
- Full keyboard operation of menus, carousel, lightbox, forms and modals. Focus is trapped in modals and returned on close.
- Alt text on all meaningful images; decorative images hidden from assistive tech.
- Contrast: 4.5:1 for body text, 3:1 for large text and UI components. Verified in QA with a tool.
- Never rely on color alone: errors use icon + text, active nav uses underline, badges use text.
- Forms: visible labels, `aria-describedby` for hints and errors, inline errors announced with `aria-live="polite"`, required fields marked in text.
- Target size at least 24 × 24px (WCAG 2.2) and 44 × 44px for our own standard on primary controls.
- Carousel: pause control if auto-advancing (preferred: no auto-advance), arrows and dots accessible by keyboard.
- Respect `prefers-reduced-motion` and `prefers-color-scheme` (light only for v1; note it explicitly).
- Run automated checks (axe) plus manual screen reader checks (NVDA or VoiceOver) on Home, a project page, Gallery and Contact.

---

## 15. Trust Signals

Place these where visitors see them without searching:

| Signal | Where |
|---|---|
| Real contact details and addresses | Footer on every page, Contact page, Home final CTA area |
| Founder, team and board | About, Founder, Team, Board pages; board link in footer |
| Partner testimonials (Dave Hillis, Clif Davidson, Jim De) with portrait, role and organization | Home |
| Partner logos | Home |
| Real project photography | Hero, project cards and pages, Gallery |
| Success stories | Home and Stories |
| Project methodology | Project pages (Diversion's 12 steps, Horizon structure, Re-Boot duration) |
| Origin facts (research began Nov 2007, launched Feb 2008) | About, footer tagline |

**Never create** certifications, awards, registration numbers, accreditation badges, press logos or "as seen on" strips. If the client supplies registration or tax-exemption details, show them in the footer exactly as supplied.

---

## 16. Technical Requirements

### 16.1 Stack and structure

- Next.js (App Router), TypeScript (strict), Tailwind CSS, shadcn/ui for dialog, sheet and form primitives where useful.
- Content lives in typed files, not inside JSX:

```
content/
├── site.ts            (name, tagline, contact, nav, donationUrl, flags)
├── redirects.ts       (legacy and alias redirects from Section 9.3)
├── vision.ts          (4 pillars: slugs in 9.4)
├── approach.ts        (collaborate / create / connect / celebrate)
├── projects.ts        (5 projects, section anchors, methodology step IDs)
├── stories.ts         (6 stories, categories, section anchors)
├── people.ts          (one record per person; team and board roles)
├── testimonials.ts    (dave-hillis, clif-davidson, jim-de)
├── organizations.ts   (non-routed organization IDs, Section 9.9)
├── partners.ts        (partner-01 to partner-05)
├── services.ts        (4 enterprises)
├── glossary.ts        (non-routed program and concept IDs, Section 9.9)
├── tags.ts            (focus-tag and theme slugs, Section 9.7)
└── gallery.ts         (gallery-01 to gallery-32)
```

No large paragraphs hard-coded in components.

### 16.2 Data models

```ts
type Project = {
  slug: string
  title: string
  shortDescription: string
  heroImage: ImageAsset
  focusAreas: string[]
  introduction: string
  sections: { heading: string; body: string[] }[]
  methodology?: string[]
  relatedStories: string[]       // story slugs
}

type Story = {
  slug: string
  title: string
  person: string                  // as supplied; note if name changed
  image?: ImageAsset              // only if consent confirmed
  summary: string
  content: { heading: string; body: string[] }[]
  category: "success" | "volunteer"
  nameChanged?: boolean
  verified: boolean               // consent / accuracy confirmed
}

type Person = {
  id: string                       // slug, for example "abhishek-gier"
  name: string
  teamRole?: string
  boardRole?: string
  image?: ImageAsset
  biography?: string
}

type Testimonial = {
  id: string                       // "dave-hillis" | "clif-davidson" | "jim-de"
  name: string; role: string; organization: string; organizationId: string
  image?: ImageAsset; quote: string
}

type Partner = { id: string; name?: string; logo: ImageAsset }   // id: "partner-01" to "partner-05"

type GalleryImage = { id: string; image: ImageAsset }              // id: "gallery-01" to "gallery-32"

type Redirect = { from: string; to: string; permanent: true }

type Enterprise = {
  slug: string; title: string; description: string
  image?: ImageAsset; forProfit: true
}

type ImageAsset = { src: string; alt: string; width: number; height: number }
```

Fields marked `verified: false` render an internal "needs verification" marker in development builds and are blocked from production builds by a CI check.

### 16.3 SEO

- Unique title and meta description per page, canonical URL, Open Graph and Twitter metadata, a 1200 × 630 share image per page type.
- JSON-LD: `Organization` (or `NGO`) on Home with only verified data; `BreadcrumbList` on deep pages; `Article` on stories.
- `sitemap.xml`, `robots.txt`, descriptive URLs as in Section 9.
- Natural use of supporting themes: Catalyst India Delhi, social impact Delhi, community development, youth development, girls' empowerment, education and employment support, Diversion, Youth Light. No keyword stuffing.

### 16.4 Security

- HTTPS only with HSTS; security headers (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options).
- Contact form: server-side validation (zod), input sanitization, rate limiting by IP, honeypot field plus a lightweight bot check (such as Cloudflare Turnstile or hCaptcha), message length limits.
- Secrets only in environment variables; no keys in client bundles.
- Email delivery through a transactional provider (for example Resend) with the destination address stored in an environment variable.
- Dependencies pinned and audited; automated updates.
- No personal data in logs.

### 16.5 Analytics and consent

Use privacy-friendly analytics only, loaded after consent if cookies are used. If none is used, no banner is needed. Do not add any tracking pixel without client approval.

---

## 17. Footer (all pages)

Background `--forest-dark`, text off-white, 4 columns on desktop, stacked on mobile.

1. **Brand:** logo, one-sentence mission ("We seek an Empowered City!").
2. **Navigation:** Home, About, Our Work, Enterprises, Stories, Gallery, Contact.
3. **Contact:** registered office, project address, phone, email (all tappable).
4. **Support:** short line plus a filled gold **Support Our Work** button with ink text.

Bottom bar: copyright line and "Back to top" link. Copyright text reads "© [current year] Catalyst India" **only after** the client confirms the correct legal owner. The source shows "Bezalel Green Arts Pvt. Ltd." with 2011 and 2014, which must not be reused as current without confirmation.

---

## 18. Sensitive Content Policy

The source contains stories involving minors, sexual abuse risk, domestic violence, alcohol abuse, homelessness, suicide risk and religious experience.

- Preserve dignity. Focus on agency and transformation, not on suffering.
- No graphic descriptions or sensational imagery. Where the source includes disturbing detail (for example the Aamaria and Babli stories), summarize it in restrained language on the website while keeping the meaning, and keep the original wording in the content file for the client to approve.
- Use anonymized or changed names. Only Aamaria is explicitly marked as changed. **All other names are to be confirmed as real, changed or anonymized.**
- Do not publish photos of minors, or of people in the stories, without documented consent.
- Add a short note on story pages: "Some details have been changed to protect privacy."
- Provide a content note above stories that mention abuse or suicide (a one-line gentle heading, not a pop-up).
- Faith language: the source contains explicit Christian references (for example Jesus, God, prayer). Preserve it as the organization's voice in the stories and in the Youth Light content, and keep it attributed to Catalyst. Do not add or remove faith language without client direction.

---

## 19. Historical Data and No-Dummy-Data Rules

### 19.1 Historical content

The source is historical (copyright 2011 and 2014, a May 2015 article, a defunct map embed). Historical content may be reproduced as history, but must not be presented as current. Where relevant, show subtle time labels ("As of the original site" or "May 2015").

### 19.2 Never invent

Statistics, beneficiary counts, donation amounts, partner names, current project results, certifications, awards, registration numbers, payment information, social media handles, testimonials, current staff, current program availability, gallery captions, volunteer names, or form field labels beyond those defined in this document.

If something is missing, **hide the element or mark it "needs verification"** in the content file. Never fill it with sample data.

---

## 20. Pre-Launch Verification Checklist

| # | Item | Why | Owner |
|---|---|---|---|
| 1 | Current registered office and project address | Source is historical; "Bagdolla Vellage" was corrected to "Village" | Client |
| 2 | Current phone, email and whether the fax is still in use | Phone and fax numbers are identical in the source | Client |
| 3 | New Google Maps location | Old Maps Engine embed is defunct (and appears truncated in the v1 SRS) | Client / Dev |
| 4 | Donation method, legal name, tax and registration details | None supplied | Client |
| 5 | Current leadership, board and team | Roles are from the original site | Client |
| 6 | Active projects and programs | Descriptions are historical | Client |
| 7 | Partner names for the five logos; permission to display logos | Not in the extracted text | Client |
| 8 | Consent to republish each story and every photo | Minors and abuse survivors involved | Client |
| 9 | Real vs changed names in stories; "Puja"/"Pooja" spelling | Source is inconsistent | Client |
| 10 | Volunteer article author (Shruti vs Madeleine Tucker) | Source conflicts | Client |
| 11 | Meaning of "TGiS" in Realty Bites | Not explained | Client |
| 12 | Youth Light vs Young Life wording | Source copy mixes the names | Client |
| 13 | Legal copyright owner and year | 2011/2014 and Bezalel Green Arts | Client |
| 14 | Original image assets and gallery captions | Not in extracted text | Client |
| 15 | Privacy policy and terms text | None supplied | Client |
| 16 | Contrast measurements for all color pairs | Values here are estimates | Dev |
| 17 | Vector logo (SVG, transparent) with a reversed version, and the exact brand colors | Supplied logo is a 170 × 62px JPEG with a white background | Client |

---

## 21. Acceptance Criteria

### 21.1 Global (every page)

- Responsive from 320px to 1920px, with no horizontal overflow.
- Navigation and all CTA links work; Support Our Work follows the fallback chain in 1.2.
- Images load, have dimensions and alt text.
- Keyboard navigation works; focus is always visible.
- Typography, spacing and colors follow the tokens in Sections 4–6.
- SEO metadata present; page passes Lighthouse performance 90+ (mobile) and accessibility 95+.
- No placeholder or dummy copy in the production build.
- Every URL, anchor, ID, query value and image filename matches the registry in Section 9 exactly; the build fails if a content file uses a slug not listed there.
- Every redirect in Section 9.3 returns 301 and lands on a live page.
- `sitemap.xml` lists exactly the launch routes in 9.2 (plus conditional routes only when enabled), and excludes stories where `verified` is `false`.

### 21.2 Home

Contains: hero with the Empowered City message and primary CTA; Collaborate / Create / Connect / Celebrate; Vision with four pillars; Building Bridges; Featured Work (5 projects); Stories; Partner Voices (3); Partners (5 logos or marked placeholders); Final CTA; footer. One primary CTA per section.

### 21.3 Project pages

Project name, hero image, introduction, all approved source content, clear subsections, methodology or details, related stories where applicable, CTA, "How the projects connect" strip.

### 21.4 Contact

Registered office, project address, phone, email, verified map, form with validation, success state, error state, mobile-friendly interaction, and spam protection working.

### 21.5 Stories

Each story page has the structure in 10.8, a sensitivity note where applicable, and `verified: true` before production release.

---

## 22. Development Phases

| Phase | Scope | Exit criteria |
|---|---|---|
| 1. Foundation | Next.js, TypeScript, Tailwind, tokens, fonts, layout, header, footer, buttons, grid | Style guide page renders every token and component |
| 2. Core pages | Home, About, Our Work, Contact | Pages match Section 10 with placeholder assets clearly marked |
| 3. Projects | Five project pages | All source content present |
| 4. Supporting content | Stories, Team, Board, Founder, Enterprises, Gallery | Content files complete |
| 5. Polish | Motion, hover states, lightbox, form states, mobile menu, responsive refinement | Matches Sections 8, 12, 13 |
| 6. QA | Accessibility, SEO, performance, security, cross-browser (Chrome, Safari, Firefox, Edge; iOS Safari, Android Chrome) | All Section 21 criteria pass |
| 7. Launch | Content verification (Section 20), production env, domain, HTTPS, analytics/consent, stakeholder sign-off | Checklist signed off |

---

## 23. Design Principles Summary

1. **Purpose:** every section has a reason to exist and one main action.
2. **Hierarchy:** headline → supporting text → button.
3. **Space:** generous, consistent whitespace; no random margins.
4. **Color:** forest, flame (from the logo) and neutrals; accent only for action.
5. **Type:** two fonts, 16px+ body, 1.5 line height, 50–75 characters per line.
6. **Imagery:** real Catalyst photos, consistent style, compressed.
7. **Navigation:** 7 items, contact always reachable, 44px tap targets.
8. **Responsive:** mobile first, no horizontal scroll.
9. **Consistency:** a small set of reusable components.
10. **Performance:** fast loading is part of the design.
11. **Accessibility:** keyboard, screen reader, contrast, reduced motion.
12. **Trust:** people, stories, partners and contact details shown openly.

---

## 24. Final Product Definition

The new Catalyst India website preserves the organization's historical identity while replacing the old site's fragmented presentation with a modern information architecture and visual system. It should feel human enough to feel, clear enough to understand, trustworthy enough to support, fast enough to use, accessible enough for everyone, and flexible enough to grow.

The supplied knowledge base is the authority for initial content. Anything outside it is unverified and must be supplied or confirmed before publication.
