var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
	return [element].concat(array);
	// both ways are exactly the same
	
	// return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray(array, element){
	array.unshift(element);
	return array;
}

function addElementToEndOfArray(array, element){
	// return [...array, element]
	return array.concat([element]);
}

function destructivelyAddElementToEndOfArray(array, element){
	array.push(element);
	return array;
}

function accessElementInArray(array, index){
	return array[index];
}

function removeElementFromBeginningOfArray(array){
	return array.slice(1);
}

function removeElementFromEndOfArray(array){
	return array.slice(0, -1);
}