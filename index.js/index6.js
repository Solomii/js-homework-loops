// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3 - х, але менше 10.
let num = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < num.length; i++) {
  if (num[i] > 3 && num[i] < 10) {
    alert(num[i]);
  }
}
