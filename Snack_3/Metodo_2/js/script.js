const array = [1,2,3,4,5,6,7,8,9,10];
var newArray = filterArray(array,4,9);
console.log(newArray);
// Function - filterArray
function filterArray (myArray,min,max) {
  return myArray.filter((element,index) => min <= index && max >= index);
}
