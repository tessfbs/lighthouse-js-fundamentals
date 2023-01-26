function ageCalculator (name,yearOfBirth,currentYear){
  let age = currentYear - yearOfBirth
  let message = name + " is " + age + " years old."
  return message
}

console.log(ageCalculator('Tess',1988,2023))