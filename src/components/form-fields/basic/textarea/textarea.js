import * as React from "react";
import { TextArea as CarbonTextArea } from "@carbon/react";
import { FORM_FIELD_TYPE } from "../../../constant";

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
  editableProps: {
    Basic: [
      {
        propsName: "labelText",
        label: "Label",
        value: "Text Area",
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
