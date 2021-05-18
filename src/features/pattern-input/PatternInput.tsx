import React from 'react';
import { PatternRow, ButtonRow, PatternRowType } from './components/Row';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { patternActions, patternSelectors } from '../pattern';
import './style.css';

const { add, remove, setPattern, setListFormat, setReplace, setFocus, setFlags } =
  patternActions;

const { selectOperations, selectFocus } = patternSelectors;

interface PatternInputProps {
  type: PatternRowType;
}

const PatternInput = ({ type }: PatternInputProps) => {
  const rows = useAppSelector(selectOperations);
  const dispatch = useAppDispatch();

  const focusIdx = useAppSelector(selectFocus);

  return (
    <form className="pattern-input">
      <ul className="pattern-input__list">
        {rows.map(({ id, pattern, flags, listFormat, replace, color }, idx) => (
          <PatternRow
            key={id}
            type={type}
            pattern={pattern}
            flags={flags}
            listFormat={listFormat}
            replace={replace}
            color={color}
            focus={focusIdx === idx}
            onClick={() => dispatch(setFocus({ idx }))}
            onClickRemove={() => dispatch(remove({ id }))}
            onChangePattern={(pattern: string) => {
              dispatch(setPattern({ id, pattern }))
            }}
            onChangeFlags={(flags: string[]) => {
              dispatch(setFlags({ id, flags }))
            }}
            onChangeListFormat={(listFormat: string) =>
              dispatch(setListFormat({ id, listFormat }))
            }
            onChangeReplace={(replace: string) =>
              dispatch(setReplace({ id, replace }))
            }
          />
        ))}
        <ButtonRow onClick={() => dispatch(add())} />
      </ul>
    </form>
  );
};

export default PatternInput;
