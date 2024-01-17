import { act, fireEvent, render } from "@testing-library/react";

import Form from "./Form";

const setup = () => {
  const utils = render(<Form />);
  const shift = utils.getByLabelText("shift") as HTMLInputElement;
  const input = utils.getByLabelText("input") as HTMLTextAreaElement;
  const output = utils.getByLabelText("output") as HTMLTextAreaElement;
  return {
    shift,
    input,
    output,
    ...utils,
  };
};

describe("Form", () => {
  it("Elements should all defined", () => {
    const { shift, input, output } = setup();

    expect(shift).toBeDefined();
    expect(input).toBeDefined();
    expect(output).toBeDefined();
  });

  it("should have a default shift value of 13", () => {
    const { shift } = setup();

    expect(shift.value).toBe("13");
  });

  it("should have a default input value of empty string", () => {
    const { input } = setup();

    expect(input.value).toBe("");
  });

  it("should have a default output value of empty string", () => {
    const { output } = setup();

    expect(output.value).toBe("");
  });

  it("should update the output value when the input value changes", () => {
    const { input, output } = setup();

    act(() => {
      fireEvent.change(input, { target: { value: "Aa" } });
    });

    expect(output.value).toBe("Nn");
  });

  it("should update the output value when the shift value changes", () => {
	const { shift, input, output } = setup();

	act(() => {
	  fireEvent.change(input, { target: { value: "Aa" } });
	});

	expect(output.value).toBe("Nn");

	act(() => {
	  fireEvent.change(shift, { target: { value: "1" } });
	});

	expect(output.value).toBe("Bb");
  });
});
