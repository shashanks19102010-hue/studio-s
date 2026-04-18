/* =========================
   GSAP INIT
========================= */
gsap.registerPlugin(ScrollTrigger);


/* =========================
   LENIS SMOOTH SCROLL
========================= */
const lenis = new Lenis({
  duration: 1.2,
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


/* =========================
   LOADER REMOVE
========================= */
window.addEventListener("load", () => {
  gsap.to(".loader", {
    opacity: 0,
    duration: 1,
    delay: 0.5,
    onComplete: () => {
      document.querySelector(".loader").style.display = "none";
    }
  });
});


/* =========================
   HERO ANIMATION
========================= */
gsap.from(".title", {
  y: 120,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".profile", {
  scale: 0.6,
  opacity: 0,
  duration: 1.5,
  delay: 0.3,
  ease: "expo.out"
});

gsap.from(".tagline", {
  y: 40,
  opacity: 0,
  duration: 1.2,
  delay: 0.6
});


/* =========================
   SCROLL REVEAL (CARDS)
========================= */
document.querySelectorAll(".overlay").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });
});


/* =========================
   POEM TEXT ANIMATION
========================= */
document.querySelectorAll(".poem").forEach((el) => {

  let text = el.innerHTML;

  el.innerHTML = text
    .split("")
    .map(char => `<span>${char}</span>`)
    .join("");

  gsap.from(el.querySelectorAll("span"), {
    scrollTrigger: {
      trigger: el,
      start: "top 90%"
    },
    opacity: 0,
    y: 20,
    stagger: 0.02,
    duration: 0.6
  });

});


/* =========================
   PARALLAX EFFECT
========================= */
document.querySelectorAll(".poem-section").forEach((section) => {
  gsap.to(section, {
    backgroundPosition: "50% 20%",
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});


/* =========================
   CURSOR FOLLOW
========================= */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15
  });
});


/* =========================
   SCROLL PROGRESS BAR
========================= */
const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "3px";
progress.style.background = "#fff";
progress.style.zIndex = "9999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let height = document.body.scrollHeight - window.innerHeight;
  let percent = (scrollTop / height) * 100;
  progress.style.width = percent + "%";
});
