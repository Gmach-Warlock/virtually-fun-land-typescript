import { stdin, stdout } from "process";
import readline from "readline";
const rl = readline.createInterface({
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
//# sourceMappingURL=getInputs.js.map