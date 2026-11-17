export type VehicleCategory =
  | 'european-luxury'
  | 'everyday-four-wheeler'
  | 'vintage-restoration'
  | 'fleet-commercial';

export interface ServiceSpecification {
  id: string;
  code: string;
  chapter: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  leadTime: string;
  bayAssignment: string;
  diagnosticTools: string[];
  keyDeliverables: string[];
  warrantyTerms: string;
  pricingGuidance: string;
  curatorNote: string;
}

export interface ReplacedPart {
  name: string;
  sku: string;
  oemCode: string;
  manufacturer: string;
}

export interface ArchiveVehicle {
  id: string;
  ledgerNumber: string;
  model: string;
  year: number;
  category: VehicleCategory;
  categoryLabel: string;
  chassisPrefix: string;
  bayNumber: string;
  diagnosticBrief: string;
  keyInterventions: string[];
  partsReplaced: ReplacedPart[];
  turnaroundHours: number;
  technicianSignOff: string;
  inspectionStamp: string;
  completedDate: string;
  clientOrigin: string;
  imageUrl?: string;
  imageCaption?: string;
}

export interface SpeedPart {
  sku: string;
  name: string;
  category:
    | 'Engine Components'
    | 'Braking Systems'
    | 'Suspension & Steering'
    | 'Electrical & Sensors'
    | 'Body & Lighting'
    | 'Lubricants & Consumables';
  brand: string;
  oemNumber: string;
  vehicleCompatibility: string[];
  wholesalePrice: number;
  mrp: number;
  moq: number;
  stockStatus: 'IN STOCK (IMMEDIATE DISPATCH)' | 'REGIONAL WAREHOUSE (24H)' | 'SPECIAL ORDER';
  warranty: string;
  isHyundaiPriority?: boolean;
}

export interface BayTelemetry {
  bayId: string;
  bayName: string;
  leadSpecialist: string;
  status: 'ACTIVE' | 'OCCUPIED' | 'STANDBY' | 'FINAL INSPECTION';
  currentVehicle: string;
  currentOperation: string;
  progressPercent: number;
  clearingTime: string;
}

export interface ConciergeReservationPayload {
  ownerName: string;
  contactNumber: string;
  emailAddress: string;
  vehicleMake: string;
  vehicleModel: string;
  manufactureYear: string;
  serviceCategory: string;
  preferredDate: string;
  symptomsDiagnosticNotes: string;
  pickupRequired: boolean;
}

export interface TechnicalArticle {
  id: string;
  slug: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  author: string;
  readingTime: string;
  date: string;
  abstract: string;
  technicalSpecs: { [key: string]: string };
  paragraphs: string[];
  verdict: string;
  imageUrl?: string;
  imageCaption?: string;
}

export interface ChronicleEvent {
  year: string;
  headline: string;
  era: string;
  narration: string;
  technicalMilestone: string;
  archivalArtifact: string;
  imageUrl?: string;
  imageCaption?: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  telemetryRef?: string;
}
