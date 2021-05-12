import React from 'react';
import { PatternRow, ButtonRow, PatternRowType } from './components/Row';
import './style.css';

interface PatternInputProps {
  type: PatternRowType;
}

const PatternInput = ({ type }: PatternInputProps) => (
  // eslint-disable-next-line no-script-url
  <form className="pattern-input" action="javascript:void(0);">
    <ul className="pattern-input__list">
      <PatternRow type={type} />
      <ButtonRow />
    </ul>
  </form>
);

export default PatternInput;