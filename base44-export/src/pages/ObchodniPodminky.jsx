import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const sections = [
  {
    id: 'dodavatel',
    title: '1. Dodavatel',
    content: [
      'Dodavatelem je <strong>EKOS MIMOŇ spol. s r.o.</strong>, IČO: <strong>41328663</strong>, DIČ: <strong>CZ41328663</strong>, se sídlem <strong>Křížová 456, 471 24 Mimoň</strong>, zapsaná v obchodním rejstříku vedeném Krajským soudem v Ústí nad Labem, oddíl C, vložka 805.',
      'Kontakt: <a href="mailto:info@ekos-mimon.cz" class="text-primary hover:underline">info@ekos-mimon.cz</a>, telefon <a href="tel:+420736633884" class="text-primary hover:underline">+420 736 633 884</a>, <a href="tel:+420736633886" class="text-primary hover:underline">+420 736 633 886</a>.',
    ],
  },
  {
    id: 'poptavky-nabidky',
    title: '2. Poptávky a nabídky',
    content: [
      'Webové stránky slouží k prezentaci služeb a k odeslání nezávazné poptávky. Odeslání poptávky samo o sobě nezakládá smluvní vztah ani povinnost dodavatele zakázku přijmout.',
      'Nabídka je zpracována individuálně podle rozsahu projektu, technických podkladů, požadavků zákazníka a aktuálních kapacit. Platnost nabídky je uvedena v konkrétní nabídce; není-li uvedena, je nabídka orientační.',
    ],
  },
  {
    id: 'uzavreni-smlouvy',
    title: '3. Uzavření smlouvy',
    content: [
      'Smluvní vztah vzniká potvrzením objednávky, podpisem smlouvy, potvrzením cenové nabídky nebo jiným prokazatelným odsouhlasením rozsahu dodávky oběma stranami.',
      'Součástí dohody mohou být zejména technická dokumentace, výkresy, specifikace materiálů, harmonogram, cena, platební podmínky, termíny, místo plnění a způsob předání.',
    ],
  },
  {
    id: 'cena-platebni-podminky',
    title: '4. Cena a platební podmínky',
    content: [
      'Cena je stanovena individuálně podle rozsahu zakázky. Není-li v nabídce uvedeno jinak, ceny nezahrnují DPH, dopravu, zvláštní zkoušky, revize, certifikace nebo další položky nad rámec sjednaného rozsahu.',
      'Platební podmínky, splatnost faktur a případné zálohy jsou uvedeny v nabídce, objednávce nebo smlouvě. Při prodlení s úhradou je dodavatel oprávněn pozastavit další plnění do vyrovnání splatných závazků.',
    ],
  },
  {
    id: 'realizace-terminy',
    title: '5. Realizace a termíny',
    content: [
      'Termíny realizace jsou sjednávány s ohledem na rozsah díla, dostupnost materiálu, technickou připravenost zakázky a součinnost zákazníka. Termín se může přiměřeně posunout v případě změny zadání, pozdního dodání podkladů, vyšší moci nebo jiných okolností mimo kontrolu dodavatele.',
      'Zákazník odpovídá za správnost předaných podkladů, technických specifikací, výkresů a informací potřebných pro realizaci.',
    ],
  },
  {
    id: 'prevzeti-odpovednost',
    title: '6. Převzetí a odpovědnost',
    content: [
      'Předání a převzetí díla probíhá způsobem sjednaným ve smlouvě, objednávce nebo předávacím protokolu. Zákazník je povinen dílo při převzetí zkontrolovat a zjevné vady oznámit bez zbytečného odkladu.',
      'Dodavatel odpovídá za provedení sjednaného rozsahu prací v souladu s potvrzenou dokumentací a dohodnutými technickými parametry.',
    ],
  },
  {
    id: 'reklamace',
    title: '7. Reklamace',
    content: [
      'Reklamace musí obsahovat identifikaci zakázky, popis vady, datum zjištění a případnou fotodokumentaci. Reklamaci lze zaslat na e-mail info@ekos-mimon.cz.',
      'Dodavatel reklamaci posoudí podle charakteru zakázky, předané dokumentace a sjednaných podmínek. Oprávněné vady budou odstraněny vhodným způsobem v přiměřené lhůtě.',
    ],
  },
  {
    id: 'zaverecna-ustanoveni',
    title: '8. Závěrečná ustanovení',
    content: [
      'Tyto obchodní podmínky mají informační charakter pro webové poptávky a obecný rámec spolupráce. Konkrétní smlouva, objednávka nebo potvrzená nabídka má vždy přednost před obecným textem na webu.',
      'Právní vztahy se řídí právním řádem České republiky.',
    ],
  },
];

export default function ObchodniPodminky() {
  const [activeId, setActiveId] = useState('dodavatel');

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) setActiveId(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="border-b border-border pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Úvod</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">Obchodní podmínky</span>
          </div>

          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">Právní informace</p>
          <h1 className="font-inter font-extrabold text-4xl lg:text-6xl uppercase tracking-tight text-foreground mb-4">
            Obchodní podmínky
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-10">
            Základní obchodní podmínky pro poptávky, nabídky, dodávky technických řešení, zakázkovou výrobu, montáž a servis poskytované společností EKOS MIMOŇ spol. s r.o.
          </p>

          {/* Meta strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-border max-w-2xl">
            <div className="px-6 py-4 border-b sm:border-b-0 sm:border-r border-border">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Dodavatel</p>
              <p className="font-inter font-semibold text-foreground text-sm">EKOS MIMOŇ spol. s r.o.</p>
            </div>
            <div className="px-6 py-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Aktualizace</p>
              <p className="font-inter font-semibold text-foreground text-sm">19. května 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body: sidebar + content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex gap-12 lg:gap-16">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Obsah</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`block w-full text-left text-sm py-1.5 transition-colors hover:text-primary ${
                      activeId === s.id ? 'text-primary' : 'text-foreground/60'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="scroll-mt-28"
              >
                <h2 className="font-inter font-extrabold text-lg uppercase tracking-tight text-foreground mb-4 pb-3 border-b border-border">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((para, j) => (
                    <p
                      key={j}
                      className="text-muted-foreground text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
