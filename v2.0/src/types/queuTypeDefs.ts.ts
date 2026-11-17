import type { GuestInstance } from "./guestTypeDefs.js";
import type { Attraction } from "./attractionsTypeDefs.js";

export interface LinkedChild<T> {
  next: LinkedChild<T> | null | undefined;
}

export interface QueueInstance<T> {
  attraction: Attraction;
  arr: T[];
  head: T | null;
  tail: T | null;
  vipMark: T | null;
  enqueue(item: T): void;
  dequeue(): T;
  jump(item: T): void;
  log(): void;
}

export type QueueObj = LinkedChild<GuestInstance | null>;

export interface WaitingGuest {
  guest: GuestInstance;
  next: WaitingGuest | null;
  isLineMarker: boolean;
  log(): void;
}
