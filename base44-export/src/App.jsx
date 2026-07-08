import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Menu, Moon, Phone, Sun, X } from 'lucide-react';

const serviceCards = [
  ['svarovane-konstrukce', 'Svařované konstrukce', 'Rámy, lávky, podpěry, kryty a další ocelové konstrukce podle výkresu nebo provozních požadavků.'],
  ['tlakove-nadoby', 'Tlakové nádoby', 'Výroba, úpravy a opravy tlakových zařízení včetně dokumentace, kontroly a servisní podpory.'],
  ['vzduchotechnika', 'Vzduchotechnika', 'Dodávky částí vzduchotechnických tras, napojení na technologii a servis provozních systémů.'],
  ['opravy-udrzba', 'Opravy a údržba', 'Servisní zásahy, rekonstrukce, výměny opotřebených částí a úpravy zařízení podle stavu provozu.'],
  ['zakazkova-kovovyroba', 'Zakázková kovovýroba', 'Jednotlivé kusy i menší série: držáky, kryty, přípravky, stojany, zábradlí a technické sestavy.'],
  ['elektromontaze', 'Elektromontáže', 'Elektromontážní práce pro výrobní provozy, technologické celky a napojení zařízení včetně přípravy rozvodů.'],
];

const sectors = [
  ['01', 'Průmysl', 'Dodáváme průmyslová řešení pro výrobní podniky — od ocelových konstrukcí po komplexní technologické celky.', ['Svařované konstrukce', 'Tlakové nádoby', 'Průmyslové potrubní systémy', 'Technologické montáže']],
  ['02', 'Obce a města', 'Navrhujeme a dodáváme technologie pro vodohospodářství, komunální infrastrukturu a veřejný sektor.', ['Technologie ČOV', 'Vzduchotechnika', 'Infrastrukturní projekty', 'Údržba a servis']],
  ['03', 'Zakázková výroba', 'Realizujeme individuální zakázky na míru — od kusové výroby po speciální konstrukce podle dokumentace.', ['Kovovýroba na zakázku', 'Kusová a malosériová výroba', 'Speciální přípravky', 'Opravy a rekonstrukce']],
];

const steps = [
  ['01', 'Konzultace', 'Projdeme vaše zadání, technické požadavky, provozní omezení a navrhneme vhodný postup realizace.'],
  ['02', 'Návrh a projekce', 'Zpracujeme technickou dokumentaci, výrobní výkresy, specifikace materiálů a podklady pro výrobu nebo montáž.'],
  ['03', 'Výroba', 'Vyrobíme díly, konstrukce nebo technologické celky ve vlastních dílnách s důrazem na kvalitu, přesnost a termín dodání.'],
  ['04', 'Montáž a dodání', 'Zajistíme dopravu, montáž na místě, napojení technologie a uvedení do provozu včetně potřebných zkoušek.'],
  ['05', 'Servis a údržba', 'Poskytujeme záruční i pozáruční servis, pravidelnou údržbu, technickou podporu a havarijní zásahy.'],
];

const references = [
  ['2023', 'Ocelová konstrukce výrobní haly', 'Průmyslový podnik, Liberecký kraj', 'Návrh, výroba a montáž nosné ocelové konstrukce, 850 t oceli'],
  ['2022', 'Rekonstrukce technologie ČOV', 'Město Mimoň', 'Kompletní výměna strojního vybavení, potrubních rozvodů a aeračního systému'],
  ['2023', 'Tlakové nádoby pro chemický provoz', 'Chemický závod, Ústecký kraj', 'Výroba 12 ks tlakových zásobníků dle PED, včetně revizní dokumentace'],
  ['2024', 'VZT systém pro výrobní provoz', 'Potravinářský podnik, Středočeský kraj', 'Kompletní návrh a instalace vzduchotechnického systému, 2 400 m² plochy'],
];

const typographyFonts = [
  ['inter', 'Inter', '"Inter", "Helvetica Neue", Arial, sans-serif'],
  ['plex', 'IBM Plex Mono', '"IBM Plex Mono", "Roboto Mono", var(--ekos-font-mono)'],
  ['jetbrains', 'JetBrains Mono', 'var(--ekos-font-mono)'],
];

