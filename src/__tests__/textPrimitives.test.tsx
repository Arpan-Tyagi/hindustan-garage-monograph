import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MaskedHeading } from '../components/text/MaskedHeading';
import { RollingCounter } from '../components/text/RollingCounter';
import { TelemetryScramble } from '../components/text/TelemetryScramble';

describe('Typographic Animation Primitives', () => {
  describe('MaskedHeading', () => {
    it('renders heading text within the specified HTML tag', () => {
      render(
        <MaskedHeading as="h1" data-testid="heading">
          Sixty-Six Years of Uncompromising Automotive Stewardship
        </MaskedHeading>
      );
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toContain('Sixty-Six');
      expect(heading.textContent).toContain('Uncompromising');
    });

    it('applies italic styling to matched italic words', () => {
      const { container } = render(
        <MaskedHeading as="h2" italicWords={['Uncompromising']}>
          Sixty-Six Years of Uncompromising Automotive Stewardship
        </MaskedHeading>
      );
      const italicSpan = container.querySelector('.italic');
      expect(italicSpan).not.toBeNull();
      expect(italicSpan?.textContent).toBe('Uncompromising');
    });
  });

  describe('RollingCounter', () => {
    it('renders formatted integer with suffix and prefix', () => {
      render(
        <RollingCounter value={1850} suffix="+ CARS" prefix="Over " />
      );
      expect(screen.getByText(/1,850\+ CARS/)).toBeInTheDocument();
    });

    it('renders decimal formatted values', () => {
      render(
        <RollingCounter value={4.9} decimals={1} suffix=" / 5.0" />
      );
      expect(screen.getByText(/4\.9 \/ 5\.0/)).toBeInTheDocument();
    });
  });

  describe('TelemetryScramble', () => {
    it('renders technical identification strings without truncation', () => {
      render(
        <TelemetryScramble text="09ADQPA5477Q1ZN" />
      );
      expect(screen.getByText(/09ADQPA5477Q1ZN/)).toBeInTheDocument();
    });
  });
});
