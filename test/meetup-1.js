const { expect } = require("chai");
const palindromeChecker = require("./../meetup-1/1-palindrome");
const findAAndB = require("./../meetup-1/3-possible-max");
const countIslands = require("./../meetup-1/4-islands");

describe("1-palindrome.md", () => {
  it("should return true for empty strings", () => {
    expect(palindromeChecker("", "")).to.be.true;
  });

  it("should return true for palindromes", () => {
    expect(palindromeChecker("hello", "olleh")).to.be.true;
  });

  it("should return false for non-palindromes", () => {
    expect(palindromeChecker("hello", "hello")).to.be.false;
    expect(palindromeChecker("hello", "hell")).to.be.false;
    expect(palindromeChecker("hell", "hello")).to.be.false;
    expect(palindromeChecker("", "hello")).to.be.false;
    expect(palindromeChecker("hello", "")).to.be.false;
  });
});

describe("3-possible-max.md", () => {
  it("should find A and B", () => {
    expect(findAAndB(12, 55)).to.deep.equal([10, 11]);
    expect(findAAndB(12, 12)).to.deep.equal([10, 11]);
    expect(findAAndB(12, 11)).to.deep.equal([8, 9]);
  });
});

describe("4-islands.md", () => {
  it("should work for 1x1 maps", () => {
    expect(countIslands([[0]])).to.equal(0);
    expect(countIslands([[1]])).to.equal(1);
  });

  it("it should work for bigger maps", () => {
    const map1 = [
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1]
    ];
    const map2 = [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1]
    ];
    const map3 = [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1]
    ];
    const map4 = [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1]
    ];

    expect(countIslands(map1)).to.equal(1);
    expect(countIslands(map2)).to.equal(1);
    expect(countIslands(map3)).to.equal(1);
    expect(countIslands(map4)).to.equal(1);
  });

  it("should work for full maps", () => {
    const map = [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]];
    expect(countIslands(map)).to.equal(1);
  });

  it("should work for empty maps", () => {
    const map = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
    expect(countIslands(map)).to.equal(0);
  });

  it("should work for uneven maps", () => {
    const map1 = [[1, 0, 0], [0, 1, 1]];
    expect(countIslands(map1)).to.equal(2);

    const map2 = [[1, 0], [0, 1], [0, 1]];
    expect(countIslands(map2)).to.equal(2);
  });
});
