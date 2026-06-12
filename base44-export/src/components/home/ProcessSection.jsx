import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Ruler, Cog, Truck, Wrench } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Konzultace',
    description: 'Vyslechneme v� po�adavek, zhodnot�me technickou proveditelnost a navrhneme optim�ln� �e�en�.',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'N�vrh a projekce',
    description: 'Zpracujeme technickou dokumentaci, v�robn� v�kresy a specifikace materi�l�.',
  },
  {
    number: '03',
    icon: Cog,
    title: 'V�roba',
    description: 'Realizujeme v�robu ve vlastn�ch d�ln�ch s d�razem na kvalitu a dodr�en� term�n�.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Mont� a dod�n�',
    description: 'Zajist�me dopravu, mont� na m�st� a uveden� do provozu v�etn� zkou�ek.',
  },
  {
    number: '05',
    icon: Wrench,
    title: 'Servis a �dr�ba',
    description: 'Poskytujeme z�ru�n� i poz�ru�n� servis, pravidelnou �dr�bu a technickou podporu.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/assets/a89830ed7_generated_cdc72d5b.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-background/90" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">Jak pracujeme</p>
          <h2 className="font-inter font-extrabold text-3xl lg:text-5xl uppercase tracking-tight text-foreground">
            Od konzultace<br />po realizaci
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-primary text-xs tracking-widest">{step.number}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <Icon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="font-inter font-bold text-sm uppercase tracking-wide text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
