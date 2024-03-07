import React, { useState } from "react";
import { Checkbox as CarbonCheckbox } from "@carbon/react";
import { FORM_FIELD_TYPE } from "../../../constant/form-field-type";

const type = FORM_FIELD_TYPE.CHECKBOX;

const Checkbox = (props) => {
  const { field, ...rest } = props;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <CarbonCheckbox
      checked={isChecked}
      onChange={(_, { checked }) => setIsChecked(checked)}
      {...field}
      {...rest}
    />
  );
};

export default Checkbox;

Checkbox.config = {
  type,
  label: "Checkbox",
  group: "selection",
};
