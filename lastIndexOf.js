
function lastIndexOf(array,value){
  const length = array.length
  let index
  for(let i = 0; i < length ; i++){
    if(array[i] === value){
      index = i
      return index
  }
}
return -1
}
console.log(lastIndexOf([],3))