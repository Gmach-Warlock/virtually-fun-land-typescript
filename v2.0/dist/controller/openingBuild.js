import { Ride } from "../model/Ride.js";
import { Game } from "../model/Game.js";
import { rideInfoArr } from "../assets/vflRides.js";
import { vflGamesArr } from "../assets/vflGames.js";
export function buildRides() {
    const rides = rideInfoArr.map((ride) => new Ride(ride.id, ride.name, ride.description, ride.type, ride.category, ride.duration, ride.perTurn, ride.max));
    return rides;
}
export function buildGames() {
    const games = vflGamesArr.map((game) => new Game(game.id, game.name, game.description, game.category, game.duration, game.type, game.perTurn, game.max));
    return games;
}
//# sourceMappingURL=openingBuild.js.map