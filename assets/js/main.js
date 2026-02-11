document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // HOME SLIDER
  // ==========================
  const sliderEl = document.querySelector(".photo-slider");
  if (sliderEl) {

    const images = sliderEl.querySelectorAll(".slider-image");
    const prevBtn = sliderEl.querySelector(".slider-btn.prev");
    const nextBtn = sliderEl.querySelector(".slider-btn.next");
    const dots = document.querySelectorAll(".dot");

    let index = 0;

    function showSlide(i) {
      images.forEach((img, idx) => {
        img.style.display = idx === i ? "block" : "none";
      });

      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[i]) dots[i].classList.add("active");
    }

    function next() {
      index = (index + 1) % images.length;
      showSlide(index);
    }

    function prev() {
      index = (index - 1 + images.length) % images.length;
      showSlide(index);
    }

    nextBtn?.addEventListener("click", next);
    prevBtn?.addEventListener("click", prev);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
      });
    });

    showSlide(0);
  }

  // ==========================
  // RESEARCH TABS
  // ==========================
  const tabs = document.querySelectorAll(".research-tabs .tab");
  const panels = document.querySelectorAll(".research-content .tab-panel");

  if (tabs.length && panels.length) {
    tabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-tab");

        tabs.forEach(t => t.classList.remove("active"));
        btn.classList.add("active");

        panels.forEach(p => {
          p.classList.toggle("active", p.getAttribute("data-panel") === key);
        });
      });
    });
  }

});
