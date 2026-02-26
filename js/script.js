document.addEventListener("DOMContentLoaded", () => {
  // Sticky Header Scroll Effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "10px 0";
      header.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
      header.style.padding = "20px 0";
      header.style.background = "rgba(255, 255, 255, 0.95)";
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  mobileToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = mobileToggle.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      mobileToggle.querySelector("i").classList.remove("fa-times");
      mobileToggle.querySelector("i").classList.add("fa-bars");
    }
  });

  // Smooth Scroll for Nav Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
          navLinks.classList.remove("active");
          mobileToggle.querySelector("i").classList.remove("fa-times");
          mobileToggle.querySelector("i").classList.add("fa-bars");
        }
      }
    });
  });

  // Simple Reveal Animation on Scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".work-card, .team-card, .cert-card, .gallery-item")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease-out";
      observer.observe(el);
    });
});
