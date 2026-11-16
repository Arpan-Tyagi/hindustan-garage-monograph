import { ArchiveVehicle } from '../types';

export const archiveVehicles: ArchiveVehicle[] = [
  {
    id: 'arch-w213',
    ledgerNumber: 'HG-ARCH-2026-089',
    model: 'Mercedes-Benz E-Class E 220d (W213)',
    year: 2019,
    category: 'european-luxury',
    categoryLabel: 'European Luxury Marque',
    chassisPrefix: 'WDD2130042A******',
    bayNumber: 'BAY 01',
    diagnosticBrief: 'Owner reported harsh 3-to-2 downshifts, intermittent Airmatic rear sag on cold mornings, and check-engine indicator with limp mode.',
    keyInterventions: [
      'Xentry DoIP interrogation diagnosed valve body mechatronic solenoid pressure fluctuation and micro-leak in rear left Airmatic bellows.',
      'Completed mechatronic valve block fluid flush with genuine MB 236.17 transmission fluid.',
      'Replaced rear air spring assembly with OEM Bilstein unit and performed 4-wheel height recalibration.',
      'Re-adapted 9G-Tronic shift points via 40 km supervised diagnostic road test on Prayagraj-Varanasi bypass.'
    ],
    partsReplaced: [
      { name: 'Airmatic Rear Air Spring Bellows', sku: 'HG-SP-MB-AS213', oemCode: 'A2133200125', manufacturer: 'Bilstein / OEM' },
      { name: 'Automatic Transmission Filter Pan Kit', sku: 'HG-SP-MB-9GFLT', oemCode: 'A7252703707', manufacturer: 'Mercedes-Benz Genuine' },
      { name: 'MB 236.17 ATF Transmission Fluid (9L)', sku: 'HG-SP-MB-ATF17', oemCode: 'A0029890603', manufacturer: 'Fuchs Titan' }
    ],
    turnaroundHours: 32,
    technicianSignOff: 'Master Tech R. K. Srivastava (Certification: MB Star Diagnostics Level 3)',
    inspectionStamp: 'VERIFIED & ROAD TESTED',
    completedDate: 'Completed 14 February 2026',
    clientOrigin: 'Civil Lines, Prayagraj'
  },
  {
    id: 'arch-creta',
    ledgerNumber: 'HG-ARCH-2026-074',
    model: 'Hyundai Creta 1.5 CRDi SX(O)',
    year: 2021,
    category: 'everyday-four-wheeler',
    categoryLabel: 'Everyday Four-Wheeler',
    chassisPrefix: 'MALC381CLMM******',
    bayNumber: 'BAY 02',
    diagnosticBrief: 'Severe black smoke under acceleration, erratic idle RPM hunting, and high fuel consumption. Diagnosis revealed clogged CRDi injectors and carbon choked intake plenum.',
    keyInterventions: [
      'Ultrasonic decarbonization of all four Bosch CRDi solenoid fuel injectors.',
      'Hartridge high-pressure bench testing and IMA coding generation for injector calibration.',
      'Complete intake manifold chemical decarbonization and EGR valve flow-rate restoration.',
      'Fitted Hyundai Genuine diesel fuel filter and high-pressure rail sensor from Speed Parts inventory.'
    ],
    partsReplaced: [
      { name: 'Hyundai Genuine CRDi Fuel Filter Cartridge', sku: 'SP-HY-31922-2E900', oemCode: '31922-2E900', manufacturer: 'Hyundai Mobis' },
      { name: 'Common Rail High Pressure Injector Nozzle Washers', sku: 'SP-HY-33800-2A700', oemCode: '33800-2A700', manufacturer: 'Bosch Automotive' },
      { name: 'Manifold Intake Gasket Set', sku: 'SP-HY-28411-2A600', oemCode: '28411-2A600', manufacturer: 'Hyundai Mobis' }
    ],
    turnaroundHours: 18,
    technicianSignOff: 'Lead Tech M. Aslam (CRDi Powertrain Specialist)',
    inspectionStamp: 'VERIFIED & ROAD TESTED',
    completedDate: 'Completed 08 February 2026',
    clientOrigin: 'George Town, Prayagraj'
  },
  {
    id: 'arch-bmw5',
    ledgerNumber: 'HG-ARCH-2026-062',
    model: 'BMW 5 Series 530d M Sport (G30)',
    year: 2020,
    category: 'european-luxury',
    categoryLabel: 'European Luxury Marque',
    chassisPrefix: 'WBAJB92020G******',
    bayNumber: 'BAY 01',
    diagnosticBrief: 'High speed steering vibration between 110-130 km/h, brake pedal pulsing, and scheduled 60,000 km Condition Based Servicing (CBS).',
    keyInterventions: [
      'Hunter Road Force Elite diagnostic revealed 85N lateral tire force variation and micro-warp in front brake rotors (0.04mm runout).',
      'Replaced front ventilated brake discs with OEM Brembo high-carbon coated rotors and ceramic brake pads.',
      'Road Force matched tire-wheel assembly with laser-guided weight placement to 0 grams residual unbalance.',
      'Full CBS digital service log updated via BMW ISTA online connection.'
    ],
    partsReplaced: [
      { name: 'Front Ventilated High-Carbon Brake Disc Pair', sku: 'HG-SP-BMW-3411BR', oemCode: '34116860911', manufacturer: 'Brembo OEM' },
      { name: 'Front Ceramic Low-Dust Brake Pad Set', sku: 'HG-SP-BMW-3411BP', oemCode: '34116888457', manufacturer: 'Textar / OEM' },
      { name: 'BMW TwinPower Turbo LL-04 5W-30 Oil (7L)', sku: 'HG-SP-BMW-LL04', oemCode: '83212405948', manufacturer: 'Shell Helix Ultra' }
    ],
    turnaroundHours: 24,
    technicianSignOff: 'Master Tech R. K. Srivastava (BMW Certified Specialist)',
    inspectionStamp: 'VERIFIED & ROAD TESTED',
    completedDate: 'Completed 29 January 2026',
    clientOrigin: 'Tagore Town, Prayagraj'
  },
  {
    id: 'arch-fortuner',
    ledgerNumber: 'HG-ARCH-2026-048',
    model: 'Toyota Fortuner 2.8 D-4D 4x4 AT',
    year: 2022,
    category: 'everyday-four-wheeler',
    categoryLabel: 'Everyday Four-Wheeler',
    chassisPrefix: 'MBJBA80R300******',
    bayNumber: 'BAY 03',
    diagnosticBrief: 'Chassis pull to the left following off-road highway excursion, stiff steering return, and suspension clunk over potholes.',
    keyInterventions: [
      'Hunter HawkEye Elite 3D laser alignment detected +0.42° negative camber discrepancy on front passenger side.',
      'Replaced torn front stabilizer bar end links and upper control arm heavy-duty polyurethane bushings.',
      'Re-torqued subframe fasteners to factory 175 Nm and calibrated zero-point electronic steering angle sensor.',
      'Road tested for high-speed tracking stability on Ganga Expressway access corridor.'
    ],
    partsReplaced: [
      { name: 'Toyota Genuine Front Stabilizer Link Rod Pair', sku: 'SP-TY-48820-0K030', oemCode: '48820-0K030', manufacturer: 'Toyota Genuine Parts' },
      { name: 'Front Suspension Arm Bushing Assembly', sku: 'SP-TY-48654-0K080', oemCode: '48654-0K080', manufacturer: 'Toyota Genuine Parts' }
    ],
    turnaroundHours: 12,
    technicianSignOff: 'Senior Tech Anand Verma (Chassis & Alignment Lead)',
    inspectionStamp: 'VERIFIED & ROAD TESTED',
    completedDate: 'Completed 22 January 2026',
    clientOrigin: 'Katra, Prayagraj'
  },
  {
    id: 'arch-ambassador',
    ledgerNumber: 'HG-ARCH-2025-112',
    model: 'Hindustan Ambassador Mark II (1489cc OHV)',
    year: 1968,
    category: 'vintage-restoration',
    categoryLabel: 'Vintage & Classic Heritage',
    chassisPrefix: 'B1489OHV68******',
    bayNumber: 'BAY 02',
    diagnosticBrief: 'Historic family heirloom preserved in George Town since 1968. Vehicle arrived for total mechanical recommissioning, carburetor sync, and lead-free valve seat conversion.',
    keyInterventions: [
      'Engine completely stripped, block ultrasonically descaled, and cylinder head re-machined with stellite hardened valve seats.',
      'Rebuilt SU side-draft carburetor with brand-new brass needle, jet tube, and damper piston springs.',
      'Custom fabricated copper brake hardlines and restored Girling single-circuit drum brake cylinders.',
      'Preserved the original patina of the engine bay while ensuring reliable single-kick turn-key ignition.'
    ],
    partsReplaced: [
      { name: 'Hardened Stellite Valve & Seat Rebuild Kit', sku: 'HG-VINT-AMB-VLV', oemCode: 'HM-1489-VSET', manufacturer: 'Hindustan Heritage Archive' },
      { name: 'SU Carburetor Master Overhaul Kit', sku: 'HG-VINT-SU-HS2', oemCode: 'HM-SU-150', manufacturer: 'Burlen UK' },
      { name: 'Authentic Lucas 12V Ignition Points & Condenser', sku: 'HG-VINT-LUC-45D', oemCode: 'LU-41800', manufacturer: 'Lucas Classic' }
    ],
    turnaroundHours: 140,
    technicianSignOff: 'Master Craftsman B. P. Sharma (54 Years Workshop Tenure)',
    inspectionStamp: 'HISTORIC RE-CERTIFIED',
    completedDate: 'Completed 12 December 2025',
    clientOrigin: 'M.G. Marg, George Town'
  },
  {
    id: 'arch-fleet',
    ledgerNumber: 'HG-ARCH-2026-015',
    model: 'Institutional Fleet: 4x Maruti Suzuki Ciaz 1.5 Smart Hybrid',
    year: 2023,
    category: 'fleet-commercial',
    categoryLabel: 'Institutional & Corporate Fleet',
    chassisPrefix: 'MA3FBEB1SN0******',
    bayNumber: 'BAY 08',
    diagnosticBrief: 'Quarterly scheduled preventative maintenance protocol under High Court Judicial Fleet Service Agreement. Comprehensive 60-point multi-system compliance audit.',
    keyInterventions: [
      'Simultaneous 4-bay throughput with priority 6-hour completion window.',
      'ISG dual-battery lithium-lead hybrid system voltage telemetry and charging curve verification.',
      'Replaced all synthetic oils, oil filters, cabin PM2.5 filters, and brake pads.',
      'Complete vehicle underbody anti-corrosion inspection and digital telemetry health certificate issued for administrative records.'
    ],
    partsReplaced: [
      { name: 'Maruti Genuine Synthetic Oil 0W-16 (14L Total)', sku: 'SP-MS-0W16-SYN', oemCode: '99999M00016', manufacturer: 'Ecstar Maruti' },
      { name: 'Maruti Genuine Air & Cabin Micron Filter Kits (x4)', sku: 'SP-MS-13780-M68P00', oemCode: '13780M68P00', manufacturer: 'Maruti Suzuki Genuine' },
      { name: 'Front Disc Brake Pad Sets (x4 Sets)', sku: 'SP-MS-55810-M68P00', oemCode: '55810M68P00', manufacturer: 'TVS Girling / OEM' }
    ],
    turnaroundHours: 8,
    technicianSignOff: 'Fleet Operations Lead S. K. Dwivedi',
    inspectionStamp: 'VERIFIED & ROAD TESTED',
    completedDate: 'Completed 18 January 2026',
    clientOrigin: 'High Court Judicial Enclave, Prayagraj'
  }
];
