# Phase 7 — Add Andi Muh Adil Firdaus

## Goal
Add Andi Muh Adil Firdaus as an additional accepted participant across every existing delivery surface. This matters because the poster set, QR set, opening-card set, and no-QR name-card set must stay complete and aligned.

## Scope
- Create one accepted result poster for Andi Muh Adil Firdaus.
- Add Andi Muh Adil Firdaus to the static poster manifest and link reference.
- Generate a status-free QR code for Andi Muh Adil Firdaus.
- Generate a matching opening card with QR.
- Generate a matching opening card without QR while keeping the white box.
- Validate counts, dimensions, and public metadata cleanliness.

## Features in This Phase

### Accepted Poster
The accepted poster follows the existing Amazee result poster style and uses the public name-only filename `Andi Muh Adil Firdaus.jpg`.

### Status-Free Public Link
The new public slug is `andi-muh-adil-firdaus`. No public URL, QR filename, or manifest field may reveal reception status.

### Opening Cards
The new participant receives both opening-card variants:
- `Pembukaan/Output/Andi Muh Adil Firdaus Pembukaan.jpg`
- `NoqrWithName/Andi Muh Adil Firdaus No QR.jpg`

## UI Mockup

```txt
ASSET/Andi Muh Adil Firdaus.jpg
Qr/Andi Muh Adil Firdaus QR.png
Pembukaan/Output/Andi Muh Adil Firdaus Pembukaan.jpg
NoqrWithName/Andi Muh Adil Firdaus No QR.jpg
```

## Behavior & Logic Notes
The accepted poster image itself necessarily reveals the result after opened. Public filenames, URL slugs, QR filenames, and manifest metadata remain name-only.

## Dependencies
- Phase 4 — Privacy Preserving Links completed.
- Phase 5 — Opening QR Cards completed.
- Phase 6 — No QR Name Cards completed.

## Acceptance Criteria
- All four Andi Muh Adil Firdaus image outputs exist.
- Manifest contains 19 entries and includes the Andi slug.
- QR, opening, and no-QR folders each contain 19 relevant files.
- All generated images are `720x1280` except QR PNGs, which remain square QR images.
- New public poster link renders after publication.
