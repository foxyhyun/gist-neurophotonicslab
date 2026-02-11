// assets/js/member.js
// 역할: member/index.html에서 "카드 전체 클릭" + "Enter 키"로 detail 페이지 이동
// 주의: DETAIL 버튼(a.detail-link)은 기본 링크 동작 유지 (버튼 클릭시 카드 이동 방지)

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".member-card.member-link");

  cards.forEach((card) => {
    // 1) 카드 클릭 -> detail 이동
    card.addEventListener("click", (e) => {
      // DETAIL 버튼(링크) 클릭이면 카드 이동 막기
      if (e.target.closest("a.detail-link")) return;

      const href =
        card.getAttribute("data-href") ||
        card.getAttribute("onclick")?.match(/location\.href='([^']+)'/)?.[1];

      if (href) window.location.href = href;
    });

    // 2) 키보드 Enter -> detail 이동
    card.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;

      const href =
        card.getAttribute("data-href") ||
        card.getAttribute("onclick")?.match(/location\.href='([^']+)'/)?.[1];

      if (href) window.location.href = href;
    });
  });
});
