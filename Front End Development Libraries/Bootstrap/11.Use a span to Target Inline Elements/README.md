# Use a span to Target Inline Elements

You can use spans to create inline elements. Remember when we used the `btn-block` class to make the button fill the entire row?

That illustrates the difference between an "inline" element and a "block" element.

By using the inline `span` element, you can put several elements on the same line, and even style different parts of the same line differently.

Using a `span` element, nest the word `love` inside the `p` element that currently has the text `Things cats love`. Then give the `span` the class `text-danger` to make the text red.

Here's how you would do this for the `p` element that has the text `Top 3 things cats hate`:

```html
<p>Top 3 things cats <span class="text-danger">hate:</span></p>
```

## Tests

Your `span` element should be inside your `p` element.

Your `span` element should have just the text `love`.

Your `span` element should have class `text-danger`.

Your `span` element should have a closing tag.
