import { Queue } from "../../model/Queue.js";
import type { Attraction } from "../../types/attractionsTypeDefs.js";

export function linkAttractions(
  rides: Attraction[],
  games: Attraction[],
  shows: Attraction[],
) {
  const attractions = [...rides, ...games, ...shows];
  const queues = attractions.map((attraction) => {
    const newQueue = new Queue(attraction);
    attraction.queue = newQueue as unknown as NonNullable<
      typeof attraction.queue
    >;
    return newQueue;
  });
  const returnObj = { attractions, queues };
  return returnObj;
}
