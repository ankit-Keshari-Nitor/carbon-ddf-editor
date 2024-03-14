import React from 'react';
import { Link as CarbonLink } from '@carbon/react';
import { FORM_FIELD_TYPE, editableProps } from '../constant';

const type = FORM_FIELD_TYPE.LINK;

const Link = (props) => {
  const { field, ...rest } = props;

  return (
    <CarbonLink {...field} {...rest}>
      {field.labelText}
    </CarbonLink>
  );
};

export default Link;

// Config of Link for Left Palette & Right Palette
Link.config = {
  type,
  label: 'Link',
  group: 'basic-input',
  editableProps: {
    Basic: [...editableProps.Basic]
  },
  advanceProps: []
};
