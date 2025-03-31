let history = [];

function add(a, b) {
  const result = a + b;
  history.push(result);
  return result;
}

function subtract(a, b) {
  const result = a - b;
  history.push(result);
  return result;
}

function multiply(a, b) {
  const result = a * b;
  history.push(result);
  return result;
}

function getHistory() {
  return history;
}

function clearHistory() {
  history = [];
}

module.exports = { add, subtract, multiply, getHistory, clearHistory };
