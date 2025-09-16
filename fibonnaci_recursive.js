

function fibonacci(n) {
  if (typeof n !== 'number' || isNaN(n) || !isFinite(n)) {
    return NaN;
  } 
  
  if (!Number.isInteger(n)) { 
    return NaN; 
  }   
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

module.exports = fibonacci;
  