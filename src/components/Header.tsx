import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Wrench, Menu, X, ArrowUpRight, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { getWorkshopOperationalStatus } from '../data/telemetryData';
import { LUXURY_EASE } from '../utils/motion';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const status = getWorkshopOperationalStatus();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Ledger of Services', chapter: 'CH. II', meta: '06 Disciplines' },
    { href: '#archive', label: 'Workshop Archive', chapter: 'CH. III', meta: 'Telemetry Registry' },
    { href: '#speed-parts', label: 'Speed Parts Desk', chapter: 'CH. V', meta: 'OEM Wholesale Hub', isWholesale: true },
    { href: '#chronicle', label: '1960–2026 Chronicle', chapter: 'CH. VI', meta: '66 Years Heritage' },
    { href: '#journal', label: 'Technical Journal', chapter: 'CH. VII', meta: 'Whitepapers' },
    { href: '#faq', label: 'Directory', chapter: 'CH. VIII', meta: '56, M.G. Marg' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Archival Telegraph & Diagnostic Strip */}
      <div className="bg-ink text-parchment-light border-b border-rule-dark/90 px-3 sm:px-6 py-2 text-[11px] font-mono tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Real-Time Workshop Telemetry Status */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <span className="inline-flex items-center gap-2 text-brass font-bold text-[11px] whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>LIVE TELEMETRY</span>
            </span>

            <span className="hidden sm:inline-block w-px h-3.5 bg-white/20 shrink-0" />

            <span className="hidden sm:inline-flex items-center gap-1.5 text-parchment-light font-medium whitespace-nowrap">
              <span>BAYS 01–08:</span>
              <span className="text-emerald-400 font-bold">{status.activeBays} ACTIVE</span>
              <span className="text-parchment-dark/60">•</span>
              <span className="text-brass-light font-semibold">{status.standbyBays} STANDBY</span>
            </span>

            <span className="hidden md:inline-block w-px h-3.5 bg-white/20 shrink-0" />

            <span className="hidden md:inline-flex items-center gap-1.5 text-parchment-light/90 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-brass shrink-0" />
              <span>M.G. MARG: 09:00 – 19:30 IST</span>
            </span>
          </div>

          {/* Right: Statutory GSTIN & Direct Hotline Link */}
          <div className="flex items-center gap-3 sm:gap-4 text-parchment-light shrink-0">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] tracking-wider text-brass-light bg-white/5 border border-brass/40 px-2.5 py-0.5 rounded font-mono font-semibold whitespace-nowrap">
              <ShieldCheck className="w-3 h-3 text-brass shrink-0" />
              <span>GSTIN:</span>
              <span className="text-parchment font-bold">09ADQPA5477Q1ZN</span>
            </span>

            <a
              href="tel:+918796576868"
              data-cursor="interactive"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-parchment hover:text-brass transition-colors py-1 px-2 rounded hover:bg-white/5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-brass shrink-0" />
              <span>+91 87965 76868</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Archival Masthead Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-parchment/95 backdrop-blur-md shadow-bezel border-b border-rule py-0'
            : 'bg-parchment border-b border-rule/80 py-0.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* Masthead Identity Brand Block */}
            <a href="#" className="group flex flex-col justify-center py-1 select-none focus:outline-none">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="font-serif text-lg xs:text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-ink group-hover:text-crimson transition-colors whitespace-nowrap">
                  HINDUSTAN GARAGE
                </span>
                <span className="hidden xs:inline-flex items-center text-[10px] uppercase font-mono px-2 py-0.5 bg-brass/15 text-brass-dark border border-brass/35 rounded font-bold tracking-wider shadow-inner-light whitespace-nowrap">
                  EST. 1960
                </span>
              </div>
              <div className="text-[10px] xs:text-[11px] font-mono tracking-ledger sm:tracking-[0.14em] text-ink-muted font-medium uppercase truncate max-w-[190px] xs:max-w-none flex items-center gap-1.5 mt-0.5">
                <span>56, M.G. Marg</span>
                <span className="w-1 h-1 rounded-full bg-brass/60 inline-block shrink-0" />
                <span>George Town</span>
                <span className="w-1 h-1 rounded-full bg-brass/60 inline-block shrink-0" />
                <span>Prayagraj</span>
              </div>
            </a>

            {/* Desktop Navigation Links (>= 1280px) */}
            <nav
              aria-label="Monograph Sections"
              className="hidden xl:flex items-center gap-1.5 2xl:gap-3 text-xs 2xl:text-[13px] font-medium tracking-ledger uppercase"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 2xl:px-3.5 py-2 rounded transition-all duration-200 relative group flex items-center gap-1.5 whitespace-nowrap ${
                    link.isWholesale
                      ? 'text-oxford hover:text-oxford-dark font-bold'
                      : 'text-ink/90 hover:text-crimson'
                  }`}
                >
                  {link.isWholesale && (
                    <span className="w-2 h-2 rounded-full bg-oxford inline-block shrink-0 ring-2 ring-oxford/20 group-hover:scale-110 transition-transform" />
                  )}
                  <span>{link.label}</span>
                  {/* Subtle Archival Baseline Underline on Hover */}
                  <span
                    className={`absolute bottom-0.5 left-2.5 right-2.5 2xl:left-3.5 2xl:right-3.5 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${
                      link.isWholesale ? 'bg-oxford' : 'bg-crimson'
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Action Buttons & Navigation Trigger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Speed Parts Trade Desk CTA (Visible >= 1440px) */}
              <a
                href="#speed-parts"
                data-cursor="trade"
                className="hidden 2xl:inline-flex items-center gap-2 px-3.5 py-2 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-oxford hover:bg-oxford-dark border border-oxford-light/30 rounded shadow-sm transition-all btn-dignified group active:scale-[0.98]"
              >
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Wrench className="w-3 h-3 text-brass-light" />
                </span>
                <span>Trade Parts Desk</span>
              </a>

              {/* Main Concierge Bay Reservation CTA */}
              <a
                href="#concierge-desk"
                data-cursor="interactive"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson hover:bg-crimson-dark border border-crimson-light/40 rounded shadow-sm transition-all btn-dignified group active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Reserve a Bay</span>
                <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 text-parchment" />
                </span>
              </a>

              {/* Mobile Quick Reserve Button (<640px) */}
              <a
                href="#concierge-desk"
                aria-label="Reserve a Bay"
                className="sm:hidden inline-flex items-center justify-center px-2.5 xs:px-3.5 py-2 min-h-[44px] min-w-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson hover:bg-crimson-dark rounded shadow-sm active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 xs:hidden shrink-0" />
                <span className="hidden xs:inline">Reserve</span>
              </a>

              {/* Hamburger Toggle (Visible on screens below xl, e.g. tablets & phones) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-ink hover:text-crimson hover:bg-parchment-dark/70 rounded border border-rule/70 transition-colors focus:outline-none focus:ring-1 focus:ring-crimson"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer with Smooth Slide Physics */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: LUXURY_EASE }}
              className="xl:hidden bg-parchment-light border-b border-rule shadow-xl overflow-hidden"
            >
              <div className="px-4 sm:px-6 py-6 space-y-4 max-h-[calc(100dvh-5.5rem)] overflow-y-auto safe-pb">
                {/* Drawer Header Badge */}
                <div className="text-xs font-mono text-ink-faint tracking-archival uppercase pb-2.5 border-b border-rule flex items-center justify-between">
                  <span>Index of Monograph Sections</span>
                  <span className="text-[10px] text-brass-dark font-bold px-2 py-0.5 bg-brass/10 border border-brass/25 rounded">
                    EST. 1960
                  </span>
                </div>

                {/* Chapter Navigation Items */}
                <div className="flex flex-col space-y-1 text-sm font-semibold tracking-wider uppercase">
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-crimson hover:bg-parchment p-3.5 min-h-[48px] rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-mono font-bold text-crimson bg-crimson/10 border border-crimson/20 px-1.5 py-0.5 rounded">
                        CH. II
                      </span>
                      <span>Chapter II: Ledger of Services</span>
                    </div>
                    <span className="text-xs font-mono text-ink-faint font-normal">06 Specializations</span>
                  </a>

                  <a
                    href="#archive"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-crimson hover:bg-parchment p-3.5 min-h-[48px] rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-mono font-bold text-crimson bg-crimson/10 border border-crimson/20 px-1.5 py-0.5 rounded">
                        CH. III
                      </span>
                      <span>Chapter III: Workshop Archive</span>
                    </div>
                    <span className="text-xs font-mono text-ink-faint font-normal">Telemetry Registry</span>
                  </a>

                  <a
                    href="#speed-parts"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-oxford-dark hover:bg-oxford/10 p-3.5 min-h-[48px] rounded-lg transition-colors flex items-center justify-between text-oxford font-bold group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-mono font-bold text-oxford bg-oxford/10 border border-oxford/25 px-1.5 py-0.5 rounded">
                        CH. V
                      </span>
                      <span>Chapter V: Speed Parts Wholesale Desk</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-oxford group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="#chronicle"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-crimson hover:bg-parchment p-3.5 min-h-[48px] rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-mono font-bold text-crimson bg-crimson/10 border border-crimson/20 px-1.5 py-0.5 rounded">
                        CH. VI
                      </span>
                      <span>Chapter VI: 1960–2026 Chronicle</span>
                    </div>
                    <span className="text-xs font-mono text-ink-faint font-normal">66 Years</span>
                  </a>

                  <a
                    href="#journal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-crimson hover:bg-parchment p-3.5 min-h-[48px] rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-mono font-bold text-crimson bg-crimson/10 border border-crimson/20 px-1.5 py-0.5 rounded">
                        CH. VII
                      </span>
                      <span>Chapter VII: Technical Journal</span>
                    </div>
                    <span className="text-xs font-mono text-ink-faint font-normal">Whitepapers</span>
                  </a>

                  <a
                    href="#faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-crimson hover:bg-parchment p-3.5 min-h-[48px] rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-mono font-bold text-crimson bg-crimson/10 border border-crimson/20 px-1.5 py-0.5 rounded">
                        CH. VIII
                      </span>
                      <span>Chapter VIII & IX: FAQs & Directory</span>
                    </div>
                    <span className="text-xs font-mono text-ink-faint font-normal">M.G. Marg</span>
                  </a>
                </div>

                {/* Bottom Drawer Quick Actions */}
                <div className="pt-4 border-t border-rule flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="#concierge-desk"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson hover:bg-crimson-dark rounded transition-colors shadow-sm group"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Reserve a Concierge Bay</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="#speed-parts"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-oxford hover:bg-oxford-dark rounded transition-colors shadow-sm group"
                  >
                    <Wrench className="w-4 h-4 text-brass-light shrink-0" />
                    <span>Speed Parts Trade Desk</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
