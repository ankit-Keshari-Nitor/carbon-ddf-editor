import React, { useEffect } from "react";
import "./editor.scss";

import LeftPalette from "./left-palette";
import Canvas from "./canvas";
import RightPalette from "./right-palette";
import { useDrop } from "react-dnd";
import TopNav from "./top-nav";
import { getFormField } from "../util/get-form-field";
import {Tabs, TabList, Tab, TabPanels, TabPanel } from "@carbon/react";

const Editor = () => {
  const [schema, setSchema] = React.useState([]);
  const [selectedFiledProps, setSelectedFiledProps] = React.useState();
  const [valueTracker, setValueTracker] = React.useState(false);
  const [fieldDeleted, setFieldDeleted] = React.useState(false);

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
    setFieldDeleted(!fieldDeleted);
  };

  useEffect(() => {
    if (fieldDeleted) {
      setSelectedFiledProps({});
      setFieldDeleted(!fieldDeleted);
    }
  }, [fieldDeleted]);

  const selectedField = (fieldProps) => {
    let filedTypeConfig = getFormField(fieldProps.type).config;
    const fieldData = schema.filter(
      (fieldItem) => fieldItem.id === fieldProps.id
    )[0];
    filedTypeConfig?.editableProps?.Basic.map((baiscEditPops) => {
      if (fieldData[baiscEditPops.propsName]) {
        return (baiscEditPops.value = fieldData[baiscEditPops?.propsName]);
      } else {
        return (baiscEditPops.value = "");
      }
    });
    filedTypeConfig?.editableProps?.Condition.map((conditionEditPops) => {
      if (fieldData[conditionEditPops.propsName]) {
        return (conditionEditPops.value =
          fieldData[conditionEditPops?.propsName]);
      } else {
        return (conditionEditPops.value = false);
      }
    });

    filedTypeConfig?.advanceProps.map((advancePops) => {
      if (fieldData[advancePops.propsName]) {
        return (advancePops.value = fieldData[advancePops?.propsName]);
      } else {
        return (advancePops.value = "");
      }
    });

    setSelectedFiledProps({ ...filedTypeConfig, id: fieldProps.id });
  };

  const handleSchemaChanges = (idx, key, propsName, newValue) => {
    let objCopy = selectedFiledProps;
    if (key !== "advance") {
      objCopy.editableProps[key].map((config) => {
        if (config.propsName === propsName) {
          config.value = newValue;
        }
      });
    } else {
      objCopy.advanceProps.map((config) => {
        if (config.propsName === propsName) {
          config.value = newValue;
        }
      });
    }
    setSelectedFiledProps(objCopy);

    schema.map((schemaItem) => {
      if (schemaItem.id === idx) {
        schemaItem[propsName] = newValue;
      }
    });
    setValueTracker(!valueTracker);
  };

  return (
    <div className="editor-container">
      <TopNav />
      <div className="layout-container">
        <div className="left-palette-container">
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
          <Tabs>
            <TabList aria-label="List of tabs" activation="manual">
              <Tab>DDF</Tab>
              <Tab>Custom</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>DDF...</TabPanel>
              <TabPanel>
              <RightPalette
                selectedFiledProps={selectedFiledProps}
                handleSchemaChanges={handleSchemaChanges}
              />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Editor;
