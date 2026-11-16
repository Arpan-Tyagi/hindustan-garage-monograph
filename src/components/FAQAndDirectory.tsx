import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { WORKSHOP_PHONE } from '../utils/whatsapp';
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  ExternalLink,
} from 'lucide-react';

export const FAQAndDirectory: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-01');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div id="faq" className="border-t border-rule bg-parchment">
      {/* CHAPTER VIII: Frequently Asked Questions */}
      <section className="py-12 sm:py-20 border-b border-rule max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-crimson font-bold">
            <span>CHAPTER VIII</span>
            <span>—</span>
            <span className="tracking-ledger sm:tracking-archival uppercase text-ink">FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <h2 className="lg:col-span-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight">
              Archival Guidance on In-House Procedures & Policies.
            </h2>
            <p className="lg:col-span-4 text-sm font-sans text-ink-muted leading-relaxed">
              Transparent answers regarding diagnostic protocols, cashless insurance processing, Speed Parts wholesale logistics,
              and our 66-year quality covenant.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqData.map((item) => {
            const isOpen = openFaqId === item.id;

            return (
              <div
                key={item.id}
                className="bezel-container transition-all overflow-hidden bg-parchment-light"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-crimson font-semibold">
                      {item.category} {item.telemetryRef && `• ${item.telemetryRef}`}
                    </div>
                    <div className="font-serif text-lg sm:text-xl text-ink font-medium leading-snug">
                      {item.question}
                    </div>
                  </div>

                  <div className="p-1 rounded-full bg-parchment border border-rule text-ink-muted flex-shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm font-sans text-ink-muted leading-relaxed border-t border-rule/50 space-y-3">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CHAPTER IX: The George Town Directory & Archival Masthead Footer */}
      <footer className="bg-ink text-parchment pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-rule-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Footer Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-rule-dark">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-parchment">
                  HINDUSTAN GARAGE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-brass/20 text-brass border border-brass/40 rounded font-bold uppercase">
                  EST. 1960
                </span>
              </div>
              <div className="text-xs font-mono tracking-wider sm:tracking-archival uppercase text-parchment-dark/70 break-words">
                PRAYAGRAJ'S PREMIER AUTOMOTIVE INSTITUTION & SPEED PARTS TRADE DIVISION
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
              <a
                href="#concierge-desk"
                className="px-4 py-2.5 min-h-[44px] inline-flex items-center justify-center bg-crimson hover:bg-crimson-dark text-parchment rounded uppercase font-semibold tracking-wider transition-colors shadow-sm"
              >
                Reserve a Bay
              </a>
              <a
                href="#speed-parts"
                className="px-4 py-2.5 min-h-[44px] inline-flex items-center justify-center bg-oxford hover:bg-oxford-light text-parchment rounded uppercase font-semibold tracking-wider transition-colors border border-parchment/20 shadow-sm"
              >
                Speed Parts Trade Desk
              </a>
            </div>
          </div>

          {/* Directory Dual-Facility Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs font-mono text-parchment-dark/80">
            {/* Facility 1: Central Workshop */}
            <div className="space-y-3">
              <div className="text-brass font-bold uppercase tracking-ledger sm:tracking-archival text-[11px] pb-1 border-b border-rule-dark">
                01. CENTRAL WORKSHOP
              </div>
              <div className="space-y-1.5 text-parchment/90">
                <div className="font-sans text-sm font-semibold text-parchment">
                  Hindustan Garage Facility
                </div>
                <div>56, M.G. Marg, George Town</div>
                <div>Prayagraj, Uttar Pradesh 211002</div>
                <div className="text-parchment-dark/60 text-[11px]">
                  Coordinates: 25.4520° N, 81.8540° E
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=56+MG+Marg+George+Town+Prayagraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brass hover:text-brass-light transition-colors py-2 min-h-[44px]"
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>Open Workshop in Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 shrink-0" />
                </a>
              </div>
            </div>

            {/* Facility 2: Speed Parts Wholesale Warehouse */}
            <div className="space-y-3">
              <div className="text-brass font-bold uppercase tracking-ledger sm:tracking-archival text-[11px] pb-1 border-b border-rule-dark">
                02. SPEED PARTS WAREHOUSE
              </div>
              <div className="space-y-1.5 text-parchment/90">
                <div className="font-sans text-sm font-semibold text-parchment">
                  Wholesale & OEM Supply Hub
                </div>
                <div>Medical Chauraha, George Town</div>
                <div>Prayagraj, Uttar Pradesh 211002</div>
                <div className="text-parchment-dark/60 text-[11px]">
                  Logistics dispatch radius: 150 km
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${WORKSHOP_PHONE}?text=${encodeURIComponent('Hello Speed Parts, I am visiting the Medical Chauraha trade counter.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brass hover:text-brass-light transition-colors py-2 min-h-[44px]"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span>Contact Parts Counter</span>
                </a>
              </div>
            </div>

            {/* Operational Telemetry & Hours */}
            <div className="space-y-3">
              <div className="text-brass font-bold uppercase tracking-ledger sm:tracking-archival text-[11px] pb-1 border-b border-rule-dark">
                03. HOURS & TELEMETRY
              </div>
              <div className="space-y-1.5">
                <div>
                  <span className="text-parchment-dark/50 block">Monday to Saturday:</span>
                  <span className="text-parchment font-semibold">09:00 — 19:30 IST</span>
                </div>
                <div>
                  <span className="text-parchment-dark/50 block">Sunday:</span>
                  <span className="text-parchment">Emergency Fleet & Breakdown Hotline</span>
                </div>
                <div>
                  <span className="text-parchment-dark/50 block">Hotline Telemetry:</span>
                  <span className="text-parchment">+91 87965 76868</span>
                </div>
              </div>
            </div>

            {/* Statutory Compliance & Credentials */}
            <div className="space-y-3">
              <div className="text-brass font-bold uppercase tracking-ledger sm:tracking-archival text-[11px] pb-1 border-b border-rule-dark">
                04. STATUTORY CREDENTIALS
              </div>
              <div className="space-y-1.5">
                <div>
                  <span className="text-parchment-dark/50 block">GSTIN Registration:</span>
                  <span className="text-parchment font-mono font-bold break-all">09ADQPA5477Q1ZN</span>
                </div>
                <div>
                  <span className="text-parchment-dark/50 block">Enterprise Classification:</span>
                  <span className="text-parchment">Automotive Engineering & Wholesale MSME</span>
                </div>
                <div>
                  <span className="text-parchment-dark/50 block">Established:</span>
                  <span className="text-parchment">1960 • 66 Years of Stewardship</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Colophon & Legal Notice */}
          <div className="pt-8 border-t border-rule-dark flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-parchment-dark/50 text-center sm:text-left">
            <div>
              © 1960–2026 Hindustan Garage & Speed Parts Division. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
              <span>George Town, Prayagraj</span>
              <span>•</span>
              <span>Non-3D Editorial Monograph</span>
              <span>•</span>
              <span className="text-brass">"Everything is Important"</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
