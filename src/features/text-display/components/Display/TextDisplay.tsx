import React from 'react';
import type { SplitStringRange } from '../../splitStringAtPairedIndicies';
import '../../style.css';

enum TextDisplayType {
  INPUT,
  OUTPUT,
}

interface TextDisplayProps {
  type: TextDisplayType;
  value: string;
  placeholder?: string;
  onChange?: (newValue: string) => void;
  onScroll?: () => void;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const TextDisplay = React.forwardRef<null, TextDisplayProps>(({
  type,
  value,
  placeholder,
  onChange,
  onScroll,
  before,
  after,
}: TextDisplayProps, ref) => {
  const isInput = type === TextDisplayType.INPUT;

  return (
    <div
      className={[
        'text-display',
        isInput ? 'text-display--input' : 'text-display--output',
      ].join(' ')}
    >
      <h3 className="text-display__label">{isInput ? 'Input' : 'Output'}</h3>
      <div className="text-display__content">
        {before}
        <textarea
          className="text-display__top"
          ref={ref}
          placeholder={placeholder}
          readOnly={!isInput}
          onScroll={onScroll}
          onChange={onChange && ((e) => onChange(e.target.value))}
          value={value}
        />
      </div>
      {after}
    </div>
  );
});

export default TextDisplay;
export { TextDisplayType };
