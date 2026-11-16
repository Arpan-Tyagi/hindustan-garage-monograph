import React, { useState } from 'react';
import { ConciergeReservationPayload } from '../types';
import { generateReservationWhatsAppUrl, generateEmailConfirmationPayload, WORKSHOP_PHONE } from '../utils/whatsapp';
import { liveBaysTelemetry, getWorkshopOperationalStatus } from '../data/telemetryData';
import { ShieldCheck, Send, CheckCircle, Phone } from 'lucide-react';

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
    <section id="concierge-desk" className="py-12 sm:py-20 border-b border-rule bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-crimson font-bold">
            <span>CHAPTER IV</span>
            <span>—</span>
            <span className="tracking-ledger sm:tracking-archival uppercase text-ink">THE CONCIERGE BAY RESERVATION DESK</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <h2 className="lg:col-span-8 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight">
              Private Automotive Stewardship Ledger & Bay Allocation Engine.
            </h2>
            <p className="lg:col-span-4 text-sm font-sans text-ink-muted leading-relaxed">
              Reserving a bay guarantees immediate technician allocation and diagnostic tooling staging prior to your vehicle’s
              arrival. Dual-channel notifications dispatch directly to our George Town workshop master via WhatsApp and email.
            </p>
          </div>
        </div>

        {/* Live Bay Telemetry Strip */}
        <div className="bezel-container p-4 bg-parchment-light border border-rule">
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
                className="p-2.5 bg-parchment rounded border border-rule/80 text-[10px] font-mono space-y-1"
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
        </div>

        {/* Main Concierge Reservation Ledger Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
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
                <div className="text-xs font-mono uppercase tracking-wider sm:tracking-archival text-crimson font-bold">
                  01. Client & Contact Identification
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adv. R. S. Shukla"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-parchment border border-rule rounded focus:outline-none focus:border-crimson font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98390 XXXXX"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-parchment border border-rule rounded focus:outline-none focus:border-crimson font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="owner@domain.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-parchment border border-rule rounded focus:outline-none focus:border-crimson font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Vehicle Telemetry */}
              <div className="space-y-4 pt-4 border-t border-rule/80">
                <div className="text-xs font-mono uppercase tracking-wider sm:tracking-archival text-crimson font-bold">
                  02. Vehicle Specification & Category
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1">
                      Vehicle Make *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mercedes-Benz / Hyundai"
                      value={formData.vehicleMake}
                      onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-parchment border border-rule rounded focus:outline-none focus:border-crimson font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1">
                      Vehicle Model *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. E-Class E220d / Creta 1.5"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-parchment border border-rule rounded focus:outline-none focus:border-crimson font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1">
                      Manufacture Year
                    </label>
                    <input
                      type="number"
                      min="1960"
                      max="2026"
                      value={formData.manufactureYear}
                      onChange={(e) => setFormData({ ...formData, manufactureYear: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-parchment border border-rule rounded focus:outline-none focus:border-crimson font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1">
                      Service Discipline Required
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-parchment border border-rule rounded focus:outline-none focus:border-crimson font-sans"
                    >
                      <option value="European & Luxury Marque Stewardship">European & Luxury Marque Stewardship</option>
                      <option value="Engine Rebuilding & ECM Diagnostics">Engine Rebuilding & ECM Diagnostics</option>
                      <option value="Cashless Insurance & Downdraft Body Restoration">Cashless Insurance & Downdraft Body Restoration</option>
                      <option value="Suspension Dynamics & 3D Hunter Laser Alignment">Suspension Dynamics & 3D Hunter Laser Alignment</option>
                      <option value="Climate Control & Harness Restoration">Climate Control & Harness Restoration</option>
                      <option value="Periodic Maintenance & 60-Point Telemetry">Periodic Maintenance & 60-Point Telemetry</option>
                      <option value="Institutional & High Court Fleet Priority">Institutional & High Court Fleet Priority</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-ink-muted mb-1">
                      Preferred Date of Intake
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-sm bg-parchment border border-rule rounded focus:outline-none focus:border-crimson font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Symptoms & Diagnostic Notes */}
              <div className="space-y-4 pt-4 border-t border-rule/80">
                <div className="text-xs font-mono uppercase tracking-wider sm:tracking-archival text-crimson font-bold">
                  03. Diagnostic Symptoms & Mechanical Observations
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="Describe specific symptoms (e.g., vibration at 110 km/h, check-engine light, transmission flare, air suspension leak, AC not cooling in traffic)..."
                    value={formData.symptomsDiagnosticNotes}
                    onChange={(e) => setFormData({ ...formData, symptomsDiagnosticNotes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-parchment border border-rule rounded focus:outline-none focus:border-crimson font-sans"
                  />
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="pickupValet"
                    checked={formData.pickupRequired}
                    onChange={(e) => setFormData({ ...formData, pickupRequired: e.target.checked })}
                    className="w-5 h-5 text-crimson rounded border-rule focus:ring-crimson mt-0.5 shrink-0 cursor-pointer"
                  />
                  <label htmlFor="pickupValet" className="text-xs font-mono text-ink cursor-pointer leading-relaxed select-none">
                    Request Doorstep Insured Valet Pickup (Civil Lines, George Town, Tagore Town, Katra, Cantonment)
                  </label>
                </div>
              </div>

              {/* Submission CTA */}
              <div className="pt-4 border-t border-rule flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono text-ink-faint flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brass shrink-0" />
                  <span>Statutory GST Invoice & 100% Genuine OEM Warranty</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider text-parchment bg-crimson hover:bg-crimson-dark border border-crimson-light/40 rounded shadow-md transition-all flex items-center justify-center gap-2 btn-dignified"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Transmit Concierge Booking</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Direct Hotlines & Workshop Location Info */}
          <div className="lg:col-span-4 space-y-6">
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
                  className="p-3.5 min-h-[44px] bg-parchment rounded border border-rule flex items-center justify-between hover:border-crimson transition-colors"
                >
                  <span className="flex items-center gap-2 text-ink">
                    <Phone className="w-4 h-4 text-crimson shrink-0" />
                    <span>+91 87965 76868</span>
                  </span>
                  <span className="text-crimson font-semibold">CALL NOW</span>
                </a>

                <a
                  href={`https://wa.me/${WORKSHOP_PHONE}?text=${encodeURIComponent('Hello Hindustan Garage, I require urgent workshop assistance.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 min-h-[44px] bg-parchment rounded border border-rule flex items-center justify-between hover:border-emerald-600 transition-colors"
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
                <span className="text-ink font-semibold">GSTIN: 09ADQPA5477Q1ZN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && submittedPayload && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="concierge-modal-title"
          className="fixed inset-0 z-50 flex flex-col items-center justify-start sm:justify-center p-3 sm:p-4 bg-ink/70 backdrop-blur-sm overflow-y-auto safe-pb safe-pt"
        >
          <div className="bezel-container max-w-lg w-full p-5 sm:p-8 space-y-5 bg-parchment-light shadow-2xl animate-fadeIn max-h-[calc(100dvh-2rem)] overflow-y-auto my-auto">
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
          </div>
        </div>
      )}
    </section>
  );
};
