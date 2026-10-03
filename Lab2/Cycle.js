function range(start,end) {
 const array = [];
 for (let x = start; x <= end; x++) {
    array.push(x);
 }   
 return array;
}
const numbers = range(15, 30);
console.dir(numbers);




function rangeOdd(start, end) {
    const array = [];
    for(let x = start; x <= end; x++) {
        if(x % 2 !== 0 ) {
            array.push(x);
        }
    }
    return array;
}
const odddNum = rangeOdd(15, 30);
console.dir(odddNum);