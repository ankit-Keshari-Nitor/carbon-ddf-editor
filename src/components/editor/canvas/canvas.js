import React from "react";
import FieldRenderer from "./field-renderer/field-renderer";

const Canvas = ({ schema, removeFormField, selectedField }) => {
  return schema.map((formField) => {
    return (
      <div
        key={formField.id}
        onClick={() => {
          selectedField(formField);
        }}
      >
        <FieldRenderer field={formField} removeFormField={removeFormField} />
      </div>
    );
  });
};

export default Canvas;
