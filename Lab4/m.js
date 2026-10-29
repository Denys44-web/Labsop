const max = (matrix) => {
  let res = matrix[0][0];

  for (const i of matrix) {
    for (const item of i) {
      if (item > res) {
        res = item;
      }
    }
  }
  return res;
};

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);