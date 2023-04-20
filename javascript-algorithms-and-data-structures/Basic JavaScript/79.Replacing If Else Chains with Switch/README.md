# Replacing If Else Chains with Switch

If you have many options to choose from, a `switch` statement can be easier to write than many chained `if`/`else if` statements. The following:

```javascript
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

can be replaced with:

```javascript
switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

Change the chained `if`/`else if` statements into a `switch` statement.

## Tests

You should not use any `else` statements anywhere in the editor

You should not use any `if` statements anywhere in the editor

You should have at least four `break` statements

`chainToSwitch("bob")` should return the string `Marley`

`chainToSwitch(42)` should return the string `The Answer`

`chainToSwitch(1)` should return the string `There is no #1`

`chainToSwitch(99)` should return the string `Missed me by this much!`

`chainToSwitch(7)` should return the string `Ate Nine`

`chainToSwitch("John")` should return `""` (empty string)

`chainToSwitch(156)` should return `""` (empty string)
