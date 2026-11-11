import { describe, it } from "node:test";
import assert from "node:assert";
import { isCleanNumber, isCleanString } from "../controller/cleanInput.js";
describe("isCleanString", () => {
    it("should return false if the string is invalid in any way", () => {
        // arrange
        const empty = "";
        const hack = "<p>I Hack</>";
        const numstr = "45";
        // act
        const result1 = isCleanString(empty);
        const result2 = isCleanString(hack);
        const result3 = isCleanString(numstr);
        // assert
        assert.deepStrictEqual(result1, false);
        assert.deepStrictEqual(result2, false);
        assert.deepStrictEqual(result3, false);
    });
    it("should return true if the string is ok", () => {
        // arrange
        const str = "good";
        // act
        const result = isCleanString(str);
        // assert
        assert.strictEqual(result, true);
    });
});
describe("isCleanNumber", () => {
    it("should return false if value is a string and not a number, or if the number is out of range", () => {
        // arrange
        const str1 = "bad boy";
        const str2 = "5";
        const possible = 3;
        // act
        const result1 = isCleanNumber(str1, possible);
        const result2 = isCleanNumber(str2, possible);
        // assert
        assert.strictEqual(result1, false);
        assert.strictEqual(result2, false);
    });
    it("should return true if the number given (string) is in range", () => {
        // arrange
        const str = "3";
        const possible = 4;
        // act
        const result = isCleanNumber(str, possible);
        // assert
        assert.strictEqual(result, true);
    });
});
//# sourceMappingURL=cleanInput.test.js.map