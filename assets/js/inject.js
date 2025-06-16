
document.addEventListener("DOMContentLoaded", function () {
  const injectBtn = document.getElementById("inject-btn");
  const injectUi = document.getElementById("inject-ui");
  if (injectBtn && injectUi) {
    injectBtn.addEventListener("click", () => {
      injectUi.style.opacity = 0;
      setTimeout(() => injectUi.remove(), 700);
    });
  }
});
