import { park } from "../../app.js";
import { DEBUG } from "../../controller/CRUD/DEBUG.js";
import type { AttractionName } from "../../types/guestTypeDefs.js";
import { getNumericInput } from "../../view/getInput.js";
import { mainMenu } from "../../view/menu.js";
import { logAttractions } from "../../view/prompts/attractions/attractionPrompts.js";

export async function chooseAttraction() {
  const key = await getNumericInput(
    `Which attraction do you want to view? 
    
1. Command Line Coaster
2. Frozen Channel
3. Multi Threaded Processor
4. Fight Site
5. Lizard Spock on a Rock
6. Motherboard BIOS Show
7. Old Terminal Re-run

Please choose the appropriate value: `,
    7,
  );
  if (key === undefined || key === null) return;
  const lookup: Record<string, AttractionName> = {
    1: "Command Line Coaster",
    2: "Frozen Channel",
    3: "Multi Threaded Processor",
    4: "Fight Site",
    5: "Lizard Spock on a Rock",
    6: "Motherboard BIOS Show",
    7: "Old Terminal Re-run",
  };
  return lookup[key];
}

export function viewAttractionDirectory() {
  logAttractions();
  mainMenu();
}
