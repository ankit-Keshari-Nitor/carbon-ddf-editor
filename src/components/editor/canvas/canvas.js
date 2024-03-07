import React from "react";

import FieldRenderer from "./field-renderer/field-renderer";

export default function Canvas({schema, removeFormField}) {
  return schema.map((formField) => {
    return <FieldRenderer field={formField} removeFormField={removeFormField} />;
  });
}
