// scripts/random-card-images.js

window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card[data-images]");

  cards.forEach(card => {
    const imageEl = card.querySelector("img");
    const images = JSON.parse(card.getAttribute("data-images"));

    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      imageEl.src = images[randomIndex];
    }
  });
});