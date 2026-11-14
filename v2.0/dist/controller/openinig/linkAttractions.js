import { Queue } from "../../model/Queue.js";
export function linkAttractions(rides, games, shows) {
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
//# sourceMappingURL=linkAttractions.js.map