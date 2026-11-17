import type {
  Personality,
  GuestInfo,
  GuestInstance,
  GuestTracker,
} from "../types/guestTypeDefs.js";
import { logGuestCurrently } from "../view/prompts/guests/logGuestActivitiis.js";

export class Guest implements GuestInstance {
  general: GuestInfo;
  track: GuestTracker;

  constructor(name: string, pType: Personality, vip: boolean) {
    this.general = {
      id: crypto.randomUUID(),
      name,
      pType,
      vip,
    };
    this.track = {
      pCurrently: "entering",
      pLocation: "Entrance",
    };
  }
  log() {
    logGuestCurrently(this);
  }
}
