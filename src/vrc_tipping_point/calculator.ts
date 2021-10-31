import { raw_results } from "@18x18az/rosetta/lib/vrc_tipping_point";
import * as pt from "./points"

export function calculate(raw: raw_results): number {
    return raw.rings_on_neutral_mobile_goal_high_branches * pt.RING_ON_NEUTRAL_MOBILE_GOAL_HIGH_BRANCH_PT +
        raw.rings_on_other_mobile_goal_branches * pt.RING_ON_ANY_OTHER_MOBILE_GOAL_BRANCH_PT +
        raw.rings_on_mobile_goal_bases * pt.RING_ON_MOBILE_GOAL_BASE_PT +
        raw.mobile_goals_in_alliance_home_zone * pt.MOBILE_GOAL_IN_ALLIANCE_HOME_ZONE_PT +
        raw.elevated_robots * pt.ROBOT_ELEVATED_PT +
        raw.elevated_mobile_goals * pt.MOBILE_GOAL_ELEVATED_PT +
        raw.autonomous * pt.AUTONOMOUS_BONUS;
}