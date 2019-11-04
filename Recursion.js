//1. Counting Sheep

function sheepC(num) {
  var n = parseInt(num);
  console.log(n);
  if (n === 0) {
    console.log("All sheep jumped over the fence");
  } else {
    console.log(`${n}: Another sheep jumps over the fence`);
    sheepC(n - 1);
  }
}

console.log(sheepC(10));

//2. Power Calculator

function powerCalculator(x, y) {
  if (x < 0 || y < 0) return "exponent should be >= 0";
  if (y === 1) return x;
  return x * powerCalculator(x, y - 1);
}

console.log(powerCalculator(10, 2));

//3. Reverse String

var tick = 0
function reverseString(str){
  tick++
  if (str.length < 2) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("depressed"))

//4. 
let ticks = 0

function triangle(n) {
ticks++
if (n < 2){ 
 console.log(ticks)
 return n;
}
return n + triangle(n - 1);
}
triangle(10)

//5. 

var tick = 0

function split(str, sep) {
  tick++
  var idx = str.indexOf(sep);
  if (idx == -1) {
    console.log(tick)
    return [str];
  }
  console.log( [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep)) ); 
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep));
}

//6. Fibonacci

function fib(n) {
  if (n <= 0) {
    return 0
  }  
  if (n <= 1) {
    return 1
  }
  return (n + fib(n-1) + fib(n-2))
}

//7. Factorial

function fact(n) {
  if (n <= 0) {
    return 0
  }
  if (n <= 1) {
    return 1
  }
  return (n * fact(n-1))
}

//8. The Maze
//Nope, I can't do that. Surely, y'all must be joking

//9. See above

//10. 