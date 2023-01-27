const urlEncode = function(text) {
  let newText = "";
  for(let i = 0; i < text.length; i++){
    if(text[i] == " " && i < text.length -1){
      newText=  newText + "%20"
    }else{
      newText = newText + text[i]
    }
  }
  return newText
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));