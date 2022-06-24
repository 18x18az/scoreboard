import { CompetitionMeta, FullRawMatch, QualificationResults, AllowablePointFormats, ScoreAllianceMeta, ScoreTeamMeta, Game } from "@18x18az/rosetta";
import { AllianceQualificationResults, TeamQualificationResults } from "@18x18az/rosetta/lib/vrc";
import { CalculateQualificationResults as CalculateTippingPointQualificationResults } from "../vrc_tipping_point/calculator";
import { CalculateQualificationResults as CalculateSpinUpQualificationResults } from "../vrc_spin_up/calculator";

function CalculateTeamQualificationResults(ownResults: AllowablePointFormats, otherResults: AllowablePointFormats, teamMeta: ScoreTeamMeta, competition: CompetitionMeta ): TeamQualificationResults {
    const game = competition.game;

    if(game === Game.VRC_TIPPING_POINT) {
        return CalculateTippingPointQualificationResults(ownResults, otherResults, teamMeta);
    } else if(game === Game.VRC_SPIN_UP) {
        return CalculateSpinUpQualificationResults(ownResults, otherResults, teamMeta);
    } else {
        throw(`Unknown game ${game}`);
    }
}

function CalculateAllianceQualificationResults(ownResults: AllowablePointFormats, otherResults: AllowablePointFormats, allianceMeta: ScoreAllianceMeta, competition: CompetitionMeta): AllianceQualificationResults {
    return {
        team1: CalculateTeamQualificationResults(ownResults, otherResults, allianceMeta.team1, competition),
        team2: CalculateTeamQualificationResults(ownResults, otherResults, allianceMeta.team2, competition)
    }
}

export function CalculateQualificationResults(match: FullRawMatch, competition: CompetitionMeta): QualificationResults {
    return {
        redAlliance: CalculateAllianceQualificationResults(match.rawResults.redAlliance, match.rawResults.blueAlliance, match.participants.redAlliance, competition),
        blueAlliance: CalculateAllianceQualificationResults(match.rawResults.blueAlliance, match.rawResults.redAlliance, match.participants.blueAlliance, competition)
    }
}