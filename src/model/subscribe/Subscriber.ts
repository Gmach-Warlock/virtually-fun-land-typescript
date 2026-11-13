import type { Subscription } from "../../types/basic/basicTypes.js";

export class Subscriber {
  #types: Subscription[];
  constructor(types: Subscription[]) {
    this.#types = types;
  }

  get types() {
    return this.#types;
  }
  set types(newTypes) {
    this.#types = newTypes;
  }
}
