import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src="/assets/8937f09fb_logo-tmave.png"
                alt="EKOS Mimo� s.r.o."
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Spolehliv� partner pro technick� projekty od n�vrhu p�es v�robu a� po mont� a servis.
            </p>
            <p className="font-mono text-primary text-xs mt-4 tracking-widest">EST. 1994 � 30+ LET PRAXE</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Navigace</h4>
            <div className="space-y-3">
              {[
                { label: '�vod', path: '/' },
                { label: 'Slu�by', path: '/sluzby' },
                { label: 'O n�s', path: '/o-nas' },
                { label: 'Kontakt', path: '/kontakt' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Slu�by</h4>
            <div className="space-y-3">
              {['Sva�ovan� konstrukce', 'Tlakov� n�doby', 'Vzduchotechnika', 'Technologie �OV', 'Opravy a �dr�ba', 'Zak�zkov� kovov�roba'].map((s) => (
                <p key={s} className="text-sm text-foreground/70">{s}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground/70">K��ov� 456, 471 24 Mimo�, �esk� republika</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-sm text-foreground/70">
                  <p>+420 736 633 884</p>
                  <p>+420 736 633 886</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-foreground/70">info@ekos-mimon.cz</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            � 2024 EKOS Mimo� s.r.o. V�echna pr�va vyhrazena.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-mono text-xs text-muted-foreground">
              I�O: 25418891 � DI�: CZ25418891
            </p>
            <Link to="/obchodni-podminky" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
              Obchodn� podm�nky
            </Link>
            <Link to="/ochrana-osobnich-udaju" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
              Ochrana osobn�ch �daj�
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
