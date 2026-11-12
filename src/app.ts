import {
  createOpeningCrowdNames,
  determinePersonalityType,
} from "./controller/guest/openingGuests.js";
import { initializePark } from "./controller/park/parkStartup.js";
import { mainMenu } from "./view/menu.js";

console.log(determinePersonalityType());
initializePark();
mainMenu();
createOpeningCrowdNames();
