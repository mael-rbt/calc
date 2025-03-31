const { add, subtract, multiply, getHistory, clearHistory } = require('../../src/calculator');

describe('Calculator Logic', () => {
  beforeEach(() => {
    clearHistory(); // on vide l'historique avant chaque test
  });

  test('should add two numbers and store in history', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
    expect(getHistory()).toContain(5);
  });

  test('should subtract two numbers and store in history', () => {
    const result = subtract(5, 3);
    expect(result).toBe(2);
    expect(getHistory()).toContain(2);
  });

  test('should multiply two numbers and store in history', () => {
    const result = multiply(4, 3);
    expect(result).toBe(12);
    expect(getHistory()).toContain(12);
  });

  test('should clear history', () => {
    add(1, 1);
    clearHistory();
    expect(getHistory().length).toBe(0);
  });
});
