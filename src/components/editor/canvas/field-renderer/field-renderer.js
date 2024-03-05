import React from "react";
import { getFormField } from "../../../util/get-form-field";
import "./field-renderer.scss";

export default function FieldRenderer(props) {
  const { field } = props;
  const FormFieldComponent = getFormField(field.type);

  if (!FormFieldComponent) {
    throw new Error(`cannot render field <${field.type}>`);
  }

  return (
    <div className="element">
      <FormFieldComponent {...props} />
    </div>
  );
}
