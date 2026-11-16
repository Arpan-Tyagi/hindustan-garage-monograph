# ADR 0001: Vite + React + Tailwind CSS + Vitest for Editorial Luxury Monograph

## Status
Accepted

## Context
Hindustan Garage (Est. 1960) requires an ultra-luxury editorial digital monograph reflecting a 66-year heritage. Benchmarks include Singer Vehicle Design, Leica Camera, and Patek Philippe. The site explicitly rejects flashy 3D gimmicks in favor of timeless editorial permanence, zero scroll-jacking, an asymmetric 12-column museum grid, fine rule lines (`#D6D1C4`), and archival typography.

## Decision
We select:
1. **Vite + React 18 + TypeScript**: Lightning-fast build times, zero runtime overhead, strictly typed domain models.
2. **Tailwind CSS with Custom Design Tokens**: Precise archival palette (`#F5F2EB` parchment, `#141413` espresso/charcoal ink, `#8C1813` crimson, `#12355B` royal oxford navy, `#B4925A` warm brass) and custom cubic-bezier easing (`cubic-bezier(0.19, 1, 0.22, 1)`).
3. **Lucide Icons (Refined Stroke 1.25px / 1.5px)**: Architecture-grade precision iconography without heavy visual weight.
4. **Vitest**: Fast, headless unit and integration testing verifying booking payloads, catalog search/filter, and bay telemetry.

## Consequences
- Fast initial load time and sub-second interaction speeds.
- Clean separation of domain data (`src/data/`), types (`src/types/`), and UI components (`src/components/`).
- Full test coverage for critical business logic (WhatsApp reservation dispatch and Speed Parts wholesale RFQ formatting).
