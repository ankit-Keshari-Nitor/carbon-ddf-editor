import { QX } from "@carbon/icons-react";
import React from "react";
import './code.scss'

export default function Code({ setShowSchema }) {
  return (
    <div className="code-container">
      <div className="heading-container">
        <span className="heading">Schema</span>
        <QX className="cross-icon" onClick={() => setShowSchema(false)} />
      </div>
      <div className="schema-container">
        <h1>code</h1>
      </div>
    </div>
  );
}
