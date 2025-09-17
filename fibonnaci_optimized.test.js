const fibonacci = require('./fibonnaci_optimized.js');
const { performance, PerformanceObserver } = require('perf_hooks');

describe('fibonacci', () => {
  test('returns 0 for n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('returns 1 for n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('returns 1 for n = 2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  test('returns 5 for n = 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('returns 55 for n = 10', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('returns 6765 for n = 20', () => {
    expect(fibonacci(20)).toBe(6765);
  });

  test('returns n for n <= 1 (negative numbers)', () => {
    expect(fibonacci(-1)).toBe(-1);
    expect(fibonacci(-10)).toBe(-10);
  });

  test('handles non-integer numbers', () => {
    expect(isNaN(fibonacci(2.5))).toBe(true);
  });

  test('returns NaN for non-numeric input', () => {
    expect(isNaN(fibonacci('a'))).toBe(true);
    expect(isNaN(fibonacci(null))).toBe(true);
    expect(isNaN(fibonacci(undefined))).toBe(true);
    expect(isNaN(fibonacci(NaN))).toBe(true);
    expect(isNaN(fibonacci(Infinity))).toBe(true);
    expect(isNaN(fibonacci({}))).toBe(true);
    expect(isNaN(fibonacci([]))).toBe(true);
  });

  test('throws or returns NaN for missing argument', () => {
    expect(isNaN(fibonacci())).toBe(true);
  });

  test('performance test for n = 20 percentile 99 less 10 ms', (done) => {
    let durations = [];
    const obs = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) durations.push(entry.duration);
    });
    obs.observe({ entryTypes: ['function'], buffered: true });
    const timedFibonacci = performance.timerify(fibonacci);
    for (let i = 0; i < 100; i++) {
      timedFibonacci(20);
    }

    setImmediate(() => {
      durations.sort((a, b) => a - b);

      function percentile(arr, p) {
        const idx = Math.floor((p / 100) * arr.length);
        return arr[idx];
      }
      expect(percentile(durations, 99)).toBeLessThan(10);

      obs.disconnect();
      done();
    });
  });
});
