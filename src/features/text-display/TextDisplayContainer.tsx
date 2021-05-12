import React from 'react';
import TextDisplay, { TextDisplayType } from './TextDisplay';
import './style.css';

interface TextDisplayContainerProps {
  inputOnly?: boolean;
}

const TextDisplayContainer = ({ inputOnly = false }: TextDisplayContainerProps) => (
  <div className="text-display__container">
    <TextDisplay type={TextDisplayType.INPUT} />
    {!inputOnly && <TextDisplay type={TextDisplayType.OUTPUT} />}
  </div>
);

export default TextDisplayContainer;
