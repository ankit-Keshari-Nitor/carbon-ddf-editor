import { render, screen } from "@testing-library/react";
import Password from "../password/password";
import { FORM_FIELD_TYPE } from "../../../constant";

describe("Password Component", () => {
    it("Password testCase", () => {
    const field = {
      id: "test-password",
      type: FORM_FIELD_TYPE.PASSWORD,
      labelText: "Password Test",
    };

    render(<Password field={field} />);
    const checkPassword = screen.getByRole("button");
    const checkPasswordLabel = screen.getByText("Password Test");
    expect(checkPassword).toBeInTheDocument();
    expect(checkPasswordLabel).toBeInTheDocument();
  });
});
