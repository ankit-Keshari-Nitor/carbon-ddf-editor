import { render, screen } from "@testing-library/react";
import { FORM_FIELD_TYPE } from "../../../constant";
import Datepicker from "../datepicker/datepicker";

describe("Datepicker Component", () => {
  it("Datepicker testCase", () => {
    const field = {
      id: "test-datepicker",
      type: FORM_FIELD_TYPE.DATEPICKER,
      labelText: "Datepicker Test",
    };
    render(<Datepicker field={field} />);
    const checkDatepickerLabel = screen.getByText("Datepicker Test");
    expect(checkDatepickerLabel).toBeInTheDocument();
  });
});
