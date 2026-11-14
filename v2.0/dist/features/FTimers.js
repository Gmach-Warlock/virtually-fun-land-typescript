import { fileGuests } from "../controller/openinig/openingBuild2.js";
import { startGates } from "../view/prompts/openGates.js";
const actions = [fileGuests];
export function ParkOpeningTimeouts(interval = 1000) {
    startGates();
    let step = 1;
    actions.forEach((action) => {
        setTimeout(() => {
            action();
        }, interval * step);
        step++;
    });
}
//# sourceMappingURL=FTimers.js.map