import React from "react";
import { getFormField } from "../../../util/get-form-field";
import "./field-renderer.scss";
import { TrashCan } from "@carbon/icons-react";

export default function FieldRenderer(props) {
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
      <FormFieldComponent field={field} />
    </div>
  );
}
