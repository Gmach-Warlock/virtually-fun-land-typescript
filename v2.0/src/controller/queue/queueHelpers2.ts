import type { IQueueObj } from "../../types/IQueue.js";

export type IQueueParam = IQueueObj | null;

export function jumpHelper(
  guest: IQueueParam,
  head: IQueueParam,
  tail: IQueueParam,
) {
  if (head === null && tail === null) {
    head = guest;
    tail = guest;
    return;
  }
  // need to set up with map and marker here!!!
}
