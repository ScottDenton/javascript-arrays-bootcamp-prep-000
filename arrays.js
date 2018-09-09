var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, el){
 newArray = [el,...array]
 return array
}

function destructivelyAddElementToBeginningOfArray(array, el){
  array = [el,...array]
 return array
  
}