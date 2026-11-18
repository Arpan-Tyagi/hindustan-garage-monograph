import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { ServiceSpecification } from '../types';
import { ShieldCheck, CheckCircle2, Cpu, Clock, ArrowRight, Quote } from 'lucide-react';
import { LUXURY_EASE, fadeInUpVariant } from '../utils/motion';
import { MaskedHeading, TelemetryScramble } from './text';

export const MasterLedger: React.FC = () => {
  const [selectedSpec, setSelectedSpec] = useState<ServiceSpecification>(servicesData[0]);

  return (
    <section id="services" className="py-12 sm:py-20 border-b border-rule bg-parchment relative">
      <div id="master-ledger" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUpVariant}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-crimson font-bold">
            <span>CHAPTER II</span>
            <span>—</span>
            <span className="tracking-ledger sm:tracking-archival uppercase text-ink">THE MASTER LEDGER OF SERVICES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <MaskedHeading
              as="h2"
              className="lg:col-span-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight"
            >
              "All Work Under One Roof" — Architectural Specification Index.
            </MaskedHeading>
            <p className="lg:col-span-4 text-sm font-sans text-ink-muted leading-relaxed">
              We reject fragmented outsourcing. From computerized European ECU flashing and CRDi bench calibration to
              pressurized Italian downdraft baking, every discipline is executed by certified in-house craftsmen within our
              George Town bays.
            </p>
          </div>
        </motion.div>

        {/* Interactive Master Index Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Specification Selector Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
            className="lg:col-span-5 space-y-3"
          >
            <div className="text-[11px] font-mono uppercase tracking-ledger sm:tracking-archival text-ink-faint pb-2 border-b border-rule flex flex-wrap items-center justify-between gap-1">
              <span>SELECT DISCIPLINE</span>
              <span>6 OPERATIONAL SPECIALIZATIONS</span>
            </div>

            <div className="space-y-2">
              {servicesData.map((spec) => {
                const isSelected = selectedSpec.id === spec.id;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpec(spec)}
                    data-cursor="interactive"
                    className={`w-full text-left p-3.5 sm:p-4 rounded-lg transition-all border text-sm min-h-[44px] focus:outline-none focus:ring-1 focus:ring-crimson relative overflow-hidden ${
                      isSelected
                        ? 'bg-parchment-light border-crimson shadow-bezel text-ink ring-1 ring-crimson/20'
                        : 'bg-parchment-dark/60 hover:bg-parchment-light border-rule text-ink-muted hover:text-ink'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeSpecIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-crimson"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}

                    <div className="flex items-center justify-between font-mono text-[11px] pb-1">
                      <TelemetryScramble
                        text={spec.code}
                        className={isSelected ? 'text-crimson font-bold' : 'text-ink-faint'}
                      />
                      <span className="text-ink-faint">{spec.bayAssignment}</span>
                    </div>

                    <div className="font-serif text-lg font-medium leading-snug text-ink pt-0.5">
                      {spec.title}
                    </div>

                    <div className="text-xs text-ink-muted font-sans line-clamp-1 pt-1">
                      {spec.targetAudience}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Architectural Specification Drawer (Double-Bezel) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSpec.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: LUXURY_EASE }}
                className="bezel-container p-5 sm:p-8 space-y-6"
              >
                {/* Spec Header & Chapter */}
                <div className="pb-5 border-b border-rule space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-ledger sm:tracking-archival text-crimson">
                      {selectedSpec.chapter} • {selectedSpec.code}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 bg-ink text-parchment rounded">
                      {selectedSpec.bayAssignment}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                    {selectedSpec.title}
                  </h3>

                  <p className="font-sans text-sm text-ink-muted leading-relaxed">
                    {selectedSpec.subtitle}
                  </p>
                </div>

                {/* Target Scope & Lead Time Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-3.5 bg-parchment-dark/70 rounded border border-rule font-mono text-xs">
                  <div>
                    <span className="text-ink-faint block text-[10px] uppercase">Applicable Scope</span>
                    <span className="font-medium text-ink">{selectedSpec.targetAudience}</span>
                  </div>
                  <div>
                    <span className="text-ink-faint block text-[10px] uppercase">Standard Lead Time</span>
                    <span className="font-medium text-crimson flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      {selectedSpec.leadTime}
                    </span>
                  </div>
                </div>

                {/* Diagnostic Instrumentation Suite */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-ledger sm:tracking-archival text-ink font-semibold flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-brass shrink-0" />
                    <span>Verified Diagnostic Instrumentation:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSpec.diagnosticTools.map((tool, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 bg-parchment-light border border-rule rounded text-xs font-mono text-ink-muted leading-snug break-words"
                      >
                        • {tool}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables Protocol */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-ledger sm:tracking-archival text-ink font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                    <span>Archival Deliverables & Standards:</span>
                  </div>
                  <ul className="space-y-2 text-xs font-sans text-ink-muted">
                    {selectedSpec.keyDeliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Warranty & Curator Note Box */}
                <div className="p-4 bg-brass/10 border border-brass/30 rounded-lg space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-mono font-bold text-brass-dark uppercase">
                    <ShieldCheck className="w-4 h-4 text-brass shrink-0" />
                    <span>Quality Covenant & Warranty</span>
                  </div>
                  <p className="text-ink font-sans leading-relaxed">{selectedSpec.warrantyTerms}</p>
                  <div className="pt-2 border-t border-brass/20 text-ink-muted italic font-serif text-sm flex items-start gap-2">
                    <Quote className="w-3.5 h-3.5 text-brass shrink-0 mt-0.5 opacity-80" />
                    <span>"{selectedSpec.curatorNote}"</span>
                  </div>
                </div>

                {/* Drawer Action Bar */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="text-xs font-mono text-ink-faint">
                    {selectedSpec.pricingGuidance}
                  </div>
                  <a
                    href="#concierge-desk"
                    data-cursor="reserve"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson hover:bg-crimson-dark rounded transition-all btn-dignified shadow-sm text-center group active:scale-[0.98]"
                  >
                    <span>Book This Service</span>
                    <span className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
