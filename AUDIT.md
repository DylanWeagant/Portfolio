# Project Audit: Portfolio

Audit date: 2026-07-16

## Scope and method

This is a read-only audit of the four static pages, CSS, JavaScript, local assets, custom-domain configuration, and Git state. I checked internal asset references against the exact case-sensitive filenames on disk and reviewed accessibility, privacy, content freshness, SEO, performance, and deployment hygiene.

I did not browse the live domain or validate external GitHub repositories, so external-link status remains unverified. No files other than this audit were changed.

## What this project is

This is a four-page static developer portfolio hosted under the custom domain `dylanweagant.com`. It contains Home, About, Work, and Contact pages, a full-screen animated menu, a GitHub profile link, four project cards, and a short education/employment history.

## Overall assessment

**Status: lightweight and visually distinctive, but currently unsuitable as a professional public portfolio because core images are broken on a case-sensitive host, the content is materially stale, a precise home address is published, and the navigation is not keyboard/screen-reader operable.**

The site is small enough to rehabilitate quickly. The strongest move is a focused content/credibility refresh—not adding a framework.

## What is working well

- The site has a clear four-page information architecture.
- HTML uses a single primary heading and understandable page titles.
- The portrait image has meaningful alt text.
- Layout includes desktop, tablet, and mobile breakpoints.
- The custom domain is captured in `CNAME`.
- Font Awesome is loaded with an integrity hash and CORS mode.
- The project is dependency-light and can be deployed as plain static files.
- Git history exists and the current tracked tree is small.

## Findings

### Critical: image references do not match deployed filenames

The HTML/CSS requests:

- `img/portrait.jpg`
- `img/portrait_small.jpg`
- `img/projects/project1.png` through `project4.png`

The actual files are:

- `img/portrait1.jpg`
- `img/portrait_small1.jpg`
- `img/projects/project1.PNG` through `project4.PNG`

On a case-sensitive static host, all portrait and project-image requests will fail. A case-insensitive local macOS filesystem can hide the `.png`/`.PNG` issue, while the added `1` in portrait filenames is broken everywhere.

### Critical: the Contact page publishes a precise residential-looking address

The page exposes a full street address alongside a personal email. Unless this is intentionally a public business location, it creates unnecessary personal-safety, spam, scraping, and identity-correlation risk. A developer portfolio normally needs only a region/time zone, email/contact form, and professional profiles.

### High: the professional content is materially stale

The bio says “I'm a 20 year old developer,” education ends in 2020, and the work examples are basic calculator/password/to-do/converter repositories. The current workspace contains much stronger recent work—mobile apps, a Phaser/Capacitor game, an Electron desktop app, an Astro financial site, a Fabric mod, and a Stockfish browser game—but none is represented.

For hiring or client acquisition, this portfolio currently understates the owner's level and recent breadth.

### High: the menu is inaccessible

The hamburger is a clickable `div` with no keyboard focus, button role, name, expanded state, or controlled-menu relationship. JavaScript listens only for click. There is no Escape handling, focus transfer, focus trap, restoration, or active-page announcement.

The GitHub link is icon-only with no accessible name. Current navigation is indicated only with color/class and not `aria-current`.

### High: project cards do not explain the work

Each card has the same alt text (“Project”), a dead `#!` image link, and only a generic “Github” action. There is no project name, problem statement, role, stack, outcome, status, live demo, screenshot caption, or case-study detail.

This makes the most important portfolio page difficult to scan and weak as evidence of engineering judgment.

### Medium: SEO and sharing metadata are nearly absent

Pages lack meta descriptions, canonical URLs, Open Graph/Twitter metadata, structured person/profile data, favicon declarations, and social preview images. Titles such as “Welcome To My Portfolio” are generic and omit the person's name, specialty, or location.

There is also no sitemap, `robots.txt`, or explicit not-found page.

### Medium: external-link safety and clarity need improvement

All GitHub links open a new tab but do not declare `rel="noopener noreferrer"` or tell assistive-technology users that a new tab opens. The email and address are plain text rather than intentional contact/location interactions.

External project URLs were not verified during this audit.

### Medium: motion and hover behavior can impair usability

The menu and navigation use multiple 0.5-second transforms and scale links to 125% on hover, with no `prefers-reduced-motion` override. Contact boxes shrink their padding dramatically on hover, causing layout movement.

