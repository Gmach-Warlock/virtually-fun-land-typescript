import type { GuestInstance } from "./guestTypeDefs.js";
import type { Attraction } from "./attractionsTypeDefs.js";
export interface LinkedChild<T> {
    next: LinkedChild<T> | null | undefined;
}
export interface QueueInstance<T> {
    attraction: Attraction;
    arr: LinkedChild<T>[];
    head: LinkedChild<T> | null;
    tail: LinkedChild<T> | null;
    vipMark: LinkedChild<T> | null;
    enqueue(item: LinkedChild<T>): void;
    dequeue(): LinkedChild<T>;
    jump(item: T): void;
    log(): void;
}
export type QueueObj = LinkedChild<GuestInstance | null>;
export interface WaitingGuest extends LinkedChild<WaitingGuest> {
    guest: GuestInstance;
    next: WaitingGuest | null;
    isLineMarker: boolean;
    log(): void;
}
//# sourceMappingURL=IQueue.d.ts.map