// 3. Є масив[-1, 22, 3, 44, 5].Виведіть максимальне значення
let maxNumber = [-1, 22, 3, 44, 5];
for (let i = 0; i < maxNumber.length; i++) {
  if (maxNumber[i] > maxNumber[0]) {
    maxNumber[0] = maxNumber[i];
  }
}
console.log(maxNumber[0]);
