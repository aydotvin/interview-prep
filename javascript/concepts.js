// Infinite currying:

function add(num) {
  let sum = num;
  function innerAdd(nextNum) {
    if (nextNum === undefined) {
      return sum;
    }
    sum += nextNum;
    return innerAdd;
  }
  return innerAdd;
}

console.log(add(1)(2)(3)(4)(5)());
