import { players, Rarities } from "./BlueLock.js";
import { DOMSelectors } from "./DOMSelectors";

let inventory = [];

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
    `<!-- First Banner Content -->
    <div class="max-w-md mx-auto p-4 bg-black border-2 border-yellow-500 rounded-lg opacity-80 mt-10 mb-10">
      <div class="relative mb-5">
        <div class="h-72"></div>
        <div class="absolute inset-0 border-2 border-yellow-500 rounded-lg h-72" style="background-image: url('/BL11Duo.png'); background-size: cover; background-position: center;">
          <!-- Banner Background image can be added here -->
        </div>
      </div>
      
      <div class="flex justify-center gap-5 mb-4">
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90">
          Single Summon
        </button>
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90">
          Multi Summon
        </button>
      </div>
    </div>
    
    <!-- Second Banner Content -->
    <div class="max-w-md mx-auto p-4 bg-black border-2 border-yellow-500 rounded-lg opacity-80 mt-10 mb-10"> <!-- Adjusted margin-bottom -->
      <div class="relative mb-5">
        <div class="h-72"></div>
        <div class="absolute inset-0 border-2 border-yellow-500 rounded-lg h-72" style="background-image: url('/U20Duo.png'); background-size: cover; background-position: center;">
          <!-- Banner Background image can be added here -->
        </div>
      </div>
      
      <div class="flex justify-center gap-5 mb-4">
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90">
          Single Summon
        </button>
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90">
          Multi Summon
        </button>
      </div>
    </div>

    <!-- Third Banner Content -->
    <div class="max-w-md mx-auto p-4 bg-black border-2 border-yellow-500 rounded-lg opacity-80 mt-10 mb-20"> <!-- Adjusted margin-bottom -->
      <div class="relative mb-5">
        <div class="h-72"></div>
        <div class="absolute inset-0 border-2 border-yellow-500 rounded-lg h-72" style="background-image: url('/Nagi & Barou.png'); background-size: cover; background-position: center;">
          <!-- Banner Background image can be added here -->
        </div>
      </div>
      
      <div class="flex justify-center gap-5 mb-4">
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90">
          Single Summon
        </button>
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold transition-opacity duration-300 hover:opacity-90">
          Multi Summon
        </button>
      </div>
    </div>`
  );
}

function displayInventory() {
  inventory.forEach((player) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<!-- Your inventory HTML content here -->`
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

// Add event listeners to the buttons
DOMSelectors.tabButtons.forEach(button => {
  button.addEventListener("click", handleTabClick);
});
