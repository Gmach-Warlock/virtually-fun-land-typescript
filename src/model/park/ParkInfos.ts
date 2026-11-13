import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
import type { RideInfo } from "../ride/RideInfo.js";
import { vfl, type Park } from "./Park.js";

export class ParkInfos {
  static #instance: ParkInfos | null = null;
  #park: Park;
  #infos: RideInfo[];

  constructor() {
    this.#park = vfl;
    this.#infos = [];
  }

  get park() {
    return this.#park;
  }
  get infos() {
    return this.#infos;
  }
  set infos(newInfos) {
    this.#infos = newInfos;
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ParkInfos();
    }
    return this.#instance;
  }
  add(info: RideInfo) {
    this.#infos = addItemToArray(this.#infos, info);
  }
}

export const vflInfos = ParkInfos.getInstance();
