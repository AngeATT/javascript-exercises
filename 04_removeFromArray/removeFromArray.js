const removeFromArray = function(aArray,...aNum) {
    for (let i of aNum){
       (aArray.indexOf(i) >= 0 ) ? aArray.splice(aArray.indexOf(i),1) : 1;
    }
     return aArray;

};
console.log(removeFromArray([1, 2, 3, 4], 1,2,3,4))
module.exports = removeFromArray;
