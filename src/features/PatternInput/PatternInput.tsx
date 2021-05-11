import React from 'react';
import Row from './components/Row';
import './style.css';

const PatternInput = () => (
  // eslint-disable-next-line no-script-url
  <form className="pattern-input" action="javascript:void(0);">
    <ul className="pattern-input__list">
      <Row.Pattern />
      <Row.Button />
    </ul>
  </form>
);

export default PatternInput;