import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

describe('Responsive Layout & Interactive Controls', () => {
  it('toggles the mobile/tablet navigation menu and navigates via drawer links', () => {
    render(<App />);

    // Toggle button should be present with aria-label
    const menuToggle = screen.getByRole('button', { name: /Toggle Navigation Menu/i });
    expect(menuToggle).toBeInTheDocument();
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false');

    // Click to open drawer
    fireEvent.click(menuToggle);
    expect(menuToggle).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/Index of Monograph Sections/i)).toBeInTheDocument();
    expect(screen.getByText(/Chapter II: Ledger of Services/i)).toBeInTheDocument();

    // Click drawer link to close
    const ledgerLink = screen.getByText(/Chapter II: Ledger of Services/i);
    fireEvent.click(ledgerLink);
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('submits concierge reservation and shows responsive confirmation modal', async () => {
    render(<App />);

    const nameInput = screen.getByPlaceholderText(/e\.g\. Adv\. R\. S\. Shukla/i);
    const phoneInput = screen.getByPlaceholderText(/\+91 98390 XXXXX/i);
    const makeInput = screen.getByPlaceholderText(/e\.g\. Mercedes-Benz \/ Hyundai/i);
    const modelInput = screen.getByPlaceholderText(/e\.g\. E-Class E220d \/ Creta 1\.5/i);
    const submitBtn = screen.getByRole('button', { name: /Transmit Concierge Booking/i });

    fireEvent.change(nameInput, { target: { value: 'Justice K. N. Singh' } });
    fireEvent.change(phoneInput, { target: { value: '9839012345' } });
    fireEvent.change(makeInput, { target: { value: 'BMW' } });
    fireEvent.change(modelInput, { target: { value: '520d Luxury Line' } });

    fireEvent.click(submitBtn);

    // Modal should appear
    const modalDialog = screen.getByRole('dialog');
    expect(modalDialog).toBeInTheDocument();
    expect(modalDialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByText(/Bay Allocation Initiated/i)).toBeInTheDocument();
    expect(screen.getByText(/Justice K\. N\. Singh/i)).toBeInTheDocument();
    expect(screen.getByText(/Confirm via WhatsApp/i)).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole('button', { name: /Close Confirmation Modal/i });
    expect(closeBtn).toHaveClass('min-h-[44px]');
    fireEvent.click(closeBtn);
    await waitFor(() => {
      expect(screen.queryByText(/Bay Allocation Initiated/i)).not.toBeInTheDocument();
    });
  });

  it('opens and closes the Technical Journal discourse reader modal with accessible dialog role', async () => {
    render(<App />);

    const readButtons = screen.getAllByRole('button', { name: /Read Discourse/i });
    expect(readButtons.length).toBeGreaterThan(0);
    expect(readButtons[0]).toHaveClass('min-h-[44px]');

    // Open first article modal
    fireEvent.click(readButtons[0]);

    const modalDialog = screen.getByRole('dialog');
    expect(modalDialog).toBeInTheDocument();
    expect(modalDialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByText(/ARCHIVAL DISCOURSE/i)).toBeInTheDocument();
    expect(screen.getByText(/Verified Technical Parameters & Benchmarks:/i)).toBeInTheDocument();

    // Close article modal
    const closeArticleBtn = screen.getByRole('button', { name: /Close Article/i });
    expect(closeArticleBtn).toHaveClass('min-h-[44px]');
    fireEvent.click(closeArticleBtn);

    await waitFor(() => {
      expect(screen.queryByText(/ARCHIVAL DISCOURSE/i)).not.toBeInTheDocument();
    });
  });

  it('ensures touch targets for mobile buttons, inputs, tabs, and filters meet minimum standards', () => {
    render(<App />);

    // Concierge Desk inputs
    const nameInput = screen.getByPlaceholderText(/e\.g\. Adv\. R\. S\. Shukla/i);
    const phoneInput = screen.getByPlaceholderText(/\+91 98390 XXXXX/i);
    expect(nameInput).toHaveClass('min-h-[44px]');
    expect(phoneInput).toHaveClass('min-h-[44px]');

    // Speed Parts search and garage inputs
    const searchInput = screen.getByPlaceholderText(/Search by part name, SKU/i);
    const garageInput = screen.getByPlaceholderText(/Your Garage Name/i);
    expect(searchInput).toHaveClass('min-h-[44px]');
    expect(garageInput).toHaveClass('min-h-[44px]');

    // Workshop Archive chassis filter buttons
    const filterBtn = screen.getByRole('button', { name: /European Luxury/i });
    expect(filterBtn.className).toMatch(/min-h-\[44px\]/);

    // Master Ledger discipline selector tabs
    const tabButtons = screen.getAllByRole('button', { name: /SPEC-01-ENG/i });
    expect(tabButtons.length).toBeGreaterThan(0);
    expect(tabButtons[0]).toHaveClass('min-h-[44px]');
  });

  it('adjusts Speed Parts lot quantity using touch-friendly +/- buttons', () => {
    render(<App />);

    const increaseButtons = screen.getAllByRole('button', { name: /Increase quantity/i });
    const decreaseButtons = screen.getAllByRole('button', { name: /Decrease quantity/i });

    expect(increaseButtons.length).toBeGreaterThan(0);
    expect(decreaseButtons.length).toBeGreaterThan(0);

    // Find the first part's lot quantity span
    const firstIncreaseBtn = increaseButtons[0];
    const initialQtyText = firstIncreaseBtn.previousElementSibling?.textContent;
    const initialQty = parseInt(initialQtyText || '0', 10);

    // Increment
    fireEvent.click(firstIncreaseBtn);
    const incrementedQty = parseInt(firstIncreaseBtn.previousElementSibling?.textContent || '0', 10);
    expect(incrementedQty).toBe(initialQty + 1);

    // Decrement
    const firstDecreaseBtn = decreaseButtons[0];
    fireEvent.click(firstDecreaseBtn);
    const decrementedQty = parseInt(firstIncreaseBtn.previousElementSibling?.textContent || '0', 10);
    expect(decrementedQty).toBe(initialQty);
  });

  it('expands and collapses vehicle diagnostic records in Workshop Archive', async () => {
    render(<App />);

    const expandButtons = screen.getAllByRole('button', { name: /View Replaced Parts & Diagnostics/i });
    expect(expandButtons.length).toBeGreaterThan(0);

    fireEvent.click(expandButtons[0]);

    expect(screen.getByText(/Core Interventions:/i)).toBeInTheDocument();
    expect(screen.getByText(/Replaced OEM Parts Registry:/i)).toBeInTheDocument();

    // Collapse
    const hideBtn = screen.getByRole('button', { name: /Hide Replaced Parts & Interventions/i });
    fireEvent.click(hideBtn);

    await waitFor(() => {
      expect(screen.queryByText(/Core Interventions:/i)).not.toBeInTheDocument();
    });
  });

  it('toggles FAQ accordions cleanly', async () => {
    render(<App />);

    const faqQuestions = screen.getAllByText(/Why should I service my Mercedes-Benz, BMW, or Audi at Hindustan Garage/i);
    expect(faqQuestions.length).toBeGreaterThan(0);

    // Default open faq-01
    expect(screen.getByText(/Franchised luxury dealerships in Lucknow require a grueling 200 km flatbed journey/i)).toBeInTheDocument();

    // Click to close
    fireEvent.click(faqQuestions[0]);

    await waitFor(() => {
      expect(screen.queryByText(/Franchised luxury dealerships in Lucknow require a grueling 200 km flatbed journey/i)).not.toBeInTheDocument();
    });
  });
});
