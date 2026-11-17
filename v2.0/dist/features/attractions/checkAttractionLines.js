import { park } from "../../app.js";
import { mainMenu } from "../../view/menu.js";
import { checkLines } from "../../view/prompts/open/openingRush.js";
export function viewAttractionLines() {
    const arrays = park.arrays;
    checkLines(arrays);
    mainMenu();
}
//# sourceMappingURL=checkAttractionLines.js.map