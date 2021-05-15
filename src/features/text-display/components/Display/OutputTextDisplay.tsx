import React from 'react';
import TextDisplay, { TextDisplayType } from './TextDisplay';

interface OutputTextDisplayProps {
  value: string;
}

const CopyButton = () => (
  <button className="text-display__button--copy">Copy</button>
);

const OutputTextDisplay = ({ value }: OutputTextDisplayProps) => {
  return (
    <TextDisplay
      type={TextDisplayType.OUTPUT}
      value={value}
      after={value !== '' && <CopyButton />}
      placeholder="Results appear here."
    />
  );
};

export default OutputTextDisplay;
