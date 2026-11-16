# Domain Docs

Guidelines for reading and maintaining domain documentation across the engineering workflow.

## Source of Truth

- **`CONTEXT.md`** at the repository root defines the ubiquitous domain language, architectural seams, and workshop operational concepts.
- **`docs/adr/`** records immutable Architectural Decision Records.

## Ubiquitous Language Rules

All code variables, component names, issue tickets, and diagnostic models must use the exact terms defined in `CONTEXT.md`:
- `WorkshopBay`: Individual service bays 01 to 08 with telemetry states.
- `EuropeanMarque`: Luxury marques requiring specialized tooling (Mercedes-Benz, BMW, Audi, Porsche, Jaguar).
- `EverydayFourWheeler`: Domestic and Japanese/Korean commuter & utility four-wheelers (Hyundai, Maruti Suzuki, Toyota, Honda, Tata, Mahindra).
- `SpeedPartsCatalog`: Wholesale and trade OEM parts inventory.
- `DowndraftPaintBooth`: Computerized pressurized paint refinishing bay with PPG/Glasurit spectrometry.
- `ConciergeReservation`: Private bay reservation engine with WhatsApp/Email dispatch.
