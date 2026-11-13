import type { BasicNotify } from "../../types/basicTypes.js";
import type { GuestStatus } from "./GuestStatus.js";
import type { GuestPersonality } from "./GuestPersonality.js";

export class Guest {
  #name: string;
  #personality: GuestPersonality | undefined;
  #status: GuestStatus | undefined;

  constructor(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
  set name(newName: string) {
    this.#name = newName;
  }
  get personality(): GuestPersonality | undefined {
    return this.#personality;
  }
  set personality(newPersonality: GuestPersonality | undefined) {
    this.#personality = newPersonality;
  }
  get status() {
    return this.#status;
  }
  set status(newStatus: GuestStatus | undefined) {
    this.#status = newStatus;
  }

  log() {
    console.log("Finish buddy");
  }
}
