import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConciergeReservationPayload } from '../types';
import { generateReservationWhatsAppUrl, generateEmailConfirmationPayload, WORKSHOP_PHONE } from '../utils/whatsapp';
import { liveBaysTelemetry, getWorkshopOperationalStatus } from '../data/telemetryData';
import { ShieldCheck, Send, CheckCircle, Phone } from 'lucide-react';
import { LUXURY_EASE, fadeInUpVariant } from '../utils/motion';
import { MaskedHeading, TelemetryScramble } from './text';

export const ConciergeDesk: React.FC = () => {
  const status = getWorkshopOperationalStatus();

  const [formData, setFormData] = useState<ConciergeReservationPayload>({
    ownerName: '',
    contactNumber: '',
    emailAddress: '',
    vehicleMake: '',
    vehicleModel: '',
    manufactureYear: '2021',
    serviceCategory: 'European & Luxury Marque Stewardship',
    preferredDate: '',
    symptomsDiagnosticNotes: '',
    pickupRequired: false,
  });

  const [submittedPayload, setSubmittedPayload] = useState<any | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.ownerName || !formData.contactNumber || !formData.vehicleMake || !formData.vehicleModel) {
      alert('Please complete the mandatory owner and vehicle identification fields.');
      return;
    }

    const emailPayload = generateEmailConfirmationPayload(formData);
    const whatsappUrl = generateReservationWhatsAppUrl(formData);

    setSubmittedPayload({
      ...formData,
      emailConfirmation: emailPayload,
      whatsappUrl,
    });

    setShowConfirmationModal(true);
  };

  return (
    <section id="concierge-desk" className="py-12 sm:py-20 border-b border-rule bg-parchment relative">
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
            <span>CHAPTER IV</span>
            <span>—</span>
            <span className="tracking-ledger sm:tracking-archival uppercase text-ink">THE CONCIERGE BAY RESERVATION DESK</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <MaskedHeading
              as="h2"
              className="lg:col-span-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight"
            >
              Private Automotive Stewardship Ledger & Bay Allocation Engine.
            </MaskedHeading>
            <p className="lg:col-span-4 text-sm font-sans text-ink-muted leading-relaxed">
              Reserving a bay guarantees immediate technician allocation and diagnostic tooling staging prior to your vehicle’s
              arrival. Dual-channel notifications dispatch directly to our George Town workshop master via WhatsApp and email.
            </p>
          </div>
        </motion.div>

        {/* Live Bay Telemetry Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="bezel-container p-4 bg-parchment-light border border-rule"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-rule">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-bold text-ink uppercase">Live 8-Bay Workshop Telemetry (56, M.G. Marg):</span>
            </div>
            <div className="text-xs font-mono text-ink-faint">
              {status.activeBays} Active In-Bay • {status.standbyBays} Ready for Immediate Intake
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-3">
            {liveBaysTelemetry.map((bay) => (
              <div
                key={bay.bayId}
                className="p-2.5 bg-parchment rounded border border-rule/80 text-[10px] font-mono space-y-1 hover:border-crimson/40 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-ink">{bay.bayId}</span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      bay.status === 'STANDBY' ? 'bg-emerald-500' : 'bg-crimson'
                    }`}
                  />
                </div>
                <div className="truncate text-ink-muted font-medium">{bay.bayName.split(' ')[0]}</div>
                <div className="text-ink-faint truncate">{bay.status}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Concierge Reservation Ledger Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: LUXURY_EASE }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="bezel-container p-6 sm:p-10 space-y-8 bg-parchment-light">
              <div className="pb-4 border-b border-rule flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-ink font-normal">
                    Automotive Bay Allocation Ledger
                  </h3>
                  <div className="text-xs font-mono text-ink-faint uppercase mt-1">
                    EST. 1960 • OFFICIAL REGISTRATION VOUCHER
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-1 bg-brass/10 text-brass-dark border border-brass/30 rounded font-semibold">
                  SLA PRIORITY ADMISSION
                </span>
              </div>

              {/* Step 1: Owner Telemetry */}
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-ledger text-crimson font-bold flex items-center gap-1.5">
                  <span>01.</span>
                  <span>CLIENT & CONTACT IDENTIFICATION</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-ink font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adv. R. S. Shukla"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] bg-parchment border border-rule rounded text-xs font-mono text-ink focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-ink font-medium">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98390 XXXXX"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] bg-parchment border border-rule rounded text-xs font-mono text-ink focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
                    <label className="block text-xs font-mono text-ink-muted">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="owner@domain.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] bg-parchment border border-rule rounded text-xs font-mono text-ink focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Vehicle Telemetry */}
              <div className="space-y-4 pt-4 border-t border-rule">
                <div className="font-mono text-xs uppercase tracking-ledger text-crimson font-bold flex items-center gap-1.5">
                  <span>02.</span>
                  <span>VEHICLE SPECIFICATION & CATEGORY</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-ink font-medium">
                      Vehicle Make *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mercedes-Benz / Hyundai"
                      value={formData.vehicleMake}
                      onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] bg-parchment border border-rule rounded text-xs font-mono text-ink focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-ink font-medium">
                      Vehicle Model *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. E-Class E220d / Creta 1.5"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] bg-parchment border border-rule rounded text-xs font-mono text-ink focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
                    <label className="block text-xs font-mono text-ink font-medium">
                      Manufacture Year
                    </label>
                    <select
                      value={formData.manufactureYear}
                      onChange={(e) => setFormData({ ...formData, manufactureYear: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] bg-parchment border border-rule rounded text-xs font-mono text-ink focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all"
                    >
                      {Array.from({ length: 30 }, (_, i) => 2026 - i).map((y) => (
                        <option key={y} value={y.toString()}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-ink font-medium">
                      Service Discipline Required
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] bg-parchment border border-rule rounded text-xs font-mono text-ink focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all"
                    >
                      <option value="European & Luxury Marque Stewardship">
                        SPEC-01 • European & Luxury Marque Stewardship (DoIP)
                      </option>
                      <option value="Advanced Engine Diagnostics & Powertrain Overhaul">
                        SPEC-02 • Engine Diagnostics & Powertrain Overhaul
                      </option>
                      <option value="Downdraft Italian Baking Paint & Cashless Body Restoration">
                        SPEC-03 • Cashless Insurance Body & Paint Restoration
                      </option>
                      <option value="3D Laser Suspension & Steering Geometry">
                        SPEC-04 • 3D Laser Alignment & Suspension Geometry
                      </option>
                      <option value="Climate Control & Mechatronic Electrical Architecture">
                        SPEC-05 • Climate Control & Electrical Diagnostics
                      </option>
                      <option value="Institutional & Fleet Maintenance Contracts">
                        SPEC-06 • Institutional & High Court Fleet Service
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-ink font-medium">
                      Preferred Date of Intake
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] bg-parchment border border-rule rounded text-xs font-mono text-ink focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="block text-xs font-mono text-ink-muted">
                    Observed Symptoms / Diagnostic Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe specific noises, warning lamps, vibration speeds (e.g. 110-130 km/h), insurance claims, or scheduled maintenance items..."
                    value={formData.symptomsDiagnosticNotes}
                    onChange={(e) => setFormData({ ...formData, symptomsDiagnosticNotes: e.target.value })}
                    className="w-full p-3.5 bg-parchment border border-rule rounded text-xs font-mono text-ink focus:border-crimson focus:ring-1 focus:ring-crimson outline-none transition-all"
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="pickupRequired"
                    checked={formData.pickupRequired}
                    onChange={(e) => setFormData({ ...formData, pickupRequired: e.target.checked })}
                    className="w-4 h-4 text-crimson rounded border-rule focus:ring-crimson"
                  />
                  <label htmlFor="pickupRequired" className="text-xs font-mono text-ink select-none cursor-pointer">
                    Request Enclosed Flatbed Valet Intake (Available within Prayagraj Municipal Limits)
                  </label>
                </div>
              </div>

              {/* Form Actions */}
              <div className="pt-6 border-t border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-ink-faint">
                  <ShieldCheck className="w-4 h-4 text-brass shrink-0" />
                  <span>GST-Compliant Official Invoice Guarantee</span>
                </div>

                <button
                  type="submit"
                  data-cursor="reserve"
                  className="w-full sm:w-auto px-6 py-3 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson hover:bg-crimson-dark border border-crimson-light/40 rounded shadow-md transition-all flex items-center justify-center gap-2 btn-dignified group active:scale-[0.98]"
                >
                  <span>Transmit Concierge Booking</span>
                  <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                    <Send className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Direct Hotlines & Workshop Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: LUXURY_EASE, delay: 0.15 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Master Craftsman Environmental Portrait */}
            <div className="bezel-container p-4 bg-parchment-light space-y-3">
              <div
                data-cursor="inspect"
                data-cursor-text="CHIEF MASTER"
                className="relative overflow-hidden rounded border border-rule group/craftsman cursor-pointer"
              >
                <img
                  src="/images/craftsman-portrait.jpg"
                  alt="Senior Master Mechanical Craftsman at Hindustan Garage George Town"
                  className="w-full h-44 object-cover object-center group-hover/craftsman:scale-[1.03] transition-transform duration-700 ease-editorial"
                  loading="lazy"
                />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 px-2 py-0.5 bg-ink/80 backdrop-blur-sm rounded text-[9px] font-mono text-parchment-light flex justify-between items-center">
                  <span>56, M.G. MARG • SENIOR WORKSHOP MASTER</span>
                  <span className="text-brass">EST. 1960</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-crimson font-bold">
                  MASTER CRAFTSMAN SUPERVISION
                </div>
                <p className="text-xs font-sans text-ink-muted leading-relaxed">
                  Every allocated bay is directly overseen by master mechanics with decades of tenure at George Town. We combine traditional metallurgical craftsmanship with OEM-level digital telemetry.
                </p>
              </div>
            </div>

            <div className="bezel-container p-5 sm:p-6 space-y-4 bg-parchment-light">
              <div className="pb-3 border-b border-rule">
                <span className="text-xs font-mono uppercase tracking-ledger sm:tracking-archival text-brass-dark font-semibold">
                  DIRECT CONCIERGE HOTLINE
                </span>
                <h4 className="font-serif text-xl text-ink font-normal mt-1">
                  Immediate Bay Assistance
                </h4>
              </div>

              <p className="text-xs font-sans text-ink-muted leading-relaxed">
                For urgent mechanical breakdown assistance, emergency towing within Prayagraj district, or direct fleet inquiries,
                reach our Chief Workshop Master directly.
              </p>

              <div className="space-y-3 pt-2 font-mono text-xs">
                <a
                  href={`tel:+${WORKSHOP_PHONE}`}
                  data-cursor="interactive"
                  className="p-3.5 min-h-[44px] bg-parchment rounded border border-rule flex items-center justify-between hover:border-crimson transition-colors active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2 text-ink">
                    <Phone className="w-4 h-4 text-crimson shrink-0" />
                    <TelemetryScramble text="+91 87965 76868" />
                  </span>
                  <span className="text-crimson font-semibold">CALL NOW</span>
                </a>

                <a
                  href={`https://wa.me/${WORKSHOP_PHONE}?text=${encodeURIComponent('Hello Hindustan Garage, I require urgent workshop assistance.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="interactive"
                  className="p-3.5 min-h-[44px] bg-parchment rounded border border-rule flex items-center justify-between hover:border-emerald-600 transition-colors active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2 text-ink">
                    <Send className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp Concierge</span>
                  </span>
                  <span className="text-emerald-700 font-semibold">CHAT LIVE</span>
                </a>
              </div>
            </div>

            <div className="bezel-container p-5 sm:p-6 space-y-3 bg-parchment-light text-xs font-mono text-ink-muted">
              <div className="font-bold text-ink uppercase pb-2 border-b border-rule">
                LOCATION & VISITATION PROTOCOL
              </div>
              <div>
                <span className="text-ink-faint block text-[10px] uppercase">Central Workshop</span>
                <span className="text-ink font-medium">56, M.G. Marg, George Town, Prayagraj 211002</span>
              </div>
              <div>
                <span className="text-ink-faint block text-[10px] uppercase">Operating Hours</span>
                <span className="text-ink">09:00 to 19:30 IST • Monday through Saturday</span>
              </div>
              <div>
                <span className="text-ink-faint block text-[10px] uppercase">Statutory Identifier</span>
                <span className="text-ink font-semibold">
                  GSTIN: <TelemetryScramble text="09ADQPA5477Q1ZN" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmationModal && submittedPayload && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="concierge-modal-title"
            className="fixed inset-0 z-50 flex flex-col items-center justify-start sm:justify-center p-3 sm:p-4 bg-ink/70 backdrop-blur-md overflow-y-auto safe-pb safe-pt"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: LUXURY_EASE }}
              className="bezel-container max-w-lg w-full p-5 sm:p-8 space-y-5 bg-parchment-light shadow-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto my-auto"
            >
              <div className="flex items-start justify-between pb-4 border-b border-rule gap-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <h3 id="concierge-modal-title" className="font-serif text-xl font-medium text-ink">
                      Bay Allocation Initiated
                    </h3>
                    <div className="text-[10px] font-mono text-ink-faint uppercase">
                      Ref: {submittedPayload.emailConfirmation.referenceId}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowConfirmationModal(false)}
                  className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-ink-muted hover:text-ink text-sm font-mono font-bold rounded hover:bg-parchment transition-colors"
                  aria-label="Close Confirmation Modal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs font-mono text-ink-muted">
                <div className="p-3 bg-parchment rounded border border-rule space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5">
                    <span className="text-ink-faint">Client:</span>
                    <span className="font-semibold text-ink sm:text-right">{submittedPayload.ownerName}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5">
                    <span className="text-ink-faint">Vehicle:</span>
                    <span className="font-semibold text-ink sm:text-right">
                      {submittedPayload.vehicleMake} {submittedPayload.vehicleModel} ({submittedPayload.manufactureYear})
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5">
                    <span className="text-ink-faint">Service Category:</span>
                    <span className="font-medium text-crimson sm:text-right">{submittedPayload.serviceCategory}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5">
                    <span className="text-ink-faint">Preferred Intake:</span>
                    <span className="font-medium text-ink sm:text-right">{submittedPayload.preferredDate || 'Earliest Slot'}</span>
                  </div>
                </div>

                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                  Your reservation telemetry has been recorded in the workshop registry. Click below to immediately launch the
                  pre-formatted WhatsApp transmission to our workshop master for instant slot confirmation.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={submittedPayload.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-emerald-700 hover:bg-emerald-800 rounded shadow transition-all text-center"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Confirm via WhatsApp (+91 87965 76868)</span>
                </a>

                <button
                  onClick={() => setShowConfirmationModal(false)}
                  className="w-full py-2.5 min-h-[44px] text-xs font-mono text-ink-muted hover:text-ink uppercase tracking-wider text-center"
                >
                  Return to Monograph
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
