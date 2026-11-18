import type { Attraction } from "../../types/attractionsTypeDefs.js";
import { spreadAttractions } from "./closeIntervals.js";
import { addItemToArray } from "../../controller/CRUD/CRUDHelpers.js";
import { park } from "../../app.js";
import { restockLines } from "../guest/guestActions.js";
import { initRideTimers } from "./initializeAttractions.js";

export function startAttractionIntervals() {
  const attractions = spreadAttractions();
  attractions.forEach((attraction: Attraction) => {
    initRideTimers(attraction);
  });
}

export function startRestockIntervals() {
  park.arrays.intervals = addItemToArray(
    park.arrays.intervals,
    setInterval(() => {
      restockLines();
    }, 3 * 60000),
  );
}
