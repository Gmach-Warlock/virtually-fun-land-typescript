import type { Attraction, Identify, IntervalId } from "./attractionsTypeDefs.js";
import type { GuestInstance } from "./guestTypeDefs.js";
import type { ListenerNotify, QueueNotify } from "./notifyTypeDefs.js";
export interface GameInstance extends Attraction {
}
export interface ScoreBoard {
    highScore: number;
    currentScore: number;
}
export type LogSubscriber = (type: ListenerNotify, guest: GuestInstance) => void;
export type SubscriberFunction = LogSubscriber;
export interface ListenerObj {
    subscribers: SubscriberFunction[];
    log(type: QueueNotify): void;
    open(): void;
    notify(type: ListenerNotify, guest?: GuestInstance | undefined): void;
    subscribe(subscriber: SubscriberFunction): void;
}
export interface ParkArrays {
    rides: Attraction[];
    games: Attraction[];
    shows: Attraction[];
    guests: GuestInstance[];
    intervals: IntervalId[];
}
export interface AddableInstance {
    add(guest: GuestInstance): void;
    remove(guest: GuestInstance): void;
}
export interface ParkInstance extends Identify, ListenerObj, AddableInstance {
    arrays: ParkArrays;
}
//# sourceMappingURL=gameTypeDefs.d.ts.map