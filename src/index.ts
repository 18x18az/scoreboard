import { calculate_score as vrc_tipping_point_calculator } from "./vrc_tipping_point/calculator";
import { calculate_score as vrc_spin_up_calculator } from "./vrc_spin_up/calculator";
import { CompetitionMeta, AllowablePointFormats, Game, FullRawMatch, QualificationResults, Program } from "@18x18az/rosetta";
import { CalculateQualificationResults as CalculateVrcQualificationResults } from "./vrc/calculator";

export function CalculateScore(raw: AllowablePointFormats, competition: CompetitionMeta) {
    const game = competition.game;

    if (game === Game.VRC_TIPPING_POINT) {
        return vrc_tipping_point_calculator(raw);
    } else if (game === Game.VRC_SPIN_UP) {
        return vrc_spin_up_calculator(raw);
    } else {
        throw(`Unknown game ${game}`);
    }
}

export function CalculateRankingPoints(match: FullRawMatch, competition: CompetitionMeta): QualificationResults {
    const program = competition.program;

    if(program === Program.VRC) {
        return CalculateVrcQualificationResults(match, competition);
    } else {
        throw(`Unknown program ${program}`);
    }
}