const { expect } = require("chai");
const convertToNoughties = require("../meetup-2/1-noughties-teen-writing");
const balancedParentheses = require("./../meetup-2/2-balanced-parentheses");

describe("1-noughties-teen-writing.md", () => {
  describe("should return correct noughiet word", () => {
    it("should turn 'HELLO' to 'HeLlO", () => {
      expect(convertToNoughties("HELLO")).to.equal("HeLlO");
    });

    it("should turn 'hello' to 'HeLlO", () => {
      expect(convertToNoughties("hello")).to.equal("HeLlO");
    });

    it("should turn 'HeLLO' to 'HeLlO", () => {
      expect(convertToNoughties("HeLLO")).to.equal("HeLlO");
    });
  });

  describe("should return correct noughiet sentence", () => {
    it("should turn 'HELLO I AM YOU' to 'HeLlO i aM yOu.", () => {
      expect(convertToNoughties("HELLO I AM YOU")).to.equal("HeLlO i aM yOu");
    });

    it("should turn 'hello i am you' to 'HeLlO i aM yOu.", () => {
      expect(convertToNoughties("hello i am you")).to.equal("HeLlO i aM yOu");
    });

    it("should turn 'HeLlO I AM yOu' to 'HeLlO i aM yOu.", () => {
      expect(convertToNoughties("HeLlO I AM yOu")).to.equal("HeLlO i aM yOu");
    });
  });

  describe("should return correct noughiet sentences", () => {
    it("should work with 3 sentences", () => {
      expect(
        convertToNoughties(
          "HELLO I AM YOU. hello i am you. HELLO I AM YOU. hello i am you."
        )
      ).to.equal(
        "HeLlO i aM yOu. HeLlO i aM yOu. HeLlO i aM yOu. HeLlO i aM yOu."
      );
    });
  });
});

describe("2-balanced-parentheses.md", () => {
  describe("Balanced strings", () => {
    it("should return true for balanced strings, only parentheses", () => {
      expect("()").to.be.true;
      expect("(())").to.be.true;
      expect("[[]]").to.be.true;
      expect("{{{}}}").to.be.true;
      expect("([{()}])").to.be.true;
    });

    it("should return true for balanced strings", () => {
      expect("bar = { code: chrysalis() }").to.be.true;
    });
  });

  describe("should return true for balanced strings, only parentheses", () => {
    it("should turn 'HELLO' to 'HeLlO", () => {
      expect("{").to.be.false;
      expect("({[]").to.be.false;
      expect("({[}])").to.be.false;
    });

    it("should return false for unbalanced strings", () => {
      expect("var foo = function() { boo();").to.be.false;
    });
  });
});
