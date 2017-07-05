var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, i) {
  array.unshift(i)
  return array
}


function destructivelyAddElementToBeginningOfArray(array, i) {
  array.unshift(i)

  return array
}



function addElementToEndOfArray(array, i) {
  var a = array
  a.push(i)

  return a
}


function destructivelyAddElementToEndOfArray(array, i) {
  array.push(i)

  return array
}


function accessElementInArray(array, i) {
  return array[i]
}



function removeElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  var a = array
  return   a.slice(0, array.length - 1)

}
