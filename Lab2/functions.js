const average = (a, b) => (a + b)/2;
const square = x => x * x;
const cube = x => x * x * x;
function calculate() {
    const result = [];
    for (let n = 1; n <= 9; n++) {
        result.push(average(square(n), cube(n)));
    }
    return result;
}
console.dir(calculate());
