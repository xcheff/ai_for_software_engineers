function* fibonacciGenerator() {
  let a = 0, b = 1;
  yield a; // 0th Fibonacci
  yield b; // 1st Fibonacci
  while (true) {
    const next = a + b;
    yield next;
    a = b;
    b = next;
  }
}

function fibonacci(n) {
  if (typeof n !== 'number' || isNaN(n) || !isFinite(n)) {
    return NaN;
  }
  if (!Number.isInteger(n)) {
    return NaN;
  }
  if (n <= 1) {
    return n;
  }

  const gen = fibonacciGenerator();
  let result;
  for (let i = 0; i <= n; i++) {
    result = gen.next().value;
  }
  return result;
}

module.exports = fibonacci;
