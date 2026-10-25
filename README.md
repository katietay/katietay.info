# katie-portfolio (VHS)

Vite + React Router v6 + Framer Motion, plain JavaScript.

```
npm install
npm run dev            # local dev
npm run build          # production build (BrowserRouter, needs SPA rewrites on the host)
npm run build:single   # one self-contained HTML file with HashRouter, for sharing previews
```

On Vercel or Netlify, add a rewrite so every path serves `index.html`.

## Files

- `src/tapes.js`: the three tapes (label, route, TV text, sticker, tilt/offset in the stack)
- `src/components/TV.jsx`: CSS placeholder TV and on-screen display
- `src/components/Static.jsx`: canvas TV snow
- `src/components/Tape.jsx`: one tape spine. Real link plus the insert animation
- `src/components/Deck.jsx`: shared frame for the inner pages
- `src/effects.jsx`: static/scanline toggle and reduced-motion handling
- `src/pages/*`: Home, Services, About, Resume (routed). Portfolio.jsx, Project.jsx and `src/projects.js` are kept but not routed; the Portfolio tape is off for now.
- `src/components/VCR.jsx`: CSS VCR under the tape stack. Its slot is where a clicked tape flies in.
- Tape transition (in `Tape.jsx` and `pages/Home.jsx`): tape flies into the VCR slot, the VCR and TV show PLAY, the camera pushes into the TV screen, then the page changes. It is skipped for reduced motion and when the visitor turns effects off. Opening a tape in a new tab or with a keyboard modifier skips it too.
- `src/components/Consult.jsx`: the one Calendly booking link. The URL lives in `src/tapes.js` (`CALENDLY`).
- `public/images/`: katie.jpg (About page) and desk.jpg.

## Content to review before launch

- Pricing is in `src/pages/Services.jsx` ($55/hr, $165/month care plan).
- No client names appear on the site. Add testimonials when you have them.
- The resume PDF download button was removed because there is no PDF yet. Add `public/katie-taylor-resume.pdf` and a link in `Resume.jsx`.
- Page headings still use Rye until the name font decision (Anton or Permanent Marker) is made.

## Blender renders to replace the placeholders

Render with a transparent background (Film > Transparent), export PNG, convert to WebP.

**TV** (`public/tv.webp`)
- Front view, camera near straight-on, maybe 5 to 8 degrees above.
- Render the screen glass as black or fully transparent. The static canvas and text sit under it in HTML.
- Output about 1240 px wide (2x the 620 px display width).
- Note the screen's position in the image as percentages (left, top, width, height). Those values position `.screen`.

**Tapes** (`public/tape-resume.webp` and so on, or one shared `tape.webp`)
- Spine facing camera, lying flat. VHS spine ratio is about 7.5:1 (187 x 25 mm).
- Leave the label area blank. Label text stays in HTML so it is real, readable, and editable.
- Output about 760 x 100 px each (2x display).
- Render each tape separately so they animate on their own.

**Lighting**: warm key light around #ec7a2f from upper left, soft green bounce around #1f2a14 from below, to match the page background.

### Swapping them in

In `TV.jsx`, replace the `.tv-shell` contents with an `<img src="/tv.webp" alt="">` and absolutely position `.screen` over the glass using the percentages you noted. Keep `ref={screenRef}` on `.screen`; the tape animation uses it to aim.

In `Tape.jsx`, set the render as the background of `.tape` and remove the CSS plastic styling. Keep `.tape-label` positioned over the blank label area.

## Portfolio shelf

- Projects live in `src/projects.js`. Add one there and it gets a box on the shelf and a page at `/portfolio/<slug>`.
- `src/components/BoxCover.jsx` draws the front cover. Cover art is small inline SVG picked by `cover.art` (`chess`, `mountains`, `globe`, `pipes`); add a new function there for a new project.
- `src/pages/Project.jsx` is the back of the box: synopsis, highlights, an A11Y note, and the billing block ("Starring ...").
- Boxes are real links. Hover is tracked on the shelf slot (which never moves), the same fix as the tapes. Covers grow with their text instead of clipping.
- Keep `cover.base` dark: cover text is bone and needs 7:1.

## How the CSS scene works

All four effects live in `src/styles.css`, with comments at each spot.

