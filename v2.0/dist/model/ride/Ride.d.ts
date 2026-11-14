import type { IRide, TRideCategory, TType } from "../../types/attractions/IGame.js";
export declare class Ride implements IRide {
    id: string;
    name: string;
    description: string;
    type: TType;
    category: TRideCategory;
    duration: number;
    occupancy: number;
    max: number;
    constructor(id: string, name: string, description: string, type: TType, category: TRideCategory, duration: number, occupancy: number, max: number);
}
//# sourceMappingURL=Ride.d.ts.map