import type { Identify } from "./attractionsTypeDefs.js";
export type Personality = "rider" | "gamer" | "watcher" | "wanderer";
export type GeneralLocation = "Entrance" | "Exit" | "Park Square";
export type GameName = "Lizard Spock on a Rock" | "Fight Site";
export type RideName =
  | "Command Line Coaster"
  | "Frozen Channel"
  | "Multi Threaded Processor";
export type ShowName = "Motherboard BIOS Show" | "Old Terminal Re-run";
export type AttractionName = RideName | GameName | ShowName;
export type ParkLocation = GeneralLocation | RideName | AttractionName;
export type GuestCurrently =
  | "initializing"
  | "entering"
  | "leaving"
  | "waiting"
  | "playing"
  | "riding";
export interface GuestInfo extends Identify {
  pType: Personality;
  vip: boolean;
}
export interface GuestTracker {
  pCurrently: GuestCurrently;
  pLocation: ParkLocation;
}
export interface GuestInstance {
  general: GuestInfo;
  track: GuestTracker;
}
//# sourceMappingURL=IGuest.d.ts.map
