import * as React from "react";
import { Button as CarbonButton } from "@carbon/react";
import "./button.scss";
import { FORM_FIELD_TYPE } from "../../../constant/form-field-type";

const type = FORM_FIELD_TYPE.BUTTON;

const Button = (props) => {
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
    <CarbonButton id={field.id} {...rest}>
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
};
