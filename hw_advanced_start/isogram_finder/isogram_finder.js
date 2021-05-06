const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    let splitWord = this.word.split('');
    splitWord = splitWord.map((item) => item.toLowerCase());
    const splitWordUniqueChars = [];
    splitWord.every((item) =>{
        if (!splitWordUniqueChars.includes(item)){
            return splitWordUniqueChars.push(item);
        }
    });
    if (splitWordUniqueChars.length === splitWord.length){
        return true;
    }else{
        return false;
    };
};

module.exports = IsogramFinder;
