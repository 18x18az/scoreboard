import { calculate as vrc_tipping_point_calculator } from "./vrc_tipping_point/calculator";
import { Game, AllowablePointFormats } from "@18x18az/rosetta";

export function CalculateScore(raw: AllowablePointFormats, game: Game) {
    if (game === Game.VRC_TIPPING_POINT) {
        return vrc_tipping_point_calculator(raw);
    } else {
        throw(`Unknown game ${game}`);
    }
}