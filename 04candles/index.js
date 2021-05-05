
//SOLUÇÃO PEGANDO OS INPUTS DO USER
const birthdayCandles = async () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function ask(questionText) {
    return new Promise((resolve, reject) => {
      readline.question(questionText, (input) => resolve(input) );
    });
  }

  let inputs = await ask("array inputs: ");
  let formatted = inputs.split(" ");
  let highest = 0;
  let count = 0;

  formatted.map(candle => {
    if (candle > highest) {
      highest = candle;
      count = 1;
    } else if (candle === highest) {
      count++
    }
  });
  console.log(count);

  process.exit();
}

const candles = [3, 2, 1, 3, 4, 4, 4];

//SOLUCAO RECEBENDO UM ARRAY PRÉ-DEFINIDO.
const correctFunction = (arr) => {
  let tallestCandles = arr.filter(e => e === Math.max(...arr));
  return tallestCandles.length;
}

correctFunction(candles);