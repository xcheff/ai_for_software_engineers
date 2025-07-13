const multiply = (...args) => {
  if (args.length === 0) return 1;
  return args.reduce((a, b) => a * b);
};

const validator = (fn) => {
  return function (...args) {
    const validArgs = args.every((arg) => Number.isInteger(arg));
    if (!validArgs) {
      throw new TypeError('Argument cannot be a non-integer');
    }
    return fn(...args);
  };
};

exports.multiplyIntegers = validator(multiply);
