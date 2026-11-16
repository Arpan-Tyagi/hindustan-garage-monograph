import React, { useState } from 'react';
import { archiveVehicles } from '../data/archiveData';
import { Filter, Clock, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';

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
    <section id="archive" className="py-20 border-b border-rule bg-parchment-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-crimson font-bold">
            <span>CHAPTER III</span>
            <span>—</span>
            <span className="tracking-archival uppercase text-ink">THE WORKSHOP ARCHIVE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <h2 className="lg:col-span-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight">
              Filterable Completed Cars Showcase & Diagnostic Registry.
            </h2>
            <p className="lg:col-span-4 text-sm font-sans text-ink-muted leading-relaxed">
              Every completed commission is permanently cataloged in our workshop ledger. Below are verified entries
              detailing chassis telemetry, diagnostic notes, OEM part SKU codes, and master technician sign-offs.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-rule">
          <span className="text-xs font-mono text-ink-faint mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            FILTER BY CHASSIS:
          </span>
          {categories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-all ${
                  isActive
                    ? 'bg-ink text-parchment font-semibold shadow-sm'
                    : 'bg-parchment hover:bg-parchment-dark text-ink-muted border border-rule'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Archive Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => {
            const isExpanded = expandedCardId === vehicle.id;

            return (
              <div
                key={vehicle.id}
                className="bezel-container p-6 flex flex-col justify-between space-y-5 hover:border-crimson/50 transition-all"
              >
                {/* Ledger Sheet Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-rule font-mono text-xs">
                    <span className="text-crimson font-semibold">{vehicle.ledgerNumber}</span>
                    <span className="px-2 py-0.5 bg-parchment-dark border border-rule rounded text-ink-muted">
                      {vehicle.bayNumber}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">
                      {vehicle.categoryLabel} • {vehicle.year}
                    </div>
                    <h3 className="font-serif text-xl font-medium text-ink leading-snug">
                      {vehicle.model}
                    </h3>
                    <div className="text-[11px] font-mono text-ink-muted truncate">
                      Chassis: <span className="font-semibold text-ink">{vehicle.chassisPrefix}</span>
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
                  <div className="flex items-center justify-between">
                    <div className="inspection-stamp">
                      {vehicle.inspectionStamp}
                    </div>
                    <div className="text-right font-mono text-xs">
                      <div className="text-ink-faint text-[10px] uppercase">Turnaround</div>
                      <div className="font-bold text-ink flex items-center gap-1 justify-end">
                        <Clock className="w-3.5 h-3.5 text-brass" />
                        {vehicle.turnaroundHours} Hours
                      </div>
                    </div>
                  </div>

                  {/* Technician Sign-Off */}
                  <div className="text-[11px] font-mono text-ink-muted flex items-start gap-1.5 pt-1">
                    <UserCheck className="w-3.5 h-3.5 text-crimson flex-shrink-0 mt-0.5" />
                    <span>{vehicle.technicianSignOff}</span>
                  </div>

                  {/* Expandable Key Interventions & Replaced Parts */}
                  <button
                    onClick={() => toggleExpand(vehicle.id)}
                    className="w-full pt-2 flex items-center justify-between text-xs font-mono text-ink font-semibold hover:text-crimson transition-colors border-t border-rule/60"
                  >
                    <span>
                      {isExpanded ? 'Hide Replaced Parts & Interventions' : 'View Replaced Parts & Diagnostics'}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="pt-2 space-y-3 text-xs border-t border-rule/80 animate-fadeIn">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-ink-faint block mb-1">
                          Core Interventions:
                        </span>
                        <ul className="space-y-1 font-sans text-ink-muted">
                          {vehicle.keyInterventions.map((k, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-crimson font-bold">•</span>
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
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
