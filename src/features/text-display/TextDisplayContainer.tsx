import React from 'react';
import TextDisplay from './TextDisplay';
import './style.css';

const TextDisplayContainer = () => (
  <div className="text-display__container">
    <TextDisplay type="input" />
    <TextDisplay type="output" />
  </div>
);

export default TextDisplayContainer;
