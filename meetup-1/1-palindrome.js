function palindrome(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const length = string1.length;
  for (let i = 0; i < length; i++) {
    if (string1[i] !== string2[length - 1 - i]) {
      return false;
    }
  }

  return true;
}
console.log(
  palindrome("hello", "olleh"),
  palindrome("", ""),
  palindrome("hello", "hello"),
  palindrome("hello", "hell"),
  palindrome("hell", "hello"),
  palindrome("", "hello"),
  palindrome("hello", "")
);

module.exports = palindrome;
