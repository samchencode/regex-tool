import React, { useState } from 'react';
import { PatternRow, ButtonRow, PatternRowType } from './components/Row';
import './style.css';

interface PatternInputProps {
  type: PatternRowType;
}

const PatternInput = ({ type }: PatternInputProps) => {
  const [rows, setRows] = useState(1);

  const handleAddRow = () => setRows(rows + 1);
  const handleRemoveRow = () => setRows(rows - 1);

  return (
    // eslint-disable-next-line no-script-url
    <form className="pattern-input" action="javascript:void(0);">
      <ul className="pattern-input__list">
        {Array(rows)
          .fill(undefined)
          .map((v, k) => (
            <PatternRow key={k} type={type} onClickRemove={handleRemoveRow} />
          ))}
        <ButtonRow onClick={handleAddRow} />
      </ul>
    </form>
  );
};

export default PatternInput;
