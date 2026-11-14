import type { Guest } from "../../model/guest/Guest.js";
import type { GuestPersonality } from "../../model/guest/GuestPersonality.js";
import type { GuestStatus } from "../../model/guest/GuestStatus.js";

export interface CrowdNames {
  regulars: string[];
  randoms: string[];
}

export interface GuestObj {
  guest: Guest;
  status: GuestStatus;
  personality: GuestPersonality;
}
