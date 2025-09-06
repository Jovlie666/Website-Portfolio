function openLightbox(imgSrc, title, desc) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const h3 = document.getElementById("lightbox-title");
  const p = document.getElementById("lightbox-desc");

  img.src = imgSrc;
  h3.textContent = title;
  p.textContent = desc;

  lightbox.style.display = "flex";
  
  void lightbox.offsetWidth;

  lightbox.classList.add("show");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("show");

  setTimeout(() => {
    lightbox.style.display = "none";
  }, 400);
}

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const img = card.querySelector("img").src;
    const title = card.querySelector("h3").textContent;
    const desc = card.querySelector("p").textContent;

    card.addEventListener("click", () => {
      openLightbox(img, title, desc);
    });
  });
});