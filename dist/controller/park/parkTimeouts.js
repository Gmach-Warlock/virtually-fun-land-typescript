import { mainMenu } from "../../view/menu.js";
import { buildGames } from "../game/gameBuild.js";
import { buildGuests, formRideLines, splitGuests } from "../guest/guestSeed.js";
import { logRush } from "../guest/openingGuests.js";
import { buildRides } from "../ride/createRides.js";
import { buildStartup } from "./parkStartup.js";
export function startParkChain(interval = 1000) {
    buildStartup();
    setTimeout(() => {
        buildRides();
        buildGames();
    }, interval);
    setTimeout(() => {
        buildGuests();
        splitGuests();
    }, interval * 2);
    setTimeout(() => {
        formRideLines();
        logRush();
    }, interval * 3);
    setTimeout(() => {
        mainMenu();
    }, interval * 4);
}
//# sourceMappingURL=parkTimeouts.js.map