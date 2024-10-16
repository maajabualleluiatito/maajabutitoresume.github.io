document.addEventListener("DOMContentLoaded", function () {
  // Skill level animations
  const skills = document.querySelectorAll(".skills .percentage-text");
  skills.forEach((skill) => {
    const percentage = parseInt(skill.textContent, 10);
    skill.parentElement.querySelector(".skill-level-animation").style.width = `${percentage}%`;
  });

  // Smooth scrolling
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Back to top button
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "↑";
  backToTopButton.className = "back-to-top";
  document.body.appendChild(backToTopButton);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
