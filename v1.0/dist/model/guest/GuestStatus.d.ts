import type { GuestLocation, GuestStatusType } from "../../types/guest/guestTypes.js";
import type { Guest } from "./Guest.js";
export declare class GuestStatus {
    #private;
    status: GuestStatusType;
    location: GuestLocation;
    isVip: boolean;
    constructor(guest: Guest, isVip: boolean);
    get guest(): Guest;
    set guest(newGuest: Guest);
    log(): void;
}
//# sourceMappingURL=GuestStatus.d.ts.map