import { TechnicalArticle } from '../types';

export const technicalArticles: TechnicalArticle[] = [
  {
    id: 'lucknow-fallacy',
    slug: 'the-lucknow-fallacy',
    chapterNumber: 'DISCOURSE I',
    title: 'The Lucknow Fallacy: Why Prayagraj Luxury Owners No Longer Need 200km Highway Transits',
    subtitle: 'An engineering analysis of Diagnostic over IP (DoIP), factory server handshakes, and why flatbedding an E-Class or 5-Series to the capital is an obsolete ritual.',
    author: 'Senior Master Diagnostics Specialist, Hindustan Garage',
    readingTime: '7 Min Read',
    date: 'February 2026',
    abstract: 'For two decades, luxury automobile owners in Prayagraj suffered under the psychological myth that authentic European marque stewardship required a grueling 200 km flatbed journey to franchised dealerships in Lucknow. This treatise deconstructs the hardware realities of modern CAN-FD and DoIP diagnostics, proving how local engineering precision delivers identical or superior outcomes without highway risk.',
    technicalSpecs: {
      'Optical Bandwidth': 'DoIP Ethernet 100BASE-TX (100 Mbit/s)',
      'Protocol Support': 'UDS on CAN-FD, ISO 13400, ISO 14229',
      'ECU Flash Duration': '18 Minutes (vs 6 Hours on legacy K-Line/CAN)',
      'Transit Cost Avoided': '₹18,000 - ₹28,000 flatbed fee per round trip',
      'Highway Mileage Preserved': '410 km road wear on ultra-low profile run-flat tires'
    },
    paragraphs: [
      'The modern luxury car—whether a Mercedes-Benz W213, a BMW G30, or an Audi C8—is no longer merely a mechanical apparatus of pistons and gears; it is a distributed deterministic computer network running upwards of 80 interconnected Electronic Control Units (ECUs) over high-speed Controller Area Network (CAN-FD) and FlexRay backbones.',
      'Historically, franchised dealerships in Lucknow capitalized on proprietary software gatekeeping. An owner in Civil Lines or George Town whose instrument cluster illuminated with an adaptive air-suspension or transmission mechatronic fault had little choice but to hire a flatbed recovery truck to Lucknow, incurring substantial transit fees, risks of loading damage to front air dams, and multi-week dealership delays.',
      'At Hindustan Garage, we dismantled this geographic dependency by investing directly in genuine manufacturer-licensed diagnostic architectures: Mercedes-Benz Xentry Connect DoIP, BMW ISTA/D with ICOM optical interfaces, and VAG ODIS. Diagnostic over Internet Protocol (DoIP) operates over standard IEEE 802.3 Ethernet, flashing megabytes of firmware calibrations into central gateway units at 100 Mbit/s.',
      'Furthermore, our 66-year mechanical heritage ensures that diagnostic trouble codes (DTCs) are treated as clues, not dogmatic mandates to replace entire sub-assemblies. Where a franchised dealership will quote ₹3,80,000 to replace an entire mechatronic valve body, our master technicians measure solenoid internal resistance, replace hardened micro-O-rings, flush contaminated fluid with factory-spec Fuchs Titan, and adapt shifts on local test corridors.',
      'The verdict is incontrovertible: true automotive luxury is defined by rigorous diagnostic mastery, not the postal code of the workshop.'
    ],
    verdict: 'Prayagraj luxury owners save an average of 42 hours in turnaround time and upwards of 50% in unnecessary dealer component replacements by opting for localized, engineering-grade stewardship at 56, M.G. Marg.',
    imageUrl: '/images/journal-doip.jpg',
    imageCaption: 'DoIP optical diagnostic terminal performing gateway adaptation on European luxury platform'
  },
  {
    id: 'crdi-failures',
    slug: 'decoding-crdi-injector-failures',
    chapterNumber: 'DISCOURSE II',
    title: 'Decoding Common Rail Diesel (CRDi) Injector Failures in Humid Subtropical Climates',
    subtitle: 'Forensic microscopic analysis of cavitation erosion, fuel hygroscopic condensation, and micron-level solenoid seizure in Eastern Uttar Pradesh.',
    author: 'Powertrain Calibration Team, Hindustan Garage',
    readingTime: '9 Min Read',
    date: 'January 2026',
    abstract: 'Subtropical humidity along the confluence of the Ganga and Yamuna rivers combined with seasonal temperature swings accelerates hygroscopic moisture absorption in bulk diesel storage. This paper examines the metallurgical breakdown of CRDi piezo-electric and solenoid nozzles operating at 2,000 bar pressure.',
    technicalSpecs: {
      'Operating Injection Rail Pressure': '1,600 to 2,200 Bar (23,000 - 32,000 PSI)',
      'Nozzle Orifice Diameter': '0.11 mm to 0.14 mm (Micro-drilled laser holes)',
      'Piezo Crystal Response Time': '0.1 Milliseconds (Multi-pilot injection capability)',
      'Acceptable Leak-Off Tolerance': '< 25 mL per minute at 1,000 bar bench test',
      'Filtration Threshold': '2 Microns absolute (Hyundai Mobis Genuine spec)'
    },
    paragraphs: [
      'Common Rail Diesel Injection (CRDi) represents one of the greatest triumphs of internal combustion thermodynamics, enabling diesel passenger vehicles like the Hyundai Creta, Toyota Fortuner, and Mahindra XUV700 to achieve immense low-end torque with silent idling and strict emissions compliance.',
      'However, operating at pressures exceeding 2,000 bar, the fuel injector nozzle needle operates with tolerances measured in single-digit microns. In Prayagraj, where summer temperatures regularly eclipse 46°C followed by torrential monsoon deluges, underground fuel storage tanks at regional filling stations experience significant condensation breathing cycles.',
      'When diesel contaminated with dissolved microscopic water droplets enters a high-pressure pump (such as the Bosch CP4), fluid film lubricity collapses. Water molecules flash into high-pressure vapor under shear stress, creating microscopic cavitation pits on the hardened steel valve seats of the injector nozzle.',
      'At Hindustan Garage, we diagnose these failures before they cause cataclysmic piston crown melt. Our workshop is equipped with a digital back-leakage diagnostic manifold and an ultrasonic restorative cavitation bath. Injectors are evaluated on a high-pressure test bench for pre-injection, main injection, and post-injection flow rates across varying rail pressures.',
      'We replace only fatigued nozzle needles with certified components from our Speed Parts division and re-generate the mandatory 16-character IMA injector correction code. This code communicates exact manufacturing flow characteristics to the vehicle’s ECU, ensuring zero cylinder knock and perfectly balanced crankshaft rotational velocity.'
    ],
    verdict: 'Preventative fuel filtration using genuine 2-micron OEM filter elements (such as Hyundai Mobis 31922-2E900) every 15,000 km is the single most critical insurance policy against catastrophic fuel system failure.',
    imageUrl: '/images/journal-crdi.jpg',
    imageCaption: 'High-pressure CRDi common rail injector calibration and bench flow testing'
  },
  {
    id: 'paint-metallurgy',
    slug: 'ppg-vs-factory-paint-metallurgy',
    chapterNumber: 'DISCOURSE III',
    title: 'PPG vs Factory Paint Metallurgy: The Science Behind Dust-Free Downdraft Refinishing',
    subtitle: 'Why outdoor paint jobs fail within 18 months, and how pressurized thermostatic downdraft baking replicates factory electrostatic dip finishes.',
    author: 'Body Restoration & Refinishing Director, Hindustan Garage',
    readingTime: '6 Min Read',
    date: 'December 2025',
    abstract: 'Automotive paint is not merely decorative enamel; it is a multi-layer elastomeric polymer shield engineered to resist stone chippings, acidic bird droppings, and UV solar degradation. This article details the physics of our Italian downdraft booth and computerized spectrophotometry.',
    technicalSpecs: {
      'Booth Airflow Rate': '24,000 m³/hour positive pressure airflow',
      'Air Filtration Efficiency': '99.8% filtration down to 5 microns (Ceiling plenum filters)',
      'Bake Cycle Temperature': '65°C constant for 45 minutes',
      'Clearcoat Solids Content': 'High-Solids (HS) Polyurethane 52% film build',
      'Colorimeter Sensor': 'PPG RapidMatch XI multi-angle optical spectrophotometer'
    },
    paragraphs: [
      'Walk past any roadside tinkering shop, and you will witness painters spraying automotive panels in open-air sheds while dust-laden traffic churns a few meters away. The inevitable consequence is solvent pop, dust nib inclusions, and premature clearcoat delamination within two summers.',
      'At Hindustan Garage, our body restoration philosophy is centered around the Italian Nova Verta negative-pressure downdraft preparation and baking suite. The ceiling plenum draws air from high-efficiency intake filtration towers, forcing air downward at a constant laminar velocity of 0.3 meters per second before exhausting it through sub-floor dry-filter pits.',
      'This vertical airflow creates an invisible kinetic curtain around the vehicle chassis, ensuring that any overspray atomization is immediately pulled downward toward the floor rather than settling back onto adjacent freshly coated clearcoat panels.',
      'Color formulation is managed digitally using the PPG RapidMatch multi-angle spectrophotometer. By measuring paint surface reflectivity across five distinct optical angles, our system accounts for metallic flake orientation, pearl mica interference, and natural sun-induced clearcoat weathering, generating an exact pigment formula accurate to 0.05 grams.',
      'Once applied, the booth switches from ventilation to full recirculation mode, firing our Italian Riello diesel burner to elevate the ambient air temperature to a steady 65°C. This thermal cycle triggers cross-linking polymerisation inside the high-solids polyurethane clearcoat, yielding a scratch-resistant finish with an OEM-spec pencil hardness rating of 2H.'
    ],
    verdict: 'Factory-grade paint restoration cannot occur in an open shed. Only a climate-controlled downdraft baking suite can guarantee an enduring 3-year warranty against clearcoat peeling and orange-peel texture distortion.',
    imageUrl: '/images/journal-paint.jpg',
    imageCaption: 'Dust-free Italian downdraft booth during 65°C high-solids polyurethane clearcoat baking cycle'
  },
  {
    id: 'spurious-spares',
    slug: 'genuine-vs-counterfeit-hyundai-spares',
    chapterNumber: 'DISCOURSE IV',
    title: 'Genuine vs Counterfeit Hyundai Spares: A Forensic Guide for Fleet Operators',
    subtitle: 'Distinguishing Mobis original factory engineering from dangerous grey-market counterfeits flooding Eastern Uttar Pradesh.',
    author: 'Supply Chain Auditor, Speed Parts Division',
    readingTime: '8 Min Read',
    date: 'November 2025',
    abstract: 'Counterfeit spare parts constitute an estimated 30% of the unregulated regional automotive retail market. This forensic guide details the physical and chemical indicators distinguishing genuine Hyundai Mobis components from hazardous counterfeits.',
    technicalSpecs: {
      'Holographic Security': 'Multi-layer 3D kinetic hologram with embedded micro-text',
      'Packaging Barcode': 'GS1 standard 1D/2D QR code linked to Mobis distributor database',
      'Filter Media Test': 'ISO 16889 multi-pass test efficiency > 99.2%',
      'Brake Friction Coefficient': 'Classified GG friction rating (0.45-0.55 μ) across 350°C',
      'Speed Parts Sourcing': 'Direct factory OEM and authorized Tier-1 tier supply exclusively'
    },
    paragraphs: [
      'The Indian automotive spares aftermarket has long been plagued by sophisticated counterfeiting rings that replicate brand packaging with uncanny graphic precision. For popular models such as the Hyundai Creta, Venue, and i20, rogue manufacturers produce substandard oil filters, brake pads, and timing belts packaged in deceptively authentic-looking boxes.',
      'The consequences of using counterfeit parts are not trivial; they are catastrophic. A counterfeit oil filter typically utilizes cheap cellulose paper rather than synthetic micro-glass fibers, disintegrating under cold oil pressure and allowing paper pulp to migrate directly into crankshaft oil galleys, causing total engine seizure within 5,000 kilometers.',
      'Through our SPEED PARTS wholesale division at Medical Chauraha, we maintain a zero-compromise vetting protocol. Every inbound shipment of Hyundai Genuine components undergoes multi-point forensic inspection: verifying the micro-embossed holographic seal under polarized light, scanning the encrypted 2D data-matrix barcode against official Mobis dealer logistics portals, and verifying tamper-evident heat seals.',
      'On friction components, genuine Mobis / Sangsin brake pads feature chamfered edges, vulcanized anti-squeal shims, and high-temperature organic backing resins that do not fade when descending hilly terrain or stopping rapidly from highway speeds on NH-19.',
      'We supply independent workshops and private owners across Prayagraj, Pratapgarh, Kaushambi, and Mirzapur with wholesale invoice transparency (GSTIN: 09ADQPA5477Q1ZN). When an installer buys from Speed Parts, they receive not just a component, but the verified institutional integrity of a 66-year-old engineering house.'
    ],
    verdict: 'Saving ₹400 on a counterfeit filter is the quickest route to an ₹80,000 engine overhaul. Always verify the authorized wholesale pedigree of critical mechanical components through certified trade divisions.',
    imageUrl: '/images/journal-spares.jpg',
    imageCaption: 'Forensic inspection of genuine OEM micro-filtration media and holographic seals'
  }
];
