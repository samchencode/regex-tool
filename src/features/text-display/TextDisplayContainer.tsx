import React from 'react';
import { OutputTextDisplay, InputTextDisplay } from './components/Display';
import './style.css';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { patternSelectors, patternActions, transform } from '../pattern';
import * as regex from '../../lib/regex';

const { selectOperations, selectInput, selectFocus } = patternSelectors;
const { setInput } = patternActions;

enum TextDisplayType {
  LIST,
  REPLACE,
  INPUT_ONLY,
}

interface TextDisplayContainerProps {
  type: TextDisplayType;
}

const TextDisplayContainer = ({ type }: TextDisplayContainerProps) => {
  const dispatch = useAppDispatch();
  const isListMode = type === TextDisplayType.LIST;

  const input = useAppSelector(selectInput);
  const focusIdx = useAppSelector(selectFocus);

  const ops = useAppSelector(selectOperations);

  const results = transform({
    input,
    transforms: ops.map((op) => ({
      formatter: isListMode ? regex.list : regex.replace,
      pattern: op.pattern,
      flags: op.flags,
      format: isListMode ? op.listFormat : op.replace,
    })),
  });

  const output = results[results.length - 1]?.result ?? input;

  const focusOp = ops[focusIdx];

  const inputValue = [-1, 0].includes(focusIdx) 
  ? input
  : results[focusIdx - 1].result;

  return (
    <div className="text-display__container">
      <InputTextDisplay
        value={inputValue}
        onChange={(v) => dispatch(setInput({ value: v }))}
        pattern={focusOp?.pattern}
        flags={focusOp?.flags}
        color={focusOp?.color}
        readOnly={![-1, 0].includes(focusIdx)}
      />
      {type !== TextDisplayType.INPUT_ONLY && (
        <OutputTextDisplay value={output} />
      )}
    </div>
  );
};

export default TextDisplayContainer;
export { TextDisplayType };
