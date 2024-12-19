const capitalize = (str) => {
  if (typeof str !== 'string') {
    throw new Error(
      'capitalize() function only receives strings as arguments!'
    );
  }

  return str.charAt(0).toUpperCase() + str.substring(1);
};

export default capitalize;
