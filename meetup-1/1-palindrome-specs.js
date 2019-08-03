const { expect } = require("chai");
const palindromeChecker = require("./1-palindrome");

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
