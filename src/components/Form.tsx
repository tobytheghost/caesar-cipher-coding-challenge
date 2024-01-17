import { useState } from "react";
import { createEncrypt } from "../utils/cipher";

// Hacky but it works for this exercise
const handleFormChange = (setOutput: (output: string) => void) => {
  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const shift = form.querySelector<HTMLInputElement>('[name="shift"]')?.value;
    const input =
      form.querySelector<HTMLTextAreaElement>('[name="input"]')?.value;
    if (!shift || !input) return setOutput("");
    const encrypt = createEncrypt(parseInt(shift.toString()));
    return setOutput(encrypt(input.toString()));
  };
};

const Form = () => {
  const [output, setOutput] = useState("");

  return (
    <div>
      <form onChange={handleFormChange(setOutput)}>
        <label>
          <p>Shift:</p>
          <input
            type="number"
            name="shift"
            aria-label="shift"
            defaultValue={13}
            required
          />
        </label>
        <label>
          <p>Input:</p>
          <textarea
            name="input"
            aria-label="input"
            placeholder="Type your input here"
            cols={30}
            rows={10}
            style={{ width: "100%", resize: "none" }} // Gross inline styles
            required
          />
        </label>
      </form>
      <label>
        <p>Output:</p>
        <textarea
          name="output"
          aria-label="output"
          placeholder="Your output will appear here"
          defaultValue={output}
          cols={30}
          rows={10}
          style={{ width: "100%", resize: "none" }} // Gross inline styles
          required
        />
      </label>
    </div>
  );
};

export default Form;
