// Smooth scroll to projects
document.getElementById("see-projects").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// Dark mode toggle
const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Hamburger menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fade-in hero image
const profileImg = document.querySelector(".hero-image img");
window.addEventListener("load", () => {
  setTimeout(() => profileImg.classList.add("visible"), 200);
});

// Scroll reveal for fade-in sections
const revealElements = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add("visible");
  });
});
