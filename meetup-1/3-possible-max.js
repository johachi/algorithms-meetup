// Assumptions 1: The set N can be should contain all numbers 1 to N, inclusivly. 
// It can therefor be represented as only the integer N.
// Assumption 2: k > 2.

function findAAndB(N, k) {
  let biggestPossible;
  if (N >= k) {
    biggestPossible = k - 1;
  } else {
    biggestPossible = N;
  }

  const alternative1 = (biggestPossible - 1) & biggestPossible;
  const alternative2 = (biggestPossible - 2) & (biggestPossible - 1);

  if (alternative1 > alternative2) {
    return [(biggestPossible - 1), biggestPossible];
  } else {
    return [(biggestPossible - 2), (biggestPossible - 1)];
  }
}

module.exports = findAAndB;