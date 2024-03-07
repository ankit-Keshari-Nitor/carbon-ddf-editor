import * as React from "react";
import { TextInput as CarbonTextInput } from "@carbon/react";
import { FORM_FIELD_TYPE } from "../../../constant/form-field-type";

const type = FORM_FIELD_TYPE.TEXT_INPUT;

const TextInput = (props) => {
  const { field, errors, onChange, onBlur, onFocus, readonly, value, ...rest } =
    props;

  return <CarbonTextInput {...field} {...rest} />;
};

export default TextInput;

// Config of Text Input for Left Palette
TextInput.config = {
  type,
  label: "Text Input",
  group: "basic-input",
  editableProps: {
    Basic: [
      {
        propsName: "labelText",
        label: "Label",
        value: "Text Input",
      },
      {
        propsName: "helperText",
        label: "Help Text",
        value: "Help Text",
      },
    ],
    Condition: [
      {
        propsName: "disabled",
        label: "Disabled",
        value: false,
      },
      {
        propsName: "readOnly",
        label: "ReadOnly",
        value: false,
      },
    ],
  },
  advanceProps: {},
};