- **3D tape stack.** `.stack` sets `perspective` (the camera). `.stack ul` tips toward you with `rotateX(-15deg)`. Each `.tape::before` is the top face: it hangs from the spine's top edge and folds back with `rotateX(-90deg)`. `transform-style: preserve-3d` has to be on every element in between or the face flattens. Change `--depth` or the `rotateX` angle to adjust.
- **Worn labels.** Paper grain is an inline SVG `feTurbulence` noise (`--grain-paper`). Scuffs are soft `radial-gradient` smudges. Torn corners are `clip-path: polygon()` on `.tape-paper`, picked by `wear` in `tapes.js`. The pale torn fringe is a `drop-shadow` on the parent `.tape-label`, since clip-path would cut off a shadow on the same element.
- **Curved glass.** Faked with light: darker edges, a soft top-left reflection, a thin arc (`.glass::after`), pillowed corners (`border-radius: 9% / 12%`), and the on-screen text pushed slightly forward.
- **Wood shelf.** `--grain-wood` is `feTurbulence` stretched along one axis (`baseFrequency='0.004 0.32'`), which turns noise into grain streaks. The gradient under it gives a lit top surface and a front edge in shadow.

## Accessibility (WCAG 2.1 AA and AAA)

Checked with axe-core (WCAG 2.0/2.1/2.2 A, AA, AAA rules plus best practices) on all four pages at 1280px and 320px: no violations. Items axe could not finish (contrast over gradients) were measured separately against the lightest point of the background with scanlines on.

- **Contrast (1.4.6 AAA):** all text is 7:1 or higher, large text 4.5:1 or higher, worst case 7.3:1. Use `--pumpkin-text` for orange text; `--pumpkin` is only for fills and glows.
- **Non-text contrast (1.4.11):** focus ring, button border, and tape edges are over 3:1.
- **Target size (2.5.5 AAA):** every link and button outside running text is at least 44 x 44 px.
- **Reflow, resize, text spacing (1.4.10, 1.4.4, 1.4.12):** no horizontal scroll at 320px, nothing clips with WCAG text-spacing overrides.
- **Flashing (2.3.2 AAA):** each static grain is clamped so it can never change by 0.1 relative luminance, the WCAG threshold for a flash. Measured maximum: 0.093.
- **Hover safety (2.3.1, 2.3.2 AAA):** the TV screen can change at most twice per second no matter how fast the pointer moves (`src/useScreenCue.js`), and screen changes fade instead of snapping. Hover is tracked on the tape's slot, which never moves, so a tape can't slide out from under the pointer and loop. Tested by sweeping the pointer across the tapes at five speeds: never more than 2 changes in any second.
- **Motion (2.2.2, 2.3.3 AAA):** the "Motion & effects" button turns off static, scanlines, blinking, the counter, page transitions, and the tape insert animation, and remembers the choice. `prefers-reduced-motion` does the same automatically.
- **Keyboard (2.1.3 AAA, 2.4.7):** skip link first, every control reachable, visible 3px focus ring. Tapes are real links in `<nav aria-label="Main">`, so Enter, middle-click, and open-in-new-tab work.
- **Route changes (2.4.2, 2.4.3):** each page sets its own title, and `useRouteFocus` moves focus to the new `<main>`.
- **Location and headings (2.4.8, 2.4.10 AAA):** current page marked with `aria-current`, one h1 per page, sections under h2.
- **Link purpose (2.4.9 AAA):** link text makes sense on its own ("Visit knightowlchess.com", "Eject: back to home page").
- **Decorative parts** (TV screen text, tape runtimes, VCR corner text) are `aria-hidden`.

Recheck when content changes: run axe (the axe DevTools browser extension works), and test with VoiceOver or NVDA.

**Not testable by a tool:** 3.1.5 (reading level) and 3.1.3 (unusual words). Keep copy plain and spell out terms like "SP" only where they matter.

## Hosting on IONOS

`npm run build` creates `dist/`. Upload the contents of `dist/` (including the hidden `.htaccess`) to the site's web root. The Cuckoo Colors app is uploaded separately to `/colors/` (see its repository); the `.htaccess` here leaves that folder alone and adds security headers and the single-page-app fallback.

Hidden demo page: `/cuckoo-colors` (not in the tape menu, linked from Portfolio).
