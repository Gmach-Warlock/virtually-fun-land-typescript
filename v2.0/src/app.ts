import { Park } from "./model/Park.js";

export const park = Park.getInstance();

function bootup() {
  park.open();
}

bootup();
