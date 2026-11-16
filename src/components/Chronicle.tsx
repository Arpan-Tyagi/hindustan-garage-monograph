import React from 'react';
import { chronicleEvents } from '../data/chronicleData';

export const Chronicle: React.FC = () => {
  return (
    <section id="chronicle" className="py-20 border-b border-rule bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-crimson font-bold">
            <span>CHAPTER VI</span>
            <span>—</span>
            <span className="tracking-archival uppercase text-ink">THE 1960–2026 CHRONICLE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <h2 className="lg:col-span-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight">
              Sixty-Six Years of Automotive Heritage in George Town.
            </h2>
            <p className="lg:col-span-4 text-sm font-sans text-ink-muted leading-relaxed">
              Established in 1960 in the heart of Prayagraj, Hindustan Garage has witnessed the evolution of the Indian
              automobile from side-valve Ambassadors to modern DoIP-networked luxury super-saloons.
            </p>
          </div>
        </div>

        {/* Archival Museum Exhibition Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden lg:block absolute left-[120px] top-6 bottom-6 w-px bg-rule" />

          {chronicleEvents.map((event) => (
            <div
              key={event.year}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative group"
            >
              {/* Year Stamp Column */}
              <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start pr-0 lg:pr-8">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-crimson group-hover:scale-105 transition-transform">
                  {event.year}
                </div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-ink-faint text-right mt-1">
                  {event.era}
                </div>
              </div>

              {/* Event Exhibition Card */}
              <div className="lg:col-span-10">
                <div className="bezel-container p-6 sm:p-8 space-y-4 bg-parchment-light hover:border-crimson/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-rule">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink">
                      {event.headline}
                    </h3>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-brass/10 text-brass-dark border border-brass/30 rounded font-semibold">
                      ARCHIVAL RECORD
                    </span>
                  </div>

                  <p className="font-sans text-sm text-ink-muted leading-relaxed">
                    {event.narration}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-rule/70 font-mono text-xs">
                    <div className="p-3 bg-parchment rounded border border-rule/60 space-y-1">
                      <span className="text-ink-faint block text-[10px] uppercase font-bold">
                        Technical Milestone:
                      </span>
                      <span className="text-ink">{event.technicalMilestone}</span>
                    </div>

                    <div className="p-3 bg-parchment rounded border border-rule/60 space-y-1">
                      <span className="text-ink-faint block text-[10px] uppercase font-bold">
                        Archival Evidence / Artifact:
                      </span>
                      <span className="text-ink-muted italic">{event.archivalArtifact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
