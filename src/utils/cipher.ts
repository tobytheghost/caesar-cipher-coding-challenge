// Types
// -----
type LetterShiftFunction = (index: number, shift: number) => number;

// Constants
// ---------
const LETTERS = 26; // Number of letters in the alphabet
const UPPERCASE_START = 65; // ASCII code for 'A'
const LOWERCASE_START = 97; // ASCII code for 'a'

// Utils
// -----
const createReplaceFunction = (shiftedAlphabet: string[]) => {
  return (text: string) => {
    return text.replace(/[a-z]/gi, (char) => {
      const charCode = char.charCodeAt(0);
      const isLowerCase = charCode >= LOWERCASE_START;
      const index = isLowerCase
        ? charCode - LOWERCASE_START
        : charCode - UPPERCASE_START;
      const newChar = shiftedAlphabet[index] || char;
      return isLowerCase ? newChar.toLowerCase() : newChar;
    });
  };
};

const getEncryptedCharCode: LetterShiftFunction = (
  index: number,
  shift: number
) => {
  // get modulo of index of shifted letter and offset by UPPERCASE_START
  // to get the shifted letter char code
  return ((index + shift + LETTERS) % LETTERS) + UPPERCASE_START;
};

const getDecryptedCharCode: LetterShiftFunction = (
  index: number,
  shift: number
) => {
  // get modulo of index of negatively shifted letter and offset by UPPERCASE_START
  // to get the shifted letter char code
  return ((index - shift + LETTERS) % LETTERS) + UPPERCASE_START;
};

const createShiftedAlphabet = (
  shift: number,
  letterShiftFunction: LetterShiftFunction
) => {
  return [...Array(LETTERS).keys()].map((index) =>
    String.fromCharCode(letterShiftFunction(index, shift))
  );
};

// Functions
// ---------
export const createEncryptFunction = (shift: number) => {
  const shiftedAlphabet = createShiftedAlphabet(shift, getEncryptedCharCode);
  const encryptFunction = createReplaceFunction(shiftedAlphabet);
  return encryptFunction;
};

// Created decrypt function but not used in the app
export const createDecryptFunction = (shift: number) => {
  const shiftedAlphabet = createShiftedAlphabet(shift, getDecryptedCharCode)
  const decryptFunction = createReplaceFunction(shiftedAlphabet);
  return decryptFunction;
};
