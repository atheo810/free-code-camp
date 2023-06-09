# Match Beginning String Patterns

Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (`^`) inside a character set to create a negated character set in the form `[^thingsThatWillNotBeMatched]`. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

```javascript
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

The first `test` call would return `true`, while the second would return `false`.

Use the caret character in a regex to find `Cal` only in the beginning of the string `rickyAndCal`.

```javascript
"";
"ABC";
"abcabc";
```

## Tests

Your regex should search for the string `Cal` with a capital letter.

Your regex should not use any flags.

Your regex should match the string `Cal` at the beginning of the string.

Your regex should not match the string `Cal` in the middle of a string.
