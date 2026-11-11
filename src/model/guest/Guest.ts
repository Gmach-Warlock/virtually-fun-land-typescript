import type { Personality } from "../../types/basicTypes.js";

export class Guest {
  #name: string;
  #personality: Personality | undefined;

  constructor(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
  set name(newName: string) {
    this.#name = newName;
  }
  get personality(): Personality | undefined {
    if (this.#personality) return this.#personality;
  }
  set personality(newPersonality: Personality) {
    this.#personality = newPersonality;
  }
}
