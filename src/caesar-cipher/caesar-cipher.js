function caesarCipher(message, shiftFactor) {
  const strToarr = message.split("");
  const LOWER_CASE_ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
  const UPPER_CASE_ALPHABET = LOWER_CASE_ALPHABET.map((val) =>
    val.toUpperCase(),
  );

  let arrMsg = [];

  strToarr.forEach((letter) => {
    const NOT_ALPHABET = !(
      LOWER_CASE_ALPHABET.includes(letter) ||
      UPPER_CASE_ALPHABET.includes(letter)
    );

    if (NOT_ALPHABET) {
      arrMsg.push(letter);
    }

    for (let i = 0; i < 26; i++) {
      if (letter === LOWER_CASE_ALPHABET[i]) {
        arrMsg.push(LOWER_CASE_ALPHABET[(i + shiftFactor) % 26]);
        break;
      } else if (letter === UPPER_CASE_ALPHABET[i]) {
        arrMsg.push(UPPER_CASE_ALPHABET[(i + shiftFactor) % 26]);
        break;
      }
    }
  });

  const mergeArrMessage = arrMsg.join("");

  return mergeArrMessage;
}
export { caesarCipher };
