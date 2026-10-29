const unique = (array) => {
  const res = [];
  for (const item of array) {
    if (!res.includes(item)) {
      res.push(item);
    }
  }
  return res;
};
const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);