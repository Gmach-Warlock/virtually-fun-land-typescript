import { determinePersonalityType } from "./controller/rng/statHelpers.js";
import { createOpeningCrowdNames } from "./controller/guest/guestFactory.js";
import { initializePark } from "./controller/park/parkStartup.js";
import { mainMenu } from "./view/menu.js";

console.log(determinePersonalityType());
initializePark();
mainMenu();
createOpeningCrowdNames();
