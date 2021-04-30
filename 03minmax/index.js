let arr = [7, 69, 2, 221, 8974];

const minMax = (arr) => {
  let min = Math.floor(Math.random() * 99999999999999);
  let max = 0;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
    }
    sum -= arr[count];
    if (sum > max) {
      max = sum;
    } 
    if (sum < min) {
      min = sum;
    }
    sum = 0;
    count++;
  }
  console.log(min, max);
} 

minMax(arr);