There are no explicit `:focus-visible` styles comparable to hover styles.

### Medium: responsive CSS contains a selector mistake

Inside the 500 px breakpoint, `main #home h1` selects an element with `id="home"` inside `main`. In the HTML, the `main` itself has `id="home"`, so that rule never applies. Large five-rem headings and fixed menu proportions also need testing on narrow/landscape/mobile browser viewports.

### Medium: maintenance/deployment safeguards are absent

The repository has no README, license, test/check script, CI, HTML validation, broken-link check, accessibility check, image-reference check, deployment instructions, or cache/security-header configuration.

The `.claude/` folder is untracked and there is no visible `.gitignore`, so local tooling state can be committed accidentally.

### Low: markup/content polish

- Empty footer elements add no information.
- “Github” should use the brand's conventional “GitHub” capitalization.
- Several sentences need copy editing for grammar, tense, and scannability.
- `<br>` is used to format lists of responsibilities instead of semantic lists.
- The background uses `background-attachment: fixed`, which can behave poorly on mobile.

## Recommendations

### Priority 0: fix public breakage and privacy

1. Make every image reference and filename match exactly, including case, and add an automated case-sensitive asset check.
2. Remove the precise street address unless it is intentionally a public business address. Replace it with a broad location such as city/state or time zone.
3. Decide whether the personal email should remain public; consider a dedicated professional alias or spam-protected form.
4. Verify the live domain after deployment on a case-sensitive host.

### Priority 1: rebuild the portfolio around current evidence

1. Replace age-based copy with durable positioning: role, specialties, preferred problems, and current focus.
2. Feature 3–5 recent, strongest projects rather than four introductory utilities.
3. For each project, include:
   - Problem and intended user.
   - Your role and constraints.
   - Architecture/stack.
   - One hard technical decision.
   - Outcome/current status.
   - Repository, demo, and case-study links where appropriate.
4. Add current employment/education detail only if accurate and useful; date claims so they age gracefully.

### Priority 2: make navigation accessible

1. Use a real `<button>` for the menu with an accessible name, `aria-expanded`, and `aria-controls`.
2. Support Enter/Space natively, Escape to close, focus movement into the menu, focus containment while modal, and focus restoration on close.
3. Mark the active link with `aria-current="page"`.
4. Label icon-only social links and add strong `:focus-visible` styles.
5. Add a skip link and verify heading/order semantics on every page.

### Priority 3: improve project presentation and trust

1. Replace dead image links with meaningful demo/case-study links or noninteractive figures.
2. Use descriptive image alt text or empty alt text when the visible caption fully duplicates it.
3. Add project titles, summaries, technology labels, dates, and status.
4. Verify every external link and use `rel="noopener noreferrer"` for new tabs.
5. Add a downloadable résumé only if it can be kept current and does not expose unnecessary personal data.

### Priority 4: add discoverability and polish

1. Give each page a name-specific title and unique description.
2. Add canonical, Open Graph, social-card, favicon, and Person/ProfilePage structured metadata.
3. Add sitemap, `robots.txt`, and a branded 404 page.
4. Optimize screenshots into consistent aspect ratios and modern formats with explicit dimensions and responsive loading.

### Priority 5: improve motion, responsive behavior, and quality gates

1. Add reduced-motion behavior and eliminate hover interactions that shift layout.
2. Correct the mobile selector and test narrow portrait, landscape, large text, zoom, and touch targets.
3. Add HTML validation, case-sensitive link/asset checking, accessibility smoke tests, and a simple browser test for menu behavior.
4. Add a README, `.gitignore`, deployment steps, and CI for every push.
5. Configure HTTPS enforcement and appropriate static security/cache headers on the hosting platform.

## Suggested next milestone

Create a **credible one-page professional portfolio** first:

- Current positioning and safe contact details.
- Three strong recent projects with real case-study content.
- Working optimized images.
- Accessible navigation or a simple always-visible header.
- Complete social/SEO metadata.
- Automated link, asset-case, HTML, and accessibility checks.

The current four-page structure can remain, but reducing it to one excellent page may produce a stronger result with less maintenance.

## Validation limits

- The live domain and external GitHub links were not checked.
- Content accuracy beyond obvious age/date staleness was not independently verified.
- The site's visual rendering was inferred from source rather than tested in multiple browsers.
