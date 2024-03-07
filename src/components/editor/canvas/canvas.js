import React from "react";

import FieldRenderer from "./field-renderer/field-renderer";

export default function Canvas({ schema, removeFormField, selectedField }) {
  return schema.map((formField) => {
    return (
      <div onClick={() => selectedField(formField)}>
        <FieldRenderer field={formField} removeFormField={removeFormField} />
      </div>
    );
  });
}
