const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
    const answer = this.words.map((item) => {
        return item.toUpperCase();
    });
    return answer;
}

module.exports = UpperCaser;
