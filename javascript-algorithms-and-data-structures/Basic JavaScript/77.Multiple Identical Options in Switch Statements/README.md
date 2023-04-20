# Multiple Identical Options in Switch Statements

If the `break` statement is omitted from a `switch` statement's `case`, the following `case` statement(s) are executed until a `break` is encountered. If you have multiple inputs with the same output, you can represent them in a `switch` statement like this:

```javascript
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

Cases for 1, 2, and 3 will all produce the same result.

Write a switch statement to set `answer` for the following ranges:
`1-3` - `Low`
`4-6` - `Mid`
`7-9` - `High`

**Note:** You will need to have a case statement for each number in the range.

## Tests

`sequentialSizes(1)` should return the string `Low`

`sequentialSizes(2)` should return the string `Low`

`sequentialSizes(3)` should return the string `Low`

`sequentialSizes(4)` should return the string `Mid`

`sequentialSizes(5)` should return the string `Mid`

`sequentialSizes(6)` should return the string `Mid`

`sequentialSizes(7)` should return the string `High`

`sequentialSizes(8)` should return the string `High`

`sequentialSizes(9)` should return the string `High`

You should not use any `if` or `else` statements

You should have nine `case` statements
