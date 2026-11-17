import type { ParkInstance, ParkArrays, LogSubscriber, SubscriberFunction } from "../types/gameTypeDefs.js";
import type { QueueNotify } from "../types/notifyTypeDefs.js";
import type { GuestInstance } from "../types/guestTypeDefs.js";
export declare class Park implements ParkInstance {
    #private;
    id: string;
    name: string;
    arrays: ParkArrays;
    subscribers: LogSubscriber[];
    constructor();
    static getInstance(): ParkInstance;
    log(type: QueueNotify): void;
    notify(type: QueueNotify, guest: GuestInstance): void;
    open(): void;
    subscribe(subscriber: SubscriberFunction): void;
}
//# sourceMappingURL=Park.d.ts.map