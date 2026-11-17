import React, { useState } from 'react';
import { speedPartsCatalog } from '../data/partsData';
import { generateSpeedPartsWhatsAppUrl, WORKSHOP_PHONE } from '../utils/whatsapp';
import {
  Package,
  Search,
  Filter,
  ExternalLink,
  Truck,
  Shield,
  Clock,
} from 'lucide-react';

export const SpeedPartsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<'All' | 'Hyundai Priority' | 'European & Multi-Brand'>('All');
  const [activeQuantities, setActiveQuantities] = useState<{ [sku: string]: number }>({});
  const [clientGarageName, setClientGarageName] = useState('');

  const categories = [
    'All',
    'Engine Components',
    'Braking Systems',
    'Suspension & Steering',
    'Electrical & Sensors',
    'Body & Lighting',
    'Lubricants & Consumables'
  ];

  const handleQuantityChange = (sku: string, delta: number, minMoq: number) => {
    const current = activeQuantities[sku] || minMoq;
    const updated = Math.max(minMoq, current + delta);
    setActiveQuantities({ ...activeQuantities, [sku]: updated });
  };

  const filteredParts = speedPartsCatalog.filter((part) => {
    const matchesCategory = selectedCategory === 'All' || part.category === selectedCategory;
    const matchesBrand =
      selectedBrandFilter === 'All'
        ? true
        : selectedBrandFilter === 'Hyundai Priority'
        ? part.isHyundaiPriority
        : !part.isHyundaiPriority;

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === '' ||
      part.name.toLowerCase().includes(query) ||
      part.sku.toLowerCase().includes(query) ||
      part.oemNumber.toLowerCase().includes(query) ||
      part.brand.toLowerCase().includes(query) ||
      part.vehicleCompatibility.some((v) => v.toLowerCase().includes(query));

    return matchesCategory && matchesBrand && matchesQuery;
  });

  return (
    <section id="speed-parts" className="py-12 sm:py-20 border-b border-rule bg-oxford text-parchment relative overflow-hidden">
      {/* Background Graphic Watermark */}
      <div className="absolute -right-20 -bottom-20 select-none pointer-events-none opacity-[0.03] text-parchment font-serif text-[22vw] leading-none whitespace-nowrap font-bold">
        SPEED PARTS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Chapter Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-brass-light font-bold">
            <span>CHAPTER V</span>
            <span>—</span>
            <span className="tracking-ledger sm:tracking-archival uppercase text-parchment">WHOLESALE & OEM SUPPLY DIVISION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-parchment/10 border border-parchment/20 rounded text-parchment text-xs font-mono tracking-wider">
                <Truck className="w-3.5 h-3.5 text-brass-light" />
                <span>CENTRAL LOGISTICS WAREHOUSE • MEDICAL CHAURAHA, PRAYAGRAJ</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-parchment leading-tight">
                SPEED PARTS — The Regional Four-Wheeler OEM Supply Benchmark.
              </h2>
            </div>
            <p className="lg:col-span-4 text-sm font-sans text-parchment/80 leading-relaxed">
              Serving independent trade garages and fleet operators within a 100–150 km radius across Prayagraj,
              Pratapgarh, Kaushambi, Fatehpur, Mirzapur, Rewa, and Jaunpur. Certified wholesale pricing with an uncompromising
              focus on 100% Genuine Hyundai Mobis components alongside all four-wheeler brands.
            </p>
          </div>
        </div>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-oxford-dark/80 border border-parchment/15 rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-brass-light font-mono text-xs font-bold uppercase">
              <Shield className="w-4 h-4" />
              <span>100% Genuine Mobis & OEM Guarantee</span>
            </div>
            <p className="text-xs text-parchment/70 font-sans">
              Micro-embossed holographic anti-counterfeiting seals and official factory batch tracking. Zero grey market spares.
            </p>
          </div>

          <div className="p-4 bg-oxford-dark/80 border border-parchment/15 rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-brass-light font-mono text-xs font-bold uppercase">
              <Truck className="w-4 h-4" />
              <span>Regional 100–150 KM Logistics</span>
            </div>
            <p className="text-xs text-parchment/70 font-sans">
              4-hour local dispatch across Prayagraj; guaranteed same-day or 24h express freight to Pratapgarh, Fatehpur, and Mirzapur.
            </p>
          </div>

          <div className="p-4 bg-oxford-dark/80 border border-parchment/15 rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-brass-light font-mono text-xs font-bold uppercase">
              <Package className="w-4 h-4" />
              <span>Direct Wholesale Margin Advantage</span>
            </div>
            <p className="text-xs text-parchment/70 font-sans">
              Tier-1 wholesale trade tariff cards enabling regional workshops to maximize profit margins without sacrificing component integrity.
            </p>
          </div>
        </div>

        {/* Warehouse Architectural Photograph Banner */}
        <div className="relative overflow-hidden rounded-xl border border-parchment/20 shadow-bezel-dark group">
          <img
            src="/images/speed-parts-warehouse.jpg"
            alt="Speed Parts Wholesale Logistics Warehouse at Medical Chauraha"
            className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-editorial"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oxford-dark via-oxford-dark/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-parchment">
            <div className="space-y-1">
              <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-brass-light flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                LIVE INVENTORY TELEMETRY • MEDICAL CHAURAHA CENTRAL LOGISTICS
              </div>
              <div className="font-serif text-xl sm:text-2xl font-normal text-parchment">
                Over 14,000 Certified OEM SKUs in Immediate Dispatch Inventory
              </div>
              <div className="text-xs font-mono text-parchment/70">
                Direct Mobis, Bosch, Brembo, Bilstein, and Valeo Tier-1 Sourcing
              </div>
            </div>
            <div className="font-mono text-xs text-parchment/80 bg-oxford-dark/80 px-3 py-1.5 rounded border border-parchment/20 backdrop-blur-sm self-start sm:self-auto shrink-0">
              Dispatch Protocol: <span className="text-brass-light font-bold">4-Hour Regional SLA</span>
            </div>
          </div>
        </div>

        {/* Interactive Trade Catalog Engine */}
        <div className="bezel-navy p-4 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-parchment/20">
            <div>
              <h3 className="font-serif text-2xl text-parchment font-normal">
                Interactive Trade Parts Index
              </h3>
              <p className="text-xs font-mono text-parchment/70 mt-0.5">
                Click any part row or "WhatsApp Trade Inquiry" to trigger immediate automated RFQ dispatch to +91 87965 76868
              </p>
            </div>

            {/* Optional Garage Name Input for Instant Quotation */}
            <div className="w-full sm:w-auto">
              <input
                type="text"
                placeholder="Your Garage Name (e.g. Apex Motors)"
                value={clientGarageName}
                onChange={(e) => setClientGarageName(e.target.value)}
                className="w-full sm:w-64 px-3 py-2 min-h-[44px] text-xs font-mono bg-oxford-dark/90 text-parchment border border-parchment/20 rounded placeholder:text-parchment/40 focus:outline-none focus:border-brass"
              />
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              {/* Search Bar */}
              <div className="sm:col-span-8 relative">
                <Search className="w-4 h-4 absolute left-3 top-3.5 text-parchment/50" />
                <input
                  type="text"
                  placeholder="Search by part name, SKU, OEM number (e.g. 31922-2E900), or car model (Creta, Fortuner, BMW)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 min-h-[44px] text-xs font-mono bg-oxford-dark/90 text-parchment border border-parchment/20 rounded placeholder:text-parchment/40 focus:outline-none focus:border-brass"
                />
              </div>

              {/* Brand Filter */}
              <div className="sm:col-span-4 flex rounded border border-parchment/20 p-1 bg-oxford-dark/80 text-xs font-mono">
                {(['All', 'Hyundai Priority', 'European & Multi-Brand'] as const).map((filterOpt) => (
                  <button
                    key={filterOpt}
                    onClick={() => setSelectedBrandFilter(filterOpt)}
                    className={`flex-1 py-1.5 min-h-[44px] sm:min-h-0 rounded transition-colors text-[11px] ${
                      selectedBrandFilter === filterOpt
                        ? 'bg-parchment text-oxford font-semibold'
                        : 'text-parchment/70 hover:text-parchment'
                    }`}
                  >
                    {filterOpt === 'Hyundai Priority' ? 'Hyundai OEM' : filterOpt}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <span className="text-[11px] font-mono text-parchment/60 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> CATEGORY:
              </span>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 min-h-[44px] sm:min-h-[36px] text-xs font-mono rounded transition-all ${
                      isActive
                        ? 'bg-brass text-ink font-semibold'
                        : 'bg-oxford-surface hover:bg-oxford-light text-parchment/80 border border-parchment/15'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Parts Table / Card View */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono text-parchment/60 flex justify-between px-1">
              <span>LISTING {filteredParts.length} VERIFIED OEM COMPONENTS</span>
              <span>PRICES EXCLUSIVE OF STATUTORY GST</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {filteredParts.length === 0 ? (
                <div className="p-8 text-center bg-oxford-dark/60 rounded border border-parchment/15 font-mono text-sm text-parchment/60">
                  No matching components found for "{searchQuery}". Call the Speed Parts trade desk directly at +91 87965 76868.
                </div>
              ) : (
                filteredParts.map((part) => {
                  const qty = activeQuantities[part.sku] || part.moq;
                  const estimatedTotal = qty * part.wholesalePrice;
                  const whatsappUrl = generateSpeedPartsWhatsAppUrl(part, qty, clientGarageName);

                  return (
                    <div
                      key={part.sku}
                      className="p-4 sm:p-5 bg-oxford-dark/90 hover:bg-oxford-dark border border-parchment/15 hover:border-brass/50 rounded-lg transition-all space-y-3 group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="space-y-1 max-w-2xl">
                          <div className="flex flex-wrap items-center gap-2">
                            {part.isHyundaiPriority && (
                              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-brass text-ink rounded">
                                HYUNDAI GENUINE / MOBIS
                              </span>
                            )}
                            <span className="text-[10px] font-mono px-2 py-0.5 bg-parchment/10 text-parchment/80 rounded border border-parchment/15">
                              {part.category}
                            </span>
                            <span className="text-[10px] font-mono text-brass-light font-semibold">
                              SKU: {part.sku}
                            </span>
                            <span className="text-[10px] font-mono text-parchment/60">
                              OEM NO: {part.oemNumber}
                            </span>
                          </div>

                          <h4 className="font-serif text-lg sm:text-xl text-parchment font-medium group-hover:text-brass-light transition-colors">
                            {part.name}
                          </h4>

                          <div className="text-xs font-mono text-parchment/70 flex flex-wrap gap-x-3 gap-y-1 pt-1">
                            <span>
                              Manufacturer: <strong className="text-parchment">{part.brand}</strong>
                            </span>
                            <span>•</span>
                            <span>
                              Compatible:{' '}
                              <span className="text-parchment/90">{part.vehicleCompatibility.join(', ')}</span>
                            </span>
                          </div>
                        </div>

                        {/* Wholesale Pricing Column */}
                        <div className="sm:text-right font-mono space-y-1 shrink-0">
                          <div className="text-xs text-parchment/50">
                            Wholesale Rate (MOQ: {part.moq})
                          </div>
                          <div className="text-xl font-bold text-brass-light">
                            ₹{part.wholesalePrice.toLocaleString('en-IN')}
                            <span className="text-xs font-normal text-parchment/60 ml-1">/ unit</span>
                          </div>
                          <div className="text-[11px] text-parchment/50 line-through">
                            MRP: ₹{part.mrp.toLocaleString('en-IN')}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Strip with Interactive Quantity & Instant WhatsApp Link */}
                      <div className="pt-3 border-t border-parchment/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                        <div className="flex items-center gap-3">
                          <span className="text-parchment/60 text-[11px]">Lot Quantity:</span>
                          <div className="flex items-center border border-parchment/20 rounded bg-oxford">
                            <button
                              onClick={() => handleQuantityChange(part.sku, -1, part.moq)}
                              className="w-10 h-10 sm:w-8 sm:h-8 min-w-[40px] sm:min-w-[32px] flex items-center justify-center text-parchment hover:bg-oxford-light text-sm font-bold"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 font-bold text-parchment text-xs text-center min-w-[32px]">{qty}</span>
                            <button
                              onClick={() => handleQuantityChange(part.sku, 1, part.moq)}
                              className="w-10 h-10 sm:w-8 sm:h-8 min-w-[40px] sm:min-w-[32px] flex items-center justify-center text-parchment hover:bg-oxford-light text-sm font-bold"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-parchment/80 text-[11px]">
                            Lot Estimate: <strong className="text-brass-light">₹{estimatedTotal.toLocaleString('en-IN')}</strong>
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-parchment/60 hidden md:inline">
                            {part.stockStatus}
                          </span>
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center min-h-[44px] gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-parchment rounded font-semibold text-xs transition-colors shadow-sm"
                          >
                            <span>WhatsApp Trade Inquiry</span>
                            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Regional Garages Bulk Dispatch Note */}
          <div className="p-4 bg-oxford-dark/60 rounded border border-parchment/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-parchment/80">
              <Clock className="w-4 h-4 text-brass-light shrink-0" />
              <span>
                Regional Garages in Pratapgarh, Kaushambi, Fatehpur, Mirzapur & Rewa: Need daily parts delivery? Inquire for institutional trade accounts.
              </span>
            </div>

            <a
              href={`https://wa.me/${WORKSHOP_PHONE}?text=${encodeURIComponent(
                'Hello Speed Parts, I am an independent workshop owner interested in setting up a regional daily supply trade account.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 min-h-[44px] inline-flex items-center justify-center bg-brass text-ink font-bold uppercase rounded tracking-wider hover:bg-brass-light transition-colors whitespace-nowrap"
            >
              Open Trade Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
