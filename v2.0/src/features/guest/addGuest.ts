import { park } from "../../app.js";
import { determineVip } from "../../controller/rng/generateStats.js";
import { Guest } from "../../model/Guest.js";
import { getStringInput } from "../../view/getInput.js";
import { denyAndReturn } from "../../view/getInput.js";
import { mainMenu } from "../../view/menu.js";
import { createPersonality } from "../../view/prompts/guests/createPersonality.js";

export async function makeNewGuest() {
  const name = await getStringInput(
    "What is the name of the guest entering the park? ",
  );
  const personalityType = await createPersonality();
  if (!name || !personalityType) {
    denyAndReturn(`Something went wrong. Returning. `);
    return;
  }
  const isVip = determineVip();
  if (isVip !== true && isVip !== false) {
    denyAndReturn("is vip had an error");
    return;
  }
  const newGuest = new Guest(name, personalityType, isVip);
  if (!newGuest) {
    denyAndReturn("Something went wrong making guest. Returning");
    return;
  }
  return newGuest;
}

export async function addNewGuest() {
  const newGuest = await makeNewGuest();
  if (!newGuest) {
    denyAndReturn();
    return;
  }
  park.add(newGuest);
  mainMenu();
}
