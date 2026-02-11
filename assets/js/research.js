// assets/js/research.js
// 역할: Research 탭 + 모달만 담당

document.addEventListener("DOMContentLoaded", () => {
  initResearchTabs();
  initResearchModal();
});

function initResearchTabs() {
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
}

function initResearchModal() {
  const modal = document.getElementById("researchModal");
  if (!modal) return;

  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");

  function openModal({ img, title, descHtml }) {
    modalImg.src = img || "";
    modalImg.alt = title || "Research image";
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

  modal.addEventListener("click", (e) => {
    if (e.target.dataset.close) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-modal='research']");
    if (!el) return;

    openModal({
      img: el.dataset.img,
      title: el.dataset.title,
      descHtml: el.dataset.desc
    });
  });
}
