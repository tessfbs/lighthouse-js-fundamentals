function range(start,end,step){
  let array = [];
  array.push(start);
  for(let i = 1; i <= (end - start) / Math.abs(step);  i++){
    array [i] = array[i - 1] + step;
  }
  return array;
}

console.log(range());
