import { describe, it } from "node:test";
import assert from "node:assert";
import { addItemToArray } from "../../controller/crud/CRUDHelpers.js";
describe("addItemToArray", () => {
    it("should add an item of any type to an array, and NOT mutate the original", () => {
        // arrange
        const arr1 = [1, 2, 3];
        const arr2 = [1, "2", false];
        const itm = "4";
        // act
        const result1 = addItemToArray(arr1, itm);
        const result2 = addItemToArray(arr2, itm);
        // assert
        assert.deepStrictEqual(result1, [1, 2, 3, "4"]);
        assert.deepStrictEqual(result2, [1, "2", false, "4"]);
    });
});
describe("itemExistsInArray", () => {
    it("should return false if the item doesn't exist in the array", () => {
        // arrange
        const arr1 = [1, 2];
    });
});
//# sourceMappingURL=CRUDHelpers.test.js.map