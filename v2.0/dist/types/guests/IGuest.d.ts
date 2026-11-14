import type { IIdentify } from "../attractions/IGame.js";
export type TPersonality = "rider" | "gamer" | "watcher" | "wanderer";
export type TCurrently = "entering" | "leaving" | "waiting" | "playing" | "riding";
export type TGeneralLocation = "Entrance" | "Exit" | "Park Square";
export type TRide = "Command Line Coaster" | "Frozen Channel" | "Multi Threaded Processor";
export type TGame = "Lizard Spock on a Rock" | "Fight Site";
export type TAttraction = TRide | TGame;
export type TParkLocation = TGeneralLocation | TRide | TAttraction;
export interface IGuestInfo extends IIdentify {
    pType: TPersonality;
    vip: boolean;
}
export interface IGuestTracker {
    pCurrently: TCurrently;
    pLocation: TParkLocation;
}
export interface IGuest {
    general: IGuestInfo;
    track: IGuestTracker;
}
//# sourceMappingURL=IGuest.d.ts.map