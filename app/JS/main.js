import { players, allBanners, banner1Exclusive, banner2Exclusive, banner3Exclusive } from "./BlueLock.js";
import { DOMSelectors } from "./DOMSelectors.js";

let inventory = [];

function getBannerPool(banner) {
  let pool = [...allBanners];
  if (banner === "banner1") {
    pool = pool.concat(banner1Exclusive);
  } else if (banner === "banner2") {
    pool = pool.concat(banner2Exclusive);
  } else if (banner === "banner3") {
    pool = pool.concat(banner3Exclusive);
  }
  return pool.map(name => players.find(player => player.name === name));
}

function clear() {
  try {
    DOMSelectors.container.innerHTML = "";
  } catch (error) {
    console.error("Error clearing container:", error);
  }
}

function displayShop() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="max-w-md mx-auto p-4 bg-black border-2 border-yellow-500 rounded-lg opacity-80 mt-10 mb-10">
      <div class="relative mb-5">
        <div class="h-72"></div>
        <div class="absolute inset-0 border-2 border-yellow-500 rounded-lg h-72" style="background-image: url('/BL11Duo.png'); background-size: cover; background-position: center;"></div>
      </div>
      
      <div class="flex justify-center gap-5 mb-4">
        <button class="single-summon" data-banner="banner1">Single Summon</button>
        <button class="multi-summon" data-banner="banner1">Multi Summon</button>
      </div>
    </div>
    
    <div class="max-w-md mx-auto p-4 bg-black border-2 border-yellow-500 rounded-lg opacity-80 mt-10 mb-10">
      <div class="relative mb-5">
        <div class="h-72"></div>
        <div class="absolute inset-0 border-2 border-yellow-500 rounded-lg h-72" style="background-image: url('/U20Duo.png'); background-size: cover; background-position: center;"></div>
      </div>
      
      <div class="flex justify-center gap-5 mb-4">
        <button class="single-summon" data-banner="banner2">Single Summon</button>
        <button class="multi-summon" data-banner="banner2">Multi Summon</button>
      </div>
    </div>

    <div class="max-w-md mx-auto p-4 bg-black border-2 border-yellow-500 rounded-lg opacity-80 mt-10 mb-20">
      <div class="relative mb-5">
        <div class="h-72"></div>
        <div class="absolute inset-0 border-2 border-yellow-500 rounded-lg h-72" style="background-image: url('/Nagi & Barou.png'); background-size: cover; background-position: center;"></div>
      </div>
      
      <div class="flex justify-center gap-5 mb-4">
        <button class="single-summon" data-banner="banner3">Single Summon</button>
        <button class="multi-summon" data-banner="banner3">Multi Summon</button>
      </div>
    </div>`
  );

  document.querySelectorAll(".single-summon").forEach(button => {
    button.addEventListener("click", () => summon("single", button.dataset.banner));
  });
  document.querySelectorAll(".multi-summon").forEach(button => {
    button.addEventListener("click", () => summon("multi", button.dataset.banner));
  });
}

function displayInventory() {
  inventory.forEach((player) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <div class="card-top">
          <div class="rating">
            <span class="rating-number">${player.cumulative_stats}</span>
            <span class="position">ST</span>
          </div>
          <div class="rarity">${player.rarity}</div>
        </div>

        <div class="card-content">
          <h2 class="player-name">${player.name}</h2>
          
          <div class="stats-container">
            <div class="stats-column">
              <div class="stat">
                <span class="stat-label">SPD</span>
                <span class="stat-value">${player.stats.speed}</span>
              </div>
              <div class="stat">
                <span class="stat-label">SHO</span>
                <span class="stat-value">${player.stats.shoot}</span>
              </div>
              <div class="stat">
                <span class="stat-label">PAS</span>
                <span class="stat-value">${player.stats.passing}</span>
              </div>
            </div>
            <div class="stats-column">
              <div class="stat">
                <span class="stat-label">DRI</span>
                <span class="stat-value">${player.stats.dribble}</span>
              </div>
              <div class="stat">
                <span class="stat-label">DEF</span>
                <span class="stat-value">${player.stats.defense}</span>
              </div>
              <div class="stat">
                <span class="stat-label">OFF</span>
                <span class="stat-value">${player.stats.offense}</span>
              </div>
            </div>
          </div>

          <div class="skills-tooltip">
            <h3>Skills:</h3>
            <ul>
              ${player.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>`
    );
  });
}

function handleTabClick(event) {
  const buttonId = event.target.id;
  clear();
  if (buttonId === "shop-tab") {
    displayShop();
  } else if (buttonId === "inventory-tab") {
    displayInventory();
  }
}

function summon(type, banner) {
  const pool = getBannerPool(banner);
  let playersToAdd = [];

  if (type === "single") {
    playersToAdd.push(pool[Math.floor(Math.random() * pool.length)]);
  } else if (type === "multi") {
    for (let i = 0; i < 10; i++) {
      playersToAdd.push(pool[Math.floor(Math.random() * pool.length)]);
    }
  }

  playersToAdd.forEach(player => {
    if (!inventory.some(item => item.name === player.name)) {
      inventory.push(player);
    }
  });

  displayInventory();
}

document.addEventListener("DOMContentLoaded", () => {
  DOMSelectors.tabButtons.forEach(button => {
    button.addEventListener("click", handleTabClick);
  });
});
