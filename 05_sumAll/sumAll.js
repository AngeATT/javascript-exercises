const sumAll = function(number_one, number_two) {
    if (number_one <0 || number_two <0 || typeof(number_one)!= "number" || typeof(number_two)!= "number" ) return 'ERROR';

    let somme =0;
    (number_one > number_two) ?  somme = number_one :  (number_one == number_two) ? somme = number_one+number_two  : somme = number_two ;
     while(number_one > number_two){
        somme += number_two;
        number_two++;
     }
     while(number_one < number_two){
        somme += number_one;
        number_one++;
     }
return somme;

};

// Do not edit below this line
module.exports = sumAll;
