const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const result = Math.floor(Math.random() * 10 + 1);

function askQuestion() {
  rl.question("Guess the number between 1 and 10: ", (answer) => {
    let input = Number(answer);

    if (isNaN(input)) {
      console.log("請輸入有效的數字！");
    } else if (input === result) {
      console.log("你猜對了！ result=" + result);
      rl.close();
      return;
    } else if (input > result) {
      console.log("太大了！");
    } else {
      console.log("太小了！");
    }

    askQuestion(); // 重新提問
  });
}

askQuestion();
