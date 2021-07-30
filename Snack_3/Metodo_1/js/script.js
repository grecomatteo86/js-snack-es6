const numbersArray = [1,2,3,4,5,6,7,8,9,10];
const intervalledArray = arrayInterval (numbersArray,6,9);
console.log(intervalledArray);
// Function - arrayInterval
function arrayInterval (array,min,max) {
  const newArray = [];
  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }
  return newArray;
}
