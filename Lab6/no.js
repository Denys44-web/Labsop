const c = (...fns) => {
  const handlers = [];
  const ce = (x) => {
    if (fns.length === 0) return x;
    const last = fns.length - 1;
    let res = x;
    try {
      for (let i = last; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return undefined;
    }
  };
  ce.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  };
  return ce;
};
const inc = (x) => x + 1;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;
const calc = c(cube, twice, inc);

calc.on('error', (error) => console.log(error.message));
console.log(calc(5));