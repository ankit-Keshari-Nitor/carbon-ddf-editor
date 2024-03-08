import * as React from "react";
import { DatePicker as CarbonDatePicker, DatePickerInput } from "@carbon/react";
import { FORM_FIELD_TYPE, editableProps } from "../../../constant";

const type = FORM_FIELD_TYPE.DATEPICKER;

const DatePicker = (props) => {
  const { field, ...rest } = props;

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

// Config of Accordion for Left Palette & Right Palette
DatePicker.config = {
  type,
  label: "DatePicker",
  group: "basic-input",
  editableProps: editableProps,
  advanceProps: {},
};
