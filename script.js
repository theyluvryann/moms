function showPage(num) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + num).classList.add("active");
}

/* PAGE SWITCH */
function nextPage(num) {
  showPage(num);
}

/* OPEN GIFT */
function openGift() {
  let gift = document.getElementById("gift");

  gift.classList.add("shake");

  setTimeout(() => {
    gift.classList.add("open");
    burstHearts();
  }, 800);

  setTimeout(() => {
    showPage(2);
  }, 3000);
}

/* HEART BURST */
function burstHearts() {
  for (let i = 0; i < 70; i++) {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";

    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = Math.random() * 20 + 10 + "px";
    h.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.body.appendChild(h);

    setTimeout(() => h.remove(), 4000);
  }
}

/* BACKGROUND FLOATING HEARTS */
function floatingHearts() {
  setInterval(() => {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💗";

    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "100vh";
    h.style.opacity = 0.5;
    h.style.fontSize = "14px";

    document.body.appendChild(h);

    setTimeout(() => h.remove(), 6000);
  }, 800);
}

floatingHearts();

/* INIT */
showPage(1);
