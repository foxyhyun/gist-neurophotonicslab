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
