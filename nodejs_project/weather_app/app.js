//////////////////////////////////////////////
// ターミナルから起動 node --env-file=.env app.js
//////////////////////////////////////////////
'use strict';
const axios = require('axios');
const axiosRetry = require('axios-retry').default;

// 失敗しても3回まで自動でつなぎ直す設定
axiosRetry(axios, { retries: 3 });
const api_key = `${process.env.API_KEY}`;
const { read } = require('fs');
// readline は、一言で言うと**「Node.jsでキーボード入力（標準入力）を受け取るための道具」**です。
// 「一行ずつ読み込む（read line）機能」を読み込みます。
const readline = require('readline');
// createInterface:「入り口（input）」と「出口（output）」をつなげます。
const rl = readline.createInterface({
  // input: process.stdin: キーボードからの入力を受け取る。
  input: process.stdin,
  // output: process.stdout: 画面に文字を出す。
  output: process.stdout,
});
function get_weather_by_zip_code(formatted_zip) {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${formatted_zip},JP&appid=${api_key}&lang=ja`;
  axios
    .get(url)
    .then(function (response) {
      const weather_data = response.data;
      // console.log(weather_data);
      console.log(`郵便番号： ${formatted_zip}`);
      console.log(`エリア： ${weather_data.name}`);
      console.log(`気温： ${(weather_data.main.temp - 273.15).toFixed(2)}°C`);
      console.log(`天候： ${weather_data.weather[0].description}`);
      console.log(`湿度： ${weather_data.main.humidity}%`);
      console.log(`風速： ${weather_data.wind.speed}m/s`);
    })
    .catch(function (error) {
      console.log('エラーが発生しました。郵便番号を確認してね');
    });
}
// 第一引数はユーザーに表示するメッセージ。
// 第二引数にユーザーが入力した内容が渡される
rl.question('郵便番号を入力してください（半角数字7桁）：', (zip) => {
  // 入力が管領した後にインターフェイスを閉じる処理
  if (!zip || isNaN(zip) || zip.length !== 7) {
    console.log('有効な７桁の郵便番号を入力してください。');
  } else {
    // index0番目から３つを切り取る + index3より後をすべて切り取る
    let formatted_zip = `${zip.slice(0, 3)}-${zip.slice(3)}`;
    console.log(`入力された郵便番号はは${formatted_zip}ですね`);
    get_weather_by_zip_code(formatted_zip);
  }
  rl.close();
});
