const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let splitPhrase = this.phrase.split('');
  splitPhrase = splitPhrase.map((item) => {
    return item.toLowerCase();
  });
  splitPhrase = splitPhrase.filter((item) => {
    if (this.alphabet.includes(item)){
      return item;
    };
  });
  const answer = this.alphabet.every((item) => {
    return splitPhrase.includes(item);
  });
  return answer;
};

module.exports = PangramFinder;
