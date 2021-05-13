import React from 'react';
import { PatternRow, ButtonRow, PatternRowType } from './components/Row';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  add,
  remove,
  setPattern,
  setListFormat,
  setReplace,
  selectOperations,
} from './patternSlice';
import './style.css';

interface PatternInputProps {
  type: PatternRowType;
}

const PatternInput = ({ type }: PatternInputProps) => {
  const rows = useAppSelector(selectOperations);
  const dispatch = useAppDispatch();

  return (
    // eslint-disable-next-line no-script-url
    <form className="pattern-input" action="javascript:void(0);">
      <ul className="pattern-input__list">
        {rows.map(({ id, pattern, flags, listFormat, replace }) => (
          <PatternRow
            key={id}
            type={type}
            pattern={pattern}
            flags={flags}
            listFormat={listFormat}
            replace={replace}
            onClickRemove={() => dispatch(remove({ id }))}
            onChangePattern={(pattern: string) => dispatch(setPattern({ id, pattern }))}
            onChangeListFormat={(listFormat: string) => dispatch(setListFormat({ id, listFormat }))}
            onChangeReplace={(replace: string) => dispatch(setReplace({ id, replace }))}
          />
        ))}
        <ButtonRow onClick={() => dispatch(add())} />
      </ul>
    </form>
  );
};

export default PatternInput;
