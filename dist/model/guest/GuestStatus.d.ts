import type { GStatus } from "../../types/GuestTypes.js";
import type { Guest } from "./Guest.js";
export declare class GuestStatus {
    #private;
    constructor(guest: Guest, status: GStatus);
    get guest(): Guest;
    set guest(newGuest: Guest);
    get status(): GStatus;
    set status(newStatus: GStatus);
}
//# sourceMappingURL=GuestStatus.d.ts.map