# Match All Non-Numbers

The last challenge showed how to search for digits using the shortcut `\d` with a lowercase `d`. You can also search for non-digits using a similar shortcut that uses an uppercase `D` instead.

The shortcut to look for non-digit characters is `\D`. This is equal to the character class `[^0-9]`, which looks for a single character that is not a number between zero and nine.

Use the shorthand character class for non-digits `\D` to count how many non-digits are in movie titles.

## Tests

Your regex should use the shortcut character to match non-digit characters

Your regex should use the global flag.

Your regex should find no non-digits in the string `9`.

Your regex should find 6 non-digits in the string `Catch 22`.

Your regex should find 11 non-digits in the string `101 Dalmatians`.

Your regex should find 15 non-digits in the string `One, Two, Three`.

Your regex should find 12 non-digits in the string `21 Jump Street`.

Your regex should find 17 non-digits in the string `2001: A Space Odyssey`.
