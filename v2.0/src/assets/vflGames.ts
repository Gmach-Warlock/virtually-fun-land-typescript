import type { IAttraction, IMetrics, IGeneral } from "../types/IAttractions.js";

export interface IGameInfo extends IGeneral, IMetrics {}

export const fightSite: IGameInfo = {
  id: "FightSite-game-1",
  name: "Fight Site",
  description:
    "A turn based battle game designed in a retro fashion. Choose your class and see if you have what it takes to defeat your opponent!",
  duration: 30000,
  category: "turn-based",
  perTurn: 1,
  max: 20,
  type: "game",
};

export const lizardSpock: IGameInfo = {
  id: "LizardSpock-game-2",
  name: "Lizard Spock on the Rocks",
  description:
    "An ode to a classic game retold. This is rock paper scissors with a twist.",
  category: "chance",
  duration: 45000,
  perTurn: 1,
  max: 25,
  type: "game",
};

export const vflGamesArr: IGameInfo[] = [fightSite, lizardSpock];
