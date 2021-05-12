import React from 'react';
import TextDisplay, { TextDisplayType } from './TextDisplay';
import './style.css';

const TextDisplayContainer = () => (
  <div className="text-display__container">
    <TextDisplay type={TextDisplayType.INPUT} />
    <TextDisplay type={TextDisplayType.OUTPUT} />
  </div>
);

export default TextDisplayContainer;
