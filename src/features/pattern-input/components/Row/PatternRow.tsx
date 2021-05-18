import React, { useState } from 'react';
import FlagSelector from '../FlagSelector';
import './PatternRow.css';
import './Row.css';

enum PatternRowType {
  PATTERN_ONLY,
  PATTERN_LIST,
  PATTERN_REPLACE,
}

interface PatternRowProps {
  type: PatternRowType;
  pattern: string;
  flags: string[];
  listFormat: string;
  replace: string;
  color: string;
  focus: boolean;
  onClick: () => void;
  onClickRemove: () => void;
  onChangePattern: (pattern: string) => void;
  onChangeFlags: (flags: string[]) => void;
  onChangeListFormat: (listFormat: string) => void;
  onChangeReplace: (replace: string) => void;
}

const Pattern = ({
  type,
  pattern,
  flags,
  listFormat,
  replace,
  color,
  focus,
  onClick,
  onClickRemove,
  onChangePattern,
  onChangeFlags,
  onChangeListFormat,
  onChangeReplace,
}: PatternRowProps) => {
  const isListType = type === PatternRowType.PATTERN_LIST;
  const operationValue = isListType ? listFormat : replace;
  const operationHandleChange = isListType
    ? onChangeListFormat
    : onChangeReplace;

  const [flagMenuVisible, setFlagMenuVisible] = useState(false);

  return (
    <li
      className="pattern-input__row"
      onClick={onClick}
      style={{ ...(focus && { boxShadow: `inset 0 0 0px 2px ${color}` }) }}
    >
      <i
        className="pattern-input__color-indicator"
        style={{ background: color }}
      ></i>
      <div className="pattern-input__input-group pattern-input__input-group--match">
        <label htmlFor="match-pattern-1">Regex Pattern</label>
        <div className="pattern-input__regex">
          /
          <input
            id="match-pattern-1"
            type="text"
            placeholder="<Regex Pattern Here>"
            value={pattern}
            onChange={(e) => onChangePattern(e.target.value)}
          />
          /
          <span className="pattern-input__flag">
            <span onClick={() => setFlagMenuVisible(!flagMenuVisible)}>
              {flags.join('')}
            </span>
            <FlagSelector
              visible={flagMenuVisible}
              flags={flags}
              onChangeFlags={onChangeFlags}
            />
          </span>
          <div className="underline"></div>
        </div>
      </div>
      {type !== PatternRowType.PATTERN_ONLY && (
        <div className="pattern-input__input-group pattern-input__input-group--operation">
          <label htmlFor="operation-pattern-1">Regex Operation</label>
          <input
            type="text"
            id="operation-pattern-1"
            placeholder={
              isListType ? '<List Formatting Here>' : '<Replace-With Here>'
            }
            value={operationValue}
            onChange={(e) => operationHandleChange(e.target.value)}
          />
        </div>
      )}
      <button
        className="button--transparent"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClickRemove();
        }}
      >
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

export default Pattern;
export { PatternRowType };
