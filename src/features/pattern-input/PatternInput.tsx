import React from 'react';
import { PatternRow, ButtonRow, PatternRowType } from './components/Row';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { patternActions, patternSelectors } from '../pattern';
import './style.css';

const {
  add,
  remove,
  setPattern,
  setListFormat,
  setReplace,
} = patternActions;

const { selectOperations } = patternSelectors;

interface PatternInputProps {
  type: PatternRowType;
}

const PatternInput = ({ type }: PatternInputProps) => {
  const rows = useAppSelector(selectOperations);
  const dispatch = useAppDispatch();

  return (
    <form className="pattern-input">
      <ul className="pattern-input__list">
        {rows.map(({ id, pattern, flags, listFormat, replace, color }) => (
          <PatternRow
            key={id}
            type={type}
            pattern={pattern}
            flags={flags}
            listFormat={listFormat}
            replace={replace}
            color={color}
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
