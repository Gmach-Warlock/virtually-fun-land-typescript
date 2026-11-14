import type {
  TPersonality,
  IGuestInfo,
  IGuest,
  IGuestTracker,
} from "../types/IGuest.js";

export class Guest implements IGuest {
  general: IGuestInfo;
  track: IGuestTracker;

  constructor(name: string, pType: TPersonality, vip: boolean) {
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
    console.log(
      `Currently ${this.general.name} is currently at ${this.track.pLocation}`,
    );
  }
}
