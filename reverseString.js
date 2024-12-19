const reverseString = (str) => {
  if (typeof str !== 'string') {
    throw new Error(
      'reverseString() function only receives strings as arguments!'
    );
  }

  return str.split('').reverse().join('');
};

export default reverseString;
