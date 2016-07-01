var arrayToBeSorted = [6,16,1,5,10,9,4,11,13,22,2,7];

var sortedArray = [];
for (var i = 0; i < arrayToBeSorted.length; i++){
  for (var k = 0; k < arrayToBeSorted.length; k++){
    if (arrayToBeSorted[i] < arrayToBeSorted[k]) {
      var mem = arrayToBeSorted [i];
      arrayToBeSorted[i] = arrayToBeSorted[k];
      arrayToBeSorted[k] = mem;
      // k = arrayToBeSorted.indexOf(i);
    }
  }
}

console.log(arrayToBeSorted);