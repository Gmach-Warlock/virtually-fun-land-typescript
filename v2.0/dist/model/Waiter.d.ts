import type { GuestInstance } from "../types/guestTypeDefs.js";
import type { QueueInstance, WaitingGuest } from "../types/queuTypeDefs.ts.js";
export declare class Waiter implements WaitingGuest {
    parent: QueueInstance<GuestInstance>;
    guest: GuestInstance;
    next: WaitingGuest | null;
    isLineMarker: boolean;
    constructor(parent: QueueInstance<GuestInstance>, guest: GuestInstance);
    log(): void;
}
//# sourceMappingURL=Waiter.d.ts.map