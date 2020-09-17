// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8
let table = 8;
let count = 9;
for (var i = 0; i <= count; i++) {
  i++;
  console.log(table, "X", i, "=", table * i);
  --i;
}
