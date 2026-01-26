document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".research-tabs .tab");
  const panels = document.querySelectorAll(".research-content .tab-panel");

  if (!tabs.length || !panels.length) return;

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-tab");

      tabs.forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");

      panels.forEach((p) => {
        const pkey = p.getAttribute("data-panel");
        p.classList.toggle("active", pkey === key);
      });
    });
  });
});

(function () {
  function initHomeSlider() {
    const sliderEl = document.getElementById("photoSlider");
    if (!sliderEl) return; // Home에서만 실행

    const imgEl = document.getElementById("sliderImage");
    const capEl = document.getElementById("sliderCaption");
    const dotsEl = document.getElementById("sliderDots");
    const prevBtn = sliderEl.querySelector(".slider-btn.prev");
    const nextBtn = sliderEl.querySelector(".slider-btn.next");

    // 여기만 본인 사진 경로로 바꾸면 됨
    // 권장: assets/img/home/ 폴더 만들고 group-1.jpg, group-2.jpg...
    const slides = [
      { src: "./assets/img/main/main1.png", caption: "Lab group photo (2025)" },
    ];

    let idx = 0;
    let timer = null;
    const AUTO_MS = 6000; // 자동 넘김 (원하면 0으로 끄기)

    function renderDots() {
      dotsEl.innerHTML = "";
      slides.forEach((_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "dot" + (i === idx ? " active" : "");
        b.setAttribute("aria-label", `Go to photo ${i + 1}`);
        b.addEventListener("click", () => {
          idx = i;
          render();
          restartAuto();
        });
        dotsEl.appendChild(b);
      });
    }

    function render() {
      const s = slides[idx];
      imgEl.src = s.src;
      imgEl.alt = s.caption || "Lab group photo";
      capEl.textContent = s.caption || "";
      renderDots();
    }

    function prev() {
      idx = (idx - 1 + slides.length) % slides.length;
      render();
      restartAuto();
    }

    function next() {
      idx = (idx + 1) % slides.length;
      render();
      restartAuto();
    }

    function restartAuto() {
      if (AUTO_MS <= 0) return;
      if (timer) clearInterval(timer);
      timer = setInterval(next, AUTO_MS);
    }

    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);

    // 키보드 좌우로도 넘기기
    sliderEl.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    });
    sliderEl.tabIndex = 0;

    render();
    restartAuto();
  }

  document.addEventListener("DOMContentLoaded", initHomeSlider);
})();

// ==============================
// Research modal (image + detail)
// ==============================
(function () {
  const modal = document.getElementById("researchModal");
  if (!modal) return;

  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");

  function openModal({ img, title, descHtml }) {
    modalImg.src = img || "";
    modalTitle.textContent = title || "";
    modalDesc.innerHTML = descHtml || "";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modalImg.src = "";
  }

  // close handlers
  modal.addEventListener("click", (e) => {
    if (e.target.dataset.close) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  // attach click to research images (use data-* for content)
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-modal='research']");
    if (!el) return;

    openModal({
      img: el.dataset.img,
      title: el.dataset.title,
      descHtml: el.dataset.desc
    });
  });
})();
