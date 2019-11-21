const { expect } = require("chai");
const balancedParentheses = require("./2-balanced-parentheses");

describe("Meetup 2: 2-balanced-parentheses.md", () => {
  describe("Only parentheses", () => {
    it("should return true for balanced strings", () => {
      expect(balancedParentheses("()")).to.be.true;
      expect(balancedParentheses("(())")).to.be.true;
      expect(balancedParentheses("[[]]")).to.be.true;
      expect(balancedParentheses("{{{}}}")).to.be.true;
      expect(balancedParentheses("([{()}])")).to.be.true;
    });

    it("should return false for unbalanced strings", () => {
      expect(balancedParentheses("{")).to.be.false;
      expect(balancedParentheses("({[]")).to.be.false;
      expect(balancedParentheses("({[}])")).to.be.false;
    });
  });
  
  describe("Various characters", () => {
    it("should return true for balanced strings", () => {
      expect(balancedParentheses("bar = { code: chrysalis() }")).to.be.true;
    });
    
    it("should return false for unbalanced strings", () => {
      expect(balancedParentheses("var foo = function() { boo();")).to.be.false;
    });
  });
});
