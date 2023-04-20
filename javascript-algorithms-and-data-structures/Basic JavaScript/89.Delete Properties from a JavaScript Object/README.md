# Delete Properties from a JavaScript Object

We can also delete properties from objects like this:

```javascript
delete ourDog.bark;
```

**Example:**

```javascript
const ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
  bark: "bow-wow",
};

delete ourDog.bark;
```

After the last line shown above, `ourDog` looks like:

```javascript
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

Delete the `tails` property from `myDog`. You may use either dot or bracket notation.

## Tests

You should delete the property `tails` from `myDog`.

You should not modify the `myDog` setup.
