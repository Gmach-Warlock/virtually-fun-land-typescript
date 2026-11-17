import { buildGuests } from "../controller/openinig/openingBuild2.js";
import {
  buildGames,
  buildRides,
  buildShows,
} from "../controller/openinig/openingBuild.js";
import { linkAttractions } from "../controller/openinig/linkAttractions.js";
import { ParkOpeningTimeouts } from "../features/parkTimeouts.js";
import type {
  ParkInstance,
  ParkArrays,
  LogSubscriber,
  SubscriberFunction,
} from "../types/gameTypeDefs.js";
import { addItemToArray } from "../controller/CRUD/CRUDHelpers.js";
import type { QueueNotify } from "../types/notifyTypeDefs.js";
import type { GuestInstance } from "../types/guestTypeDefs.js";
import { attractionsLogSubscriber } from "../features/attractionSubscriber.js";
import { logOpeningRush } from "../view/prompts/logGuestActivitiis.js";
export class Park implements ParkInstance {
  static #instance: ParkInstance | null = null;
  id: string = "VFL-park";
  name: string = "Virtually Fun Land";
  arrays: ParkArrays;
  subscribers: LogSubscriber[];

  constructor() {
    this.subscribers = [];
    this.arrays = {
      rides: buildRides(),
      games: buildGames(),
      guests: buildGuests(),
      shows: buildShows(),
    };
    linkAttractions(this.arrays.rides, this.arrays.games, this.arrays.shows);
    const guest = this.arrays.guests[this.arrays.guests.length - 1];
    if (guest === undefined) {
      return;
    }
    this.subscribe(attractionsLogSubscriber);
    this.notify("initialize", guest);
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new Park();
    }
    return this.#instance;
  }

  log(type: QueueNotify) {
    const lookup: Record<QueueNotify, () => void> = {
      initialize: () => logOpeningRush(this.arrays, true),
      enqueue: () => console.log("coming"),
      dequeue: () => console.log("coming"),
      leave: () => console.log("coming"),
      jump: () => console.log("coming"),
    };
    if (!lookup || !lookup[type]) return;
    return lookup[type]();
  }
  notify(type: QueueNotify, guest: GuestInstance) {
    this.subscribers.forEach((subscriber) => {
      subscriber(type, guest);
    });
  }
  open() {
    ParkOpeningTimeouts();
  }
  subscribe(subscriber: SubscriberFunction) {
    this.subscribers = addItemToArray(this.subscribers, subscriber);
  }
}
