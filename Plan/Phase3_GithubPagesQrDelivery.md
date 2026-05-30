# Phase 3 — GitHub Pages QR Delivery

## Goal
Publish the static poster viewer to GitHub Pages and generate QR code images that open each participant's public poster link. This matters because the owner needs ready-to-share QR assets, not only local website files.

## Scope
- Create a GitHub repository named `Amazee-Poster-Reception`.
- Push the static website and poster assets to the repository.
- Enable GitHub Pages from the repository root.
- Resolve the final public GitHub Pages base URL.
- Generate QR code PNG files in `Qr`.
- Update link documentation to use the final base URL.

## Features in This Phase

### GitHub Repository Publication
The project is pushed to a new GitHub repository using the owner-provided access token only for GitHub API and push operations. The token must not be written into source files, documentation, git remote URLs, or generated artifacts.

If the requested repository already exists, the workflow must use the existing repository only if it belongs to the authenticated owner and can be updated safely. Otherwise, report the conflict.

### GitHub Pages Deployment
GitHub Pages is configured to publish from the `main` branch at repository root. The published site must serve `index.html`, `Data/Posters.json`, and all poster image files.

### QR Code Generation
Each poster receives one QR code PNG in `Qr`. The QR encodes the final public URL in the format `<GitHubPagesBaseUrl>/?p=<slug>`. Phase 4 supersedes the original filename scheme so QR filenames no longer reveal outcome metadata.

## UI Mockup
No additional website UI is added in this phase. Existing valid poster links still show only the target poster image.

Generated local file layout:

```txt
Qr/
  Akbar Vijaya QR.png
  Example Participant QR.png
```

## Behavior & Logic Notes
GitHub repository names cannot safely rely on spaces, so the repository slug is `Amazee-Poster-Reception` while the human project name remains Amazee Poster Reception. QR codes must not be generated until the public base URL is known.

## Dependencies
- Phase 2 — Static Poster Viewer completed.
- Owner-provided GitHub PAT with repository and Pages permissions.
- Network access to GitHub.

## Acceptance Criteria
- GitHub repository exists and contains the static site.
- GitHub Pages is enabled for the repository root.
- `Qr` contains 18 PNG files.
- Each QR filename follows the active privacy rule from Phase 4.
- Each QR code encodes the final public GitHub Pages poster URL.
- Public poster links are validated after deployment.
