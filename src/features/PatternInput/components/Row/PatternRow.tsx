import React from 'react';

const Pattern = () => (
  <li className="pattern-input__row">
    <div className="pattern-input__input-group pattern-input__input-group--match">
      <label htmlFor="match-pattern-1">ReGex Match 1</label>
      <input type="text" id="match-pattern-1" placeholder="/.*/g" />
    </div>
    <div className="pattern-input__input-group pattern-input__input-group--operation">
      <label htmlFor="operation-pattern-1">ReGex Operation 1</label>
      <input type="text" id="operation-pattern-1" placeholder="$&" />
    </div>
    <button className="button--transparent"><i className="fas fa-times"></i></button>
  </li>
);

export default Pattern;