const typographyGroups = [
  { id: 'section', label: 'Nadpisy sekcí', sample: 'Specializace podle sektoru', previewClass: 'ekos-heading-md', vars: { font: '--ekos-section-heading-font', size: '--ekos-section-heading-size', weight: '--ekos-section-heading-weight' }, sizes: [['compact', 'Menší · 28-39 px', 'clamp(1.75rem, 2.9vw, 2.45rem)'], ['balanced', 'Vyvážené · 31-44 px', 'clamp(1.95rem, 3.15vw, 2.75rem)'], ['large', 'Velké · 36-50 px', 'clamp(2.25rem, 3.6vw, 3.15rem)']], weights: [['light', 'Lehké · 360', '360'], ['regular', 'Střední · 460', '460'], ['firm', 'Pevné · 560', '560']] },
  { id: 'feature', label: 'Nadpisy velkých karet', sample: 'Průmysl', previewClass: 'ekos-sector-heading', vars: { font: '--ekos-feature-heading-font', size: '--ekos-feature-heading-size', weight: '--ekos-feature-heading-weight' }, sizes: [['compact', 'Menší · 22-30 px', 'clamp(1.35rem, 2.2vw, 1.85rem)'], ['balanced', 'Vyvážené · 24-34 px', 'clamp(1.5rem, 2.55vw, 2.15rem)'], ['large', 'Velké · 28-39 px', 'clamp(1.75rem, 2.9vw, 2.45rem)']], weights: [['light', 'Lehké · 420', '420'], ['regular', 'Střední · 520', '520'], ['firm', 'Pevné · 640', '640']] },
  { id: 'card', label: 'Nadpisy běžných karet', sample: 'Svařované konstrukce', previewClass: 'ekos-card-heading', vars: { font: '--ekos-card-heading-font', size: '--ekos-card-heading-size', weight: '--ekos-card-heading-weight' }, sizes: [['compact', 'Menší · 15 px', '0.95rem'], ['balanced', 'Vyvážené · 17 px', '1.05rem'], ['large', 'Velké · 19 px', '1.18rem']], weights: [['light', 'Lehké · 420', '420'], ['regular', 'Střední · 520', '520'], ['firm', 'Pevné · 620', '620']] },
  { id: 'small', label: 'Malé procesní nadpisy', sample: 'Konzultace', previewClass: 'ekos-step-heading', vars: { font: '--ekos-small-heading-font', size: '--ekos-small-heading-size', weight: '--ekos-small-heading-weight' }, sizes: [['compact', 'Menší · 12 px', '0.75rem'], ['balanced', 'Vyvážené · 13 px', '0.84rem'], ['large', 'Velké · 15 px', '0.95rem']], weights: [['light', 'Lehké · 420', '420'], ['regular', 'Střední · 520', '520'], ['firm', 'Pevné · 620', '620']] },
  { id: 'meta', label: 'Popisky a metadata', sample: '1994 - 30+ let zkušeností', previewClass: 'ekos-kicker-label', vars: { font: '--ekos-meta-heading-font', size: '--ekos-meta-heading-size', weight: '--ekos-meta-heading-weight' }, sizes: [['compact', 'Menší · 11 px', '0.68rem'], ['balanced', 'Vyvážené · 12 px', '0.75rem'], ['large', 'Velké · 13 px', '0.84rem']], weights: [['light', 'Lehké · 400', '400'], ['regular', 'Střední · 500', '500'], ['firm', 'Pevné · 600', '600']] },
  { id: 'body', label: 'Body texty', sample: 'Spolehlivý partner pro průmyslovou výrobu a montáže.', previewClass: 'ekos-body-preview', vars: { font: '--ekos-body-text-font', size: '--ekos-body-text-size', weight: '--ekos-body-text-weight' }, sizes: [['compact', 'Menší · 14 px', '0.875rem'], ['balanced', 'Vyvážené · 16 px', '1rem'], ['large', 'Velké · 18 px', '1.125rem']], weights: [['light', 'Lehké · 350', '350'], ['regular', 'Střední · 400', '400'], ['firm', 'Pevné · 500', '500']] },
  { id: 'menu', label: 'Menu', sample: 'Úvod  Služby  O nás', previewClass: 'ekos-menu-preview', vars: { font: '--ekos-menu-font', size: '--ekos-menu-size', weight: '--ekos-menu-weight' }, sizes: [['compact', 'Menší · 11 px', '0.68rem'], ['balanced', 'Vyvážené · 13 px', '0.8125rem'], ['large', 'Velké · 14 px', '0.875rem']], weights: [['light', 'Lehké · 400', '400'], ['regular', 'Střední · 500', '500'], ['firm', 'Pevné · 600', '600']] },
  { id: 'footer', label: 'Patička', sample: 'Navigace · Služby · Kontakt', previewClass: 'ekos-footer-preview', vars: { font: '--ekos-footer-font', size: '--ekos-footer-size', weight: '--ekos-footer-weight' }, sizes: [['compact', 'Menší · 12 px', '0.75rem'], ['balanced', 'Vyvážené · 14 px', '0.875rem'], ['large', 'Velké · 16 px', '1rem']], weights: [['light', 'Lehké · 350', '350'], ['regular', 'Střední · 400', '400'], ['firm', 'Pevné · 500', '500']] },
];

