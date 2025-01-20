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

