import React from 'react';
import { motion } from 'framer-motion';
import { chronicleEvents } from '../data/chronicleData';
import { LUXURY_EASE, fadeInUpVariant } from '../utils/motion';
import { MaskedHeading } from './text';

export const Chronicle: React.FC = () => {
  return (
    <section id="chronicle" className="py-12 sm:py-20 border-b border-rule bg-parchment relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUpVariant}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-crimson font-bold">
            <span>CHAPTER VI</span>
            <span>—</span>
            <span className="tracking-ledger sm:tracking-archival uppercase text-ink">THE 1960–2026 CHRONICLE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <MaskedHeading
              as="h2"
              className="lg:col-span-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight"
              italicWords={['Heritage']}
            >
              Sixty-Six Years of Automotive Heritage in George Town.
            </MaskedHeading>
            <p className="lg:col-span-4 text-sm font-sans text-ink-muted leading-relaxed">
              Established in 1960 in the heart of Prayagraj, Hindustan Garage has witnessed the evolution of the Indian
              automobile from side-valve Ambassadors to modern DoIP-networked luxury super-saloons.
            </p>
          </div>
        </motion.div>

        {/* Archival Museum Exhibition Timeline */}
        <div className="space-y-8 relative">
          {chronicleEvents.map((event, idx) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: idx * 0.08, ease: LUXURY_EASE }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative group"
            >
              {/* Year Stamp Column */}
              <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start pr-0 lg:pr-6 lg:border-r lg:border-rule lg:min-h-[140px] relative">
                <motion.div
                  initial={{ scale: 0.88, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, ease: LUXURY_EASE }}
                  className="font-serif text-3xl lg:text-4xl font-bold text-crimson group-hover:scale-105 transition-transform"
                >
                  {event.year}
                </motion.div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-ink-faint text-right mt-1">
                  {event.era}
                </div>
                {/* Visual Epoch Marker Dot */}
                <div className="hidden lg:block absolute -right-[5.5px] top-3.5 w-2.5 h-2.5 rounded-full bg-parchment border-2 border-crimson shadow-sm group-hover:scale-125 transition-transform" />
              </div>

              {/* Event Exhibition Card */}
              <div className="lg:col-span-10">
                <div className="bezel-container p-5 sm:p-8 space-y-4 bg-parchment-light hover:border-crimson/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-rule">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink break-words">
                      {event.headline}
                    </h3>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-brass/10 text-brass-dark border border-brass/30 rounded font-semibold shrink-0">
                      ARCHIVAL RECORD
                    </span>
                  </div>

                  {/* Archival Historical Photograph */}
                  {event.imageUrl && (
                    <div
                      data-cursor="inspect"
                      data-cursor-text={event.year}
                      className="relative overflow-hidden rounded border border-rule group/chronicleimg cursor-pointer"
                    >
                      <img
                        src={event.imageUrl}
                        alt={event.headline}
                        className="w-full h-48 sm:h-64 object-cover object-center group-hover/chronicleimg:scale-[1.03] transition-transform duration-700 ease-editorial"
                        loading="lazy"
                      />
                      {event.imageCaption && (
                        <div className="absolute bottom-1.5 left-1.5 right-1.5 px-2.5 py-1 bg-ink/80 backdrop-blur-sm rounded text-[10px] font-mono text-parchment-light truncate">
                          {event.imageCaption}
                        </div>
                      )}
                    </div>
                  )}

                  <p className="font-sans text-sm text-ink-muted leading-relaxed">
                    {event.narration}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 border-t border-rule/70 font-mono text-xs">
                    <div className="p-3 bg-parchment rounded border border-rule/60 space-y-1">
                      <span className="text-ink-faint block text-[10px] uppercase font-bold">
                        Technical Milestone:
                      </span>
                      <span className="text-ink break-words">{event.technicalMilestone}</span>
                    </div>

                    <div className="p-3 bg-parchment rounded border border-rule/60 space-y-1">
                      <span className="text-ink-faint block text-[10px] uppercase font-bold">
                        Archival Evidence / Artifact:
                      </span>
                      <span className="text-ink-muted italic break-words">{event.archivalArtifact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
