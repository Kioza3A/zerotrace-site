
document.addEventListener("DOMContentLoaded", function () {
  // Create overlay if not found
  let overlay = document.getElementById("transition-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "transition-overlay";
    document.body.appendChild(overlay);
  }

  // Fade out on load
  overlay.classList.add("fade-out");
  setTimeout(() => {
    overlay.style.display = "none";
  }, 1000);

  // Intercept link clicks
  const links = document.querySelectorAll("a[href]:not([target]):not([href^='#'])");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");
      overlay.style.display = "block";
      overlay.classList.remove("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
});
