import React from "react";

import FieldRenderer from "./field-renderer/field-renderer";

export default function Canvas({ schema, removeFormField, selectedField }) {
  return schema.map((formField) => {
    return (
      <div>
        <FieldRenderer
          field={formField}
          removeFormField={removeFormField}
          selectedField={selectedField}
        />
      </div>
    );
  });
}
