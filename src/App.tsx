import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MasterLedger } from './components/MasterLedger';
import { WorkshopArchive } from './components/WorkshopArchive';
import { ConciergeDesk } from './components/ConciergeDesk';
import { SpeedPartsSection } from './components/SpeedPartsSection';
import { Chronicle } from './components/Chronicle';
import { TechnicalJournal } from './components/TechnicalJournal';
import { FAQAndDirectory } from './components/FAQAndDirectory';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment text-ink flex flex-col font-sans selection:bg-crimson selection:text-parchment">
      {/* CHAPTER 1 & MASTHEAD: Archival Masthead Navigation */}
      <Header />

      <main className="flex-grow">
        {/* CHAPTER I: Editorial Monograph Hero */}
        <Hero />

        {/* CHAPTER II: The Master Ledger of Services ("All Work Under One Roof") */}
        <MasterLedger />

        {/* CHAPTER III: The Workshop Archive (Filterable Completed Cars Showcase) */}
        <WorkshopArchive />

        {/* CHAPTER IV: The Concierge Bay Reservation Desk (WhatsApp + Email Booking Engine) */}
        <ConciergeDesk />

        {/* CHAPTER V: SPEED PARTS — The Wholesale & OEM Supply Division (Medical Chauraha) */}
        <SpeedPartsSection />

        {/* CHAPTER VI: The 1960–2026 Chronicle (About Us) */}
        <Chronicle />

        {/* CHAPTER VII: The Technical Journal (4 Blog Articles) */}
        <TechnicalJournal />

        {/* CHAPTER VIII & IX: FAQs & The George Town Directory Footer */}
        <FAQAndDirectory />
      </main>
    </div>
  );
};

export default App;
