import React from 'react';
import { Toggle } from '@carbon/react';

const ToggleButton = (props) => {
  const { id, labelText, value } = props;
  return (
    <ul key={id}>
      <li>
        <Toggle id={id} className="right-palette-form-item" labelText={labelText} defaultToggled={value} hideLabel />
      </li>
    </ul>
  );
};

export default ToggleButton;
