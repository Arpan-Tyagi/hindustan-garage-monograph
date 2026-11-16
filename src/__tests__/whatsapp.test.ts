import { describe, it, expect } from 'vitest';
import {
  generateReservationWhatsAppUrl,
  generateSpeedPartsWhatsAppUrl,
  generateEmailConfirmationPayload,
  WORKSHOP_PHONE,
} from '../utils/whatsapp';
import { ConciergeReservationPayload, SpeedPart } from '../types';

describe('WhatsApp & Email Notification Engine', () => {
  it('generates a valid WhatsApp URL with all concierge reservation fields', () => {
    const reservation: ConciergeReservationPayload = {
      ownerName: 'Justice V. K. Mehrotra',
      contactNumber: '+919876543210',
      emailAddress: 'vk.mehrotra@example.com',
      vehicleMake: 'Mercedes-Benz',
      vehicleModel: 'E-Class E220d',
      manufactureYear: '2020',
      serviceCategory: 'European & Luxury Marque Stewardship',
      preferredDate: '2026-03-01',
      symptomsDiagnosticNotes: '9G-Tronic transmission jerky 3-to-2 downshift in traffic.',
      pickupRequired: true,
    };

    const url = generateReservationWhatsAppUrl(reservation);

    expect(url).toContain(`https://wa.me/${WORKSHOP_PHONE}?text=`);
    expect(url).toContain(encodeURIComponent('HINDUSTAN GARAGE (EST. 1960)'));
    expect(url).toContain(encodeURIComponent('Justice V. K. Mehrotra'));
    expect(url).toContain(encodeURIComponent('Mercedes-Benz E-Class E220d (2020)'));
    expect(url).toContain(encodeURIComponent('09ADQPA5477Q1ZN'));
    expect(url).toContain(encodeURIComponent('YES (Prayagraj Metro Radius)'));
  });

  it('generates a pre-filled Speed Parts wholesale trade quote inquiry URL', () => {
    const part: SpeedPart = {
      sku: 'SP-HY-31922-2E900',
      name: 'Hyundai Genuine CRDi High-Pressure Diesel Fuel Filter',
      category: 'Engine Components',
      brand: 'Hyundai Mobis Genuine',
      oemNumber: '31922-2E900',
      vehicleCompatibility: ['Hyundai Creta', 'Kia Seltos'],
      wholesalePrice: 1450,
      mrp: 2180,
      moq: 5,
      stockStatus: 'IN STOCK (IMMEDIATE DISPATCH)',
      warranty: '12 Months Factory Warranty',
      isHyundaiPriority: true,
    };

    const url = generateSpeedPartsWhatsAppUrl(part, 10, 'Prayag Auto Care (Civil Lines)');

    expect(url).toContain(`https://wa.me/${WORKSHOP_PHONE}?text=`);
    expect(url).toContain(encodeURIComponent('SPEED PARTS (MEDICAL CHAURAHA)'));
    expect(url).toContain(encodeURIComponent('SP-HY-31922-2E900'));
    expect(url).toContain(encodeURIComponent('31922-2E900'));
    expect(url).toContain(encodeURIComponent('10 unit(s)'));
    expect(url).toContain(encodeURIComponent('₹14,500'));
    expect(url).toContain(encodeURIComponent('Prayag Auto Care (Civil Lines)'));
  });

  it('generates an email confirmation payload with reference ID and timestamp', () => {
    const reservation: ConciergeReservationPayload = {
      ownerName: 'Dr. Alok Nath',
      contactNumber: '+919839001122',
      emailAddress: 'alok.nath@hospital.org',
      vehicleMake: 'Hyundai',
      vehicleModel: 'Creta 1.5 CRDi',
      manufactureYear: '2022',
      serviceCategory: 'Engine Rebuilding & ECM Diagnostics',
      preferredDate: '2026-03-05',
      symptomsDiagnosticNotes: 'Black smoke on hard acceleration, loss of boost.',
      pickupRequired: false,
    };

    const emailPayload = generateEmailConfirmationPayload(reservation);

    expect(emailPayload.to).toBe('alok.nath@hospital.org');
    expect(emailPayload.subject).toContain('Hindustan Garage Est. 1960');
    expect(emailPayload.referenceId).toMatch(/^HG-1960-\d{6}$/);
    expect(emailPayload.bayLocation).toContain('56, M.G. Marg, George Town');
  });
});
