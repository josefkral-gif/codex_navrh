import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { services } from '../lib/servicesData';

export default function Sluzby() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">Co děláme</p>
            <h1 className="font-inter font-extrabold text-4xl lg:text-6xl uppercase tracking-tight text-foreground mb-6">
              Naše služby
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
              Nabízíme komplexní technické služby od návrhu přes výrobu až po montáž a servis.
              Každý projekt řešíme individuálně s důrazem na kvalitu a spolehlivost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className={`group relative bg-background overflow-hidden ${
                  index === 0 || index === services.length - 1 ? 'lg:col-span-2 md:col-span-2' : ''
                }`}
              >
                <Link to={`/sluzby/${service.slug}`} className="block h-full">
                  <div className="relative h-48 lg:h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="font-inter font-bold text-lg uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="font-mono text-primary text-xs tracking-wider mb-3">{service.spec}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.shortDesc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-inter font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-foreground mb-6">
              Potřebujete technické řešení?
            </h2>
            <p className="text-foreground/60 text-base mb-10 leading-relaxed">
              Popište nám svůj projekt a my vám navrhneme optimální řešení.
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest font-semibold hover:bg-primary/90 transition-all"
            >
              Odeslat poptávku
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
