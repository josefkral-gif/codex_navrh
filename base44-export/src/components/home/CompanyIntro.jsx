import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

export default function CompanyIntro() {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="/assets/d5eaf9267_generated_04d3e802.png"
                alt="Precizn� sva�ov�n� v d�ln�ch EKOS Mimo�"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border px-6 py-4">
              <p className="font-mono text-primary text-2xl font-bold">30+</p>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">let na trhu</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">O firm�</p>
            <h2 className="font-inter font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-foreground mb-8">
              Stabiln� partner<br />s prov��enou prax�
            </h2>

            <p className="text-foreground/70 text-base leading-relaxed mb-6">
              EKOS Mimo� s.r.o. je �esk� technick� a v�robn� firma s v�ce ne� t�icetiletou tradic�. 
              Specializujeme se na v�robu ocelov�ch konstrukc�, tlakov�ch n�dob, vzduchotechniky 
              a technologi� pro �ist�rny odpadn�ch vod.
            </p>
            <p className="text-foreground/70 text-base leading-relaxed mb-10">
              Na�e d�lny jsou vybaveny pro realizaci projekt� od kusov� v�roby po komplexn� 
              technologick� celky. Pracujeme podle platn�ch norem a certifikac�, s d�razem na 
              kvalitu, p�esnost a spolehlivost dod�vek.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { icon: Shield, label: 'Certifikovan� v�roba' },
                { icon: Award, label: 'Ov��en� kvalita' },
                { icon: Users, label: 'Zku�en� t�m' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="text-center">
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <Link
              to="/o-nas"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
            >
              V�ce o firm�
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
