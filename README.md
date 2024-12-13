# Unexpected NaN Result from Adding Undefined to Number in JavaScript

This repository demonstrates a common JavaScript error where adding a number to an undefined variable results in NaN (Not a Number).  The issue stems from JavaScript's loose typing and how the + operator handles undefined values.

## Bug

The `bug.js` file contains a function `foo` that adds two numbers. However, if the second argument is undefined, the result is NaN instead of the expected numerical result.

## Solution

The `bugSolution.js` file provides a corrected version of the function, demonstrating two ways to handle undefined values:

1. **Providing a default value:** Using the nullish coalescing operator (`??`) to provide a default value of 0 if the second argument is undefined.
2. **Explicitly checking for undefined:** Using an if statement to check for undefined values and handle them appropriately.

This example highlights the importance of handling undefined values carefully in JavaScript to avoid unexpected behavior and ensure robust code.