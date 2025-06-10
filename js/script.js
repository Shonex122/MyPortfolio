let navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.classList.add("active");
}

function hideMenu() {
  navLinks.classList.remove("active");
}
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header background on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.9)";
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (e) {
  const navLinks = document.getElementById("navLinks");
  const menuBtn = document.querySelector(".fa-bars");

  if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});
