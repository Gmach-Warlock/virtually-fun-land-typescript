import { park } from "../app.js";
import { getNumericInput } from "../view/getInput.js";
import { mainMenu } from "../view/menu.js";
import { logAttractions } from "../view/prompts/attractionPrompts.js";
import { logLine } from "../view/prompts/logLines.js";
export async function chooseAttraction() {
    const key = await getNumericInput(`Which attraction do you want to view? 
    
1. Command Line Coaster
2. Frozen Channel
3. Multi Threaded Processor
4. Fight Site
5. Lizard Spock on a Rock
6. Motherboard BIOS Show
7. Old Terminal Re-run

Please choose the appropriate value: `, 7);
    if (key === undefined || key === null)
        return;
    const lookup = {
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
export async function viewAttractionLine() {
    const name = await chooseAttraction();
    const attractionToLog = [
        ...park.arrays.games,
        ...park.arrays.rides,
        ...park.arrays.shows,
    ].find((item) => item.general.name === name);
    console.log("getting attraction in viewLine", attractionToLog);
}
export function viewAttractionDirectory() {
    logAttractions();
    mainMenu();
}
//# sourceMappingURL=attractionDirectory.js.map