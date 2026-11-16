import { ServiceSpecification } from '../types';

export const servicesData: ServiceSpecification[] = [
  {
    id: 'engine-ecm',
    code: 'SPEC-01-ENG',
    chapter: 'CHAPTER II.A',
    title: 'Engine Rebuilding & ECM Telemetry Diagnostics',
    subtitle: 'Micro-tolerance powertrain overhaul, CRDi piezo-electric calibration, and CAN-bus signal forensic analysis.',
    targetAudience: 'Multi-brand Four-Wheelers & Complex Powertrains (German, Korean, Japanese, Domestic)',
    leadTime: '24 to 72 Hours (Symptom dependent)',
    bayAssignment: 'Bay 01 & Bay 02 (Powertrain Suite)',
    diagnosticTools: [
      'Bosch FSA 740 Engine Analyzer & 4-Channel Automotive Oscilloscope',
      'Autel MaxiSys Ultra Advanced Topology Scanner',
      'Hartridge CRDi High-Pressure Injector Calibration Test Bench',
      'Snap-On Digital Cylinder Leak-Down & Compression Transducers'
    ],
    keyDeliverables: [
      'Full CAN-bus network topology scan with deep fault code freeze-frame analysis',
      'Common Rail Diesel (CRDi) high-pressure pump (1,800–2,200 bar) volume output test',
      'Sub-millimeter cylinder bore micrometer measurement and hone cross-hatch profiling',
      'ECU software coding, throttle adaptation, and EGR/DPF regeneration cycling'
    ],
    warrantyTerms: '12 Months / 20,000 km warranty on full mechanical rebuilds with OEM seal kits.',
    pricingGuidance: 'Archival Ledger Assessment: Diagnostic telemetry starting at ₹2,500; complete rebuilds quoted per engineering micrometer report.',
    curatorNote: 'Unlike generic repair shops that swap parts blindly, our master technicians measure sensor waveforms at millivolt resolutions before loosening a single fastener.'
  },
  {
    id: 'european-marque',
    code: 'SPEC-02-EUR',
    chapter: 'CHAPTER II.B',
    title: 'European & Luxury Marque Stewardship',
    subtitle: 'Institutional care for Mercedes-Benz, BMW, Audi, Porsche, and Jaguar Land Rover—eliminating the 200 km transit to Lucknow.',
    targetAudience: 'Prayagraj Owners of Mercedes-Benz, BMW, Audi, Volvo, Porsche, JLR',
    leadTime: 'Same Day to 48 Hours',
    bayAssignment: 'Bay 01 (European Diagnostic Suite)',
    diagnosticTools: [
      'Mercedes-Benz Xentry Connect Star Diagnosis System with DoIP',
      'BMW ISTA-D / ISTA-P Optical Interface Diagnostic Station',
      'Audi / VAG ODIS Diagnostic Interface with Online GeKo Programming',
      'Porsche PIWIS III Diagnostic Subsystem'
    ],
    keyDeliverables: [
      'Elimination of risky 200 km flatbed or highway transit on NH-27 to Lucknow dealerships',
      'Manufacturer-compliant service schedules with genuine oils (Mobil 1 ESP 0W-40, Motul 8100 X-clean)',
      'ZF 8HP / 9HP and Mercedes 7G/9G-Tronic transmission mechatronic fluid exchange',
      'Airmatic & Dynamic Drive air strut rebuilds, valve block testing, and ride-height sensor calibration'
    ],
    warrantyTerms: 'Strict compliance with European factory service tolerances; 100% Genuine OEM parts backed by manufacturer warranty.',
    pricingGuidance: '40% to 55% more cost-effective than Lucknow franchised dealerships, with zero travel overhead.',
    curatorNote: 'George Town has been Prayagraj’s automotive bastion since 1960. We maintain dedicated factory-level diagnostic licenses so luxury owners enjoy white-glove marque maintenance in their hometown.'
  },
  {
    id: 'downdraft-paint',
    code: 'SPEC-03-PNT',
    chapter: 'CHAPTER II.C',
    title: 'Cashless Insurance & Downdraft Body Restoration',
    subtitle: 'Pressurized dust-free baking booth refinishing, computerized Glasurit/PPG paint matching, and seamless claims settlement.',
    targetAudience: 'Accident Damage, Paint Renewal, and Direct Cashless Claims for All Leading Insurers',
    leadTime: '3 to 7 Days (Claim approval dependent)',
    bayAssignment: 'Bay 04 & Bay 05 (Restoration & Paint Lab)',
    diagnosticTools: [
      'Nova Verta Italian Negative-Pressure Downdraft Baking Booth (65°C cure cycle)',
      'PPG RapidMatch XI Multi-Angle Spectrophotometer',
      'Car-O-Liner Mark 6 Computerized Laser Chassis Straightening Bench',
      'Mirka Dust-Free Orbital Dry Sanding System'
    ],
    keyDeliverables: [
      'Direct cashless tie-ups with ICICI Lombard, HDFC ERGO, Bajaj Allianz, New India, Oriental, Tata AIG',
      'Precise metallic, pearlescent, and tri-coat optical color replication matching factory orange-peel texture',
      'Full chassis structural alignment to within 1 mm of OEM factory datum specifications',
      'Application of high-solids scratch-resistant polyurethane clear coats with UV-inhibition chemistry'
    ],
    warrantyTerms: '3-Year anti-peel and gloss retention warranty on all panel refinishes.',
    pricingGuidance: 'Direct billing to insurer for approved claims; transparent itemized estimate generated via automated parts ledger.',
    curatorNote: 'Our paint booth operates under continuous micro-filtered positive air pressure, preventing airborne dust particles from contaminating the clearcoat finish.'
  },
  {
    id: 'suspension-steering',
    code: 'SPEC-04-SUS',
    chapter: 'CHAPTER II.D',
    title: 'Suspension Dynamics & 3D Hunter Laser Alignment',
    subtitle: 'Chassis harmonic dampening, bushing press-fitment, active steering rack rebuilding, and digital wheel geometry.',
    targetAudience: 'High-speed Stability, Uneven Tire Wear, Steering Pull, and Harsh Ride Mitigation',
    leadTime: '4 to 8 Hours',
    bayAssignment: 'Bay 03 (Precision Chassis Suite)',
    diagnosticTools: [
      'Hunter HawkEye Elite High-Definition 3D Imaging Wheel Alignment System',
      'Hunter Road Force Elite Touchless Tire Balancer with Radial Vibration Diagnosis',
      '100-Ton Hydraulic Universal Bushing Press',
      'PicoScope Electronic Noise, Vibration & Harshness (NVH) 3-Axis Accelerometers'
    ],
    keyDeliverables: [
      'Laser measurement of Camber, Caster, SAI, Included Angle, and Individual Toe to 0.01-degree precision',
      'Hydraulic pressing of control arm sub-frame bushings without thermal distortion of forged alloys',
      'Shock absorber rebound rate testing and active damping solenoid resistance verification',
      'Electronic steering angle sensor (SAS) recalibration following mechanical alignment adjustments'
    ],
    warrantyTerms: '6 Months / 10,000 km warranty on all suspension rebuilds and geometry adjustments.',
    pricingGuidance: '3D Laser Alignment & Road Force Balance package starting at ₹1,800.',
    curatorNote: 'Prayagraj’s varying road topographies place distinct loads on vehicle subframes. We tune wheel geometry specifically for high-speed poise on the Purvanchal and Ganga Expressways.'
  },
  {
    id: 'climate-electrical',
    code: 'SPEC-05-ELE',
    chapter: 'CHAPTER II.E',
    title: 'Climate Control Engineering & Harness Restoration',
    subtitle: 'Automated refrigerant recovery, evaporator core sterilization, alternator overhaul, and rodent-damaged harness splicing.',
    targetAudience: 'Subtropical Summer Cooling Failures, Intermittent BCM/ECU Glitches, and Battery Telemetry',
    leadTime: '4 to 12 Hours',
    bayAssignment: 'Bay 06 (Climate & Electrical Suite)',
    diagnosticTools: [
      'Robinair AC1234-9 Fully Automated R134a & R1234yf Recovery/Recycle/Recharge Station',
      'Inficon Whisper Ultrasonic Refrigerant Leak Detector & Nitrogen Pressure Rig',
      'Fluke 88V Automotive Multimeter & Thermal Imaging Camera',
      'Mil-spec Heat-Shrink Soldering Stations with Weatherproof Deutsch Connectors'
    ],
    keyDeliverables: [
      'Evacuation of contaminated gas, vacuum dehydration down to 500 microns, and exact gram-accurate oil/gas recharge',
      'Removal and replacement of leaky HVAC evaporator cooling coils with zero dashboard rattles post-assembly',
      'Micro-soldering and heat-shrink encapsulation of rodent-chewed wiring harnesses with OEM color-coding',
      'Alternator ripple voltage analysis and parasitic battery drain sleep-current measurement (<35mA)'
    ],
    warrantyTerms: '12 Months leak-free warranty on AC system overhauls; 6 Months warranty on electrical harness repairs.',
    pricingGuidance: 'Climate diagnostics & pressure test from ₹1,200; comprehensive harness restoration per schematic complexity.',
    curatorNote: 'We never mask electrical shorts with electrical tape. Every repaired line receives solder-sleeves, raychem heat-shrink tubing, and flame-retardant corrugated conduit.'
  },
  {
    id: 'fleet-institutional',
    code: 'SPEC-06-FLT',
    chapter: 'CHAPTER II.F',
    title: 'Institutional, Corporate & Judicial Fleets',
    subtitle: 'Dedicated high-throughput bay prioritization, preventative maintenance telemetry, and priority government billing.',
    targetAudience: 'Prayagraj High Court Officers, District Administration, Corporate Executives, Bank Fleets',
    leadTime: 'Priority Turnaround (Guaranteed < 12 Hours for Regular PM)',
    bayAssignment: 'Bay 08 (Dedicated Institutional Bay)',
    diagnosticTools: [
      'Automated 60-Point Fleet Digital Inspection Suite with Real-time PDF Telemetry',
      'Quick-Check Drive-Over Tire Tread & Alignment Scanner',
      'Direct GST E-Invoicing Integration with Institutional Purchase Orders',
      'Dedicated Bay 08 Master Fleet Specialist'
    ],
    keyDeliverables: [
      'Guaranteed SLA turnaround time with dedicated priority queueing over civilian walk-ins',
      'Scheduled preventive inspections mitigating roadside breakdowns for high-ranking dignitaries',
      'Centralized monthly consolidated GST billing (GSTIN: 09ADQPA5477Q1ZN)',
      'Complimentary pickup, drop, and sanitization services across Civil Lines, George Town, and Cantonment'
    ],
    warrantyTerms: 'Full fleet warranty terms covered under institutional Service Level Agreements.',
    pricingGuidance: 'Negotiated tiered institutional tariff cards with volume rebates for 5+ vehicle fleets.',
    curatorNote: 'For over six decades, Hindustan Garage has been the trusted automotive custodian for Prayagraj’s distinguished judicial, administrative, and industrial leadership.'
  }
];
