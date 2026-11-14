import { fileGuests } from "../controller/openinig/openingBuild2.js";
import { startGates } from "../view/prompts/openGates.js";

const actions = [fileGuests];

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
