import { buildGuests } from "../controller/openinig/openingBuild2.js";
import {
  buildGames,
  buildRides,
  buildShows,
} from "../controller/openinig/openingBuild.js";
import { linkAttractions } from "../controller/openinig/linkAttractions.js";
import {
  parkOpeningTimeouts,
  startAttractionIntervals,
} from "../features/parkTimeouts.js";
import type {
  ParkInstance,
  ParkArrays,
  LogSubscriber,
  SubscriberFunction,
} from "../types/gameTypeDefs.js";
import { addItemToArray, removeItem } from "../controller/CRUD/CRUDHelpers.js";
import type { ListenerNotify } from "../types/notifyTypeDefs.js";
import type { GuestInstance } from "../types/guestTypeDefs.js";
import {
  attractionsLogSubscriber,
  guestListLogSubscriber,
} from "../features/attractions/attractionSubscriber.js";
import { logOpeningRush } from "../view/prompts/open/openingRush.js";

export class Park implements ParkInstance {
  static #instance: ParkInstance | null = null;
  id: string = "VFL-park";
  name: string = "Virtually Fun Land";
  arrays: ParkArrays;
  subscribers: LogSubscriber[];

  constructor() {
    this.subscribers = [];
    this.arrays = {
      rides: buildRides() as ParkArrays["rides"],
      games: buildGames() as ParkArrays["games"],
      guests: buildGuests() as ParkArrays["guests"],
      shows: buildShows() as ParkArrays["shows"],
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
  add(guest: GuestInstance) {
    this.arrays.guests = addItemToArray(this.arrays.guests, guest);
    this.notify("add", guest);
  }
  log(type: ListenerNotify) {
    const lookup: Record<ListenerNotify, () => void> = {
      initialize: () => logOpeningRush(this.arrays, true),
      enqueue: () => console.log("coming"),
      dequeue: () => console.log("coming"),
      leave: () => console.log("coming"),
      jump: () => console.log("coming"),
      add: () => console.log("coming"),
      remove: () => console.log("coming"),
    };
    if (!lookup || !lookup[type]) return;
    return lookup[type]();
  }
  notify(type: ListenerNotify, guest: GuestInstance) {
    this.subscribers.forEach((subscriber) => {
      subscriber(type, guest);
    });
  }
  open() {
    parkOpeningTimeouts();
    startAttractionIntervals();
  }
  remove(guest: GuestInstance) {
    this.arrays.guests = removeItem(this.arrays.guests, guest);
    this.notify("remove", guest);
  }
  subscribe(subscriber: SubscriberFunction) {
    this.subscribers = addItemToArray(this.subscribers, subscriber);
  }
}
