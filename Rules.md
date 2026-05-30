# Rules — Amazee SNBT Style Poster

Last Updated: 2026-05-30

---

## Engineering Rules

### R-001 — Preserve Original Image Content
Image asset maintenance must not alter pixels, dimensions, compression, or visual content unless the owner explicitly requests image editing. A violation is resizing, recompressing, recoloring, or regenerating poster files during a filename-only task.

---

## Design Rules

### R-002 — [REMOVED] Poster Asset Naming
Removed on 2026-05-30. Public delivery assets must no longer expose reception status in filenames, URL slugs, QR filenames, or manifest data.

---

## Release Rules

### R-003 — Validate Asset Inventory Before Delivery
Before reporting asset maintenance complete, verify the final image count, target filenames, and that every original source file has a renamed equivalent. A violation is claiming completion without checking the folder contents after the operation.

---

### R-004 — Static GitHub Pages Only
The poster delivery system must remain deployable as plain GitHub Pages with no server, database, build step, or private runtime requirement. A violation is adding backend-only routing, Node-dependent rendering, or deployment steps that prevent the repository from working as a static site.

---

### R-005 — [REMOVED] QR Codes Use Public Poster Links
Removed on 2026-05-30. This rule exposed status in QR filenames and was replaced by R-006.

---

### R-006 — Status-Free Public URLs and QR Names
Public URLs, public image paths, manifest fields, and QR filenames must not reveal whether a participant is accepted or not accepted. Use name-only slugs such as `akbar-vijaya` and QR filenames such as `Akbar Vijaya QR.png`. A violation is using status words in URL query values, public asset filenames, QR filenames, or machine-readable manifest records.
