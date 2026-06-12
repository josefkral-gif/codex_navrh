import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
            Máte technický projekt?
          </p>
          <h2 className="font-inter font-extrabold text-3xl lg:text-5xl xl:text-6xl uppercase tracking-tight text-foreground mb-8">
            Pojďme ho<br />
            <span className="text-gradient-orange">realizovat společně</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Popište nám svůj záměr a my vám do 48 hodin připravíme nezávaznou nabídku s technickým řešením.
          </p>
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest font-semibold hover:bg-primary/90 transition-all duration-300"
          >
            Odeslat poptávku
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
