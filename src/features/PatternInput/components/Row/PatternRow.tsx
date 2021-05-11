import React from 'react';

const Pattern = () => (
  <li className="pattern-input__row">
    <label htmlFor="pattern--1">ReGex Pattern 1</label>
    <div className="pattern-input__input-group">
      <input type="text" id="pattern--1" placeholder="/.*/g" />
      <button>Remove</button>
    </div>
  </li>
);

export default Pattern;