// Transparent nav background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(0, 0, 0, 0.9)';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.7)';
  }
});



// JavaScript: Smooth Typewriter with glow
const words = ["Data Scientist", "Web Developer", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1500;

const typewriter = document.getElementById("typewriter-text");

function type() {
  if (charIndex < words[wordIndex].length) {
    typewriter.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length; // fixed bug: was +8
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});



//Skills section//
document.addEventListener("DOMContentLoaded", () => {
  const skillBoxes = document.querySelectorAll('.skill-box');
  const tooltip = document.getElementById('skill-tooltip');

  skillBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      const skillName = box.getAttribute('data-skill');
      tooltip.textContent = skillName; // Set the tooltip text
      tooltip.style.opacity = 1; // Make tooltip visible
    });

    box.addEventListener('mouseleave', () => {
      tooltip.style.opacity = 0; // Hide tooltip
    });

    // Update tooltip position on mousemove
    box.addEventListener('mousemove', (e) => {
      const x = e.pageX;
      const y = e.pageY;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y - 20}px`;
    });
  });
});


//star rain//
const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");

let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);

let stars = [];
let count = 200;

for (let i = 0; i < count; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 1.5,
    alpha: Math.random(),
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < count; i++) {
    const s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
    ctx.fill();

    // move
    s.x += s.dx;
    s.y += s.dy;

    // bounce back
    if (s.x < 0 || s.x > w) s.dx *= -1;
    if (s.y < 0 || s.y > h) s.dy *= -1;
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});





// Create overlay
const transitionEl = document.createElement('div');
transitionEl.className = 'page-transition';
document.body.appendChild(transitionEl);

// Smooth entry
document.addEventListener("DOMContentLoaded", () => {
  transitionEl.classList.remove('active');
});

// Smooth exit on link click
const anchors = document.querySelectorAll("a");


//magic click//
document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.className = "magic-dot";

  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;

  document.body.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 1000); // remove after 1s
});


