# Hindustan Garage Motion & Animation System
**Hardware-Accelerated Engineering Choreography & Physics Specification**
*Version 1.0.0 | Est. 1960, Prayagraj*

---

## 1. Non-Negotiable Motion Principles

The animation system adheres to the **Ten Non-Negotiable Standards of UI Polish**:
1. **Sub-300ms UI Duration Budget**: Interactive actions (clicks, toggles, hover states) complete in $120\text{ms} - 280\text{ms}$. Only atmospheric page-level reveals extend to $600\text{ms} - 820\text{ms}$.
2. **GPU Composited Properties Only**: Never animate `width`, `height`, `top`, `left`, or `margin`. Animate exclusively via `transform` (`translate3d`, `scale`) and `opacity`.
3. **Zero Layout Thrashing Accordions**: Content height interpolation is executed using modern CSS Grid (`grid-template-rows: 0fr -> 1fr`) or Framer Motion height interpolation without JavaScript manual `scrollHeight` measurements.
4. **Strict `prefers-reduced-motion` Enforcement**: All hooks and components listen to the system accessibility preference, instantly resolving to static, high-contrast layouts when reduced motion is preferred.
5. **No Touch Cursor Overhead**: The precision drafting cursor is strictly gated behind `@media (pointer: fine)` so mobile and tablet devices never mount or calculate mouse coordinates.

---

## 2. Calibrated Cubic-Bezier Curves

```
================================================================================
NAME               BEZIER VALUE                   USE CASE
================================================================================
Architectural Snap  cubic-bezier(0.16, 1, 0.3, 1) Masked headings, step tabs, card entrance
Hardware Snap       cubic-bezier(0.19, 1, 0.22, 1) Tactile button fills, stamp imprints
Structural Draw     cubic-bezier(0.22, 1, 0.36, 1) Hairline divider width expansion
Mechanical Rollup   easeOutQuint: 1-(1-x)^5      Odometers, numeral rollups
Fluid Lerp Loop     lerp factor: 0.18            Precision drafting reticle cursor
================================================================================
```

---

## 3. Motion Archetypes & Component Architectures

### Archetype 1: Precision Horological Reticle Cursor (`CustomCursor.tsx`)
- **Composition**:
  - `Center Dot`: Instant 4px crimson point (`translate3d(clientX, clientY, 0)`, 0ms lag).
  - `Trailing Reticle`: 34px hairline drafting ring, animated via calibrated spring physics (`stiffness: 350, damping: 28`).
- **Contextual State Morphs**:
  - `default`: 34px hairline ring with 2% ink fill.
  - `inspect`: Expands to 74px with crimson border and `INSPECT` badge over photographs.
  - `trade`: Morphs with Royal Oxford Navy border and `TRADE RFQ` badge over B2B catalog items.
  - `reserve`: Morphs with Crimson border and `RESERVE` badge over booking triggers.

### Archetype 2: Masked Typography Reveal (`MaskedHeading.tsx`)
- **Mechanism**: The target heading is nested within an `overflow: hidden` bounding box.
- **Transform**: `translate3d(0, 115%, 0)` translates smoothly to `translate3d(0, 0, 0)` over 820ms using `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Formatting Preservation**: Preserves font weights, serif styling, and crimson emphasis (`italicWords`) even when `prefers-reduced-motion` is active.

### Archetype 3: Diagnostic Telemetry Decrypter (`TelemetryScramble.tsx`)
- **Concept**: Emulates an OBD-II CAN-Bus scan tool or spectrometer locking onto clean diagnostic telemetry.
- **Algorithm**: A rapid 26ms timer shuffles through a character bank (`0123456789ABCDEF#X/`) while linearly resolving characters from left to right over ~360ms.
- **Accessibility Guarantee**: Semantic DOM text remains fully readable by screen readers and search crawlers without auditory scramble confusion.

### Archetype 4: Tabular Mechanical Odometers (`RollingCounter.tsx`)
- **Algorithm**: Spring-driven deceleration curve.
- **Typography**: Formatted with `tabular-nums` and Indian numeral grouping (`en-IN`: `1,850+`).
- **Use Cases**:
  - `1,850+` Annual Car Intake
  - `4.9 / 5.0` Star Repute Rating
  - `14,000+` SKUs On-Shelf (Speed Parts Depot)
  - SLA Turnaround Clocks (32h, 18h, 24h)

### Archetype 5: Tactile Stamp Imprints (`stampImprintVariant`)
- **Physics**: Spring stamp impact on parchment (`scale: 1.28 → 1.0`, `rotate: -7° → -3°`, `stiffness: 450, damping: 24`).
- **Visual Feeling**: Physical ink stamp pressed onto ledger sheets.
