import { players } from "./BlueLock.js";
import { DOMSelectors } from "./DOMSelectors";

let inventory = [];

function clear() {
  try {
    DOMSelectors.container.innerHTML = "";
  } catch (error) {
    console.error("Error clearing container:", error);
  }
}

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

function summon(times = 1) {
  for (let i = 0; i < times; i++) {
    let player = getRandomPlayer();
    if (!inventory.includes(player) && !summonHistory.includes(player)) {
      inventory.push(player);
      summonHistory.push(player);
      displaySummonedPlayer(player);
    } else {
      i--;
    }
  }
}

function displaySummonedPlayer(player) {
  if (DOMSelectors.summonHistory) {
    DOMSelectors.summonHistory.insertAdjacentHTML(
      "beforeend",
      `<div class="p-4 bg-gray-800 text-white rounded-md shadow-md mt-4">
        <h3 class="text-lg font-bold">${player.name}</h3>
        <p>Cumulative Stats: ${player.cumulative_stats}</p>
        <p>Skills: ${player.skills.join(", ")}</p>
      </div>`
    );
  } else {
    console.error("Summon history container not found!");
  }
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
            <button id="singlePull" class="px-8 py-2 bg-banner-purple rounded-full text-white font-bold shadow-glow hover:opacity-90 transition-opacity">
              <div class="flex flex-col items-center">
                <span>1x Pull</span>
                <span class="text-xs text-gray-400">$5,000,000</span>
              </div>
            </button>
            
            <button id="tenPull" class="px-8 py-2 bg-banner-purple rounded-full text-white font-bold shadow-glow hover:opacity-90 transition-opacity">
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

  document
    .getElementById("singlePull")
    .addEventListener("click", () => summon(1));
  document
    .getElementById("tenPull")
    .addEventListener("click", () => summon(10));
}

function displayInventory() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="inventory-content">
      
    </div>`
  );
}

const tabActions = {
  inventory: displayInventory,
  shop: displayShop,
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

