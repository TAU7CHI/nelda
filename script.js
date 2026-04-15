 /* ── CONFIG ─────────────────────────────────────────────────
     Change this to the real date you started dating.
     Format: "YYYY-MM-DD"
  ──────────────────────────────────────────────────────────── */
  const START_DATE = "2022-03-10";

  /* ── DAY COUNTER ─────────────────────────────────────────── */
  const startDate = new Date(START_DATE);
  const today     = new Date();
  const days      = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  document.getElementById("dayCount").textContent = days > 0 ? days : 0;

  /* ── COLOUR THEMES ───────────────────────────────────────── */
  const bg = document.getElementById("bg");
  const themes = [
    "linear-gradient(270deg,#ff9a9e,#fad0c4,#fbc2eb,#a18cd1)",   // pink-purple
    "linear-gradient(270deg,#a18cd1,#fbc2eb,#84fab0,#8fd3f4)",   // purple-mint
    "linear-gradient(270deg,#84fab0,#8fd3f4,#43e97b,#38f9d7)",   // green-teal
    "linear-gradient(270deg,#f093fb,#f5576c,#fd746c,#ff9068)",   // coral-red
    "linear-gradient(270deg,#4facfe,#00f2fe,#43e97b,#38f9d7)",   // sky-blue
    "linear-gradient(270deg,#fda085,#f6d365,#ffecd2,#fcb69f)",   // warm-orange
  ];
  let themeIndex = 0;

  function cycleTheme() {
    themeIndex = (themeIndex + 1) % themes.length;
    bg.style.background       = themes[themeIndex];
    bg.style.backgroundSize   = "800% 800%";
    bg.style.animation        = "none";
    /* Force reflow so the animation restart works */
    void bg.offsetWidth;
    bg.style.animation        = "gradientMove 15s ease infinite";
  }
  setInterval(cycleTheme, 5000);

  /* ── FLOATING ELEMENTS ───────────────────────────────────── */
  const container = document.getElementById("floating-container");

  const messages = [
    "I love you ❤️",
    "You are my everything 💕",
    "Forever yours 💖",
    "My queen 👑",
    "You complete me ❤️",
    "I cherish you 💘",
    "You are my happiness 😊",
    "My heart is yours ❤️",
  ];
  const symbols = ["❤️","🌸","💖","🌹","💕","✨","💗","🦋","🌺","💝"];

  function createFloating() {
    const el = document.createElement("div");
    el.classList.add("floating");

    el.innerText = Math.random() > 0.5
      ? messages[Math.floor(Math.random() * messages.length)]
      : symbols [Math.floor(Math.random() * symbols.length)];

    el.style.left            = (Math.random() * 95) + "vw";
    const dur                = 5 + Math.random() * 5;
    el.style.animationDuration = dur + "s";
    el.style.fontSize        = (14 + Math.random() * 18) + "px";

    container.appendChild(el);
    setTimeout(() => el.remove(), (dur + 0.5) * 1000);
  }

  setInterval(createFloating, 500);

  /* ── LETTER CONTROLS ─────────────────────────────────────── */
  function showLetter() {
    document.getElementById("letter").classList.add("open");
    const content = document.getElementById("mainContent");
    content.style.opacity   = "0";
    content.style.transform = "translate(-50%, -60%)";
  }

  function closeLetter() {
    document.getElementById("letter").classList.remove("open");
    const content = document.getElementById("mainContent");
    content.style.opacity   = "1";
    content.style.transform = "translate(-50%, -50%)";
  }
/* ── BACKGROUND MUSIC ───────────────────────────── */
const music = document.getElementById("bgMusic");

// Try autoplay
window.addEventListener("load", () => {
  music.muted = false; // unmute after load
  music.volume = 0.5;

  music.play().catch(() => {
    console.log("Autoplay blocked, waiting for click...");
  });
});

// Fallback: play on first click anywhere
document.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  }
}, { once: true });
