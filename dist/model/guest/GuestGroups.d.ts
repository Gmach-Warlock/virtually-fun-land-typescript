import type { Personality } from "../../types/GuestTypes.js";
import type { Guest } from "./Guest.js";
import { type GuestList } from "./GuestList.js";
export declare class GuestGroups {
    #private;
    constructor();
    get guestList(): GuestList;
    get riders(): Guest[];
    set riders(newRiders: Guest[]);
    get gamers(): Guest[];
    set gamers(newGamers: Guest[]);
    get watchers(): Guest[];
    set watchers(newWatchers: Guest[]);
    get wanderers(): Guest[];
    set wanderers(newWanderers: Guest[]);
    static getInstance(): GuestGroups;
    add(type: Personality, guest: Guest): void;
    log(): void;
}
export declare const vflGuestGroups: GuestGroups;
//# sourceMappingURL=GuestGroups.d.ts.map