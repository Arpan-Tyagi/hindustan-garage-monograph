# CONTEXT.md: Domain Model & Ubiquitous Language

## 1. The Institution: Hindustan Garage (Est. 1960, Prayagraj)
- **Founding Heritage**: Established in 1960 at George Town, Prayagraj (formerly Allahabad). 66 years of continuous, multi-generational mechanical stewardship.
- **Physical Headquarters**: 56, M.G. Marg, George Town, Prayagraj, UP 211002 (Coordinates: 25.4520° N, 81.8540° E).
- **Core Facilities**: 8 dedicated indoor operational bays equipped with two-post and four-post hydraulic lifts, 3D Hunter wheel alignment, Bosch/Autel computerized OBD-II and CAN-bus scanners, computerized downdraft paint booth, and engine rebuild clean-room.
- **GSTIN**: `09ADQPA5477Q1ZN`
- **Concierge Direct Line**: `+91 87965 76868`
- **Core Mandate**: "All Work Under One Roof" — saving Prayagraj and Eastern UP vehicle owners the perilous 200 km highway transit to Lucknow for specialized European vehicle care, complex electrical harness restoration, and factory-finish paint matching.

## 2. The Wholesale Division: Speed Parts (Medical Chauraha)
- **Trade Hub**: Located at Medical Chauraha, Prayagraj, UP 211002.
- **Role**: Wholesale & OEM Supply Division servicing independent garages, fleet managers, and private motorists within a 100–150 km radius (Pratapgarh, Kaushambi, Fatehpur, Mirzapur, Rewa, Jaunpur, Bhadohi).
- **Specialty Focus**: Hyundai Genuine (Mobis) & OEM components at competitive wholesale price points, complemented by certified components for Maruti Suzuki, Toyota, Honda, Tata, Mahindra, and German/European marques (Bosch, Delphi, Lemförder, Brembo, Mann-Filter).
- **Trade Desk Protocol**: Fast WhatsApp dispatch (`wa.me/918796576868`) transmitting exact SKU, vehicle chassis/engine code compatibility, and instant quotation.

## 3. Workshop Bays & Telemetry
- **Bay 01 - European Diagnostic & ECU Suite**: High-tier scanner telemetry, oscilloscope waveform analysis, coding.
- **Bay 02 - Powertrain & Engine Overhaul**: Engine rebuilding, CRDi injector testing, transmission overhaul.
- **Bay 03 - Precision Suspension & 3D Hunter Alignment**: Laser geometry, active air suspension calibration, steering rack overhaul.
- **Bay 04 - Downdraft Paint & Colorimetry Lab**: Dust-free pressurized baking booth, PPG & Glasurit digital tint matching.
- **Bay 05 - Cashless Insurance Claims & Structural Jig**: Tie-ups with all major PSU and private insurers, computerized chassis straightening.
- **Bay 06 - Climate & Automotive Electrical**: R134a/R1234yf recovery & recharge station, wiring harness restoration.
- **Bay 07 - Periodic Maintenance & Rapid Service**: 60-point multi-system inspection, fluids, brakes, filters.
- **Bay 08 - Institutional & Fleet Priority Bay**: Dedicated throughput for corporate, institutional, and government four-wheelers.

## 4. Vehicle Classifications
- **European Luxury**: Mercedes-Benz (W212/W213, C-Class, GLC), BMW (3-Series G20, 5-Series F10/G30, X3/X5), Audi (A4, A6, Q5, Q7), Porsche, Jaguar Land Rover.
- **Everyday Four-Wheelers**: Hyundai (Creta, Venue, Verna, i20), Maruti Suzuki (Brezza, Swift, Baleno, Grand Vitara), Toyota (Innova Crysta, Fortuner, Camry), Tata (Harrier, Safari, Nexon), Mahindra (Scorpio-N, XUV700, Thar), Honda (City, Civic).
- **Vintage & Classic**: Hindustan Ambassador Mark I-IV, Premier Padmini/Fiat 1100, Standard Herald, Mahindra CJ3B.
- **Institutional Fleets**: Multi-vehicle corporate and departmental vehicle contracts with stringent turnaround SLAs.

## 5. Architectural Seams & Interfaces
- **Booking Engine**: Validates vehicle specifications, checks bay availability telemetry, and formats WhatsApp and email reservation payloads.
- **Parts Catalog Engine**: Provides real-time filtering by brand, SKU, vehicle make, and sub-system; generates immediate WhatsApp trade inquiries with pre-populated order tables.
- **Archive Engine**: Surfaces completed vehicle ledger sheets with verified inspection stamps, replaced component SKUs, and diagnostic logs.
