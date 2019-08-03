const { expect } = require("chai");
const frogger = require("./1-frogger-game");

describe("1-frogger-game", () => {
  describe("possible paths", () => {
    it("should return true for 'XOXOOXXXXOX'", () => {
      expect(frogger("XOXOOXXXXOX")).to.be.true;
    });
  });

  describe("impossible paths", () => {
    it("should return false for 'XOOXXOXOXOXOOOOX'", () => {
      expect(frogger("XOOXXOXOXOXOOOOX")).to.be.false;
    });
  });
});
