import type { IGuest } from "../types/IGuest.js";
import type { IQueue, IWaiter } from "../types/IQueue.js";
export declare class Rider implements IWaiter {
    parent: IQueue<IGuest>;
    guest: IGuest;
    next: IWaiter | null;
    isLineMarker: boolean;
    constructor(parent: IQueue<IGuest>, guest: IGuest);
    log(): void;
}
//# sourceMappingURL=Waiter.d.ts.map