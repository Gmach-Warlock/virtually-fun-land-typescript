import { getNumericInput } from "../controller/inputs/getInputs.js";
import {
  openingGreeting,
  openingMenu,
} from "../controller/prompts/opening/openPrompts.js";
import { rl } from "../controller/inputs/getInputs.js";
export function respondToMainMenu(answer: number) {
  console.log("respondToMainMenu", answer);
  const lookup: any = {
    1: () => {
      console.log(`Coming soon`);
      mainMenu();
    },
    2: () => {
      console.log(`Coming soon`);
      mainMenu();
    },
    3: () => {
      console.log(`Coming soon`);
      mainMenu();
    },
    4: () => {
      console.log(`Coming soon`);
      mainMenu();
    },
    5: () => {
      console.log("coming");
      mainMenu();
    },
    6: () => {
      console.log("coming");
      mainMenu();
    },
    7: () => exitApp(),
  };
  return lookup[answer]();
}

export function exitApp() {
  console.log("Thank you for visiting.");
  rl.close();
}

export async function mainMenu() {
  openingGreeting();
  openingMenu();
  const answer = await getNumericInput(
    "Please enter the appropriate value: ",
    7,
  );
  if (answer) respondToMainMenu(Number(answer));
}
