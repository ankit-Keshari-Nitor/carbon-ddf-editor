import React from "react";
import "./editor.scss";

import LeftPalette from "./left-palette";
import Canvas from "./canvas";
import RightPalette from "./right-palette";
import { useDrop } from "react-dnd";
import TopNav from "./top-nav";
import { getFormField } from "../util/get-form-field";

const Editor = () => {
  const [schema, setSchema] = React.useState([]);
  const [selectedFiledProps, setSelectedFiledProps] = React.useState();
  const [valueTracker, setValueTracker] = React.useState(false);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "form-field",
    drop: (item) => setSchema((schema) => [...schema, item]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  // Logic to add background color
  const isActive = canDrop && isOver;
  let backgroundColor = "#ffffff";
  if (isActive) {
    backgroundColor = "rgb(187 204 247)";
  } else if (canDrop) {
    backgroundColor = "rgb(203 209 223)";
  }

  // Function to remove the form field from canvas
  const removeFormFieldFromCanvas = (id) => {
    setSchema((current) =>
      current.filter((item) => {
        return item.id !== id;
      })
    );
    setSelectedFiledProps({});
  };

  const selectedField = (filedProps) => {
    let filedTypeConfig = getFormField(filedProps.type).config;
    const fieldData = schema.filter(
      (fieldItem) => fieldItem.id === filedProps.id
    )[0];
    filedTypeConfig?.editableProps?.Basic.map((baiscEditPops) => {
      if (fieldData[baiscEditPops.propsName]) {
        baiscEditPops.value = fieldData[baiscEditPops?.propsName];
      } else {
        baiscEditPops.value = "";
      }
    });
    setSelectedFiledProps({ ...filedTypeConfig, id: filedProps.id });
  };

  const handleSchemaChanges = (idx, key, propsName, newValue) => {
    let objCopy = selectedFiledProps;
    objCopy.editableProps[key].map((config) => {
      if (config.propsName === propsName) {
        config.value = newValue;
      }
    });
    setSelectedFiledProps(objCopy);

    schema.map((schemaItem) => {
      if (schemaItem.id === idx) {
        return (schemaItem[propsName] = newValue);
      }
    });
    setValueTracker(!valueTracker);
  };

  return (
    <div className="editor-container">
      <TopNav />
      <div className="layout-container">
        <div className="palette-container">
          <LeftPalette />
        </div>
        <div
          ref={drop}
          style={{ backgroundColor }}
          className="canvas-container"
        >
          <Canvas
            schema={schema}
            removeFormField={removeFormFieldFromCanvas}
            selectedField={selectedField}
          />
        </div>
        <div className="right-container">
          <RightPalette
            selectedFiledProps={selectedFiledProps}
            handleSchemaChanges={handleSchemaChanges}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
