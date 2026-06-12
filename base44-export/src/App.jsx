import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Menu, Moon, Sun, X } from 'lucide-react';
import './replica.css';

const services = [
  ['svarovane-konstrukce', 'Svařované konstrukce', 'Zakázková výroba ocelových konstrukcí', 'Navrhujeme a vyrábíme ocelové svařované konstrukce pro průmyslové haly, technologické linky a speciální aplikace.', '97b4c3e30_generated_25afdfea.png'],
  ['tlakove-nadoby', 'Tlakové nádoby', 'Výroba tlakových celků pro průmysl', 'Vyrábíme tlakové nádoby stabilní i transportní, zásobníky, výměníky tepla a speciální tlakové komponenty.', '9038371a5_generated_3696ff6e.png'],
  ['vzduchotechnika', 'Vzduchotechnika', 'Kompletní VZT systémy na klíč', 'Zajišťujeme kompletní dodávky vzduchotechnických systémů — od projektu přes výrobu potrubí až po montáž a zprovoznění.', '0a30f5073_generated_fe3092c9.png'],
  ['technologie-cov', 'Technologie ČOV', 'Čistírny odpadních vod na klíč', 'Dodáváme kompletní technologické celky pro čistírny odpadních vod — strojní vybavení, potrubní rozvody a aerační systémy.', '118271a23_generated_123c53a5.png'],
  ['opravy-udrzba', 'Opravy a údržba', 'Servisní smlouvy a havarijní zásahy', 'Poskytujeme pravidelnou údržbu technologických celků, opravy strojů a havarijní zásahy v průmyslových provozech.', '1ed57d3ea_generated_1a1f1306.png'],
  ['elektromontaze', 'Elektromontáže', 'Průmyslové elektroinstalace na klíč', 'Provádíme kompletní elektromontážní práce v průmyslových provozech — od silnoproudých rozvodů přes řídicí systémy až po uvádění do provozu.', 'a07e9b6fe_generated_image.png'],
  ['zakazkova-kovovyroba', 'Zakázková kovovýroba', 'Kusová i malosériová výroba', 'Realizujeme individuální zakázky kovovýroby podle dodané dokumentace nebo vlastního návrhu — od jednoduchých dílů po složité sestavy.', 'a5e1ce5cb_generated_787e2582.png'],
];

const sectors = [
  ['01', 'Průmysl', 'Dodáváme průmyslová řešení pro výrobní podniky — od ocelových konstrukcí po komplexní technologické celky.', ['Svařované konstrukce', 'Tlakové nádoby', 'Průmyslové potrubní systémy', 'Technologické montáže']],
  ['02', 'Obce a města', 'Navrhujeme a dodáváme technologie pro vodohospodářství, komunální infrastrukturu a veřejný sektor.', ['Technologie ČOV', 'Vzduchotechnika', 'Infrastrukturní projekty', 'Údržba a servis']],
  ['03', 'Zakázková výroba', 'Realizujeme individuální zakázky na míru — od kusové výroby po speciální konstrukce podle dokumentace.', ['Kovovýroba na zakázku', 'Kusová a malosériová výroba', 'Speciální přípravky', 'Opravy a rekonstrukce']],
];

const steps = [
  ['01', 'Konzultace', 'Vyslechneme váš požadavek, zhodnotíme technickou proveditelnost a navrhneme optimální řešení.'],
  ['02', 'Návrh a projekce', 'Zpracujeme technickou dokumentaci, výrobní výkresy a specifikace materiálů.'],
  ['03', 'Výroba', 'Realizujeme výrobu ve vlastních dílnách s důrazem na kvalitu a dodržení termínů.'],
  ['04', 'Montáž a dodání', 'Zajistíme dopravu, montáž na místě a uvedení do provozu včetně zkoušek.'],
  ['05', 'Servis a údržba', 'Poskytujeme záruční i pozáruční servis, pravidelnou údržbu a technickou podporu.'],
];

