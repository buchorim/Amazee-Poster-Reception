// / - Arinara Network © 2026 - /
// This source code is the exclusive property of Arinara Network.
// Unauthorized use, reproduction, distribution, or modification of this
// code — in whole or in part — for any purpose whatsoever is strictly
// prohibited without prior written consent from Arinara Network as the
// sole legal owner of this codebase.

const manifestUrl = "Data/Posters.json";
const posterImage = document.getElementById("PosterImage");
const statusMessage = document.getElementById("StatusMessage");

function getPosterSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("p")?.trim().toLowerCase() ?? "";
}

function showMessage(message) {
  posterImage.hidden = true;
  posterImage.removeAttribute("src");
  statusMessage.hidden = false;
  statusMessage.textContent = message;
}

function showPoster(poster) {
  const imagePath = encodeURI(poster.image);

  const revealPoster = () => {
    statusMessage.hidden = true;
    posterImage.hidden = false;
  };

  posterImage.onload = revealPoster;

  posterImage.onerror = () => {
    showMessage("Poster tidak bisa dibuka.");
  };

  document.title = poster.name;
  posterImage.alt = `Poster ${poster.name}`;
  posterImage.src = imagePath;

  if (posterImage.complete && posterImage.naturalWidth > 0) {
    revealPoster();
  }
}

async function loadPoster() {
  const slug = getPosterSlug();

  if (!slug) {
    showMessage("Link poster belum lengkap.");
    return;
  }

  try {
    const response = await fetch(manifestUrl, { cache: "no-cache" });

    if (!response.ok) {
      throw new Error(`Manifest request failed with ${response.status}`);
    }

    const posters = await response.json();
    const poster = posters.find((item) => item.slug === slug);

    if (!poster) {
      showMessage("Poster tidak ditemukan.");
      return;
    }

    showPoster(poster);
  } catch (error) {
    console.error(error);
    showMessage("Data poster tidak bisa dibuka.");
  }
}

loadPoster();
