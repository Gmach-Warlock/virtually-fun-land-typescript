import type { IGuest } from "./IGuest.js";
import type { IAttraction } from "./IAttractions.js";

export interface ILinkedChild<T> {
  next: ILinkedChild<T> | null | undefined;
}

export interface IQueue<T> {
  attraction: IAttraction;
  arr: ILinkedChild<T>[];
  head: ILinkedChild<T> | null;
  tail: ILinkedChild<T> | null;
  vipMark: ILinkedChild<T> | null;
  enqueue(item: ILinkedChild<T>): void;
  dequeue(): ILinkedChild<T>;
  jump(item: T): void;
}

export type IQueueObj = ILinkedChild<IGuest | null>;

export interface IWaiter extends ILinkedChild<IWaiter> {
  guest: IGuest;
  next: IWaiter | null;
  isLineMarker: boolean;
}
