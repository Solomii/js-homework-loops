// 1.  Знайдіть суму всіх цифр від 1 до 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
//   // sum += i;
// console.log(sum);
// }
// console.log(sum);
// 2.  Є масив[1, 2, 3, 4, 5].З допомогою  цикла for вивести всі елементи на екран.
// let numberArray = [1, 2, 3, 4, 5];
// let string = "";
// for (let i = 0; i < numberArray.length; i++) {
//   string += numberArray[i] + ",";
// }
// alert(string);
// 3. Є масив[-1, 22, 3, 44, 5].Виведіть максимальне значення
// let maxNumber = [-1, 22, 3, 44, 5];
// for (let i = 0; i < maxNumber.length; i++) {
//   if (maxNumber[i] > maxNumber[0]) {
//     maxNumber[0] = maxNumber[i];
//   }
// }
// console.log(maxNumber[0]);
// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів.Вивести статистику на екран.Також досмтатньо тільки 1 змінної для отримання даних від юзера.
// let positive = 0;
// let negative = 0;
// let zеro = 0;
// for (let i = 0; i < 8; i++) {
//   let answer = +prompt("Введіть будь яке число");
//   if (answer > 0) {
//     positive++;
//   } else if (answer < 0) {
//     negative++;
//   } else {
//     zеro++;
//   }
// }
// alert(`Ти ввів ${positive} додатніх, ${negative}відємних,${zеro}нулів`);
// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8
// let table = 8;
// let count = 9;
// for (var i = 0; i <= count; i++) {
//   i++;
//   console.log(table, "X", i, "=", table * i);
//   --i;
// }
// let number = parseInt(prompt("Введіть яке число на яке множити?: "));
// //creating a multiplication table
// for (let i = 1; i <= 10; i++) {
//   // multiply i with number
//   result = i * number;
//   // display the result
//   console.log(`${number} * ${i} = ${result}`);
// }

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3 - х, але менше 10.
// let num = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 3 && num[i] < 10) {
//     alert(num[i]);
//   }
// }
// 7. Створити калькулятор який буде зациклений.Запитати у юзера 2 числа та знак, провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити ?
let result;
let numOne = +prompt("Введіть число");
let oper = prompt("Виконайте дію +,-,*,/");
let numTwo = +prompt("Введіть наступне число");
switch (oper) {
  case "+":
    result = numOne + numTwo;
    break;
  case "-":
    result = numOne - numTwo;
    break;
  case "*":
    result = numOne * numTwo;
    break;
  case "/":
    result = numOne / numTwo;
    break;
  default:
    result = "Ви нічого не ввели!";
}
alert(result);
