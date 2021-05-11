import React from 'react';

const Row = () => <li className="pattern-input__row"></li>;

Row.Pattern = () => (
  <li className="pattern-input__row">
    <label htmlFor="pattern--1">ReGex Pattern 1</label>
    <div className="pattern-input__input-group">
      <input type="text" id="pattern--1" placeholder="/.*/g" />
      <button>Remove</button>
    </div>
  </li>
);

Row.Button = () => (
  <li className="pattern-input__row pattern-input__row--full">
    <button className="pattern-input__new">New</button>
  </li>
);

export default Row;
