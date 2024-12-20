const shiftChar = (char, shift) => {
  let charCode = char.charCodeAt();

  if (charCode >= 97 && charCode <= 122) {
    charCode += shift;
    if (charCode > 122) {
      charCode = 97 - 1 + charCode - 122;
    } else if (charCode < 97) {
      charCode = 122 + 1 - (97 - charCode);
    }
  } else if (charCode >= 65 && charCode <= 90) {
    charCode += shift;
    if (charCode > 90) {
      charCode = 65 - 1 + charCode - 90;
    } else if (charCode < 65) {
      charCode = 90 + 1 - (65 - charCode);
    }
  }

  return String.fromCharCode(charCode);
};

const caesarCipher = (str, shift = 0) => {
  if (typeof str !== 'string') throw new Error('str must be a string!');
  if (typeof shift !== 'number') throw new Error('shift must be a number!');

  let cipher = '';

  for (const char of str) {
    cipher += shiftChar(char, shift);
  }

  return cipher;
};

export default caesarCipher;
