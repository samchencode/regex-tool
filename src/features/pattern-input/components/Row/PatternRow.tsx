import React from 'react';
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
  color: string,
  onClickRemove: () => void;
  onChangePattern: (pattern: string) => void;
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
  onClickRemove,
  onChangePattern,
  onChangeListFormat,
  onChangeReplace,
}: PatternRowProps) => {
  const isListType = type === PatternRowType.PATTERN_LIST;
  const operationValue = isListType ? listFormat : replace;
  const operationHandleChange = isListType
    ? onChangeListFormat
    : onChangeReplace;

  return (
    <li className="pattern-input__row">
      <i className="pattern-input__color-indicator" style={{'background': color}}></i>
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
          /<span className="pattern-input__flag">{flags.join('')}</span>
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
            onChange={e => operationHandleChange(e.target.value)}
          />
        </div>
      )}
      <button className="button--transparent" onClick={onClickRemove}>
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

export default Pattern;
export { PatternRowType };
