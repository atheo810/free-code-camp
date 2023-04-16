# Escape Sequences in Strings

Quotes are not the only characters that can be escaped inside a string. Escape sequences allow you to use characters you may not otherwise be able to use in a string.

```javascript
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```
**Code	Output**

```
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed

```

Note that the backslash itself must be escaped in order to display as a backslash.

Assign the following three lines of text into the single variable `myStr` using escape sequences.

FirstLine
    \SecondLine
ThirdLine

You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

**Note:** The indentation for `SecondLine` is achieved with the tab escape character, not spaces.

## Tests

`myStr` should not contain any spaces

`myStr` should contain the strings `FirstLine`, `SecondLine` and `ThirdLine` (remember case sensitivity)

`FirstLine` should be followed by the newline character `\n`

`myStr` should contain a tab character `\t` which follows a newline character

`SecondLine` should be preceded by the backslash character `\`

There should be a newline character between `SecondLine` and `ThirdLine`

`myStr` should only contain characters shown in the instructions