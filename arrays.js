var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;

}


function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];

}


function removeElementFromBeginningOfArray(array){
  return array.splice(1);
}

function removeElementFromEndOfArray(array){
  return array.splice(0, array.length - 1);

}
