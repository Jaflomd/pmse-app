# Intake Unificado App

Static GitHub Pages package for the Intake Unificado control shell. It
includes the local case register, intake type selection, Control /
seguimiento mode, and the embedded clinical engine.

## Access

The app includes a client-side access gate. This is a casual barrier only:
static GitHub Pages apps cannot provide strong authentication.
The published page also asks crawlers not to index it.

## Privacy

- Local-first: shell and clinical state are stored in browser `localStorage`.
- Do not enter identifiable patient data.
- No backend is included.
- No external AI API is connected.

## Source

Built from the iOS control model in `3-output/unified-intake/ios/IntakeUnificado`
and the clinical engine in `3-output/unified-intake/intake-unificado.html`.
