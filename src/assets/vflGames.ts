import type { GameInfoObj } from "../types/game/gameInterfaces.js";

export const fightSite: GameInfoObj = {
  id: "FightSite-game-1",
  name: "Fight Site",
  description:
    "A turn based battle game designed in a retro fashion. Choose your class and see if you have what it takes to defeat your opponent!",
  duration: 30000,
  occupancy: 1,
  max: 20,
};

export const lizardSpock: GameInfoObj = {
  id: "LizardSpock-game-2",
  name: "Lizard Spock on the Rocks",
  description:
    "An ode to a classic game retold. This is rock paper scissors with a twist.",
  duration: 45000,
  occupancy: 1,
  max: 25,
};

export const vflGamesArr: GameInfoObj[] = [fightSite, lizardSpock];
