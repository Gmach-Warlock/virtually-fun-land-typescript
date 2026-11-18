import { logAttractionOperation } from "../../view/prompts/attractions/attractionOperation.js";
import { logAttractionExperience } from "../../view/prompts/attractions/experiencePrompts.js";
import { handleAttractionTurnover } from "../guest/dequeueGuest.js";
import { mainMenu } from "../../view/menu.js";
import { convertMilliToMinute } from "../../view/prompts/attractions/logLines.js";
export function initRideTimers(attraction) {
    attraction.interval = setInterval(() => {
        logAttractionOperation(attraction);
        logAttractionExperience(attraction);
        handleAttractionTurnover(attraction);
        mainMenu();
    }, convertMilliToMinute(attraction.metrics.duration));
}
//# sourceMappingURL=initializeAttractions.js.map