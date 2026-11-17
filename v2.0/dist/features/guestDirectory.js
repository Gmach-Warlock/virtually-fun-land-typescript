import { park } from "../app.js";
import { logAttendance } from "../view/prompts/logGuestActivitiis.js";
import { mainMenu } from "../view/menu.js";
export function logGuest(guest) {
    console.log(guest.general.name);
}
export function logGuestList() {
    console.log(`Here is a list of the current guests. `);
    const guests = park.arrays.guests;
    guests.forEach((guest) => logGuest(guest));
}
export function viewGuestDirectory() {
    logAttendance();
    logGuestList();
    mainMenu();
}
//# sourceMappingURL=guestDirectory.js.map