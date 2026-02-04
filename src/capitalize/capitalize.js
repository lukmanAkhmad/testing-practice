function capitalize(str) {
  const fistLetter = str.substring(0, 1).toUpperCase();
  const restLetters = str.substring(1);
  const joinLetters = fistLetter.concat(restLetters);

  return joinLetters;
}

// module.exports = capitalize;
export { capitalize };
