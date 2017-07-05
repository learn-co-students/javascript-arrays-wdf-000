var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(ar,el) {
  return [el,...ar];
}

function destructivelyAddElementToBeginningOfArray(ar,el) {
  ar.unshift(el);
  return ar;
}

function addElementToEndOfArray(ar,el) {
  return [...ar,el];
}

function destructivelyAddElementToEndOfArray(ar,el) {
  ar.push(el);
  return ar;
}

function accessElementInArray(arr,ind) {
  return arr[ind];
}

function removeElementFromBeginningOfArray(ar) {
  ar.shift();
  return ar;
}

function removeElementFromEndOfArray(ar) {
  ar.pop();
  return ar;
}
