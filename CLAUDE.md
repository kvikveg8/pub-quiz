# CLAUDE.md — Pub Quiz

## Project Overview

**Pub Quiz** is a Serbian-language trivia quiz PWA (Progressive Web App). It covers 8 thematic rounds: Film, Geography, Literature, History, Sport, and more. The app is a **fully static site** — no server, no build tools, no package manager, no external dependencies.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (embedded `<style>` blocks, no external stylesheets) |
| Logic | Vanilla JavaScript (embedded `<script>` blocks) |
| Offline | Service Worker (`sw.js`) |
| PWA | `manifest.json` |
| Build | **None** — edit files directly |
| Tests | **None** |
| CI/CD | **None** |
| Language | Serbian (`lang="sr"`) |

There is **no `package.json`**, no `node_modules`, no TypeScript, no linting config, no formatter config. Never introduce npm or a build step.

---

## Repository Structure

```
pub-quiz/
├── index.html              # Home page — 8 rounds, all topic cards
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (offline caching)
├── icon.svg                # App icon (gold/dark)
├── CLAUDE.md               # This file
│
├── kviz/
│   └── index.html          # Interactive quiz game (timer, scoring, Q&A)
│
├── film/
│   └── oskarovci/
│       └── index.html      # Oscar winners reference table
│
├── geografija/
│   ├── zastave/
│   │   └── index.html      # World flags by continent
│   └── suncevSistem/
│       └── index.html      # Solar system data
│
├── knjizevnost/
│   └── nobelovci/
│       └── index.html      # Nobel literature prize winners
│
├── istorija/
│   ├── nemanjici/
│   │   ├── nemanjici.html  # Nemanjić dynasty interactive tree
│   │   └── nemanjici.js    # Dynasty tree data (only standalone JS file)
│   ├── praistorija/        # Prehistoric Serbia pages (5 sub-pages)
│   ├── jugoslavija/        # Yugoslavia topic
│   └── wwii/               # WWII topic
│
└── sport/
    ├── nba/                # NBA records
    ├── kosarkaske/         # Basketball legends
    ├── fiba/               # FIBA topics
    ├── nasi/               # Serbian athletes
    ├── medalje/            # Olympic medals
    ├── sportovi/           # Sports overview
    ├── fudbalskelegende/   # Football legends
    ├── ligasampiona/       # Champions League
    ├── svetskikup/         # World Cup
    ├── evropskelige/       # European leagues
    └── domacini/           # Host cities
```

---

## Design System

### CSS Custom Properties

All pages share this root color palette — always use variables, never hard-code hex values:

```css
:root {
  --bg: #1a0f05;        /* main dark brown background */
  --surface: #241508;   /* card/panel surface */
  --surface2: #2e1c0a;  /* slightly lighter surface */
  --surface3: #3a2410;  /* even lighter surface */
  --gold: #c9a227;      /* primary accent */
  --gold2: #e8c84a;     /* bright accent / headings */
  --gold-dim: #7a6015;  /* muted gold / secondary text */
  --text: #f5e8d0;      /* main text */
  --muted: #9a8060;     /* secondary/helper text */
  --border: #3a2a12;    /* subtle borders */
  --border2: #4a3518;   /* stronger borders */
  --wood: #5c3d1e;      /* wood-tone accents */
}
```

The quiz page (`kviz/index.html`) additionally defines:
```css
--correct: #1a3d28;   --correct-b: #3a9d5f;
--wrong: #3d1a1a;     --wrong-b: #9d3a3a;
```

### Typography

- Font family: `Georgia, 'Times New Roman', serif` — always serif, never sans-serif
- Headings: `color: var(--gold2)`, `font-weight: normal`, `letter-spacing: 4-6px`
- Body text: `color: var(--text)`
- Helper text: `color: var(--muted)`

### Visual Style

- Dark pub aesthetic with gold accents and warm browns
- Responsive grid layouts (`display: grid`, `clamp()` for fluid font sizes)
- `box-sizing: border-box; margin: 0; padding: 0;` reset on every page
- Smooth transitions (`transition: all 0.2s`) on interactive elements
- `border-radius: 8-12px` on cards/panels

---

## Page Conventions

### HTML Template

Every page follows this head structure:

```html
<!DOCTYPE html>
<html lang="sr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PageTitle — Pub Quiz</title>
<link rel="manifest" href="../../manifest.json">  <!-- adjust depth -->
<meta name="theme-color" content="#c9a227">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Pub Quiz">
<link rel="apple-touch-icon" href="../../icon.svg">  <!-- adjust depth -->
<style>
/* ... embedded styles ... */
</style>
</head>
```

