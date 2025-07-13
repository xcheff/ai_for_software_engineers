const letterCount = (str = "") => {
  const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
  let vowels = 0,
    consonants = 0;
  for (const c of str.toLowerCase()) {
    if (vowelsSet.has(c)) {
      vowels++;
    } else if (c >= "a" && c <= "z") {
      consonants++;
    }
  }
  return { vowels, consonants };
};
module.exports = letterCount;