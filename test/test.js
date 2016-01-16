const test = require('tape');
const then = require('..');

test('call 1st callback', t => {
  t.plan(1);

  then(
    result => {
      t.ok(result === 'test');
    },
    err => {
      t.fail('error');
    }
  )(null, 'test');
});

test('call 2nd callback', t => {
  t.plan(1);

  then(
    result => {
      t.fail('error');
    },
    err => {
      t.pass();
    }
  )(new Error());
});
