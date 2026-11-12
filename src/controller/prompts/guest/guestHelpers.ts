import type { BasicNotify } from "../../../types/basicTypes.js";
import { Guest } from "../../../model/guest/Guest.js";

export function logGuest(type: BasicNotify, guest?: Guest) {
  const lookup: Record<BasicNotify, string> = {
    initialize: "",
    add: "A guest has entered the park.",
    remove: "A guest has left the park.",
    view: `${guest?.name} is currently at `,
  };
  console.log(lookup[type]);
}
