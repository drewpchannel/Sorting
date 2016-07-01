var arrayToBeSorted = [6,10,9,11,13,2,7];

var sortedArray = [];
for (var i = 0; i < arrayToBeSorted.length; i++){
  for (var k = 0; k < arrayToBeSorted.length; k++){
    if (arrayToBeSorted[i] < arrayToBeSorted[k]) {
      var mem = arrayToBeSorted [i];
      arrayToBeSorted[i] = arrayToBeSorted[k];
      arrayToBeSorted[k] = mem;
      k = arrayToBeSorted.indexOf(i);
    }
  }
}

console.log(arrayToBeSorted);