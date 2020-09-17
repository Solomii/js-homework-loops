// 2.  Є масив[1, 2, 3, 4, 5].З допомогою  цикла for вивести всі елементи на екран.
let numberArray = [1, 2, 3, 4, 5];
let string = "";
for (let i = 0; i < numberArray.length; i++) {
  string += numberArray[i] + ",";
}
alert(string);
