function foo(a, b) {  return a + (b ?? 0); // Using nullish coalescing operator}
console.log(foo(1, undefined)); // Output: 1

function foo2(a, b) {
  if (b === undefined) {
    return a + 0; // Handling undefined explicitly
  } else {
    return a + b;
  }
}
console.log(foo2(1, undefined)); // Output: 1