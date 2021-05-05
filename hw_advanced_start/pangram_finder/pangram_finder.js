const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let splitPhrase = this.phrase.split('');
  splitPhrase = splitPhrase.filter((item) => {
    return item != ' ';
  });
  const answer = this.alphabet.every((item) => {
    return splitPhrase.includes(item);
  });
  return answer;
};

module.exports = PangramFinder;
