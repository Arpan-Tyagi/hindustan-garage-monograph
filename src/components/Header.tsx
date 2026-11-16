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
      <div className="bg-ink text-parchment-light border-b border-rule-dark px-3 sm:px-4 py-1.5 text-[10px] sm:text-[11px] font-mono tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-brass whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              LIVE TELEMETRY
            </span>
            <span className="hidden sm:inline text-parchment-dark/70">|</span>
            <span className="hidden sm:inline text-parchment-dark/90 whitespace-nowrap">
              BAYS 01–08: {status.activeBays} ACTIVE • {status.standbyBays} STANDBY
            </span>
            <span className="hidden md:inline text-parchment-dark/70">|</span>
            <span className="hidden md:inline text-parchment-dark/80 whitespace-nowrap">
              <Clock className="w-3 h-3 inline mr-1 text-brass" />
              M.G. MARG: 09:00 – 19:30 IST
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-parchment-dark/90 shrink-0">
            <span className="hidden lg:inline text-[10px] tracking-widest text-brass border border-brass/30 px-2 py-0.5 rounded whitespace-nowrap">
              GSTIN: 09ADQPA5477Q1ZN
            </span>
            <a
              href="tel:+918796576868"
              className="hover:text-brass transition-colors inline-flex items-center gap-1 font-mono whitespace-nowrap py-1 px-1 -mr-1"
            >
              <Phone className="w-3 h-3 text-brass shrink-0" />
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
            <a href="#" className="group flex flex-col justify-center py-1">
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg xs:text-xl sm:text-2xl font-bold tracking-tight text-ink group-hover:text-crimson transition-colors whitespace-nowrap">
                  HINDUSTAN GARAGE
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.5 bg-brass/15 text-brass-dark border border-brass/30 rounded font-semibold whitespace-nowrap">
                  EST. 1960
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-archival text-ink-muted uppercase truncate max-w-[210px] xs:max-w-none">
                56, M.G. Marg • George Town • Prayagraj
              </div>
            </a>

            {/* Desktop Navigation Links (>= 1280px) */}
            <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-6 text-[11px] 2xl:text-xs font-medium uppercase tracking-wider 2xl:tracking-ledger text-ink-muted">
              <a
                href="#services"
                className="hover:text-crimson transition-colors py-2 border-b-2 border-transparent hover:border-crimson whitespace-nowrap"
              >
                Ledger of Services
              </a>
              <a
                href="#archive"
                className="hover:text-crimson transition-colors py-2 border-b-2 border-transparent hover:border-crimson whitespace-nowrap"
              >
                Workshop Archive
              </a>
              <a
                href="#speed-parts"
                className="hover:text-oxford transition-colors py-2 border-b-2 border-transparent hover:border-oxford flex items-center gap-1.5 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-oxford inline-block shrink-0" />
                Speed Parts Desk
              </a>
              <a
                href="#chronicle"
                className="hover:text-crimson transition-colors py-2 border-b-2 border-transparent hover:border-crimson whitespace-nowrap"
              >
                1960–2026 Chronicle
              </a>
              <a
                href="#journal"
                className="hover:text-crimson transition-colors py-2 border-b-2 border-transparent hover:border-crimson whitespace-nowrap"
              >
                Technical Journal
              </a>
              <a
                href="#faq"
                className="hover:text-crimson transition-colors py-2 border-b-2 border-transparent hover:border-crimson whitespace-nowrap"
              >
                Directory
              </a>
            </nav>

            {/* Action Buttons & Navigation Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="#speed-parts"
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] text-xs font-mono font-medium uppercase tracking-wider text-parchment bg-oxford hover:bg-oxford-dark border border-oxford-light/30 rounded shadow-sm transition-all btn-dignified"
              >
                <Wrench className="w-3.5 h-3.5 text-brass-light shrink-0" />
                <span>Trade Parts Desk</span>
              </a>

              <a
                href="#concierge-desk"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson hover:bg-crimson-dark border border-crimson-light/40 rounded shadow-sm transition-all btn-dignified"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Reserve a Bay</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 shrink-0" />
              </a>

              {/* Mobile Quick Reserve Button (<640px) */}
              <a
                href="#concierge-desk"
                className="sm:hidden inline-flex items-center justify-center px-3 py-2 min-h-[44px] text-[11px] font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson rounded"
              >
                Reserve
              </a>

              {/* Hamburger Toggle (Visible on all screens below xl, e.g. tablets & phones) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-ink hover:text-crimson hover:bg-parchment-dark/50 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-crimson"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-parchment-light border-b border-rule px-4 sm:px-6 py-6 space-y-4 animate-fadeIn max-h-[calc(100dvh-5rem)] overflow-y-auto safe-pb">
            <div className="text-xs font-mono text-ink-faint tracking-ledger sm:tracking-archival uppercase pb-2 border-b border-rule flex items-center justify-between">
              <span>Index of Monograph Sections</span>
              <span className="text-[10px] text-brass-dark font-semibold">EST. 1960</span>
            </div>
            <div className="flex flex-col space-y-1 text-sm font-medium uppercase tracking-wider">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson hover:bg-parchment p-3 min-h-[44px] rounded transition-colors flex items-center justify-between"
              >
                <span>Chapter II: Ledger of Services</span>
                <span className="text-xs font-mono text-ink-faint">06 Specializations</span>
              </a>
              <a
                href="#archive"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson hover:bg-parchment p-3 min-h-[44px] rounded transition-colors flex items-center justify-between"
              >
                <span>Chapter III: Workshop Archive</span>
                <span className="text-xs font-mono text-ink-faint">Telemetry Registry</span>
              </a>
              <a
                href="#speed-parts"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-oxford hover:bg-oxford/10 p-3 min-h-[44px] rounded transition-colors flex items-center justify-between text-oxford font-semibold"
              >
                <span>Chapter V: Speed Parts Wholesale Desk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#chronicle"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson hover:bg-parchment p-3 min-h-[44px] rounded transition-colors flex items-center justify-between"
              >
                <span>Chapter VI: 1960–2026 Chronicle</span>
                <span className="text-xs font-mono text-ink-faint">66 Years</span>
              </a>
              <a
                href="#journal"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson hover:bg-parchment p-3 min-h-[44px] rounded transition-colors flex items-center justify-between"
              >
                <span>Chapter VII: Technical Journal</span>
                <span className="text-xs font-mono text-ink-faint">Whitepapers</span>
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson hover:bg-parchment p-3 min-h-[44px] rounded transition-colors flex items-center justify-between"
              >
                <span>Chapter VIII & IX: FAQs & Directory</span>
                <span className="text-xs font-mono text-ink-faint">M.G. Marg</span>
              </a>
            </div>

            <div className="pt-4 border-t border-rule flex flex-col sm:flex-row gap-2.5">
              <a
                href="#concierge-desk"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson hover:bg-crimson-dark rounded transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Reserve a Concierge Bay</span>
              </a>
              <a
                href="#speed-parts"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] text-xs font-mono font-medium uppercase tracking-wider text-parchment bg-oxford hover:bg-oxford-dark rounded transition-colors shadow-sm"
              >
                <Wrench className="w-4 h-4 text-brass-light shrink-0" />
                <span>Speed Parts Trade Desk</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
