// ================= REVEAL ON SCROLL =================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ================= SKILLS FILTER =================
document.querySelectorAll(".skill-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".skill-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;
    document.querySelectorAll(".skill-card").forEach(card => {
      card.style.display =
        filter === "all" || card.dataset.category === filter ? "block" : "none";
    });
  });
});


// ================= STARFIELD BACKGROUND =================
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const stars = Array.from({ length: 260 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.2 + 0.3,
  s: Math.random() * 0.15 + 0.05,
  o: Math.random() * 0.7 + 0.3
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.y -= star.s;
    if (star.y < 0) star.y = canvas.height;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${star.o})`;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
// Active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
/* ================================
   HERO TYPING EFFECT
================================ */

const words = [
  "Developer",
  "AI Engineer",
  "Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedText = document.getElementById("typed-text");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typedText.textContent = currentWord.slice(0, charIndex++);
  } else {
    typedText.textContent = currentWord.slice(0, charIndex--);
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
