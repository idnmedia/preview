/* ===============================
   VERSI BREAKDOWN BERDASARKAN JADWAL MANUAL YANG SUDAH DITENTUKAN
================================= */

const RAMADAN_START = new Date(2026, 1, 19); // 19 Feb 2026
let currentRamadanDay = null;
let currentSchedule = null;


/* ===============================
   DOM
================================= */

const citySelect = document.getElementById("citySelect");
const dateInfo = document.getElementById("dateInfo");
const imsakTimes = document.getElementById("imsakTimes");
const countdownInfo = document.getElementById("countdownInfo");


/* ===============================
   INIT DROPDOWN
================================= */

cities.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.slug;
  opt.textContent = c.name;
  citySelect.appendChild(opt);
});

citySelect.addEventListener("change", render);

render();


/* ===============================
   CORE RENDER
================================= */

function render() {
  const citySlug = citySelect.value;
  if (!citySlug) return;

  const day = getRamadanDay();
  if (!day) return;

  const cityData = getCitySchedule(citySlug);
  if (!cityData) return;

  const todayData = cityData.schedules[day - 1];
  if (!todayData) return;

  const timesContainer = document.getElementById("imsakTimes");

  timesContainer.classList.add("switching");

  setTimeout(() => {

    currentRamadanDay = day;
    currentSchedule = todayData;

    renderDate(day);
    renderTimes(todayData);
    checkBannerTime();

    timesContainer.classList.remove("switching");

  }, 200);
}


/* ===============================
   GLOBAL WATCHER (1 LOOP ONLY)
================================= */

setInterval(() => {

  const newDay = getRamadanDay();
  if (newDay && newDay !== currentRamadanDay) {
    render();
  }

  highlightNextPrayer();
  updateCountdown();
  checkBannerTime();

}, 1000);


/* ===============================
   HELPERS
================================= */

function getCitySchedule(slug) {
  const found = schedules.find(obj => obj[slug]);
  return found ? found[slug] : null;
}

function getRamadanDay() {
  const today = new Date();
  const diff = Math.floor((today - RAMADAN_START) / 86400000) + 1;
  return diff >= 1 && diff <= 30 ? diff : null;
}

function renderDate(day) {
  const today = new Date();
  const tanggal = today.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  dateInfo.innerHTML = `
    ${tanggal}
    <span class="hijri">(${day} Ramadan 1447 H)</span>
  `;
}


/* ===============================
   RENDER TIMES
================================= */

function renderTimes(d) {
  imsakTimes.innerHTML = `
    <div class="time-box" data-time="${d.IMSAK}">
      <span>Imsak</span><b>${d.IMSAK}</b>
    </div>
    <div class="time-box" data-time="${d.SUBUH}">
      <span>Subuh</span><b>${d.SUBUH}</b>
    </div>
    <div class="time-box" data-time="${d.ZUHUR}">
      <span>Dzuhur</span><b>${d.ZUHUR}</b>
    </div>
    <div class="time-box" data-time="${d.ASAR}">
      <span>Ashar</span><b>${d.ASAR}</b>
    </div>
    <div class="time-box" data-time="${d.MAGRIB}">
      <span>Maghrib</span><b>${d.MAGRIB}</b>
    </div>
    <div class="time-box" data-time="${d.ISYA}">
      <span>Isya</span><b>${d.ISYA}</b>
    </div>
  `;

  highlightNextPrayer();
}


/* ===============================
   HIGHLIGHT LOGIC
================================= */

function highlightNextPrayer() {
  if (!currentSchedule) return;

  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const boxes = document.querySelectorAll(".time-box");
  boxes.forEach(box => box.classList.remove("next"));

  let found = false;

  for (const box of boxes) {
    const [h, m] = box.dataset.time.split(":").map(Number);
    const prayerMinutes = h * 60 + m;

    if (prayerMinutes > nowMinutes) {
      box.classList.add("next");
      found = true;
      break;
    }
  }

  if (!found && boxes.length > 0) {
    boxes[0].classList.add("next");
  }
}


/* ===============================
   COUNTDOWN
================================= */

function updateCountdown() {
  if (!currentSchedule) return;

  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const nowSeconds = now.getSeconds();

  const prayers = [
    { name: "Imsak", time: currentSchedule.IMSAK },
    { name: "Subuh", time: currentSchedule.SUBUH },
    { name: "Dzuhur", time: currentSchedule.ZUHUR },
    { name: "Ashar", time: currentSchedule.ASAR },
    { name: "Maghrib", time: currentSchedule.MAGRIB },
    { name: "Isya", time: currentSchedule.ISYA }
  ];

  let target = null;

  for (const p of prayers) {
    const [h, m] = p.time.split(":").map(Number);
    const prayerMinutes = h * 60 + m;

    if (prayerMinutes > nowMinutes) {
      target = { ...p, minutes: prayerMinutes };
      break;
    }
  }

  if (!target) {
    const [h, m] = currentSchedule.IMSAK.split(":").map(Number);
    target = {
      name: "Imsak",
      minutes: h * 60 + m + 1440
    };
  }

  const totalSeconds =
    (target.minutes * 60) - (nowMinutes * 60 + nowSeconds);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownInfo.innerHTML =
    `Menuju <b>${target.name}</b> dalam ` +
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;
}


/* ===============================
   BANNER LOGIC (NEW FIXED TIME)
================================= */

function showBanner(type) {
  document.querySelectorAll(".banner-img")
    .forEach(img => img.classList.remove("active"));

  const el = document.getElementById(`banner-${type}`);
  if (el) el.classList.add("active");
}

function checkBannerTime() {
  const now = new Date();
  const totalMinutes = now.getHours() * 60 + now.getMinutes();

  if (totalMinutes <= 300) {
    showBanner("berpuasa"); // 00:00–05:00
  } else if (totalMinutes <= 1020) {
    showBanner("general"); // 05:01–17:00
  } else {
    showBanner("berbuka"); // 17:01–23:59
  }
}
