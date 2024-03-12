import { render, screen } from "@testing-library/react";
import { FORM_FIELD_TYPE } from "../../../constant";
import Select from "../select/select";

describe("Select Component", () => {
  it("Select testCase", () => {
    const field = {
      id: "test-select",
      type: FORM_FIELD_TYPE.SELECT,
      labelText: "Select Test",
    };
    render(<Select field={field} />);
    const checkSelect = screen.getByRole("option");
    const checkSelectLabel = screen.getByText("Select Test");
    expect(checkSelect).toBeInTheDocument();
    expect(checkSelectLabel).toBeInTheDocument();
  });
});
