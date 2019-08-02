const { expect } = require("chai");
const palindromeChecker = require("../meetup-1/1-palindrome");
const findAAndB = require("../meetup-1/3-possible-max");

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

