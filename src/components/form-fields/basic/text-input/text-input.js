import * as React from "react";
import { TextInput as CarbonTextInput } from "@carbon/react";
import { FORM_FIELD_TYPE, editableProps } from "../../../constant";

const type = FORM_FIELD_TYPE.TEXT_INPUT;

const TextInput = (props) => {
  const { field, ...rest } = props;

  return <CarbonTextInput {...field} {...rest} />;
};

export default TextInput;

// Config of Accordion for Left Palette & Right Palette
TextInput.config = {
  type,
  label: "Text Input",
  group: "basic-input",
  editableProps: editableProps,
  advanceProps: {},
};
