import * as React from "react";
import { TextArea as CarbonTextArea } from "@carbon/react";
import { FORM_FIELD_TYPE, editableProps } from "../../../constant";
import Label from "../label/label";

const type = FORM_FIELD_TYPE.TEXT_AREA;

const TextArea = ({ field }) => {
  const { id, type, labelText, isRequired, ...rest } = field;

  return (
    <>
      <Label labelText={labelText} isRequired={isRequired} />
      <CarbonTextArea id={id} type={type} labelText="" {...rest} />
    </>
  );
};

export default TextArea;

// Config of Text Area for Left Palette
TextArea.config = {
  type,
  label: "Text Area",
  group: "basic-input",
  editableProps: editableProps,
  advanceProps: {},
};
