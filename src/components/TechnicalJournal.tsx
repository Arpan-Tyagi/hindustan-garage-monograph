import React, { useState } from 'react';
import { technicalArticles } from '../data/journalData';
import { TechnicalArticle } from '../types';
import { Clock, X, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';

export const TechnicalJournal: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<TechnicalArticle | null>(null);

  return (
    <section id="journal" className="py-12 sm:py-20 border-b border-rule bg-parchment-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-crimson font-bold">
            <span>CHAPTER VII</span>
            <span>—</span>
            <span className="tracking-ledger sm:tracking-archival uppercase text-ink">THE TECHNICAL JOURNAL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <h2 className="lg:col-span-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight">
              Discourses in Automotive Physics, Diagnostics & Metallurgy.
            </h2>
            <p className="lg:col-span-4 text-sm font-sans text-ink-muted leading-relaxed">
              Published by the master diagnostic engineers of Hindustan Garage and Speed Parts. Rigorous whitepapers
              addressing regional climate mechanics, DoIP optical protocols, and component forensics.
            </p>
          </div>
        </div>

        {/* Articles Grid (4 Comprehensive Treatises) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {technicalArticles.map((article) => (
            <div
              key={article.id}
              className="bezel-container p-5 sm:p-8 flex flex-col justify-between space-y-6 hover:border-crimson/50 transition-all bg-parchment group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-rule text-xs font-mono">
                  <span className="text-crimson font-bold">{article.chapterNumber}</span>
                  <span className="text-ink-faint flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brass shrink-0" />
                    {article.readingTime}
                  </span>
                </div>

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
                  className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-crimson hover:text-crimson-dark transition-colors rounded hover:bg-parchment-dark/50"
                >
                  <span>Read Discourse</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="journal-reader-title"
          className="fixed inset-0 z-50 flex flex-col items-center justify-start sm:justify-center p-3 sm:p-4 bg-ink/75 backdrop-blur-sm overflow-y-auto safe-pb safe-pt"
        >
          <div className="bezel-container max-w-3xl w-full my-auto p-5 sm:p-8 space-y-5 bg-parchment-light shadow-2xl animate-fadeIn max-h-[calc(100dvh-2rem)] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-rule gap-3">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-ledger sm:tracking-archival text-crimson">
                  {activeArticle.chapterNumber} • ARCHIVAL DISCOURSE
                </span>
                <h3 id="journal-reader-title" className="font-serif text-2xl sm:text-3xl font-normal text-ink leading-tight break-words">
                  {activeArticle.title}
                </h3>
                <div className="text-xs font-mono text-ink-faint pt-1">
                  {activeArticle.author} • {activeArticle.date} • {activeArticle.readingTime}
                </div>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-ink-muted hover:text-ink text-sm font-mono font-bold rounded hover:bg-parchment transition-colors"
                aria-label="Close Article"
              >
                <X className="w-5 h-5 shrink-0" />
              </button>
            </div>

            {/* Abstract */}
            <div className="p-4 bg-parchment rounded border border-rule italic font-serif text-sm sm:text-base text-ink leading-relaxed">
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
                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 border-b border-rule/30 gap-0.5">
                    <span className="text-ink-faint">{key}:</span>
                    <span className="font-semibold text-ink sm:text-right break-words">{val}</span>
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
                className="w-full sm:w-auto px-6 py-3 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-ink hover:bg-ink-muted rounded transition-colors"
              >
                Close Discourse
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
