import type { GuestStatus } from "./GuestStatus.js";
import type { GuestPersonality } from "./GuestPersonality.js";

export class Guest {
  id: string;
  name: string;
  #personality: GuestPersonality | undefined;
  #status: GuestStatus | undefined;

  constructor(name: string) {
    this.id = crypto.randomUUID();
    this.name = name;
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
