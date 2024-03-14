import React from "react";
import { DatePicker as CarbonDatePicker, DatePickerInput } from "@carbon/react";
import {
  FORM_FIELD_TYPE,
  editableProps,
} from "../../../constant";
import Label from "../label/label";

const type = FORM_FIELD_TYPE.DATEPICKER;

const DatePicker = ({ field }) => {
  const { id, type, labelText, isRequired, ...rest } = field;

  return (
    <>
      <Label labelText={labelText} isRequired={isRequired} />
      <CarbonDatePicker id={id} datePickerType="single">
        <DatePickerInput
          id={id}
          type={type}
          labelText=""
          placeholder="mm/dd/yyyy"
          {...rest}
        />
      </CarbonDatePicker>
    </>
  );
};

export default DatePicker;

// Config of Accordion for Left Palette & Right Palette
DatePicker.config = {
  type,
  label: "DatePicker",
  group: "basic-input",
  editableProps: editableProps,
  advanceProps: [],
};
