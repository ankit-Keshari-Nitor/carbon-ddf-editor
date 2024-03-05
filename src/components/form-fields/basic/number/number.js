import * as React from "react";
import { NumberInput as CarbonNumberInput } from "@carbon/react";
import { FORM_FIELD_TYPE } from "../../../constant/form-field-type";

const type = FORM_FIELD_TYPE.NUMBER;

const NumberInput = (props) => {
  const {
    field,
    disabled,
    errors,
    onChange,
    onBlur,
    onFocus,
    readonly,
    value,
    ...rest
  } = props;

  return (
    <CarbonNumberInput
      id={field.id}
      label={field.labelText}
      {...rest}
    />
  );
};

export default NumberInput;

// Config of Number for Left Palette
NumberInput.config = {
  type,
  label: "Number",
  group: "basic-input",
};
