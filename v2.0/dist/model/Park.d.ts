import type { ParkInstance, ParkArrays, LogSubscriber, SubscriberFunction } from "../types/gameTypeDefs.js";
import type { ListenerNotify } from "../types/notifyTypeDefs.js";
import type { GuestInstance } from "../types/guestTypeDefs.js";
export declare class Park implements ParkInstance {
    #private;
    id: string;
    name: string;
    arrays: ParkArrays;
    subscribers: LogSubscriber[];
    constructor();
    static getInstance(): ParkInstance;
    add(guest: GuestInstance): void;
    log(type: ListenerNotify): void;
    notify(type: ListenerNotify, guest: GuestInstance): void;
    open(): void;
    remove(guest: GuestInstance): void;
    subscribe(subscriber: SubscriberFunction): void;
}
//# sourceMappingURL=Park.d.ts.map