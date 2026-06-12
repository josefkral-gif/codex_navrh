import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const contactInfo = [
  { icon: MapPin, label: 'Adresa', value: 'Křížová 456, 471 24 Mimoň', sublabel: 'Česká republika' },
  { icon: Phone, label: 'Telefon', value: ['+420 736 633 884', '+420 736 633 886'], sublabel: 'Po–Pá 7:00–15:30' },
  { icon: Mail, label: 'E-mail', value: 'info@ekos-mimon.cz', sublabel: 'Odpovídáme do 48 hodin' },
  { icon: Clock, label: 'Provozní doba', value: 'Po–Pá 7:00–15:30', sublabel: 'Havarijní servis nonstop' },
];

export default function Kontakt() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">Spojte se s námi</p>
            <h1 className="font-inter font-extrabold text-4xl lg:text-6xl uppercase tracking-tight text-foreground mb-6">
              Kontakt
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
              Máte projekt, poptávku nebo dotaz? Popište nám svůj záměr a my vám navrhneme řešení.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary p-6"
                >
                  <Icon className="w-5 h-5 text-primary mb-4" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{info.label}</p>
                  {Array.isArray(info.value) ? (
                    <div className="font-inter font-semibold text-foreground text-sm mb-1">
                      {info.value.map((v) => <p key={v}>{v}</p>)}
                    </div>
                  ) : (
                    <p className="font-inter font-semibold text-foreground text-sm mb-1">{info.value}</p>
                  )}
                  <p className="text-muted-foreground text-xs">{info.sublabel}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-inter font-extrabold text-2xl uppercase tracking-tight text-foreground mb-2">
                Poptávkový formulář
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Vyplňte formulář a my se vám ozveme s nabídkou.
              </p>
              <ContactForm />
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <div>
                <h2 className="font-inter font-extrabold text-2xl uppercase tracking-tight text-foreground mb-6">
                  Sídlo firmy
                </h2>
                <div className="relative overflow-hidden h-64 lg:h-80 bg-secondary border border-border mb-8">
                  <iframe
                    title="Mapa EKOS Mimoň"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=14.72%2C50.65%2C14.74%2C50.66&layer=mapnik"
                    className="w-full h-full border-0 opacity-80 grayscale"
                    loading="lazy"
                  />
                </div>
                <div className="bg-card border border-border p-6">
                  <h3 className="font-inter font-bold text-sm uppercase tracking-wide text-foreground mb-4">
                    Fakturační údaje
                  </h3>
                  <div className="space-y-2 font-mono text-xs text-muted-foreground">
                    <p>EKOS Mimoň s.r.o.</p>
                    <p>Křížová 456, 471 24 Mimoň</p>
                    <p>IČO: 25418891 | DIČ: CZ25418891</p>
                    <p>Zapsáno v OR vedeném KS v Ústí nad Labem</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
