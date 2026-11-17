import { determineNpcScore } from "../../../controller/rng/gameStats.js";
import type { Attraction } from "../../../types/attractionsTypeDefs.js";
import type { ShowName } from "../../../types/guestTypeDefs.js";
import type { WaitingGuest } from "../../../types/queuTypeDefs.ts.js";

export function logNextCab(attraction: Attraction) {
  const amountToTake = attraction.metrics.perTurn * 2;
  let current: WaitingGuest | null | undefined = attraction.queue?.head;
  for (let i = 0; i < amountToTake && current; i++) {
    const mid = Math.floor(amountToTake / 2) - 1;
    if (i <= mid) {
      current.guest.track.pCurrently = "leaving";
      console.log(
        `${current.guest.general.name} is ${current.guest.track.pCurrently},`,
      );
      current = current.next;
      continue;
    }
    if (i > mid) {
      current.guest.track.pCurrently = "riding";
      console.log(
        `${current.guest.general.name} is ${current.guest.track.pCurrently}`,
      );

      current = current.next;
      continue;
    }
  }
}

export function logAttractionOperation(attraction: Attraction) {
  console.log(`

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
${attraction.general.name} has started accepting the next occupants. `);
  logNextCab(attraction);
  console.log(`Please move into the next area to be placed in the attraction. 
    
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`);
}

export function logRideExperience(attraction: Attraction) {
  const guest = attraction.queue?.head;
  if (guest === null || guest === undefined) return;
  if (attraction.general.type === "game") {
    const wins = determineNpcScore(10);
    console.log(`${guest.guest.general.name} has finished playing ${attraction.general.name}. 
Final Score: ${wins}`);
  }
  if (attraction.general.type === "show") {
    experienceShowPrompt(attraction);
  }
}

function experienceShowPrompt(attraction: Attraction) {
  const type = attraction.general.name as ShowName;
  const lookup: Record<ShowName, string> = {
    "Motherboard BIOS Show": `The curtain rise to a spectacular CGI show with a backdrop which looks like an actively charged motherboard. The various parts of the board each tell their own story. By the end the audience is captived by the final part of the show where it all comes together for POST.`,
    "Old Terminal Re-run": `The crowd goes wild as a classic Noir like show is seen. The main characters are some floppy disks and an old computer from the 80's. They take the audience on a nostalgic and mature themed trip through their struggles as they avoid obsoletion.`,
  };
  console.log(lookup[type]);
}
