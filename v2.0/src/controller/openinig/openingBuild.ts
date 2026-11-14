import { Ride } from "../../model/Ride.js";
import { Game } from "../../model/Game.js";
import { Show } from "../../model/Show.js";
import { rideInfoArr } from "../../assets/vflRides.js";
import { vflGamesArr, type IGameInfo } from "../../assets/vflGames.js";
import type { IAttraction, IRideInfo } from "../../types/IAttractions.js";
import { Queue } from "../../model/Queue.js";
import { vflShowsArr, type IShowInfo } from "../../assets/vflShows.js";

export function buildRides() {
  const rides = rideInfoArr.map(
    (ride) =>
      new Ride(
        ride.id,
        ride.name,
        ride.description,
        ride.category,
        ride.duration,
        ride.type,
        ride.perTurn,
        ride.max,
      ),
  );
  return rides;
}
export function buildGames() {
  const games = vflGamesArr.map(
    (game) =>
      new Game(
        game.id,
        game.name,
        game.description,
        game.category,
        game.duration,
        game.type,
        game.perTurn,
        game.max,
      ),
  );
  return games;
}
export function buildShows() {
  const shows = vflShowsArr.map(
    (game) =>
      new Show(
        game.id,
        game.name,
        game.description,
        game.category,
        game.duration,
        game.type,
        game.perTurn,
        game.max,
      ),
  );
  return shows;
}
export type IAttractionInfo = IRideInfo | IGameInfo | IShowInfo;
