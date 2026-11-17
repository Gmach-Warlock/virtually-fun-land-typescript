import { stdin, stdout } from "process";
import readline from "readline";
import { isCleanNumber, isCleanString } from "./cleanInput.js";
import { mainMenu } from "./menu.js";
export const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});
function getAnswer(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}
export async function getNumericInput(question, max) {
    const answer = (await getAnswer(question));
    if (!isCleanNumber(answer, max)) {
        return;
    }
    return answer;
}
export async function getStringInput(question, numGuard = true) {
    const answer = (await getAnswer(question));
    if (!isCleanString(answer)) {
        return;
    }
    return answer;
}
export function denyAndReturn(message = "Somthing went wrong. Returning") {
    console.log(message);
    mainMenu();
}
//# sourceMappingURL=getInput.js.map