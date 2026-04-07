
const rulers = {
  nemanja: {
    id: 'nemanja',
    name: 'Stefan Nemanja',
    shortName: 'Stefan Nemanja',
    title: 'Veliki Župan',
    born: 'oko 1113.',
    died: '1199.',
    reignStart: 1166,
    reignEnd: 1196,
    reign: '1166 — 1196',
    spouse: 'Kneginja Ana',
    children: ['vukan', 'stefan1', 'rastko'],
    parent: null,
    bio: 'Osnivač dinastije Nemanjića i srpske srednjovekovne države. Ujedinio srpske župe i stvorio moćnu srpsku državu, odbivši vizantijsko vrhovništvo.',
    achievements: [
      'Ujedinio sve srpske župe pod jednom vlašću',
      'Proterao bogumile i utvrdio pravoslavlje kao državnu veru',
      'Odbio vizantijsku prevlast i izvojevao nezavisnost',
      'Na Studeničkom saboru 1196. predao vlast sinu Stefanu',
      'Primio monaški postrig pod imenom Simeon — proglašen svetim',
      'Zajedno sa sinom Savom zasadio Hilandar na Svetoj Gori'
    ],
    zaduzbine: [
      { name: 'Manastir Studenica', desc: 'Najznačajnija srpska zadužbina, "Majka srpskih manastira", Raška, 1183–1196.' },
      { name: 'Đurđevi Stupovi', desc: 'Manastir u Rasu (Novi Pazar), jedna od prvih Nemanjićkih crkava, 1171.' },
      { name: 'Manastir Hilandar', desc: 'Zajednički sa sinom Savom obnovio srpski manastir na Svetoj Gori Atonskoj, 1198.' }
    ]
  },
  vukan: {
    id: 'vukan',
    name: 'Vukan Nemanjić',
    shortName: 'Vukan',
    title: 'Knez Zete',
    born: 'oko 1165.',
    died: 'oko 1209.',
    reignStart: 1196,
    reignEnd: 1208,
    reign: '1196 — 1208 (Zeta)',
    spouse: '—',
    children: [],
    parent: 'nemanja',
    bio: 'Stariji sin Stefana Nemanje, vladao Zetom. Vodio borbu za presto sa bratom Stefanom uz pomoć ugarskog kralja, ali je na kraju izgubio.',
    achievements: [
      'Vladao Zetom kao posebnom oblašću',
      'Kratko preoteo presto od brata Stefana uz ugarsku pomoć (1202–1204)',
      'Primio rimokatoličanstvo kao politički potez',
      'Na kraju pomirio se s bratom Stefanom'
    ],
    zaduzbine: [
      { name: '—', desc: 'Nema poznatih zadužbina koje se pripisuju Vukanu.' }
    ]
  },
  stefan1: {
    id: 'stefan1',
    name: 'Stefan Prvovenčani',
    shortName: 'Stefan Prvovenčani',
    title: 'Kralj Srbije',
    born: 'oko 1165.',
    died: '1228.',
    reignStart: 1196,
    reignEnd: 1228,
    reign: '1196 — 1228',
    spouse: 'Eudokija Angelina, Anastazija',
    children: ['radoslav', 'vladislav', 'uros1'],
    parent: 'nemanja',
    bio: 'Drugi sin Stefana Nemanje. Dobio kraljevsku krunu od pape 1217 — prvi srpski kralj. Brat svetog Save koji mu je pribavio autokefalnost srpske crkve.',
    achievements: [
      'Prvi srpski kralj — okrunjen 1217. od papskog legata',
      'Zahvaljujući bratu Savi, Srbija dobila autokefalnu crkvu 1219.',
      'Učvrstio srpsku kraljevinu i državnu organizaciju',
      'Napisao "Žitije Svetog Simeona" — jedno od prvih srpskih književnih dela'
    ],
    zaduzbine: [
      { name: 'Manastir Žiča', desc: 'Episkopska crkva srpske crkve, krунisaonica srpskih vladara, kod Kraljeva, oko 1220.' }
    ]
  },
  rastko: {
    id: 'rastko',
    name: 'Sveti Sava',
    shortName: 'Sveti Sava',
    title: 'Arhiepiskop / Svetac',
    born: '1175.',
    died: '1236.',
    reignStart: 1219,
    reignEnd: 1235,
    reign: '1219 — 1235 (Arhiepiskop)',
    spouse: '—',
    children: [],
    parent: 'nemanja',
    bio: 'Treći sin Stefana Nemanje, rodom knez Rastko. Pobegao na Svetu Goru i zamonašio se. Utemeljio autokefalnu Srpsku pravoslavnu crkvu i postao njen prvi arhiepiskop.',
    achievements: [
      'Osnovao autokefalnu Srpsku pravoslavnu crkvu 1219.',
      'Organizovao srpsku crkvu i napisao Zakonopravilo (Nomokanon)',
      'Proglašen svetim odmah po smrti — zaštitnik Srbije',
      'Napisao žitija oca i brata — začetnik srpske pismenosti',
      'Obišao Svetu Zemlju i doneo relikvije u Srbiju'
    ],
    zaduzbine: [
      { name: 'Manastir Hilandar', desc: 'Obnovio zajedno s ocem na Svetoj Gori Atonskoj, 1198. — srpska duhovna prestonica.' },
      { name: 'Manastir Mileševa', desc: 'Zadužbina u Polimlje, 1218–1228, gde su čuvane njegove mošti.' }
    ]
  },
  radoslav: {
    id: 'radoslav',
    name: 'Stefan Radoslav',
    shortName: 'Radoslav',
    title: 'Kralj Srbije',
    born: 'oko 1192.',
    died: 'oko 1235.',
    reignStart: 1228,
    reignEnd: 1234,
    reign: '1228 — 1234',
    spouse: 'Eudokija Angelina (Vizantija)',
    children: [],
    parent: 'stefan1',
    bio: 'Sin Stefana Prvovenčanog, vladao kratko. Bio pod jakim vizantijskim uticajem zbog žene, što je izazvalo nezadovoljstvo vlastele. Svrgnut od brata Vladislava.',
    achievements: [
      'Nasledio oca i nastavio vladavinu',
      'Orijentisan ka Vizantiji — vizantijski kulturni uticaj',
      'Svrgnut od brata Vladislava uz podršku vlastele'
    ],
    zaduzbine: [
      { name: 'Crkva u Studenici', desc: 'Pripisuje mu se ktitorstvo nekih građevinskih zahvata u Studenici.' }
    ]
  },
  vladislav: {
    id: 'vladislav',
    name: 'Stefan Vladislav',
    shortName: 'Vladislav',
    title: 'Kralj Srbije',
    born: 'oko 1198.',
    died: 'oko 1264.',
    reignStart: 1234,
    reignEnd: 1243,
    reign: '1234 — 1243',
    spouse: 'Beloslava (kći bugarskog cara)',
    children: [],
    parent: 'stefan1',
    bio: 'Sin Stefana Prvovenčanog. Svrgao brata Radoslava, oslanjao se na Bugarsku. Zbačen od mlađeg brata Uroša I koji je uživao podršku domaće vlastele.',
    achievements: [
      'Uspešno preuzeo presto svrgavanjem brata',
      'Orijentisan ka Bugarskoj umesto Vizantiji',
      'Zbačen 1243. od brata Uroša I',
      'Posle toga vladao Zetom kao oblasni gospodar'
    ],
    zaduzbine: [
      { name: 'Manastir Mileševa', desc: 'Dovršio i ukrasio manastir koji je počeo otac, preneо mošti Svetog Save iz Tarnova 1237.' }
    ]
  },
  uros1: {
    id: 'uros1',
    name: 'Stefan Uroš I',
    shortName: 'Uroš I',
    title: 'Kralj Srbije',
    born: 'oko 1203.',
    died: '1277.',
    reignStart: 1243,
    reignEnd: 1276,
    reign: '1243 — 1276',
    spouse: 'Jelena Anžujska (Francuska)',
    children: ['dragutin', 'milutin'],
    parent: 'stefan1',
    bio: 'Treći sin Stefana Prvovenčanog. Duga i mirna vladavina, razvijao rudarstvo i trgovinu. Oženio se Jelenom Anžujskom čime je otvorio veze sa Zapadom.',
    achievements: [
      'Vladao rekordnih 33 godine — stabilnost i prosperitet',
      'Razvio rudarstvo srebra i zlata — Brskovo, Rudnik',
      'Uveo dubrovačke trgovce i razvio spoljnu trgovinu',
      'Uspostavio dobre odnose sa Ugarskom i Vizantijom',
      'Zbačen od sina Dragutina 1276.'
    ],
    zaduzbine: [
      { name: 'Manastir Sopoćani', desc: 'Zadužbina kraj Raša (Novi Pazar), ~1265. Crkva Svete Trojice, poznat po freskama svetske vrednosti.' },
      { name: 'Crkva u Bistrici', desc: 'Manja zadužbina u oblasti Raške.' }
    ]
  },
  dragutin: {
    id: 'dragutin',
    name: 'Stefan Dragutin',
    shortName: 'Dragutin',
    title: 'Kralj Srbije',
    born: 'oko 1253.',
    died: '1316.',
    reignStart: 1276,
    reignEnd: 1282,
    reign: '1276 — 1282',
    spouse: 'Katalina Ugarska',
    children: [],
    parent: 'uros1',
    bio: 'Sin Uroša I. Uz pomoć tasta ugarskog kralja zbacio oca. Nakon povrede na konju 1282. predao vlast bratu Milutinu, a sam vladao severnim oblastima kao ugarski vazal.',
    achievements: [
      'Zbacio oca uz ugarsku pomoć i preuzeo presto',
      'Nakon povrede predao vlast bratu i vladao Sremom',
      'Vladao severnom Srbijom — "Zemlja kralja Dragutina"',
      'Primio franjevačke redovnike — mostovi prema Zapadu',
      'Posle smrti proglašen blaženim od Rimokatoličke crkve'
    ],
    zaduzbine: [
      { name: 'Manastir Ariljе', desc: 'Zadužbina u Moravičkoj oblasti, crkva Sv. Ahilija, 1296. Odlične freske.' },
      { name: 'Crkva u Beogradu', desc: 'Obnavljao crkve u Beogradu koji mu je bio pod upravom.' }
    ]
  },
  milutin: {
    id: 'milutin',
    name: 'Stefan Uroš II Milutin',
    shortName: 'Milutin',
    title: 'Kralj Srbije',
    born: 'oko 1253.',
    died: '1321.',
    reignStart: 1282,
    reignEnd: 1321,
    reign: '1282 — 1321',
    spouse: 'Simonida (kći vizantijskog cara)',
    children: ['decanski'],
    parent: 'uros1',
    bio: 'Jedan od najvećih srpskih vladara. Proširio teritoriju na jug — Makedonija, Kosovo. Izgradio je 40 crkava i manastira. Vladao je skoro 40 godina.',
    achievements: [
      'Proširio Srbiju na Makedoniju, Kosovo i Metohiju',
      'Pobedio Vizantiju i uzeo kao miraz veoma mlade Simonide',
      'Sagradio ili obnovio oko 40 crkava i manastira',
      'Razvio srpsko "zlatno doba" kulture i umetnosti',
      'Uveo rascefovanje — zlato, srebro, dragoceni metali',
      'Proglašen svetim od Srpske pravoslavne crkve'
    ],
    zaduzbine: [
      { name: 'Manastir Gračanica', desc: 'Kosovo, 1313–1321. Biseri srpske arhitekture, UNESCO zaštita. Posvećen Uspenju Bogorodice.' },
      { name: 'Manastir Hilandar (obnova)', desc: 'Potpuno obnovio Hilandar na Svetoj Gori — novi konaci, kula Milutina.' },
      { name: 'Manastir Banjska', desc: 'Zamišljen kao mauzolej, Zvečan, oko 1313. Jedna od najvećih crkava svog doba.' },
      { name: 'Sveti Nikita kod Skoplja', desc: 'Crkva u Banjani, oko 1307–1308, odlične freske.' },
      { name: 'Crkva Sv. Đorđa u Staroj Nagoričani', desc: 'Obnovio staru crkvu kraj Kumanova 1317–1318, freske svetske vrednosti.' }
    ]
  },
  decanski: {
    id: 'decanski',
    name: 'Stefan Uroš III Dečanski',
    shortName: 'Dečanski',
    title: 'Kralj Srbije',
    born: 'oko 1285.',
    died: '1331.',
    reignStart: 1321,
    reignEnd: 1331,
    reign: '1321 — 1331',
    spouse: 'Teodora Bugarska, Marija Paleolog',
    children: ['dusan'],
    parent: 'milutin',
    bio: 'Sin Milutina. Ослепљен по очевoj naредби, čudesno prозрео — proglašen svetim. Pobedio Bugarsku i Vizantiju u bici na Velbuždu 1330. Ubijen po naređenju sopstvenog sina Dušana.',
    achievements: [
      'Pobedio bugarsko-vizantijsku koaliciju u bici na Velbuždu 1330.',
      'Bica na Velbuždu — prekretnica, Srbija postala sila na Balkanu',
      'Proglašen svetim — mošti čuvane u Dečanima',
      'Svrgnut i ubijen od sina Dušana 1331.',
      'Bio oslepljen od oca, ali se čudesno izlečio — odatle nadimak'
    ],
    zaduzbine: [
      { name: 'Manastir Visoki Dečani', desc: 'Kraj Dečana, Metohija, 1327–1335. Najveća srpska sredovekovna crkva. UNESCO svetska baština.' }
    ]
  },
  dusan: {
    id: 'dusan',
    name: 'Stefan Uroš IV Dušan',
    shortName: 'Car Dušan',
    title: 'Kralj (1331), потом Цар Срба и Грка (1346)',
    born: '1308.',
    died: '1355.',
    reignStart: 1331,
    reignEnd: 1355,
    reign: '1331 — 1355',
    spouse: 'Jelena Bugarska',
    children: ['uros5'],
    parent: 'decanski',
    bio: 'Najveći srpski vladar. Proklamovao Srpsko Carstvo 1346. Doneo Dušanov zakonik — najrazvijeniji pravni kodeks svog vremena na Balkanu. Proširio državu do maksimuma.',
    achievements: [
      'Proglasen carem 1346. — Srpsko Carstvo na vrhuncu moći',
      'Doneo Dušanov zakonik 1349. i 1354. — kodifikacija prava',
      'Proširio Srbiju na ceo Balkan sem Carigrada i Soluna',
      'Pečanska patrijaršija — Srpska crkva uzdignuta na nivo patrijaršije',
      'Planirao osvajanje Carigrada ali umro iznenada 1355.',
      'Izgradio moćnu vojsku i dvorsku administraciju po vizantijskom uzoru'
    ],
    zaduzbine: [
      { name: 'Manastir Sveta Arhanđela kod Prizrena', desc: 'Zamišljen kao carski mauzolej, 1343–1352. Jedna od najvećih crkava Balkana, danas u ruinama.' },
      { name: 'Manastir Lesnovo', desc: 'Obnovio i proširio manastir kod Kratova u Makedoniji, 1341.' }
    ]
  },
  uros5: {
    id: 'uros5',
    name: 'Stefan Uroš V',
    shortName: 'Uroš V',
    title: 'Car Srbije',
    born: '1336.',
    died: '1371.',
    reignStart: 1355,
    reignEnd: 1371,
    reign: '1355 — 1371',
    spouse: '—',
    children: [],
    parent: 'dusan',
    bio: 'Poslednji Nemanjić. Nasledio carstvo od oca ali nije imao njegovu snagu. Carstvo se raspalo na oblasti oblasnih gospodara. Poginuo ili umro 1371. bez naslednika — kraj dinastije.',
    achievements: [
      'Poslednji car iz dinastije Nemanjića',
      'Srpsko carstvo se raspalo na feudalne oblasti',
      'Nije imao dece — kraj Nemanjića',
      'Oblast prepuštena oblasnim gospodarima: Mrnjavčevići, Lazarevići',
      'Smrt 1371. označila kraj ere Nemanjića i početak novih srpskih vlasteoskih porodica'
    ],
    zaduzbine: [
      { name: '—', desc: 'Nema poznatih većih zadužbina — vladavina obilježena raspadom carstva.' }
    ]
  }
};

