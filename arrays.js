var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element){
 newArray = [element,...array]
 return array
}

function destructivelyAddElementToBeginningOfArray(array, el){
  array = [el,...array]
 return array
  
}