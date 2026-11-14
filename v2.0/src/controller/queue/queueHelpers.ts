import type { IQueueObj } from "../../types/IQueue.js";

export function enqueueHelper(
  guest: IQueueObj,
  head: IQueueObj,
  tail: IQueueObj,
): void {
  if (head === null && tail === null) {
    head = guest;
    tail = guest;
    return;
  }
  const temp = tail;
  tail = guest;
  if (temp !== null) {
    temp.next = guest;
  }
}

export function dequeueHelper(
  head: IQueueObj | null,
  tail: IQueueObj | null,
): IQueueObj | null {
  if (head === null || tail === null) {
    console.log(`There is nobody left in line`);
    return null;
  }
  const dequeuedObj = head;
  head = head.next ?? null;
  return dequeuedObj;
}
