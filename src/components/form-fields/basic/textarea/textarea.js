import * as React from "react";
import { TextArea as CarbonTextArea } from "@carbon/react";
import { FORM_FIELD_TYPE } from "../../../constant";

const type = FORM_FIELD_TYPE.TEXT_AREA;

const TextArea = (props) => {
  const { field, errors, onChange, onBlur, onFocus, readonly, value, ...rest } =
    props;
  return <CarbonTextArea id={field.id} labelText={field.labelText} {...rest} />;
};

export default TextArea;

// Config of Text Area for Left Palette
TextArea.config = {
  type,
  label: "Text Area",
  group: "basic-input",
};
