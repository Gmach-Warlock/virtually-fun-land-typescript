import type {
  GuestLocation,
  GuestStatusType,
} from "../../types/guest/guestTypes.js";
import type { Guest } from "./Guest.js";

export class GuestStatus {
  #guest: Guest;
  status: GuestStatusType;
  location: GuestLocation;
  isVip: boolean;

  constructor(guest: Guest, isVip: boolean) {
    this.#guest = guest;
    this.location = "Entrance";
    this.status = "entering";
    this.isVip = isVip;
  }

  get guest() {
    return this.#guest;
  }
  set guest(newGuest: Guest) {
    this.#guest = newGuest;
  }

  log() {
    console.log(
      `${this.#guest.name}${this.isVip ? "(VIP)" : ""} is currently ${this.status} at the ${this.location}. `,
    );
  }
}
