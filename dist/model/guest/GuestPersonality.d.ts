import { Guest } from "./Guest.js";
import type { Personality } from "../../types/guest/guestTypes.js";
export declare class GuestPersonality {
    #private;
    constructor(guest: Guest, type: Personality);
    get guest(): Guest;
    set guest(newGuest: Guest);
    get type(): Personality;
    set type(newtype: Personality);
    log(): void;
}
//# sourceMappingURL=GuestPersonality.d.ts.map