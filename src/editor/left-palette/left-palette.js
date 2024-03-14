import React, { useState, useRef, useCallback, useEffect } from 'react';
import { getFormFields } from './../../util/get-form-field';
import './left-palette.scss';
import PaletteEntry from './palette-entry';
import { Search, Close } from '@carbon/icons-react';
import { getIconByType } from '../../util/get-Icon-by-type';

export const PALETTE_GROUPS = [
  {
    label: 'Basic input',
    id: 'basic-input'
  },
  {
    label: 'Selection',
    id: 'selection'
  },
  {
    label: 'Panel',
    id: 'panel'
  },
  {
    label: 'Containers',
    id: 'container'
  },
  {
    label: 'Action',
    id: 'action'
  }
];

export default function LeftPalette() {
  const formFields = getFormFields();
  const initialPaletteEntries = React.useRef(collectPaletteEntries(formFields));
  const [paletteEntries, setPaletteEntries] = useState(initialPaletteEntries.current);
  const groups = groupEntries(paletteEntries);
  const [searchTerm, setSearchTerm] = useState('');

  const inputRef = useRef();

  const simplifyString = useCallback((str) => {
    return str.toLowerCase().replace(/\s+/g, '');
  }, []);

  const filter = useCallback(
    (entry) => {
      const simplifiedSearchTerm = simplifyString(searchTerm);

      if (!simplifiedSearchTerm) {
        return true;
      }

      const simplifiedEntryLabel = simplifyString(entry.label);
      const simplifiedEntryType = simplifyString(entry.type);

      return simplifiedEntryLabel.includes(simplifiedSearchTerm) || simplifiedEntryType.includes(simplifiedSearchTerm);
    },
    [searchTerm, simplifyString]
  );

  // filter entries on search change
  useEffect(() => {
    const entries = initialPaletteEntries.current.filter(filter);
    setPaletteEntries(entries);
  }, [filter, searchTerm]);

  const handleInput = useCallback(
    (event) => {
      setSearchTerm(() => event.target.value);
    },
    [setSearchTerm]
  );

  const handleClear = useCallback(
    (event) => {
      setSearchTerm('');
      inputRef.current.focus();
    },
    [inputRef, setSearchTerm]
  );

  return (
    <div className="palette">
      {/* Header */}
      <div className="palette-header">Components</div>
      {/* Search Box */}
      <div className="palette-search-container">
        <span className="palette-search-icon">
          <Search />
        </span>
        <input className="palette-search" ref={inputRef} type="text" placeholder="Search components" value={searchTerm} onInput={handleInput} />
        {searchTerm && (
          <button title="Clear content" className="palette-search-clear" onClick={handleClear}>
            <Close />
          </button>
        )}
      </div>
      {/* Form Fields */}
      <div className="palette-entries">
        {groups.map(({ label, entries, id }) => (
          <div className="palette-group" data-group-id={id} key={id}>
            <span className="palette-group-title">{label}</span>
            <div className="palette-fields">
              {entries.map((entry) => {
                return <PaletteEntry key={entry.label} getPaletteIcon={getPaletteIcon} {...entry} />;
              })}
            </div>
          </div>
        ))}
        {groups.length === 0 && <div className="palette-no-entries">No components found.</div>}
      </div>
    </div>
  );
}

// Returns a list of group entries.
function groupEntries(entries) {
  const groups = PALETTE_GROUPS.map((group) => {
    return {
      ...group,
      entries: []
    };
  });

  const getGroup = (id) => groups.find((group) => id === group.id);

  entries.forEach((entry) => {
    const { group } = entry;
    getGroup(group).entries.push(entry);
  });

  return groups.filter((g) => g.entries.length);
}

// Returns a list of palette entries.
export function collectPaletteEntries(formFields) {
  return Object.entries(formFields)
    .map(([type, formField]) => {
      const { config: fieldConfig } = formField;

      return {
        label: fieldConfig.label,
        type: type,
        group: fieldConfig.group,
        icon: fieldConfig.icon,
        iconUrl: fieldConfig.iconUrl
      };
    })
    .filter(({ type }) => type !== 'default');
}

// Returns the palette Icon.
export function getPaletteIcon(entry) {
  const { icon, iconUrl, type, label } = entry;
  let Icon;

  if (iconUrl) {
    Icon = () => <img className="field-icon-image" width={36} style={{ margin: 'auto' }} alt={label} src={iconUrl} />;
  } else {
    Icon = icon || getIconByType(type);
  }

  return Icon;
}
