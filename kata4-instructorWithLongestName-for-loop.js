const instructorWithLongestName = function (instructors) {
  let winner = 0;
  let nameOfWinner = "";
  for (let i = 0; i < instructors.length; ++i) {
    if (instructors[i].name.length > winner) {
      winner = instructors[i].name.length;
      nameOfWinner = instructors[i];
    }
  }
  return nameOfWinner;
};

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