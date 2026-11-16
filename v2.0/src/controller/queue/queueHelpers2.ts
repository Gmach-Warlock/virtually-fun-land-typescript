import type { QueueObj } from "../../types/queuTypeDefs.ts.js";

export type QueueParam = QueueObj | null;

export function jumpHelper(
  guest: QueueParam,
  head: QueueParam,
  tail: QueueParam,
) {
  if (head === null && tail === null) {
    head = guest;
    tail = guest;
    return;
  }
  // need to set up with map and marker here!!!
}
