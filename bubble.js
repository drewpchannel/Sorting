var arrayToBeSorted = [6,10,9,11,13,2,7];
var changeToStop;
do {
  changeToStop = false;
  for (var i = 0; i < arrayToBeSorted.length; i++) {
    if (arrayToBeSorted[i] > arrayToBeSorted[i+1]){
      var mem = arrayToBeSorted[i];
      arrayToBeSorted [i] = arrayToBeSorted[i+1];
      arrayToBeSorted[i+1] = mem;
      changeToStop = true;
    }
  }
} while (changeToStop);
console.log(arrayToBeSorted);