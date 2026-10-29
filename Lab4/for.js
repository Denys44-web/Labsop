const sum = (...args) => {
    let res = 0;
    for ( let i = 0; i < args.length; i += 1) {
        res += args [i];
    }
    return res;
};
console.log (sum ( 8, 10, -4));
console.log (sum ());