// 🎈 Make a Wish Button
const wishBtn = document.getElementById("wishBtn");
const wishText = document.getElementById("wishText");
const canvas = document.getElementById("glitterCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

wishBtn.addEventListener("click", () => {
  wishText.textContent = " Mahadev ji aapki saari manokamnaayein poori karein 🔱❤";
  wishText.style.display = "block";
  launchGlitter();
});

// 🌟 Glitter particles (minimal & elegant)
let particles = [];

function launchGlitter() {
  particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 60 + 300}, 80%, 80%)`,
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * -3 - 1,
      alpha: 1
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
    ctx.closePath();

    p.x += p.speedX;
    p.y += p.speedY;
    p.alpha -= 0.01;
  });

  particles = particles.filter(p => p.alpha > 0);

  if (particles.length > 0) {
    requestAnimationFrame(animate);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  }
}