const typographyDefaults = {
  section: { font: 'inter', size: 'compact', weight: 'light' },
  feature: { font: 'inter', size: 'compact', weight: 'light' },
  card: { font: 'inter', size: 'balanced', weight: 'light' },
  small: { font: 'inter', size: 'balanced', weight: 'light' },
  meta: { font: 'plex', size: 'balanced', weight: 'regular' },
  body: { font: 'inter', size: 'balanced', weight: 'regular' },
  menu: { font: 'plex', size: 'balanced', weight: 'light' },
  footer: { font: 'inter', size: 'balanced', weight: 'regular' },
};

const colorTokens = [
  ['Pozadí', '--ekos-background', '#151b22'],
  ['Text', '--ekos-foreground', '#f4f6f8'],
  ['Karta', '--ekos-card', '#242b34'],
  ['Karta silná', '--ekos-card-strong', '#2c3440'],
  ['Zelená hlavní', '--ekos-primary', '#3fcf58'],
  ['Text na zelené', '--ekos-primary-foreground', '#0a0a0a'],
  ['Oranžový akcent', '--ekos-accent', '#ff5f1f'],
  ['Jemný akcent', '--ekos-accent-soft', '#ff8b4f'],
  ['Tlumená plocha', '--ekos-muted', '#38424d'],
  ['Tlumený text', '--ekos-muted-foreground', '#b4bbc4'],
  ['Linka / border', '--ekos-border', '#505a66'],
];



function Label({ children }) { return <p className="ekos-kicker-label font-mono text-primary text-xs tracking-[.3em] uppercase mb-4">{children}</p>; }
function Heading({ children }) { return <h2 className="ekos-heading-md">{children}</h2>; }
function ServiceCard({ item, className = '' }) { return <article className={`ekos-card ${className}`}><div><h3 className="ekos-card-heading font-bold text-lg uppercase mb-2">{item[1]}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item[2]}</p></div></article>; }


