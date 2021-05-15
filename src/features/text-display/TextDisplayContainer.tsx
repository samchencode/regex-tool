import React, { useState } from 'react';
import { OutputTextDisplay, InputTextDisplay } from './components/Display';
import './style.css';

import { useAppSelector } from '../../app/hooks';
import { patternSelectors } from '../pattern';
import * as regex from '../../lib/regex';

enum TextDisplayType {
  LIST,
  REPLACE,
  INPUT_ONLY,
}

interface TextDisplayContainerProps {
  type: TextDisplayType;
}

const TextDisplayContainer = ({ type }: TextDisplayContainerProps) => {
  const [input, setInput] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, doloremque.'
  );

  const { pattern, flags, listFormat, replace } = useAppSelector(
    patternSelectors.selectOperations
  )[0];
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
      <InputTextDisplay value={input} onChange={setInput} />
      {type !== TextDisplayType.INPUT_ONLY && (
        <OutputTextDisplay value={result} />
      )}
    </div>
  );
};

export default TextDisplayContainer;
export { TextDisplayType };
