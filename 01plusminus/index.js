const array = [1, 1, 0, -1, -1]

const plusMinus = (arr) => {
  const divider = arr.length;
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  arr.map(e => {
    if (e === 0) {
      zeros++;
    } else {
      e > 0 ? positive++ : negative++;
    }
  });
  console.log((positive / divider).toFixed(6));
  console.log((negative / divider).toFixed(6));
  console.log((zeros / divider).toFixed(6));
}

plusMinus(array);