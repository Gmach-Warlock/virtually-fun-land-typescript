import { park } from "../../app.js";
export function spreadAttractions() {
    const arrays = park.arrays;
    const attractions = [...arrays.games, ...arrays.rides, ...arrays.shows];
    return attractions;
}
export function closeIntervals() {
    const attractions = spreadAttractions();
    attractions.forEach((attraction) => {
        attraction.interval?.close();
    });
    park.arrays.intervals.forEach((interval) => {
        interval?.close();
    });
}
//# sourceMappingURL=closeIntervals.js.map