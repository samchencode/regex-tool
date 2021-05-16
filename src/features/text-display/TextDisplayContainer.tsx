import React from 'react';
import { OutputTextDisplay, InputTextDisplay } from './components/Display';
import './style.css';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { patternSelectors, patternActions } from '../pattern';
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
  const { pattern, flags, listFormat, replace } =
    useAppSelector(selectOperations)[0];
  const format = type === TextDisplayType.LIST ? listFormat : replace;
  const formatter = type === TextDisplayType.LIST ? regex.list : regex.replace;

  let result: string;
  try {
    result = formatter(pattern, flags, input, format);
  } catch (e) {
    result = e.message;
  }

  return (
    <div className="text-display__container">
      <InputTextDisplay value={input} onChange={(v) => dispatch(setInput({value: v}))} />
      {type !== TextDisplayType.INPUT_ONLY && (
        <OutputTextDisplay value={result} />
      )}
    </div>
  );
};

export default TextDisplayContainer;
export { TextDisplayType };
