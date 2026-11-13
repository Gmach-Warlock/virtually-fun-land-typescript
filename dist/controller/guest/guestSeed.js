import { Guest } from "../../model/guest/Guest.js";
import { vflGuestGroups } from "../../model/guest/GuestGroups.js";
import { vflGuestList } from "../../model/guest/GuestList.js";
import { createOpeningGuests, hydrateGuest } from "./guestFactory.js";
import { rng } from "../rng/rngHelpers.js";
import { vflQueues } from "../../model/park/ParkQueues.js";
import { vflGames } from "../../model/park/ParkGames.js";
export function buildGuests() {
    const guestsToHydrate = createOpeningGuests();
    guestsToHydrate.randoms.forEach((guest) => {
        hydrateGuest(guest);
    });
    guestsToHydrate.regulars.forEach((guest) => {
        hydrateGuest(guest);
    });
    vflGuestList.log("initialize");
}
export function seedLines() {
    vflGuestList.guests.forEach((guest) => {
        if (guest.personality?.type === "rider" &&
            guest.status?.status !== "waiting") {
            const queueIndex = Math.floor(Math.random() * 3);
            vflQueues.queues?.[queueIndex]?.enqueue(guest);
        }
    });
}
export function boardRandomRide(guest) {
    const randomIndex = rng(3);
    if (randomIndex === undefined)
        return;
    vflQueues.queues?.[randomIndex]?.enqueue(guest);
}
export function enterGame(guest) {
    if (guest.status?.status === "waiting" || guest.status?.status === "playing")
        return;
    const randomIndex = rng(2);
    if (randomIndex === undefined)
        return;
    vflGames.games[randomIndex]?.contestants?.enqueue(guest);
}
export function splitGuests() {
    vflGuestList.guests.forEach((guest) => {
        const lookup = {
            rider: () => {
                vflGuestGroups.add("rider", guest);
                boardRandomRide(guest);
            },
            gamer: () => {
                vflGuestGroups.add("gamer", guest);
                enterGame(guest);
            },
            watcher: () => {
                vflGuestGroups.add("watcher", guest);
            },
            wanderer: () => {
                vflGuestGroups.add("wanderer", guest);
            },
        };
        if (!guest)
            return;
        const type = guest.personality?.type;
        if (!type)
            return;
        lookup[type]?.();
    });
}
export function formRideLines() {
    splitGuests();
}
//# sourceMappingURL=guestSeed.js.map