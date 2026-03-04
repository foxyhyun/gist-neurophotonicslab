// ==========================
// HOME SLIDER
// ==========================
const sliderEl = document.querySelector(".photo-slider");

if (sliderEl) {
  const track = sliderEl.querySelector(".slider-track");
  const slides = sliderEl.querySelectorAll(".slider-image");
  const prevBtn = sliderEl.querySelector(".slider-btn.prev");
  const nextBtn = sliderEl.querySelector(".slider-btn.next");

  const sliderCard = sliderEl.closest(".home-showcase-card");
  const dots = sliderCard
    ? sliderCard.querySelectorAll(".slider-dots .dot")
    : [];

  let index = 0;
  let autoSlide = null;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  function next() {
    index = (index + 1) % slides.length;
    update();
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    update();
  }

  function stopAuto() {
    if (autoSlide) {
      clearInterval(autoSlide);
      autoSlide = null;
    }
  }

  function startAuto() {
    stopAuto();
    autoSlide = setInterval(next, 5000);
  }

  nextBtn?.addEventListener("click", () => {
    next();
    startAuto();
  });

  prevBtn?.addEventListener("click", () => {
    prev();
    startAuto();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      update();
      startAuto();
    });
  });

  sliderEl.addEventListener("mouseenter", stopAuto);
  sliderEl.addEventListener("mouseleave", startAuto);

  update();
  startAuto();
}