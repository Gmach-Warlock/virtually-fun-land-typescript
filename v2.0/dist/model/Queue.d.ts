import type { Attraction } from "../types/attractionsTypeDefs.js";
import type { GuestInstance } from "../types/guestTypeDefs.js";
import type { LinkedChild, QueueInstance, QueueObj, WaitingGuest } from "../types/queuTypeDefs.ts.js";
export declare class Queue implements QueueInstance<WaitingGuest | null> {
    attraction: Attraction;
    arr: QueueObj[];
    map: Map<string, QueueObj>;
    head: WaitingGuest | null;
    tail: WaitingGuest | null;
    vipMark: WaitingGuest | null;
    constructor(attraction: Attraction);
    enqueue(guest: WaitingGuest): void;
    dequeue(): LinkedChild<GuestInstance | null>;
    jump(item: WaitingGuest | null): void;
    log(): void;
}
//# sourceMappingURL=Queue.d.ts.map