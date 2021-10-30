import { calculate as vrc_tipping_point_calculator } from "./vrc_tipping_point/calculator";
import { raw_results as vrc_tipping_point_raw } from "./vrc_tipping_point/interface"
import { Game } from "@18x18az/rosetta";

type AllowablePointFormats = vrc_tipping_point_raw;

export function CalculateScore(raw: AllowablePointFormats, game: Game) {
    if (game === Game.VRC_TIPPING_POINT) {
        return vrc_tipping_point_calculator(raw);
    } else {
        throw(`Unknown game ${game}`);
    }
}