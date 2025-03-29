document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-zoom, .fade-right, .clip-reveal, .fade-left");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
});

// Animación de texto
const listItems = document.querySelectorAll("ul li");
const observerli = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.3 }s`; // Retraso progresivo
        entry.target.classList.add("visible");
        observerli.unobserve(entry.target); // Para que solo se active una vez
      }
    });
});

listItems.forEach((li) => {
    li.classList.add("fade-left");
    observerli.observe(li);
});