// ─── TREE LAYOUT ───────────────────────────────────────────────────────────────
// Node positions [x, y, width, height]
const nodeLayout = {
  nemanja:  { x: 310, y: 20,  w: 170, h: 62 },
  // children of Nemanja
  vukan:    { x: 30,  y: 145, w: 130, h: 56 },
  stefan1:  { x: 310, y: 145, w: 170, h: 56 },
  rastko:   { x: 630, y: 145, w: 140, h: 56 },
  // children of Stefan1
  radoslav: { x: 100, y: 290, w: 130, h: 56 },
  vladislav:{ x: 310, y: 290, w: 130, h: 56 },
  uros1:    { x: 510, y: 290, w: 130, h: 56 },
  // children of Uroš I
  dragutin: { x: 390, y: 430, w: 130, h: 56 },
  milutin:  { x: 580, y: 430, w: 140, h: 56 },
  // child of Milutin
  decanski: { x: 570, y: 560, w: 160, h: 56 },
  // child of Dečanski
  dusan:    { x: 560, y: 645, w: 160, h: 58 },
  uros5:    { x: 400, y: 645, w: 140, h: 58 }
};

const connections = [
  // Nemanja → children
  { from: 'nemanja', to: 'vukan', style: 'side' },
  { from: 'nemanja', to: 'stefan1', style: 'direct' },
  { from: 'nemanja', to: 'rastko', style: 'side' },
  // Stefan1 → children
  { from: 'stefan1', to: 'radoslav', style: 'side' },
  { from: 'stefan1', to: 'vladislav', style: 'side' },
  { from: 'stefan1', to: 'uros1', style: 'side' },
  // Uroš I → children
  { from: 'uros1', to: 'dragutin', style: 'side' },
  { from: 'uros1', to: 'milutin', style: 'direct' },
  // Milutin → Dečanski
  { from: 'milutin', to: 'decanski', style: 'direct' },
  // Dečanski → Dušan
  { from: 'decanski', to: 'dusan', style: 'direct' },
  // Dušan → Uroš V
  { from: 'dusan', to: 'uros5', style: 'side' }
];

