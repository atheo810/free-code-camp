# Adding a Default Option in Switch Statements

In a `switch` statement you may not be able to specify all possible values as `case` statements. Instead, you can add the `default` statement which will be executed if no matching `case` statements are found. Think of it like the final `else` statement in an `if/else` chain.

A `default` statement should be the last case.

```javascript
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

Write a switch statement to set `answer` for the following conditions:
`a` - `apple`
`b` - `bird`
`c `- `cat`
`default` - `stuff`

## Tests

`switchOfStuff("a")` should return the string `apple`

`switchOfStuff("b")` should return the string `bird`

`switchOfStuff("c")` should return the string `cat`

`switchOfStuff("d")` should return the string `stuff`

`switchOfStuff(4)` should return the string `stuff`

You should not use any `if` or `else` statements

You should use a `default` statement

You should have at least 3 `break` statements
