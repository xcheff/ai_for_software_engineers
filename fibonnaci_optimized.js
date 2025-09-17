
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
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

module.exports = fibonacci;
