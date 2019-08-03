const { expect } = require("chai");
const findAAndB = require("./../meetup-1/3-possible-max");

describe("3-possible-max.md", () => {
  it("should find A and B", () => {
    expect(findAAndB(12, 55)).to.deep.equal([10, 11]);
    expect(findAAndB(12, 12)).to.deep.equal([10, 11]);
    expect(findAAndB(12, 11)).to.deep.equal([8, 9]);
  });
});