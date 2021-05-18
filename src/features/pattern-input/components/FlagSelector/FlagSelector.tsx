import React, { useState } from 'react';
import './style.css';

interface FlagSelectorProps {
  visible: boolean;
  flags: string[];
  onChangeFlags: (flags: string[]) => void;
}

const FLAGS = ['d', 'g', 'i', 'm', 's', 'u', 'y'];

const FlagSelector = ({ visible, flags, onChangeFlags }: FlagSelectorProps) => {
  const initialState = FLAGS.map((f) => flags.includes(f));

  const [selected, setSelected] = useState(initialState);

  const handleChange = (idx: number) => {
    const newState = selected.slice();
    newState[idx] = !newState[idx];
    setSelected(newState);
    const selectedFlags = FLAGS.filter((f, i) => newState[i]);
    onChangeFlags(selectedFlags);
  };

  const uniqueId = ('' + Math.random()).slice(2);

  return (
    <div
      className={[
        'flag-selector',
        visible ? 'flag-selector--visible' : '',
      ].join(' ')}
    >
      <ul className="flag-selector__list">
        {FLAGS.map((f, i) => (
          <li className="flag-selector__item" key={f}>
            <input
              type="checkbox"
              className="flag-selector__checkbox"
              id={'flag-selector__checkbox--' + f + uniqueId}
              checked={selected[i]}
              onClick={(e) => e.stopPropagation()}
              onChange={() => handleChange(i)}
            />
            <label
              htmlFor={'flag-selector__checkbox--' + f + uniqueId}
              className="flag-selector__label"
            >
              {f}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlagSelector;
