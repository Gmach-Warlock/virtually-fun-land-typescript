import { describe, it } from "node:test";
import assert from "node:assert";
import {
  itemExistsByKeyValue,
  itemExistsInArray,
} from "../../controller/crud/itemExists.js";
import type { AllType, Basic } from "../../types/basicTypes.js";

describe("itemExistsInArray", () => {
  it("should return false if the item doesn't exist in the array", () => {
    // arrange
    const arr1: Basic[] = [1, 2, 3];
    const arr2: Basic[] = ["1", "2", false];
    const itm1 = "2";
    const itm2 = true;
    // act
    const result1 = itemExistsInArray(arr1, itm1);
    const result2 = itemExistsInArray(arr2, itm2);
    // assert
    assert.strictEqual(result1, false);
    assert.strictEqual(result2, false);
  });
  it("should return true if the item exists in the array", () => {
    // arrange
    const arr: Basic[] = [1, 2, 3, 4, 5];
    const itm = 2;
    // act
    const result = itemExistsInArray(arr, itm);
    // assert
    assert.strictEqual(result, true);
  });
});

describe("itemExistsByKeyValue", () => {
  it("should return false if an item with the value of the prop is given", () => {
    // arrange
    const arr: Array<{ id: number }> = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const param: keyof { id: number } = "id";
    const value = 5;
    // act
    const result = itemExistsByKeyValue(arr, param, value);
    // assert
    assert.strictEqual(result, false);
  });
  it("should return true if the item exist with the prop and value", () => {
    // arrange
    const arr: Array<{ id: number }> = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const param: keyof { id: number } = "id";
    const value = 2;
    // act
    const result = itemExistsByKeyValue(arr, param, value);
    // assert
    assert.strictEqual(result, true);
  });
});
