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
    `
    <!-- First Banner Content -->
    <div class="max-w-md mx-auto p-4 bg-black border-2 border-yellow-500 rounded-lg opacity-80 mt-10 mb-10">
      <div class="relative mb-5">
        <div class="h-72"></div>
        <div class="absolute inset-0 border-2 border-yellow-500 rounded-lg h-72" style="background-image: url('/BL11Duo.png'); background-size: cover; background-position: center;"></div>
      </div>
      
      <div class="flex justify-center gap-5 mb-4">
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90 single-summon" data-banner="banner1">
          Single Summon
        </button>
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90 multi-summon" data-banner="banner1">
          Multi Summon
        </button>
      </div>
    </div>
    
    <!-- Second Banner Content -->
    <div class="max-w-md mx-auto p-4 bg-black border-2 border-yellow-500 rounded-lg opacity-80 mt-10 mb-10">
      <div class="relative mb-5">
        <div class="h-72"></div>
        <div class="absolute inset-0 border-2 border-yellow-500 rounded-lg h-72" style="background-image: url('/U20Duo.png'); background-size: cover; background-position: center;"></div>
      </div>
      
      <div class="flex justify-center gap-5 mb-4">
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90 single-summon" data-banner="banner2">
          Single Summon
        </button>
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90 multi-summon" data-banner="banner2">
          Multi Summon
        </button>
      </div>
    </div>

    <!-- Third Banner Content -->
    <div class="max-w-md mx-auto p-4 bg-black border-2 border-yellow-500 rounded-lg opacity-80 mt-10 mb-20">
      <div class="relative mb-5">
        <div class="h-72"></div>
        <div class="absolute inset-0 border-2 border-yellow-500 rounded-lg h-72" style="background-image: url('/Nagi & Barou.png'); background-size: cover; background-position: center;"></div>
      </div>
      
      <div class="flex justify-center gap-5 mb-4">
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90 single-summon" data-banner="banner3">
          Single Summon
        </button>
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90 multi-summon" data-banner="banner3">
          Multi Summon
        </button>
      </div>
    </div>
    `
  );

  document.querySelectorAll(".single-summon").forEach(button => {
    button.addEventListener("click", () => summon("single", button.dataset.banner));
  });
  document.querySelectorAll(".multi-summon").forEach(button => {
    button.addEventListener("click", () => summon("multi", button.dataset.banner));
  });
}


function displayInventory() {
  console.log("Displaying inventory:", inventory)
  DOMSelectors.container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      ${inventory
        .map(
          (player) => `
        <div class="relative w-80 mx-auto transform transition-transform duration-200 hover:scale-102 cursor-pointer overflow-hidden rounded-lg ${
          player.rarity === "Common"
            ? "bg-gradient-to-br from-blue-800 to-blue-600"
            : player.rarity === "Uncommon"
              ? "bg-gradient-to-br from-green-800 to-green-600"
              : player.rarity === "Rare"
                ? "bg-gradient-to-br from-red-800 to-red-600"
                : "bg-gradient-to-br from-yellow-500 to-yellow-400"
        }">
          <div class="relative p-4 text-white">
            <!-- Player Image -->
            <div class="absolute top-0 left-0 w-full h-48 overflow-hidden">
              <img src="${player.image}" alt="${player.name}" class="w-full h-full object-cover object-center" />
            </div>
            
            <!-- Rating Box -->
            <div class="absolute top-4 left-4 bg-black/80 p-2 rounded-md text-center z-10">
              <div class="text-3xl font-bold leading-none">${player.cumulative_stats}</div>
              <div class="text-sm opacity-90">ST</div>
            </div>
            
            <!-- Player Name -->
            <h2 class="text-center text-xl font-bold mt-52 mb-4 text-white drop-shadow-lg">
              ${player.name}
            </h2>
            
            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-4 bg-black/60 p-4 rounded-lg">
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="font-bold opacity-90">PAC</span>
                  <span class="text-lg">${player.stats.speed}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-bold opacity-90">SHO</span>
                  <span class="text-lg">${player.stats.shoot}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-bold opacity-90">PAS</span>
                  <span class="text-lg">${player.stats.passing}</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="font-bold opacity-90">DRI</span>
                  <span class="text-lg">${player.stats.dribble}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-bold opacity-90">DEF</span>
                  <span class="text-lg">${player.stats.defense}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-bold opacity-90">PHY</span>
                  <span class="text-lg">${player.stats.offense}</span>
                </div>
              </div>
            </div>

            <!-- Skills Section -->
            <div class="mt-4 bg-black/60 p-3 rounded-lg">
              <h3 class="font-bold mb-2">Skills:</h3>
              <ul class="space-y-1">
                ${player.skills
                  .map(
                    (skill) => `
                  <li class="opacity-90 text-sm">${skill}</li>
                `,
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `
}


function getRandomPlayerFromPool(pool) {
  const random = Math.random() * 100;
  let rarity;
  
  if (random < 60) {
    rarity = 'Common';
  } else if (random < 90) {
    rarity = 'Uncommon';
  } else if (random < 99) {
    rarity = 'Rare';
  } else {
    rarity = 'Legendary';
  }

  const filteredPool = pool.filter(player => player.rarity === rarity);
  return filteredPool[Math.floor(Math.random() * filteredPool.length)];
}


function summon(type, banner) {
  const pool = getBannerPool(banner);
  let playersToAdd = [];

  if (type === "single") {
    playersToAdd.push(getRandomPlayerFromPool(pool));
  } else if (type === "multi") {
    for (let i = 0; i < 10; i++) {
      playersToAdd.push(getRandomPlayerFromPool(pool));
    }
  }

  playersToAdd.forEach(player => {
    if (!inventory.some(item => item.name === player.name)) {
      inventory.push(player);
    }
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

document.addEventListener("DOMContentLoaded", () => {
  DOMSelectors.tabButtons.forEach(button => {
    button.addEventListener("click", handleTabClick);
  });

  document.querySelectorAll(".single-summon").forEach(button => {
    button.addEventListener("click", () => summon("single", button.dataset.banner));
  });
  document.querySelectorAll(".multi-summon").forEach(button => {
    button.addEventListener("click", () => summon("multi", button.dataset.banner));
  });
});
