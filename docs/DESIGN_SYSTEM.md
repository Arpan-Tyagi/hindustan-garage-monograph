# Hindustan Garage Design System Specification
**Atelier Architectural Heritage Aesthetic & Multi-Brand Engineering Standards**
*Version 1.0.0 | Est. 1960, Prayagraj*

---

## 1. Aesthetic Thesis & Architectural Foundations

The design language of **Hindustan Garage & Speed Parts** rejects generic SaaS templates, medical clinic sterilities, and dark-mode neon gamer tropes. It is rooted in **Swiss International Typographic Style**, **Leica precision engineering**, and **Porsche Design technical documentation**.

### Design Principles
1. **Physicality & Calibration**: The interface feels like a machined drafting table or an archival museum monograph. Every border, gauge, and telemetry stamp communicates real workshop tolerances.
2. **Archival Parchment Tone**: Avoid pure clinical white (`#FFFFFF`) for background canvases. The foundation is an Archival Parchment (`#F5F2EB`), providing tactile depth and anti-glare reading comfort.
3. **1-Pixel Hairlines**: Boundaries and data cells are separated by razor-thin, structural lines (`#D6D1C4`) rather than thick dropshadows or bulky borders.
4. **Dual-Bezel Enclosure**: Key focal elements (Bay cards, Depot cards, Reservation dockets) utilize a recessed double-bezel boundary (`bezel-container`), conveying the presence of physical instrument bezels.
5. **Authentic Workshop Telemetry**: Every metric reflects actual mechanical operations ($\pm 0.05\text{mm}$, $\Delta E < 0.2$, $60^\circ\text{C}$ bake, $0.00^\circ$ toe/camber).

---

## 2. Color Palette & Semantic Tokens

```
================================================================================
PALETTE TOKEN          HEX CODE     ROLE & SEMANTIC PURPOSE
================================================================================
Archival Parchment     #F5F2EB      Base viewport parchment canvas; anti-glare
Parchment Light        #FAF8F4      Elevated module cards and floating dockets
Parchment Dark         #EDE8DE      Telemetry badges & recessed specification containers
Hairline Rule          #D6D1C4      Machined 1px technical divider hairlines
Coachbuilder Ink       #141413      High-contrast deep carbon ink primary text
Ink Muted              #4A4844      Secondary technical specifications & prose
Ink Faint              #66635D      Tertiary micro-metadata & time stamps
Heritage Crimson       #8C1813      Primary institutional mark, stamps & active states
Royal Oxford Navy      #12355B      Speed Parts wholesale depot & B2B trade branding
Oxford Dark            #0A1E33      Enveloping depot background canvas
Warm Atelier Brass     #B4925A      Horological accents, star ratings & verified seals
Status Emerald         #10B981      Live telemetry operational LED indicator
================================================================================
```

---

## 3. Typographic Hierarchy

The system pairs an authoritative serif heading font with clean geometric sans-serif for reading comfort, grounded by a monospaced tabular font for telemetry data.

| Role | Font Family | Size Range | Weight / Tracking | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Architectural Headings** | Cormorant Garamond / Playfair Display | 24px – 60px | Normal (400) / SemiBold (600) | Master H1/H2 headlines, Section titles |
| **Technical Nomenclature** | JetBrains Mono | 10px – 13px | Medium/Bold / Tracking-Ledger (`+0.12em`) | Bay numbers, GSTIN, Coordinates, SKUs |
| **Editorial Prose** | Plus Jakarta Sans | 13px – 16px | Normal (400) / Leading-Relaxed (`1.6`) | Descriptive overviews, Journal articles, FAQs |
| **Tabular Numbers** | JetBrains Mono / Tabular | 18px – 36px | Bold (700) / `tabular-nums` | Mechanical Odometers, SLA turnaround clocks |

---

## 4. UI Components & Layout Geometry

### Double-Bezel Card Enclosure
```css
.bezel-container {
  border: 1px solid #D6D1C4;
  box-shadow: 
    0 2px 4px rgba(20, 20, 19, 0.04), 
    0 16px 36px -12px rgba(20, 20, 19, 0.08);
  border-radius: 6px;
  background-color: #FAF8F4;
}
```

### Radius Tokens
- `rounded`: `4px` – `6px` (Sharp, precision machined corner profile; avoids bubbly modern consumer app rounding).
- `rounded-full`: `9999px` (Strictly reserved for filter chips, tags, and status beacons).
