const checkAir = function (samples, threshold) {
  const total= samples.length
  let dirty = []
  let clean = []
  for(let i = 0; i < samples.length; i++){
    if(samples[i] === "dirty"){
      dirty.push(samples[i])
    } else if (samples[i] === "clean"){
      clean.push(samples[i])
    }
    }
    
    if(dirty.length/total > threshold){
      return "Polluted"
    }else{
      return "Clean"
    }
  }


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))