var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, el){
 newArray = [...array, el]
 return array
}

function destructivelyAddElementToBeginningOfArray(array, el){
  array = [el...array, el]
 return array
  
}