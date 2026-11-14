import { stdin, stdout } from "process";
import readline from "readline";
import { isCleanNumber, isCleanString } from "./cleanInput.js";

export const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

function getAnswer(question: string) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

export async function getNumericInput(question: string, max: number) {
  const answer = (await getAnswer(question)) as string;
  if (!isCleanNumber(answer, max)) {
    return;
  }
  return answer;
}

export async function getStringInput(question: string, numGuard = true) {
  const answer = (await getAnswer(question)) as string;
  if (!isCleanString(answer)) {
    return;
  }
  return answer;
}
