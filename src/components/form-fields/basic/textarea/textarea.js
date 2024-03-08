import * as React from "react";
import { TextArea as CarbonTextArea } from "@carbon/react";
import { FORM_FIELD_TYPE, editableProps } from "../../../constant";

const type = FORM_FIELD_TYPE.TEXT_AREA;

const TextArea = (props) => {
  const { field, ...rest } = props;
  return <CarbonTextArea {...field} {...rest} />;
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
