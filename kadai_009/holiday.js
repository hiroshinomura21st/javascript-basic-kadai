
// 祝日名の配列を宣言・文字列の代入
const holidays = ['正月', '成人の日', '建国記念日', '天皇誕生日', '春分の日', '昭和の日', '憲法記念日', 'みどりの日', 'こどもの日', '海の日', '山の日', '敬老の日', '秋分の日', 'スポーツの日', '文化の日', '勤労感謝の日'];

//for文で全ての祝日を出力
for (let i = 0; i <= 15; i++) {
  console.log(holidays[i]);
}

// while文で全ての祝日を出力
i = 0;
while (i <= 15) {
  console.log(holidays[i]);
  i++;
}