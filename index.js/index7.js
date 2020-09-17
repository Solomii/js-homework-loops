// 7. Створити калькулятор який буде зациклений.Запитати у юзера 2 числа та знак, провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити ?
let result;
do {
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
      alert("Ви нічого не ввели!");
  }
} while (confirm(result + ", чи хочете повторити?"));
