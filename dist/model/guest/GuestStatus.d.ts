import type { GuestLocation, GuestStatusType } from "../../types/GuestTypes.js";
import type { Guest } from "./Guest.js";
export declare class GuestStatus {
    #private;
    constructor(guest: Guest, isVip: boolean);
    get guest(): Guest;
    set guest(newGuest: Guest);
    get status(): GuestStatusType;
    set status(newStatus: GuestStatusType);
    get location(): GuestLocation;
    set location(newLocation: GuestLocation);
    get isVip(): boolean;
    set isVip(newIsVip: boolean);
    log(): void;
}
//# sourceMappingURL=GuestStatus.d.ts.map