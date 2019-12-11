// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
	return () => console.log("hello")
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
function1();



function createFunctionPrinter(input) {
	return () => console.log(input)
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter('sample');
printSample();
const printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();  // => 1
willCounter();  // => 2
willCounter();  // => 3

jasCounter();   // => 1
willCounter();  // => 4



function addByX(x) {
	
  return (input) => input + x
}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1))

// now call addByTwo with an input of 2
console.log(addByTwo(2))

