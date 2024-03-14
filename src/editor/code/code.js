import React from 'react';
import { QX } from '@carbon/icons-react';
import './code.scss';

const Code = ({ setShowSchema }) => {
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
};

export default Code;
