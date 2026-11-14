import { describe, it } from "node:test";
import assert from "node:assert";
import { rng } from "../../controller/rng/rngHelpers.js";
describe("rng", () => {
    it("should return an integer between 0 and 1 less than the possible", () => {
        // arrange
        const possible = 3;
        // act
        const result = rng(possible);
        if (!result)
            return;
        const expected1 = result > 0;
        const expected2 = result < possible;
        // assert
        assert.strictEqual(expected1, true);
        assert.strictEqual(expected2, true);
    });
});
//# sourceMappingURL=rngHelpers.js.map