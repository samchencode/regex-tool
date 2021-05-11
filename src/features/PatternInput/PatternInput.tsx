import React from 'react';
import { PatternRow, ButtonRow } from './components/Row';
import './style.css';

const PatternInput = () => (
  // eslint-disable-next-line no-script-url
  <form className="pattern-input" action="javascript:void(0);">
    <ul className="pattern-input__list">
      <PatternRow />
      <ButtonRow />
    </ul>
  </form>
);

export default PatternInput;