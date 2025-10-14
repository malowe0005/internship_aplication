// window.addEventListener("scroll", () => {
//   const button = document.getElementById("scrollButton");
//   if (!button) return;

//   const scrollY = window.scrollY;

//   if (scrollY < 850 || scrollY > 3500) {
//     // Hide if before 300px or after 1000px
//     button.classList.add("opacity-0", "pointer-events-none");
//   } else {
//     // Show only between 300px and 1000px
//     button.classList.remove("opacity-0", "pointer-events-none");
//   }
// });

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
window.addEventListener("load", toggleButtonVisibility); // 👈 Run once on load
