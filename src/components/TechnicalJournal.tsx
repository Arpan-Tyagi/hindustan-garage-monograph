import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technicalArticles } from '../data/journalData';
import { TechnicalArticle } from '../types';
import { Clock, ChevronRight, X, Cpu, CheckCircle2 } from 'lucide-react';
import { LUXURY_EASE, fadeInUpVariant } from '../utils/motion';
import { MaskedHeading } from './text';

export const TechnicalJournal: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<TechnicalArticle | null>(null);

  return (
    <section id="journal" className="py-12 sm:py-20 border-b border-rule bg-parchment-light relative">
      <div id="technical-journal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUpVariant}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-crimson font-bold">
            <span>CHAPTER VII</span>
            <span>—</span>
            <span className="tracking-ledger sm:tracking-archival uppercase text-ink">THE TECHNICAL JOURNAL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <MaskedHeading
              as="h2"
              className="lg:col-span-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight"
              italicWords={['Discourses.']}
            >
              Diagnostic Whitepapers & Mechanical Engineering Discourses.
            </MaskedHeading>
            <p className="lg:col-span-4 text-sm font-sans text-ink-muted leading-relaxed">
              In-depth technical treatises documenting our diagnostic methodologies, component metallurgy, and why localized
              engineering excellence dismantles dealership myths across Uttar Pradesh.
            </p>
          </div>
        </motion.div>

        {/* Articles Grid (4 Comprehensive Treatises) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: LUXURY_EASE }}
              className="bezel-container p-5 sm:p-8 flex flex-col justify-between space-y-6 hover:border-crimson/50 transition-colors bg-parchment group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-rule text-xs font-mono">
                  <span className="text-crimson font-bold">{article.chapterNumber}</span>
                  <span className="text-ink-faint flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brass shrink-0" />
                    {article.readingTime}
                  </span>
                </div>

                {/* Documentary Technical Photograph */}
                {article.imageUrl && (
                  <div
                    data-cursor="inspect"
                    data-cursor-text={article.chapterNumber}
                    className="relative overflow-hidden rounded border border-rule group/journalimg cursor-pointer"
                  >
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-44 sm:h-52 object-cover object-center group-hover/journalimg:scale-[1.03] transition-transform duration-700 ease-editorial"
                      loading="lazy"
                    />
                    {article.imageCaption && (
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 px-2.5 py-1 bg-ink/80 backdrop-blur-sm rounded text-[10px] font-mono text-parchment-light truncate">
                        {article.imageCaption}
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-normal text-ink group-hover:text-crimson transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <div className="text-xs font-sans text-ink-faint italic">
                    {article.subtitle}
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed line-clamp-3">
                  {article.abstract}
                </p>

                {/* Micro Technical Specs Snapshot */}
                <div className="p-3 bg-parchment-light rounded border border-rule/70 space-y-1 font-mono text-[11px]">
                  {Object.entries(article.technicalSpecs).slice(0, 2).map(([key, val]) => (
                    <div key={key} className="flex flex-wrap sm:flex-nowrap justify-between gap-1 text-ink-muted">
                      <span className="text-ink-faint">{key}:</span>
                      <span className="font-medium text-ink">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-rule flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-ink-faint">
                  {article.author} • {article.date}
                </span>

                <button
                  onClick={() => setActiveArticle(article)}
                  data-cursor="interactive"
                  className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-crimson hover:text-crimson-dark transition-colors rounded hover:bg-parchment-dark/50 group/btn"
                >
                  <span>Read Discourse</span>
                  <ChevronRight className="w-4 h-4 shrink-0 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="journal-reader-title"
            className="fixed inset-0 z-50 flex flex-col items-center justify-start sm:justify-center p-3 sm:p-6 bg-ink/75 backdrop-blur-md overflow-y-auto safe-pb safe-pt"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: LUXURY_EASE }}
              className="bezel-container max-w-3xl w-full my-auto p-5 sm:p-10 space-y-6 bg-parchment-light shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-rule gap-3">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-ledger sm:tracking-archival text-crimson">
                    {activeArticle.chapterNumber} • ARCHIVAL DISCOURSE
                  </span>
                  <h3 id="journal-reader-title" className="font-serif text-2xl sm:text-3xl font-normal text-ink leading-tight">
                    {activeArticle.title}
                  </h3>
                  <div className="text-xs font-mono text-ink-faint pt-1">
                    {activeArticle.author} • {activeArticle.date} • {activeArticle.readingTime}
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-ink-muted hover:text-ink text-sm font-mono font-bold shrink-0 rounded hover:bg-parchment transition-colors"
                  aria-label="Close Article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Featured Image */}
              {activeArticle.imageUrl && (
                <div className="relative overflow-hidden rounded-lg border border-rule">
                  <img
                    src={activeArticle.imageUrl}
                    alt={activeArticle.title}
                    className="w-full h-56 sm:h-72 object-cover object-center"
                  />
                  {activeArticle.imageCaption && (
                    <div className="p-2.5 bg-ink text-parchment-light text-xs font-mono flex items-center justify-between">
                      <span>{activeArticle.imageCaption}</span>
                      <span className="text-brass text-[10px]">DOCUMENTARY ARCHIVE</span>
                    </div>
                  )}
                </div>
              )}

              {/* Abstract */}
              <div className="p-4 bg-parchment rounded border border-rule italic font-serif text-base text-ink leading-relaxed">
                "{activeArticle.abstract}"
              </div>

              {/* Technical Specifications Matrix */}
              <div className="space-y-2 p-4 bg-parchment-dark/60 rounded border border-rule font-mono text-xs">
                <div className="font-bold text-ink uppercase pb-2 border-b border-rule/70 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-brass shrink-0" />
                  <span>Verified Technical Parameters & Benchmarks:</span>
                </div>
                <div className="space-y-1.5 pt-1">
                  {Object.entries(activeArticle.technicalSpecs).map(([key, val]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-rule/30 gap-0.5">
                      <span className="text-ink-faint">{key}:</span>
                      <span className="font-semibold text-ink break-words">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Paragraphs */}
              <div className="space-y-4 font-sans text-sm sm:text-base text-ink leading-relaxed">
                {activeArticle.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Clinical Verdict */}
              <div className="p-4 bg-brass/10 border border-brass/30 rounded-lg space-y-1 text-xs">
                <div className="font-mono font-bold uppercase text-brass-dark flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                  <span>Diagnostic Verdict & Mechanical Doctrine:</span>
                </div>
                <p className="font-sans text-ink leading-relaxed">{activeArticle.verdict}</p>
              </div>

              {/* Close Button */}
              <div className="pt-4 border-t border-rule text-right">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-ink hover:bg-ink-muted rounded transition-colors active:scale-[0.98]"
                >
                  Close Discourse
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
