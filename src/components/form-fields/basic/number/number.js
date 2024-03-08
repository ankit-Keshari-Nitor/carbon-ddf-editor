import React from "react";
import { NumberInput as CarbonNumberInput } from "@carbon/react";
import { FORM_FIELD_TYPE, editableProps } from "../../../constant";
import Label from "../label/label";

const type = FORM_FIELD_TYPE.NUMBER;

const NumberInput = ({ field }) => {
  const { id, type, labelText, isRequired, ...rest } = field;

  return (
    <>
      <Label labelText={labelText} isRequired={isRequired} />
      <CarbonNumberInput id={id} type={type} labelText="" {...rest} />
    </>
  );
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
