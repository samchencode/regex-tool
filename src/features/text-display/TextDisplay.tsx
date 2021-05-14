import React, { useRef, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { patternSelectors } from '../pattern-input';
import * as regex from '../../lib/regex';
import split from './splitStringAtPairedIndicies';
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
  };

  const [value, setValue] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nesciunt?' +
      'A consequatur, porro at ex quod hic placeat non amet?'
  );

  const ops = useAppSelector(patternSelectors.selectOperations);

  let matches: any[] = [];
  try {
    matches = regex.match(ops[0].pattern, ops[0].flags, value);
    if(ops[0].pattern === '') console.log(matches);
  } catch (e) {
    matches = [];
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
            { matches.length > 0 && split(value, matches.map(m => [m.startIdx, m.endIdx])).map(({inRange, value}) => inRange 
            ? <mark style={{background: ops[0].color}}>{value}</mark>
            : <span>{value}</span>) 
            }
          </div>
        )}
        <textarea
          className="text-display__top"
          ref={textAreaRef}
          placeholder="Input text to search..."
          readOnly={!isInput}
          onScroll={isInput ? handleScrollTextArea : undefined}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      {/* TODO: make sure Output box isn't empty before displaying button */}
      {!isInput && <button className="text-display__button--copy">Copy</button>}
    </div>
  );
};

export default TextDisplay;
export { TextDisplayType };
