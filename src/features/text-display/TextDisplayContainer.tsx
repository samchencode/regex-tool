import React, { useState } from 'react';
import { OutputTextDisplay, InputTextDisplay } from './components/Display';
import './style.css';

import { useAppSelector } from '../../app/hooks';
import { patternSelectors } from '../pattern-input';
import * as regex from '../../lib/regex';

interface TextDisplayContainerProps {
  inputOnly?: boolean;
}

const TextDisplayContainer = ({
  inputOnly = false,
}: TextDisplayContainerProps) => {



  return (
    <div className="text-display__container">
      <InputTextDisplay />
      {!inputOnly && <OutputTextDisplay value={'Output Here'} />}
    </div>
  );
};

export default TextDisplayContainer;
