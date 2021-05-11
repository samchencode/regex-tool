import React from 'react';
import './style.css';

const TextDisplay = () => (
  <div className="text-display__container">
    <h3 className="text-display__label">Input</h3>
    <div className="text-display">
      <textarea
        className="text-display__input"
        placeholder="Input text to search..."
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, vero.
      </textarea>
      <textarea className="text-display__highlight-overlay">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, vero.
      </textarea>
    </div>
  </div>
);

export default TextDisplay;