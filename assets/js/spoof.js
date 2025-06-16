
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("spoof-button");
  const output = document.getElementById("spoof-result");

  btn.addEventListener("click", () => {
    output.innerText = "Starting spoof...
Bypassing Vanguard...
Clearing traces...";
    setTimeout(() => {
      output.innerText += "\nInjecting hooks...";
    }, 1000);
    setTimeout(() => {
      output.innerText += "\nSpoof Complete ✅";
    }, 2000);
  });
});
