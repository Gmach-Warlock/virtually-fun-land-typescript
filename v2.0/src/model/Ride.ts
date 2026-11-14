import { attractionLog } from "../controller/prompts/attractionPrompts.js";
import type {
  IAttraction,
  IGeneral,
  IMetrics,
  TCategory,
  TType,
} from "../types/IAttractions.js";
import type { IGuest } from "../types/IGuest.js";
import type { IQueue } from "../types/IQueue.js";

export class Ride implements IAttraction {
  general: IGeneral;
  metrics: IMetrics;
  queue: IQueue<IGuest> | null;

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
    this.general = {
      id,
      name,
      description,
      type,
      category,
    };
    this.metrics = {
      duration,
      perTurn,
      max,
    };
    this.queue = null;
  }

  log() {
    attractionLog(this);
  }
}
