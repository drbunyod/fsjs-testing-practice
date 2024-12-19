import capitalize from './capitalize.js';

describe('capitalize', () => {
  test('Single word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  test('Two words', () => {
    expect(capitalize('hello, world!')).toBe('Hello, world!');
  });
  test('Single letter', () => {
    expect(capitalize('i')).toBe('I');
  });
  test('Empty string', () => {
    expect(capitalize('')).toBe('');
  });
  test('Empty arguments', () => {
    expect(() => capitalize()).toThrow();
  });
  test('Starts with number', () => {
    expect(capitalize('1hello')).toBe('1hello');
  });
  test('Not a string, boolean', () => {
    expect(() => capitalize(true)).toThrow();
  });
  test('Not a string, number', () => {
    expect(() => capitalize(123)).toThrow();
  });
  test('Not a string, array', () => {
    expect(() => capitalize([])).toThrow();
  });
});
