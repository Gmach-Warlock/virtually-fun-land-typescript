import { park } from "../../app.js";
import { getInLine } from "../../controller/openinig/fileGuests.js";
import { determineIsWinner } from "../../controller/rng/gameStats.js";
export function findRestockers() {
    const guests = park.arrays.guests;
    const available = guests.filter((guest) => guest.track.pCurrently !== "waiting" &&
        guest.track.pCurrently !== "playing" &&
        guest.track.pCurrently !== "riding");
    return available;
}
export function restockLines() {
    const available = findRestockers();
    if (!Array.isArray(available))
        return;
    available.forEach((guest) => {
        const isTrue = determineIsWinner();
        if (isTrue) {
            getInLine(guest, park, false);
        }
    });
}
//# sourceMappingURL=guestActions.js.map