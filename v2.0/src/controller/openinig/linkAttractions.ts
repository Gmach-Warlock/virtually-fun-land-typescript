import { Queue } from "../../model/Queue.js";
import type { IAttraction } from "../../types/IAttractions.js";

export function linkAttractions(
  rides: IAttraction[],
  games: IAttraction[],
  shows: IAttraction[],
) {
  const attractions = [...rides, ...games, ...shows];
  const queues = attractions.map((attraction) => {
    const newQueue = new Queue(attraction);
    attraction.queue = newQueue;
    return newQueue;
  });
  const returnObj = { attractions, queues };
  console.log(returnObj);
  return returnObj;
}
