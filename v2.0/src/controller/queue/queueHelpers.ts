import type { QueueObj } from "../../types/queuTypeDefs.ts.js";

export function enqueueHelper(
  guest: QueueObj,
  head: QueueObj,
  tail: QueueObj,
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
  head: QueueObj | null,
  tail: QueueObj | null,
): QueueObj | null {
  if (head === null || tail === null) {
    console.log(`There is nobody left in line`);
    return null;
  }
  const dequeuedObj = head;
  head = head.next ?? null;
  return dequeuedObj;
}
