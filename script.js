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
   HERO ANIMATION
========================= */
gsap.from(".title", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".profile", {
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  delay: 0.3,
  ease: "expo.out"
});


/* =========================
   SCROLL REVEAL
========================= */
document.querySelectorAll(".overlay").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%"
    },
    y: 80,
    opacity: 0,
    duration: 1.2
  });
});


/* =========================
   TEXT GLOW EFFECT
========================= */
document.querySelectorAll(".poem").forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.style.textShadow = "0 0 20px rgba(0,0,0,0.3)";
  });

  el.addEventListener("mouseleave", () => {
    el.style.textShadow = "none";
  });
});


/* =========================
   FLOATING PARTICLES
========================= */
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1";

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*2,
    speed: Math.random()*0.5
  });
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.y -= p.speed;
    if(p.y < 0) p.y = canvas.height;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();


/* =========================
   GRADIENT BACKGROUND SHIFT
========================= */
let hue = 0;
setInterval(()=>{
  hue += 1;
  document.body.style.background = `linear-gradient(120deg, hsl(${hue},30%,95%), #ffffff)`;
},100);


/* =========================
   CURSOR FOLLOW
========================= */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e)=>{
  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:0.15
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
progress.style.background = "#000";
progress.style.zIndex = "9999";

document.body.appendChild(progress);

window.addEventListener("scroll", ()=>{
  let h = document.body.scrollHeight - window.innerHeight;
  let sc = (window.scrollY / h) * 100;
  progress.style.width = sc + "%";
});