import { render, screen } from "@testing-library/react";
import { FORM_FIELD_TYPE } from "../../../constant";
import Number from "../number/number";

describe("Number Component", () => {
    it("Number testCase", () => {
    const field = {
      id: "test-number",
      type: FORM_FIELD_TYPE.NUMBER,
      labelText: "Number Test",
    };
    render(<Number field={field} />);
    const checkNumberLabel = screen.getByText("Number Test");
    expect(checkNumberLabel).toBeInTheDocument();
  });
});
