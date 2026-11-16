import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Wrench, Menu, X, ArrowUpRight, Clock } from 'lucide-react';
import { getWorkshopOperationalStatus } from '../data/telemetryData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const status = getWorkshopOperationalStatus();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Archival Telegraph Strip */}
      <div className="bg-ink text-parchment-light border-b border-rule-dark px-4 py-1.5 text-[11px] font-mono tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-brass">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              LIVE TELEMETRY
            </span>
            <span className="hidden sm:inline text-parchment-dark/70">|</span>
            <span className="hidden sm:inline text-parchment-dark/90">
              BAYS 01–08: {status.activeBays} ACTIVE • {status.standbyBays} STANDBY
            </span>
            <span className="hidden md:inline text-parchment-dark/70">|</span>
            <span className="hidden md:inline text-parchment-dark/80">
              <Clock className="w-3 h-3 inline mr-1 text-brass" />
              M.G. MARG HOURS: 09:00 – 19:30 IST (MON–SAT)
            </span>
          </div>

          <div className="flex items-center gap-4 text-parchment-dark/90">
            <span className="hidden lg:inline text-[10px] tracking-widest text-brass border border-brass/30 px-2 py-0.5 rounded">
              GSTIN: 09ADQPA5477Q1ZN
            </span>
            <a
              href="tel:+918796576868"
              className="hover:text-brass transition-colors flex items-center gap-1 font-mono"
            >
              <Phone className="w-3 h-3 text-brass" />
              <span>+91 87965 76868</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Archival Masthead Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-parchment/95 backdrop-blur-md shadow-bezel border-b border-rule'
            : 'bg-parchment border-b border-rule'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Masthead Identity */}
            <a href="#" className="group flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ink group-hover:text-crimson transition-colors">
                  HINDUSTAN GARAGE
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.5 bg-brass/15 text-brass-dark border border-brass/30 rounded font-semibold">
                  EST. 1960
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono tracking-archival text-ink-muted uppercase">
                56, M.G. Marg • George Town • Prayagraj
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7 text-xs font-medium uppercase tracking-ledger text-ink-muted">
              <a
                href="#services"
                className="hover:text-crimson transition-colors py-2 border-b-2 border-transparent hover:border-crimson"
              >
                Ledger of Services
              </a>
              <a
                href="#archive"
                className="hover:text-crimson transition-colors py-2 border-b-2 border-transparent hover:border-crimson"
              >
                Workshop Archive
              </a>
              <a
                href="#speed-parts"
                className="hover:text-oxford transition-colors py-2 border-b-2 border-transparent hover:border-oxford flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-oxford inline-block" />
                Speed Parts Trade Desk
              </a>
              <a
                href="#chronicle"
                className="hover:text-crimson transition-colors py-2 border-b-2 border-transparent hover:border-crimson"
              >
                1960–2026 Chronicle
              </a>
              <a
                href="#journal"
                className="hover:text-crimson transition-colors py-2 border-b-2 border-transparent hover:border-crimson"
              >
                Technical Journal
              </a>
              <a
                href="#faq"
                className="hover:text-crimson transition-colors py-2 border-b-2 border-transparent hover:border-crimson"
              >
                Directory
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#speed-parts"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium uppercase tracking-wider text-parchment bg-oxford hover:bg-oxford-dark border border-oxford-light/30 rounded shadow-sm transition-all btn-dignified"
              >
                <Wrench className="w-3.5 h-3.5 text-brass-light" />
                <span>Trade Parts Desk</span>
              </a>

              <a
                href="#concierge-desk"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson hover:bg-crimson-dark border border-crimson-light/40 rounded shadow-sm transition-all btn-dignified"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Bay</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#concierge-desk"
                className="px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson rounded"
              >
                Reserve
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-ink hover:text-crimson focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-parchment-light border-b border-rule px-6 py-6 space-y-4">
            <div className="text-xs font-mono text-ink-faint tracking-archival uppercase pb-2 border-b border-rule">
              Index of Monograph Sections
            </div>
            <div className="flex flex-col space-y-3 text-sm font-medium uppercase tracking-wider">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson py-1"
              >
                Chapter II: Ledger of Services
              </a>
              <a
                href="#archive"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson py-1"
              >
                Chapter III: Workshop Archive
              </a>
              <a
                href="#speed-parts"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-oxford py-1 flex items-center justify-between text-oxford font-semibold"
              >
                <span>Chapter V: Speed Parts Wholesale Desk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#chronicle"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson py-1"
              >
                Chapter VI: 1960–2026 Chronicle
              </a>
              <a
                href="#journal"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson py-1"
              >
                Chapter VII: Technical Journal
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson py-1"
              >
                Chapter VIII & IX: FAQs & Directory
              </a>
            </div>

            <div className="pt-4 border-t border-rule space-y-2">
              <a
                href="#concierge-desk"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson rounded"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Concierge Bay</span>
              </a>
              <a
                href="#speed-parts"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium uppercase tracking-wider text-parchment bg-oxford rounded"
              >
                <Wrench className="w-4 h-4 text-brass-light" />
                <span>Speed Parts Trade Desk</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
