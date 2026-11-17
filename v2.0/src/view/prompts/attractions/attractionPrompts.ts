import { park } from "../../../app.js";
import type { Attraction } from "../../../types/attractionsTypeDefs.js";

export function attractionLog(attraction: Attraction) {
  console.log(`The ${attraction.general.name}
${attraction.general.description}
type: ${attraction.general.type}
duration: ${attraction.metrics.duration} minutes
category: ${attraction.general.category}
per: ${attraction.metrics.perTurn}
max: ${attraction.metrics.max}
`);
}

export function logAttractions() {
  console.log(`
All of our attractions are now open with normal wait times. 

    = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
`);
  park.arrays.games.forEach((game) => {
    attractionLog(game);
  });
  console.log(`= = = = = = = = = = = = = = = = = = = = = = = = = = = =
    `);
  park.arrays.rides.forEach((ride) => {
    attractionLog(ride);
  });
  console.log(`= = = = = = = = = = = = = = = = = = = = = = = = = = = =
    `);
  park.arrays.shows.forEach((show) => {
    attractionLog(show);
  });
  console.log(`= = = = = = = = = = = = = = = = = = = = = = = = = = = =
    `);
}
