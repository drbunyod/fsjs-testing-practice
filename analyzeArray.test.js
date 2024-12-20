import analyzeArray from './analyzeArray';

describe('analyzeArray', () => {
  test('Simple test', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test('Empty array', () => {
    expect(analyzeArray([])).toStrictEqual({
      average: null,
      min: null,
      max: null,
      length: 0,
    });
  });
  test('Non-numeric array', () => {
    expect(() => analyzeArray(['a', 'b', 'c'])).toThrow();
  });
  test('Mixed array', () => {
    expect(() => analyzeArray([1, 'a', true, null, 2])).toThrow();
  });
  test('Non-array argument', () => {
    expect(() => analyzeArray(12345)).toThrow();
  });
  test('Empty arguments', () => {
    expect(() => analyzeArray()).toThrow();
  });
});
