function toggleButtonVisibility() {
  const button = document.getElementById("scrollButton");
  if (!button) return;

  const scrollY = window.scrollY;

  if (scrollY < 850 || scrollY > 3500) {
    button.classList.add("opacity-0", "pointer-events-none");
  } else {
    button.classList.remove("opacity-0", "pointer-events-none");
  }
}

window.addEventListener("scroll", toggleButtonVisibility);
window.addEventListener("load", toggleButtonVisibility);
