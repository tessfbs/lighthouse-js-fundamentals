function howManyHundreds(num){
  const boxes = num/100 - (num%100)/100
  return boxes
}
console.log(howManyHundreds(894))