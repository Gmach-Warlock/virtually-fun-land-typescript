import { Guest } from "./Guest.js";
import type { Personality } from "../../types/guest/guestTypes.js";
export declare class GuestPersonality {
    #private;
    type: Personality;
    constructor(guest: Guest, type: Personality);
    get guest(): Guest;
    set guest(newGuest: Guest);
    log(): void;
}
//# sourceMappingURL=GuestPersonality.d.ts.map