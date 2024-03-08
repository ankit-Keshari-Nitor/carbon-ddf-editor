import * as React from "react";
import { NumberInput as CarbonNumberInput } from "@carbon/react";
import { FORM_FIELD_TYPE, editableProps } from "../../../constant";

const type = FORM_FIELD_TYPE.NUMBER;

const NumberInput = (props) => {
  const { field, ...rest } = props;

  return <CarbonNumberInput label={field.labelText} id={field.id} {...rest} />;
};

export default NumberInput;

// Config of Accordion for Left Palette & Right Palette
NumberInput.config = {
  type,
  label: "Number",
  group: "basic-input",
  editableProps: editableProps,
  advanceProps: {},
};
