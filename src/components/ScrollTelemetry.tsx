import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ChapterWaypoint {
  id: string;
  numeral: string;
  name: string;
}

const CHAPTERS: ChapterWaypoint[] = [
  { id: 'hero', numeral: 'I', name: '1960 Mandate' },
  { id: 'master-ledger', numeral: 'II', name: 'Master Ledger' },
  { id: 'workshop-archive', numeral: 'III', name: 'Workshop Archive' },
  { id: 'concierge-desk', numeral: 'IV', name: 'Concierge Desk' },
  { id: 'speed-parts', numeral: 'V', name: 'Speed Parts' },
  { id: 'chronicle', numeral: 'VI', name: '1960–2026 Chronicle' },
  { id: 'technical-journal', numeral: 'VII', name: 'Technical Journal' },
  { id: 'faq', numeral: 'VIII', name: 'FAQ & Directory' },
];

export const ScrollTelemetry: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeChapter, setActiveChapter] = useState<ChapterWaypoint>(CHAPTERS[0]);
  const [showWaypoint, setShowWaypoint] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      setShowWaypoint(window.scrollY > 400);

      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveChapter(CHAPTERS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Hairline Archival Progress Rule */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-parchment-dark/30">
        <motion.div
          className="h-full bg-gradient-to-r from-crimson via-crimson to-brass origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Active Chapter Indicator Waypoint (Desktop Docked) */}
      {showWaypoint && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          className="hidden xl:flex fixed right-6 bottom-8 z-40 items-center gap-2 px-3 py-1.5 bg-parchment-light/90 border border-rule/80 rounded-full shadow-lg backdrop-blur-md font-mono text-[11px]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
          <span className="text-crimson font-bold">CHAPTER {activeChapter.numeral}:</span>
          <span className="text-ink-muted uppercase tracking-wider">{activeChapter.name}</span>
        </motion.div>
      )}
    </>
  );
};