### Back Navigation

Every topic page has a back link in the header. Use a relative path appropriate to the depth:

- 1 level deep (`kviz/`): `href="../index.html"`
- 2 levels deep (`film/oskarovci/`): `href="../../index.html"`
- Category landing pages link back to the home: `href="../../index.html"`

Back link HTML pattern:
```html
<a href="../../index.html" class="header-back">← PUB QUIZ</a>
```

Or back to a category:
```html
<a href="../index.html" class="header-back">← ISTORIJA</a>
```

### New Topic Pages

To add a new topic page, follow this pattern:
1. Create directory: `category/topicname/`
2. Create `category/topicname/index.html`
3. Embed all CSS in a `<style>` block in `<head>`
4. Embed all JS in a `<script>` block before `</body>`
5. Add a topic card to `index.html` in the appropriate round's JavaScript array
6. If the page should be available offline, add it to `PRECACHE` in `sw.js`

---

## Quiz Game (`kviz/index.html`)

### Question Data Format

Questions are stored as a JavaScript object with category arrays:

```js
const QUESTIONS = {
  film: [
    { q: 'Pitanje?', a: 'Tačan odgovor', w: ['Pogrešan1', 'Pogrešan2', 'Pogrešan3'] }
  ],
  knjizevnost: [ /* same format */ ],
  geografija:  [ /* same format */ ]
};
```

- `q` — question text (string)
- `a` — correct answer (string)
- `w` — array of exactly 3 wrong answers

### Game Mechanics

- **Timer**: 20 seconds per question, visual countdown bar
- **Scoring**: 10 base points + speed bonus (up to 5 bonus points based on time remaining)
- **Answer evaluation**: exact string match (case-insensitive is handled in code)
- **Question counts**: 10, 15, 20, or custom
- **Screens**: home → quiz → results (state machine via `.screen.active` class toggling)

---

## Service Worker (`sw.js`)

The cache name is `pubquiz-v1`. The strategy is **cache-first with background refresh**:
1. Return cached response immediately if available
2. Always fetch from network in background and update cache
3. Cross-origin requests (e.g., Wikipedia API) are skipped entirely

**When adding a significant new page**, add it to the `PRECACHE` array in `sw.js`:

```js
var PRECACHE = [
  '/pub-quiz/',
  '/pub-quiz/index.html',
  '/pub-quiz/manifest.json',
  '/pub-quiz/icon.svg',
  // ... existing entries ...
  '/pub-quiz/category/newtopic/index.html'  // add here
];
```

**When updating cached content significantly**, bump the cache version: `pubquiz-v1` → `pubquiz-v2`.

---

## Home Page (`index.html`)

The home page renders all 8 rounds and their topic cards via JavaScript. Each round is defined as a data object:

```js
const rounds = [
  {
    id: 'round1',
    label: 'RUNDA 1',
    title: 'Film & Serije',
    icon: '🎬',
    topics: [
      { title: 'Oskarovci', icon: '🏆', url: 'film/oskarovci/index.html', desc: 'Opis' },
      // ...
    ]
  },
  // ...
];
```

Adding a new topic card only requires adding an entry to the correct round's `topics` array.

---

## Language & Content

- All UI text, labels, and content are in **Serbian** (Latin script, not Cyrillic)
- Serbian months, proper nouns, and diacritics (`š`, `ć`, `č`, `ž`, `đ`) must be preserved correctly
- Do not translate content to English

---

## Development Workflow

Since there is no build step:

1. **Edit** HTML files directly
2. **Test** by opening `index.html` in a browser (or via a local HTTP server for service worker support)
3. **No linting or formatting** tools — maintain consistent style by following existing code patterns
4. **Commit** descriptive messages in English or Serbian (the project history uses both)
5. **Push** to the feature branch

### Local Server (for PWA/SW testing)

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

The service worker requires HTTPS or `localhost` — opening `file://` directly won't register it.

---

## Key Constraints

- **No npm / no build tools** — never add `package.json`, webpack, Vite, etc.
- **No external CSS frameworks** — no Tailwind, Bootstrap, etc.
- **No external JS libraries** — no React, Vue, jQuery, etc.
- **No TypeScript** — stay with vanilla JS
- **No separate CSS files** — all styles go in `<style>` blocks inside each HTML file
- **No separate JS files** (except `sw.js` and `nemanjici.js` which are special cases)
- **Always use CSS custom properties** from the established palette
- **Always use Georgia serif font** — never switch to sans-serif
- **Keep all text in Serbian**
