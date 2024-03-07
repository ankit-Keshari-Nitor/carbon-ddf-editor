import React from "react";
import {
  RadioButton as CarbonRadioButton,
  RadioButtonGroup,
} from "@carbon/react";
import { FORM_FIELD_TYPE } from "../../../constant/form-field-type";

const type = FORM_FIELD_TYPE.RADIO;

const RadioButton = (props) => {
  const { field, ...rest } = props;

  return (
    <RadioButtonGroup
      legendText={field.legendText}
      name={field.legendName}
      {...rest}
    >
      <CarbonRadioButton
        id={field.id}
        labelText={field.labelText}
        value={field.value}
      />
    </RadioButtonGroup>
  );
};

export default RadioButton;

RadioButton.config = {
  type,
  label: "Radio Group",
  group: "selection",
};
