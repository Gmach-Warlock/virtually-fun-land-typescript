import { park } from "../../../app.js";
export function logAttendance(arrays = park.arrays) {
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
export function logRoamer(guest) {
    if (guest.general.pType === "wanderer") {
        console.log(`${guest.general.name} is roaming around enjoying the sites!`);
    }
}
export function logGuestCurrently(guest) {
    console.log(`${guest.general.name} is ${guest.track.pCurrently}at ${guest.track.pLocation}`);
}
//# sourceMappingURL=logGuestActivitiis.js.map