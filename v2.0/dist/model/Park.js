import { buildGuests } from "../controller/openinig/openingBuild2.js";
import { buildGames, buildRides, buildShows, } from "../controller/openinig/openingBuild.js";
import { linkAttractions } from "../controller/openinig/linkAttractions.js";
import { parkOpeningTimeouts, startAttractionIntervals, } from "../features/parkTimeouts.js";
import { addItemToArray, removeItem } from "../controller/CRUD/CRUDHelpers.js";
import { attractionsLogSubscriber, guestListLogSubscriber, } from "../features/attractions/attractionSubscriber.js";
import { logOpeningRush } from "../view/prompts/open/openingRush.js";
export class Park {
    static #instance = null;
    id = "VFL-park";
    name = "Virtually Fun Land";
    arrays;
    subscribers;
    constructor() {
        this.subscribers = [];
        this.arrays = {
            rides: buildRides(),
            games: buildGames(),
            guests: buildGuests(),
            shows: buildShows(),
            intervals: [],
        };
        linkAttractions(this.arrays.rides, this.arrays.games, this.arrays.shows);
        const guest = this.arrays.guests[this.arrays.guests.length - 1];
        if (guest === undefined) {
            return;
        }
        this.subscribe(attractionsLogSubscriber);
        this.subscribe(guestListLogSubscriber);
        this.notify("initialize", guest);
    }
    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new Park();
        }
        return this.#instance;
    }
    add(guest) {
        this.arrays.guests = addItemToArray(this.arrays.guests, guest);
        this.notify("add", guest);
    }
    log(type) {
        const lookup = {
            initialize: () => logOpeningRush(this.arrays, true),
            enqueue: () => console.log("coming"),
            dequeue: () => console.log("coming"),
            leave: () => console.log("coming"),
            jump: () => console.log("coming"),
            add: () => console.log("coming"),
            remove: () => console.log("coming"),
        };
        if (!lookup || !lookup[type])
            return;
        return lookup[type]();
    }
    notify(type, guest) {
        this.subscribers.forEach((subscriber) => {
            subscriber(type, guest);
        });
    }
    open() {
        parkOpeningTimeouts();
        startAttractionIntervals();
    }
    remove(guest) {
        this.arrays.guests = removeItem(this.arrays.guests, guest);
        this.notify("remove", guest);
    }
    subscribe(subscriber) {
        this.subscribers = addItemToArray(this.subscribers, subscriber);
    }
}
//# sourceMappingURL=Park.js.map