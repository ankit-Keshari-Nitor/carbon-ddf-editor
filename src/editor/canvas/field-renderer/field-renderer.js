import React from 'react';
import './field-renderer.scss';
import { getFormField } from '../../../util/get-form-field';
import { TrashCan } from '@carbon/icons-react';

const FieldRenderer = (props) => {
  const { field, removeFormField } = props;
  const FormFieldComponent = getFormField(field.type);

  if (!FormFieldComponent) {
    throw new Error(`cannot render field <${field.type}>`);
  }

  return (
    <div className="element">
      <span className="delete-icon" onClick={() => removeFormField(field.id)}>
        <TrashCan />
      </span>
      <FormFieldComponent {...field} />
    </div>
  );
};

export default FieldRenderer;
