var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, addThis){
  return [addThis, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, addThis){
  array.unshift(addThis);
  return array;
}

function addElementToEndOfArray(array, addThis){
  return [...array, addThis];
}

function destructivelyAddElementToEndOfArray(array, addThis){
  array.push(addThis);
  return array;
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
