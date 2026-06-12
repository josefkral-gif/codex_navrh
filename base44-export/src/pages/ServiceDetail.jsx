import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Shield, CheckCircle, ChevronRight } from 'lucide-react';
import { services } from '../lib/servicesData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const service = services[serviceIndex];

  if (!service) {
    navigate('/sluzby');
    return null;
  }

  const prevService = services[serviceIndex - 1] || null;
  const nextService = services[serviceIndex + 1] || null;

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-secondary border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={service.image} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-8"
          >
            <Link to="/" className="hover:text-primary transition-colors">Úvod</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/sluzby" className="hover:text-primary transition-colors">Služby</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{service.title}</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-mono text-primary text-xs tracking-wider">{service.spec}</span>
            </div>
            <h1 className="font-inter font-extrabold text-4xl lg:text-6xl uppercase tracking-tight text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
              {service.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              {service.description.map((paragraph, i) => (
                <p key={i} className="text-foreground/70 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Hero Image */}
              <div className="relative overflow-hidden mt-10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Features */}
              <div className="bg-secondary border border-border p-6 lg:p-8">
                <h2 className="font-inter font-bold text-sm uppercase tracking-wide text-foreground mb-6">
                  Co zahrnujeme
                </h2>
                <div className="space-y-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary p-6 lg:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/70 mb-3">
                  Máte zájem?
                </p>
                <h3 className="font-inter font-bold text-lg uppercase tracking-tight text-primary-foreground mb-4">
                  Poptejte tuto službu
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-6">
                  Popište nám projekt a my vám připravíme nabídku do 48 hodin.
                </p>
                <Link
                  to="/kontakt"
                  className="group inline-flex items-center gap-2 text-primary-foreground font-mono text-xs uppercase tracking-widest hover:gap-3 transition-all"
                >
                  Odeslat poptávku
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 lg:py-20 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">Další služby</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/sluzby/${s.slug}`}
                  className="group bg-background p-6 hover:bg-card transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-inter font-bold text-sm uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                  </div>
                  <p className="font-mono text-[10px] text-primary tracking-wider mb-2">{s.spec}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.shortDesc}</p>
                </Link>
              ))}
          </div>

          {/* Prev / Next */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 pt-8 border-t border-border">
            {prevService ? (
              <Link
                to={`/sluzby/${prevService.slug}`}
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-3 h-3" />
                {prevService.title}
              </Link>
            ) : <div />}
            {nextService ? (
              <Link
                to={`/sluzby/${nextService.slug}`}
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {nextService.title}
                <ArrowRight className="w-3 h-3" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
}
