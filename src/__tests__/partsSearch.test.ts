import { describe, it, expect } from 'vitest';
import { speedPartsCatalog } from '../data/partsData';

describe('Speed Parts Catalog Engine', () => {
  it('contains Hyundai OEM genuine parts with priority flags', () => {
    const hyundaiParts = speedPartsCatalog.filter((p) => p.isHyundaiPriority);
    expect(hyundaiParts.length).toBeGreaterThanOrEqual(6);

    const fuelFilter = hyundaiParts.find((p) => p.sku === 'SP-HY-31922-2E900');
    expect(fuelFilter).toBeDefined();
    expect(fuelFilter?.brand).toContain('Hyundai Mobis Genuine');
    expect(fuelFilter?.wholesalePrice).toBeLessThan(fuelFilter?.mrp || 0);
  });

  it('filters catalog accurately by category and search keyword', () => {
    const brakeParts = speedPartsCatalog.filter((p) => p.category === 'Braking Systems');
    expect(brakeParts.length).toBeGreaterThan(0);

    const query = 'Creta'.toLowerCase();
    const cretaCompatible = speedPartsCatalog.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.vehicleCompatibility.some((v) => v.toLowerCase().includes(query))
    );
    expect(cretaCompatible.length).toBeGreaterThan(0);
  });

  it('guarantees valid wholesale margin calculation and MOQ values', () => {
    speedPartsCatalog.forEach((part) => {
      expect(part.wholesalePrice).toBeGreaterThan(0);
      expect(part.mrp).toBeGreaterThan(part.wholesalePrice);
      expect(part.moq).toBeGreaterThanOrEqual(1);
      expect(part.oemNumber).toBeTruthy();
      expect(part.sku).toBeTruthy();
    });
  });
});
