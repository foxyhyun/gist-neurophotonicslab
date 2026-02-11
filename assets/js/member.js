document.addEventListener("DOMContentLoaded", function () {

  const galleryImages = document.querySelectorAll(".personal-gallery img");
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.add("active");
    });
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

});
