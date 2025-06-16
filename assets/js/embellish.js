
document.addEventListener("DOMContentLoaded", () => {
  // Cursor
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });

  // Sound on virtualize
  const sound = document.getElementById("inject-sound");
  const virtBtn = document.querySelector(".button");

  if (virtBtn && sound) {
    virtBtn.addEventListener("click", () => {
      sound.play();
      virtBtn.classList.add("injecting");
      virtBtn.innerText = "Injecting...";
      setTimeout(() => {
        virtualize();
        virtBtn.innerText = "Virtualize";
        virtBtn.classList.remove("injecting");
      }, 2000);
    });
  }
});
