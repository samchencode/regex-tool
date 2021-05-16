import React, { useRef } from 'react';
import TextDisplay, { TextDisplayType } from './TextDisplay';
import * as regex from '../../../../lib/regex';
import split from '../../splitStringAtPairedIndicies';
import HighlightOverlay from '../HighlightOverlay';

interface InputTextDisplayProps {
  value: string;
  pattern: string;
  flags: string[];
  color: string;
  readOnly: boolean;
  onChange: (str: string) => void;
}

const InputTextDisplay = ({ value, pattern, flags, color, onChange, readOnly }: InputTextDisplayProps) => {

  let matches: any[] = [];
  try {
    matches = regex.match(pattern, flags, value);
  } catch (e) {
    matches = [];
  }

  const highlightRanges = split(
    value,
    matches.map((m) => [m.startIdx, m.endIdx])
  );

  const overlayRef = useRef(null);
  const textareaRef = useRef(null);

  const handleScroll = () => {
    const overlay = overlayRef.current as unknown as HTMLDivElement;
    const textArea = textareaRef.current as unknown as HTMLTextAreaElement;
    overlay.scrollTo(textArea.scrollLeft, textArea.scrollTop);
  };

  return (
    <TextDisplay
      type={TextDisplayType.INPUT}
      value={value}
      placeholder="Input text to search here."
      ref={textareaRef}
      onChange={onChange}
      onScroll={handleScroll}
      readOnly={readOnly}
      before={
        <HighlightOverlay
          ref={overlayRef}
          highlightRanges={highlightRanges}
          highlightColor={color ?? '#FFFFFF'}
        />
      }
    />
  );
};

export default InputTextDisplay;
