import React from 'react';
import { OutputTextDisplay, InputTextDisplay } from './components/Display';
import './style.css';

interface TextDisplayContainerProps {
  inputOnly?: boolean;
}

const TextDisplayContainer = ({ inputOnly = false }: TextDisplayContainerProps) => (
  <div className="text-display__container">
    <InputTextDisplay />
    {!inputOnly && <OutputTextDisplay />}
  </div>
);

export default TextDisplayContainer;
