const letterCount = (str) => ({
  vowels: str.match(/[aeiou]/gi).length,
  consonants: str.length - str.match(/[aeiou]/gi).length,
});
module.exports = letterCount;