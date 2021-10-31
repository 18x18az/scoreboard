import { calculate } from "./calculator";
import { raw_results } from "@18x18az/rosetta/lib/vrc_tipping_point";

describe("VRC Tipping Point Scoring", () => {
    it("Should correctly score a match with no points" , () => {
        const toScore: raw_results = {
            autonomous: 0,
            rings_on_neutral_mobile_goal_high_branches: 0,
            rings_on_other_mobile_goal_branches: 0,
            rings_on_mobile_goal_bases: 0,
            mobile_goals_in_alliance_home_zone: 0,
            elevated_robots: 0,
            elevated_mobile_goals: 0
        }

        const results = calculate(toScore);
        expect(results).toBe(0);
    });

    it("Should correctly score rings on neutral mobile goal high branches" , () => {
        const toScore: raw_results = {
            autonomous: 0,
            rings_on_neutral_mobile_goal_high_branches: 2,
            rings_on_other_mobile_goal_branches: 0,
            rings_on_mobile_goal_bases: 0,
            mobile_goals_in_alliance_home_zone: 0,
            elevated_robots: 0,
            elevated_mobile_goals: 0
        }

        const results = calculate(toScore);
        expect(results).toBe(20);
    });

    it("Should correctly score rings on other mobile goal branches" , () => {
        const toScore: raw_results = {
            autonomous: 0,
            rings_on_neutral_mobile_goal_high_branches: 0,
            rings_on_other_mobile_goal_branches: 2,
            rings_on_mobile_goal_bases: 0,
            mobile_goals_in_alliance_home_zone: 0,
            elevated_robots: 0,
            elevated_mobile_goals: 0
        }

        const results = calculate(toScore);
        expect(results).toBe(6);
    });

    it("Should correctly score rings scored on mobile goal based" , () => {
        const toScore: raw_results = {
            autonomous: 0,
            rings_on_neutral_mobile_goal_high_branches: 0,
            rings_on_other_mobile_goal_branches: 0,
            rings_on_mobile_goal_bases: 2,
            mobile_goals_in_alliance_home_zone: 0,
            elevated_robots: 0,
            elevated_mobile_goals: 0
        }

        const results = calculate(toScore);
        expect(results).toBe(2);
    });

    it("Should correctly score mobile goals scored in an alliance home zone" , () => {
        const toScore: raw_results = {
            autonomous: 0,
            rings_on_neutral_mobile_goal_high_branches: 0,
            rings_on_other_mobile_goal_branches: 0,
            rings_on_mobile_goal_bases: 0,
            mobile_goals_in_alliance_home_zone: 2,
            elevated_robots: 0,
            elevated_mobile_goals: 0
        }

        const results = calculate(toScore);
        expect(results).toBe(40);
    });

    it("Should correctly score elevated robots" , () => {
        const toScore: raw_results = {
            autonomous: 0,
            rings_on_neutral_mobile_goal_high_branches: 0,
            rings_on_other_mobile_goal_branches: 0,
            rings_on_mobile_goal_bases: 0,
            mobile_goals_in_alliance_home_zone: 0,
            elevated_robots: 2,
            elevated_mobile_goals: 0
        }

        const results = calculate(toScore);
        expect(results).toBe(60);
    });

    it("Should correctly score elevated mobile goals" , () => {
        const toScore: raw_results = {
            autonomous: 0,
            rings_on_neutral_mobile_goal_high_branches: 0,
            rings_on_other_mobile_goal_branches: 0,
            rings_on_mobile_goal_bases: 0,
            mobile_goals_in_alliance_home_zone: 0,
            elevated_robots: 0,
            elevated_mobile_goals: 2
        }

        const results = calculate(toScore);
        expect(results).toBe(80);
    });

    it("Should correctly score an autonomous win" , () => {
        const toScore: raw_results = {
            autonomous: 1,
            rings_on_neutral_mobile_goal_high_branches: 0,
            rings_on_other_mobile_goal_branches: 0,
            rings_on_mobile_goal_bases: 0,
            mobile_goals_in_alliance_home_zone: 0,
            elevated_robots: 0,
            elevated_mobile_goals: 0
        }

        const results = calculate(toScore);
        expect(results).toBe(6);
    });

    it("Should correctly score an autonomous tie" , () => {
        const toScore: raw_results = {
            autonomous: 0.5,
            rings_on_neutral_mobile_goal_high_branches: 0,
            rings_on_other_mobile_goal_branches: 0,
            rings_on_mobile_goal_bases: 0,
            mobile_goals_in_alliance_home_zone: 0,
            elevated_robots: 0,
            elevated_mobile_goals: 0
        }

        const results = calculate(toScore);
        expect(results).toBe(3);
    });

    it("Should correctly score a normal match" , () => {
        const toScore: raw_results = {
            autonomous: 0.5,
            rings_on_neutral_mobile_goal_high_branches: 2,
            rings_on_other_mobile_goal_branches: 4,
            rings_on_mobile_goal_bases: 5,
            mobile_goals_in_alliance_home_zone: 1,
            elevated_robots: 1,
            elevated_mobile_goals: 2
        }

        const results = calculate(toScore);
        expect(results).toBe(170);
    });
})