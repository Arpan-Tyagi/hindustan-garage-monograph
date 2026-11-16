import { ConciergeReservationPayload, SpeedPart } from '../types';

export const WORKSHOP_PHONE = '918796576868';
export const WORKSHOP_EMAIL = 'concierge@hindustangarage.com';

/**
 * Formats a WhatsApp URL for Concierge Bay Reservation
 */
export function generateReservationWhatsAppUrl(
  reservation: ConciergeReservationPayload
): string {
  const lines = [
    `*HINDUSTAN GARAGE (EST. 1960) — CONCIERGE BAY RESERVATION*`,
    `----------------------------------------------------`,
    `*Client Name:* ${reservation.ownerName || 'Not Specified'}`,
    `*Contact:* ${reservation.contactNumber || 'Not Specified'}`,
    `*Email:* ${reservation.emailAddress || 'Not Specified'}`,
    `*Vehicle:* ${reservation.vehicleMake} ${reservation.vehicleModel} (${reservation.manufactureYear})`,
    `*Service Requested:* ${reservation.serviceCategory}`,
    `*Preferred Bay Date:* ${reservation.preferredDate || 'Earliest Available'}`,
    `*Pickup & Valet Required:* ${reservation.pickupRequired ? 'YES (Prayagraj Metro Radius)' : 'NO (Self Drop-off)'}`,
    `*Diagnostic / Symptoms Notes:*`,
    `${reservation.symptomsDiagnosticNotes || 'Standard scheduled mechanical inspection & telemetry scan.'}`,
    `----------------------------------------------------`,
    `_GSTIN: 09ADQPA5477Q1ZN | 56, M.G. Marg, George Town, Prayagraj_`,
  ];

  const message = lines.join('\n');
  return `https://wa.me/${WORKSHOP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a WhatsApp URL for Speed Parts Trade Desk Wholesale Quotation
 */
export function generateSpeedPartsWhatsAppUrl(
  part: SpeedPart,
  customQuantity?: number,
  clientGarageName?: string
): string {
  const qty = customQuantity && customQuantity > 0 ? customQuantity : part.moq;
  const totalEstimated = qty * part.wholesalePrice;

  const lines = [
    `*SPEED PARTS (MEDICAL CHAURAHA) — WHOLESALE TRADE INQUIRY*`,
    `----------------------------------------------------`,
    `*Requesting Entity:* ${clientGarageName || 'Trade Partner / Private Motorist'}`,
    `*Part Name:* ${part.name}`,
    `*SKU Code:* ${part.sku}`,
    `*OEM Part No:* ${part.oemNumber}`,
    `*Manufacturer / Brand:* ${part.brand}`,
    `*Category:* ${part.category}`,
    `*Vehicle Compatibility:* ${part.vehicleCompatibility.join(', ')}`,
    `*Order Quantity:* ${qty} unit(s) [MOQ: ${part.moq}]`,
    `*Wholesale Benchmark Rate:* ₹${part.wholesalePrice.toLocaleString('en-IN')} / unit`,
    `*Estimated Lot Total:* ₹${totalEstimated.toLocaleString('en-IN')}`,
    `*Stock Status:* ${part.stockStatus}`,
    `----------------------------------------------------`,
    `_Trade Division of Hindustan Garage • Dispatch from Medical Chauraha, Prayagraj_`,
  ];

  const message = lines.join('\n');
  return `https://wa.me/${WORKSHOP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an Email confirmation payload for customer records
 */
export function generateEmailConfirmationPayload(
  reservation: ConciergeReservationPayload
) {
  return {
    to: reservation.emailAddress,
    from: WORKSHOP_EMAIL,
    subject: `Reservation Acknowledged [Hindustan Garage Est. 1960] - ${reservation.vehicleMake} ${reservation.vehicleModel}`,
    referenceId: `HG-1960-${Math.floor(100000 + Math.random() * 900000)}`,
    bayLocation: '56, M.G. Marg, George Town, Prayagraj 211002',
    timestamp: new Date().toISOString(),
    status: 'PENDING_WORKSHOP_INSPECTION_SLOT',
  };
}
