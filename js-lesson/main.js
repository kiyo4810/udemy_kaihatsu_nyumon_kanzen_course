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

let arrayColor = ['Red', 'Green', 'Blue'];

console.log(arrayColor[0]);
console.log(arrayColor[1]);
console.log(arrayColor[2]);

for (let index = 0; index < arrayColor.length; index++) {
  console.log(arrayColor[index]);
}

const user = {
  name: 'Olivia',
  gender: 'woman',
  birth: '1990/1/1',
};
console.log(user);
console.log(user.name);
console.log(user.gender);
console.log(new Date(user.birth));
///////////////
const scores = [100, 90, 80, 70, 60];
let sums = 0;

for (let index = 0; index < scores.length; index++) {
  sums += scores[index];
}
console.log(sums);
console.log(sums / scores.length);
/////////////

// function getTriArea (wid,hei) {
//   let area = wid*hei/2;
//   console.log(area);

//////無名関数、関数リテラル。関数は無名。変数に入ってるだけ
// const getTriArea = function (wid,hei) {
//   return wid*hei/2;
// }
// console.log(getTriArea(4,8));

// };
// getTriArea(50,10);

//// アロー関数 1
// const getTriArea = (wid,hei)=>{
//   let area = wid*hei/2;
// console.log(area);
// }
// getTriArea(5,4);

//// アロー関数 2
const getTriArea = (wid, hei) => {
  return (wid * hei) / 2;
};
console.log(getTriArea(5, 4));

// const getTriArea = (wid,hei)=> wid*hei/2;
// console.log(getTriArea(5,4));

// const getTriArea = (wid, hei) => {
//   return (wid * hei) / 2;
//   // console.log(area);
// };
// let area = getTriArea(50, 4);
// console.log(area);

//// functionコンストラクターを使う。実務ではあまり使わない
// const getTriArea = new Function('wid','hei','return wid*hei/2');
// console.log(getTriArea(3,5));

// const sumApple = (aPrice, aNum) => aPrice*aNum;
// console.log(sumApple(100,13));

function price(unitPrice, n) {
  return unitPrice * n;
}
console.log(price(100, 13));

/////////////////////////////////////////////
// DOM操作
/////////////////////////////////////////////
//////////IDをキーに取得
// const elem = document.getElementById('button');
// elem.addEventListener('click', () => {
// const result = document.getElementById('result');
// console.log(result.innerText);
// // 第三引数の「,{ once: true }」を入れると一回だけ実行。現代的書き方。省略が普通
// },{ once: true })

//////////TagNameをキーに取得
// const elem = document.getElementById('button');
// elem.addEventListener('click', () => {
//   //////// getエレメン「ツ」だから複数を■■ 配列 ■■の形で返す
//   const results = document.getElementsByTagName('div');
//   console.log(results);
//   for (let index = 0; index < results.length; index++) {
//     const element = results[index];
//     console.log(element.innerText);
//   }
//   // 第三引数の「,{ once: true }」を入れると一回だけ実行。現代的書き方。省略が普通
// },{ once: true })

// //////////nameをキーに取得
// const elem = document.getElementById('button');
// elem.addEventListener('click', () => {
//   //////// getエレメン「ツ」だから複数を■■ 配列 ■■の形で返す
//   const results = document.getElementsByName('result');
//   console.log(results);
//   for (let index = 0; index < results.length; index++) {
//     const element = results[index];
//     console.log(element.value);
//   }
//   // 第三引数の「,{ once: true }」を入れると一回だけ実行。現代的書き方。省略が普通
// },{ once: true })

// //////////classをキーに取得
// const elem = document.getElementById('button');
// elem.addEventListener('click', () => {
//   //////// getエレメン「ツ」だから複数を■■ 配列 ■■の形で返す
//   const results = document.getElementsByClassName('controls');
//   console.log(results);
//   for (let index = 0; index < results.length; index++) {
//     const element = results[index];
//     console.log(element.innerText);
//   }
//   // 第三引数の「,{ once: true }」を入れると一回だけ実行。現代的書き方。省略が普通
// })

const btn = document.getElementById('button');
btn.addEventListener('click', (e) => {
  // 【最重要】これがないと、ページがリロードされてしまいます！
  e.preventDefault();
  const textIn = document.getElementById('textInput');
  const Ullist = document.getElementById('list');
  const li = document.createElement('li');
  li.innerText = textIn.value;
  // Ullist.appendChild(li);
  Ullist.prepend(li);
  //おまけ。追加後入力フォームをからにする
  textIn.value = '';
  // 3. 【ここがポイント】透かし文字を書き換える
  textIn.placeholder = '次、どんどん入力してね';
});

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
