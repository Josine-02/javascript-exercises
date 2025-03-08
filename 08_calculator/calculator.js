const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
	total = a-b
  return total
};

const sum = function(array) {
  if(array.length == 0){return 0}
  if(array.length == 1){return array[0]}
  if(array.length>1){ return array.reduce((total, current)=>total +current, 0)}
  }
;

const multiply = function(array) {
  result = array.reduce((total, current) => total * current, 1)
  return result
};

// const power = function(array) {
//   result = array.reduce((total, current)=> Math.pow(total,current))
//   return result
// };

const power = function(a,b) {
  result = Math.pow(a,b)
  return result
};


const factorial = function(a) {
  if (a==0){return 1}
  var array= [];
  
  for (i = 1; i<=a; i++){
    array.push(i)
  }
  let result =array.reduce((total, current) => total * current
  , 1)
  return result
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
