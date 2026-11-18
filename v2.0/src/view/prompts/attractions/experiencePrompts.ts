import type { Attraction } from "../../../types/attractionsTypeDefs.js";
import type { ShowName } from "../../../types/guestTypeDefs.js";
import { determineNpcScore } from "../../../controller/rng/gameStats.js";
import { rideExperiencePrompt } from "./rideExperience.js";

export function logAttractionExperience(attraction: Attraction) {
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
  if (attraction.general.type === "ride") {
    rideExperiencePrompt(attraction);
  }
}

function experienceShowPrompt(attraction: Attraction) {
  const type = attraction.general.name as ShowName;
  const lookup: Record<ShowName, string> = {
    "Motherboard BIOS Show": `The curtain rise to a spectacular CGI show with a backdrop which looks like an actively charged motherboard. The various parts of the board each tell their own story. The power supply acts as a both a transport and instructor for the tour as the crowd works their way in from the outlet and make their way all the way to through all of the compenents. By the end the audience is captived by how it all comes together for POST.`,
    "Old Terminal Re-run": `The crowd goes wild as a classic Noir like show is seen. The main characters are some floppy disks and an old computer from the 80's. They take the audience on a nostalgic and mature themed trip through their struggles as they avoid obsoletion. Experience dialogue and characters similar to early games from early pc models, and help the Floppy Bin fight against the hard disks and see how early data was stored, and how little of it there was in those days.`,
  };
  console.log(lookup[type]);
}
