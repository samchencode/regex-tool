import React from 'react';

enum PatternRowType {
  PATTERN_ONLY,
  PATTERN_LIST,
  PATTERN_REPLACE,
}

interface PatternRowProps {
  type: PatternRowType;
  onClickRemove: () => void;
}

const Pattern = ({ type, onClickRemove }: PatternRowProps) => (
  <li className="pattern-input__row">
    <div className="pattern-input__input-group pattern-input__input-group--match">
      <label htmlFor="match-pattern-1">ReGex Match 1</label>
      <div className="pattern-input__regex">
        /<input id="match-pattern-1" type="text" placeholder=".*" />/
        <span className="pattern-input__flag">g</span>
        <div className="underline"></div>
      </div>
    </div>
    {type !== PatternRowType.PATTERN_ONLY && (
      <div className="pattern-input__input-group pattern-input__input-group--operation">
        <label htmlFor="operation-pattern-1">ReGex Operation 1</label>
        <input type="text" id="operation-pattern-1" placeholder="$&" />
      </div>
    )}
    <button className="button--transparent" onClick={onClickRemove}>
      <i className="fas fa-times"></i>
    </button>
  </li>
);

export default Pattern;
export { PatternRowType };
