import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Hindustan Garage Monograph UI Integration', () => {
  it('renders the archival masthead with brand and live telemetry', () => {
    render(<App />);

    const brandSpans = screen.getAllByText(/HINDUSTAN GARAGE/i);
    expect(brandSpans.length).toBeGreaterThan(0);
    expect(screen.getAllByText(/EST\. 1960/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/LIVE TELEMETRY/i)).toBeInTheDocument();
    expect(screen.getAllByText(/09ADQPA5477Q1ZN/i).length).toBeGreaterThan(0);
  });

  it('renders all required chapters in sequence', () => {
    render(<App />);

    expect(screen.getAllByText(/CHAPTER I/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CHAPTER II/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CHAPTER III/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CHAPTER IV/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CHAPTER V/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CHAPTER VI/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CHAPTER VII/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/CHAPTER VIII/i).length).toBeGreaterThan(0);
  });

  it('allows filtering vehicles in the Workshop Archive', () => {
    render(<App />);

    const europeanFilterBtn = screen.getByRole('button', { name: /European Luxury/i });
    expect(europeanFilterBtn).toBeInTheDocument();

    fireEvent.click(europeanFilterBtn);

    const mercedesElements = screen.getAllByText(/Mercedes-Benz E-Class/i);
    expect(mercedesElements.length).toBeGreaterThan(0);
  });

  it('filters Speed Parts inventory by search keyword', () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/Search by part name, SKU/i);
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'Bilstein' } });

    expect(screen.getByText(/Bilstein B4 Rear Airmatic Suspension Bellows/i)).toBeInTheDocument();
  });
});
