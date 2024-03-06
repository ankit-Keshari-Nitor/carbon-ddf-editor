import React from "react";
import "./editor.scss";

import {
  Column,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@carbon/react";

import LeftPalette from "./left-palette";
import Canvas from "./canvas";
import RightPalette from "./right-palette";
import { useDrop } from "react-dnd";

export default function Editor() {
  const [schema, setSchema] = React.useState([]);

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
  let backgroundColor = "hsl(225deg 23.94% 94.34%)";
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
  };

  return (
    <Grid className="editor-container">
      <Column lg={4} className="palette-container">
        <LeftPalette />
      </Column>
      <Column lg={8}>
        <div
          ref={drop}
          style={{ backgroundColor }}
          className="canvas-container"
        >
          <Canvas schema={schema} removeFormField={removeFormFieldFromCanvas} />
        </div>
      </Column>
      <Column lg={4} className="right-container">
        <RightPalette />
      </Column>
    </Grid>
  );
}
