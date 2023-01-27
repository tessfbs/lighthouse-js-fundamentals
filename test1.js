let urlEncode = function(text) {
  let newstring=""; 
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      newstring+= "%20";
    } else {
      newstring+= text[i];
    }
  }
return newstring;
};

console.log(urlEncode("blue is greener than purple for sure"));