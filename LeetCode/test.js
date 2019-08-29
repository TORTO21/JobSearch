var store = [0, 1, 2, 3, 4];

var stored = store.reduce(function(pV, cV, cI){
  console.log("pv: ", pV);
  pV.push(cV);
  return pV; // *********  Important ******
}, []);

var stored = store.reduce((pV, cV) => {
  console.log("pv: ", pV);
  pV.push(cV);
  return pV; // *********  Important ******
}, []);

let num = 5

const arrayFromNum = (num) => (
  "hi"
)

console.log(arrayFromNum(5))