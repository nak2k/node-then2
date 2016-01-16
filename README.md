# then2

Promise.then like callback generator.

## Example

Before

``` JavaScript
function foo(callback) {
  async1((err, result1) => {
    if (err) {
      return callback(err);
    }

    async2((err, result2) => {
      if (err) {
        return callback(err);
      }

      callback(null, result1, result2);
    });
  });
}
```

After

``` JavaScript
import then from 'then2';

function foo(callback) {
  async1(then(
    result1 =>
      async2(then(
        result2 =>
          callback(null, result1, result2),
        callback
      )),
    callback
  ));
}
```

## License

MIT
