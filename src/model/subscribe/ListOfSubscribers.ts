import type { Subscription } from "../../types/basicTypes.js";
import type { Subscriber } from "./Subscriber.js";

export class ListOfSubscribers {
  #type: Subscription;
  #subscribers: Subscriber[];

  constructor(type: Subscription, subs: Subscriber[]) {
    this.#type = type;
    this.#subscribers = subs;
  }

  get type() {
    return this.#type;
  }
  set type(newType: Subscription) {
    this.#type = newType;
  }
  get subscribers() {
    return this.#subscribers;
  }
  set subscribers(newSubs: Subscriber[]) {
    this.#subscribers = newSubs;
  }
}
