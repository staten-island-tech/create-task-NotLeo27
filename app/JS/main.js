import { clubs, players, skills } from "./BlueLock.js";
import { DOMSelectors } from "./DOMSelectors";

let inventory = [];
let startingMoney = 150000000;

function getRandomPlayer() {
  const totalWeight = players.reduce((sum, player) => sum + player.weight, 0);
  let random = Math.random() * totalWeight;
  for (let player of players) {
    if (random < player.weight) {
      return player;
    }
    random -= player.weight;
  }
}

function summon() {
  let player = getRandomPlayer();
  if (!inventory.includes(player) && !summonHistory.includes(player)) {
    inventory.push(player);
    summonHistory.push(player);
    displaySummonedPlayer(player);
  } else {
    summon();
  }
}

function displaySummonedPlayer(player) {
  const summonHistoryDiv = document.getElementById("summonHistory");
  summonHistoryDiv.insertAdjacentHTML(
    "beforeend",
    `<div class="p-4 bg-gray-800 text-white rounded-md shadow-md mt-4"> <h3 class="text-lg font-bold">${
      player.name
    }</h3> <p>Cumulative Stats: ${
      player.cumulative_stats
    }</p> <p>Skills: ${player.skills.join(", ")}</p> </div>`
  );
}

function battleScreen() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="absolute inset-0 z-0 bg-fade">
          <div class="absolute inset-0 bg-gif"></div>
        </div>

        <div class="relative z-10 p-4">
          <div class="flex flex-col items-start gap-4">
            <button
              class="transform hover:scale-105 transition-transform duration-200"
            >
              <div
                class="bg-gradient-to-r from-game-gold to-game-gold-dark px-12 py-3 rounded-lg shadow-lg"
              >
                <span class="text-4xl font-bold text-white tracking-wider"
                  >START</span
                >
              </div>
            </button>

            <div class="bg-black/40 backdrop-blur-sm p-4 rounded-lg">
              <h2 class="text-game-gold text-xl mb-2">SELECT MODE</h2>
              <div
                class="flex items-center gap-2 p-2 bg-indigo-900/50 rounded-md w-[200px]"
              >
                <span class="text-2xl font-bold text-white">5V5</span>
                <img
                  src="/BlueLockS2.png"
                  alt="Character portraits"
                  class="w-[150px] h-[100px] rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>`
  );
}

function displayShop() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="shop-content w-full h-full flex justify-center items-center p-4">
      <div class="w-full max-w-md">
        <div class="rounded-lg overflow-hidden shadow-lg">

          <div class="w-full h-64 relative bg-banner-dark bg-cover bg-center">
            <div class="absolute inset-0 bg-gradient-to-t from-banner-dark to-transparent"></div>
          </div>
          
          <div class="bg-banner-dark p-4 flex justify-center gap-4">
            <button class="px-8 py-2 bg-banner-purple rounded-full text-white font-bold shadow-glow hover:opacity-90 transition-opacity">
              <div class="flex flex-col items-center">
                <span>1x Pull</span>
                <span class="text-xs text-gray-400">$5,000,000</span>
              </div>
            </button>
            
            <button class="px-8 py-2 bg-banner-purple rounded-full text-white font-bold shadow-glow hover:opacity-90 transition-opacity">
              <div class="flex flex-col items-center">
                <span>10x Pull</span>
                <span class="text-xs text-gray-400">$50,000,000</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div id="summonHistory">
      </div>
    </div>`
  );

  document
    .querySelector(".bg-banner-dark")
    .classList.add("bg-cover", "bg-center");
  document.querySelector(".bg-banner-dark").style.backgroundImage =
    'url("BannerImage.jpg")';
}

function summon() {}

function displayInventory() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="inventory-content">
      <!-- Add your inventory content here -->
    </div>`
  );
}

function displaySetting() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="settings-content">
      <!-- Add your settings content here -->
    </div>`
  );
}

const tabActions = {
  battle: battleScreen,
  inventory: displayInventory,
  shop: displayShop,
  settings: displaySetting,
};

function handleTabClick(event) {
  const tabId = event.target.id;
  clear();
  if (tabActions[tabId]) {
    tabActions[tabId]();
  } else {
    console.warn(`No action found for tab: ${tabId}`);
  }
}

DOMSelectors.tabs.forEach((tab) =>
  tab.addEventListener("click", handleTabClick)
);
