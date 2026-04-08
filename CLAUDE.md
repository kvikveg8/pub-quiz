# CLAUDE.md — Pub Quiz

## Project Overview

**Pub Quiz** is a Serbian-language trivia/reference PWA. It covers 8 thematic rounds: Film, Geography, Literature, History, Sport, and more. The app is a **fully static site** — no server, no build tools, no package manager, no external dependencies. Hosted on GitHub Pages at `https://kvikveg8.github.io/pub-quiz/`.

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
| Language | Serbian (`lang="sr"`, Latin script) |

There is **no `package.json`**, no `node_modules`, no TypeScript, no linting. Never introduce npm or a build step.

---

## Repository Structure

```
pub-quiz/
├── index.html                    # Home page — 8 rounds, all topic cards
├── manifest.json                 # PWA manifest
├── sw.js                         # Service worker (offline caching)
├── icon.svg                      # App icon (gold/dark)
├── CLAUDE.md                     # This file
│
├── assets/
│   └── img/
│       └── mesopotamija/         # Locally hosted images (avoid Wikimedia hotlinking)
│           ├── mapa.svg
│           ├── klinasto.jpg
│           ├── gilgames.jpg
│           ├── hamurabi.jpg
│           ├── asirci.jpg
│           ├── gradovi.jpg
│           ├── vrtovi.jpg
│           └── kir.jpg
│
├── kviz/
│   └── index.html                # Interactive quiz game
│
├── film/
│   └── oskarovci/index.html      # Oscar winners reference table
│
├── geografija/
│   ├── zastave/index.html        # World flags
│   └── suncevSistem/index.html   # Solar system data
│
├── knjizevnost/
│   └── nobelovci/index.html      # Nobel literature prize winners
│
├── istorija/
│   ├── nemanjici/                # Nemanjić dynasty tree
│   ├── praistorija/
│   │   ├── paleolitik/index.html
│   │   ├── mezolitik/index.html
│   │   ├── neolitik/index.html
│   │   └── bronzano/index.html
│   └── starivek/
│       ├── mesopotamija/index.html   ✅ implemented
│       ├── egipat/index.html         🔜 pending
│       ├── grcka/index.html          🔜 pending
│       ├── rim/index.html            🔜 pending
│       ├── kina/index.html           🔜 pending
│       └── indija/index.html         🔜 pending
│
└── sport/
    ├── nba/ kosarkaske/ fiba/ nasi/ medalje/
    ├── sportovi/ fudbalskelegende/ ligasampiona/
    ├── svetskikup/ evropskelige/ domacini/
```

---

## Design System

### CSS Custom Properties

All pages use this palette. Always use variables, never hardcode hex:

```css
:root {
  --bg: #0e0a04;        /* very dark background */
  --surface: #1c1408;   /* card surface */
  --surface2: #261c0a;  /* slightly lighter surface */
  --gold: #c9a227;      /* primary accent */
  --gold2: #e8c84a;     /* bright gold / headings */
  --gold-dim: #7a6015;  /* muted gold */
  --text: #f0e6d0;      /* main body text */
  --muted: #9a8060;     /* secondary text */
  --border: #2a1e08;    /* subtle border */
  --border2: #3a2a0c;   /* stronger border */
}
```

Each **era page** adds its own `--era-color` for accent theming:

| Civilizacija | `--era-color` | Hex |
|---|---|---|
| Mesopotamija | tamno-žuta | `#c8a832` |
| Stari Egipat | zlatno-oker | `#d4943a` |
| Stara Grčka | plavo-siva | `#5a8ab8` |
| Rimsko carstvo | tamno-crvena | `#c84040` |
| Stara Kina | tamno-zelena | `#4ab860` |
| Stara Indija | tamno-ljubičasta | `#b060c8` |
| Paleolitik | zlatna | `#c9a227` |
| Mezolitik | tirkizna | `#3ab8a0` |
| Neolitik | zelena | `#4ab860` |
| Bronzano doba | bronzana | `#c89040` |

### Typography

- Font: `Georgia, 'Times New Roman', serif` — always serif
- Headings: `color: var(--era-color)`, `font-weight: normal`, `letter-spacing: 3px`
- Body: `color: var(--text)`
- Helper: `color: var(--muted)`

---

## Home Page Filter Bar Pattern

The home page (`index.html`) uses **filter bars** to show/hide topic cards within a round. Sport and Istorija rounds both use this pattern.

### Filter Bar HTML

```html
<div class="sport-filter-bar" id="istorijaFilterBar">
  <button class="sf-btn active" data-sc="all">Sve</button>
  <button class="sf-btn" data-sc="praistorija">🦕 Praistorija</button>
  <button class="sf-btn" data-sc="starivek">🏺 Stari vek</button>
  <button class="sf-btn" data-sc="srednjivek">⚔️ Srednji vek</button>
  <button class="sf-btn" data-sc="novivek">🏭 Novi vek</button>
  <button class="sf-btn" data-sc="savremeno">🌍 Savremeno</button>
</div>
```

### Topic Card with Filter Attribute

