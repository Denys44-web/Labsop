const sum = (...args) => {
  let res = 0;
  let i = 0;
  while (i < args.length) {
    res += args[i];
    i++;
  }
  return res;
};
console.log (sum (-4, 10, 8));
console.log (sum ());