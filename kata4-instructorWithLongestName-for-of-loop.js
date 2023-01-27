const instructorWithLongestName = function(instructors) {
  let winnerLength = 0
  let winnerName = ""
  
  for(let instructor of instructors){
    if(instructor.name.length > winnerLength){
      winnerLength = instructor.name.length
      winnerName = instructor
  } 
}
return winnerName
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));