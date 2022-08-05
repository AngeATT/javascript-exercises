const repeatString = function(string, num) {
    const concatString = string;
    if (num > 1) {
        while (num != 1 ){
        string = string.concat(concatString);
        num--;}
    }
    return (num == 0 ) ? "" : (num < 0) ? 'ERROR' : string;
};
// Do not edit below this line
module.exports = repeatString;
