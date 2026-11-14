import type { IAttraction } from "../../types/IAttractions.js";

export function attractionLog(attraction: IAttraction) {
  console.log(`The ${attraction.general.name}
${attraction.general.description}
type: ${attraction.general.type}
category: ${attraction.general.category}
per: ${attraction.metrics.perTurn}
max: ${attraction.metrics.max}
`);
}
