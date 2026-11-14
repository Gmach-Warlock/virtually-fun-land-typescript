import type { IGame } from "../types/IGame.js";
import type {
  IGeneral,
  IMetrics,
  TCategory,
  TType,
} from "../types/IAttractions.js";
import { attractionLog } from "../controller/prompts/attractionPrompts.js";
import type { IQueue } from "../types/IQueue.js";
import type { IGuest } from "../types/IGuest.js";

export class Game implements IGame {
  general: IGeneral;
  metrics: IMetrics;
  queue: IQueue<IGuest> | null = null;

  constructor(
    id: string,
    name: string,
    description: string,
    category: TCategory,
    duration: number,
    type: TType,
    perTurn: number,
    max: number,
  ) {
    ((this.general = {
      id,
      name,
      description,
      category,
      type,
    }),
      (this.metrics = {
        duration,
        perTurn,
        max,
      }));
  }

  log() {
    attractionLog(this);
  }
}
