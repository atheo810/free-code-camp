# Destructuring via rest elements

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to `Array.prototype.slice()`, as shown below:

```javascript
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

The console would display the values `1, 2` and `[3, 4, 5, 7]`.

Variables `a` and `b` take the first and second values from the array. After that, because of the rest syntax presence, `arr` gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest syntax to catch a subarray that leaves out the last element of the original array.

Use a destructuring assignment with the rest syntax to emulate the behavior of `Array.prototype.slice()`. `removeFirstTwo()` should return a sub-array of the original array `list` with the first two elements omitted.

```javascript
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

The console will display the values of `a`, `b`, and c as `1, 2, 5`.

Use destructuring assignment to swap the values of `a` and `b` so that `a` receives the value stored in `b`, and `b` receives the value stored in `a`.

## Tests

`removeFirstTwo([1, 2, 3, 4, 5])` should be `[3, 4, 5]`

`removeFirstTwo()` should not modify `list`

`Array.slice()` should not be used.

Destructuring on `list` should be used.