function TypographyPalette() {
  const [settings, setSettings] = useState(typographyDefaults);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    typographyGroups.forEach(group => {
      const current = settings[group.id];
      const font = typographyFonts.find(item => item[0] === current.font) || typographyFonts[0];
      const size = group.sizes.find(item => item[0] === current.size) || group.sizes[1];
      const weight = group.weights.find(item => item[0] === current.weight) || group.weights[1];
      root.style.setProperty(group.vars.font, font[2]);
      root.style.setProperty(group.vars.size, size[2]);
      root.style.setProperty(group.vars.weight, weight[2]);
    });
  }, [settings]);

  const choose = (groupId, key, value) => setSettings(current => ({ ...current, [groupId]: { ...current[groupId], [key]: value } }));

  return <aside className={`ekos-design-lab ${minimized ? 'is-minimized' : ''}`} aria-labelledby="design-lab-title"><div className="ekos-design-lab-titlebar"><div><p className="ekos-kicker-label">Pracovní paleta</p><h2 id="design-lab-title">Typografie a barvy</h2></div><button type="button" className="ekos-type-reset" onClick={() => setMinimized(value => !value)}>{minimized ? 'Otevřít' : 'Minimalizovat'}</button></div><div className="ekos-design-lab-body"><section className="ekos-type-lab-section" aria-label="Typografie"><div className="ekos-type-lab-subhead"><h3>Typografie</h3><button type="button" className="ekos-type-reset" onClick={() => setSettings(typographyDefaults)}>Reset</button></div><div className="ekos-type-grid">{typographyGroups.map(group => { const current = settings[group.id]; return <article className="ekos-type-card" key={group.id}><div className="ekos-type-card-head"><p>{group.label}</p><div className="ekos-type-preview"><span className={group.previewClass}>{group.sample}</span></div></div><div className="ekos-type-controls" aria-label={group.label}><div><span>Velikost</span><div className="ekos-type-options">{group.sizes.map(option => <button type="button" className={current.size === option[0] ? 'is-active' : ''} onClick={() => choose(group.id, 'size', option[0])} key={option[0]}>{option[1]}</button>)}</div></div><div><span>Váha</span><div className="ekos-type-options">{group.weights.map(option => <button type="button" className={current.weight === option[0] ? 'is-active' : ''} onClick={() => choose(group.id, 'weight', option[0])} key={option[0]}>{option[1]}</button>)}</div></div><div><span>Písmo</span><div className="ekos-type-options">{typographyFonts.map(option => <button type="button" className={current.font === option[0] ? 'is-active' : ''} style={{ fontFamily: option[2] }} onClick={() => choose(group.id, 'font', option[0])} key={option[0]}>{option[1]}</button>)}</div></div></div></article>; })}</div></section><section className="ekos-color-lab-section" aria-label="Barvy webu"><div className="ekos-type-lab-subhead"><h3>Barvy webu</h3></div><div className="ekos-color-grid">{colorTokens.map(([label, token, value]) => <div className="ekos-color-swatch" key={token}><span style={{ background: value }} /><div><strong>{label}</strong><code>{value}</code><small>{token}</small></div></div>)}</div></section></div></aside>;
}

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(scrollY > 24); addEventListener('scroll', fn); return () => removeEventListener('scroll', fn); }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  const links = [['Úvod', '#uvod'], ['Služby', '#sluzby'], ['O nás', '#o-nas'], ['Kontakt', '#kontakt']];
  const closeMenu = () => setOpen(false);
  return <>
    <nav className={`ekos-site-header fixed inset-x-0 top-0 z-50 h-16 lg:h-20 transition ${scrolled ? 'bg-background/95 border-b border-border backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="ekos-site-header-inner relative max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center">
        <a href="#uvod" className="shrink-0"><img className="ekos-site-logo w-36" src="/assets/8937f09fb_logo-tmave.png" alt="EKOS Mimoň s.r.o." /></a>
        <div className="ekos-site-menu hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map(([t, h], index) => <a className={`ekos-site-menu-link ${index === 0 ? 'is-active' : ''} text-foreground/85 hover:text-primary transition-colors`} href={h} key={t}>{t}</a>)}
        </div>
        <div className="ekos-site-actions hidden lg:flex items-center gap-6 ml-auto">
          <button aria-label="Přepnout barevný režim" className="ekos-site-theme-toggle text-foreground/70 hover:text-primary transition-colors" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button>
          <a className="ekos-site-nav-cta px-7 py-3.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest font-semibold" href="#kontakt">Poptávka</a>
        </div>
        <button aria-label="Menu" className="lg:hidden ml-auto" onClick={() => setOpen(true)}><Menu /></button>
      </div>
    </nav>
    {open && <div className="lg:hidden fixed inset-0 z-[9999] bg-background flex flex-col">
      <div className="flex h-16 flex-shrink-0 items-center justify-between border-b border-border px-6">
        <a href="#uvod" onClick={closeMenu}><img className="h-9 w-auto" src="/assets/8937f09fb_logo-tmave.png" alt="EKOS Mimoň s.r.o."/></a>
        <button aria-label="Zavřít menu" className="p-2 text-foreground" onClick={closeMenu}><X className="h-6 w-6"/></button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <a href="#uvod" onClick={closeMenu} className="block py-3 font-mono text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary">Úvod</a>
        <a href="#sluzby" onClick={closeMenu} className="block py-3 font-mono text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary">Služby</a>
        <div className="mb-1 pl-6">
          {serviceCards.map(s=><a href="#sluzby" onClick={closeMenu} className="block py-2 font-mono text-xs uppercase tracking-widest text-foreground/50 transition-colors hover:text-primary" key={s[0]}>{s[1]}</a>)}
        </div>
        <a href="#o-nas" onClick={closeMenu} className="block py-3 font-mono text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary">O nás</a>
        <a href="#kontakt" onClick={closeMenu} className="block py-3 font-mono text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary">Kontakt</a>
        <a href="#kontakt" onClick={closeMenu} className="block py-3 font-mono text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary">Poptávka</a>
        <div className="my-4 h-px bg-primary"/>
        <a href="tel:+420736633884" className="flex items-center gap-3 py-3 text-foreground/70 transition-colors hover:text-primary">
          <Phone className="h-4 w-4 flex-shrink-0 text-primary"/><span className="font-mono text-sm">+420 736 633 884</span>
        </a>
        <a href="tel:+420736633886" className="flex items-center gap-3 py-3 text-foreground/70 transition-colors hover:text-primary">
          <Phone className="h-4 w-4 flex-shrink-0 text-primary"/><span className="font-mono text-sm">+420 736 633 886</span>
        </a>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex items-center gap-2 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
          {theme === 'dark' ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
          {theme === 'dark' ? 'Světlý režim' : 'Tmavý režim'}
        </button>
      </div>
    </div>}
  </>;
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => { document.documentElement.className = theme; }, [theme]);
  return <div className="min-h-screen bg-background text-foreground"><Header theme={theme} setTheme={setTheme}/><main>
    <section id="uvod" className="ekos-hero relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0"><img src="/assets/hero-industrial-grid.png" className="w-full h-full object-cover" alt="Abstraktní technické pozadí s industriální mřížkou"/><div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40"/><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60"/></div>
      <div className="absolute left-[8%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-primary/5 blur-[130px]"/><div className="ekos-hero-content hero-content relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full"><div className="ekos-hero-copy max-w-3xl reveal"><Label>1994 — 30+ let zkušeností</Label><h1 className="ekos-hero-title">Pomáháme řešit <br/>projekty, na které se <br/>můžete <span className="ekos-accent-text">spolehnout.</span></h1><p className="ekos-hero-lead text-foreground/70">Spolehlivý partner pro průmyslovou výrobu, montáže a servis technologií. Od svařovaných konstrukcí a tlakových nádob po vzduchotechniku, elektromontáže a zakázkovou kovovýrobu.</p><div className="ekos-hero-actions flex flex-col sm:flex-row"><a href="#kontakt" className="ekos-hero-button ekos-button ekos-button-primary">Zahájit poptávku <ArrowRight size={16}/></a><a href="#sluzby" className="ekos-hero-button ekos-button ekos-button-secondary">Naše služby</a></div><div className="ekos-hero-stats border-t border-border/50 grid grid-cols-3">{[['30+','let praxe'],['500+','realizací'],['100%','české řešení']].map(x=><div key={x[1]}><p className="ekos-hero-stat-value text-primary">{x[0]}</p><p className="ekos-hero-stat-label text-muted-foreground">{x[1]}</p></div>)}</div></div></div>
    </section>
    <TypographyPalette/>
    <section id="sluzby" className="ekos-section ekos-section-muted"><div className="ekos-container ekos-stack"><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div className="ekos-section-header"><p className="ekos-section-label">Naše služby</p><h2 className="ekos-heading-md">Výrobní možnosti</h2></div><a className="ekos-button ekos-button-ghost" href="#sluzby">Všechny služby <ArrowUpRight size={14}/></a></div><div className="grid gap-6 lg:grid-cols-[minmax(0,2.05fr)_minmax(280px,.95fr)] lg:items-stretch"><div className="ekos-card relative min-h-[440px] lg:min-h-[620px] overflow-hidden"><img className="absolute inset-0 h-full w-full object-cover opacity-55" src="/assets/d5eaf9267_generated_04d3e802.png" alt="Detail výroby EKOS Mimoň"/><div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/10 to-transparent"/></div><div className="grid gap-6">{serviceCards.slice(0,2).map(item=><ServiceCard key={item[0]} item={item} className="min-h-[190px] lg:min-h-0"/>)}</div></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{serviceCards.slice(2).map(item=><ServiceCard key={item[0]} item={item} className="min-h-[160px]"/>)}</div></div></section>
    <section className="ekos-section ekos-section-muted"><div className="ekos-container"><Label>Reference</Label><Heading>Vybrané realizace</Heading><div className="mt-16 grid md:grid-cols-2 gap-px bg-border">{references.map(r=><article className="bg-background p-8 lg:p-10 group hover:bg-secondary transition" key={r[1]}><div className="flex justify-between text-primary font-mono text-xs mb-6"><span>{r[0]}</span><Check size={16}/></div><h3 className="ekos-reference-heading font-bold text-lg uppercase mb-2">{r[1]}</h3><p className="font-mono text-xs text-muted-foreground mb-4">{r[2]}</p><p className="text-muted-foreground text-sm leading-relaxed">{r[3]}</p></article>)}</div></div></section>
    <section className="ekos-section bg-background"><div className="ekos-container"><Label>Pro koho pracujeme</Label><Heading>Specializace podle sektoru</Heading><div className="mt-16 grid lg:grid-cols-3 gap-px bg-border">{sectors.map(s=><article className="bg-background p-8 lg:p-10 group hover:bg-secondary transition" key={s[0]}><span className="font-mono text-primary text-xs">{s[0]}</span><h3 className="ekos-sector-heading text-2xl lg:text-3xl font-extrabold uppercase mt-10 mb-4">{s[1]}</h3><p className="text-muted-foreground text-sm leading-relaxed mb-7">{s[2]}</p><div className="sector-capabilities space-y-2">{s[3].map(c=><p className="flex gap-2 text-sm" key={c}><ChevronRight size={14} className="text-primary shrink-0 mt-1"/>{c}</p>)}</div><a href="#sluzby" className="ekos-button ekos-button-ghost mt-7">Zjistit více <ArrowRight size={13}/></a></article>)}</div></div></section>
    <section className="ekos-section bg-background"><div className="ekos-container"><div className="text-center"><Label>Jak pracujeme</Label><Heading>Od konzultace<br/>po realizaci</Heading></div><div className="mt-16 grid md:grid-cols-5 gap-4">{steps.map(s=><article className="p-6 border border-border bg-card/50" key={s[0]}><span className="font-mono text-primary text-xs">{s[0]}</span><h3 className="ekos-step-heading font-bold text-sm uppercase tracking-wide mt-10 mb-3">{s[1]}</h3><p className="text-muted-foreground text-xs leading-relaxed">{s[2]}</p></article>)}</div></div></section>
    <section id="o-nas" className="py-24 lg:py-32 bg-background relative"><div className="ekos-container px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div className="relative"><div className="relative overflow-hidden"><img src="/assets/d5eaf9267_generated_04d3e802.png" alt="Precizní svařování v dílnách EKOS Mimoň" className="w-full h-80 lg:h-[480px] object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"/></div><div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border px-6 py-4"><p className="font-mono text-primary text-2xl font-bold">30+</p><p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">let na trhu</p></div></div><div><Label>O firmě</Label><h2 className="ekos-heading-md mb-8">Stabilní partner<br/>s prověřenou praxí</h2><p className="text-foreground/70 text-base leading-relaxed mb-6">EKOS Mimoň s.r.o. je česká technická a výrobní firma se sídlem v Mimoni v Libereckém kraji. Navazujeme na více než třicetiletou tradici a specializujeme se na svařované konstrukce, tlakové nádoby, vzduchotechniku, elektromontáže a zakázkovou kovovýrobu. Zajišťujeme také servis průmyslových zařízení.</p><p className="text-foreground/70 text-base leading-relaxed mb-8">Naše dílny jsou vybaveny pro realizaci projektů od kusové a malosériové výroby až po komplexní technologické celky. Pracujeme podle platných norem a certifikací, s důrazem na kvalitu, přesnost, bezpečnost a spolehlivost dodávek.</p><a href="#o-nas" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">Více o firmě <ArrowRight className="w-4 h-4"/></a></div></div></div></section>    <section id="kontakt" className="ekos-section ekos-section-muted relative overflow-hidden"><div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"/><div className="ekos-container text-center max-w-4xl relative"><Label>Máte technický projekt?</Label><h2 className="ekos-heading-md">Potřebujete ověřit proveditelnost nebo nacenit technickou realizaci?</h2><p className="text-muted-foreground text-lg mt-7 max-w-2xl mx-auto">Pošlete nám základní zadání, výkres nebo fotografie stávajícího stavu.<br/>Ozveme se s návrhem dalšího postupu.</p><a href="mailto:info@ekos-mimon.cz" className="ekos-button ekos-button-primary mt-9">Odeslat poptávku <ArrowRight size={16}/></a></div></section>
  </main><footer className="bg-[#11151b] border-t border-border py-16"><div className="ekos-container grid md:grid-cols-2 lg:grid-cols-4 gap-12"><div><img className="w-36 mb-6" src="/assets/8937f09fb_logo-tmave.png" alt="EKOS Mimoň s.r.o."/><p className="text-muted-foreground text-sm leading-relaxed">Spolehlivý partner pro technické projekty od návrhu přes výrobu až po montáž a servis.</p><p className="font-mono text-primary text-xs mt-5">EST. 1994 — 30+ LET PRAXE</p></div><div><h4 className="ekos-nav mb-5">Navigace</h4>{['Úvod','Služby','O nás','Kontakt'].map(x=><a className="ekos-nav-link block my-2 text-sm leading-relaxed" href={`#${x==='Úvod'?'uvod':x==='Služby'?'sluzby':x==='O nás'?'o-nas':'kontakt'}`} key={x}>{x}</a>)}</div><div><h4 className="ekos-nav mb-5">Služby</h4>{serviceCards.map(s=><p className="ekos-nav-link block my-2 text-sm leading-relaxed" key={s[0]}>{s[1]}</p>)}</div><div><h4 className="ekos-nav mb-5">Kontakt</h4><p className="ekos-nav-link block my-2 text-sm leading-relaxed">Křížová 456, 471 24 Mimoň, Česká republika</p><a className="ekos-nav-link block my-2 text-sm leading-relaxed" href="tel:+420736633884">+420 736 633 884</a><a className="ekos-nav-link block my-2 text-sm leading-relaxed" href="tel:+420736633886">+420 736 633 886</a><a className="ekos-nav-link block my-2 text-sm leading-relaxed" href="mailto:info@ekos-mimon.cz">info@ekos-mimon.cz</a></div></div><div className="ekos-container mt-12 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap gap-5 justify-between"><p>© 2026 EKOS Mimoň s.r.o. Všechna práva vyhrazena.</p><p>IČO: 25418891 — DIČ: CZ25418891</p><p>Obchodní podmínky · Ochrana osobních údajů</p></div></footer></div>;
}
