document.addEventListener("DOMContentLoaded", function () {

  const sliderEl = document.querySelector(".photo-slider");
  if (!sliderEl) return;

  const track = sliderEl.querySelector(".slider-track");
  const images = sliderEl.querySelectorAll(".slider-image");
  const prevBtn = sliderEl.querySelector(".slider-btn.prev");
  const nextBtn = sliderEl.querySelector(".slider-btn.next");
  const dotsContainer = document.querySelector(".slider-dots");

  let index = 0;

  // dot 자동 생성
  images.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      update();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function next() {
    index = (index + 1) % images.length;
    update();
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    update();
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  update();
});
