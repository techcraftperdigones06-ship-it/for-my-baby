document.addEventListener('DOMContentLoaded', () => {
  // FLOATING HEARTS
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
  setInterval(createHeart, 600);

  // SECRET / UNLOCK
  const SECRET = "FOREVER"; // Secret code
  const lockScreen = document.getElementById("lockScreen");
  const main = document.getElementById("main");
  const code = document.getElementById("code");
  const msg = document.getElementById("msg");
  const enter = document.getElementById("enterBtn");

  enter.onclick = () => {
    if(code.value.trim().toUpperCase() === SECRET){
      lockScreen.style.display = "none";
      main.classList.remove("hidden");
    } else {
      msg.style.display = "block";
      setTimeout(()=> msg.style.display="none",1500);
    }
  };

  code.addEventListener("keyup", e => {
    if(e.key === "Enter") enter.click();
  });

  // NAVIGATION TABS
  const navBtns = document.querySelectorAll(".navBtn");
  const pages = document.querySelectorAll("section");

  navBtns.forEach(btn=>{
    btn.onclick = () => {
      navBtns.forEach(b=> b.classList.remove("active"));
      btn.classList.add("active");

      pages.forEach(p=> p.style.display="none");
      document.getElementById(btn.dataset.page).style.display="block";
    };
  });

  // IMAGE PICKER (replaces first gallery image)
  document.getElementById('imgPick').addEventListener('change', async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    const img = document.querySelector('.gallery .box img');
    if (img) {
      img.src = url;
      img.onload = () => URL.revokeObjectURL(url);
    }
  });
});