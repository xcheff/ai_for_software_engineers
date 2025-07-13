const { multiplyIntegers } = require('./multiply');

describe('multiplyIntegers', () => {
  // Basic multiplication
  test('multiplies two positive integers', () => {
    expect(multiplyIntegers(2, 3)).toBe(6);
  });

  test('multiplies multiple positive integers', () => {
    expect(multiplyIntegers(2, 3, 4)).toBe(24);
  });

  test('returns 1 when called with no arguments', () => {
    expect(multiplyIntegers()).toBe(1);
  });

  test('returns the value itself when called with one argument', () => {
    expect(multiplyIntegers(7)).toBe(7);
  });

  test('returns 0 if any argument is 0', () => {
    expect(multiplyIntegers(5, 0, 10)).toBe(0);
  });

  test('handles negative numbers', () => {
    expect(multiplyIntegers(-2, 3)).toBe(-6);
    expect(multiplyIntegers(-2, -3)).toBe(6);
    expect(multiplyIntegers(-2, -3, -1)).toBe(-6);
  });

  test('handles large numbers', () => {
    expect(multiplyIntegers(1_000_000, 2)).toBe(2_000_000);
  });

  // Type validation
  test('throws TypeError if any argument is a float', () => {
    expect(() => multiplyIntegers(2, 3.5)).toThrow(TypeError);
    expect(() => multiplyIntegers(3.5)).toThrow(TypeError);
  });

  test('throws TypeError if any argument is a string', () => {
    expect(() => multiplyIntegers(2, '3')).toThrow(TypeError);
    expect(() => multiplyIntegers('2')).toThrow(TypeError);
  });

  test('throws TypeError if any argument is an object', () => {
    expect(() => multiplyIntegers({})).toThrow(TypeError);
    expect(() => multiplyIntegers(2, {})).toThrow(TypeError);
  });

  test('throws TypeError if any argument is an array', () => {
    expect(() => multiplyIntegers([])).toThrow(TypeError);
    expect(() => multiplyIntegers(2, [3])).toThrow(TypeError);
  });

  test('throws TypeError if any argument is null', () => {
    expect(() => multiplyIntegers(null)).toThrow(TypeError);
    expect(() => multiplyIntegers(2, null)).toThrow(TypeError);
  });

  test('throws TypeError if any argument is undefined', () => {
    expect(() => multiplyIntegers(undefined)).toThrow(TypeError);
    expect(() => multiplyIntegers(2, undefined)).toThrow(TypeError);
  });

  test('throws TypeError if any argument is NaN', () => {
    expect(() => multiplyIntegers(NaN)).toThrow(TypeError);
    expect(() => multiplyIntegers(2, NaN)).toThrow(TypeError);
  });

  test('throws TypeError if any argument is Infinity or -Infinity', () => {
    expect(() => multiplyIntegers(Infinity)).toThrow(TypeError);
    expect(() => multiplyIntegers(-Infinity)).toThrow(TypeError);
    expect(() => multiplyIntegers(2, Infinity)).toThrow(TypeError);
  });
});
