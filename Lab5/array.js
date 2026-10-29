const array = () => {
  const punch = [];
  const normal = (i) => punch[i];
  normal.push = (n) => punch.push(n);
  normal.pop = () => punch.pop();
  return normal;
};
const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop());