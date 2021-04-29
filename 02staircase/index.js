const staircaseOptimized = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

const staircase = (n) => {
  let string = '';
  for (let i = 1; i <= n; i++) {  //FOR pra tomar conta de tudo;
    for (let j = n - 1; j >= i; j--) {  //FOR para printar os ' ';
      string += ' ';
    }
    for (let k = 1; k <= i; k++) {  //FOR para printar os '#';
      string += '#';
    }
    string += '\n'  //quebrando a linha no final de cada iteração.
  }
  console.log(string);
}

staircase(4);