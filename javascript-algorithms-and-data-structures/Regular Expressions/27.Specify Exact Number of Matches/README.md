# Specify Exact Number of Matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

```javascript
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

In order, the three `test` calls would return `true`, `false`, and `true`.

Change the regex `haRegex` to match the word `Hazzah` only when it has four or more letter `z`'s.

## Tests

Your regex should use curly brackets.

Your regex should not match the string `Hazzah`

Your regex should not match the string `Hazzzah`

Your regex should match the string `Hazzzzah`

Your regex should match the string `Hazzzzzah`

Your regex should match the string `Hazzzzzzah`

Your regex should match the string `Hazzah` with 30 `z`'s in it.
