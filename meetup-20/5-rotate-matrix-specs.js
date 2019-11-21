const { expect } = require("chai");
const matrixRotater = require("./5-rotate-matrix");

describe("5-rotate-matrix.md", () => {
  describe("should rotate NxN matrixes clock-wise", () => {
    it("1x1 matrix", () => {
      const toRotate = [[1]];
      const expected = [[1]];
      expect(matrixRotater(toRotate)).to.deep.equal(expected);
    });

    it("2x2 matrix", () => {
      const toRotate = [[1, 2], [3, 4]];
      const expected = [[3, 1], [4, 2]];
      expect(matrixRotater(toRotate)).to.deep.equal(expected);
    });

    it("3x3 matrix", () => {
      const toRotate = [[1, 2, 3], ["a", "b", "c"], [5, 6, 7], ["e", "f", "g"]];
      const expected = [["e", 5, "a", 1], ["f", 6, "b", 2], ["g", 7, "c", 3]];
      expect(matrixRotater(toRotate)).to.deep.equal(expected);
    });

    it("4x4 matrix", () => {
      const toRotate = [
        [1, 2, 3, 4],
        ["a", "b", "c", "d"],
        [5, 6, 7, 8],
        ["e", "f", "g", "h"]
      ];
      const expected = [
        ["e", 5, "a", 1],
        ["f", 6, "b", 2],
        ["g", 7, "c", 3],
        ["h", 8, "d", 4]
      ];
      expect(matrixRotater(toRotate)).to.deep.equal(expected);
    });
  });

  describe("should rotate NxM matrixes clock-wise", () => {
    describe("N > M matrix", () => {
      it("2x1 matrix", () => {
        const toRotate = [[1, 2]];
        const expected = [[1], [2]];
        expect(matrixRotater(toRotate)).to.deep.equal(expected);
      });

      it("3x2 matrix", () => {
        const toRotate = [[1, 2, 3], ["a", "b", "c"]];
        const expected = [["a", 1], ["b", 2], ["c", 3]];
        expect(matrixRotater(toRotate)).to.deep.equal(expected);
      });

      it("4x1 matrix", () => {
        const toRotate = [[1, 2, 3, 4]];
        const expected = [[1], [2], [3], [4]];
        expect(matrixRotater(toRotate)).to.deep.equal(expected);
      });
    });

    describe("N < M matrix", () => {
      it("1x2 matrix", () => {
        const toRotate = [[1], [2]];
        const expected = [[2, 1]];
        expect(matrixRotater(toRotate)).to.deep.equal(expected);
      });

      it("2x3 matrix", () => {
        const toRotate = [[1, 2], ["a", "b"], [4, 5]];
        const expected = [[4, "a", 1], [5, "b", 2]];
        expect(matrixRotater(toRotate)).to.deep.equal(expected);
      });

      it("1x4 matrix", () => {
        const toRotate = [[1], [2], [3], [4]];
        const expected = [[4, 3, 2, 1]];
        expect(matrixRotater(toRotate)).to.deep.equal(expected);
      });
    });
  });
});
