import type { GameInstance } from "../types/gameTypeDefs.js";
import type {
  GeneralInfo,
  Metrics,
  AttractionCategory,
  LookupType,
} from "../types/attractionsTypeDefs.js";
import { attractionLog } from "../view/prompts/attractions/attractionPrompts.js";
import type { QueueInstance, WaitingGuest } from "../types/queuTypeDefs.ts.js";

export class Game implements GameInstance {
  general: GeneralInfo;
  metrics: Metrics;
  queue: QueueInstance<WaitingGuest> | null = null;
  interval: NodeJS.Timeout | null;

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
    this.queue = null;
    this.interval = null;
  }

  log() {
    attractionLog(this);
  }
}
