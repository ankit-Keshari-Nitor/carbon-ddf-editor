import { render, screen } from "@testing-library/react";
import TextArea from "../textarea/textarea";
import { FORM_FIELD_TYPE } from "../../../constant";

describe("TextArea Component", () => {
  it("TextArea testCase", () => {
    const field = {
      id: "test-text-area",
      type: FORM_FIELD_TYPE.TEXT_AREA,
      labelText: "Textarea Test",
    };

    render(<TextArea field={field} />);
    const checkTextArea = screen.getByRole("textbox");
    const checkTextAreaLabel = screen.getByText("Textarea Test");
    expect(checkTextArea).toBeInTheDocument();
    expect(checkTextAreaLabel).toBeInTheDocument();
  });
});
