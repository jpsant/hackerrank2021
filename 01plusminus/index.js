const array = [1, 1, 0, -1, -1]

const plusMinus = (arr) => {
  const divider = arr.length;
  let positives = [];
  let negatives = [];
  let nulls = [];
  arr.map(e => {
    if (e === 0) {
      nulls.push(e);
    } else {
      e > 0 ? positives.push(e) : negatives.push(e);
    }
  });
  console.log((positives.length / divider).toFixed(6));
  console.log((negatives.length / divider).toFixed(6));
  console.log((nulls.length / divider).toFixed(6));
}

plusMinus(array);