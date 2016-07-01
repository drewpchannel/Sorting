var arrayToBeSorted = [6,10,9,3,6,13,3,2,1,6];
var sortedArray = [];
for (var i = 0; i < arrayToBeSorted.length; i++){
  var count = 0;
  var dupes = 0;
  for (var k = 0; k < arrayToBeSorted.length; k++){
    if (arrayToBeSorted[i] > arrayToBeSorted[k]){
      count = 1 + count;
    }
    if (arrayToBeSorted[i] === arrayToBeSorted[k] && i !== k){
      if (i < k){
        dupes = 1 + dupes;
      }
    }
  }
  sortedArray[count + dupes] = arrayToBeSorted[i];
}
console.log(sortedArray);