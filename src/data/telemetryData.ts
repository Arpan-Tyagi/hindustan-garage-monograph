import { BayTelemetry } from '../types';

export const liveBaysTelemetry: BayTelemetry[] = [
  {
    bayId: 'BAY-01',
    bayName: 'European Diagnostic & Optical ECU Suite',
    leadSpecialist: 'Master Tech R. K. Srivastava (MB/BMW Level 3)',
    status: 'ACTIVE',
    currentVehicle: 'Mercedes-Benz E-Class (W213) 220d',
    currentOperation: '9G-Tronic Mechatronic Pressure Telemetry & DoIP Gateway Adaptation',
    progressPercent: 78,
    clearingTime: 'Est. 16:30 IST'
  },
  {
    bayId: 'BAY-02',
    bayName: 'Powertrain Overhaul & CRDi Calibration',
    leadSpecialist: 'Lead Tech M. Aslam (CRDi Specialist)',
    status: 'OCCUPIED',
    currentVehicle: 'Hyundai Creta 1.5 CRDi SX(O)',
    currentOperation: 'Hartridge Bench Flow Calibration & Ultrasonic Injector Decarb',
    progressPercent: 92,
    clearingTime: 'Est. 14:45 IST'
  },
  {
    bayId: 'BAY-03',
    bayName: 'Suspension Dynamics & Hunter 3D Laser Alignment',
    leadSpecialist: 'Senior Tech Anand Verma',
    status: 'ACTIVE',
    currentVehicle: 'Toyota Fortuner 2.8 D-4D 4x4',
    currentOperation: 'Hunter HawkEye 3D SAI/Caster Geometry & Road Force Balance',
    progressPercent: 45,
    clearingTime: 'Est. 17:15 IST'
  },
  {
    bayId: 'BAY-04',
    bayName: 'Nova Verta Downdraft Paint Booth & Baking Lab',
    leadSpecialist: 'Master Colorist Rajesh Gupta',
    status: 'OCCUPIED',
    currentVehicle: 'BMW 330i M Sport (Portimao Blue Metallic)',
    currentOperation: '65°C Thermostatic Polyurethane Clearcoat Baking Cycle (Run #3)',
    progressPercent: 85,
    clearingTime: 'Est. 15:30 IST'
  },
  {
    bayId: 'BAY-05',
    bayName: 'Cashless Insurance & Structural Jig Alignment',
    leadSpecialist: 'Insurance Claims Manager V. K. Tiwari',
    status: 'STANDBY',
    currentVehicle: 'Audi A6 45 TFSI Technology',
    currentOperation: 'Car-O-Liner Chassis Datum Verification & Insurer Digital Survey',
    progressPercent: 100,
    clearingTime: 'BAY READY FOR INTAKE'
  },
  {
    bayId: 'BAY-06',
    bayName: 'Climate Engineering & Electrical Harness Lab',
    leadSpecialist: 'Electrical Specialist Dilip Singh',
    status: 'ACTIVE',
    currentVehicle: 'Honda City 1.5 i-VTEC V',
    currentOperation: 'Robinair AC1234 Automated Recovery & Evaporator Core Sterilization',
    progressPercent: 60,
    clearingTime: 'Est. 16:00 IST'
  },
  {
    bayId: 'BAY-07',
    bayName: 'Periodic Maintenance & Rapid Telemetry Service',
    leadSpecialist: 'Express Tech Sunil Yadav',
    status: 'ACTIVE',
    currentVehicle: 'Maruti Suzuki Brezza ZXi+ DualTone',
    currentOperation: '60-Point Diagnostic Check, Synthetic Oil Service & Brake Inspection',
    progressPercent: 70,
    clearingTime: 'Est. 15:00 IST'
  },
  {
    bayId: 'BAY-08',
    bayName: 'Institutional, Corporate & Judicial Priority Bay',
    leadSpecialist: 'Fleet Operations Lead S. K. Dwivedi',
    status: 'STANDBY',
    currentVehicle: 'Reserved: Allahabad High Court Enclave Fleet',
    currentOperation: 'Preventative Maintenance Telemetry & Government Compliance Staging',
    progressPercent: 100,
    clearingTime: 'AVAILABLE FOR JUDICIAL / FLEET INTAKE'
  }
];

export function getWorkshopOperationalStatus() {
  const activeBays = liveBaysTelemetry.filter((b) => b.status === 'ACTIVE' || b.status === 'OCCUPIED').length;
  const standbyBays = liveBaysTelemetry.filter((b) => b.status === 'STANDBY').length;

  return {
    isOpen: true,
    operatingHours: '09:00 - 19:30 IST (Mon - Sat)',
    location: '56, M.G. Marg, George Town, Prayagraj',
    totalBays: 8,
    activeBays,
    standbyBays,
    nextSlotEstimate: 'Immediate intake available at Bay 05 (Restoration) and Bay 08 (Fleet).'
  };
}
