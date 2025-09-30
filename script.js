// Confetti setup
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = Array.from({length: 150}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 4,
  d: Math.random() * 10 + 10,
  color: `hsl(${Math.random() * 360},100%,50%)`,
  tilt: Math.random() * 10 - 10,
  tiltAngle: Math.random() * Math.PI
}));

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.ellipse(c.x, c.y, c.r, c.r/2, c.tiltAngle, 0, 2 * Math.PI);
    ctx.fill();
  });
  updateConfetti();
}
function updateConfetti() {
  confettiPieces.forEach(c => {
    c.y += 2;
    c.x += Math.sin(c.tiltAngle);
    c.tiltAngle += 0.05;
    if (c.y > canvas.height) {
      c.y = 0; c.x = Math.random() * canvas.width;
    }
  });
}
setInterval(drawConfetti, 20);

// Poem typing
const poemText = `Wishing you joy, love, and cheer,\nOn this special day of the year.\nMay your dreams all come true,\nHappy Birthday, Priyal, just for you! 🎂✨`;
let i = 0;

function startPoem() {
  document.getElementById("introPage").style.display = "none";
  document.getElementById("poemPage").style.display = "block";
  const poemEl = document.getElementById("poem");
  const interval = setInterval(() => {
    poemEl.textContent += poemText[i];
    i++;
    if (i >= poemText.length) {
      clearInterval(interval);
      document.getElementById("giftBtn").style.display = "inline-block";
    }
  }, 100);
}

function showGift() {
  document.getElementById("poemPage").style.display = "none";
  document.getElementById("giftPage").style.display = "block";
}
