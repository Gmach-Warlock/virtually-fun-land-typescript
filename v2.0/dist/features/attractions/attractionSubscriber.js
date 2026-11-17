import { park } from "../../app.js";
import { DEBUG } from "../../controller/CRUD/DEBUG.js";
import { logAttendance } from "../../view/prompts/guests/logGuestActivitiis.js";
import { logGuestList } from "../guest/guestDirectory.js";
export function attractionsLogSubscriber(type, guest, debug = false) {
    if (debug)
        DEBUG("ATTRACTIONS LOG SUBSCRIBER", [type, guest]);
    const lookup = {
        initialize: `${guest.general.name} is the last of the morning rush.`,
        enqueue: `${guest.general.name} has gotten in line for ${guest.track.pLocation}`,
        dequeue: `${guest.general.name} has finished at ${guest.track.pLocation}`,
        jump: `${guest.general.name} has entered the fast pass section.`,
        leave: `${guest.general.name} has decided to leave the line for ${guest.track.pLocation}`,
        add: `${guest.general.name} has entered the park.`,
        remove: `${guest.general.name} has left the park.`,
    };
    if (type !== "initialize")
        console.log(lookup[type]);
}
export function guestListLogSubscriber(type) {
    if (type === "initialize")
        return;
    const arrays = park.arrays;
    const guests = park.arrays.guests;
    if (guests === undefined || guests === null)
        return;
    if (guests.length === 0) {
        console.log("There are no guests anymore! What happened?!");
        return;
    }
    logAttendance(arrays);
    logGuestList();
}
export const logListeners = [attractionsLogSubscriber, guestListLogSubscriber];
//# sourceMappingURL=attractionSubscriber.js.map