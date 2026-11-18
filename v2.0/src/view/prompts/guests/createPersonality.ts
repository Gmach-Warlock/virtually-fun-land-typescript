import type { Personality } from "../../../types/guestTypeDefs.js";
import { getNumericInput } from "../../getInput.js";

export async function createPersonality() {
  const key = await getNumericInput(
    `What word best describes this guest:
        
1. Rider
2. Gamer
3. Watcher
4. Wanderer
Please choose one of the following. `,
    4,
  );
  if (!key) return;
  const lookup: Record<number, Personality> = {
    1: "rider",
    2: "gamer",
    3: "watcher",
    4: "wanderer",
  };
  return lookup[Number(key)];
}
