import { attractionLog } from "../view/prompts/attractionPrompts.js";
import type {
  Attraction,
  GeneralInfo,
  Metrics,
  AttractionCategory,
  LookupType,
} from "../types/attractionsTypeDefs.js";
import type { GuestInstance } from "../types/guestTypeDefs.js";
import type { QueueInstance } from "../types/queuTypeDefs.ts.js";

export class Ride implements Attraction {
  general: GeneralInfo;
  metrics: Metrics;
  queue: QueueInstance<GuestInstance> | null;

  constructor(
    id: string,
    name: string,
    description: string,
    category: AttractionCategory,
    duration: number,
    type: LookupType,
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
