import * as React from "react";
import { TextInput as CarbonTextInput } from "@carbon/react";
import { FORM_FIELD_TYPE } from "../../../constant/form-field-type";

const type = FORM_FIELD_TYPE.PASSWORD;

const Password = (props) => {
  const { field, ...rest } = props;

  return <CarbonTextInput.PasswordInput {...field} {...rest} />;
};

export default Password;

// Config of Text Input for Left Palette
Password.config = {
  type,
  label: "Password Input",
  group: "basic-input",
};
