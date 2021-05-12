import React from 'react';
import './style.css';

interface TextDisplayProps {
  type: 'input' | 'output';
}

const TextDisplay = (props: TextDisplayProps) => {
  const isInput = props.type === 'input';

  return (
    <div
      className={[
        'text-display',
        isInput
          ? 'text-display--input'
          : 'text-display--output',
      ].join(' ')}
    >
      <h3 className="text-display__label">{isInput ? 'Input' : 'Output'}</h3>
      <div className="text-display__content">
        <textarea
          className="text-display__top"
          placeholder="Input text to search..."
          readOnly={!isInput}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          vero.
        </textarea>
        <textarea className="text-display__highlight-overlay">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          vero.
        </textarea>
      </div>
    </div>
  );
};

export default TextDisplay;
