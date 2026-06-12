import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const sections = [
  {
    id: 'spravce',
    title: '1. Správce osobních údajů',
    content: [
      'Správcem osobních údajů je <strong>EKOS Mimoň s.r.o.</strong>, Průmyslová 1, 471 24 Mimoň, Česká republika, IČO: 25418891, DIČ: CZ25418891 (dále jen „správce").',
      'E-mail: <a href="mailto:info@ekos-mimon.cz" class="text-primary hover:underline">info@ekos-mimon.cz</a> | Telefon: <a href="tel:+420736633884" class="text-primary hover:underline">+420 736 633 884</a>, <a href="tel:+420736633886" class="text-primary hover:underline">+420 736 633 886</a>',
      'Správce zpracovává osobní údaje v souladu s platnými právními předpisy, zejména nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů.',
    ],
  },
  {
    id: 'jake-udaje',
    title: '2. Jaké osobní údaje zpracováváme',
    content: [
      'Zpracováváme pouze údaje nezbytné pro poskytování našich služeb, zejména: jméno a příjmení, e-mailovou adresu, telefonní číslo, případně adresu místa realizace zakázky a obsah zprávy zaslané prostřednictvím kontaktního formuláře nebo e-mailu.',
      'Tyto údaje nám poskytujete dobrovolně při odeslání poptávky nebo při vzájemné komunikaci.',
    ],
  },
  {
    id: 'ucel',
    title: '3. Účel zpracování osobních údajů',
    content: [
      'Osobní údaje zpracováváme za účelem vyřízení vaší poptávky, komunikace se zákazníkem, přípravy cenové nabídky, plnění smlouvy nebo objednávky a plnění zákonných povinností (např. účetnictví).',
      'Osobní údaje nepoužíváme k marketingovým účelům bez vašeho výslovného souhlasu.',
    ],
  },
  {
    id: 'pravni-zaklad',
    title: '4. Právní základ zpracování',
    content: [
      'Zpracování osobních údajů je založeno na plnění smlouvy nebo jednání o jejím uzavření (čl. 6 odst. 1 písm. b) GDPR), plnění právních povinností (čl. 6 odst. 1 písm. c) GDPR), oprávněném zájmu správce (čl. 6 odst. 1 písm. f) GDPR) nebo vašem souhlasu (čl. 6 odst. 1 písm. a) GDPR), pokud je vyžadován.',
    ],
  },
  {
    id: 'doba-uchovavani',
    title: '5. Doba uchovávání osobních údajů',
    content: [
      'Osobní údaje uchováváme po dobu nezbytnou k vyřízení poptávky, po dobu trvání smluvního vztahu a po dobu stanovenou právními předpisy (např. účetní doklady), nejdéle však po dobu nutnou k ochraně našich oprávněných zájmů.',
      'Po uplynutí této doby jsou osobní údaje bezpečně vymazány.',
    ],
  },
  {
    id: 'prijemci',
    title: '6. Příjemci osobních údajů',
    content: [
      'Osobní údaje mohou být zpřístupněny pouze účetnímu nebo daňovému poradci, poskytovateli webhostingu nebo IT služeb, případně dalším subjektům, pokud to vyžaduje zákon.',
      'Osobní údaje nejsou předávány do třetích zemí mimo EU.',
    ],
  },
  {
    id: 'vase-prava',
    title: '7. Vaše práva',
    content: [
      'Máte právo na přístup ke svým osobním údajům, na opravu nepřesných nebo neaktuálních údajů, na výmaz osobních údajů („právo být zapomenut"), na omezení zpracování, vznést námitku proti zpracování, na přenositelnost údajů (je-li to technicky možné) a podat stížnost u Úřadu pro ochranu osobních údajů.',
    ],
  },
  {
    id: 'zabezpeceni',
    title: '8. Zabezpečení osobních údajů',
    content: [
      'Správce přijal vhodná technická a organizační opatření k ochraně osobních údajů proti jejich zneužití, ztrátě nebo neoprávněnému přístupu.',
    ],
  },
  {
    id: 'kontakt',
    title: '9. Kontaktní údaje',
    content: [
      'V případě dotazů ohledně zpracování osobních údajů nás můžete kontaktovat na e-mailu <a href="mailto:info@ekos-mimon.cz" class="text-primary hover:underline">info@ekos-mimon.cz</a> nebo na telefonu <a href="tel:+420736633884" class="text-primary hover:underline">+420 736 633 884</a>, <a href="tel:+420736633886" class="text-primary hover:underline">+420 736 633 886</a>.',
    ],
  },
  {
    id: 'zaverecna-ustanoveni',
    title: '10. Závěrečná ustanovení',
    content: [
      'Tyto zásady ochrany osobních údajů jsou platné a účinné od 1. 5. 2024.',
      'Správce si vyhrazuje právo tyto zásady kdykoliv aktualizovat.',
    ],
  },
];

export default function OchranaOsobnichUdaju() {
  const [activeId, setActiveId] = useState('spravce');

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
            <span className="text-foreground">Ochrana osobních údajů</span>
          </div>

          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">Právní informace</p>
          <h1 className="font-inter font-extrabold text-4xl lg:text-6xl uppercase tracking-tight text-foreground mb-4">
            Ochrana osobních údajů
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-10">
            Informace o zpracování osobních údajů dle nařízení GDPR (EU) 2016/679.
          </p>

          {/* Meta strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-border max-w-2xl">
            <div className="px-6 py-4 border-b sm:border-b-0 sm:border-r border-border">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Správce</p>
              <p className="font-inter font-semibold text-foreground text-sm">EKOS Mimoň s.r.o.</p>
            </div>
            <div className="px-6 py-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Platnost od</p>
              <p className="font-inter font-semibold text-foreground text-sm">1. května 2024</p>
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
