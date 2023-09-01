function canIterate(item) {
  if (item) {
    return typeof item[Symbol.iterator] === 'function';
  }
  return false;
}

// console.log(canIterate(new Map()))// true
// console.log(canIterate(new Set())) // true
// console.log(canIterate(null)) // false
// console.log(canIterate(10)) // false
// console.log(canIterate("Netology")) // true
canIterate(new Map());
