// scripts/random-favicon.js

window.addEventListener("DOMContentLoaded", () => {
  const favicons = [
    "favicons/drum_major_legs.jpg",
    "favicons/jillian.jpg",
    "favicons/lauren.jpeg",
    "favicons/lexi.jpg",
    "favicons/shea.png"
  ];

  const chosen = favicons[Math.floor(Math.random() * favicons.length)];

  // Remove existing favicons
  document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());

  // Add new one
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = `${chosen}?v=${Date.now()}`; // cache-busting query
  document.head.appendChild(link);
});
