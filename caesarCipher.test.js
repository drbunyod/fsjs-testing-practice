import caesarCipher from './caesarCipher';

describe('caesarCipher', () => {
  test('Simple test 1', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
  });
  test('Simple test 2', () => {
    expect(caesarCipher('hello', 5)).toBe('mjqqt');
  });
  test('End of the alphabet', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });
  test('Negative shifting', () => {
    expect(caesarCipher('def', -3)).toBe('abc');
  });
  test('Beginning of the alphabet', () => {
    expect(caesarCipher('abc', -3)).toBe('xyz');
  });
  test('Beginning of the alphabet', () => {
    expect(caesarCipher('abc', -3)).toBe('xyz');
  });
  test('Case sensitive', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });
  test('Special characters', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
  test('No shift factor argument', () => {
    expect(caesarCipher('hello')).toBe('hello');
  });
  test('Non-string str argument', () => {
    expect(() => caesarCipher(123, 3)).toThrow('str must be a string!');
  });
  test('Non-numeric shift argument', () => {
    expect(() => caesarCipher('abc', true)).toThrow('shift must be a number!');
  });
  test('Empty arguments', () => {
    expect(() => caesarCipher()).toThrow();
  });
});
