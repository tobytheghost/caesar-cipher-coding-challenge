import { createDecryptFunction, createEncryptFunction } from "./cipher";

describe("encrypt", () => {
  it("should encrypt a string", () => {
    const encrypt = createEncryptFunction(1);
    const encrypted = encrypt("A");
    expect(encrypted).toBe("B");
  });

  it("should keep the case of the string", () => {
    const encrypt = createEncryptFunction(1);
    const encrypted = encrypt("Aa");
    expect(encrypted).toBe("Bb");
  });

  it("should keep the punctuation of the string", () => {
    const encrypt = createEncryptFunction(1);
    const encrypted = encrypt("a!");
    expect(encrypted).toBe("b!");
  });

  it("should keep the spaces of the string", () => {
    const encrypt = createEncryptFunction(1);
    const encrypted = encrypt("a b");
    expect(encrypted).toBe("b c");
  });

  it("should keep the numbers of the string", () => {
    const encrypt = createEncryptFunction(1);
    const encrypted = encrypt("a1");
    expect(encrypted).toBe("b1");
  });

  it("should wrap around the alphabet", () => {
    const encrypt = createEncryptFunction(1);
    const encrypted = encrypt("z");
    expect(encrypted).toBe("a");
  });

  it("should accept a negative shift", () => {
    const encrypt = createEncryptFunction(-1);
    const encrypted = encrypt("a");
    expect(encrypted).toBe("z");
  });

  it("should accept a shift greater than 26", () => {
	const encrypt = createEncryptFunction(27);
	const encrypted = encrypt("a");
	expect(encrypted).toBe("b");
  });

  it("should keep looping around", () => {
	const encrypt = createEncryptFunction((26 * 10) + 1);
	const encrypted = encrypt("a");
	expect(encrypted).toBe("b");
  });
});

describe("decrypt", () => {
  it("should decrypt a string", () => {
    const decrypt = createDecryptFunction(1);
    const decrypted = decrypt("B");
    expect(decrypted).toBe("A");
  });

  it("should keep the case of the string", () => {
    const decrypt = createDecryptFunction(1);
    const decrypted = decrypt("Bb");
    expect(decrypted).toBe("Aa");
  });

  it("should keep the punctuation of the string", () => {
    const decrypt = createDecryptFunction(1);
    const decrypted = decrypt("b!");
    expect(decrypted).toBe("a!");
  });

  it("should keep the spaces of the string", () => {
    const decrypt = createDecryptFunction(1);
    const decrypted = decrypt("b c");
    expect(decrypted).toBe("a b");
  });

  it("should keep the numbers of the string", () => {
    const decrypt = createDecryptFunction(1);
    const decrypted = decrypt("b1");
    expect(decrypted).toBe("a1");
  });

  it("should wrap around the alphabet", () => {
    const decrypt = createDecryptFunction(1);
    const decrypted = decrypt("a");
    expect(decrypted).toBe("z");
  });

  it("should accept a negative shift", () => {
    const decrypt = createDecryptFunction(-1);
    const decrypted = decrypt("z");
    expect(decrypted).toBe("a");
  });

  it("should accept a shift greater than 26", () => {
	const decrypt = createDecryptFunction(27);
	const decrypted = decrypt("b");
	expect(decrypted).toBe("a");
  });

  it("should keep looping around", () => {
	const decrypt = createDecryptFunction((26 * 10) + 1);
	const decrypted = decrypt("b");
	expect(decrypted).toBe("a");
  });
});
