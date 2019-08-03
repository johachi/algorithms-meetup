function frogger(str) {
  let oInRows = 0;

  // Problem say that input will always start and end with X.
  // So we do not have to check these characters to see if they are an O.
  for (let i = 1; i < str.length - 1; ++i) {
    if (str[i] === "O") {
      oInRows++;
    } else {
      oInRows = 0;
    }

    if (oInRows > 2) {
      return false;
    }
  }

  return true;
}

module.exports = frogger;
