import React from 'react';
import TextDisplay, { TextDisplayType } from './TextDisplay';

interface OutputTextDisplayProps {
  value: string;
}

const OutputTextDisplay = ({ value }: OutputTextDisplayProps) => {
  return <TextDisplay type={TextDisplayType.OUTPUT} value={value} />;
};

export default OutputTextDisplay;
