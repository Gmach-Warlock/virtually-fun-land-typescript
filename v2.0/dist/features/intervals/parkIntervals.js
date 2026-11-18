import { spreadAttractions } from "./closeIntervals.js";
import { addItemToArray } from "../../controller/CRUD/CRUDHelpers.js";
import { park } from "../../app.js";
import { restockLines } from "../guest/guestActions.js";
import { initRideTimers } from "./initializeAttractions.js";
export function startAttractionIntervals() {
    const attractions = spreadAttractions();
    attractions.forEach((attraction) => {
        initRideTimers(attraction);
    });
}
export function startRestockIntervals() {
    park.arrays.intervals = addItemToArray(park.arrays.intervals, setInterval(() => {
        restockLines();
    }, 3 * 60000));
}
//# sourceMappingURL=parkIntervals.js.map