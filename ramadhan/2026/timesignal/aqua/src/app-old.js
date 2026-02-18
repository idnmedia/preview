
let bannerInterval = null;
function startBannerWatcher(todaySchedule) {
  if (bannerInterval) clearInterval(bannerInterval);

  checkBannerTime(todaySchedule);
  bannerInterval = setInterval(() => {
    checkBannerTime(todaySchedule);
  }, 2000);
}


const RAMADAN_START = new Date("2026-02-07"); // sesuaikan

const citySelect = document.getElementById("citySelect");
const dateInfo = document.getElementById("dateInfo");
const imsakTimes = document.getElementById("imsakTimes");

/* ===== INIT DROPDOWN ===== */
cities.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.slug;
  opt.textContent = c.name;
  citySelect.appendChild(opt);
});

citySelect.addEventListener("change", render);
render();

/* ===== CORE ===== */
function render() {
  const citySlug = citySelect.value;
  const day = getRamadanDay();

  if (!day) return;

  const cityData = getCitySchedule(citySlug);
  if (!cityData) return;

  const todayData = cityData.schedules[day - 1];
  if (!todayData) return;

  renderDate(day);
  renderTimes(todayData);

  startBannerWatcher(todayData); // ✅ SATU-SATUNYA TEMPAT
}

// ===== LIVE TIME WATCHER =====
setInterval(() => {
  highlightNextPrayer();
}, 2000); // tiap 1 menit


/* ===== HELPERS ===== */
function getCitySchedule(slug) {
  let result = null;
  schedules.forEach(obj => {
    if (obj[slug]) result = obj[slug];
  });
  return result;
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

  dateInfo.textContent = `${tanggal}  (${day} Ramadan 1447 H)`;
}



/* ===== BANNER LOGIC ===== */
function toMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function nowMinutes() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}

function showBanner(type) {
  document.querySelectorAll(".banner-img")
    .forEach(img => img.classList.remove("active"));

  document.getElementById(`banner-${type}`)
    ?.classList.add("active");
}

function checkBannerTime(todaySchedule) {
  const now = nowMinutes();
  const imsak = toMinutes(todaySchedule.IMSAK);
  const magrib = toMinutes(todaySchedule.MAGRIB);

  console.log("NOW:", now, "IMSAK:", imsak, "MAGRIB:", magrib);

  if (now >= imsak && now < imsak + 10) {
    showBanner("berpuasa");
    return;
  }

  if (now >= magrib && now < magrib + 10) {
    showBanner("berbuka");
    return;
  }
  showBanner("general");
}












/* ===== RENDER TIMES ===== */

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

function highlightNextPrayer() {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const boxes = document.querySelectorAll(".time-box");

  boxes.forEach(box => box.classList.remove("next"));

  for (const box of boxes) {
    const time = box.dataset.time; // "18:07"
    if (!time) continue;

    const [h, m] = time.split(":").map(Number);
    const prayerMinutes = h * 60 + m;

    if (prayerMinutes > nowMinutes) {
      box.classList.add("next");
      break; // STOP di waktu terdekat
    }
  }
}

