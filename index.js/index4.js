// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів.Вивести статистику на екран.Також досмтатньо тільки 1 змінної для отримання даних від юзера.
let positive = 0;
let negative = 0;
let zеro = 0;
for (let i = 0; i < 8; i++) {
  let answer = +prompt("Введіть будь яке число");
  if (answer > 0) {
    positive++;
  } else if (answer < 0) {
    negative++;
  } else {
    zеro++;
  }
}
alert(`Ти ввів ${positive} додатніх, ${negative}відємних,${zеro}нулів`);
