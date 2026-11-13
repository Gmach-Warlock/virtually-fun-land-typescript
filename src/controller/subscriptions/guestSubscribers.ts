import type { Guest } from "../../model/guest/Guest.js";
import type { BasicNotify } from "../../types/basic/basicTypes.js";

export function guestLobSubscriber(type: BasicNotify, guest: Guest) {
  const lookup: Record<BasicNotify, string> = {
    initialize: "A decent crowd of people have shown up today for opening!!",
    add: `${guest.name} has entered the park!`,
    remove: `${guest.name} has left the park!`,
    view: `${guest.name} is currently ${guest.status?.status}`,
  };
  if (!lookup || !lookup[type]) return;
  console.log(lookup[type]);
}
