import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const references = [
  {
    project: 'Ocelová konstrukce výrobní haly',
    client: 'Průmyslový podnik, Liberecký kraj',
    scope: 'Návrh, výroba a montáž nosné ocelové konstrukce, 850 t oceli',
    year: '2023',
  },
  {
    project: 'Rekonstrukce technologie ČOV',
    client: 'Město Mimoň',
    scope: 'Kompletní výměna strojního vybavení, potrubních rozvodů a aeračního systému',
    year: '2022',
  },
  {
    project: 'Tlakové nádoby pro chemický provoz',
    client: 'Chemický závod, Ústecký kraj',
    scope: 'Výroba 12 ks tlakových zásobníků dle PED, včetně revizní dokumentace',
    year: '2023',
  },
  {
    project: 'VZT systém pro výrobní provoz',
    client: 'Potravinářský podnik, Středočeský kraj',
    scope: 'Kompletní návrh a instalace vzduchotechnického systému, 2 400 m² plochy',
    year: '2024',
  },
];

export default function ReferencesSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">Reference</p>
          <h2 className="font-inter font-extrabold text-3xl lg:text-5xl uppercase tracking-tight text-foreground">
            Vybrané<br />realizace
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {references.map((ref, index) => (
            <motion.div
              key={ref.project}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-primary text-xs tracking-widest">{ref.year}</span>
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-inter font-bold text-lg uppercase tracking-tight text-foreground mb-2">
                {ref.project}
              </h3>
              <p className="font-mono text-xs text-muted-foreground tracking-wider mb-4">
                {ref.client}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {ref.scope}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
