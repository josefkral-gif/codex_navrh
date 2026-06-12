import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Clock, Target, Zap } from 'lucide-react';

const milestones = [
  { year: '1994', text: 'Zalo�en� spole�nosti EKOS Mimo� s.r.o.' },
  { year: '2002', text: 'Roz���en� v�robn�ch kapacit a zah�jen� vodohospod��sk�ch projekt�' },
  { year: '2010', text: 'Modernizace sva�oven a zaveden� CNC technologi�' },
  { year: '2018', text: 'Roz���en� portfolia o elektromont�e a komplexn� servisn� smlouvy' },
  { year: '2024', text: '30 let na trhu � p�es 500 realizovan�ch projekt�' },
];

const values = [
  { icon: Shield, title: 'Kvalita', description: 'Ka�d� v�robek proch�z� d�kladnou v�stupn� kontrolou. Kvalita je pro n�s z�vazek, ne formalita.' },
  { icon: Clock, title: 'Spolehlivost', description: 'Dodr�ujeme dohodnut� term�ny a podm�nky. Na na�e slovo se m��ete spolehnout.' },
  { icon: Target, title: 'P�esnost', description: 'Technick� p�esnost je z�klad na�� pr�ce. Ka�d� detail m� sv�j v�znam.' },
  { icon: Zap, title: 'Flexibilita', description: 'P�izp�sob�me se va�im po�adavk�m � od kusov� v�roby po velk� zak�zky.' },
  { icon: Users, title: 'Partnerstv�', description: 'Budujeme dlouhodob� vztahy se z�kazn�ky zalo�en� na vz�jemn� d�v��e.' },
  { icon: Award, title: 'Zku�enost', description: 'V�ce ne� 30 let praxe v technick�ch a v�robn�ch oborech.' },
];

export default function ONas() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">O spole�nosti</p>
            <h1 className="font-inter font-extrabold text-4xl lg:text-6xl uppercase tracking-tight text-foreground mb-6">
              EKOS Mimo�
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
              �esk� technick� a v�robn� firma s v�ce ne� t�icetiletou tradic�. Specializujeme se na 
              pr�myslovou v�robu, projekci a servis technologick�ch celk�.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden mb-8">
                <img
                  src="/assets/d5eaf9267_generated_04d3e802.png"
                  alt="Detail sva�ov�n� v EKOS Mimo�"
                  className="w-full h-72 lg:h-96 object-cover"
                />
              </div>
              <div className="bg-card border border-border p-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="font-inter font-extrabold text-3xl text-primary">30+</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">let praxe</p>
                  </div>
                  <div>
                    <p className="font-inter font-extrabold text-3xl text-primary">500+</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">realizac�</p>
                  </div>
                  <div>
                    <p className="font-inter font-extrabold text-3xl text-primary">50+</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">zam�stnanc�</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-inter font-extrabold text-2xl lg:text-3xl uppercase tracking-tight text-foreground mb-6">
                Kdo jsme
              </h2>
              <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                <p>
                  Spole�nost EKOS Mimo� s.r.o. byla zalo�ena v roce 1994 jako technick� a v�robn� firma 
                  zam��en� na stroj�renskou v�robu a realizaci pr�myslov�ch projekt�. Za v�ce ne� t�i 
                  desetilet� jsme se vypracovali v respektovan�ho dodavatele ocelov�ch konstrukc�, 
                  tlakov�ch n�dob, vzduchotechnick�ch syst�m� a technologi� pro vodohospod��stv�.
                </p>
                <p>
                  Na�e v�robn� kapacity zahrnuj� sva�ovny, z�me�nick� d�lny a mont�n� pracovi�t� 
                  vybaven� modern�mi technologiemi. T�m zku�en�ch odborn�k� zvl�d� zak�zky od kusov� 
                  v�roby po rozs�hl� pr�myslov� projekty.
                </p>
                <p>
                  Pracujeme pro pr�myslov� podniky, m�sta a obce i soukrom� investory. Ka�d� projekt 
                  p�istupujeme individu�ln� � od po��te�n� konzultace p�es n�vrh a v�robu a� po mont�, 
                  zkou�ky a servis.
                </p>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">Na�e hodnoty</p>
            <h2 className="font-inter font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-foreground">
              Na �em stav�me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-background p-8"
                >
                  <Icon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="font-inter font-bold text-sm uppercase tracking-wide text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">Historie</p>
            <h2 className="font-inter font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-foreground">
              Miln�ky firmy
            </h2>
          </motion.div>

          <div className="space-y-0">
            {milestones.map((m, index) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 py-6 border-b border-border"
              >
                <span className="font-mono text-primary text-sm font-bold min-w-[60px]">{m.year}</span>
                <p className="text-foreground/70 text-sm leading-relaxed">{m.text}</p>
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
              Spolupracujme na va�em projektu
            </h2>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest font-semibold hover:bg-primary/90 transition-all"
            >
              Kontaktujte n�s
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
