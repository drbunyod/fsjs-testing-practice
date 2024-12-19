import reverseString from './reverseString.js';

describe('reverseString', () => {
  test('Single word', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  test('Two words', () => {
    expect(reverseString('Hello, world!')).toBe('!dlrow ,olleH');
  });
  test('Single letter', () => {
    expect(reverseString('i')).toBe('i');
  });
  test('Empty string', () => {
    expect(reverseString('')).toBe('');
  });
  test('Empty arguments', () => {
    expect(() => reverseString()).toThrow();
  });
  test('Starts with number', () => {
    expect(reverseString('1hello')).toBe('olleh1');
  });
  test('Surrouned by spaces', () => {
    expect(reverseString(' this IS a test  ')).toBe('  tset a SI siht ');
  });
  test('Not a string, boolean', () => {
    expect(() => reverseString(true)).toThrow();
  });
  test('Not a string, number', () => {
    expect(() => reverseString(123)).toThrow();
  });
  test('Not a string, array', () => {
    expect(() => reverseString([])).toThrow();
  });
});
