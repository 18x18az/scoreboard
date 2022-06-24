import { AllowablePointFormats, ScoreTeamMeta } from "@18x18az/rosetta";
import { QualificationResults, raw_results } from "@18x18az/rosetta/lib/vrc_spin_up";
import * as pt from "./points"

export function calculate_score(raw: raw_results): number {
    return raw.discs_high_goal * pt.DISC_HIGH_GOAL +
        raw.discs_low_goal * pt.DISC_LOW_GOAL +
        raw.owned_rollers * pt.OWNED_ROLLER +
        raw.covered_tiles * pt.COVERED_TILE +
        raw.autonomous; // raw will be either 5 or 10
}

const AP_VALUE = 10;

export function CalculateQualificationResults(ownResults: raw_results, otherResults: raw_results, teamMeta: ScoreTeamMeta): QualificationResults {
    let results: QualificationResults = {
        wp: 0,
        ap: 0,
        sp: 0,
        score: 0
    }

    if(teamMeta.disqualified || teamMeta.noShow) return results;

    const ownScore = calculate_score(ownResults);
    const otherScore = calculate_score(otherResults);

    results.score = ownScore;
    results.sp = Math.min(ownScore, otherScore);
    results.ap = ownResults.autonomous * AP_VALUE;

    if(ownScore > otherScore){
        results.wp = 2;
    } else if (ownScore == otherScore){
        results.wp = 1;
    }

    if(ownResults.awp) results.wp += 1;

    return results;
}