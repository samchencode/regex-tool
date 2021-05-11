import React from 'react';
import './style.css';

const PatternInput = () => (
  // eslint-disable-next-line no-script-url
  <form className="pattern-input" action="javascript:void(0);">
    <ul className="pattern-input__list">
      <li className="pattern-input__row">
        <label htmlFor="pattern--1">ReGex Pattern 1</label>
        <div className="pattern-input__input-group">
          <input type="text" id="pattern--1" placeholder="/.*/g" />
          <button>Remove</button>
        </div>
      </li>
      <li className="pattern-input__row pattern-input__row--full">
        <button className="pattern-input__new">New</button>
      </li>
    </ul>
  </form>
);

export default PatternInput;