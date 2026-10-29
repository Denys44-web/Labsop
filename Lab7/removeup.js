const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  }
};
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);