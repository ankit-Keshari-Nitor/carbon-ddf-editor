import React from "react";
import { Button as CarbonButton } from "@carbon/react";
import "./button.scss";
import { FORM_FIELD_TYPE, editableProps } from "../../../constant";

const type = FORM_FIELD_TYPE.BUTTON;

const Button = (props) => {
  const { field, ...rest } = props;

  return (
    <CarbonButton {...field} {...rest}>
      {field.labelText}
    </CarbonButton>
  );
};

export default Button;

// Config of Button for Left Palette & Right Palette
Button.config = {
  type,
  label: "Button",
  group: "action",
  editableProps: editableProps,
  advanceProps: [],
};
