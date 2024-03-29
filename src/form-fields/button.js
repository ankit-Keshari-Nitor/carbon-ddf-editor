import React from 'react';
import { Button as CarbonButton } from '@carbon/react';
import { FORM_FIELD_TYPE, editableProps } from '../constant';
import { ButtonCentered } from '@carbon/icons-react';

const type = FORM_FIELD_TYPE.BUTTON;

const Button = (props) => {
  return <CarbonButton {...props}>{props.labelText}</CarbonButton>;
};

export default Button;

// Config of Button for Left Palette & Right Palette
Button.config = {
  type,
  label: 'Button',
  group: 'action',
  icon: <ButtonCentered />,
  editableProps: {
    Basic: [...editableProps.Basic],
    Condition: [...editableProps.Condition]
  },
  advanceProps: []
};
