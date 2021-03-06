import { CalculateScore } from "./index"
import { Game } from "@18x18az/rosetta"

describe("Index", () => {
    const payload = 'test' as any;
    const dummy_return = 42;

    it("Should calculate for VRC Tipping Point if told to", () => {
        const calculator = require('./vrc_tipping_point/calculator')
        const calculate_function = jest.spyOn(calculator, 'calculate_score').mockReturnValue(dummy_return);
        const result = CalculateScore(payload, {game: Game.VRC_TIPPING_POINT} as any);
        expect(calculate_function).toBeCalledWith(payload);
        expect(result).toBe(dummy_return);
    });

    it("Should throw an error if it is given an invalid game", () => {
        const game = "handegg" as any;
        function wrongGame() {
            CalculateScore(payload, {game} as any);
        }
        expect(wrongGame).toThrow(`Unknown game ${game}`)
    });
});