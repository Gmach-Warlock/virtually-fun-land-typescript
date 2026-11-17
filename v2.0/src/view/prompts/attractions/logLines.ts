import type { WaitingGuest } from "../../../types/queuTypeDefs.ts.js";
import type { QueueInstance } from "../../../types/queuTypeDefs.ts.js";

export function listNamesArr(names: string[]) {
  if (names.length === 0) {
    return "";
  }
  if (names.length === 1) {
    const str = names[0] ?? "";
    console.log(`Guests: ${str}`);
    return str;
  }
  if (names.length === 2) {
    const first = names[0] ?? "";
    const second = names[1] ?? "";
    const str = `${first} and ${second}`;
    console.log(`Guests: ${str}`);
    return str;
  }
  const allButLast = names.slice(0, -1).join(", ");
  const last = names[names.length - 1] ?? "";
  const str = `${allButLast}, and ${last}`;
  console.log(`Guests: ${str}`);
  return str;
}

export function logNameString(arr: WaitingGuest[]): string {
  const names = arr
    .map((item) => item.guest.general.name)
    .filter((name): name is string => typeof name === "string");
  const str = listNamesArr(names);
  return str;
}

export function convertMilliToMinute(ms: number) {
  return ms * 60000;
}

export function logWaitTime(queue: QueueInstance<WaitingGuest>) {
  const waitTime =
    (queue.arr.length * queue.attraction.metrics.duration) /
    queue.attraction.metrics.perTurn;
  console.log(`Estimated Wait Time: ${Math.round(waitTime)} minutes`);
}

export function logLine(queue: QueueInstance<WaitingGuest>): void {
  const arr = queue.arr as unknown as WaitingGuest[];
  const name = queue.attraction.general.name;
  if (!Array.isArray(arr) || name === undefined) return;
  if (arr.length === 0) {
    console.log(`There is nobody in line for ${name}`);
    return;
  }
  console.log(`-    -    -    -    -    -    -    -    -    -    -
    `);
  console.log(
    `Currently there are ${queue.arr.length} guests in line for ${queue.attraction.general.name}. `,
  );
  logNameString(arr);
  logWaitTime(queue);
  console.log(``);
}
