import React from 'react';
import { NumberInput as CarbonNumberInput } from '@carbon/react';
import { FORM_FIELD_TYPE, editableProps, minProps, maxProps, readOnly } from '../constant';
import Label from './label';

const type = FORM_FIELD_TYPE.NUMBER;

const NumberInput = ({ field }) => {
  const { id, type, labelText, isRequired, ...rest } = field;

  const handleChange = (e) => {
    console.log('Value', e.target.value);
  };

  return (
    <>
      <Label labelText={labelText} isRequired={isRequired} />
      <CarbonNumberInput id={id} type={type} label="" onChange={handleChange} {...rest} />
    </>
  );
};

export default NumberInput;

// Config of Accordion for Left Palette & Right Palette
NumberInput.config = {
  type,
  label: 'Number',
  group: 'basic-input',
  editableProps: {
    Basic: [...editableProps.Basic],
    Condition: [...editableProps.Condition, readOnly]
  },
  advanceProps: [minProps, maxProps]
};
