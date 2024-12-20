const calculator = {
  add: (a, b) => {
    if (calculator.isValidInput(a, b)) return a + b;
  },
  subtract: (a, b) => {
    if (calculator.isValidInput(a, b)) return a - b;
  },
  multiply: (a, b) => {
    if (calculator.isValidInput(a, b)) return a * b;
  },
  divide: (a, b) => {
    if (calculator.isValidInput(a, b)) {
      if (b === 0) throw new Error('Zero division error');
      return a / b;
    }
  },
  isValidInput: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('calculator only receives numeric values!');
    }
    return true;
  },
};

export default calculator;
