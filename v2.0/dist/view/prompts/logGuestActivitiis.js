import { logLine, logNameString } from "./logLines.js";
export function logAttendance(arrays) {
    console.log(`
  A fine turnout today. There are currently ${arrays.guests.length} people in attendance. 
  `);
}
export function logGuests(arrays) {
    console.log(`Here are the current guests in attendance. 
    `);
    const names = arrays.guests.map((guest) => guest.general.name);
    if (names === undefined || names === null || names.length === 0)
        return;
    // logNameString(names)
}
export function logOpeningRush(arrays, initialize = false) {
    console.log(`
  A fine turnout today. There are currently ${arrays.guests.length} people in attendance. 
  `);
    if (initialize) {
        console.log(`After hearing the announcement, the guests all rush to their favorite attractions!!`);
    }
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
export function logRoamer(guest) {
    if (guest.general.pType === "wanderer") {
        console.log(`${guest.general.name} is roaming around enjoying the sites!`);
    }
}
//# sourceMappingURL=logGuestActivitiis.js.map