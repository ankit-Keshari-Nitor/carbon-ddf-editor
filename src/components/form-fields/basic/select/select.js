import React from "react";
import { Select as CarbonSelect, SelectItem } from "@carbon/react";
import { FORM_FIELD_TYPE } from "../../../constant/form-field-type";

const type = FORM_FIELD_TYPE.SELECT;

const Select = (props) => {
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
    <CarbonSelect id={field.id} labelText={field.labelText} {...rest}>
      <SelectItem text={field.text} value={field.value} />
    </CarbonSelect>
  );
};

export default Select;

Select.config = {
  type,
  label: "Select",
  group: "selection",
};
