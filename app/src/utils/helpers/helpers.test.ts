import { createArray } from "./helpers";

describe("createArray", () => {
  it("should return an array with numbers from start to stop with the specified step", () => {
    expect(createArray(0, 3)).toStrictEqual([0, 1, 2, 3]);
    expect(createArray(0, 5)).toStrictEqual([0, 1, 2, 3, 4, 5]);
    expect(createArray(1, 6)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(createArray(0, 10, 2)).toStrictEqual([0, 2, 4, 6, 8, 10]);
  });
});
