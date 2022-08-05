const palindromes = function (unMot) {

    if (unMot.length == 0) return false;
    return (unMot == unMot.split().reverse().join(''))

};


// Do not edit below this line
module.exports = palindromes;
