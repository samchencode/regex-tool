import React from 'react';
import { OutputTextDisplay, InputTextDisplay } from './components/Display';
import './style.css';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { patternSelectors, patternActions, transform } from '../pattern';
import * as regex from '../../lib/regex';

const { selectOperations, selectInput } = patternSelectors;
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

  const input = useAppSelector(selectInput);
  const formatter = type === TextDisplayType.LIST ? regex.list : regex.replace;

  const ops = useAppSelector(selectOperations);
  const results = transform({
    input,
    transforms: ops.map(op => ({
      formatter,
      pattern: op.pattern,
      flags: op.flags,
      format: type === TextDisplayType.LIST ? op.listFormat : op.replace,
    }))
  });

  const output = results[results.length - 1]?.result ?? input;

  return (
    <div className="text-display__container">
      <InputTextDisplay value={input} onChange={(v) => dispatch(setInput({value: v}))} />
      {type !== TextDisplayType.INPUT_ONLY && (
        <OutputTextDisplay value={output} />
      )}
    </div>
  );
};

export default TextDisplayContainer;
export { TextDisplayType };
