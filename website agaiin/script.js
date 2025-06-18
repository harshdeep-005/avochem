document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalDesc = document.getElementById("modalDesc");
  let active = false;

  document.querySelectorAll(".product img").forEach(img => {
    img.addEventListener("click", (e) => {
      const desc = img.nextElementSibling.textContent;

      if (!active) {
        modalDesc.textContent = desc;
        modal.classList.add("active");
        active = true;
      } else {
        modal.classList.remove("active");
        active = false;
      }
    });
  });

  // Close modal if clicked outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      active = false;
    }
  });
});
