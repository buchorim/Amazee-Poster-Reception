# Phase 6 — No QR Name Cards

## Goal
Create a second opening-card set without QR codes, showing only participant names on the existing opening template while keeping the white QR box area. This matters because the owner needs a cleaner version for contexts where QR scanning is not needed.

## Scope
- Use the existing opening template from `Pembukaan`.
- Keep the existing blank white QR placeholder area.
- Render each participant name using the provided AtypText font.
- Save all generated cards in the root `NoqrWithName` folder.
- Validate output count and dimensions.

## Features in This Phase

### QR-Free Placeholder
The white QR placeholder area from the template stays visible. The output must not contain a QR code, but the white box remains as part of the design.

### Name-Only Label
Participant names are rendered in the same bottom-right visual area as the approved opening-card sample. Short names use a larger single line. Long names may wrap to two lines to remain readable and balanced.

## UI Mockup

```txt
[opening template]

                         Name
```

## Behavior & Logic Notes
The generated cards are static raster images. No public URL, QR payload, or reception status metadata is added to these files. The visible white box is preserved from the original template.

## Dependencies
- Phase 5 — Opening QR Cards completed.
- `Pembukaan/photo_6113981801396113460_y.jpg`
- `Pembukaan/Font/AtypTextTRIAL-Medium-BF65727125d9c4c.otf`
- Existing participant names from QR filenames or poster manifest.

## Acceptance Criteria
- `NoqrWithName` contains 18 `.jpg` files.
- Every output is `720x1280`.
- No output includes a QR code.
- The blank white QR placeholder square remains visible.
- Names are readable and centered in the intended bottom-right area.
