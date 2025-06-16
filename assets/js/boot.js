
document.addEventListener("DOMContentLoaded", function () {
  const bios = document.getElementById("bios-boot");
  if (bios && !sessionStorage.getItem("booted")) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        bios.style.opacity = 0;
        setTimeout(() => bios.remove(), 800);
      }
    });
    sessionStorage.setItem("booted", "true");
  } else if (bios) {
    bios.remove();
  }
});
