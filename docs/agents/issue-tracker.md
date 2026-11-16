# Issue Tracker: Local Markdown

Issues, tasks, and feature specifications for Hindustan Garage and Speed Parts live as markdown files under `.scratch/`.

## Conventions

- One feature or epic per directory: `.scratch/<feature-slug>/`
- The specification document is `.scratch/<feature-slug>/spec.md`
- Implementation tickets are numbered individually: `.scratch/<feature-slug>/issues/<NN>-<slug>.md`
- Triage state is recorded with a `Status:` header (see `triage-labels.md` for valid role strings)
- Comments and logs append under `## Comments`

## Wayfinding Operations

- Map: `.scratch/<effort>/map.md`
- Child tickets: `.scratch/<effort>/issues/NN-<slug>.md`
- Blocking: `Blocked by: NN`
- Claim: `Status: claimed`
- Resolve: `Status: resolved`
