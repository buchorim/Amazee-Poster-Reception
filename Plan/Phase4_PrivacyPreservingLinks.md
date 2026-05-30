# Phase 4 — Privacy Preserving Links

## Goal
Remove reception status from QR URLs, public file paths, manifest data, and QR filenames so scanning or previewing a QR code does not reveal the result before the poster opens.

## Scope
- Change poster slugs from name-and-status to name-only.
- Rename public poster image files to name-only filenames.
- Remove status fields from the public manifest.
- Update link documentation and README examples.
- Regenerate QR code files with name-only filenames.
- Publish a clean public branch so the main repository view reflects the privacy-preserving scheme.

## Features in This Phase

### Name-Only Poster URLs
Each QR code opens a URL in the format `<GitHubPagesBaseUrl>/?p=<name-slug>`. The slug contains only the participant name, such as `akbar-vijaya`. The URL must not include words that reveal reception status.

### Status-Free Public Asset Paths
The browser loads poster files from name-only paths such as `ASSET/Akbar Vijaya.jpg`. The public manifest contains only slug, name, and image path. It does not include a status field.

### Status-Free QR Filenames
Generated QR files use `<Name> QR.png`. This keeps local QR selection readable while avoiding status leakage through filenames.

## UI Mockup
Valid poster link:

```txt
https://buchorim.github.io/Amazee-Poster-Reception/?p=akbar-vijaya
```

The opened page still displays the matching poster image only.

## Behavior & Logic Notes
The poster image itself necessarily reveals the result after the page opens, because the result is part of the poster content. The privacy boundary for this phase is the QR URL, public path, manifest metadata, and QR filename.

## Dependencies
- Phase 3 — GitHub Pages QR Delivery completed.

## Acceptance Criteria
- All public poster URLs use name-only slugs.
- `Data/Posters.json` contains no status field.
- `ASSET` image filenames contain no status words.
- `Qr` filenames contain no status words.
- Every regenerated QR code encodes the final name-only public URL.
- GitHub Pages displays valid posters for name-only URLs.
