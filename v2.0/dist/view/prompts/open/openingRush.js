import { logLine } from "../attractions/logLines.js";
export function attractionsPrompt(arrays) {
    console.log(`
There are currently ${arrays.guests.length} people in attendance. Here are the Attractions and their current queue members and wait times.
  `);
}
function initialAttractionsPrompt() {
    console.log(`
After hearing the announcement, the guests all rush to their favorite attractions!!`);
}
function logEachAttraction(arrays) {
    arrays.games.forEach((game) => {
        if (game.queue) {
            logLine(game.queue);
        }
    });
    arrays.rides.forEach((ride) => {
        if (ride.queue) {
            logLine(ride.queue);
        }
    });
    arrays.shows.forEach((show) => {
        if (show.queue) {
            logLine(show.queue);
        }
    });
}
export function logOpeningRush(arrays, initialize = false) {
    attractionsPrompt(arrays);
    if (initialize) {
        initialAttractionsPrompt();
    }
    logEachAttraction(arrays);
}
export function checkLines(arrays) {
    attractionsPrompt(arrays);
    logEachAttraction(arrays);
}
//# sourceMappingURL=openingRush.js.map