```html
<div class="topic-card" data-sc="praistorija" onclick="window.location='istorija/praistorija/paleolitik/index.html'">
```

### Filter JS (identical pattern for Sport and Istorija)

```js
(function() {
  var bar = document.getElementById('istorijaFilterBar');
  var grid = document.getElementById('istorijaTopicsGrid');
  if (!bar || !grid) return;
  bar.addEventListener('click', function(e) {
    var btn = e.target.closest('.sf-btn');
    if (!btn) return;
    bar.querySelectorAll('.sf-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var sc = btn.dataset.sc;
    grid.querySelectorAll('.topic-card').forEach(function(c) {
      c.style.display = (sc === 'all' || c.dataset.sc === sc) ? '' : 'none';
    });
  });
})();
```

---

## Era Page Pattern (Timeline)

All Praistorija and Stari vek pages follow the **same template**. Key elements:

### File Location & Back Navigation

Era pages are always **3 levels deep**:
```
istorija/[epoha]/[tema]/index.html
```

Back link always points to home:
```html
<a href="../../../index.html" class="header-back">&#8592; Pub Quiz</a>
```

PWA manifest and icon also 3 levels up:
```html
<link rel="manifest" href="../../../manifest.json">
<link rel="apple-touch-icon" href="../../../icon.svg">
```

### Page Structure

```html
<header>
  <a href="../../../index.html" class="header-back">← Pub Quiz</a>
  <div class="header-title">
    <h1>[ICON] NAZIV CIVILIZACIJE</h1>
    <p>[PERIOD] • [TAGLINE]</p>
  </div>
  <div class="header-spacer"></div>
</header>

<!-- Optional intro paragraph (2-4 sentences, hook the reader) -->
<div class="intro-wrap">
  <p class="intro-text">...</p>
</div>

<!-- Optional map (always visible, above stats) -->
<div class="map-wrap">
  <div class="map-box">
    <img src="../../../assets/img/[tema]/mapa.svg" alt="...">
    <p class="map-caption">...</p>
  </div>
</div>

<div class="stats-bar">
  <div class="stats-count"><span id="eventCount">N</span> ključnih događaja</div>
</div>

<div class="main-wrap">
  <div class="timeline" id="timeline"></div>
</div>

<footer>♦ Naziv ♦ Period ♦</footer>
```

### Event Data Structure

```js
var EVENTS = [
  {
    displayYear: '~3200 p.n.e.',   // approximate dates use ~
    title: 'Naslov događaja',
    img: '../../../assets/img/[tema]/slika.jpg',   // optional, local path
    imgCaption: 'Opis slike, izvor, muzej',          // optional
    desc: 'Narativni opis u 4-6 rečenica...',        // see Tone section
    place: 'Grad, danas [zemlja]',
    figures: 'Ime1, Ime2',
    fact: 'Zapanjujući detalj koji menja perspektivu...'  // ★ zanimljivo
  }
];
```

### buildEvent & toggleEvent Functions

These are identical across all era pages. Copy exactly:

```js
function buildEvent(e, uid) {
  var thumbHtml = e.img
    ? '<img src="' + e.img + '" alt="" class="event-thumb" loading="lazy" onerror="this.style.display=\'none\'">'
    : '';
  var imgHtml = e.img
    ? '<img src="' + e.img + '" alt="' + e.title + '" class="event-img" loading="lazy" onerror="this.style.display=\'none\';var c=this.nextElementSibling;if(c)c.style.display=\'none\'">' +
      '<p class="event-img-caption">' + (e.imgCaption || '') + '</p>'
    : '';

  return '<div class="event" id="' + uid + '" onclick="toggleEvent(\'' + uid + '\')">' +
    '<div class="event-card">' +
      '<div class="event-head">' +
        (thumbHtml ? '<div class="event-thumb-wrap">' + thumbHtml + '</div>' : '') +
        '<div class="event-date-col"><div class="event-date">' + e.displayYear + '</div></div>' +
        '<div class="event-main"><div class="event-title">' + e.title + '</div></div>' +
        '<div class="event-arrow">&#9658;</div>' +
      '</div>' +
      '<div class="event-body">' +
        imgHtml +
        '<div class="event-desc">' + e.desc + '</div>' +
        '<div class="event-meta-grid">' +
          (e.place   ? '<div class="event-meta-item"><div class="event-meta-label">Lokacija</div><div class="event-meta-val">' + e.place + '</div></div>' : '') +
          (e.figures ? '<div class="event-meta-item"><div class="event-meta-label">Kultura / Ličnosti</div><div class="event-meta-val">' + e.figures + '</div></div>' : '') +
        '</div>' +
        (e.fact ? '<div class="event-fact">' + e.fact + '</div>' : '') +
      '</div>' +
    '</div>' +
  '</div>';
}

function toggleEvent(uid) {
  var el = document.getElementById(uid);
  if (!el) return;
  var isOpen = el.classList.contains('open');
  document.querySelectorAll('.event.open').forEach(function(e) { e.classList.remove('open'); });
  if (!isOpen) el.classList.add('open');
}

var tl = document.getElementById('timeline');
var html = '';
EVENTS.forEach(function(e, idx) { html += buildEvent(e, 'ev-' + idx); });
tl.innerHTML = html;
document.getElementById('eventCount').textContent = EVENTS.length;
```

