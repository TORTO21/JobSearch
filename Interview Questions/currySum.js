function regSum() {
  var args = [].slice.call(arguments)
  var subTot = args.reduce((total, arg) => total + arg)
  return subTot
}

console.log(regSum(1,2))

function curryFn(numArgs, fn, ctx) {
  const argsArr = [];
  const _curry = (arg) => {
     argsArr.push(arg);
     if (argsArr.length === numArgs) {
        return fn.apply(ctx, argsArr);
     } else {
        return _curry
     }
  }
  return argsArr
}

function curry(func, arity = func.length) {
  return function (...args) {
    if (args.length >= arity) {
      return func(...args);
    } else {
      return curry(func.bind(this, ...args), arity - args.length);
    }
  };
}

// const currySum = curry((a, b, c, d) => a + b + c + d);
const currySum = curry((...args) => {
  let total = 0
  for (i = 0, n = args.length; i < n; i++) {
    total += args[i]
  }
  return total
});

// const sum = curry(() => {
//   var args = [].slice.call(arguments)
//   return args.reduce((total, arg) => total + arg)
// })

// console.log(sum(1,2,3,4))

// console.log(currySum(2, 3)(4));
// console.log(currySum(2)(3, 4));
// console.log(currySum(2)(3)(4));
console.log(currySum(2, 3, 4));

function returnArgs(...args) {
  // var args = [].slice.call(arguments)
  console.log(args)
  console.log(arguments)
  return null
}

console.log(returnArgs(1,2,3))

