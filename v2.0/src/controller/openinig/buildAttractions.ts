import { Show } from "../../model/Show.js";
import { Game } from "../../model/Game.js";
import { Ride } from "../../model/Ride.js";
import type { AttractionInfo } from "./openingBuild.js";
import type {
  AttractionType,
  Attraction,
} from "../../types/attractionsTypeDefs.js";

export function buildAttractions(
  arr: AttractionInfo[],
  type: AttractionType,
): Attraction[] {
  const attractions = arr.map(
    (attraction: AttractionInfo): Attraction | undefined => {
      const lookup = {
        ride: () =>
          new Ride(
            attraction.id,
            attraction.name,
            attraction.description,
            attraction.category,
            attraction.duration,
            attraction.type,
            attraction.perTurn,
            attraction.max,
          ),
        game: () =>
          new Game(
            attraction.id,
            attraction.name,
            attraction.description,
            attraction.category,
            attraction.duration,
            attraction.type,
            attraction.perTurn,
            attraction.max,
          ),
        show: () =>
          new Show(
            attraction.id,
            attraction.name,
            attraction.description,
            attraction.category,
            attraction.duration,
            attraction.type,
            attraction.perTurn,
            attraction.max,
          ),
      };
      if (!lookup || !lookup[type]) return undefined;
      lookup[type]();
    },
  );
  return attractions.filter(
    (attraction): attraction is Attraction => attraction !== undefined,
  );
}
