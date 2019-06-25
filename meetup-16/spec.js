const { expect } = require("chai");
const { zombie } = require("./5-world-war-z");

describe("String Adder", () => {
  it("Test 1", () => {
    const map = [
      [0, 0, 0, 0, 0, 0],
      [1, 2, 3, 0, 0, 2],
      [0, 0, 0, 0, 0, 0],
      [2, 0, 0, 1, 2, 0],
      [0, 0, 1, 0, 0, 0],
      [2, 3, 0, 0, 0, 0]
    ];
    expect(zombie(map)).to.deep.equal([1, 4]);
  });
});
