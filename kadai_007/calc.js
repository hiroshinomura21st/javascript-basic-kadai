// 定数numを宣言・値の入力
const num = 4;

// 3と5の倍数の場合、文字列を出力
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
} 
// 3の倍数の場合、文字列を出力
else if (num % 3 === 0) {
  console.log('3の倍数です');
}
// 5の倍数の場合、文字列を出力
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
// それ以外のとき、変数(num)を出力
else {
  console.log(num);
}