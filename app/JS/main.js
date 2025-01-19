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

