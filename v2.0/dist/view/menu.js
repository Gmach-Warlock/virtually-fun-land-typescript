import { addNewGuest } from "../features/guest/addGuest.js";
import { viewGuestDirectory } from "../features/guest/guestDirectory.js";
import { removeGuest } from "../features/guest/removeGuest.js";
import { viewAttractionDirectory } from "../features/attractions/attractionDirectory.js";
import { rl } from "./getInput.js";
import { getNumericInput } from "./getInput.js";
import { startMenu } from "./prompts/open/openMenu.js";
import { enqueueAttraction } from "../features/attractions/enqueAttraction.js";
import { viewAttractionLines } from "../features/attractions/checkAttractionLines.js";
import { closeIntervals } from "../features/parkTimeouts.js";
export function respondToMainMenu(answer) {
    const lookup = {
        1: () => addNewGuest(),
        2: () => removeGuest(),
        3: () => viewGuestDirectory(),
        4: () => enqueueAttraction(),
        5: () => viewAttractionLines(),
        6: () => viewAttractionDirectory(),
        7: () => exitApp(),
    };
    return lookup[answer]();
}
export function exitApp() {
    console.log("Thank you for visiting.");
    closeIntervals();
    rl.close();
}
export async function mainMenu() {
    startMenu();
    const answer = await getNumericInput(`Please enter the appropriate value: `, 7);
    if (answer)
        respondToMainMenu(Number(answer));
}
function soon() {
    console.log(`Coming soon`);
    mainMenu();
}
//# sourceMappingURL=menu.js.map