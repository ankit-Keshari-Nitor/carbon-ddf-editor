import React from 'react';
import './palette-entry.scss';
import { useDrag } from 'react-dnd';

const PaletteEntry = (props) => {
  const { type, label, icon, iconUrl, getPaletteIcon } = props;

  const [{ isDragging }, drag] = useDrag({
    type: 'form-field',
    item: { id: type + '-' + Date.now().toString(36), type, labelText: label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const Icon = getPaletteIcon({ icon, iconUrl, label, type });

  return (
    <div ref={drag} style={{ border: isDragging ? '1px solid red' : '1px solid green' }}>
      <button className="palette-field" data-field-type={type} title={`Create ${getIndefiniteArticle(type)} ${label} element`}>
        {Icon}
        <span className="palette-field-text">{label}</span>
      </button>
    </div>
  );
};

export default PaletteEntry;

// helpers ///////////
function getIndefiniteArticle(type) {
  if (['image'].includes(type)) {
    return 'an';
  }

  return 'a';
}
