import { Show } from "../../model/Show.js";
import { Game } from "../../model/Game.js";
import { Ride } from "../../model/Ride.js";
export function buildAttractions(arr, type) {
    const attractions = arr.map((attraction) => {
        const lookup = {
            ride: () => new Ride(attraction.id, attraction.name, attraction.description, attraction.category, attraction.duration, attraction.type, attraction.perTurn, attraction.max),
            game: () => new Game(attraction.id, attraction.name, attraction.description, attraction.category, attraction.duration, attraction.type, attraction.perTurn, attraction.max),
            show: () => new Show(attraction.id, attraction.name, attraction.description, attraction.category, attraction.duration, attraction.type, attraction.perTurn, attraction.max),
        };
        if (!lookup || !lookup[type])
            return undefined;
        lookup[type]();
    });
    console.log(attractions);
    return attractions.filter((attraction) => attraction !== undefined);
}
//# sourceMappingURL=buildAttractions.js.map