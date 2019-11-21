const opposite = {
  ")": "(",
  "]": "[",
  "}": "{",
};

function balansedParentheses(str) {
  const seenBrackets = [];

  const openingBracketsAction = bracket => {
    return seenBrackets.push(bracket);
  };

  const closingBracketsAction = bracket => {
    return seenBrackets.pop() === opposite[bracket];
  };

  const parensAction = {
    "(": openingBracketsAction,
    "[": openingBracketsAction,
    "{": openingBracketsAction,
    ")": closingBracketsAction,
    "]": closingBracketsAction,
    "}": closingBracketsAction
  };

  for (let i = 0; i < str.length; ++i) {
    const currentBracket = str[i];

    if (
      parensAction.hasOwnProperty(currentBracket) &&
      !parensAction[currentBracket](currentBracket)
    ) {
      return false;
    }
  }
  return seenBrackets.length === 0;
}

module.exports = balansedParentheses;
