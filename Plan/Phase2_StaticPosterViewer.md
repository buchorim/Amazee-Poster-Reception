# Phase 2 — Static Poster Viewer

## Goal
Create a static GitHub Pages-compatible website where each poster can be opened from its own URL and displayed directly. This matters because every poster link can be turned into a QR code without needing a backend service.

## Scope
- Add a static `index.html` viewer.
- Add minimal styling that displays only the target poster image.
- Add a poster manifest mapping URL slugs to image files.
- Add a link reference document for QR code preparation.
- Add a short GitHub Pages setup guide.
- Validate that all manifest image paths exist.

## Features in This Phase

### Poster URL Viewer
The viewer reads the `p` query parameter from the URL. If the slug exists in the poster manifest, the page displays only that poster image, scaled to fit the visitor's screen. The page must work on GitHub Pages with direct URLs such as `/?p=akbar-vijaya`.

If the slug is missing or invalid, the page displays a small plain error state so the owner can detect a broken QR target. It must not show marketing content, navigation, or unrelated UI.

### Poster Manifest
A JSON manifest lists every poster slug, participant name, and image path. This manifest is the single source used by the viewer and by link documentation.

### QR Link Reference
A Markdown file lists the poster slugs and relative URLs so the owner can combine them with the final GitHub Pages base URL before generating QR codes.

### GitHub Pages Setup Guide
A README explains how to enable GitHub Pages from the repository root and how to combine the published base URL with poster slugs.

## UI Mockup
Valid poster link:

```txt
┌──────────────────────────────┐
│                              │
│        [poster image]        │
│        fills viewport        │
│                              │
└──────────────────────────────┘
```

Mobile behavior: the poster uses the full viewport width while preserving aspect ratio. Desktop behavior: the poster is centered and constrained by viewport height. Loading state is minimal and only appears while the image target is being resolved. Invalid links show a concise error message.

## Behavior & Logic Notes
The site must use static browser-side JavaScript only. URL slugs must be stable because they will be encoded in QR codes. Spaces in original image filenames must be URL encoded by the browser when the image is loaded.

## Dependencies
- Phase 1 — Image Asset Renaming completed.
- GitHub Pages configured to publish from the repository root.

## Acceptance Criteria
- `index.html` can display a poster from a `?p=<slug>` URL.
- Every image in `ASSET` has a manifest entry.
- Every manifest image path points to an existing file.
- README includes the GitHub Pages publishing flow and URL format.
- The page has no required build step.
- The valid poster page visually displays the selected poster only.
