module.exports = (success, failure) =>
  (err, ...result) => err ? failure(err) : success(...result);
