import { AllowablePointFormats, ScoreTeamMeta } from "@18x18az/rosetta";
import { QualificationResults, raw_results } from "@18x18az/rosetta/lib/vrc_tipping_point";
import * as pt from "./points"

export function calculate_score(raw: raw_results): number {
    return raw.rings_on_neutral_mobile_goal_high_branches * pt.RING_ON_NEUTRAL_MOBILE_GOAL_HIGH_BRANCH_PT +
        raw.rings_on_other_mobile_goal_branches * pt.RING_ON_ANY_OTHER_MOBILE_GOAL_BRANCH_PT +
        raw.rings_on_mobile_goal_bases * pt.RING_ON_MOBILE_GOAL_BASE_PT +
        raw.mobile_goals_in_alliance_home_zone * pt.MOBILE_GOAL_IN_ALLIANCE_HOME_ZONE_PT +
        raw.elevated_robots * pt.ROBOT_ELEVATED_PT +
        raw.elevated_mobile_goals * pt.MOBILE_GOAL_ELEVATED_PT +
        raw.autonomous * pt.AUTONOMOUS_BONUS;
}

const AP_VALUE = 6;

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