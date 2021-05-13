import React, { useRef } from 'react';
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
  const overlayRef = useRef(null);
  const textAreaRef = useRef(null);

  const handleScrollTextArea = () => {
    const overlay = overlayRef.current as unknown as HTMLDivElement;
    const textArea = textAreaRef.current as unknown as HTMLTextAreaElement;
    overlay.scrollTo(textArea.scrollLeft, textArea.scrollTop);
  }

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
          <div className="text-display__highlight-overlay" ref={overlayRef}>
            <mark>Lorem ipsum dolor</mark> sit amet consectetur adipisicing
            elit. Quod, nesciunt? A consequatur, porro at <mark>ex quod</mark>{' '}
            hic placeat non amet?
          </div>
        )}
        <textarea
          className="text-display__top"
          ref={textAreaRef}
          placeholder="Input text to search..."
          readOnly={!isInput}
          onScroll={isInput ? handleScrollTextArea : undefined}
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
