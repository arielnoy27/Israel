document.addEventListener("DOMContentLoaded", () => {
  const rainContainer = document.querySelector(".rain");
  const dropCount = 80;

  for (let i = 0; i < dropCount; i++) {
    const drop = document.createElement("div");
    drop.classList.add("rain-drop");
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = 1 + Math.random() * 1.5 + "s";
    drop.style.opacity = 0.3 + Math.random() * 0.4;
    drop.style.animationDelay = Math.random() * 5 + "s";
    rainContainer.appendChild(drop);
}
});