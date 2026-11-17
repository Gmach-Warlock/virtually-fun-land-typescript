import type { GuestInstance } from "../types/guestTypeDefs.js";
import type { QueueInstance, WaitingGuest } from "../types/queuTypeDefs.ts.js";
export declare class GuestWaitInstance implements WaitingGuest {
    parent: QueueInstance<WaitingGuest>;
    guest: GuestInstance;
    next: WaitingGuest | null;
    isLineMarker: boolean;
    constructor(parent: QueueInstance<WaitingGuest>, guest: GuestInstance);
    log(): void;
}
//# sourceMappingURL=WaitingGuest.d.ts.map