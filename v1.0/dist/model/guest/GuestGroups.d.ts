import type { Personality } from "../../types/guest/guestTypes.js";
import type { Guest } from "./Guest.js";
import { type GuestList } from "./GuestList.js";
export declare class GuestGroups {
    #private;
    riders: Guest[];
    gamers: Guest[];
    watchers: Guest[];
    wanderers: Guest[];
    constructor();
    get guestList(): GuestList;
    static getInstance(): GuestGroups;
    add(type: Personality, guest: Guest): void;
    log(): void;
}
export declare const vflGuestGroups: GuestGroups;
//# sourceMappingURL=GuestGroups.d.ts.map