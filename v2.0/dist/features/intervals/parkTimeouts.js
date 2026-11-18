import { fileGuests } from "../../controller/openinig/fileGuests.js";
import { mainMenu } from "../../view/menu.js";
import { startGates } from "../../view/prompts/open/openGates.js";
import { startRestockIntervals } from "./parkIntervals.js";
const actions = [fileGuests, startRestockIntervals, mainMenu];
export function parkOpeningTimeouts(interval = 2000) {
    startGates();
    let step = 1;
    actions.forEach((action) => {
        setTimeout(() => {
            action();
        }, interval * step);
        step++;
    });
}
//# sourceMappingURL=parkTimeouts.js.map