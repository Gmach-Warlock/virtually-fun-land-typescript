import type { Attraction, Identify } from "./attractionsTypeDefs.js";
import type { GuestInstance } from "./guestTypeDefs.js";
import type { QueueNotify } from "./notifyTypeDefs.js";
export interface GameInstance extends Attraction {
}
export interface ScoreBoard {
    highScore: number;
    currentScore: number;
}
export type LogSubscriber = (type: QueueNotify, guest: GuestInstance) => void;
export type SubscriberFunction = LogSubscriber;
export interface ListenerObj {
    subscribers: SubscriberFunction[];
    log(type: QueueNotify): void;
    open(): void;
    notify(type: QueueNotify, guest?: GuestInstance | undefined): void;
    subscribe(subscriber: SubscriberFunction): void;
}
export interface ParkArrays {
    rides: Attraction[];
    games: Attraction[];
    shows: Attraction[];
    guests: GuestInstance[];
}
export interface ParkInstance extends Identify, ListenerObj {
    arrays: ParkArrays;
}
//# sourceMappingURL=gameTypeDefs.d.ts.map