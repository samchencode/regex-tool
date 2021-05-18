import React from 'react';
import TextDisplay, { TextDisplayType } from './TextDisplay';
import copy from '../../../../lib/copy';

interface OutputTextDisplayProps {
  value: string;
}

const CopyButton = ({ value }: { value: string }) => (
  <button className="text-display__button--copy" onClick={() => copy(value)}>
    Copy
  </button>
);

const OutputTextDisplay = ({ value }: OutputTextDisplayProps) => {
  return (
    <TextDisplay
      type={TextDisplayType.OUTPUT}
      value={value}
      after={value !== '' && <CopyButton value={value} />}
      placeholder="Results appear here."
    />
  );
};

export default OutputTextDisplay;
