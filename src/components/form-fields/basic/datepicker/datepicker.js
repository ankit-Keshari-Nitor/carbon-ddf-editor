import * as React from "react";
import { DatePicker as CarbonDatePicker, DatePickerInput } from "@carbon/react";
import { FORM_FIELD_TYPE } from "../../../constant/form-field-type";

const type = FORM_FIELD_TYPE.DATEPICKER;

const DatePicker = (props) => {
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
    <CarbonDatePicker id={field.id} datePickerType="single">
      <DatePickerInput
        id={field.id}
        placeholder="mm/dd/yyyy"
        labelText={field.labelText}
        {...rest}
      />
    </CarbonDatePicker>
  );
};

export default DatePicker;

// Config of Date Picker for Left Palette
DatePicker.config = {
  type,
  label: "DatePicker",
  group: "basic-input",
};
