import type { GameInstance } from "../types/gameTypeDefs.js";
import type {
  GeneralInfo,
  Metrics,
  AttractionCategory,
  AttractionType,
  LookupType,
} from "../types/attractionsTypeDefs.js";
import { attractionLog } from "../view/prompts/attractionPrompts.js";
import type { QueueInstance } from "../types/queuTypeDefs.ts.js";
import type { GuestInstance } from "../types/guestTypeDefs.js";

export class Game implements GameInstance {
  general: GeneralInfo;
  metrics: Metrics;
  queue: QueueInstance<GuestInstance> | null = null;

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
