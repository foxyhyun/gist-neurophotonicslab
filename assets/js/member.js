// assets/js/member.js
// 1) member/index.html: 카드 전체 클릭 + Enter 키로 detail 페이지 이동
// 2) member detail page: Personal Gallery 클릭 -> modal open/close

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // (A) Member index: card click -> navigate
  // =========================
  const cards = document.querySelectorAll(".member-card.member-link");

  cards.forEach((card) => {
    // 카드 클릭 -> detail 이동
    card.addEventListener("click", (e) => {
      // DETAIL 버튼 클릭이면 카드 이동 막기
      if (e.target.closest("a.detail-link")) return;

      const href =
        card.getAttribute("data-href") ||
        card.getAttribute("onclick")?.match(/location\.href='([^']+)'/)?.[1];

      if (href) window.location.href = href;
    });

    // Enter 키 -> detail 이동
    card.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;

      const href =
        card.getAttribute("data-href") ||
        card.getAttribute("onclick")?.match(/location\.href='([^']+)'/)?.[1];

      if (href) window.location.href = href;
    });
  });

  // =========================
  // (B) Member detail: personal gallery modal
  // =========================
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");
  const galleryImgs = document.querySelectorAll(".personal-gallery img");

  // detail 페이지가 아니면(요소 없으면) 그냥 종료
  if (!modal || !modalImg || !galleryImgs.length) return;

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || "Expanded view";
    modal.classList.add("open");   // ✅ CSS: .gallery-modal.open { display:grid; }
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modalImg.src = "";
    document.body.style.overflow = "";
  }

  galleryImgs.forEach((img) => {
    img.addEventListener("click", () => openModal(img.src, img.alt));
  });

  // 배경 클릭하면 닫기 (이미지 클릭은 유지)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC로 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
