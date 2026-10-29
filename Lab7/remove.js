const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima'); 
removeElement(array, 'Berlin');
console.log(array);