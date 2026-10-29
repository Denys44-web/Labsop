const contract = (func, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const val = args[i];
    const xp = types[i];
    const typeName = xp.name.toLowerCase();

    if (typeof val !== typeName) {
      throw new TypeError(`Argument type ${typeName} expected`);
    }
  }
  const res = func(...args);
  const expected = types[types.length - 1];
  const typeName = expected.name.toLowerCase();

  if (typeof res !== typeName) {
    throw new TypeError(`Res type ${typeName} expected`);
  }
  return res;
};
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res1 = concatStrings('Hello ', 'world!');
console.dir(res1);