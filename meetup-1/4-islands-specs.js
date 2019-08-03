const { expect } = require("chai");
const countIslands = require("./4-islands");

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

    expect(countIslands(map1)).to.equal(2);
    expect(countIslands(map2)).to.equal(2);
    expect(countIslands(map3)).to.equal(2);
    expect(countIslands(map4)).to.equal(2);
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
