const sum = (...args) => {
    let res = 0;
    for (const i of args) {
    res += i;
  }
  return res;
};
console.log (sum(-4, 8, 10));
console.log (sum());
