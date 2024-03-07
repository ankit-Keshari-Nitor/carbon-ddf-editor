import React from "react";
import "./editor.scss";

import LeftPalette from "./left-palette";
import Canvas from "./canvas";
import RightPalette from "./right-palette";
import { useDrop } from "react-dnd";
import TopNav from "./top-nav";

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
          <Canvas schema={schema} removeFormField={removeFormFieldFromCanvas} />
        </div>
        <div className="right-container">
          <RightPalette />
        </div>
      </div>
    </div>
  );
}
