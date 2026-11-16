import React from 'react';
import { Compass, Award, Star, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 border-b border-rule">
      {/* Background Subtle Watermark Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.025] text-ink font-serif text-[18vw] leading-none whitespace-nowrap font-bold">
        EST. 1960
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Archival Chapter Head & Coordinates */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-6 border-b border-rule text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="text-crimson font-bold shrink-0">CHAPTER I</span>
            <span>—</span>
            <span className="tracking-ledger sm:tracking-archival uppercase text-ink break-words">
              THE 1960 MANDATE & INSTITUTIONAL CHARTER
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] tracking-wider text-ink-faint">
            <span className="inline-flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-brass shrink-0" />
              25.4520° N, 81.8540° E
            </span>
            <span>•</span>
            <span className="break-words">56, M.G. MARG, GEORGE TOWN, PRAYAGRAJ</span>
          </div>
        </div>

        {/* Main Monograph Hero Title & Subtext */}
        <div className="pt-8 sm:pt-10 pb-10 sm:pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brass/10 border border-brass/30 rounded-full text-brass-dark text-[11px] sm:text-xs font-mono tracking-wider max-w-full">
              <Award className="w-3.5 h-3.5 text-brass shrink-0" />
              <span className="break-words">SIXTY-SIX YEARS OF UNBROKEN CUSTODIANSHIP (1960–2026)</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-ink tracking-tight">
              Sixty-Six Years of <span className="italic font-normal text-crimson">Uncompromising</span> Automotive Stewardship—All Under One Roof.
            </h1>

            <p className="font-sans text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed">
              From our historic George Town bays on M.G. Marg, Hindustan Garage delivers complete mechanical,
              diagnostic, and coachwork mastery. We eliminate the precarious 200 km highway transit to Lucknow for
              Prayagraj’s European luxury marque owners, while ensuring everyday family four-wheelers and institutional
              fleets receive factory-standard precision.
            </p>
          </div>

          {/* Right Column: Physical Seal & Telemetry Plaque */}
          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
            <div className="p-4 sm:p-5 bezel-container w-full max-w-sm space-y-3">
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pb-3 border-b border-rule">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brass/20 border-2 border-brass flex items-center justify-center text-brass-dark font-serif font-bold text-sm shadow-inner shrink-0">
                    1960
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-ink font-semibold">
                      VERIFIED REPUTE
                    </div>
                    <div className="flex items-center gap-0.5 text-brass">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-brass" />
                      ))}
                      <span className="text-xs font-mono font-bold text-ink ml-1">4.9 / 5.0</span>
                    </div>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-[10px] font-mono text-ink-faint">ANNUAL INTAKE</div>
                  <div className="text-sm font-mono font-bold text-crimson">1,850+ CARS</div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs font-mono text-ink-muted">
                <div className="flex justify-between gap-2">
                  <span className="text-ink-faint shrink-0">Headquarters:</span>
                  <span className="font-medium text-ink text-right">56, M.G. Marg, George Town</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-ink-faint shrink-0">Wholesale Hub:</span>
                  <span className="font-medium text-oxford text-right">Speed Parts (Medical Chauraha)</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-ink-faint shrink-0">Statutory GSTIN:</span>
                  <span className="font-semibold text-ink text-right">09ADQPA5477Q1ZN</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#concierge-desk"
                  className="w-full flex items-center justify-between px-4 py-2.5 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson hover:bg-crimson-dark rounded transition-all btn-dignified shadow-sm"
                >
                  <span>Request Bay Allocation</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Framed Split Showcase: Luxury European vs Everyday Four-Wheelers */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Wing: European & Luxury Marque Chamber */}
          <div className="p-5 sm:p-6 bezel-container space-y-4 hover:border-crimson/50 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-rule">
              <span className="text-xs font-mono font-semibold uppercase tracking-ledger sm:tracking-archival text-crimson flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-crimson shrink-0" />
                WING A • EUROPEAN MARQUE STEWARDSHIP
              </span>
              <span className="text-[11px] font-mono text-ink-faint">BAYS 01 & 04</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-normal text-ink">
                Mercedes-Benz, BMW, Audi, Porsche & Jaguar
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Dedicated factory optical diagnostic systems (Xentry DoIP, ISTA, ODIS). We perform complex mechatronic
                rebuilding, high-carbon brake disc calibration, and active air suspension refurbishment in George Town—eliminating
                the hazardous 200 km highway journey to Lucknow dealerships.
              </p>
            </div>

            <div className="pt-3 border-t border-rule/70 flex flex-wrap items-center gap-2 text-[11px] font-mono text-ink-muted">
              <span className="px-2 py-0.5 bg-parchment-dark border border-rule rounded">DoIP High-Speed Flashing</span>
              <span className="px-2 py-0.5 bg-parchment-dark border border-rule rounded">ZF 8HP/9HP Mechatronics</span>
              <span className="px-2 py-0.5 bg-parchment-dark border border-rule rounded">Airmatic Strut Overhaul</span>
              <span className="px-2 py-0.5 bg-brass/10 text-brass-dark border border-brass/30 rounded font-semibold">
                Save 200 km Lucknow Transit
              </span>
            </div>
          </div>

          {/* Right Wing: Everyday Family & Institutional Fleet Chamber */}
          <div className="p-5 sm:p-6 bezel-container space-y-4 hover:border-oxford/50 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-rule">
              <span className="text-xs font-mono font-semibold uppercase tracking-ledger sm:tracking-archival text-oxford flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-oxford shrink-0" />
                WING B • EVERYDAY FOUR-WHEELERS & FLEETS
              </span>
              <span className="text-[11px] font-mono text-ink-faint">BAYS 02, 03 & 08</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-normal text-ink">
                Hyundai, Maruti Suzuki, Toyota, Honda, Tata & Mahindra
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Full micro-tolerance engine and CRDi injection overhauls, 3D Hunter laser wheel geometry, and
                climate control restoration. Direct inventory integration with our Speed Parts wholesale warehouse at Medical
                Chauraha guarantees 100% Genuine Mobis and OEM spares at benchmark pricing.
              </p>
            </div>

            <div className="pt-3 border-t border-rule/70 flex flex-wrap items-center gap-2 text-[11px] font-mono text-ink-muted">
              <span className="px-2 py-0.5 bg-parchment-dark border border-rule rounded">Hyundai Mobis Genuine Spares</span>
              <span className="px-2 py-0.5 bg-parchment-dark border border-rule rounded">CRDi 2,200-Bar Flow Bench</span>
              <span className="px-2 py-0.5 bg-parchment-dark border border-rule rounded">Hunter 3D Laser Alignment</span>
              <span className="px-2 py-0.5 bg-oxford/10 text-oxford border border-oxford/30 rounded font-semibold">
                High Court Fleet SLA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