---

## Content Tone — "Pametan prijatelj"

**Never** write bullet-point PowerPoint style. Write like a knowledgeable friend explaining history at a table — accurate, enthusiastic, conversational.

### Rules

1. **desc** field = 4–6 sentence narrative paragraph
   - Šta se desilo + zašto je bitno + kako se odrazilo na buduće generacije
   - Jedno konkretno pitanje koje je ta civilizacija rešavala (isto kao mi danas)
   - Moderna analogija kada pomaže razumevanju
2. **fact** field = jedan zapanjujući detalj koji menja perspektivu
   - Počinje sa "Niko vam nije rekao..." ili iznenađujućim kontrastom
   - Ne sme biti ono što bi svako pretpostavio
3. Svi datumi su precizni. Sva imena su tačna. Sve činjenice proverene.
4. Ton je za odrasle, nije udžbenik, nije Wikipedia.

### Primer dobrog desc-a (Hamurabijev zakonik)

> "Hamurabi je shvatio da carevina bez pravila nije carevina — to je samo puno naoružanih ljudi koji se svađaju. Pa je usekao 282 zakona u bazaltnu stelu visoku skoro 2 metra i postavio je na trgu: nema izgovora da nisi znao. Sistem je bio brutalno jasan — zakon broj 229 kaže da ako graditelj napravi kuću koja se sruši i ubije vlasnika, graditelja pogube. Ali i bogati i siromašni su bili podjednako odgovorni pred istim zakonom — što je za 1754. p.n.e. bila revolucionarna ideja."

### Primer dobrog fact-a

> "Stela sa zakonima danas stoji u Luvru u Parizu. Pronašli su je Francuzi 1901. u Iranu — Elamiti su je odavno odneli kao ratni trofej. 3800 godina putujući zakonik."

---

## Images — Lokalno Hostovanje

**Nikada** ne koristiti Wikimedia hotlink direktno u HTML — vraća 429 (rate limit).

### Workflow za slike

1. Nađi sliku na Wikimedia Commons
2. Proveri tačan URL pomoću API-ja:
   ```
   https://commons.wikimedia.org/w/api.php?action=query&titles=File:FILENAME.jpg&prop=imageinfo&iiprop=url&format=json
   ```
3. Preuzmi lokalno:
   ```bash
   curl -L -A "Mozilla/5.0" -o naziv.jpg "https://upload.wikimedia.org/wikipedia/commons/..."
   ```
4. Resize ako je veće od 1MB:
   ```bash
   sips -Z 800 slika.jpg --out slika.jpg
   ```
5. Sačuvaj u: `assets/img/[tema]/naziv.jpg`
6. U HTML-u koristi relativnu putanju: `../../../assets/img/[tema]/naziv.jpg`

### Napomene za URL-ove

- Koristiti **direktne URL-ove bez `/thumb/`** — npr. `commons/a/ab/File.jpg`
- SVG mape: skinuti kao `.svg` (ne `.svg.png`)
- Proveriti da fajl nije manji od ~50KB (4KB = HTML greška, ne slika)

---

## Back Navigation Depths

| Lokacija fajla | Back link href |
|---|---|
| `kategorija/tema/index.html` | `../../index.html` |
| `istorija/epoha/tema/index.html` | `../../../index.html` |
| `kviz/index.html` | `../index.html` |

Dugme uvek glasi: **`← Pub Quiz`** (ne "← Istorija", ne "← Sport")

---

## Stari vek — Plan

6 civilizacija, sve `data-sc="starivek"` u index.html. Implementacioni redosled:

| # | Civilizacija | Fajl | Status |
|---|---|---|---|
| 1 | Mesopotamija | `istorija/starivek/mesopotamija/index.html` | ✅ done |
| 2 | Stari Egipat | `istorija/starivek/egipat/index.html` | 🔜 |
| 3 | Stara Grčka | `istorija/starivek/grcka/index.html` | 🔜 |
| 4 | Rimsko carstvo | `istorija/starivek/rim/index.html` | 🔜 |
| 5 | Stara Kina | `istorija/starivek/kina/index.html` | 🔜 |
| 6 | Stara Indija | `istorija/starivek/indija/index.html` | 🔜 |

Za svaku: ~10–13 događaja, lokalno hostovane slike, mapa na vrhu, "pametan prijatelj" ton.

---

## Key Constraints

- **No npm / no build tools**
- **No external CSS frameworks** (no Tailwind, Bootstrap)
- **No external JS libraries** (no React, Vue, jQuery)
- **No TypeScript**
- **No separate CSS/JS files** (except `sw.js` and `nemanjici.js`)
- **Always use CSS custom properties** from established palette
- **Always use Georgia serif font**
- **All text in Serbian** (Latin script, diacritics: š ć č ž đ)
- **Never hotlink Wikimedia images** — download and host locally
- **Back button always says "← Pub Quiz"**
