//Запросить 2 числа и найти только наибольший общий делитель.
let OneNum = prompt("Enter first number");
let LastNum = prompt("Enter last number");
let MediumNum = 0;
if (OneNum != LastNum) {
    OneNum = OneNum % LastNum;
    MediumNum = OneNum / 2
}
console.log(MediumNum)
