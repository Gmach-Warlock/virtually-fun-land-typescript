import type { CRUDableInstance } from "../../types/basic/basicInterfaces.js";

export function addToInstance<T>(instance: CRUDableInstance<T>, itm: T) {
  instance.add(itm);
}
