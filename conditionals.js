const whichSchool  = function (age) {
  // Your code in here ...]
  age = 13
  if(age < 13){
    whichSchool = "Elementary School"
  }else if(age >= 13 && age <= 18){
    whichSchool = "Secondary School"
  }else{
    whichSchool = "Lighthouse Labs"
  }
  console.log(whichSchool)
}
