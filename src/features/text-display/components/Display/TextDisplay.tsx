import React, { useRef } from 'react';
import type { SplitStringRange } from '../../splitStringAtPairedIndicies';
import '../../style.css';

enum TextDisplayType {
  INPUT,
  OUTPUT,
}

interface TextDisplayProps {
  type: TextDisplayType;
  value: string;
  onChange: (newValue: string) => void;
  highlightRanges?: SplitStringRange[];
  highlightColor?: string;
}

const TextDisplay = ({
  type,
  value,
  onChange,
  highlightRanges,
  highlightColor,
}: TextDisplayProps) => {
  const isInput = type === TextDisplayType.INPUT;
  const overlayRef = useRef(null);
  const textAreaRef = useRef(null);

  const handleScrollTextArea = () => {
    const overlay = overlayRef.current as unknown as HTMLDivElement;
    const textArea = textAreaRef.current as unknown as HTMLTextAreaElement;
    overlay.scrollTo(textArea.scrollLeft, textArea.scrollTop);
  };

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
            {highlightRanges &&
              highlightRanges.map(({ inRange, value }, k) =>
                inRange ? (
                  <mark key={k} style={{ background: highlightColor }}>
                    {value}
                  </mark>
                ) : (
                  <span key={k}>{value}</span>
                )
              )}
          </div>
        )}
        <textarea
          className="text-display__top"
          ref={textAreaRef}
          placeholder="Input text to search..."
          readOnly={!isInput}
          onScroll={isInput ? handleScrollTextArea : undefined}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>
      {!isInput && value !== '' && (
        <button className="text-display__button--copy">Copy</button>
      )}
    </div>
  );
};

export default TextDisplay;
export { TextDisplayType };
