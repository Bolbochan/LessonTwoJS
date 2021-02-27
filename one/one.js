//Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let FirstNum = prompt("Enter first number");
let LastNum = prompt("Enter last number");
let SumNum = 0;
while (FirstNum < LastNum) {
    FirstNum++
    SumNum += FirstNum;
}
console.log(SumNum)