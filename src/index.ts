import { calculate as vrc_tipping_point_calculator } from "./vrc_tipping_point/calculator";
import { raw_results as vrc_tipping_point_raw } from "./vrc_tipping_point/interface"

type AllowablePointFormats = vrc_tipping_point_raw;

export function CalculateScore(raw: AllowablePointFormats) {
    return vrc_tipping_point_calculator(raw);
}