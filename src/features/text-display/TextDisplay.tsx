import React from 'react';
import './style.css';

enum TextDisplayType {
  INPUT,
  OUTPUT,
}

interface TextDisplayProps {
  type: TextDisplayType;
}

const TextDisplay = (props: TextDisplayProps) => {
  const isInput = props.type === TextDisplayType.INPUT;

  return (
    <div
      className={[
        'text-display',
        isInput ? 'text-display--input' : 'text-display--output',
      ].join(' ')}
    >
      <h3 className="text-display__label">{isInput ? 'Input' : 'Output'}</h3>
      <div className="text-display__content">
        {isInput && (
          <div className="text-display__highlight-overlay">
            <mark>Lorem ipsum dolor</mark> sit amet consectetur adipisicing
            elit. Quod, nesciunt? A consequatur, porro at <mark>ex quod</mark>{' '}
            hic placeat non amet?
          </div>
        )}
        <textarea
          className="text-display__top"
          placeholder="Input text to search..."
          readOnly={!isInput}
          onChange={e => null}
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nesciunt?
          A consequatur, porro at ex quod hic placeat non amet?"
        />
      </div>
      {/* TODO: make sure Output box isn't empty before displaying button */}
      {!isInput && <button className="text-display__button--copy">Copy</button>}
    </div>
  );
};

export default TextDisplay;
export { TextDisplayType };
