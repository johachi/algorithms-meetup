const { expect } = require("chai");
const nQueens = require("./5-nqueens");

describe("5-nqueens", () => {
  it("correct answer for n = 3", () => {
    expect(nQueens(3)).to.equal(2);
  });

  it("correct answer for n = 4", () => {
    expect(nQueens(4)).to.equal(3);
  });

  it("correct answer for n = 10", () => {
    expect(nQueens(10)).to.equal(10);
  });

  it("correct answer for n = 23", () => {
    expect(nQueens(23)).to.equal(23);
  });

  it("correct answer for n = 24", () => {
    expect(nQueens(24)).to.equal(24);
  });

  it("correct answer for n = 100", () => {
    expect(nQueens(100)).to.equal(100);
  });
});