import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../../lib/servicesData';
import { useTheme } from '../../lib/ThemeContext';

const navLinks = [
  { label: '�vod', path: '/' },
  { label: 'O n�s', path: '/o-nas' },
  { label: 'Kontakt', path: '/kontakt' },
];

function ServicesDropdown({ isActive }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200 hover:text-primary ${
          isActive ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        Slu�by
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-card border border-border shadow-2xl z-50"
          >
            {/* Arrow */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-card border-l border-t border-border rotate-45" />
            
            <div className="py-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/sluzby/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Zamknout scroll pozad� p�i otev�en�m menu
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileOpen]);

  const isServicesActive = location.pathname.startsWith('/sluzby');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/8937f09fb_logo-tmave.png"
              alt="EKOS Mimo� s.r.o."
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200 hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              �vod
            </Link>

            <ServicesDropdown isActive={isServicesActive} />

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200 hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="P�epnout barevn� re�im"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link
              to="/kontakt"
              className="ml-2 px-6 py-2.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest font-semibold hover:bg-primary/90 transition-all duration-200"
            >
              Popt�vka
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu � fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-0 z-[9999] bg-background flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-border flex-shrink-0">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img
                  src="/assets/8937f09fb_logo-tmave.png"
                  alt="EKOS Mimo� s.r.o."
                  className="h-9 w-auto"
                />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-foreground p-2" aria-label="Zav��t menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">

              {/* �VOD � hlavn� str�nka: b�l�, tu�n� */}
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`block font-mono text-sm font-bold uppercase tracking-widest py-3 transition-colors ${
                  location.pathname === '/' ? 'text-primary' : 'text-foreground'
                }`}
              >
                �vod
              </Link>

              {/* SLU�BY � label jako hlavn� str�nka + podslu�by odsazen� */}
              <Link
                to="/sluzby"
                onClick={() => setMobileOpen(false)}
                className={`block font-mono text-sm font-bold uppercase tracking-widest py-3 transition-colors ${
                  isServicesActive ? 'text-primary' : 'text-foreground'
                }`}
              >
                Slu�by
              </Link>
              <div className="pl-6 mb-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/sluzby/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-mono text-xs uppercase tracking-widest py-2 transition-colors ${
                      location.pathname === `/sluzby/${s.slug}` ? 'text-primary' : 'text-foreground/50'
                    } hover:text-primary`}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>

              {/* O n�s, Kontakt � hlavn� str�nky */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-mono text-sm font-bold uppercase tracking-widest py-3 transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* POPT�VKA � jako hlavn� polo�ka */}
              <Link
                to="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="block font-mono text-sm font-bold uppercase tracking-widest py-3 text-primary transition-colors"
              >
                Popt�vka
              </Link>

              {/* Zelen� linka */}
              <div className="my-4 h-px bg-primary" />

              {/* Telefony � stejn� odsazen� jako hlavn� str�nky */}
              <a
                href="tel:+420736633884"
                className="flex items-center gap-3 py-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-mono text-sm">+420 736 633 884</span>
              </a>
              <a
                href="tel:+420736633886"
                className="flex items-center gap-3 py-3 text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-mono text-sm">+420 736 633 886</span>
              </a>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 py-3 text-muted-foreground hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {theme === 'dark' ? 'Sv�tl� re�im' : 'Tmav� re�im'}
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
