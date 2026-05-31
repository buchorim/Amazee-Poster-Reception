# Phase 5 — Opening QR Cards

## Goal
Create opening-card images by placing each participant's QR code into the provided opening template and adding the participant name below the QR box. This matters because the owner needs a clean first-screen QR experience before viewers open the result poster.

## Scope
- Use the provided `Pembukaan` template image.
- Use the provided AtypText font for participant names.
- Place QR codes inside the existing white QR box area.
- Add the matching participant name below the QR box with balanced spacing.
- Produce one sample first before batch generation.

## Features in This Phase

### QR Placement
The QR code is resized and centered inside the template's white QR box while preserving QR readability. Placement must respect the box size and leave a small clean margin so the QR does not touch the box edge.

### Participant Name Label
The participant name is rendered below the QR box using the provided AtypText medium font. Text must be horizontally centered relative to the QR box, remain readable against the background, and avoid overlapping the bottom edge of the image.

### Sample-First Workflow
Generate one sample card first using one existing QR code. Batch generation only proceeds after the owner approves the sample direction.

## UI Mockup

```txt
[opening template]

                         [ QR ]
                         Name
```

Mobile and desktop behavior are not applicable because this phase produces static image assets.

## Behavior & Logic Notes
The QR image must remain exact enough to scan after resizing. Image editing is deterministic local compositing, not generative image editing, because QR patterns must not be altered by AI image generation.

## Dependencies
- Phase 4 — Privacy Preserving Links completed.
- `Pembukaan/photo_6113981801396113460_y.jpg`
- `Pembukaan/Font/AtypTextTRIAL-Medium-BF65727125d9c4c.otf`
- Existing QR files in `Qr`.

## Acceptance Criteria
- A sample opening-card image is created.
- The QR is centered inside the template QR box.
- The name is rendered below the QR box using the provided font.
- The output preserves the template dimensions.
- The sample is visually inspectable before batch generation.
