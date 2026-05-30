# Phase 1 — Image Asset Renaming

## Goal
Rename the existing poster images so each file can be identified directly from the participant name during local organization. This matters because generated image filenames are hard to search, sort, and deliver.

## Scope
- Read each poster image in `ASSET`.
- Extract the visible participant name.
- Rename each file to a readable owner-facing filename.
- Verify the final asset count and target filenames.

## Features in This Phase

### Filename Normalization
Each poster image is renamed using the participant name visible on the poster. Existing image content, dimensions, and extension remain unchanged. Phase 4 supersedes the initial status-bearing filename scheme for public delivery.

## UI Mockup
No user interface is included in this phase. The expected user-facing result is a folder listing similar to:

```txt
ASSET/
  Akbar Vijaya.jpg
  Example Participant - Result.jpg
```

Desktop and mobile behavior are not applicable because this phase changes local file organization only.

## Behavior & Logic Notes
Renaming must be one-to-one: every original generated filename maps to exactly one descriptive filename. If a target filename already exists, the operation must stop and report the conflict instead of overwriting.

## Dependencies
- Completed visual inspection of all images in `ASSET`.

## Acceptance Criteria
- All 18 original `.jpg` files are renamed.
- File count in `ASSET` remains 18.
- Every filename follows the active asset naming rule for the current delivery phase.
- No image content is edited.
