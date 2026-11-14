import { Park } from "./model/Park.js";
import { mainMenu } from "./view/menu.js";

export const park = Park.getInstance();

function bootup() {
  park.open();
}

bootup();
mainMenu();
