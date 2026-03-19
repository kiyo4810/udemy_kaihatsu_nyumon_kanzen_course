'use strict';
console.log('hello from Pap');
console.log('hello from Pap');
console.log('hello from Pap');
console.log('hello from Pap');
let x = 4;
console.log(x);
x = x * 4;
console.log(x);

// エスケープシーケンス
console.log("hello I'm Kiyo");
console.log('\¥ \t AAA \n BBB');

// インクリメント　デクリメント
let num = 10;
num++;
console.log(num);

++num;
console.log(num);

--num;
console.log(num);

let num1 = 10;
let num2 = 20;
// ++してから代入
let ans1 = ++num1;
// 代入してから++
let ans2 = num2++;

console.log(ans1, ans2);

let valX = 60;
if (valX >= 100) {
  console.log('100以上の値です');
} else {
  console.log('100未満の値です');
}

if (valX >= 90) {
  console.log('A');
} else if (valX >= 80) {
  console.log('B');
} else if (valX >= 60) {
  console.log('C');
  // }else if (valX<60) {
} else {
  console.log('D');
}
let numnum = 100;
let numstr = '100';
if (numnum === numstr) {
  console.log('同じ');
} else {
  console.log('別物');
}

// 「ここから処理を開始せよ」という「入り口（ラベル）」に過ぎない。
// その直後にある break; という看板を見て、ようやく「あ、ここで終わりか」と判断して外に出ます。
switch (1) {
  case 1:
    console.log('one');
    break;

  case 2:
    console.log('two');
    break;

  case 3:
    console.log('three');
    break;

  default:
    console.log('other');
    break;
}
let age = 10;
if (age >= 12) {
  console.log('5000円です');
} else if (age >= 6) {
  console.log('2500円です');
} else {
  console.log('1000円です');
}

const array = [9, 6, 4, 3, 1];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

do {
  console.log(i + 'だぜ');
  i++;
} while (i <= 20);

// let sum = 0;
// for (let index = 0; index <100; index++) {
//   sum = sum+index+1;

// }
// console.log(sum);

let sum = 0;
for (let index = 1; index <= 100; index++) {
  sum = sum + index;
}
console.log(sum);

/////////////////////////////////////////////
// fetchを使って、文字化けを回避しながら中身を読み出す
/////////////////////////////////////////////
fetch('./main.js')
  .then((response) => {
    // responseをtextとして受け取る際、明示的にUTF-8を指定した形になる
    return response.text();
  })
  .then((data) => {
    const display = document.getElementById('code-display');
    if (display) {
      display.textContent = data;
      // ★これを追加！読み込み完了後に色付けを実行します
      Prism.highlightElement(display);
    }
  })
  .catch((err) => console.error('ファイルの読み込みに失敗しました:', err));
