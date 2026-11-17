import { fileGuests } from "../controller/openinig/fileGuests.js";
import { mainMenu } from "../view/menu.js";
import { startGates } from "../view/prompts/openGates.js";

const actions = [fileGuests, mainMenu];

export function ParkOpeningTimeouts(interval: number = 1000) {
  startGates();
  let step: number = 1;
  actions.forEach((action) => {
    setTimeout(() => {
      action();
    }, interval * step);
    step++;
  });
}
