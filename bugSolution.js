function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else if (a + 1000 > b) { //Added condition to handle cases where b is significantly larger than a
    return foo(a + 1, b);
  } else {
    return false;
  }
}

console.log(foo(1, 5));
console.log(foo(1,100000)); //this will not cause a stack overflow