const images = [
  { name: "A group of nude figures intertwine while nibbling on a gargantuan, succulent strawberry", image: "assets/images/Strawberry.png" },
  { name: "Duo caresses inside glistening bubble", image: "assets/images/Bubble.png" },
  { name: "Others are crushed by colossal, disembodied ears", image: "assets/images/Ears.png" },
  { name: "One figure places a spray of pretty flowers into the bum of another", image: "assets/images/flowers.png" },
  { name: "They feast from the mouths of giant birds", image: "assets/images/Giantbird.png" },
  { name: "Another resigned to life with sheet music written on his ass", image: "assets/images/Sheetmusic.png" },
  { name: "Mermaid seduces sea-monster clad in armor", image: "assets/images/Mermaid.png" },
  { name: "And huddle orgiastically inside flower petals and pools", image: "assets/images/Pools.png" },
  { name: "The avaricious are gobbled up by a bird-bug who excretes them out into an abyss of suffering souls", image: "assets/images/BirdBug.png" }
];

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxText = document.getElementById("lightbox-text");

function openLightbox(imageUrl, text) {
  lightboxImage.src = imageUrl;
  lightboxText.textContent = text;
  lightbox.classList.add("visible");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("visible");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = "";

  if (query === "") {
    searchResults.style.display = "none";
    return;
  }

  const filteredImages = images.filter(img => img.name.toLowerCase().includes(query));
  searchResults.style.display = filteredImages.length ? "block" : "none";

  filteredImages.forEach(img => {
    const li = document.createElement("li");
    li.textContent = img.name;
    li.addEventListener("click", () => openLightbox(img.image, img.name));
    searchResults.appendChild(li);
  });
});
