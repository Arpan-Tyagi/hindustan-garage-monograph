import { describe, it, expect } from 'vitest';
import { archiveVehicles } from '../data/archiveData';
import { VehicleCategory } from '../types';

describe('Workshop Archive Ledger Engine', () => {
  it('contains historical vehicles with detailed telemetry and inspection stamps', () => {
    expect(archiveVehicles.length).toBeGreaterThanOrEqual(5);

    archiveVehicles.forEach((vehicle) => {
      expect(vehicle.ledgerNumber).toMatch(/^HG-ARCH-\d{4}-\d{3}$/);
      expect(vehicle.inspectionStamp).toBeTruthy();
      expect(vehicle.technicianSignOff).toBeTruthy();
      expect(vehicle.turnaroundHours).toBeGreaterThan(0);
      expect(vehicle.partsReplaced.length).toBeGreaterThan(0);
    });
  });

  it('filters vehicles correctly by category', () => {
    const categories: VehicleCategory[] = [
      'european-luxury',
      'everyday-four-wheeler',
      'vintage-restoration',
      'fleet-commercial',
    ];

    categories.forEach((cat) => {
      const filtered = archiveVehicles.filter((v) => v.category === cat);
      expect(filtered.length).toBeGreaterThan(0);
      filtered.forEach((v) => expect(v.category).toBe(cat));
    });
  });
});
