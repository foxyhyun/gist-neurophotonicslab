// ==========================
// HOME SLIDER (SAFE VERSION)
// ==========================
const sliderEl = document.querySelector(".photo-slider");
if (sliderEl) {

  const track = sliderEl.querySelector(".slider-track");
  const images = sliderEl.querySelectorAll(".slider-image");
  const prevBtn = sliderEl.querySelector(".slider-btn.prev");
  const nextBtn = sliderEl.querySelector(".slider-btn.next");
  const dots = document.querySelectorAll(".dot");

  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  function next() {
    index = (index + 1) % images.length;
    update();
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    update();
  }

  nextBtn?.addEventListener("click", next);
  prevBtn?.addEventListener("click", prev);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      update();
    });
  });

  update();
}
