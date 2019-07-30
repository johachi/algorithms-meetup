function makeNoughtiesWord(word, shouldBeCapital) {
  let noughtiesWord = "";

  for (let i = 0; i < word.length; ++i) {
    const letter = word[i];
    if (shouldBeCapital) {
      noughtiesWord += letter.toLocaleUpperCase();
    } else {
      noughtiesWord += letter.toLocaleLowerCase();
    }
    shouldBeCapital = !shouldBeCapital;
  }

  return noughtiesWord;
}

function makeNoughtiesSentence(sentence) {
  const words = sentence.split(" ");

  const noughtiesWords = words.map((word, index) => {
    let noughtiesWord = "";

    if (word === "I") {
      noughtiesWord = "i";
    } else {
      let shouldBeCapital = index !== 0 ? false : true; // First word should have first letter capitalized;
      noughtiesWord = makeNoughtiesWord(word, shouldBeCapital);
    }

    return noughtiesWord;
  });

  return noughtiesWords.join(" ");
}

function noughties(string) {
  if (typeof string !== "string") {
    throw new Error(
      "ERROR! 1-noughties-teen-writing.js noughties: Input must be of type string"
    );
  }

  const sentences = string.split(". ");

  const noughitesSentences = sentences.map(sentence => {
    return makeNoughtiesSentence(sentence);
  });

  return noughitesSentences.join(". ");
}

module.exports = noughties;
