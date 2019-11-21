const openingBrackets = {
  "{": "}",
  "[": "]",
  "(": ")"
};

const closingBrackets = {
  "}": "{",
  "]": "[",
  ")": "("
};

function balansedParentheses(str) {
  const seenBrackets = [];
  for (let i = 0; i < str.length; ++i) {
    const currentBracket = str[i];

    if (openingBrackets.hasOwnProperty(currentBracket)) {
      seenBrackets.push(currentBracket);
    } else if (closingBrackets.hasOwnProperty(currentBracket)) {
      if(closingBrackets[currentBracket] === seenBrackets[seenBrackets.length - 1]) {
        seenBrackets.pop();
      } else {
        return false;
      }
    }
  }
  return seenBrackets.length === 0;
}

module.exports = balansedParentheses;
