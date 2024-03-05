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

  const isActive = canDrop && isOver;
  let backgroundColor = "hsl(225deg 23.94% 94.34%)";
  if (isActive) {
    backgroundColor = "rgb(187 204 247)";
  } else if (canDrop) {
    backgroundColor = "rgb(203 209 223)";
  }

  return (
    <Tabs>
      <TabList aria-label="List of tabs" activation="manual">
        <Tab>Edit</Tab>
        <Tab>PreView</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Grid className="editor-container">
            <Column lg={4} className="palette-container">
              <LeftPalette />
            </Column>
            <Column lg={8}>
              <div
                ref={drop}
                style={{ height: "100%", backgroundColor }}
                className="canvas-container"
              >
                <Canvas schema={schema} />
              </div>
            </Column>
            <Column lg={4} className="right-container">
              <RightPalette />
            </Column>
          </Grid>
        </TabPanel>
        <TabPanel>PreView</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
