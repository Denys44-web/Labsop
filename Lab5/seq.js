const seq = (n) => (k) => {
    if (typeof k === 'number') return n (k);
    return seq ((x) => n(k(x)));
};
console.log (
    seq(x => x + 7)
   (x => x * 2)(5),
seq(x => x * 2)
   (x => x + 7)(5),
seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7));
   