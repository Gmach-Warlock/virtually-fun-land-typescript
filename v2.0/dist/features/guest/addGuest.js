import { park } from "../../app.js";
import { determineVip } from "../../controller/rng/generateStats.js";
import { Guest } from "../../model/Guest.js";
import { getNumericInput, getStringInput } from "../../view/getInput.js";
import { denyAndReturn } from "../../view/getInput.js";
import { mainMenu } from "../../view/menu.js";
async function createPersonality() {
    const key = await getNumericInput(`What word best describes this guest:
        
1. Rider
2. Gamer
3. Watcher
4. Wanderer
Please choose one of the following. `, 4);
    if (!key)
        return;
    const lookup = {
        1: "rider",
        2: "gamer",
        3: "watcher",
        4: "wanderer",
    };
    return lookup[Number(key)];
}
export async function makeNewGuest() {
    const name = await getStringInput("What is the name of the guest entering the park? ");
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
//# sourceMappingURL=addGuest.js.map