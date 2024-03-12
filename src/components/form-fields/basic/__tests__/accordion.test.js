import { render, screen } from "@testing-library/react";
import Accordion from "../accordion/accordion";
import { FORM_FIELD_TYPE } from "../../../constant";

describe("Accordion Component", () => {
  it("Accordion testCase", () => {
    const field = {
      id: "test-accordion",
      type: FORM_FIELD_TYPE.ACCORDION,
      labelText: "Accordion Test",
    };
    render(<Accordion field={field} />);
    const checkAccordion = screen.getByRole("button");
    const checkAccordionLabel = screen.getByText("Accordion Test");
    expect(checkAccordion).toBeInTheDocument();
    expect(checkAccordionLabel).toBeInTheDocument();
  });
});
