import { park } from "../../app.js";
import { denyAndReturn, getStringInput } from "../../view/getInput.js";
import { mainMenu } from "../../view/menu.js";
export async function findGuest() {
    const name = await getStringInput(`What is the name of the guest who is checking out for the day? `);
    const guests = park.arrays.guests;
    const guestToRemove = guests.find((guest) => guest.general.name === name);
    if (!guestToRemove) {
        denyAndReturn(`No guest in the park with that name. Returning. `);
        return;
    }
    return guestToRemove;
}
export async function removeGuest() {
    const guest = await findGuest();
    if (!guest) {
        return;
    }
    park.remove(guest);
    mainMenu();
}
//# sourceMappingURL=removeGuest.js.map