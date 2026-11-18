import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { archiveVehicles } from '../data/archiveData';
import { Filter, Clock, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { LUXURY_EASE, stampImprintVariant, fadeInUpVariant } from '../utils/motion';
import { MaskedHeading, RollingCounter, TelemetryScramble } from './text';

export const WorkshopArchive: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Archived Ledger Sheets' },
    { id: 'european-luxury', label: 'European Luxury' },
    { id: 'everyday-four-wheeler', label: 'Everyday Four-Wheelers' },
    { id: 'vintage-restoration', label: 'Vintage & Classic' },
    { id: 'fleet-commercial', label: 'Fleet & Institutional' },
  ];

  const filteredVehicles = selectedFilter === 'all'
    ? archiveVehicles
    : archiveVehicles.filter((v) => v.category === selectedFilter);

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="archive" className="py-12 sm:py-20 border-b border-rule bg-parchment-light relative">
      <div id="workshop-archive" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUpVariant}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-crimson font-bold">
            <span>CHAPTER III</span>
            <span>—</span>
            <span className="tracking-ledger sm:tracking-archival uppercase text-ink">THE WORKSHOP ARCHIVE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <MaskedHeading
              as="h2"
              className="lg:col-span-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight"
            >
              Filterable Completed Cars Showcase & Diagnostic Registry.
            </MaskedHeading>
            <p className="lg:col-span-4 text-sm font-sans text-ink-muted leading-relaxed">
              Every completed commission is permanently cataloged in our workshop ledger. Below are verified entries
              detailing chassis telemetry, diagnostic notes, OEM part SKU codes, and master technician sign-offs.
            </p>
          </div>
        </motion.div>

        {/* Filter Bar with Smooth Pill Slider */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-rule">
          <span className="text-xs font-mono text-ink-faint mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 shrink-0" />
            FILTER BY CHASSIS:
          </span>
          {categories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                data-cursor="interactive"
                className={`relative px-3.5 py-1.5 min-h-[44px] sm:min-h-[38px] text-xs font-mono rounded transition-colors focus:outline-none ${
                  isActive ? 'text-parchment font-semibold' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeArchivePill"
                    className="absolute inset-0 bg-ink rounded shadow-sm"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Archive Ledger Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredVehicles.map((vehicle, idx) => {
              const isExpanded = expandedCardId === vehicle.id;

              return (
                <motion.div
                  layout
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: LUXURY_EASE }}
                  className="bezel-container p-5 sm:p-6 flex flex-col justify-between space-y-5 hover:border-crimson/50 transition-colors"
                >
                  {/* Ledger Sheet Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-rule font-mono text-xs">
                      <span className="text-crimson font-semibold">{vehicle.ledgerNumber}</span>
                      <span className="px-2 py-0.5 bg-parchment-dark border border-rule rounded text-ink-muted">
                        {vehicle.bayNumber}
                      </span>
                    </div>

                    {/* Vehicle Documentary Photograph */}
                    {vehicle.imageUrl && (
                      <div
                        data-cursor="inspect"
                        data-cursor-text={vehicle.bayNumber}
                        className="relative overflow-hidden rounded border border-rule group/archiveimg cursor-pointer"
                      >
                        <img
                          src={vehicle.imageUrl}
                          alt={vehicle.model}
                          className="w-full h-44 sm:h-48 object-cover object-center group-hover/archiveimg:scale-[1.03] transition-transform duration-700 ease-editorial"
                          loading="lazy"
                        />
                        {vehicle.imageCaption && (
                          <div className="absolute bottom-1.5 left-1.5 right-1.5 px-2 py-0.5 bg-ink/80 backdrop-blur-sm rounded text-[9px] font-mono text-parchment-light truncate">
                            {vehicle.imageCaption}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="space-y-1">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
                        {vehicle.categoryLabel} • {vehicle.year}
                      </div>
                      <h3 className="font-serif text-xl font-medium text-ink leading-snug">
                        {vehicle.model}
                      </h3>
                      <div className="text-[11px] font-mono text-ink-muted truncate">
                        Chassis: <TelemetryScramble text={vehicle.chassisPrefix} className="font-semibold text-ink" />
                      </div>
                    </div>

                    {/* Diagnostic Brief */}
                    <div className="pt-2 text-xs font-sans text-ink-muted leading-relaxed bg-parchment/60 p-3 rounded border border-rule/60">
                      <span className="font-mono text-[10px] uppercase text-ink-faint block mb-1">
                        Initial Fault Telemetry:
                      </span>
                      {vehicle.diagnosticBrief}
                    </div>
                  </div>

                  {/* Stamped Inspection Badge & Turnaround */}
                  <div className="pt-2 border-t border-rule space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-20px' }}
                        variants={stampImprintVariant}
                        className="inspection-stamp max-w-full text-center break-words text-[11px] sm:text-xs shadow-sm"
                      >
                        {vehicle.inspectionStamp}
                      </motion.div>
                      <div className="text-right font-mono text-xs ml-auto">
                        <div className="text-ink-faint text-[10px] uppercase">Turnaround</div>
                        <div className="font-bold text-ink flex items-center gap-1 justify-end">
                          <Clock className="w-3.5 h-3.5 text-brass shrink-0" />
                          <RollingCounter value={vehicle.turnaroundHours} suffix=" Hours" className="font-bold text-ink" />
                        </div>
                      </div>
                    </div>

                    {/* Technician Sign-Off */}
                    <div className="text-[11px] font-mono text-ink-muted flex items-start gap-1.5 pt-1 break-words">
                      <UserCheck className="w-3.5 h-3.5 text-crimson shrink-0 mt-0.5" />
                      <span>{vehicle.technicianSignOff}</span>
                    </div>

                    {/* Expandable Key Interventions & Replaced Parts */}
                    <button
                      onClick={() => toggleExpand(vehicle.id)}
                      data-cursor="interactive"
                      className="w-full pt-3 pb-1 min-h-[44px] flex items-center justify-between text-xs font-mono text-ink font-semibold hover:text-crimson transition-colors border-t border-rule/60 text-left focus:outline-none"
                    >
                      <span className="pr-2">
                        {isExpanded ? 'Hide Replaced Parts & Interventions' : 'View Replaced Parts & Diagnostics'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: LUXURY_EASE }}
                          className="pt-2 space-y-3 text-xs border-t border-rule/80 overflow-hidden"
                        >
                          <div>
                            <span className="font-mono text-[10px] uppercase text-ink-faint block mb-1">
                              Core Interventions:
                            </span>
                            <ul className="space-y-1 font-sans text-ink-muted">
                              {vehicle.keyInterventions.map((k, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-crimson font-bold shrink-0">•</span>
                                  <span>{k}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2">
                            <span className="font-mono text-[10px] uppercase text-ink-faint block mb-1">
                              Replaced OEM Parts Registry:
                            </span>
                            <div className="space-y-1.5 font-mono text-[11px]">
                              {vehicle.partsReplaced.map((part, pIdx) => (
                                <div key={pIdx} className="p-2 bg-parchment rounded border border-rule/70">
                                  <div className="font-medium text-ink">{part.name}</div>
                                  <div className="text-ink-faint text-[10px] flex justify-between mt-0.5">
                                    <span>SKU: {part.sku}</span>
                                    <span>OEM: {part.oemCode}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="text-[10px] font-mono text-ink-faint pt-1">
                            Client Origin: {vehicle.clientOrigin} • {vehicle.completedDate}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
