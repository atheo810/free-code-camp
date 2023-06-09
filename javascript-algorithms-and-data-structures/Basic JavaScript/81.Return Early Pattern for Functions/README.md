# Return Early Pattern for Functions

When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.

**Example**

```javascript
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye");
}
myFun();
```

The above will display the string `Hello` in the console, and return the string `World`. The string `byebye` will never display in the console, because the function exits at the `return` statement.

Modify the function `abTest` so that if `a` or `b` are less than `0` the function will immediately exit with a value of `undefined`.

**Hint**
Remember that `undefined` is a keyword, not a string.

## Tests

`abTest(2, 2)` should return a number

`abTest(2, 2)` should return `8`

`abTest(-2, 2)` should return `undefined`

`abTest(2, -2)` should return `undefined`

`abTest(2, 8)` should return `18`

`abTest(3, 3)` should return `12`

`abTest(0, 0)` should return `0`
