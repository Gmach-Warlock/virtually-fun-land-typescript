import type {
  QueueInstance,
  WaitingGuest,
} from "../../../types/queuTypeDefs.ts.js";

export function logLinkedGuests(queue: QueueInstance<WaitingGuest>): void {
  let current = queue.head;
  const names: string[] = [];

  while (current !== null) {
    if (current.guest?.general?.name) {
      names.push(current.guest.general.name);
    }
    current = current.next;
  }

  if (names.length === 0) return;
  if (names.length === 1) console.log(names[0]);
  if (names.length === 2) console.log(`${names[0]} and ${names[1]}`);
  const allButLast = names.slice(0, -1).join(", ");
  const last = names[names.length - 1];
  console.log(`${allButLast}, and ${last}`);
}
