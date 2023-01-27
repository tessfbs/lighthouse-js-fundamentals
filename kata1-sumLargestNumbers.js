function sumLargestNumbers (Arr){
  let sum
  for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
            var x = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = x;
       }
       sum = Arr[Arr.length-1] + Arr[Arr.length-2]
       console.log(sum)
       console.log(Arr)
  return sum
  
}

  console.log(sumLargestNumbers([10,4,34,6,92,2]))