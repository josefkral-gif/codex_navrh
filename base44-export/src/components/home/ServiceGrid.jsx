import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../../lib/servicesData';

export default function ServiceGrid() {
  return (
    <section className="py-24 lg:py-32 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">Naše služby</p>
            <h2 className="font-inter font-extrabold text-3xl lg:text-5xl uppercase tracking-tight text-foreground">
              Technické<br />specifikace
            </h2>
          </div>
          <Link
            to="/sluzby"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
          >
            Všechny služby
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-background overflow-hidden ${
                index === 0 || index === 5 ? 'lg:col-span-2 md:col-span-2' : ''
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
                    <h3 className="font-inter font-bold text-lg uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
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
  );
}
