import * as React from "react";
import { TextInput as CarbonTextInput } from "@carbon/react";
import { FORM_FIELD_TYPE, editableProps } from "../../../constant";
import Label from "../label/label";

const type = FORM_FIELD_TYPE.TEXT_INPUT;

const TextInput = ({ field }) => {
  const { id, type, labelText, isRequired, ...rest } = field;

  return (
    <>
      <Label labelText={labelText} isRequired={isRequired} />
      <CarbonTextInput id={id} type={type} labelText="" {...rest} />
    </>
  );
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
