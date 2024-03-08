import React from "react";
import { Select as CarbonSelect, SelectItem } from "@carbon/react";
import { FORM_FIELD_TYPE, editableProps } from "../../../constant";

const type = FORM_FIELD_TYPE.SELECT;

const Select = (props) => {
  const { field, ...rest } = props;

  return (
    <CarbonSelect id={field.id} labelText={field.labelText} {...rest}>
      <SelectItem text={field.text} value={field.value} />
    </CarbonSelect>
  );
};

export default Select;

// Config of Accordion for Left Palette & Right Palette
Select.config = {
  type,
  label: "Select",
  group: "selection",
  editableProps: editableProps,
  advanceProps: {},
};
