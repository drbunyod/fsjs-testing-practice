const analyzeArray = (arr) => {
  if (!Array.isArray(arr))
    throw new Error('analyzeArray() function only receives an array!');

  let sum = 0;
  for (const num of arr) {
    if (typeof num !== 'number')
      throw new Error('analyzeArray() function only receives a numeric array!');

    sum += num;
  }

  const average = arr.length ? sum / arr.length : null;
  const min = arr.length ? Math.min(...arr) : null;
  const max = arr.length ? Math.max(...arr) : null;
  const length = arr.length;
  return { average, min, max, length };
};

export default analyzeArray;
