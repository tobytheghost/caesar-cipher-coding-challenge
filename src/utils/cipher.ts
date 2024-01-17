const UPPERCASE_START = 65;
const LOWERCASE_START = 97;

export const createEncrypt = (shift: number) => {
  const shiftedAlphabet = [...Array(26)].map((_, i) =>
    String.fromCharCode(((i + shift + 26) % 26) + 65)
  );

  const encrypt = (text: string) => {
    return text.replace(/[a-z]/gi, (char) => {
      const charCode = char.charCodeAt(0);
      const isLowerCase = charCode >= LOWERCASE_START;
      const lowerCaseOffset = charCode - LOWERCASE_START;
      const upperCaseOffset = charCode - UPPERCASE_START;
      const index = isLowerCase ? lowerCaseOffset : upperCaseOffset;
      const newChar = shiftedAlphabet[index] || char;
      return isLowerCase ? newChar.toLowerCase() : newChar;
    });
  };

  return encrypt;
};

export const createDecrypt = (shift: number) => {
  const shiftedAlphabet = [...Array(26)].map((_, i) =>
    String.fromCharCode(((i - shift + 26) % 26) + 65)
  );

  const decrypt = (text: string) => {
    return text.replace(/[a-z]/gi, (char) => {
      const charCode = char.charCodeAt(0);
      const isLowerCase = charCode >= LOWERCASE_START;
      const lowerCaseOffset = charCode - LOWERCASE_START;
      const upperCaseOffset = charCode - UPPERCASE_START;
      const index = isLowerCase ? lowerCaseOffset : upperCaseOffset;
      const newChar = shiftedAlphabet[index] || char;
      return isLowerCase ? newChar.toLowerCase() : newChar;
    });
  };

  return decrypt;
};
