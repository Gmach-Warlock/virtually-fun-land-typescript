import { rl } from "./getInput.js";
import { getNumericInput } from "./getInput.js";
import { startMenu } from "./prompts/openMenu.js";

function soon() {
  console.log(`Coming soon`);
  mainMenu();
}

export function respondToMainMenu(answer: number) {
  const lookup: any = {
    1: () => soon(),
    2: () => soon(),
    3: () => soon(),
    4: () => soon(),
    5: () => soon(),
    6: () => soon(),
    7: () => exitApp(),
  };
  return lookup[answer]();
}

export function exitApp() {
  console.log("Thank you for visiting.");
  rl.close();
}

export async function mainMenu() {
  startMenu();
  const answer = await getNumericInput(
    "Please enter the appropriate value: ",
    7,
  );
  if (answer) respondToMainMenu(Number(answer));
}