const references = [
  ['2023', 'Ocelová konstrukce výrobní haly', 'Průmyslový podnik, Liberecký kraj', 'Návrh, výroba a montáž nosné ocelové konstrukce, 850 t oceli'],
  ['2022', 'Rekonstrukce technologie ČOV', 'Město Mimoň', 'Kompletní výměna strojního vybavení, potrubních rozvodů a aeračního systému'],
  ['2023', 'Tlakové nádoby pro chemický provoz', 'Chemický závod, Ústecký kraj', 'Výroba 12 ks tlakových zásobníků dle PED, včetně revizní dokumentace'],
  ['2024', 'VZT systém pro výrobní provoz', 'Potravinářský podnik, Středočeský kraj', 'Kompletní návrh a instalace vzduchotechnického systému, 2 400 m² plochy'],
];

function Label({ children }) { return <p className="font-mono text-primary text-xs tracking-[.3em] uppercase mb-4">{children}</p>; }
function Heading({ children }) { return <h2 className="font-inter font-extrabold text-3xl lg:text-5xl uppercase tracking-tight leading-none">{children}</h2>; }

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(scrollY > 24); addEventListener('scroll', fn); return () => removeEventListener('scroll', fn); }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  const links = [['Úvod', '#uvod'], ['Služby', '#sluzby'], ['O nás', '#o-nas'], ['Kontakt', '#kontakt']];
  return <>
    <nav className={`fixed inset-x-0 top-0 z-50 h-16 lg:h-20 transition ${scrolled ? 'bg-background/95 border-b border-border backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center">
        <a href="#uvod"><img className="w-36" src="/assets/8937f09fb_logo-tmave.png" alt="EKOS Mimoň s.r.o." /></a>
        <div className="hidden lg:flex items-center gap-9 ml-auto">
          {links.map(([t, h]) => <a className="font-mono text-[11px] uppercase tracking-[.2em] text-muted-foreground hover:text-primary" href={h} key={t}>{t}</a>)}
          <button aria-label="Přepnout barevný režim" className="text-muted-foreground hover:text-primary" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button>
          <a className="px-7 py-3.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest font-semibold" href="#kontakt">Poptávka</a>
        </div>
        <button aria-label="Menu" className="lg:hidden ml-auto" onClick={() => setOpen(true)}><Menu /></button>
      </div>
    </nav>
    {open && <div className="fixed inset-0 z-[9999] bg-background px-7 py-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-12"><img className="w-36" src="/assets/8937f09fb_logo-tmave.png" alt="EKOS Mimoň s.r.o."/><button aria-label="Zavřít menu" onClick={() => setOpen(false)}><X/></button></div>
      <div className="space-y-5">{links.map(([t,h])=><a key={t} onClick={()=>setOpen(false)} href={h} className="block text-2xl font-bold uppercase">{t}</a>)}
        <div className="pl-5 space-y-3 text-sm text-muted-foreground">{services.map(s=><a href="#sluzby" onClick={()=>setOpen(false)} className="block" key={s[0]}>{s[1]}</a>)}</div>
        <div className="h-px bg-primary my-7"/><a className="block text-lg" href="tel:+420736633884">+420 736 633 884</a><a className="block text-lg" href="tel:+420736633886">+420 736 633 886</a>
        <a href="#kontakt" onClick={()=>setOpen(false)} className="mt-6 inline-flex px-8 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest">Poptávka</a>
      </div>
    </div>}
  </>;
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => { document.documentElement.className = theme; }, [theme]);
  return <div className="min-h-screen bg-background text-foreground"><Header theme={theme} setTheme={setTheme}/><main>
    <section id="uvod" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0"><img src="/assets/3f040ffcf_generated_4262cc61.png" className="w-full h-full object-cover" alt="Průmyslová výrobní hala EKOS Mimoň"/><div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40"/><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60"/></div>
      <div className="grid-lines absolute inset-0"/><div className="hero-content relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full"><div className="max-w-3xl reveal"><Label>1994 — 30+ let zkušeností</Label><h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.2] mb-8">Pomáháme řešit<br/>projekty, na které se<br/>můžete <span className="text-gradient-orange">spolehnout.</span></h1><p className="text-foreground/70 text-lg lg:text-xl leading-relaxed max-w-xl mb-10">Spolehlivý partner pro průmyslové, komunální i zakázkové projekty. Od návrhu přes výrobu až po montáž a servis — vše pod jednou střechou.</p><div className="flex flex-col sm:flex-row gap-4"><a href="#kontakt" className="cta">Zahájit poptávku <ArrowRight size={16}/></a><a href="#sluzby" className="cta secondary">Naše služby</a></div><div className="mt-16 pt-8 border-t border-border/50 grid grid-cols-3 gap-8 max-w-lg">{[['30+','let praxe'],['500+','realizací'],['100%','české řešení']].map(x=><div key={x[1]}><p className="font-extrabold text-2xl lg:text-3xl text-primary">{x[0]}</p><p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">{x[1]}</p></div>)}</div></div></div>
    </section>
    <section className="section bg-background"><div className="container"><Label>Pro koho pracujeme</Label><Heading>Specializace<br/>podle sektoru</Heading><div className="mt-16 grid lg:grid-cols-3 gap-px bg-border">{sectors.map(s=><article className="bg-background p-8 lg:p-10 group hover:bg-secondary transition" key={s[0]}><span className="font-mono text-primary text-xs">{s[0]}</span><h3 className="text-2xl lg:text-3xl font-extrabold uppercase mt-10 mb-4">{s[1]}</h3><p className="text-muted-foreground text-sm leading-relaxed mb-7">{s[2]}</p><div className="sector-capabilities space-y-2">{s[3].map(c=><p className="flex gap-2 text-sm" key={c}><ChevronRight size={14} className="text-primary shrink-0 mt-1"/>{c}</p>)}</div><a href="#sluzby" className="micro-link mt-7">Zjistit více <ArrowRight size={13}/></a></article>)}</div></div></section>
    <section id="sluzby" className="section bg-secondary"><div className="container"><div className="flex items-end justify-between gap-6"><div><Label>Naše služby</Label><Heading>Technické<br/>specifikace</Heading></div><a className="micro-link hidden sm:flex" href="#sluzby">Všechny služby <ArrowUpRight size={16}/></a></div><div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">{services.map((s,i)=><article className={`bg-background group ${i===0||i===5?'md:col-span-2 lg:col-span-2':''}`} key={s[0]}><div className="h-48 lg:h-56 overflow-hidden relative"><img className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src={`/assets/${s[4]}`} alt={s[1]}/><div className="absolute inset-0 bg-black/20"/></div><div className="p-6 lg:p-8"><div className="flex justify-between"><h3 className="font-bold text-lg uppercase">{s[1]}</h3><ArrowUpRight size={16}/></div><p className="font-mono text-primary text-xs my-3">{s[2]}</p><p className="text-muted-foreground text-sm leading-relaxed">{s[3]}</p></div></article>)}</div></div></section>
    <section className="section bg-background"><div className="container"><div className="text-center"><Label>Jak pracujeme</Label><Heading>Od konzultace<br/>po realizaci</Heading></div><div className="mt-16 grid md:grid-cols-5 gap-4">{steps.map(s=><article className="p-6 border border-border bg-card/50" key={s[0]}><span className="font-mono text-primary text-xs">{s[0]}</span><h3 className="font-bold text-sm uppercase tracking-wide mt-10 mb-3">{s[1]}</h3><p className="text-muted-foreground text-xs leading-relaxed">{s[2]}</p></article>)}</div></div></section>
    <section className="section bg-secondary"><div className="container"><Label>Reference</Label><Heading>Vybrané<br/>realizace</Heading><div className="mt-16 grid md:grid-cols-2 gap-px bg-border">{references.map(r=><article className="bg-background p-8 lg:p-10" key={r[1]}><div className="flex justify-between text-primary font-mono text-xs mb-6"><span>{r[0]}</span><Check size={16}/></div><h3 className="font-bold text-lg uppercase mb-2">{r[1]}</h3><p className="font-mono text-xs text-muted-foreground mb-4">{r[2]}</p><p className="text-muted-foreground text-sm leading-relaxed">{r[3]}</p></article>)}</div></div></section>
    <section id="o-nas" className="bg-background"><div className="grid lg:grid-cols-2"><div className="relative min-h-[520px]"><img src="/assets/d5eaf9267_generated_04d3e802.png" alt="Precizní svařování v dílnách EKOS Mimoň" className="absolute inset-0 w-full h-full object-cover"/><div className="absolute right-0 bottom-0 bg-primary text-primary-foreground p-7"><b className="block text-5xl">30+</b><span className="font-mono text-xs uppercase">let na trhu</span></div></div><div className="p-10 lg:p-20 xl:p-28 flex flex-col justify-center"><Label>O firmě</Label><h2 className="font-inter font-extrabold text-3xl lg:text-4xl uppercase tracking-tight leading-[1.1]">Stabilní partner<br/>s prověřenou praxí</h2><p className="text-muted-foreground leading-relaxed mt-8">EKOS Mimoň s.r.o. je česká technická a výrobní firma s více než třicetiletou tradicí. Specializujeme se na výrobu ocelových konstrukcí, tlakových nádob, vzduchotechniky a technologií pro čistírny odpadních vod.</p><p className="text-muted-foreground leading-relaxed mt-5">Naše dílny jsou vybaveny pro realizaci projektů od kusové výroby po komplexní technologické celky. Pracujeme podle platných norem a certifikací, s důrazem na kvalitu, přesnost a spolehlivost dodávek.</p><div className="grid gap-3 mt-8">{['Certifikovaná výroba','Ověřená kvalita','Zkušený tým'].map(x=><p className="flex gap-3" key={x}><Check className="text-primary" size={18}/>{x}</p>)}</div><a href="#o-nas" className="micro-link mt-9">Více o firmě <ArrowRight size={14}/></a></div></div></section>
    <section id="kontakt" className="section bg-secondary"><div className="container text-center max-w-4xl"><Label>Máte technický projekt?</Label><h2 className="font-inter font-extrabold text-4xl lg:text-6xl uppercase tracking-tight leading-none">Pojďme ho<br/>realizovat společně</h2><p className="text-muted-foreground text-lg mt-7 max-w-2xl mx-auto">Popište nám svůj záměr a my vám do 48 hodin připravíme nezávaznou nabídku s technickým řešením.</p><a href="mailto:info@ekos-mimon.cz" className="cta mt-9">Odeslat poptávku <ArrowRight size={16}/></a></div></section>
  </main><footer className="bg-[#11151b] border-t border-border py-16"><div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-12"><div><img className="w-36 mb-6" src="/assets/8937f09fb_logo-tmave.png" alt="EKOS Mimoň s.r.o."/><p className="text-muted-foreground text-sm leading-relaxed">Spolehlivý partner pro technické projekty od návrhu přes výrobu až po montáž a servis.</p><p className="font-mono text-primary text-xs mt-5">EST. 1994 — 30+ LET PRAXE</p></div><div><h4>Navigace</h4>{['Úvod','Služby','O nás','Kontakt'].map(x=><a className="footer-link" href={`#${x==='Úvod'?'uvod':x==='Služby'?'sluzby':x==='O nás'?'o-nas':'kontakt'}`} key={x}>{x}</a>)}</div><div><h4>Služby</h4>{services.slice(0,6).map(s=><p className="footer-link" key={s[0]}>{s[1]}</p>)}</div><div><h4>Kontakt</h4><p className="footer-link">Křížová 456, 471 24 Mimoň, Česká republika</p><a className="footer-link" href="tel:+420736633884">+420 736 633 884</a><a className="footer-link" href="tel:+420736633886">+420 736 633 886</a><a className="footer-link" href="mailto:info@ekos-mimon.cz">info@ekos-mimon.cz</a></div></div><div className="container mt-12 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap gap-5 justify-between"><p>© 2024 EKOS Mimoň s.r.o. Všechna práva vyhrazena.</p><p>IČO: 25418891 — DIČ: CZ25418891</p><p>Obchodní podmínky · Ochrana osobních údajů</p></div></footer></div>;
}
