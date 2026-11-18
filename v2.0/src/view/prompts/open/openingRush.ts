import type { ParkArrays } from "../../../types/gameTypeDefs.js";
import { logLine } from "../attractions/logLines.js";

export function attractionsPrompt(arrays: ParkArrays) {
  console.log(
    `
There are currently ${arrays.guests.length} people in attendance. Here are the Attractions and their current queue members and wait times.
  `,
  );
}

function initialAttractionsPrompt() {
  console.log(
    `
After hearing the announcement, the guests all rush to their favorite attractions!!`,
  );
}

function logEachAttraction(arrays: ParkArrays) {
  arrays.games.forEach((game) => {
    if (game.queue) {
      logLine(game.queue as any);
    }
  });
  arrays.rides.forEach((ride) => {
    if (ride.queue) {
      logLine(ride.queue as any);
    }
  });
  arrays.shows.forEach((show) => {
    if (show.queue) {
      logLine(show.queue as any);
    }
  });
}

export function logOpeningRush(arrays: ParkArrays, initialize = false) {
  attractionsPrompt(arrays);
  if (initialize) {
    initialAttractionsPrompt();
  }
  logEachAttraction(arrays);
}

export function checkLines(arrays: ParkArrays) {
  attractionsPrompt(arrays);
  logEachAttraction(arrays);
}
