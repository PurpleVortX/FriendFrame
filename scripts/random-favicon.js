// random-favicon.js

window.addEventListener("DOMContentLoaded", () => {
  const favicons = [
    "shea.png",
    "lauren.jpeg",
    "lexi.jpg",
    "jillian.jpg"
  ];

  const randomFavicon = favicons[Math.floor(Math.random() * favicons.length)];

  const existingLink = document.querySelector('#dynamic-favicon');
  if (existingLink) {
    existingLink.href = randomFavicon;
  } else {
    const newLink = document.createElement('link');
    newLink.id = 'dynamic-favicon';
    newLink.rel = 'icon';
    newLink.type = 'image/png';
    newLink.href = randomFavicon;
    document.head.appendChild(newLink);
  }
});
