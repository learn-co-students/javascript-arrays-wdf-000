var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
	return [element, ...array]
	// array.unshift(element)
	// return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
	array.unshift(element)
	return array
	// array = [element, ...array]
	// return array
}

function addElementToEndOfArray(array, element){
	return [...array, element]
	// array.push(element)
	// return array
}

function destructivelyAddElementToEndOfArray(array, element){
	array.push(element)
	return array
}

function accessElementInArray(array, index){
	return array[index]
}

function removeElementFromBeginningOfArray(array){ 
	 array.shift()
	 return array 
}

function destructivelyRemoveElementFromEndOfArray(array) {
	return array.pop()
}

function removeElementFromEndOfArray(array) {
  	return array.slice(0, array.length - 1)

  	// var newArray = array;
 		// newArray.pop();
  	// return newArray;
}