function cx(id) { return nodeLayout[id].x + nodeLayout[id].w / 2; }
function cy(id) { return nodeLayout[id].y + nodeLayout[id].h / 2; }
function bottom(id) { return nodeLayout[id].y + nodeLayout[id].h; }
function top(id) { return nodeLayout[id].y; }

function buildTree() {
  const svg = document.getElementById('familyTree');

  // Draw connections
  connections.forEach(c => {
    const fx = cx(c.from), fy = bottom(c.from);
    const tx = cx(c.to), ty = top(c.to);
    const my = (fy + ty) / 2;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${fx} ${fy} C ${fx} ${my}, ${tx} ${my}, ${tx} ${ty}`);
    path.setAttribute('class', c.style === 'direct' ? 'tree-line' : 'tree-line-gold');
    svg.appendChild(path);
  });

  // Draw nodes
  Object.keys(nodeLayout).forEach(id => {
    const r = rulers[id];
    const l = nodeLayout[id];
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'node-group');
    g.setAttribute('id', 'node-' + id);

    // Rect
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('class', 'node-rect');
    rect.setAttribute('x', l.x);
    rect.setAttribute('y', l.y);
    rect.setAttribute('width', l.w);
    rect.setAttribute('height', l.h);
    rect.setAttribute('rx', 8);
    g.appendChild(rect);

    // Name
    const nameEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    nameEl.setAttribute('class', 'node-name');
    nameEl.setAttribute('x', cx(id));
    nameEl.setAttribute('y', l.y + 18);
    nameEl.textContent = r.shortName;
    g.appendChild(nameEl);

    // Title
    const titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    titleEl.setAttribute('class', 'node-title');
    titleEl.setAttribute('x', cx(id));
    titleEl.setAttribute('y', l.y + 32);
    titleEl.textContent = r.title.length > 22 ? r.title.slice(0,22)+'…' : r.title;
    g.appendChild(titleEl);

    // Years
    const yearsEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    yearsEl.setAttribute('class', 'node-years');
    yearsEl.setAttribute('x', cx(id));
    yearsEl.setAttribute('y', l.y + 47);
    yearsEl.textContent = r.reign;
    g.appendChild(yearsEl);

    g.addEventListener('click', () => showRuler(id));
    svg.appendChild(g);
  });
}

// ─── TIMELINE ──────────────────────────────────────────────────────────────────
function buildTimeline() {
  const bar = document.getElementById('timelineBar');
  const order = ['nemanja','stefan1','radoslav','vladislav','uros1','dragutin','milutin','decanski','dusan','uros5'];
  order.forEach((id, i) => {
    const r = rulers[id];
    const item = document.createElement('div');
    item.className = 'tl-item';
    item.id = 'tl-' + id;
    item.innerHTML = `<span class="tl-name">${r.shortName}</span><span class="tl-year">${r.reignStart}</span>`;
    item.addEventListener('click', () => showRuler(id));
    bar.appendChild(item);
    if (i < order.length - 1) {
      const sep = document.createElement('div');
      sep.className = 'tl-sep';
      bar.appendChild(sep);
    }
  });
}

// ─── SHOW RULER ────────────────────────────────────────────────────────────────
function showRuler(id) {
  const r = rulers[id];
  const panel = document.getElementById('detailPanel');

  // Deactivate all nodes
  document.querySelectorAll('.node-group').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.tl-item').forEach(n => n.classList.remove('active'));

  // Activate selected
  const node = document.getElementById('node-' + id);
  if (node) node.classList.add('active');
  const tl = document.getElementById('tl-' + id);
  if (tl) { tl.classList.add('active'); tl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }

  // Build detail
  panel.classList.remove('empty');

  const achievementsHTML = r.achievements.map(a => `<li>${a}</li>`).join('');
  const zaduzbineHTML = r.zaduzbine.map(z => `
    <div class="zaduzbina-item">
      <div class="z-name">⛪ ${z.name}</div>
      <div class="z-desc">${z.desc}</div>
    </div>
  `).join('');

  const childNames = (r.children || []).map(cid => rulers[cid]?.shortName).filter(Boolean).join(', ') || '—';
  const parentName = r.parent ? (rulers[r.parent]?.shortName || '—') : 'Osnivač';

  panel.innerHTML = `
    <div class="detail-header">
      <button class="close-btn" onclick="closeDetail()">✕</button>
      <div class="ruler-title">Vladar Srbije</div>
      <h2>${r.name}</h2>
      <div class="detail-subtitle">${r.title}</div>
      <span class="reign-badge">☩ ${r.reign}</span>
    </div>
    <div class="detail-body">

      <div class="detail-section">
        <h3>Lični podaci</h3>
        <div class="info-grid">
          <div class="info-item"><label>Rođen</label><span>${r.born}</span></div>
          <div class="info-item"><label>Umro</label><span>${r.died}</span></div>
          <div class="info-item"><label>Vladavina</label><span>${r.reign}</span></div>
          <div class="info-item"><label>Supružnik</label><span>${r.spouse}</span></div>
          <div class="info-item"><label>Otac / Prethodnik</label><span>${parentName}</span></div>
          <div class="info-item"><label>Naslednici</label><span>${childNames}</span></div>
          <div class="info-item full"><label>Biografija</label><span>${r.bio}</span></div>
        </div>
      </div>

      <div class="detail-section">
        <h3>Najvažnija dostignuća</h3>
        <ul class="achievements-list">${achievementsHTML}</ul>
      </div>

      <div class="detail-section">
        <h3>Zadužbine</h3>
        <div class="zaduzbine-list">${zaduzbineHTML}</div>
      </div>

    </div>
  `;
}

function closeDetail() {
  const panel = document.getElementById('detailPanel');
  panel.classList.add('empty');
  panel.innerHTML = `<span class="hint-icon">☩</span><div class="hint">Klikni na vladara u porodičnom stablu da vidiš njegove najvažnije informacije</div>`;
  document.querySelectorAll('.node-group').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.tl-item').forEach(n => n.classList.remove('active'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { buildTree(); buildTimeline(); });
} else {
  buildTree();
  buildTimeline();
}
