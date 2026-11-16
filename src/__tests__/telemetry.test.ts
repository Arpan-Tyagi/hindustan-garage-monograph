import { describe, it, expect } from 'vitest';
import { liveBaysTelemetry, getWorkshopOperationalStatus } from '../data/telemetryData';

describe('Bay Telemetry Engine', () => {
  it('monitors all 8 operational workshop bays at 56 M.G. Marg', () => {
    expect(liveBaysTelemetry).toHaveLength(8);
    const bayIds = liveBaysTelemetry.map((b) => b.bayId);
    expect(bayIds).toEqual([
      'BAY-01',
      'BAY-02',
      'BAY-03',
      'BAY-04',
      'BAY-05',
      'BAY-06',
      'BAY-07',
      'BAY-08',
    ]);
  });

  it('calculates real-time workshop operational statistics accurately', () => {
    const status = getWorkshopOperationalStatus();
    expect(status.isOpen).toBe(true);
    expect(status.totalBays).toBe(8);
    expect(status.activeBays).toBeGreaterThan(0);
    expect(status.standbyBays).toBeGreaterThanOrEqual(1);
    expect(status.operatingHours).toContain('09:00 - 19:30 IST');
    expect(status.location).toContain('56, M.G. Marg, George Town');
  });
});
