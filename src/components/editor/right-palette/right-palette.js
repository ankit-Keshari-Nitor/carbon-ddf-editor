import React, { useEffect } from "react";
import "./right-palette.scss";
import { Accordion, AccordionItem, Toggle, TextInput } from "@carbon/react";

export default function RightPalette({
  selectedFiledProps,
  handleSchemaChanges,
}) {
  const [editableProps, setEditableProps] = React.useState({});

  useEffect(() => {
    setEditableProps(selectedFiledProps?.editableProps);
  }, [selectedFiledProps]);

  return (
    <div className="right-palette-container">
      {/* Form Field Id */}
      <div className="palette-header">{selectedFiledProps?.id}</div>
      <Accordion className="custom-class">
        {editableProps &&
          Object.keys(editableProps).map((key, idx) => {
            return (
              <AccordionItem key={idx} title={key} open>
                {editableProps[key].map((item, idx) => {
                  return key === "Basic" ? (
                    <TextInput
                      key={idx}
                      id={String(idx)}
                      labelText={item.label}
                      value={item.value}
                      onChange={(e) =>
                        handleSchemaChanges(
                          selectedFiledProps?.id,
                          key,
                          item.propsName,
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    <ul key={idx}>
                      <li>
                        <Toggle
                          key={idx}
                          id={
                            "toggle-" +
                            String(idx) +
                            "-" +
                            selectedFiledProps?.id
                          }
                          labelA="Off"
                          labelB="On"
                          labelText={item.label}
                          defaultToggled={item.value}
                          toggled={item.value}
                          onClick={(e) =>
                            handleSchemaChanges(
                              selectedFiledProps?.id,
                              key,
                              item.propsName,
                              !item.value
                            )
                          }
                        />
                      </li>
                    </ul>
                  );
                })}
              </AccordionItem>
            );
          })}
      </Accordion>
    </div>
  );
}
