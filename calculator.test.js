import calculator from './calculator';

describe('calculator', () => {
  test('Add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('Subtract two numbers', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });
  test('Multiply two numbers', () => {
    expect(calculator.multiply(3, -2)).toBe(-6);
  });
  test('Divide two numbers', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });
  test('Divide by zero', () => {
    expect(() => calculator.divide(1, 0)).toThrow('Zero division error');
  });
  test('Add decimal values', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
  test('Subtract decimal values', () => {
    expect(calculator.subtract(12.4, 6.9)).toBeCloseTo(5.5);
  });
  test('Non-numeric values', () => {
    expect(() => calculator.add(true, 'string')).toThrow();
  });
  test('Empty arguments', () => {
    expect(() => calculator.add()).toThrow();
  });
  test('Single argument', () => {
    expect(() => calculator.add(1)).toThrow();
  });
});
