import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Building2, Wrench, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
  {
    id: 'industry',
    number: '01',
    title: 'Průmysl',
    icon: Factory,
    description: 'Dodáváme průmyslová řešení pro výrobní podniky — od ocelových konstrukcí po komplexní technologické celky.',
    capabilities: ['Svařované konstrukce', 'Tlakové nádoby', 'Průmyslové potrubní systémy', 'Technologické montáže'],
  },
  {
    id: 'municipal',
    number: '02',
    title: 'Obce a města',
    icon: Building2,
    description: 'Navrhujeme a dodáváme technologie pro vodohospodářství, komunální infrastrukturu a veřejný sektor.',
    capabilities: ['Technologie ČOV', 'Vzduchotechnika', 'Infrastrukturní projekty', 'Údržba a servis'],
  },
  {
    id: 'custom',
    number: '03',
    title: 'Zakázková výroba',
    icon: Wrench,
    description: 'Realizujeme individuální zakázky na míru — od kusové výroby po speciální konstrukce podle dokumentace.',
    capabilities: ['Kovovýroba na zakázku', 'Kusová a malosériová výroba', 'Speciální přípravky', 'Opravy a rekonstrukce'],
  },
];

export default function SectorSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 lg:py-32 bg-background relative">
      {/* Grid decoration */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 0.5px, transparent 0.5px), linear-gradient(90deg, hsl(var(--foreground)) 0.5px, transparent 0.5px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">Pro koho pracujeme</p>
          <h2 className="font-inter font-extrabold text-3xl lg:text-5xl uppercase tracking-tight text-foreground">
            Specializace<br />podle sektoru
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`group relative bg-background p-8 lg:p-10 cursor-pointer transition-all duration-500 ${
                  isActive ? 'bg-secondary' : ''
                } ${activeIndex !== null && !isActive ? 'opacity-40' : 'opacity-100'}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-primary text-xs tracking-widest">{sector.number}</span>
                  <Icon className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>

                <h3 className="font-inter font-extrabold text-2xl lg:text-3xl uppercase tracking-tight text-foreground mb-4">
                  {sector.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {sector.description}
                </p>

                <motion.div
                  initial={false}
                  animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pb-6 border-t border-border pt-6">
                    {sector.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-sm text-foreground/80">
                        <ChevronRight className="w-3 h-3 text-primary" />
                        {cap}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <Link
                  to="/sluzby"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
                >
                  Zjistit více
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
