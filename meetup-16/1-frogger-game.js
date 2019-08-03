function frogger(str) {
  let oInRows = 0;
  for (let i = 0; i < str.length; ++i) {
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
