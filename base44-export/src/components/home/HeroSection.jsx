import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/3f040ffcf_generated_4262cc61.png"
          alt="Pr�myslov� v�robn� hala EKOS Mimo�"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Grid Lines Decoration */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 0.5px, transparent 0.5px), linear-gradient(90deg, hsl(var(--foreground)) 0.5px, transparent 0.5px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
              1994 � 30+ let zku�enost�
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-inter font-extrabold uppercase tracking-tight leading-[1.2] mb-8"
          >
            <span className="text-foreground">Pom�h�me �e�it</span>
            <br />
            <span className="text-foreground">projekty, na kter� se</span>
            <br />
            <span className="text-foreground">m��ete <span className="text-gradient-orange">spolehnout.</span></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground/70 text-lg lg:text-xl leading-relaxed max-w-xl mb-10"
          >
            Spolehliv� partner pro pr�myslov�, komun�ln� i zak�zkov� projekty. 
            Od n�vrhu p�es v�robu a� po mont� a servis � v�e pod jednou st�echou.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/kontakt"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Zah�jit popt�vku
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/sluzby"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground font-mono text-sm uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Na�e slu�by
            </Link>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-border/50 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: '30+', label: 'let praxe' },
              { value: '500+', label: 'realizac�' },
              { value: '100%', label: '�esk� �e�en�' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-inter font-extrabold text-2xl lg:text-3xl text-primary">{stat.value}</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
