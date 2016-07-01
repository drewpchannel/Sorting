'use strict'
var arrayToBeSorted = [6,10,9,11,13,2,7];
function quickSort (arr) {
  var pivot = arr.pop();
  var arrayLeftPile = [];
  var arrayRightPile = [];
  if (arr.length <= 1){
    return arr;
  }
  for (var i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) {
      arrayLeftPile.push(arr[i]);
    } else {
      arrayRightPile.push(arr[i]);
    }
  }
  return quickSort(arrayLeftPile).concat([pivot], quickSort(arrayRightPile));
}
console.log(quickSort(arrayToBeSorted));