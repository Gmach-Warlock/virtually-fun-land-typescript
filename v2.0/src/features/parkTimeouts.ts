import { park } from "../app.js";
import { addItemToArray } from "../controller/CRUD/CRUDHelpers.js";
import { DEBUG } from "../controller/CRUD/DEBUG.js";
import { fileGuests } from "../controller/openinig/fileGuests.js";
import type { Attraction } from "../types/attractionsTypeDefs.js";
import { mainMenu } from "../view/menu.js";
import {
  logAttractionOperation,
  logRideExperience,
} from "../view/prompts/attractions/attractionOperation.js";
import { convertMilliToMinute } from "../view/prompts/attractions/logLines.js";
import { startGates } from "../view/prompts/open/openGates.js";
import { handleAttractionTurnover } from "./guest/dequeueGuest.js";
import { restockLines } from "./guest/guestActions.js";

const actions = [fileGuests, startRestockIntervals, mainMenu];

export function parkOpeningTimeouts(interval: number = 1000) {
  startGates();
  let step: number = 1;
  actions.forEach((action) => {
    setTimeout(() => {
      action();
    }, interval * step);
    step++;
  });
}

export function spreadAttractions() {
  const arrays = park.arrays;
  const attractions = [...arrays.games, ...arrays.rides, ...arrays.shows];
  return attractions;
}

export function startAttractionIntervals() {
  const attractions = spreadAttractions();
  attractions.forEach((attraction: Attraction) => {
    attraction.interval = setInterval(() => {
      logAttractionOperation(attraction);
      logRideExperience(attraction);
      handleAttractionTurnover(attraction);
      mainMenu();
    }, convertMilliToMinute(attraction.metrics.duration));
  });
}

export function startRestockIntervals() {
  park.arrays.intervals = addItemToArray(
    park.arrays.intervals,
    setInterval(() => {
      console.log(`Restocking Lines now`);
      restockLines();
    }, 10 * 60000),
  );
}

export function closeIntervals() {
  const attractions = spreadAttractions();
  attractions.forEach((attraction: Attraction) => {
    attraction.interval?.close();
  });
  park.arrays.intervals.forEach((interval) => {
    interval?.close();
  });
}
