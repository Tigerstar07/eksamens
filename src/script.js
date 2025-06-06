  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-center");

    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburger.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".modern-navbar");
      if (window.scrollY > 20) {
        navbar.style.background = "rgba(10, 10, 42, 0.95)";
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.05)";
      }
    });
  });
